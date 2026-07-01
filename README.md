# Portfolio — Next.js

Developer + Designer portfolio built with Next.js 14 (App Router) and TypeScript.

## Run Locally

Requires Node.js 18+. Inside the project folder:

```bash
npm install
npm run dev
```

Open in browser: [http://localhost:3000](http://localhost:3000)

## Customize My Info

All content lives in one file — **`app/data.ts`**

To customize colors: edit the `:root` variables at the top of `app/globals.css`
(`--accent`, `--bg`, etc.)

## Add Photo

1. Place `profile.jpg` / `profile.png` inside the `public/` folder
2. If you don't want a picture, set `photo: ""` in `app/data.ts`

## Deploy

**Vercel** (makers of Next.js) — recommended:

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Repo
3. Click Deploy — it goes live

**Alternative:** Netlify

## Project Structure

```
portfolio/
├── app/
│   ├── data.ts          ← change info
│   ├── page.tsx         ← layout
│   ├── layout.tsx       ← metadata / SEO
│   ├── globals.css      ← styles & colors
│   └── components/
│       └── ScrollReveal.tsx
├── package.json
└── ...config files
```

## Contact Form Setup (via Gmail)

1. Go to [formspree.io](https://formspree.io) and create an account using Gmail
2. Create a new form → copy the endpoint (example: `https://formspree.io/f/abcdwxyz`)
3. In `app/components/ContactForm.tsx`, paste the endpoint ID into `FORMSPREE_ID = ""`:
   ```ts
   FORMSPREE_ID = "abcdwxyz"
   ```