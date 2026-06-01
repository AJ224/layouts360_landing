/**
 * Per-page rollout playbooks (~250–320 words). Unique section titles and advice per pageKey.
 */

const PLAYBOOKS = {
  plot: `
## Rollout playbook for plot management

**Week 1:** Import plot master with numbers, areas, facing, and base pricing. Digitize one phase first—do not wait for the entire township file to be perfect. Train site staff on block-and-book on tablets before inviting brokers to the portal.

**Week 2:** Publish partner access with read-only pricing unless policy allows edits. Run a mock launch: block Plot 12, let it expire, convert Plot 15 to booking, and confirm finance sees the same status as sales.

**Month 1:** Leadership reviews sold percentage and collections from the live map, not Friday email attachments. Add installment milestones per booking so overdue alerts reference Plot IDs.

**Red flags:** Agents still maintain a shadow Excel for "real" availability; brokers forward PDF maps; holds never expire. Each indicates rollout paused too early—retrain before the next phase release.
`,

  inventoryManagement: `
## Rollout playbook for inventory management practices

**Week 1:** Agree status vocabulary and who may extend blocks. Document partner lead rules before portal invites.

**Week 2:** Baseline months of inventory and absorption per active phase from live counts—not last month's corrected sheet.

**Month 1:** Weekly leadership review: unsold exposure, sold %, collection lag. Adjust broker focus on slow phases with data.

**Red flags:** Marketing claims scarcity while map shows inventory; brokers on PDFs while portal exists; CRM pipeline without plot IDs.
`,

  inventory: `
## Rollout playbook for inventory management

**Week 1:** Define status vocabulary (available, blocked, in-progress booking, sold) and enforce it in software only. Import Phase 1 completely; stub Phase 2 as "not released" rather than hiding rows in Excel.

**Week 2:** Connect marketing links to live project URLs. When a campaign goes live, verify the map reflects morning inventory before spend increases.

**Month 1:** Portfolio roll-ups across projects replace consolidated CSV merges. Finance receives export keyed by plot or unit ID matching sales records.

**Red flags:** Two projects in one spreadsheet tab; tower inventory emailed separately from plotted land; "sold" updated only at month-end. Inventory-led sales needs second-level status on every sellable unit.
`,

  booking: `
## Rollout playbook for booking management

**Week 1:** Configure hold duration and who may extend blocks. Document policy in one page brokers sign digitally—verbal rules fail at scale.

**Week 2:** Link token amounts and installment templates to booking types (corner premium, NRI, partner-sourced). Finance validates one test booking end-to-end including receipt upload.

**Month 1:** Audit expired blocks weekly; measure conversion from block to confirmed booking by agent and partner. Stalled blocks surface coaching opportunities before launch pressure returns.

**Red flags:** Bookings recorded in WhatsApp before system entry; payments logged without booking ID; partner requests approved without map check. Booking discipline is the lock on inventory—treat exceptions as incidents.
`,

  crmGuide: `
## Rollout playbook for CRM practices

**Week 1:** Mandatory plot interest on capture forms—kiosk, portal, partner.

**Week 2:** Pipeline stages mapped to block, token, booked—not generic SaaS stages.

**Month 1:** Manager reviews use map view for stalled blocks and partner queue.

**Red flags:** CRM adopted only by coordinator; agents sell from Excel; sold plots still in pipeline.
`,

  crm: `
## Rollout playbook for real estate CRM

**Week 1:** Mandatory plot interest field on every new lead—walk-in, call, partner. Retire pipeline stages that do not map to block, token, or sold states.

**Week 2:** Mobile login for all site agents; managers review daily "plots shown" not generic call counts. Integrate follow-up tasks with plot IDs from visit logs.

**Month 1:** Source attribution (broker, ad, referral) stays on the buyer record through booking. Marketing learns cost per booked plot, not cost per lead name alone.

**Red flags:** CRM used only by one coordinator; agents log activity after the fact; sold plots still appear as open deals. CRM without inventory context becomes expensive contact storage.
`,

  channelPartner: `
## Rollout playbook for channel partners

**Week 1:** Publish commission slabs and lead ownership rules before portal invites. Partners should not discover policy changes on payout day.

**Week 2:** Onboard five anchor brokers first; fix portal UX issues before blasting fifty logins. Desk staff practice approve/deny on partner booking requests against the live map.

**Month 1:** Review partner-sourced booking mix and dispute rate. High disputes mean rules or training gaps—not "broker problem" alone.

**Red flags:** Partners sell from PDFs while portal exists; desk maintains separate partner ledger in Excel; overrides happen in chat without audit. Scale partner count only when portal is the default channel.
`,

  salesAutomation: `
## Rollout playbook for sales automation

**Week 1:** Automate block expiry and installment overdue reminders first—events tied to inventory truth. Disable generic drip sequences that ignore sold plots.

**Week 2:** Define manager alerts for partner requests pending more than four hours during business days. Sales automation should surface queue depth, not only agent activity scores.

**Month 1:** Measure reduction in manual reminder calls from site office. Automation succeeds when staff time shifts to approvals and high-value visits.

**Red flags:** Buyers receive "still available" texts after booking; automation runs on exported CSV snapshots; agents bypass system to "move faster." Automate facts from live data, not copies.
`,

  launchDay: `
## Rollout playbook for launch day

**Week 1:** Freeze scope—one map, timed blocks, defined approvers. Ban parallel availability spreadsheets for launch weekend.

**Week 2:** Rehearse with brokers: block, expire, book, and refund edge case. Leadership watches dashboard during rehearsal, not paper tallies.

**Launch day:** War room tracks blocks expiring, bookings confirmed, partner queue, and payment failures. Extend blocks only through system roles with logged reason.

**After launch:** Debrief with booking IDs; update hold policy before next phase. Waitlists and expired blocks release inventory fairly—document every override.

**Red flags:** Multiple desks updating paper charts; verbal holds without timer; partners not on portal during high-traffic event. Launch software fails when culture keeps shadow processes.
`,

  onlineBooking: `
## Rollout playbook for online booking

**Week 1:** Staging checkout against live inventory sandbox. Test payment success, failure, duplicate refresh, and timeout after abandoned cart.

**Week 2:** Align ad landing pages to project URLs that read current status. NRIs receive booking-linked receipt, not separate UPI screenshot instructions.

**Month 1:** Review funnel: visit → shortlist → token → booking. Drop-offs after payment success indicate integration bugs, not marketing alone.

**Red flags:** Website shows green plots sold hours ago; finance reconciles gateway without booking ID; agents re-key online buyers manually. Online channel must write to the same map as the site office.
`,

  propertyInventory: `
## Rollout playbook for unified property inventory

**Week 1:** Inventory model workshop—plots, towers, commercial units, phases. Decide shared CRM fields across product types before import.

**Week 2:** Import highest-volume project first; prove roll-up dashboard for leadership. Secondary product types follow once discipline holds.

**Month 1:** Cross-sell between villa and plot phases uses one buyer record. Campaigns reference portfolio availability without "call another department."

**Red flags:** Separate ops teams per product with separate masters; leadership merges CSVs monthly; buyers get conflicting availability stories. Platform value is one truth across sellable units.
`,

  lead: `
## Rollout playbook for lead management

**Week 1:** Capture source and plot interest at every entry point—kiosk, phone, partner form. No lead saved without project context.

**Week 2:** Assignment rules by project and round-robin within site teams. Speed-to-block metric for walk-ins while buyer is on site.

**Month 1:** Marketing attributes cost per booked plot by channel. Sales attributes conversion by agent on specific plot types (corner, east-facing, large area).

**Red flags:** Hundreds of unnamed leads; partners submit duplicates without ownership rules; follow-ups generic while inventory moved. Lead software should predict which plot to discuss next call.
`,

  bestCrm: `
## Rollout playbook for CRM selection

**Week 1:** Scorecard: plot hierarchy, live map, block-to-book in demo, partner view, installment on plot. Disqualify vendors missing any in first session.

**Week 2:** Pilot one live project with five agents and two partners—not a sandbox with fake names. Measure adoption Saturday at site office.

**Month 1:** Compare booked plots and dispute rate versus prior Excel period. Selection success is usage on launch day, not feature checklist alone.

**Red flags:** Buying per-seat global CRM to bend with custom fields; implementation longer than next scheduled launch; brokers never receive portal login. Best CRM for India plot sales is used on the layout, not in HQ only.
`,

  client: `
## Rollout playbook for client management

**Week 1:** Migrate active buyers with booking IDs and open installment schedules. Link documents already collected to plot records.

**Week 2:** Enable client-visible milestones where policy allows—reduces "any update?" calls. Train site staff to point buyers to portal instead of resending PDFs.

**Month 1:** NRI clients receive consistent status before travel; local clients see payment history aligned with finance exports.

**Red flags:** Client data duplicated in finance folders; agents maintain personal notebooks for buyer history; post-booking enquiries restart from zero. Client records should continue from first enquiry through registration prep.
`,

  asset: `
## Rollout playbook for sellable asset visibility

**Week 1:** Define phases and units as sellable assets with status—not only accounting asset codes unrelated to sales.

**Week 2:** Leadership dashboard: remaining inventory, sold percentage, collections versus booked value per phase.

**Month 1:** Phase release decisions use velocity and collection lag from live data. Slow phases trigger broker incentives or pricing review with evidence.

**Red flags:** Sold on spreadsheet before money received; asset reports lag bookings by weeks; mixed metrics from tower Excel and layout CSV. Asset views for developers mean sales truth, not fixed-asset depreciation alone.
`,

  accounting: `
## Rollout playbook for payment tracking

**Week 1:** Map installment templates to booking types. Finance agrees plot-level balance is authoritative for sales; exports feed Tally on schedule.

**Week 2:** Restrict who marks amounts collected. Agents may initiate requests; finance confirms against bank statements.

**Month 1:** Overdue workflows trigger from booking milestones. Reduce generic collection calls that ignore which installment failed.

**Red flags:** UPI screenshots without booking ID; duplicate buyer names in finance sheet; GST fields retyped from agent messages. Payment tracking on the plot record eliminates re-keying errors.
`,

  commercial: `
## Rollout playbook for commercial inventory

**Week 1:** Model shops and commercial plots with sq. ft. pricing and frontage attributes. Brokers see commercial portal separate from residential only if policy requires—same CRM underneath.

**Week 2:** High-value unit demo: block, book, and document corner shop with premium logic. Institutional buyers receive digital plan presentation at site office.

**Month 1:** Compare commercial velocity to plotted land in portfolio dashboard. Mixed developers adjust broker focus with data, not anecdote.

**Red flags:** Commercial sold from static shop list PDF; lease modules purchased but unused; residential and commercial buyers in conflicting records. Commercial sales need the same live discipline as mass layouts.
`,

  erp: `
## Rollout playbook for sales-side ERP scope

**Week 1:** Document must-have sales workflows: map, block, partner request, installment. Compare ERP demo to that list before finance module depth.

**Week 2:** Pilot sales operations only—agents, partners, bookings. Defer GL migration if statutory books already stable in existing tools.

**Month 1:** Export booking and collection data to accounting on agreed cadence. Measure agent adoption before expanding module scope.

**Red flags:** ERP purchased for leadership reporting while agents use WhatsApp; twelve-month implementation misses next launch; inventory module treated as optional add-on. Sales-side ERP wins when launch weekend runs on it.
`,

  apartment: `
## Rollout playbook for apartment inventory

**Week 1:** Import tower, floor, and unit hierarchy with statuses mirroring plot discipline. Floor-wise release flags prevent marketing "few units left" on stale sheets.

**Week 2:** Train brokers on tower portal; desk uses same approval flow as plotted phases. Mixed developers link villa and plot interest on one buyer record.

**Month 1:** Review flat-level conversion by facing and floor band. Adjust release strategy before next tower launch.

**Red flags:** Tower inventory only in email PDF; two agents promise same flat; apartments managed by different CRM than plots. Tower sales fail the same way layout PDFs fail—without live status.
`,

  backOffice: `
## Rollout playbook for back office

**Week 1:** Commission accrual rules in system from confirmed booking amount. Stop parallel partner ledgers in spreadsheets.

**Week 2:** Document checklist per booking—agreement, receipts, registration prep. Approvals route through roles with timestamps.

**Month 1:** Weekly rhythm: close bookings, mark commissions payable, pay with proof uploaded, archive deal file. Finance and partners reconcile from payable versus paid states.

**Red flags:** Re-typing bookings from agent chat; commission fights without booking ID reference; documents scattered per buyer folders. Back office speed follows sales discipline on the layout first.
`,
}

/** Second half of rollout content: leadership handoff + training (~140 words each, unique per page). */
const LEADERSHIP_BLOCKS = {
  plot: `
### Handoff to leadership

Review sold percentage by phase every Monday from the digital layout—not from agent summaries. When Phase 2 release is planned, confirm Phase 1 blocked plots are cleared or converted so brokers do not market ghosts. Tie collection lag to specific plot bookings so pricing and broker incentives adjust with evidence.

### Training rhythm

Day 1: map navigation and plot cards. Day 3: block, expire, book on tablet. Day 5: partner portal read-only tour. Refresher before each launch: timed holds and who may extend. New hires shadow one live booking on the map before taking walk-ins alone.
`,

  inventoryManagement: `
### Handoff to leadership

Review months of inventory and absorption using live sold counts—not Friday email attachments. Phase release meetings should name unsold plot and flat IDs at risk, not only percentages without context.

### Training rhythm

Managers coach from map views: stalled blocks, partner queue, plots without follow-up. New hires learn status vocabulary before taking walk-ins.
`,

  inventory: `
### Handoff to leadership

Portfolio dashboards should answer "how many sellable units remain per phase" before marketing commits to scarcity messaging. Slow phases deserve broker focus or pricing review—not silent spreadsheet rows. Collections versus booked value per phase flags deals that look sold but are not funded.

### Training rhythm

Inventory stewards own status changes; agents request blocks but do not edit master pricing without role. Weekly drill: change status on Plot 7 and confirm partner view updates within seconds. Quarterly audit: search for offline "master" files still referenced in WhatsApp groups.
`,

  booking: `
### Handoff to leadership

Booking conversion rate from block to confirmed should be a standing metric—not only lead volume. Long average block duration signals hoarding or weak follow-up. Partner-sourced bookings need approval time tracked; delays erode broker trust during hot weekends.

### Training rhythm

Finance attends one session on booking-linked installments before go-live. Agents practice release and re-block when buyers delay token. Partners learn request-versus-confirm distinction—requests are not sales until desk approves on the map.
`,

  crmGuide: `
### Handoff to leadership

Review conversion by source and by phase weekly—portal vs broker vs walk-in—with plot context, not lead count alone.

### Training rhythm

Agents log plots shown on every visit; managers reject pipelines missing unit IDs.
`,

  crm: `
### Handoff to leadership

Pipeline reviews use plot context: which units stall in blocked state, which agents log visits without outcomes. Marketing spend judged on booked plots per channel, not lead card count. NRI and local buyers share CRM discipline—remote interest still ties to live availability.

### Training rhythm

Managers coach with map screens shared in reviews. Retire generic CRM stages that do not map to inventory events. New campaigns must use capture forms that require project and plot interest before ads scale spend.
`,

  channelPartner: `
### Handoff to leadership

Partner dispute rate and time-to-approve requests belong in monthly ops review alongside sold percentage. Top partners by booked plots—not only lead volume—inform tiered support. Commission clarity reduces escalations that distract desk staff during launches.

### Training rhythm

Partners receive policy PDF plus portal walkthrough before login credentials. Desk staff rotate through approval queue simulation. Internal agents learn that partner blocks follow the same timers—no informal exceptions in chat without system log.
`,

  salesAutomation: `
### Handoff to leadership

Automation should reduce manual reminder hours measurable in site office time studies. Alert noise is a failure mode—prioritize block expiry and installment overdue over generic drips. Sold plots must suppress availability messages automatically; test this before enabling any sequence.

### Training rhythm

Start with two automated triggers only; add more after thirty days stable inventory. Agents see why a reminder fired (plot ID, milestone). Managers review false-positive rate weekly and disable templates that ignore inventory state.
`,

  launchDay: `
### Handoff to leadership

Launch retrospective uses booking IDs and timestamps—not anecdotes. Policy updates for hold length and approver roles happen before the next phase, not repeated verbally. War room staffing plan names who extends blocks and who settles payment failures live.

### Training rhythm

Thursday rehearsal mandatory for brokers above ten count. Roles printed: desk, partner queue, finance bridge, tech contact. Post-launch: thirty-minute debrief same day while memory is fresh; document three process fixes maximum to implement before marketing restarts.
`,

  onlineBooking: `
### Handoff to leadership

Digital funnel metrics (checkout started, paid, failed) reviewed weekly when ads run. Payment success without inventory update is P0—pause campaigns until fixed. NRI satisfaction correlates with receipt clarity on the booking record, not separate email threads.

### Training rhythm

Engineering and sales jointly test edge cases in staging. Agents know how to resume buyers who abandoned cart—CRM task tied to plot shortlist. Finance reconciles gateway deposits to booking IDs daily during campaign weeks, not month-end batch only.
`,

  propertyInventory: `
### Handoff to leadership

Unified reporting across plots, towers, and commercial units prevents leadership from merging files pre-meeting. Cross-sell opportunities appear when one buyer record spans product types. Phase release sequencing uses velocity per product line, not gut feel alone.

### Training rhythm

Product-type owners train together on shared CRM fields. Imports happen project-by-project with sign-off checklist. Marketing never uses brochure PDF as availability source—only live project links in ads and WhatsApp templates.
`,

  lead: `
### Handoff to leadership

Speed-to-block for walk-ins and speed-to-first-call for digital leads are separate KPIs—both visible by source. Partner lead disputes tracked as leading indicator before payout arguments. Stale leads without plot interest archived monthly to keep pipeline honest.

### Training rhythm

Reception captures plot interest before handing tablet to senior agent. Call center scripts ask project and unit preference first. Managers reject pipeline reviews that list names without plot IDs attached.
`,

  bestCrm: `
### Handoff to leadership

Vendor selection committee includes site manager and one senior broker—not only IT and marketing. Pilot success criteria written before contract: Saturday adoption, block-to-book on map, partner view live. Fail fast on vendors that require inventory in Excel sidecar.

### Training rhythm

Comparison demos use your layout file, not vendor sandbox names. Score each session immediately while memory fresh. Contract only after pilot week shows agents stopped parallel spreadsheet for availability.
`,

  client: `
### Handoff to leadership

Client satisfaction for plot buyers often means payment transparency—measure reduction in repeat status calls. NRI clients get proactive milestone updates before they chase agents. Post-booking service quality affects referral and phase-two sales as much as launch hype.

### Training rhythm

Site staff trained to direct buyers to portal for receipts, not WhatsApp forwards. Finance confirms portal balances match internal books monthly. Registration prep checklist reviewed per booking in back office huddle Fridays.
`,

  asset: `
### Handoff to leadership

Asset views inform release timing: which phase has unsold inventory too long, where collections trail bookings. Leadership avoids announcing "almost sold out" when map shows otherwise—broker trust recovers slowly. Investor updates use roll-up charts from live inventory, not static decks.

### Training rhythm

Analyst role (even part-time) owns weekly inventory snapshot export for leadership. Sales cannot mark sold without booking confirmation in system. Slow phase playbooks triggered when sold percentage flat for thirty days with active broker count.
`,

  accounting: `
### Handoff to leadership

Finance signs off on plot-level balance as sales source of truth; Tally remains statutory layer. Overdue installment trends by phase inform collection campaigns. GST and milestone disputes drop when receipts attach to booking IDs agents can cite.

### Training rhythm

Finance learns booking export format before agents go live. Agents never mark collected without finance role—request only. Monthly close uses booking-keyed export, not retyped names from notebooks.
`,

  commercial: `
### Handoff to leadership

Commercial unit mistakes cost more per error—leadership reviews corner and frontage availability before broker pushes. Mixed portfolio meetings compare commercial velocity to plotted land with same dashboard. Institutional buyers receive consistent digital presentation standard as mass layouts.

### Training rhythm

Commercial specialists train on sq. ft. pricing tools and portal view. Brokers selling shops and plots use one login when policy allows. High-value block approvals may need second approver—configure roles before marketing premium units.
`,

  erp: `
### Handoff to leadership

Steering committee separates sales go-live from GL migration dates. Success is agents and partners on live map for next launch—even if finance modules roll later. Avoid ERP vanity metrics while WhatsApp still sells inventory.

### Training rhythm

Sales ops leads ERP training for field teams; IT supports integrations. Modules not used in first ninety days stay disabled to reduce noise. Export cadence to accounting agreed in writing week one of pilot.
`,

  apartment: `
### Handoff to leadership

Tower releases mirror plot discipline: floor-wise availability live before broker blast. Mixed developers report flat and plot velocity together for capital allocation. Buyers choosing between products should see one brand experience in CRM and portals.

### Training rhythm

Tower stewards manage unit status; plotted land stewards separate but share CRM training. Brokers see only towers they sell if policy requires. Rehearse two simultaneous bookings on same floor in staging—conflict handling must be instant.
`,

  backOffice: `
### Handoff to leadership

Back office throughput measured in bookings closed with complete document sets per week—not hours spent retyping. Commission payout disputes tracked; policy updates follow patterns. Launch weekends need named approver coverage in advance.

### Training rhythm

Document checklist introduced booking-by-booking before bulk import. Commission accrual demo for finance and partner coordinator together. Audit log review monthly—random ten bookings checked for timestamp completeness.
`,
}

export function getRolloutPlaybook(pageKey) {
  const parts = [PLAYBOOKS[pageKey], LEADERSHIP_BLOCKS[pageKey]].filter(Boolean)
  return parts.join("\n\n").trim()
}
