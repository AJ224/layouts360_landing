# Indexing policy — meaningful pages only

Code: [`lib/indexing-policy.ts`](../../lib/indexing-policy.ts), [`lib/content-quality.ts`](../../lib/content-quality.ts), [`lib/site-seo.ts`](../../lib/site-seo.ts).

## Indexed (sitemap + `index, follow`)

| Type | URLs |
|------|------|
| Core marketing | `/`, `/pricing`, `/contact`, `/faq`, `/blog`, `/features` |
| SEO landings | 6× `/real-estate-*` and `/commercial-real-estate-software` |
| Guides | Blog posts with **≥400 words** body content |
| Comparisons | Compare articles with **≥400 words** (all current posts qualify) |

## Not indexed (`noindex, follow` — still linked for users)

| URL | Reason |
|-----|--------|
| `/compare` | Redirect stub → `/blog#comparisons` |
| `/features/[slug]` | Thin vs hub; canonical discovery via `/features` |
| `/blog/why-pdf-maps-kill-sales` | &lt;400 words — expand or merge before indexing |

## Never indexed (blocked)

| Path | Mechanism |
|------|-----------|
| `/api/*` | `robots.txt` disallow |

## Canonical host (www)

Production canonical is **non-www**: `https://layouts360.com`

- `www.layouts360.com` → 301 → `layouts360.com` (middleware + `next.config.mjs`)
- Sitemap, `metadataBase`, and all `canonical` tags use `lib/site-seo.ts` → `absoluteUrl()`

In Vercel: set **Primary Domain** to `layouts360.com` and redirect `www` to apex.

## Duplicates handled elsewhere

- `/blog/{compare-slug}` → 301 → `/compare/{compare-slug}`
- `/compare` → 301 → `/blog#comparisons`
- Short aliases → canonical landings (e.g. `/plot-management-software` → `/real-estate-plot-management-software`, `/plot-booking-software` → `/online-plot-booking-software`, `/plot-layout-software` → `/layout-management-software`)

## CRM URL roles (avoid cannibalization)

| URL | Role | Owns |
|-----|------|------|
| `/real-estate-crm-software` | Product pillar | “real estate CRM software” |
| `/real-estate-crm` | Educational guide | “what is real estate CRM” / practices |
| `/best-real-estate-crm-software` | Buyer’s guide | “best real estate CRM software in India” |
| `/real-estate-client-management-software` | Buyer lifecycle | “client management software” (not CRM software) |
| `/blog/what-is-real-estate-crm-software` | Long-form supporting | Deep “what is” content |

Do **not** 301 CRM software → client management. Those intents stay separate.

## Before adding a new URL

1. Unique, useful content (not boilerplate).
2. Mobile-friendly layout (Tailwind responsive).
3. Article body ≥400 words for blog/compare.
4. Add to sitemap only via `getSitemapEntries()` rules — do not hand-edit `sitemap.xml`.
