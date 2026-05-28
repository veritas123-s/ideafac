# 校园网 Node 代理

如果 SJTU 模型服务只能在校内网络访问，请把这个目录放到一台能访问模型服务的机器上运行。GitHub Pages 前端仍然公开访问，AI 请求会跨域调用这台代理。

## 启动

复制 `.env.local.example` 为 `.env.local`，填入：

```text
SJTU_API_KEY=你的模型服务API key
SJTU_API_BASE=https://models.sjtu.edu.cn/api/v1
SJTU_MODEL=deepseek-chat
PORT=5173
```

然后运行：

```powershell
node .\server.js
```

代理接口：

```text
http://你的校园网机器IP:5173/api/chat
```

如果要让公网 GitHub Pages 调用，必须通过 HTTPS 暴露这个接口，例如校园服务器正式证书、Cloudflare Tunnel、ngrok、frp + HTTPS 反代等。

前端配置位置：

```js
ark-zero/config.js
const ARK_DEPLOYED_CHAT_API = "https://你的代理域名/api/chat";
```

