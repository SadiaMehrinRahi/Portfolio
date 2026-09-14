# Portfolio — "Field Notebook" edition

A completely new design: a researcher's field notebook. Deep slate "cover"
(hero) with warm paper "pages" for the content, a terracotta accent, and
serif headings (Fraunces + Newsreader) with Inter for body text.

Same content engine as before — everything lives in `app/data.ts`.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Edit your content
All text, projects, skills, publications, certifications, volunteering →
`app/data.ts`. Colors → the `:root` block at the top of `app/globals.css`.

## Photo
Put `profile.jpg` in `public/`. It shows as a taped-in photo on the cover.
No photo → your initials show instead.

## Contact form
Set your Formspree ID in `app/components/ContactForm.tsx` (see the comment
at the top of that file) so messages reach your Gmail.

## Theme
Light (paper) by default; the button in the top bar switches to a dark cover.

## New: CV, sharing preview, analytics

### CV download
Put your CV as `public/Sadia_Mehrin_Rahi_CV.pdf` (or change `cvUrl` in
`app/data.ts`). The "Download CV" button on the cover then works. Empty
`cvUrl` hides the button.

### Social share preview (Open Graph)
Add an image `public/og.png` (1200×630) — this is what shows when the site
is shared on LinkedIn / Twitter / WhatsApp. Also add `public/favicon.ico`
for the browser tab icon.

### Visitor analytics (silent, professional)
After deploying on Vercel, enable **Web Analytics** in your Vercel project
dashboard (one click) — it counts visitors privately, no visible counter.
Or run `npm i @vercel/analytics` and add `<Analytics />` from
`@vercel/analytics/react` inside `app/layout.tsx`'s body.

### Research interests & Writing
Both live in `app/data.ts` (`interests` and `blog`). Add your blog URL to
each blog entry's `url` to make the "read the piece →" link appear.
