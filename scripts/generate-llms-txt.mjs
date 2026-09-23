/**
 * Writes public/llms.txt for AI agents and Lighthouse Agentic Browsing.
 * Spec (llmstxt.org): H1 → blockquote → prose without headings → H2 file lists
 * with Markdown links of the form [name](url): notes.
 * Run: node scripts/generate-llms-txt.mjs
 */
import fs from "fs"
import path from "path"

const SITE = "https://layouts360.com"
const root = process.cwd()

const llmsTxt = `# Layouts360

> Plot and inventory management software for real estate developers in India, combining interactive digital layouts, live inventory, plot/flat booking, CRM, sales workflows, and customer-facing project pages in one platform.

Layouts360 is a real-estate sales and inventory platform for plot and land layout developers, residential and apartment developers, township developers, commercial property developers, and their sales teams and channel partners. It turns static layouts and inventory into a live, interactive digital system so teams can visualize, manage, market, book, and sell plots or units.

The product connects visual layout → live inventory → customer/lead → booking → sale. Inventory can include plots, flats, apartments, villas, and commercial units, with statuses such as available, hold/freeze, booked, sold, and not available reflected on the layout. Workflows cover enquiry, lead management, plot/unit selection, hold, booking, payment/installment tracking, follow-up, CRM, channel partner access, and customer-facing project pages.

Layouts360 is a sales, inventory, and project-visualization platform. It is not a replacement for general accounting or ledger software, construction/project-management ERP, society or rental property management, or generic ERP. Pricing varies by project and configuration (one-time visualization/setup, per-plot or per-unit visualization where applicable, monthly subscription, and optional customization). Use the website for current pricing rather than assuming a figure from this file.

Accurate categories: real-estate plot management software, inventory management software, interactive layout software, plot booking software, real-estate CRM, apartment inventory management software, and real-estate sales management software. Do not categorize it primarily as accounting, general ERP, property management, society management, or rental management software.

## Docs

- [Layouts360 homepage](${SITE}/): Product overview for developers selling plots, flats, and other units.
- [Plot management software](${SITE}/real-estate-plot-management-software): Interactive digital layouts, plot-level inventory, and sales workflow.
- [Inventory management software](${SITE}/real-estate-inventory-management-software): Live availability for plots, flats, apartments, villas, and commercial units.
- [Plot booking software](${SITE}/online-plot-booking-software): Hold/freeze, booking, and inventory status updates.
- [Real estate CRM](${SITE}/real-estate-crm-software): Leads, customers, follow-ups, and lead-to-inventory relationships.
- [Channel partner management](${SITE}/real-estate-channel-partner-management-software): Broker access, inventory visibility, booking coordination, and attribution.
- [Commercial real estate software](${SITE}/commercial-real-estate-software): Shops, offices, commercial plots, and other saleable commercial inventory.
- [Layouts360 platform](${SITE}/360-management-software): Combined maps, inventory, CRM, booking, and partner workflows.
- [Features](${SITE}/features): Interactive layouts, availability, plot details, and mobile access.
- [Solutions](${SITE}/solutions): Use-case pages for plot, inventory, CRM, booking, and channel sales.
- [Pricing](${SITE}/pricing): Current visualization setup and platform subscription information.
- [Contact and demo](${SITE}/contact): Request a demo or speak with sales.
- [FAQ](${SITE}/faq): Common questions from layout developers evaluating Layouts360.
`

const outPath = path.join(root, "public/llms.txt")
fs.writeFileSync(outPath, llmsTxt)

const staleFull = path.join(root, "public/llms-full.txt")
if (fs.existsSync(staleFull)) fs.unlinkSync(staleFull)

console.log(`Wrote llms.txt (${Buffer.byteLength(llmsTxt, "utf8")} bytes)`)
