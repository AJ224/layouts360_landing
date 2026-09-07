# Indexing policy — meaningful pages only

Code: [`lib/indexing-policy.ts`](../../lib/indexing-policy.ts), [`lib/content-quality.ts`](../../lib/content-quality.ts), [`lib/site-seo.ts`](../../lib/site-seo.ts).

## Strategy

**10 indexable landings.** Overlapping URLs 301 into pillars. Thin blog/compare stay live with `noindex, follow`.

## Indexed pillars

| Pillar | Owns |
|--------|------|
| `/real-estate-plot-management-software` | Plot + layout maps + township/layout digitization |
| `/real-estate-inventory-management-software` | Inventory + asset performance on sellable units |
| `/real-estate-crm-software` | CRM + leads + visits + client lifecycle |
| `/best-real-estate-crm-software` | Buyer’s guide |
| `/affordable-real-estate-crm` | Affordable / realtor field pricing |
| `/real-estate-channel-partner-management-software` | Broker portals |
| `/online-plot-booking-software` | Online + desk booking ops |
| `/real-estate-accounting-software` | Payments / installments |
| `/commercial-real-estate-software` | Commercial layouts |
| `/360-management-software` | All-in-one suite |

Plus core marketing (`/`, `/pricing`, `/contact`, `/features`, `/blog`, `/solutions`, …), allowlisted blogs/compares, or articles ≥900 words.

## Consolidated (301 → pillar)

See `LANDING_CONSOLIDATION_REDIRECTS` in `lib/indexing-policy.ts` (layout/maps/township → plot; asset/apartment → inventory; client/crm-guide/leads → CRM; booking-mgmt → online booking; etc.).

## Not indexed

| URL | Reason |
|-----|--------|
| `/features/[slug]` | Thin vs `/features` hub |
| Other `/blog/*`, `/compare/*` | Not allowlisted and &lt;900 words |
| `/compare` stub | Redirects to blog |

## Before adding a URL

1. Unique intent not owned by a pillar.
2. Expand the pillar first; only then add a new indexable URL + allowlist entry.
