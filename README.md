# Layouts360 — Marketing Website

Public marketing site for [Layouts360](https://layouts360.com): real estate plot management software for Indian layout developers.

**Production:** https://layouts360.com  
**Canonical host:** `layouts360.com` (www redirects via Vercel + middleware)

## What this repo contains

- Marketing pages (home, features, pricing, contact, FAQ)
- SEO landing pages (plot management, inventory, CRM, accounting, etc.)
- Blog guides and comparison articles (`/blog`, `/compare/[slug]`)
- Demo form API, sitemap, robots.txt, and `llms.txt` for AI discovery

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18, TypeScript, Tailwind CSS 4
- MDX content (`content/blog`, `content/compare`)
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env` / `.env.local` for local demo form notifications (see [`docs/guides/EMAIL_SETUP.md`](./docs/guides/EMAIL_SETUP.md)):

```env
RESEND_API_KEY=
DEMO_REQUESTS_TO=

# Optional: WhatsApp group notify (GOWA) alongside Resend
WHATSAPP_API_URL=
WHATSAPP_API_USER=
WHATSAPP_API_PASSWORD=
WHATSAPP_DEVICE_ID=layouts360
WHATSAPP_NOTIFY_TO=120363412465889059@g.us
WHATSAPP_NOTIFY_CUSTOMER=true
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Regenerate `llms.txt`, then production build |
| `npm run start` | Run production server locally |
| `npm run lint` | ESLint |

## Project structure

```
app/                 # Routes (pages, layouts, API)
components/          # UI and marketing sections
content/blog/        # Guide articles (MDX)
content/compare/     # Comparison articles (MDX)
lib/                 # SEO, blog/compare loaders, pricing config
docs/                # Internal SEO & setup documentation
public/              # Static assets, llms.txt
scripts/             # llms.txt generator, blog tooling
```

## SEO & domains

- URL helpers: [`lib/site-url.ts`](./lib/site-url.ts)
- Sitemap / indexing: [`lib/site-seo.ts`](./lib/site-seo.ts), [`lib/indexing-policy.ts`](./lib/indexing-policy.ts)
- Internal docs: [`docs/README.md`](./docs/README.md)

**Vercel domains:** set `layouts360.com` as Production; redirect `www.layouts360.com` → apex (301).

## Content

- Add guides: `content/blog/*.mdx`
- Add comparisons: `content/compare/*.mdx` (or `node scripts/generate-compare-blogs.mjs`)
- Regenerate AI index: `node scripts/generate-llms-txt.mjs` (runs automatically on `npm run build`)

## License

Private — Layouts360. All rights reserved.
