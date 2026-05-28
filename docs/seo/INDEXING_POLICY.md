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

## Duplicates handled elsewhere

- `/blog/{compare-slug}` → 301 → `/compare/{compare-slug}`
- `/real-estate-crm-software` → 301 → `/real-estate-client-management-software`
- `/compare` → 302 → `/blog#comparisons`

## Before adding a new URL

1. Unique, useful content (not boilerplate).
2. Mobile-friendly layout (Tailwind responsive).
3. Article body ≥400 words for blog/compare.
4. Add to sitemap only via `getSitemapEntries()` rules — do not hand-edit `sitemap.xml`.
