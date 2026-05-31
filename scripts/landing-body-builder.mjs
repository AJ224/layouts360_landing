/** Shared long-form landing body builder for generate-landing-mdx.mjs */

const BRAND =
  "Real estate plot & inventory management software with built-in CRM and booking — for Indian layout developers."

export function buildLandingBody(c) {
  const kw = c.primaryKeyword
  const featuresMd = c.features
    .map(
      (f) => `### ${f.name}

**Benefit:** ${f.benefit}

**Business outcome:** ${f.outcome}`,
    )
    .join("\n\n")

  const useCasesMd = c.useCases
    .map((u) => `### ${u.title}\n\n${u.body}`)
    .join("\n\n")

  const workflowMd = c.workflow
    .map((step, i) => `${i + 1}. **${step.title}** — ${step.body}`)
    .join("\n")

  const problemsMd = c.problems
    .map((p) => `### ${p.title}\n\n${p.body}`)
    .join("\n\n")

  const platformMd = c.platformLinks
    .map((l) => `- [${l.label}](${l.href})`)
    .join("\n")

  return `
## What is ${c.categoryTerm}?

${c.definition}

${c.definitionExtra ?? ""}

**In one sentence:** ${c.categoryTerm} helps Indian developers sell plots and units with live inventory, digital layouts, and connected bookings—not disconnected spreadsheets.

## Who is this for?

### Layout developers and land promoters

You sell phased layouts where plot numbers, facing, and live availability matter more than generic contact records. ${c.categoryTerm} maps every enquiry to real units on a digital layout.

### Builders and villa project owners

Builders running plotted phases or mixed inventory need one system for sales teams, finance visibility, and broker coordination without rebuilding Excel every weekend.

### Real estate sales teams

Field agents need mobile access at the site office. Managers need pipeline and inventory truth in the same dashboard. ${c.categoryShort} software should work where deals actually close—on phones and tablets.

### Channel partners and broker networks

If brokers sell your inventory, they need a live portal—not PDFs in WhatsApp. Partner workflows belong in the same platform as your internal sales desk.

Across India, layout developers in Tier-2 and Tier-3 cities scale broker networks faster than back-office headcount. ${c.categoryTerm} should scale partner access without scaling spreadsheet chaos.

## Problems teams face

${problemsMd}

These problems compound during launch weekends and when broker count scales past twenty. The cost is not only lost bookings—it is broker trust and buyer confidence.

## How Layouts360 solves it

Layouts360 is ${BRAND} For **${c.categoryShort}**, that means:

${c.solutionBullets.map((b) => `- ${b}`).join("\n")}

${c.solutionExtra ?? ""}

Buyers and teams finally work from one source of truth: the live layout map tied to CRM, bookings, and payments.

## How it works

${workflowMd}

Each step updates the same database, so marketing, sales, finance, and partners do not maintain parallel versions of availability.

## Key features

${featuresMd}

## Use cases

${useCasesMd}

## Benefits

### Operational benefits

Fewer reconciliation meetings, less manual data entry, and faster answers when buyers ask "Is Plot 42 available?" Office staff spend less time merging WhatsApp updates into master sheets and more time confirming legitimate bookings.

### Sales benefits

Agents quote confidently on site, follow-ups tie to specific plots, and launches run with timed blocks instead of verbal promises. Pipeline reviews discuss real inventory, not optimistic spreadsheets from last Tuesday.

### Customer experience benefits

Buyers see professional digital layouts, clear payment status, and consistent information across channels. NRIs and local buyers alike trust satellite-backed presentation over hand-drawn cabin sketches.

### Management benefits

Leadership sees sold percentage, collections, and partner activity without waiting for end-of-day emails. Decisions on phase releases and pricing moves use live data instead of lagging exports.

## Why choose Layouts360

### Versus Excel and WhatsApp

Excel cannot show live maps or prevent two agents from booking the same plot. WhatsApp PDFs are outdated the moment they are sent. Layouts360 replaces color-coded cells with a live status engine every role shares.

### Versus generic CRMs (HubSpot, Zoho, Salesforce)

Generic **real estate CRM software** lacks plot hierarchy, layout maps, and native booking locks. Teams bend CRMs with custom fields while inventory still lives in spreadsheets. Layouts360 is purpose-built for plot sales in India.

### Versus manual paper launches

Paper charts and launch-room chaos create double allotments and broker disputes. Digital inventory with timed blocking scales past hundreds of concurrent buyers.

## Industry applications

### For developers

Digitize layouts, run multi-project portfolios, and give leadership one view of availability and collections.

### For builders

Coordinate site office, channel partners, and finance on confirmed bookings—not verbal updates.

### For sales teams

Mobile-first layouts, plot cards, and follow-up reminders tied to real inventory.

### For channel partners

Structured portals, booking requests, and commission clarity without screenshot arguments.

## Works with your full platform

${c.categoryTerm} is strongest as part of the full Layouts360 stack:

${platformMd}

Explore the [solutions hub](https://layouts360.com/solutions) or read related guides on the [blog](https://layouts360.com/blog).

## Insights for Indian developers

- Teams that digitize inventory before the next launch report fewer double-booking incidents and faster broker onboarding.
- Plot buyers increasingly expect satellite-backed layouts and mobile-friendly links—not email PDFs.
- INR-priced plans with unlimited users suit growing sales teams better than per-seat global CRMs.
- Sales-side operations (inventory, bookings, installments) should stay connected; statutory accounting can remain in Tally with exports.
- Channel partner scale is often the forcing function to leave Excel—plan partner portals before broker count explodes.

${buildExtendedSections(c)}

${c.extraSection ?? ""}
`.trim()
}

function buildExtendedSections(c) {
  const kw = c.primaryKeyword
  return `
## Deep dive: ${c.categoryShort} workflows in practice

When a buyer walks into your site office, the first questions are usually about a specific unit—is it available, what is the facing, and what is the booking amount today. **${kw}** should answer all three from one screen. Layouts360 ties enquiry capture, timed blocks, and payment schedules to the exact plot or unit on the digital layout so agents are not switching between WhatsApp, Excel, and a generic CRM.

### Day-in-the-life for site office staff

Morning inventory review shows overnight blocks and partner requests. Agents carry tablets on rounds; status changes sync before the next walk-in. Finance reconciles token receipts against plot records without re-keying buyer names. Leadership checks sold percentage before the broker coordination call—without waiting for end-of-day email roll-ups.

### Day-in-the-life for channel partners

Partners log into a project portal, filter available inventory, and submit structured booking requests. Your desk approves against the same live map internal agents use—reducing screenshot arguments and stale PDF lists. Performance conversations align to confirmed bookings on the layout, not verbal promises in group chats.

## Governance, accuracy, and audit trails

Inventory disputes often start with "who changed this plot?" Mature ${c.categoryShort} workflows log status transitions, hold expiry, and booking confirmations. Layouts360 keeps plot and unit history visible to authorized roles so launch weekends and broker escalations resolve with data—not memory.

Role-based access means site staff, partners, and leadership see appropriate views. Partners typically cannot alter base pricing; managers release holds when buyers decline. That separation protects margin and prevents unauthorized discounts during high-pressure sales windows.

## Migrating from Excel and paper

Most Indian layout developers begin with color-coded spreadsheets and paper charts at the site cabin. Migration is incremental: digitize the master layout, import plot attributes, configure roles, then train agents on mobile during a quieter week—not on launch morning.

You can run parallel for one phase if needed—Excel for historical reference while Layouts360 becomes the system of record for new bookings. Cut over fully before the next broker push or launch event, when duplicate systems create the highest double-booking risk.

## Reporting leadership actually uses

Beyond contact lists, leadership needs sold versus available by phase, collections against booking amounts, and partner velocity. **${kw}** is most valuable when inventory and payment truth stay connected. Layouts360 dashboards reflect live layout status—when a unit books, reports update without manual consolidation.

Export-friendly outputs support finance teams who post statutory accounts in Tally or similar tools. Sales-side installment tracking stays on the plot record; full general ledger can remain where your chartered accountant already works.

## Choosing the right plan and rollout

Sales Starter from ₹2,000/month suits focused plot and layout sales teams. Growth Suite at ₹4,000/month supports broader module rollouts across inventory, CRM, partners, and payments. Setup from ₹10,000 typically covers layout digitization and role training. Unlimited users on tiers help growing broker networks avoid per-seat surprises common in global CRMs.

Book a demo with your layout file ready—many teams see their project on a satellite-backed map in the first session. Implementation commonly completes in a few days per project once master data is shared.

## Operational questions teams ask

**Do we need a full ERP replacement?** Many developers prioritize sales-side scope—inventory, bookings, installments—while statutory accounting stays in existing tools. Layouts360 aligns with that pattern unless you explicitly need broader ERP on the dedicated sales ERP page.

**Can NRIs evaluate before travel?** Share live project links so buyers verify availability remotely; pair with CRM follow-up for documentation and site visits.

**What about high-volume launch days?** Timed blocks, expiry rules, and single-map truth scale better than paper charts when hundreds of buyers compete for limited plots.

**How do we onboard brokers?** Partner portals with live status reduce training to structured requests instead of interpreting PDF legends sent in WhatsApp.
`
}

export function standardPlatformLinks(overrides = []) {
  const base = [
    { href: "/real-estate-plot-management-software", label: "Plot management software" },
    { href: "/real-estate-inventory-management-software", label: "Inventory management" },
    { href: "/real-estate-crm-software", label: "Real estate CRM" },
    { href: "/real-estate-booking-management-software", label: "Booking management" },
    { href: "/real-estate-accounting-software", label: "Payment tracking" },
    { href: "/real-estate-channel-partner-management-software", label: "Channel partner management" },
    { href: "/real-estate-sales-automation-software", label: "Sales automation" },
  ]
  const hrefs = new Set(overrides.map((o) => o.href))
  return [...overrides, ...base.filter((b) => !hrefs.has(b.href))].slice(0, 8)
}

export function standardFaqs(c, extra = []) {
  const base = [
    {
      question: `What is ${c.categoryTerm}?`,
      answer: `${c.faqDefinition}`,
    },
    {
      question: `How is Layouts360 different from Excel for ${c.categoryShort}?`,
      answer: `Excel lacks live maps, timed blocks, and instant sync across agents and brokers. Layouts360 is ${c.categoryTerm} with inventory-native workflows for Indian layout developers.`,
    },
    {
      question: "Can Layouts360 prevent double bookings?",
      answer:
        "Yes. Holds and in-progress bookings update plot status on the live layout for all users until confirmed, released, or expired.",
    },
    {
      question: "Is this suitable for small developers?",
      answer:
        "Yes. Plans start at ₹2,000/month with unlimited users on tiers—fitting teams with 50–200 plots who need professional inventory and maps.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Typically 3–5 days per project after you share layout plans and inventory data—digitize map, import plots, configure roles.",
    },
    {
      question: "Does it work on mobile?",
      answer:
        "Yes. Layouts360 is mobile-first for site visits, partner sales, and manager dashboards.",
    },
    {
      question: "Can I manage multiple projects?",
      answer:
        "Yes. Run multiple layouts, phases, and towers in one account with project-level isolation and roll-up reporting.",
    },
    {
      question: "Is Layouts360 rental property software?",
      answer:
        "No. It focuses on selling plots and units to end buyers—not lease administration or society maintenance.",
    },
    {
      question: "Does it support GST and installments?",
      answer:
        "Yes. Track booking amounts, milestones, partial payments, and GST on plot sales alongside customer records.",
    },
    {
      question: "Can channel partners access inventory?",
      answer:
        "Yes. Partners use live project portals with structured booking requests—see channel partner management for detail.",
    },
    {
      question: "How does CRM connect to inventory?",
      answer:
        "Leads and customers tie to specific plots on the layout. When status changes, everyone sees the same availability.",
    },
    {
      question: "Can customers book online?",
      answer:
        "Teams use paperless booking and payment flows; online plot booking pages describe customer-facing journeys.",
    },
  ]
  return [...base, ...extra].slice(0, 18)
}
