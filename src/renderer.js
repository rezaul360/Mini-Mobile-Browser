const urlInput = document.getElementById("urlInput");
const openBtn = document.getElementById("openBtn");

const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const reloadBtn = document.getElementById("reloadBtn");
const homeBtn = document.getElementById("homeBtn");

const webview = document.getElementById("webview");

const HOME_URL = "https://example.com";

function loadURL() {
  let url = urlInput.value.trim();
  if (!url) return;

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  webview.loadURL(url);
}

openBtn.addEventListener("click", loadURL);

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    loadURL();
  }
});

// Navigation controls
backBtn.addEventListener("click", () => {
  if (webview.canGoBack()) webview.goBack();
});

forwardBtn.addEventListener("click", () => {
  if (webview.canGoForward()) webview.goForward();
});

reloadBtn.addEventListener("click", () => {
  webview.reload();
});

homeBtn.addEventListener("click", () => {
  webview.loadURL(HOME_URL);
  urlInput.value = HOME_URL;
});
