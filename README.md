# Portfolio — Next.js

Developer + Designer portfolio built with Next.js 14 (App Router) and TypeScript.

## Run locally

Must install Node.js 18+ -> Next inside this folder:

```bash
npm install
npm run dev
```

Open browser: http://localhost:3000

## My info -> Customize

Each and every content in this one file — **`app/data.ts`**।

Customize color: `app/globals.css` এর উপরে `:root` এর variable গুলো
(`--accent`, `--bg` ইত্যাদি) বদলাও।

## Add photo

1. `profile.jpg` / `profile.png`
2. If don't not want any picture then `app/data.ts` এ `photo: ""`

## Deploy

**Vercel** (Next.js এর নির্মাতা):

1. GitHub repo -> push 
2. vercel.com -> import repo
3. Click Deploy —> live

alternative: Netlify

## Structure

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

## Contact form —> Gmail

1. https://formspree.io -> create an account by using gmail
2. Create new form —> copy endpoint, example: `https://formspree.io/f/abcdwxyz`।
3. `app/components/ContactForm.tsx` -> `FORMSPREE_ID = ""` here copy and paste the endpoint `FORMSPREE_ID = "abcdwxyz"`।
