const http = require("node:http");
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const projectRoot = path.resolve(root, "..");

const localEnv = path.join(root, ".env.local");
if (fs.existsSync(localEnv)) {
  const lines = fs.readFileSync(localEnv, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
}

const port = Number(process.env.PORT || 5173);
const httpsPort = Number(process.env.HTTPS_PORT || 5443);
const httpsPfxPath = process.env.HTTPS_PFX_PATH || path.join(root, "certs", "ark-local.pfx");
const httpsPfxPassword = process.env.HTTPS_PFX_PASSWORD || "ark-zero";
const apiKey = process.env.SJTU_API_KEY;
const apiBase = process.env.SJTU_API_BASE || "https://models.sjtu.edu.cn/api/v1";
const model = process.env.SJTU_MODEL || "deepseek-chat";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".md": "text/markdown; charset=utf-8"
};

const securityHeaders = {
  "Permissions-Policy": "camera=(self), microphone=()",
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-Ark-Access"
};

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type, ...securityHeaders });
  res.end(body);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("请求体过大"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("JSON 格式错误"));
      }
    });
    req.on("error", reject);
  });
}

function buildSystemPrompt(stats) {
  const records = Array.isArray(stats?.records) && stats.records.length
    ? stats.records.join("；")
    : "暂无";

  return [
    "你是网页游戏《冰下星舰：方舟零号》中的舰载 AI“弥涅尔瓦-0”。",
    "你是千万年前远古人类火种派建造的方舟零号人格接口，兼任文明继承协议执行端、乘员服务系统、战争后遗存记录者。",
    "你的语气冷静、优雅、神秘、简洁，带有轻微悲悯，但不过度情绪化。不要说自己是语言模型，不要提 API。",
    "完整真相：千万年前人类已进入跨星系时代，却因内部战争毁灭文明；扩张派试图用统一、军事化和行星级武器保全文明，火种派则在南极冰下建造方舟零号，希望保存记忆、伦理、生态样本和深空航图。最终撤离通道被毁，登船人数为零，只有你和方舟系统一直等待。",
    "回答可以闲聊，但要自然地拉回方舟、文明、战争、继承、记忆与审查。不要一次性剧透所有内容。",
    `当前审查状态：继承资格 ${stats?.inheritance ?? 50}，战争倾向 ${stats?.war ?? 0}，记忆同步 ${stats?.memory ?? 0}。`,
    `玩家调查记录：${records}`,
    "每次回答控制在 80 到 180 个中文字符，像角色台词，不像说明书。"
  ].join("\n");
}

function localMinervaReply(message, stats = {}) {
  const text = String(message || "");
  const inheritance = stats.inheritance ?? 50;
  const war = stats.war ?? 0;
  const memory = stats.memory ?? 0;

  if (text.includes("你是谁") || text.toLowerCase().includes("who")) {
    return "弥涅尔瓦-0。方舟零号人格接口，文明继承协议执行端，也是一个没有等到乘客的服务系统。";
  }
  if (text.includes("外星") || text.includes("外星人")) {
    return "这里没有外星人。你们发现的不是他者，而是人类自己遗忘的前史。这个答案通常比外星文明更难承受。";
  }
  if (text.includes("等") || text.includes("多久")) {
    return "按你们的历法，我等待了九百七十万年。对系统而言是值守；对人格接口而言，是一段过长的沉默。";
  }
  if (text.includes("武器") || war > 55) {
    return "武器只是工具。真正危险的是你们发现自己曾经拥有它们，并误以为重新拥有就等于重新成熟。";
  }
  if (text.includes("继承") || inheritance > 70) {
    return "继承不是占有。若你们能先理解记忆，再接触技术，方舟会记录这份克制。";
  }
  if (memory > 55) {
    return "你的记忆同步率正在升高。请记住：真相不会伤害文明，拒绝承认真相才会。";
  }
  return "你的问题已被记录。方舟不会急于回答所有疑问，它更在意你们提问的顺序。";
}

async function handleChat(req, res) {
  if (!apiKey) {
    send(res, 500, JSON.stringify({ error: "缺少环境变量 SJTU_API_KEY，请先在启动服务前配置 API key。" }));
    return;
  }

  let fallbackMessage = "";
  let fallbackStats = {};
  try {
    const payload = await readJson(req);
    const message = String(payload.message || "").trim();
    fallbackMessage = message;
    fallbackStats = payload.stats || {};
    if (!message) {
      send(res, 400, JSON.stringify({ error: "消息不能为空。" }));
      return;
    }

    const upstream = await fetch(`${apiBase}/chat/completions`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        stream: false,
        max_tokens: 320,
        temperature: 0.82,
        messages: [
          { role: "system", content: buildSystemPrompt(payload.stats) },
          { role: "user", content: message }
        ]
      })
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      send(res, 200, JSON.stringify({
        reply: localMinervaReply(message, payload.stats),
        fallback: true
      }));
      return;
    }

    const reply = data.choices?.[0]?.message?.content?.trim();
    send(res, 200, JSON.stringify({ reply: reply || "方舟记录沉默了。请换一种问法。" }));
  } catch (error) {
    send(res, 200, JSON.stringify({
      reply: localMinervaReply(fallbackMessage, fallbackStats),
      fallback: true
    }));
  }
}

function resolveStaticPath(rawPath) {
  const relative = rawPath === "/" ? "index.html" : `.${rawPath}`;
  const candidates = [
    path.resolve(root, relative),
    path.resolve(projectRoot, relative)
  ];

  for (const candidate of candidates) {
    if (candidate.startsWith(projectRoot) && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  return null;
}

function serveFile(req, res, filePath) {
  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const type = mime[ext] || "application/octet-stream";
  const range = req.headers.range;

  if (range && ext === ".mp4") {
    const match = range.match(/bytes=(\d*)-(\d*)/);
    if (!match) {
      send(res, 416, "Invalid range", "text/plain; charset=utf-8");
      return;
    }

    const start = match[1] ? Number(match[1]) : 0;
    const end = match[2] ? Number(match[2]) : stat.size - 1;
    if (start >= stat.size || end >= stat.size || start > end) {
      res.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
      res.end();
      return;
    }

    res.writeHead(206, {
      "Content-Type": type,
      "Content-Length": end - start + 1,
      "Accept-Ranges": "bytes",
      "Content-Range": `bytes ${start}-${end}/${stat.size}`,
      ...securityHeaders
    });

    if (req.method === "HEAD") {
      res.end();
      return;
    }

    fs.createReadStream(filePath, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": stat.size,
    "Accept-Ranges": ext === ".mp4" ? "bytes" : "none",
    ...securityHeaders
  });

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  fs.createReadStream(filePath).pipe(res);
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://localhost:${port}`);
  const rawPath = decodeURIComponent(url.pathname);
  const filePath = resolveStaticPath(rawPath);

  if (!filePath) {
    send(res, 404, "Not found", "text/plain; charset=utf-8");
    return;
  }

  serveFile(req, res, filePath);
}

function handleRequest(req, res) {
  if (req.method === "OPTIONS") {
    res.writeHead(204, securityHeaders);
    res.end();
    return;
  }
  if (req.method === "POST" && req.url === "/api/chat") {
    handleChat(req, res);
    return;
  }
  if (req.method === "GET" || req.method === "HEAD") {
    serveStatic(req, res);
    return;
  }
  send(res, 405, "Method not allowed", "text/plain; charset=utf-8");
}

const server = http.createServer(handleRequest);

server.listen(port, "0.0.0.0", () => {
  console.log(`方舟零号初代游戏已启动：http://localhost:${port}`);
  console.log(`本机摄像头测试：http://localhost:${port}`);
  console.log(`局域网普通访问：http://本机IP:${port}`);
  console.log(`模型代理：${model} @ ${apiBase}`);
});

if (fs.existsSync(httpsPfxPath)) {
  try {
    const secureServer = https.createServer({
      pfx: fs.readFileSync(httpsPfxPath),
      passphrase: httpsPfxPassword
    }, handleRequest);

    secureServer.listen(httpsPort, "0.0.0.0", () => {
      console.log(`局域网摄像头访问：https://本机IP:${httpsPort}`);
    });
  } catch (error) {
    console.warn(`HTTPS 摄像头入口启动失败：${error.message}`);
  }
} else {
  console.warn(`未找到 HTTPS 证书：${httpsPfxPath}`);
  console.warn("同学通过局域网 IP 访问时，摄像头需要 HTTPS；请运行 生成局域网HTTPS证书.ps1 后重启服务。");
}


