/** Shared long-form landing body builder for generate-landing-mdx.mjs */
import { getLandingDeepDive } from "./landing-deep-dive-snippets.mjs"
import { getRolloutPlaybook } from "./landing-rollout-playbooks.mjs"
import { getTopicGeoBlock } from "./landing-topic-geo-blocks.mjs"

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

${getTopicGeoBlock(c.pageKey)}

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

${getRolloutPlaybook(c.pageKey)}

${c.extraSection ?? ""}
`.trim()
}

function buildExtendedSections(c) {
  return getLandingDeepDive(c.pageKey)
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
