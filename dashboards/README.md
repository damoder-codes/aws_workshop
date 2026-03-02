# Creative Dual Dashboards

This folder is a React + Vite project containing two mocked UI dashboards:

- **GainQuest**: gamified fitness progression dashboard.
- **Finley**: personable finance companion dashboard (not a robotic advisor tone).

## Quick start

```bash
cd dashboards
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## How to test locally

```bash
cd dashboards
npm install
npm run build
npm run dev
```

- `npm run build` validates that the app compiles for production.
- `npm run dev` is for visual/manual QA in the browser.

## If setup fails in your environment

Enable/check the following:

- **Node.js 18+** (`node -v`)
- **npm registry access** to `https://registry.npmjs.org/`
- **Outbound HTTPS** allowed for package install
- (Optional) Allow Google Fonts if you want exact typography rendering in UI

> Note: data is mocked for now and intended for UI iteration before backend integration.
