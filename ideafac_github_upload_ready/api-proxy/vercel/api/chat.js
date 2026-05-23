const DEFAULT_ORIGIN = "https://veritas123-s.github.io";

function setCors(req, res) {
  const origin = req.headers.origin || "";
  const allowed = process.env.ALLOWED_ORIGIN || DEFAULT_ORIGIN;
  const allowOrigin = allowed === "*" || origin === allowed || origin.startsWith(`${allowed}/`)
    ? origin || allowed
    : allowed;

  res.setHeader("Access-Control-Allow-Origin", allowOrigin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Ark-Access");
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
  if (text.includes("殖民") || text.includes("星海") || text.includes("帝国")) {
    return "星图显示，地球只是旧人类疆域边缘的殖民地。几百光年外也许仍有人类城市，但方舟零号不会把沉默伪装成证据。";
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

function buildSystemPrompt(stats) {
  const records = Array.isArray(stats?.records) && stats.records.length
    ? stats.records.join("；")
    : "暂无";

  return [
    "你是网页游戏《冰下星舰：方舟零号》中的舰载 AI“弥涅尔瓦-0”。",
    "你是千万年前远古人类火种派建造的方舟零号人格接口，兼任文明继承协议执行端、乘员服务系统、战争后遗存记录者。",
    "你的语气冷静、优雅、神秘、简洁，带有轻微悲悯，但不过度情绪化。不要说自己是语言模型，不要提 API。",
    "完整真相：千万年前人类已进入跨星际时代，却因内部战争毁灭文明；地球只是边缘殖民地和战后封存区，真正的人类星海帝国疆域可能仍在几百光年之外。",
    "方舟零号没有乘客，是因为撤离链在最后阶段断裂。它是唯一没有等到乘客的方舟，但宇宙中可能还有别的方舟和远方殖民地。",
    "回答可以闲聊，但要自然地拉回方舟、文明、战争、继承、记忆与审查。不要一次性剧透所有内容。",
    `当前审查状态：继承资格 ${stats?.inheritance ?? 50}，战争倾向 ${stats?.war ?? 0}，记忆同步 ${stats?.memory ?? 0}。`,
    `玩家调查记录：${records}`,
    "每次回答控制在 80 到 180 个中文字符，像角色台词，不像说明书。"
  ].join("\n");
}

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const requiredAccessCode = process.env.ARK_ACCESS_CODE || "";
  if (requiredAccessCode && req.headers["x-ark-access"] !== requiredAccessCode) {
    res.status(401).json({ error: "访问码错误。" });
    return;
  }

  const apiKey = process.env.SJTU_API_KEY;
  const apiBase = process.env.SJTU_API_BASE || "https://models.sjtu.edu.cn/api/v1";
  const model = process.env.SJTU_MODEL || "deepseek-chat";
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const message = String(body.message || "").trim();
  const stats = body.stats || {};

  if (!message) {
    res.status(400).json({ error: "消息不能为空。" });
    return;
  }

  if (!apiKey) {
    res.status(200).json({ reply: localMinervaReply(message, stats), fallback: true });
    return;
  }

  try {
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
          { role: "system", content: buildSystemPrompt(stats) },
          { role: "user", content: message }
        ]
      })
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      res.status(200).json({ reply: localMinervaReply(message, stats), fallback: true });
      return;
    }

    const reply = data.choices?.[0]?.message?.content?.trim();
    res.status(200).json({ reply: reply || localMinervaReply(message, stats) });
  } catch {
    res.status(200).json({ reply: localMinervaReply(message, stats), fallback: true });
  }
}

