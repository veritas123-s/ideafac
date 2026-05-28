// Public-site runtime configuration.
// Keep this file secret-free. Put model API keys only in the backend proxy.
// After deploying the proxy, replace the empty string with its /api/chat URL.
const ARK_DEPLOYED_CHAT_API = "";

window.ARK_CHAT_API = ARK_DEPLOYED_CHAT_API || (() => {
  const localHosts = new Set(["127.0.0.1", "localhost", "::1"]);
  if (localHosts.has(window.location.hostname)) {
    return "http://127.0.0.1:5173/api/chat";
  }
  return "";
})();
// Optional: if your proxy enables ARK_ACCESS_CODE, set the classroom access code here.
// This is a light gate, not API-key protection. API keys must stay server-side.
window.ARK_ACCESS_CODE = "";

