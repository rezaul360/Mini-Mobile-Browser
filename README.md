📱 Mini Mobile Browser

A lightweight desktop browser built with Electron that renders websites in a
fixed mobile-style screen view. Perfect for testing mobile UI, previews, and
lightweight browsing in a controlled viewport.

🚀 Features 📱 Fixed mobile screen (390×740 inside window) 🌐 URL input &
navigation ⬅️ Back / Forward navigation 🔄 Reload page 🏠 Home button 🔒 Window
resize disabled ⚡ Lightweight Electron-based app 🖥️ Installable Windows .exe
build support 🧰 Tech Stack Electron HTML CSS JavaScript Node.js 📂 Project
Structure mini-mobile-browser/ │ ├── main.js ├── preload.js ├── package.json │
├── src/ │ ├── index.html │ ├── style.css │ └── renderer.js │ └── assets/ ⚙️
Installation

1. Clone the project git clone <your-repo-url> cd mini-mobile-browser
2. Install dependencies npm install ▶️ Run in development mode npm start 🏗️
   Build for Windows (.exe) npm run build

👉 Output will be in:

dist/ 📦 What this app does

This app behaves like a mini mobile emulator browser:

You enter any URL It loads inside a fixed mobile frame You cannot resize the
window Great for mobile UI testing or lightweight browsing 🎯 Use Cases Mobile
website testing UI/UX preview in mobile frame Lightweight browser tool Embedded
web app viewer Demo kiosk app ⚠️ Notes Electron must be in devDependencies
Requires internet connection for loading websites Designed for Windows (NSIS
installer) 🔮 Future Improvements (v1.1+) Tabs system User-Agent switcher
(iPhone / Android) Dark mode UI Bookmark system Screenshot tool Incognito mode
👨‍💻 Author

Rezaul Karim

⭐ If you like this project

Give it a star ⭐ and keep improving it step by step.
