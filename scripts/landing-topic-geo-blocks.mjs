/**
 * Unique GEO Q&A blocks per landing pageKey (~400+ words each).
 */
import { GEO_SUPPLEMENTS } from "./landing-geo-supplement.mjs"

export const TOPIC_GEO_BLOCKS = {
  plot: `
## Common questions about plot management software

### What is real estate plot management software?

It is software that digitizes layout maps, tracks each plot's status and pricing, and connects sales workflows to live inventory for Indian layout developers. Agents and brokers work from one availability truth instead of parallel Excel files.

### How is it different from a generic CRM?

Generic CRMs store contacts; plot management ties every lead and booking to a specific plot on a digital layout with holds, tokens, and installments. That prevents selling Plot 42 twice when two systems disagree.

### How long does implementation take?

Most teams go live in a few days per project after sharing layout data—map digitization, plot import, roles, and mobile training. Avoid first login on launch morning.

### Does it work for small layouts?

Yes. INR plans from ₹2,000/month with unlimited users on tiers suit teams with 50–200 plots that need professional maps and booking discipline without enterprise overhead.

### Can channel partners use the same inventory?

Partners should sell from a live portal reading the same map as your desk, not PDFs forwarded in WhatsApp. Partner access scales better than hiring one coordinator per twenty brokers.
`,

  inventory: `
## Common questions about inventory management software

### What is real estate inventory management software?

A system where plot or unit availability is the authoritative record for sales, partners, and leadership—updated in seconds across web and mobile when status changes.

### Why do Excel models fail at scale?

Multiple copies diverge after each site visit. Brokers sell from outdated files while the office maintains a different master sheet until evening reconciliation—when double bookings already happened.

### Can one account run multiple projects?

Yes. Portfolio developers run separate phases and projects with isolated inventory and roll-up dashboards instead of one workbook per layout.

### How do apartments and plots coexist?

Model unit types correctly—towers and open plots in one platform with shared CRM. Siloed tower spreadsheets and layout Excel recreate trust problems.

### What should leadership monitor weekly?

Sold percentage by phase, overdue collections on bookings, and partner velocity—not only new lead counts without inventory context.
`,

  booking: `
## Common questions about booking management software

### What is real estate booking management software?

Workflow software for tokens, holds, booking confirmations, documents, and installments tied to specific plots or units—not a generic appointment calendar.

### Why are timed blocks important?

Verbal "token tomorrow" promises lock inventory indefinitely. Expiring blocks return plots to available fairly and reduce hoarding during high-demand weekends.

### How do bookings connect to payments?

Integrated collection updates the booking record and inventory together. Disconnected payment links cause "money received but plot still green" disputes buyers will not forgive.

### Can partners submit booking requests?

Yes. Structured partner requests approved against the live map reduce screenshot arguments and unauthorized promises on stale PDFs.

### What documents belong on the booking?

Agreements, receipts, and installment schedules should live on the booking record so finance and sales reference one deal file—not scattered folders.
`,

  crm: `
## Common questions about real estate CRM software

### What is real estate CRM software for plot sales?

Pipeline and follow-up software where enquiries reference real plots on a layout, with mobile access for site offices and visibility for managers.

### Why do builder CRM needs differ from agencies?

Builders sell inventory they control; pipeline stages must reflect blocks, tokens, and sold plots—not generic "proposal" stages copied from unrelated industries.

### How should site visits be logged?

Record plots shown, outcomes, and follow-up tasks with plot IDs. Managers coach with inventory facts instead of asking "did you call them?" without context.

### Does CRM replace inventory software?

No. CRM without live inventory becomes a contact list while availability still lives in Excel. Unified platforms connect both on the same unit records.

### How do NRIs fit the CRM flow?

Capture remote interest, share live project links, schedule visits, and block plots during high-intent windows before travel—logged on the buyer record.
`,

  channelPartner: `
## Common questions about channel partner management

### What is channel partner management software?

Broker portal software with live inventory, lead tagging, booking requests, and commission clarity for developers scaling partner networks in India.

### How do lead disputes start?

Unclear ownership windows and manual spreadsheets. Written rules for phone match duration and overrides, enforced in software, reduce fights before payout day.

### Should partners see all projects?

Usually partners see assigned projects only, with live status and structured requests—not editable base pricing unless policy allows.

### How are commissions handled?

Accrue on confirmed booking amounts per published slabs. Payable versus paid states help finance and partners align without screenshot ledgers.

### When should developers adopt CP portals?

Before broker count makes PDF distribution unmanageable—often past twenty active partners selling the same phase.
`,

  salesAutomation: `
## Common questions about real estate sales automation

### What is real estate sales automation for layouts?

Automated follow-ups, reminders, and pipeline triggers tied to plot and booking states—not unsupervised mass email blasts ignoring sold inventory.

### What should be automated first?

Block expiry reminders, overdue installments, and pending partner approvals—events that depend on inventory truth, not arbitrary day-seven templates.

### Can automation cause double promises?

Only if inventory is outside the system. Automation should read live status before messaging buyers about availability.

### How do managers use automation?

Identify stalled blocks and ageing enquiries on specific plots, then coach agents with data instead of generic activity metrics.

### Does automation replace desk staff?

No. It reduces manual chasing so staff focus on approvals, site visits, and high-value negotiations.
`,

  launchDay: `
## Common questions about launch day plot sales

### What is launch day plot sales software?

Timed blocking, live inventory, and structured bookings when many buyers and brokers compete for limited plots simultaneously.

### How do you prepare the week before?

Digitize layout, import inventory, train partners on portal flows, and publish hold policy. Rehearse block-to-booking conversion with leadership watching the dashboard.

### What metrics matter live?

Blocks expiring, bookings confirmed, collections received, partner queue depth—not end-of-day email summaries lagging reality.

### How do you prevent double allotment?

One map for desk, partners, and marketing. Ban shadow spreadsheets for availability during launch weekend.

### What happens after launch?

Release expired blocks, process waitlists, and document disputes with booking IDs for policy improvements before the next phase.
`,

  onlineBooking: `
## Common questions about online plot booking

### What is online plot booking software?

Buyer-facing flows on live inventory with secure payment collection that updates plot status when checkout succeeds.

### Is it safe for NRIs?

Yes when using HTTPS gateways, live availability, and booking-linked receipts—not static PDFs with separate UPI screenshots as the only record.

### What breaks trust quickly?

Payment success without inventory update, or checkout on stale maps from last week's export.

### Do agents still matter?

Yes. Self-serve shortlist and token; agents handle documentation, negotiation, and site visits logged in CRM.

### How do you test before ads?

Simulate failed payments, duplicate refresh attempts, and hold expiry after abandoned checkout—edge cases define campaign ROI.
`,

  propertyInventory: `
## Common questions about property inventory platforms

### What is a property inventory management platform?

Software unifying sellable plots, apartments, commercial units, and phases with live availability, bookings, CRM, and partner access.

### Who needs a platform versus point tools?

Mixed developers and multi-phase townships benefit from one account. Single small layouts may start narrower but outgrow spreadsheets quickly.

### How does reporting roll up?

Leadership sees availability and collections across projects without merging CSVs from each site team.

### Can marketing use the same links?

Campaigns should point to live project URLs reading current status, not brochure downloads that age immediately.

### What is out of scope?

Rental lease administration and full statutory GL are typically separate from sales-side inventory platforms.
`,

  lead: `
## Common questions about lead management software

### What is real estate lead management software?

Capture and nurture enquiries with source tracking, assignment rules, and plot interest tied to live inventory for Indian developers.

### Why tag plot interest at capture?

Follow-ups without unit context waste time. "Calling about Plot 88" beats "calling lead from ad" when availability changes hourly during launches.

### How fast should site offices respond?

Block plots while buyers are present when possible. Conversion drops when agents must "check at office and call back."

### How do partners feed leads?

Structured partner submissions with ownership rules reduce disputes before commission discussions.

### How do leads become bookings?

Shortlist on map, block with timer, convert to booking with token—stages visible to managers on the layout.
`,

  bestCrm: `
## Common questions about the best real estate CRM in India

### What makes a CRM "best" for plot developers?

Plot hierarchy, live maps, mobile field usage, partner visibility, and booking conversion—not email automation alone.

### Should international CRMs qualify?

Only if they demonstrate plot-level inventory and Indian installment workflows in your first demo with your layout file present.

### How do you compare vendors?

Score live block-to-booking in session, partner view update, and finance balance per plot—fail vendors that only show contact screens.

### Is price per seat important?

Unlimited users on tiers suit growing broker networks better than per-seat global pricing that punishes scale.

### What is a red flag?

Demos without inventory locks or requiring months-long implementation before the next launch you already scheduled.
`,

  client: `
## Common questions about client management software

### What is real estate client management software?

Buyer lifecycle records from enquiry through installments and documents—connected to plots booked, not generic contact cards.

### How does it reduce support calls?

When clients see payment history and milestones online, staff stop resending the same PDFs daily.

### How do NRIs benefit?

Remote visibility into booking and installments before travel, with agent follow-up logged on the same record.

### Who accesses client data?

Role-based access: sales, finance, and limited partner visibility per policy—never public links to other buyers' files.

### Does it replace legal counsel?

No. Software tracks documents and statuses; legal advice stays with your qualified professionals.
`,

  asset: `
## Common questions about asset management for sellable inventory

### What does asset management mean for developers here?

Visibility into sellable plots and units—availability, sales velocity, and collections alignment—not corporate fixed-asset registers alone.

### What reports do leaders need?

Remaining inventory by phase, sold percentage, and collections versus booking amounts without manual consolidation.

### How is this different from finance ERP?

Sales-side asset views complement statutory books. Many teams export to Tally while operations stay on the layout platform.

### Can it guide phase releases?

Live maps show which phases move slowly, informing pricing and broker incentives with data instead of gut feel only.

### What mistakes should be avoided?

Treating sold on Excel as collected money—tie asset views to installments actually received.
`,

  accounting: `
## Common questions about real estate payment tracking

### What is real estate accounting software in sales context?

Booking amounts, installment schedules, partial payments, GST fields, and balances per buyer on the plot record.

### Does it replace Tally?

Often no. Sales-side tracking feeds exports; statutory filing may remain in existing accounting tools your CA prefers.

### How are overdue installments handled?

Workflows triggered from booking data beat generic reminder calls that ignore which milestone failed.

### Can agents record collections?

Policy should restrict who edits collected amounts—finance visibility prevents casual changes that break trust.

### What do buyers see?

When portals are enabled, buyers see schedules aligned with finance numbers—reducing "sir, any update?" calls.
`,

  commercial: `
## Common questions about commercial real estate software

### What is commercial real estate software for developers?

Selling shops, showrooms, and commercial plots with unit-level availability, per sq. ft. pricing logic, and broker coordination.

### Is lease management included?

Sales-focused modules target selling units to buyers—not tenant billing and CAM reconciliation you may not need.

### Why do corner units matter in software?

High-value errors start with wrong availability on premium units—live status matters as in mass layouts.

### Can commercial mix with plots?

Yes in one account when unit types are modeled; leadership sees portfolio roll-ups without separate ops teams per product.

### What do brokers need?

Live commercial inventory in portal form, not PDF shop lists forwarded faster than you update availability.
`,

  erp: `
## Common questions about real estate ERP software

### What is real estate ERP for layout developers?

Often sales-side operations: inventory, bookings, CRM, partners, documents—not necessarily full general ledger replacement.

### When is full ERP required?

When finance mandates single GL for all entities and modules—evaluate separately from launch weekend inventory needs.

### What should sales teams validate?

Live maps, blocks, partner requests, and installments per plot in the demo—not only purchase and HR modules.

### How does Layouts360 position ERP?

Sales-side scope first; statutory accounting can remain in Tally with exports from booking records.

### What is a common buying mistake?

Purchasing ERP for reporting ambition while agents still sell from WhatsApp PDFs—fix sales truth first.
`,

  apartment: `
## Common questions about apartment inventory software

### What is apartment inventory management software?

Tower, floor, and unit inventory with live status, bookings, and CRM—alongside plotted land if you sell both.

### How is it different from plot-only tools?

Unit hierarchy includes block, floor, and flat attributes; maps may be floor-style rather than open land grids.

### Why do tower PDFs fail?

Brokers forward outdated floor sheets; two agents promise the same flat when status was not live.

### Can one buyer buy plot and flat in one CRM?

Unified buyer records and projects prevent "different department" experiences that hurt brand trust.

### What should be live before broker push?

Floor-wise availability on portal, not email attachments, when marketing claims "only a few units left."
`,

  backOffice: `
## Common questions about real estate back office software

### What is real estate back office software?

Documents, commission ledgers, installment approvals, and audit trails on bookings sales already created on the layout.

### Why avoid re-typing bookings?

Re-keying from agent messages introduces errors finance discovers at payout time—start from the sales booking record.

### How are commissions accrued?

On confirmed booking amounts per published slabs, with payable and paid states finance controls.

### What documents are tracked?

Agreements, receipts, registration prep, and uploads your legal team approves—per buyer on the booking.

### How do launch weekends resolve disputes?

Timestamps on blocks, approvals, and status changes beat memory when three desks disagree about Plot 117.
`,
}

export function getTopicGeoBlock(pageKey) {
  const parts = [TOPIC_GEO_BLOCKS[pageKey], GEO_SUPPLEMENTS[pageKey]].filter(Boolean)
  return parts.join("\n\n").trim()
}
