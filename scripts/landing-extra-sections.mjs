/** Optional tail sections for landings that need a few more unique words (topic-tuned). */

export const LANDING_EXTRA_SECTIONS = {
  crmGuide: `
## From CRM practices to CRM software

When follow-ups reference real plots and partners use live inventory, [real estate CRM software](https://layouts360.com/real-estate-crm-software) enforces what policy already demands. Read [what is CRM software](/blog/what-is-real-estate-crm-software), [top 10 CRM India](/blog/top-10-real-estate-crm-software-india), and [pricing](/blog/real-estate-crm-pricing-and-free-trials-india) before signing a PropTech contract.
`,

  inventoryManagement: `
## From practices to software

Many teams master policy first—hold timers, partner rules, weekly exposure reviews—then adopt [real estate inventory management software](https://layouts360.com/real-estate-inventory-management-software) when launches or broker scale break Excel. Skipping straight to software without status discipline recreates the same disputes inside a login screen.

Read the full [what is real estate inventory management](/blog/what-is-real-estate-inventory-management) guide for metrics and FAQs, or compare [Excel versus live inventory](/compare/real-estate-inventory-management-excel-vs-live-inventory) before your next phase release.
`,

  apartment: `
## Apartment phases beside plotted land

When both towers and open plots sell under one brand, buyers expect the same professionalism on floor plans as on satellite layouts. Release tower inventory to brokers only after unit status is live—marketing "last few flats" from email PDFs damages trust on high-ticket inventory. Leadership should compare flat velocity to plot velocity in one dashboard before allocating broker incentives or pricing moves for the next release.

Floor-wise blocking with timers works the same way as plotted land: two agents must not promise the same park-facing flat because a PDF was forwarded faster than status changed.
`,

  commercial: `
## Commercial sales without lease-module noise

Teams selling shops and commercial plots need per sq. ft. logic, frontage premiums, and broker portals—not tenant billing workflows they will never open. Institutional buyers judge developers on whether corner unit availability is current at the site office. Mixed portfolios present commercial inventory on digital plans with the same booking discipline as mass plotted layouts, so premium errors do not hide in a separate brochure cycle.
`,

  launchDay: `
## After the launch weekend

The best launch teams treat the event as a process, not a one-day heroics story. Within forty-eight hours, release expired blocks, reconcile partner queues, and document disputes with booking IDs. Policy updates for hold length and approver roles should ship before the next phase—not repeated verbally at the cabin. Brokers remember fairness; they return when the map was authoritative under pressure.
`,

  onlineBooking: `
## Campaign readiness for digital plot sales

Before scaling Meta or Google spend, confirm checkout updates inventory in the buyer session and finance can reconcile deposits to booking IDs the same week. NRIs complete journeys when receipts attach to the deal—not when agents chase separate UPI screenshots. Pair self-serve tokens with agent follow-up logged in CRM so remote interest converts without a parallel catalog maintained by marketing exports.
`,

  propertyInventory: `
## When a platform beats point tools

Developers selling multiple product types in one account stop sounding like separate companies at the plot desk versus the tower desk. Campaigns should deep-link to live project URLs; leadership reviews roll-ups instead of pre-meeting CSV merges. The forcing function is usually broker scale or a second phase release while the first still sells—plan unified inventory before partner count makes PDF distribution unmanageable.

Unified CRM means a buyer who shortlisted a villa and a plot sees one professional follow-up path—not two departments that never compare notes. That coherence is what buyers describe as a serious developer brand.
`,

  accounting: `
## Sales-side collections and statutory books

Many Indian layout developers keep Tally or similar tools for statutory filing while sales truth lives on plot bookings. The goal is zero re-keying of buyer names and plot numbers from agent notebooks into finance sheets. Overdue installment workflows should name the milestone missed on Plot 112's schedule—generic collection calls frustrate buyers who already paid the prior installment on time.

GST fields and partial payments on the booking record give finance and sales one vocabulary for month-end—fewer arguments about which plot a UPI screenshot belongs to. Month-end becomes matching booking IDs to bank lines, not reconstructing deals from chat. Finance and site office finally argue about policy—not about which spreadsheet is correct.
`,

  asset: `
## Sellable inventory as leadership signal

Asset views for layout developers answer how much remains sellable, how fast phases move, and whether collections match booked value—not corporate depreciation schedules unrelated to sales. Slow phases with high remaining inventory deserve broker focus or pricing review backed by live maps. Investors and internal leadership hear consistent numbers when exports match what site offices and partners see on Saturday.
`,

  backOffice: `
## Back office throughput after sales discipline

Commission accrual on confirmed booking amounts, document checklists per buyer, and approval queues for partner-submitted bookings only work when sales kept truth on the layout first. Re-typing deals from WhatsApp summaries reintroduces errors finance discovers at payout. Weekly rhythm—close bookings, mark commissions payable, pay with proof uploaded—turns back office into a competitive advantage buyers mention when comparing developers.

Audit logs on blocks and approvals settle launch disputes with timestamps—back office stops being the department that "fixes what sales forgot to enter." Timestamps beat memory when three desks disagree about the same plot.
`,

  channelPartner: `
## Partner scale without a PDF coordinator

Past twenty active brokers on one phase, PDF distribution usually consumes a full-time coordinator. Portals with live inventory and structured booking requests return that time to approvals and relationship management. Lead ownership rules written before scale reduce disputes that surface on payout day, not on launch morning when desks are already overloaded.
`,

  client: `
## Client experience after the token

Post-booking transparency—milestones, receipts, installment status—reduces repeat "any update?" calls that exhaust site staff. NRIs align travel with real progress on the booking record; local families trust developers who do not resend the same PDF weekly. Client management connected to plot IDs supports referrals for phase-two launches more than launch-day hype alone.

Registration prep checklists on the booking keep legal, sales, and finance aligned on what is signed versus what is pending—without restarting buyer data in a new folder. Buyers notice when your team answers from one record, not five chats.
`,

  erp: `
## Right-sizing ERP for layout sales

Purchasing modules for manufacturing-style inventory while agents sell from WhatsApp PDFs is a common mismatch. Validate ERP demos against launch workflows: live map, timed block, partner request, installment on plot. Sales-side scope first—exports to accounting on rhythm—beats twelve-month implementations that miss the phase you already scheduled to release.

Agents adopt sales-side ERP when Saturday site office runs on it; unused finance modules do not fix double bookings brokers remember for years.
`,

  lead: `
## Leads that know which plot matters

Pipeline value is highest when every capture includes project and unit interest—walk-in, call, or partner intro. Managers coaching without plot context waste time on leads tied to sold inventory. Speed-to-block for site walk-ins and speed-to-first-call for digital campaigns are different KPIs; measure both before scaling ad spend or broker count on the same phase.

Archive stale leads without plot interest monthly so pipeline reviews discuss real opportunities—not hundreds of names that will never map to available units.
`,

  salesAutomation: `
## Automate events, not excuses

Sales automation should read block expiry, overdue installments, and pending partner approvals from live inventory—not from yesterday's export. Disable generic drips that message availability without checking plot status. Managers use automation to see stalled blocks on specific units, then coach with facts; agents spend less evening time on manual reminder calls that buyers already received inconsistently.
`,
}

export function getLandingExtraSection(pageKey) {
  const block = LANDING_EXTRA_SECTIONS[pageKey]
  return block ? block.trim() : ""
}
