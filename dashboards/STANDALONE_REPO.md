# Standalone repo + clickable links options

You do **not** need to keep this inside the existing workshop repo.

## Option A (recommended): create a separate local git repo now

From `/workspace/aws_workshop` run:

```bash
bash dashboards/tools/create-standalone-repo.sh
```

This will:
- copy `dashboards/` into `/workspace/creative-dual-dashboards`
- initialize a fresh git repository there
- make the first commit

Then run it independently:

```bash
cd /workspace/creative-dual-dashboards
npm install
npm run dev
```

Open the URL shown by Vite (usually <http://localhost:5173>).  
That is the clickable local link.

## Option B: get a public clickable URL (no localhost)

### Vercel (fastest)

```bash
cd /workspace/creative-dual-dashboards
npx vercel --prod
```

Vercel prints a public URL like `https://your-app.vercel.app`.

### Netlify

```bash
cd /workspace/creative-dual-dashboards
npm run build
npx netlify deploy --prod --dir=dist
```

Netlify prints a public URL like `https://something.netlify.app`.

## Why localhost appears by default

React/Vite is a frontend app. During development it runs on a local dev server (localhost).  
You only get a permanent public clickable URL after deploying to a host (Vercel/Netlify/etc).
