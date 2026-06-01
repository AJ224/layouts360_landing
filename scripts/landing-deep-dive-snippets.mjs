/**
 * Per-landing deep-dive copy (unique per pageKey). Replaces one shared block on all 18 URLs.
 */
import { DEEP_DIVE_CLOSINGS } from "./landing-deep-dive-closings.mjs"

const SNIPPETS = {
  plot: `
## Putting plot management into practice

Site offices sell when agents answer three questions from one screen: Is this plot available? What is the facing? What is the token today? **Real estate plot management software** should tie every enquiry to a plot ID on the digital layout—not a row in Excel that might be stale.

Digitize before the next broker weekend. Import plot numbers, areas, and base pricing, then train partners on the live portal the week prior. Leadership should review sold percentage from the same dashboard agents use, not an email attachment assembled at midnight.

When a hold expires, the plot returns to available automatically—fair for buyers waiting and honest for brokers who did not convert. That single discipline prevents most double-booking stories teams blame on "system failure" when the real issue was verbal holds without timers.
`,

  inventoryManagement: `
## Managing inventory before you buy more software

**Real estate inventory management** starts with definitions everyone agrees on: what counts as available, how long a block lasts, and who may approve a partner request. Software amplifies good policy; it cannot fix three competing master spreadsheets.

Track **months of inventory** and **absorption** only from status changes that happen in real time. If sold plots update tomorrow morning, your metrics are storytelling.

Leadership reviews should combine unsold count, sold percentage, and collection lag per phase—then decide broker incentives and releases. That rhythm beats quarterly panic when Excel finally gets consolidated.
`,

  inventory: `
## Inventory truth across phases and projects

**Real estate inventory management software** earns its keep when Phase 2 releases while Phase 1 still sells—without exporting a new CSV. Each phase keeps isolated availability while CRM and leadership see portfolio roll-ups.

Apartment towers and open plots can coexist when unit types are modeled correctly. The failure mode is running tower inventory in email and plotted land in Excel; buyers sense inconsistency even if they cannot articulate it.

Leadership reviews should focus on available versus blocked versus sold by phase, not contact counts alone. Inventory-led developers make release timing decisions from live maps, reducing the "we thought fifty plots were left" surprises that damage broker confidence.
`,

  booking: `
## Booking workflows that protect inventory

**Real estate booking management software** is not a calendar—it is the lock on a plot. The moment a booking workflow starts, partners and agents should see in-progress status until confirmation, release, or expiry.

Tokens without timers hoard inventory and anger buyers who were told a plot was "theirs until tomorrow." Configure expiry rules before launch, publish them to brokers, and enforce in software—not in a site manager's memory.

Finance should see booking amount and installment schedule on the same record sales created. When payment collection integrates, reconciliation shifts from matching UPI screenshots to verifying booking IDs—a faster month-end for growing teams.
`,

  crmGuide: `
## Real estate CRM as a discipline

**Real estate CRM** starts with capture rules: every walk-in, portal enquiry, and partner intro includes project and plot interest. Pipeline meetings discuss units and blocks, not only call counts.

Compare PropTech CRM demos ([LeadSquared](https://www.leadsquared.com/real-estate-crm/), [Sell.do](https://www.sell.do/real-estate-crm)) on whether they block a plot on your map—not only WhatsApp nurture templates.

When CRM graduates to software, choose [real estate CRM software](https://layouts360.com/real-estate-crm-software) that shares inventory with the site office the same hour.
`,

  crm: `
## CRM that respects plot context

**Real estate CRM software** for layout developers fails when pipelines list names without units. Every enquiry should capture plot interest, visit outcomes, and block history so follow-ups reference real availability.

Managers coaching agents need CRM views tied to inventory, not generic deal stages copied from SaaS playbooks. "Proposal sent" means little if Proposal referred to a plot sold yesterday.

Pair CRM with live maps for site visits: log which plots were shown, schedule return visits, and block during negotiation while interest is hot. Conversion improves when data reflects how plot sales actually happen in Indian site offices.
`,

  channelPartner: `
## Channel partners on live inventory—not PDF cycles

**Channel partner management software** matters when broker count exceeds what one person can babysit in WhatsApp. Partners need login, live plots, structured booking requests, and commission visibility—not daily PDFs they forward faster than you update.

Lead ownership rules should be written before scale: phone match windows, override process, and what happens when two brokers claim the same buyer. Software enforces; culture defines fairness.

Desk staff approve partner requests against the same map internal agents use. That alignment removes screenshot arguments and protects margin because partners cannot sell from outdated green cells on a brochure map.
`,

  salesAutomation: `
## Sales automation without losing plot control

**Real estate sales automation software** should automate follow-ups and reminders—not availability. Automate messages tied to plot IDs and booking states; never blast generic "still interested?" texts when the plot is sold.

Pipeline triggers work when inventory changes: block expiring soon, installment overdue, partner request pending approval. Those events matter more than arbitrary day-seven emails copied from B2B SaaS templates.

Leadership uses automation to see stalled blocks and aging enquiries on specific plots, then coaches agents with facts. Automation supports discipline on the layout; it does not replace it.
`,

  launchDay: `
## Launch day: one map, many desks

**Launch day plot sales software** exists for the hour when paper charts fail. Hundreds of buyers, dozens of brokers, and multiple desks must read one availability truth with timed blocks and clear approvals.

Run a rehearsal Thursday: block, expire, convert to booking, and show partner view updating. Launch morning is too late to discover roles were never configured.

Leadership war-room metrics are blocks expiring, bookings confirmed, and partner queue depth—not verbal updates from the loudest desk. Debrief with booking IDs; that log trains the next phase better than anecdotal stories alone.
`,

  onlineBooking: `
## Online booking that updates the map

**Online plot booking software** helps NRIs and paid campaigns when checkout changes plot status immediately. Payment success without inventory update is the fastest way to lose trust on digital ads.

Test duplicate payment attempts and failed gateway responses before spending on traffic. Edge cases define whether remote buyers complete purchase or call your office accusing you of fraud.

Pair online flows with agent follow-up in CRM: buyer self-serves shortlist and token, agent confirms documentation and site visit. The layout remains authoritative; the website is a channel into that truth, not a separate inventory universe.
`,

  propertyInventory: `
## One platform for plotted land and sellable units

A **property inventory management platform** should model how you actually sell—open plots, towers, shops, or mixed—without forcing rental modules or generic "properties" that ignore plot numbers.

Portfolio developers need roll-up reporting: which phase is moving, where collections lag, which partner introduces quality leads. Siloed spreadsheets per product type hide those signals until quarter-end.

Buyers comparing villa and plot options in one developer brand expect consistent professionalism. Unified inventory and CRM make cross-sell coherent instead of "call a different department for flats."
`,

  lead: `
## Lead management tied to real units

**Real estate lead management software** for plot sales should tag every lead with project and plot interest at capture—walk-in, call, or partner intro. Pipeline reviews without unit context waste manager time.

Speed matters when a buyer asks about Plot 88 during a site visit. Agents who block while the buyer is present convert better than those who promise to "check in office and call back."

Integrate lead stages with inventory: shortlisted, blocked, booked, installments active. Marketing attributes lead source; operations attributes plot outcome—both on one record.
`,

  bestCrm: `
## Choosing CRM for plot developers in India

Teams searching **best real estate CRM software in India** should disqualify vendors that cannot show plot hierarchy and live availability in the first demo. Contact management alone is insufficient for layout sales.

Score mobile field usage, partner visibility, and booking conversion on the layout—not email automation bells. Indian plot sales close on-site and on phones; desktop-only CRMs become shelfware.

Read comparison content and guides, then validate with your layout file in the room. The best CRM is the one brokers and agents use on launch Saturday without a parallel Excel master sheet.
`,

  client: `
## Client records across the buyer lifecycle

**Real estate client management software** should follow buyers from first enquiry through installments—not restart data at booking. NRIs, local families, and investors share the need for clear payment history and documents.

Post-booking transparency reduces "any update?" calls. When clients see milestones and receipts in one place, site staff spend less time resending PDFs and more time selling the next phase.

Client management connects to plot records: who bought Plot 42, what remains due, which partner introduced them. That linkage supports service quality and commission accuracy without duplicate typing in finance folders.
`,

  asset: `
## Asset visibility on sellable inventory

**Real estate asset management software** for developers focuses on sellable plots and units—availability, holding cost context, and sales velocity—not corporate asset registers unrelated to layout sales.

Leadership questions often mix finance and sales: how much inventory remains, which phase underperforms, where collections trail booking amounts. Asset views should answer from live inventory, not month-old exports.

Tie asset reporting to bookings and installments so "on paper sold" matches money received. Discrepancies surface early when data shares one platform instead of three reconciled spreadsheets.
`,

  accounting: `
## Payment tracking on the plot record

**Real estate accounting software** in this context means sales-side collections—booking amounts, installments, GST fields, and balances per buyer—not replacing full statutory books.

Finance teams export to Tally while sales keeps truth on the plot. The win is eliminating re-keying buyer names and plot numbers from agent notebooks into finance sheets.

Overdue installment workflows should trigger from booking data automatically. Reminders tied to Plot 112's schedule beat generic calls that ignore which milestone was missed.
`,

  commercial: `
## Commercial units need the same live discipline

**Commercial real estate software** for selling shops and commercial plots should handle per sq. ft. logic, road frontage premiums, and broker-heavy channels—without lease administration modules you do not need.

High-value commercial disputes start with wrong availability on a corner unit. Live status and timed blocks matter as much as in mass plotted layouts, with higher rupees per mistake.

Present commercial inventory on digital plans at the site office; brokers sell from the same portal as plotted land when you run mixed portfolios. Consistency signals professionalism to institutional and investor buyers.
`,

  erp: `
## Sales ERP scope for layout developers

**Real estate ERP software** messaging often oversells general ledger replacement. Many Indian developers need sales-side ERP: inventory, bookings, CRM, partners, and documents—while statutory accounting stays in existing tools.

Evaluate ERP claims against launch workflows: Can brokers see live plots? Can finance see installments per booking? If not, the ERP is finance IT—not sales operations.

Layouts360 fits the sales-side pattern: connect operations first, export what your CA needs, and avoid forcing agents onto modules built for manufacturing inventory.
`,

  apartment: `
## Apartment towers beside plotted phases

**Apartment inventory management software** should model blocks, floors, and units with the same booking discipline as open plots. Tower spreadsheets fail when two agents promise the same park-facing flat.

Mixed developers win when apartments and plots share CRM and leadership dashboards. Buyers choosing between your villa phase and your layout should feel one brand, not two companies that never talk.

Floor-wise release strategies need live status before brokers market "only three units left." Stale tower PDFs create the same trust damage as stale layout PDFs—only with higher ticket size per error.
`,

  backOffice: `
## Back office on the same booking truth

**Real estate back office software** should receive documents, commissions, and installment approvals from the booking sales already created—not re-type them from agent WhatsApp summaries.

Commission accrual on confirmed booking amount reduces payout fights. Partners see payable versus paid when you enable transparency; finance keeps authority to approve releases.

Document checklists per buyer—agreement, receipts, registration prep—live on the booking record. Approvals for partner-submitted bookings route through roles with audit logs, so launch-weekend chaos resolves with timestamps instead of memory.

Monthly rhythm: close bookings weekly, mark commissions payable after policy check, pay with proof uploaded, and archive complete deal files. Back office speed is a competitive advantage when buyers compare developers on professionalism after the token.
`,
}

export function getLandingDeepDive(pageKey) {
  const parts = [SNIPPETS[pageKey], DEEP_DIVE_CLOSINGS[pageKey]].filter(Boolean)
  if (!parts.length) return ""
  return parts.join("\n\n").trim()
}
