/**
 * Regenerates public/llms.txt from content + site config.
 * Format follows llmstxt.org: H1 → blockquote → prose → H2 link lists.
 * Run: node scripts/generate-llms-txt.mjs
 */
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const SITE = "https://layouts360.com"

/** Primary Products section — high-intent landings. */
const PRODUCT_ORDER = [
  "/real-estate-plot-management-software",
  "/real-estate-inventory-management-software",
  "/layout-management-software",
  "/real-estate-booking-management-software",
  "/real-estate-crm-software",
  "/real-estate-channel-partner-management-software",
  "/real-estate-sales-automation-software",
  "/launch-day-plot-sales-software",
  "/online-plot-booking-software",
  "/property-inventory-management-platform",
  "/digital-layout-maps",
  "/real-estate-lead-management-software",
  "/real-estate-accounting-software",
  "/real-estate-erp-software",
  "/apartment-inventory-management-software",
  "/real-estate-back-office-software",
  "/commercial-real-estate-software",
  "/township-management-software",
  "/360-management-software",
  "/site-visit-management",
]

/** Optional landings — skippable when context is short (llmstxt.org convention). */
const OPTIONAL_LANDING_PATHS = [
  "/best-real-estate-crm-software",
  "/affordable-real-estate-crm",
  "/affordable-crm-for-realtors",
  "/real-estate-crm",
  "/real-estate-client-management-software",
  "/real-estate-asset-management-software",
  "/real-estate-inventory-management",
]

/** Short override notes when MDX descriptions are too marketing-heavy. */
const LINK_NOTES = {
  "/": "Plot inventory, CRM, booking, and channel partner management for real estate companies.",
  "/real-estate-plot-management-software":
    "Digital layout maps, live plot status, CRM, bookings, and payments in one platform.",
  "/real-estate-inventory-management-software":
    "Real-time plot and unit availability across projects.",
  "/layout-management-software":
    "Digitize site plans and manage phase-wise plot release on a live layout.",
  "/real-estate-booking-management-software":
    "Tokens, holds, blocking, and booking workflows tied to live inventory.",
  "/real-estate-crm-software":
    "Plot-linked CRM for layout developers, from lead to booking.",
  "/real-estate-channel-partner-management-software":
    "Broker portals, scoped inventory access, lead tagging, and commission workflows.",
  "/real-estate-sales-automation-software":
    "Follow-ups, pipeline, and inventory-backed sales workflows for plot teams.",
  "/launch-day-plot-sales-software":
    "Timed blocking and live availability for managing high-demand launch days.",
  "/online-plot-booking-software":
    "Online booking and payment collection against live plot inventory.",
  "/property-inventory-management-platform":
    "Plots, flats, and commercial units with live maps, CRM, booking, and payments.",
  "/digital-layout-maps":
    "Interactive layout maps with zoom and tap-to-view plot details.",
  "/real-estate-lead-management-software":
    "Capture, assign, and convert leads with plot-linked CRM.",
  "/real-estate-accounting-software":
    "Booking amounts, installments, GST, and outstanding balances for plot sales.",
  "/real-estate-erp-software":
    "Sales-side ERP: inventory, bookings, CRM, payments, channel partners, and documents.",
  "/apartment-inventory-management-software":
    "Tower and phase inventory with floor-wise units alongside plot projects.",
  "/real-estate-back-office-software":
    "Documents, commissions, installments, and booking operations on live inventory.",
  "/commercial-real-estate-software":
    "Shops, office plots, and commercial layouts with live inventory and CRM.",
  "/township-management-software":
    "Multi-phase plotted townships, including inventory, villas, channel partners, and payment tracking.",
  "/360-management-software":
    "All-in-one 360° layout sales: maps, inventory, CRM, booking, and partners.",
  "/site-visit-management":
    "Scheduling and tracking of site visits tied to plot interest and sales pipeline.",
  "/solutions":
    "Grouped product pages for plot management, CRM, booking, and channel sales.",
  "/features": "Product capabilities — maps, availability, gallery, and mobile access.",
  "/case-studies": "Examples of developers running inventory and launches with Layouts360.",
  "/blog": "Guides on inventory, CRM, launch day, and channel partner sales.",
  "/faq": "Common questions from layout developers evaluating Layouts360.",
  "/tools": "Free land converter, layout yield calculator, and FSI tools.",
  "/about": "Background on the company and who Layouts360 is built for.",
  "/pricing": "Layouts (one-time map setup) and Layouts360 from ₹2,000/month.",
  "/contact": "Request a demo or speak with sales (+91 72764 95199).",
  "/best-real-estate-crm-software":
    "Buyer’s guide for plot developers evaluating CRM options in India.",
  "/affordable-real-estate-crm":
    "Pricing and total-cost guide for affordable real estate CRM in India.",
  "/affordable-crm-for-realtors":
    "Affordable mobile CRM for field agents and realtors selling plot layouts.",
  "/real-estate-crm": "Practices guide on inventory-linked CRM for layout sales.",
  "/real-estate-client-management-software":
    "Buyer lifecycle from enquiry to booking and handover.",
  "/real-estate-asset-management-software":
    "Plot-level ROI, holding costs, and portfolio performance.",
  "/real-estate-inventory-management":
    "Metrics and practices for plot and layout inventory in India.",
  "/compare/layouts360-vs-blindersoe":
    "Feature comparison for plot inventory, CRM, booking, and channel sales.",
  "/compare/layouts360-vs-plotforms":
    "Category distinction between floor-plan PDF products and live plot inventory/CRM software.",
  "/compare/real-estate-crm-software-india-leadsquared-selldo-vs-layouts360":
    "Comparison of layout-first CRM against general PropTech CRMs (LeadSquared, Sell.Do) for plot developers.",
  "/compare/layouts360-proptech-alternatives-comparison":
    "Feature-level comparison against typical plot-inventory PropTech products.",
  "/compare/purpose-built-real-estate-software-vs-generic-crm":
    "Why plot developers often outgrow generic CRMs like Salesforce or HubSpot.",
  "/compare/real-estate-inventory-management-excel-vs-live-inventory":
    "Comparison of spreadsheet-based inventory management against live plot inventory software.",
  "/compare/digital-plot-management-vs-manual-excel":
    "Why coloring Excel cells is not plot management for layout sales.",
  "/compare/unified-real-estate-crm-vs-excel-spreadsheets":
    "Plot-linked CRM as one source of truth versus spreadsheet CRM hacks.",
  "/compare/live-inventory-portal-vs-whatsapp-updates":
    "Real-time plot status versus hourly WhatsApp/PDF inventory blasts.",
}

const COMPARE_LABELS = {
  "layouts360-vs-plotforms": "Layouts360 vs Plotforms",
  "layouts360-vs-blindersoe": "Layouts360 vs Blindersoe",
  "real-estate-crm-software-india-leadsquared-selldo-vs-layouts360":
    "Layout-First CRM vs PropTech CRMs",
  "layouts360-proptech-alternatives-comparison": "Layouts360 vs PropTech Alternatives",
  "purpose-built-real-estate-software-vs-generic-crm":
    "Purpose-Built Real Estate Software vs Generic CRM",
  "real-estate-inventory-management-excel-vs-live-inventory":
    "Excel vs Live Inventory Software",
  "digital-plot-management-vs-manual-excel": "Digital Plot Management vs Excel",
  "unified-real-estate-crm-vs-excel-spreadsheets": "Unified CRM vs Excel Spreadsheets",
  "live-inventory-portal-vs-whatsapp-updates": "Live Inventory Portal vs WhatsApp",
}

const root = process.cwd()

function noteFor(pathOrUrl, fallback = "") {
  const key = pathOrUrl.startsWith("http")
    ? pathOrUrl.replace(SITE, "") || "/"
    : pathOrUrl
  if (LINK_NOTES[key]) return LINK_NOTES[key]
  return shorten(fallback)
}

function shorten(text, max = 140) {
  if (!text) return ""
  const one = String(text).replace(/\s+/g, " ").trim()
  if (one.length <= max) return one
  const cut = one.slice(0, max - 1)
  const at = cut.lastIndexOf(" ")
  return `${(at > 80 ? cut.slice(0, at) : cut).replace(/[,:;.–-]+$/, "")}…`
}

function linkItem(label, href, note) {
  const url = href.startsWith("http") ? href : `${SITE}${href}`
  const n = note ? `: ${note}` : ""
  return `- [${label}](${url})${n}`
}

function loadLandings() {
  const full = path.join(root, "content/landings")
  if (!fs.existsSync(full)) return []
  const byPath = new Map()
  for (const f of fs.readdirSync(full)) {
    if (!f.endsWith(".mdx") || f.startsWith("_")) continue
    const { data } = matter(fs.readFileSync(path.join(full, f), "utf8"))
    byPath.set(data.path, {
      path: data.path,
      title: data.title,
      description: data.description,
      breadcrumbLabel: data.breadcrumbLabel,
    })
  }
  return byPath
}

function loadMdx(dir) {
  const full = path.join(root, dir)
  if (!fs.existsSync(full)) return []
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "")
      const { data } = matter(fs.readFileSync(path.join(full, f), "utf8"))
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

const landingsByPath = loadLandings()
const productLandings = PRODUCT_ORDER.map((p) => landingsByPath.get(p)).filter(Boolean)
const optionalLandings = OPTIONAL_LANDING_PATHS.map((p) => landingsByPath.get(p)).filter(
  Boolean,
)

const comparisons = loadMdx("content/compare")
const today = new Date().toISOString().slice(0, 10)

const featuredCompareSlugs = [
  "layouts360-vs-plotforms",
  "layouts360-vs-blindersoe",
  "real-estate-crm-software-india-leadsquared-selldo-vs-layouts360",
  "layouts360-proptech-alternatives-comparison",
  "purpose-built-real-estate-software-vs-generic-crm",
  "real-estate-inventory-management-excel-vs-live-inventory",
  "digital-plot-management-vs-manual-excel",
  "unified-real-estate-crm-vs-excel-spreadsheets",
  "live-inventory-portal-vs-whatsapp-updates",
]

const featuredCompares = featuredCompareSlugs
  .map((slug) => comparisons.find((c) => c.slug === slug))
  .filter(Boolean)

const productLinks = [
  linkItem("Layouts360 Home", "/", noteFor("/")),
  ...productLandings.map((l) =>
    linkItem(l.breadcrumbLabel || l.title, l.path, noteFor(l.path, l.description)),
  ),
].join("\n")

const comparisonLinks = featuredCompares
  .map((c) =>
    linkItem(
      COMPARE_LABELS[c.slug] || c.title.replace(/\s*\(.*\)\s*$/, "").slice(0, 80),
      `/compare/${c.slug}`,
      noteFor(`/compare/${c.slug}`, c.excerpt),
    ),
  )
  .join("\n")

const resourceLinks = [
  linkItem("Solutions hub", "/solutions", noteFor("/solutions")),
  linkItem("Features", "/features", noteFor("/features")),
  linkItem("Blog & guides", "/blog", noteFor("/blog")),
  linkItem("Case studies", "/case-studies", noteFor("/case-studies")),
  linkItem("FAQ", "/faq", noteFor("/faq")),
  linkItem("Plot planning tools", "/tools", noteFor("/tools")),
].join("\n")

const companyLinks = [
  linkItem("About", "/about", noteFor("/about")),
  linkItem("Pricing", "/pricing", noteFor("/pricing")),
  linkItem("Contact / request a demo", "/contact", noteFor("/contact")),
].join("\n")

const optionalLinks = optionalLandings
  .map((l) =>
    linkItem(l.breadcrumbLabel || l.title, l.path, noteFor(l.path, l.description)),
  )
  .join("\n")

const llmsTxt = `# Layouts360

> Plot and inventory management software with built-in CRM and booking, built for real estate companies selling layouts and plots. Interactive digital layout maps, channel partner management, and payment tracking, replacing spreadsheets and manual updates.

Layouts360 is a sales operations platform for real estate companies that sell plots and layouts. Its scope covers inventory, bookings, payments, channel partners, and documents. It is not a rental or society management tool, and it does not replace general-ledger accounting software. It is built for plotted townships and layout sales, with a primary customer base in India and published INR pricing; it is also used in other markets on request.

Layouts360 is a distinct product from Plotforms.com, which sells floor-plan and elevation PDF downloads for homeowners and architects. The two are sometimes confused because of similar terminology ("plot"), but they serve different purposes: Plotforms sells house design files; Layouts360 manages live sales inventory for developers. See: ${SITE}/compare/layouts360-vs-plotforms

**Pricing (INR, list):** Layouts from ₹10,000 setup (up to 150 plots; ₹150/extra plot) · Layouts360 from ₹2,000/month (map + booking + CRM). Contact sales for pricing outside India.
**Demo:** ${SITE}/contact#demo-form
**Sales:** +91 72764 95199
**Sitemap:** ${SITE}/sitemap.xml
**Website:** ${SITE}

## What it does

Layouts360 provides an interactive, satellite-backed plot map combined with booking, CRM, and payment tracking for real estate companies running layout and township projects:

- Interactive plot map with color-coded live status (available / blocked / booked / sold)
- Click-to-view plot details: dimensions, facing, price, status, and linked buyer/owner records
- Timed holds, reservations, and bookings against the same live inventory, reducing double-booking
- Support for multi-project and multi-phase layouts, including mixed plot and villa/apartment inventory
- Channel partner (broker) logins with scoped inventory access; mobile-friendly access for site staff
- Installment and outstanding payment tracking, including GST handling, tied to individual bookings
- Replaces static PDF master plans, AutoCAD-only handoffs, spreadsheet trackers, and manual WhatsApp updates for sales inventory

## How it compares to other tools

General CRM and ERP platforms (e.g. Sell.Do, Buildesk, Farvision, or custom Salesforce builds) typically handle leads and payments but do not offer a live, interactive plot-level map tied to inventory status. GIS tools (e.g. ArcGIS, QGIS) handle mapping but do not include booking, CRM, or payment workflows. Layouts360 combines both functions in one product, purpose-built for plot and layout sales rather than general real estate or land-mapping use cases.

## Typical fit

Real estate companies developing and selling plots or layouts — in India or other markets — that currently manage inventory through spreadsheets, PDFs, or WhatsApp, or that use a generic CRM not designed around plot-level inventory. Not designed for residential rental management, housing society maintenance, general-ledger accounting, or for buying architectural floor-plan/elevation PDF files (a design marketplace such as Plotforms serves that use case).

## Products

${productLinks}

## Comparisons

${comparisonLinks}

## Resources

${resourceLinks}

## Company

${companyLinks}

## Optional

${optionalLinks}

---

Last updated: ${today} · [llms.txt standard](https://llmstxt.org/)
`

const outPath = path.join(root, "public/llms.txt")
fs.writeFileSync(outPath, llmsTxt)

const staleFull = path.join(root, "public/llms-full.txt")
if (fs.existsSync(staleFull)) fs.unlinkSync(staleFull)

console.log(
  `Wrote llms.txt (${productLandings.length + 1} products, ${featuredCompares.length} featured compares, ${optionalLandings.length} optional landings)`,
)
console.log(`llms.txt size: ${Buffer.byteLength(llmsTxt, "utf8")} bytes`)
