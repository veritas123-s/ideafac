# ideafac

鬼点子聚集地。  

已接入项目：

1. 《冰下星舰：方舟零号》：AI 交互式网页游戏，路径 `ark-zero/`。

## GitHub Pages 部署

把本目录所有文件上传到 `veritas123-s/ideafac` 仓库的 `main` 分支根目录。GitHub Pages 开启后访问：

```text
https://veritas123-s.github.io/ideafac/
```

游戏入口：

```text
https://veritas123-s.github.io/ideafac/ark-zero/
```

## AI 功能

GitHub Pages 只能托管静态前端，不能保存或调用私有 API key。AI 闲聊需要部署 `api-proxy/vercel` 里的后端代理，并把代理地址填入：

```js
ark-zero/config.js
window.ARK_CHAT_API = "https://你的代理域名/api/chat";
```

API key 只配置在代理平台的环境变量里，不要提交到 GitHub。

