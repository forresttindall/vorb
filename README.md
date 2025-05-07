#  _    __           __  
# | |  / /___  _____/ /_ 
# | | / / __ \/ ___/ __ \
# | |/ / /_/ / /  / /_/ /
# |___/\____/_/  /_.___/ 

<img width="1034" alt="vorb" src="https://github.com/user-attachments/assets/3f446537-a8e8-4902-878f-94842ecc2d1b" />

## Vorb — Ultra-Fast React + Vite Static App Template, Built with Bun


**Vorb** is a lightning-fast, minimalist static site template built with React and Vite, powered by the Bun runtime.

It’s designed for developers who want total control, zero bloat, and immediate performance — without being locked into a rigid, opinionated framework like Next.js.

---

## Why Vorb?

**Fast by default. Lightweight by design.**  
Vorb gives you everything you need to launch a static site or web app in seconds — and nothing you don’t.

### Key Advantages:

- **No TypeScript**  
  Built for speed and simplicity. Pure JSX/JS.

- **Powered by Bun**  
  Uses Bun for blazing-fast installs, scripts, and development tooling.

- **Vite for Modern DX**  
  Lightning-fast HMR, optimized builds, and native ES module support.

- **Minimal and Flexible**  
  No routing frameworks, no config overhead. Modify or extend however you want.

- **React Without the Bloat**  
  A lean React base without unnecessary wrappers or abstractions.

- **Truly Unopinionated**  
  Vorb doesn’t force you into a specific architecture, folder structure, or dependency chain. Unlike frameworks like Next.js, you're in charge.

---

## Ideal Use Cases

- Static sites and landing pages
- Developer tools
- Web3 frontends and dashboards
- Small, fast SPAs
- Kiosk and embedded apps
- GitHub Pages or IPFS-hosted apps

---

## File Structure

```
vorb/
├── public/
│   └── images/
│       └── vorb.png
├── src/
│   ├── app.css
│   ├── app.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```


---

## Getting Started

### 1. Install Bun

If you haven’t installed Bun yet, you can do so with the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```
### 2. launch a Vorb template

To spin up a new Zap project in seconds:

```bash
bun create-vorb your-app
