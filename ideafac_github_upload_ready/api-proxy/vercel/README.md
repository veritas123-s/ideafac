# 方舟零号 AI 代理

GitHub Pages 不能运行后端，也不能安全保存 API key。本目录用于部署一个小型 HTTPS 代理，前端只访问代理，模型 API key 只存在于代理平台环境变量里。

## Vercel 部署步骤

1. 新建 Vercel 项目，导入本目录 `api-proxy/vercel`。
2. 在 Vercel 项目环境变量中设置：

```text
SJTU_API_KEY=你的模型服务API key
SJTU_API_BASE=https://models.sjtu.edu.cn/api/v1
SJTU_MODEL=deepseek-chat
ALLOWED_ORIGIN=https://veritas123-s.github.io
```

可选轻量访问码：

```text
ARK_ACCESS_CODE=课堂展示访问码
```

3. 部署后得到类似：

```text
https://ark-zero-api.vercel.app/api/chat
```

4. 回到 GitHub Pages 前端，编辑 `ark-zero/config.js`：

```js
window.ARK_CHAT_API = "https://ark-zero-api.vercel.app/api/chat";
window.ARK_ACCESS_CODE = "";
```

如果启用了 `ARK_ACCESS_CODE`，把同一个访问码填入 `window.ARK_ACCESS_CODE`。这只能防止随意调用，不等于真正的密钥保护；真正的 API key 必须只放后端环境变量。

