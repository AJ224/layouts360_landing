import { standardFaqs, standardPlatformLinks } from "./landing-body-builder.mjs"

function page(cfg) {
  const platformLinks = standardPlatformLinks(cfg.platformOverrides ?? [])
  return {
    ...cfg,
    platformLinks,
    faqs: standardFaqs(
      {
        categoryTerm: cfg.categoryTerm,
        categoryShort: cfg.categoryShort,
        faqDefinition: cfg.faqDefinition,
      },
      cfg.faqExtra ?? [],
    ),
    relatedLinks: cfg.relatedLinks ?? platformLinks.slice(0, 5),
  }
}

const wf = (steps) => steps

export const LANDING_CONFIGS = [
  page({
    pageKey: "plot",
    path: "/real-estate-plot-management-software",
    primaryKeyword: "real estate plot management software",
    title: "Real Estate Plot Management Software for Developers & Builders",
    description:
      "Real estate plot management software for builders in India—digital maps, live inventory, CRM, bookings, and payments. Stop Excel chaos and double bookings.",
    keywords: [
      "real estate plot management software",
      "plot management software",
      "plot management software India",
      "digital layout software",
    ],
    ogTitle: "Real Estate Plot Management Software | Layouts360",
    ogDescription: "Complete plot management for builders: inventory, bookings, payments, and interactive digital layouts.",
    breadcrumbLabel: "Plot Management Software",
    softwareDescription: "Plot management software for layout developers in India—digital maps, live inventory, CRM, and booking workflows.",
    categoryTerm: "real estate plot management software",
    categoryShort: "plot management",
    heroIntro: [
      "Layouts360 is real estate plot management software for Indian layout developers—live digital maps, plot-level inventory, and sales workflows in one platform.",
      "Replace paper layouts and Excel with satellite-backed site plans where every agent and broker sees the same availability in real time.",
      "From boutique 50-plot layouts to multi-phase townships, teams go live in days with plans from ₹2,000/month and unlimited users on tiers.",
    ],
    definition:
      "**Real estate plot management software** digitizes site plans, tracks every plot's status and pricing, and connects sales to live inventory. Unlike generic spreadsheets, it understands plot numbers, phases, facing, dimensions, and booking states on an interactive map.",
    definitionExtra:
      "Developers searching **plot management software in India** usually need live availability, double-booking prevention, and mobile tools for site offices—not another static PDF workflow.",
    faqDefinition:
      "Software to digitize layout maps, manage plot-level inventory and bookings, and sell plots with live availability—built for Indian layout developers.",
    solutionBullets: [
      "Interactive satellite-backed digital layouts",
      "Real-time available, blocked, booked, and sold status",
      "Plot-linked CRM and payment tracking",
      "Mobile-first for field sales and site offices",
    ],
    problems: [
      {
        title: "Excel version conflicts",
        body: "Multiple spreadsheet copies diverge after each site visit. Agents sell from outdated files while the office maintains a different master sheet.",
      },
      {
        title: "Paper maps at the site office",
        body: "Buyers cannot visualize plot position on land. Agents guess distances and facing while trust erodes compared to digital presentation.",
      },
      {
        title: "Double bookings",
        body: "Two agents or brokers confirm the same plot because status was not updated instantly after the morning token.",
      },
      {
        title: "Disconnected CRM",
        body: "Leads live in a generic CRM without plot context, so follow-ups ignore which units are actually available.",
      },
    ],
    features: [
      {
        name: "Interactive site plans",
        benefit: "Upload CAD or PDF; overlay on satellite imagery for trust.",
        outcome: "Buyers shortlist faster; NRIs evaluate before travel.",
      },
      {
        name: "Plot status engine",
        benefit: "Color-coded available, blocked, booked, sold on every device.",
        outcome: "Fewer conflicts; leadership trusts live sold percentage.",
      },
      {
        name: "Plot cards",
        benefit: "Dimensions, facing, area, and pricing on tap.",
        outcome: "Agents answer on site without calling HQ.",
      },
      {
        name: "Multi-project control",
        benefit: "Switch phases and projects in one account.",
        outcome: "Portfolio visibility without separate files per layout.",
      },
      {
        name: "Booking and holds",
        benefit: "Timed blocks with auto-expiry before confirmation.",
        outcome: "Fair launches; less hoarding of inventory.",
      },
    ],
    useCases: [
      {
        title: "Multi-phase township",
        body: "Release Phase 2 while Phase 1 sells—shared CRM, separate inventory per phase, one leadership dashboard.",
      },
      {
        title: "Site office walk-ins",
        body: "Tablet layout at the cabin; block plot while buyer arranges token; status syncs to brokers instantly.",
      },
      {
        title: "Broker weekend launch",
        body: "Partners sell from live portal; desk approves bookings from the same map.",
      },
      {
        title: "NRI campaigns",
        body: "Share project link abroad; buyer sees live availability before booking travel.",
      },
    ],
    workflow: wf([
      { title: "Digitize layout", body: "Import plot master with numbers, area, facing, and base pricing." },
      { title: "Publish live map", body: "Sales and partners sell from color-coded availability." },
      { title: "Capture leads", body: "Enquiries tie to plot interest in CRM." },
      { title: "Block and book", body: "Timed holds convert to bookings with payments." },
      { title: "Track installments", body: "Finance sees balances on the same plot record." },
      { title: "Report", body: "Leadership monitors velocity and collections live." },
    ]),
    relatedLinks: [
      { href: "/blog/plot-management-software-india", label: "Best plot management software India" },
      { href: "/compare/digital-plot-management-vs-manual-excel", label: "Digital vs Excel guide" },
    ],
    ctaTitle: "Ready to modernize your plot management?",
    ctaDescription: "Book a free demo and see your layout live on an interactive map.",
  }),

  page({
    pageKey: "inventory",
    path: "/real-estate-inventory-management-software",
    primaryKeyword: "real estate inventory management software",
    title: "Real Estate Inventory Management Software for Plot & Layout Developers",
    description:
      "Real estate inventory management software for plots, flats, and commercial units—live availability, prevent double bookings, sync sales across teams in India.",
    keywords: [
      "real estate inventory management software",
      "real estate inventory management",
      "real estate inventory app",
      "real estate software India",
      "property inventory management platform",
      "plot management software",
    ],
    ogTitle: "Real Estate Inventory Management Software | Layouts360",
    ogDescription:
      "Inventory app for Indian layout developers—live plots, flats, and commercial units. Mobile site office, broker portal, from ₹2,000/month. Free demo.",
    breadcrumbLabel: "Inventory Management Software",
    softwareDescription: "Real estate inventory management for plots, flats, and commercial units with live availability.",
    categoryTerm: "real estate inventory management software",
    categoryShort: "inventory management",
    heroIntro: [
      "**Real estate inventory management software** gives developers one system of record for every sellable unit—plots, flats, shops, and commercial plots—with live status across teams.",
      "When marketing, sales, brokers, and leadership read the same availability, double bookings and buyer disputes drop sharply.",
      "Layouts360 combines inventory with digital layouts, CRM, and booking so inventory is not a spreadsheet silo.",
    ],
    definition:
      "**Real estate inventory management software** tracks sellable units across projects with real-time availability, pricing, buyer interest, and booking state. It is the operational core of plot and layout sales in India.",
    faqDefinition:
      "A platform to track, manage, and sell property inventory with real-time visibility into availability, bookings, and sales performance.",
    solutionBullets: [
      "Single database for all channels",
      "Automatic locks when booking starts",
      "Multi-property types on one platform",
      "Roll-up dashboards for leadership",
    ],
    problems: [
      {
        title: "Multiple sources of truth",
        body: "Website, sales desk, and brokers show different availability within hours.",
      },
      {
        title: "Slow status updates",
        body: "Field sales book on site while HQ sheet updates tonight—classic double booking window.",
      },
      {
        title: "No portfolio view",
        body: "Leadership cannot see unsold exposure across projects without manual consolidation.",
      },
      {
        title: "Launch chaos",
        body: "High-volume days break informal inventory discipline without timed blocks.",
      },
    ],
    features: [
      {
        name: "Inventory app for field sales",
        benefit: "Mobile-first layout and status on phones and tablets at site office.",
        outcome: "Agents block and book where buyers stand—no evening sheet updates.",
      },
      {
        name: "Live availability",
        benefit: "Instant sync web and mobile.",
        outcome: "Agents never promise sold plots.",
      },
      {
        name: "Booking locks",
        benefit: "In-progress state visible to all.",
        outcome: "Fair partner and walk-in sales.",
      },
      {
        name: "Multi-project dashboard",
        benefit: "Switch projects without exports.",
        outcome: "Faster decisions for directors.",
      },
      {
        name: "Plots and apartments",
        benefit: "Unit models for land and towers.",
        outcome: "Mixed developers run one ops stack.",
      },
      {
        name: "Partner visibility",
        benefit: "Brokers see same inventory as HQ.",
        outcome: "Fewer PDF update cycles.",
      },
    ],
    useCases: [
      { title: "Multi-layout developer", body: "Five active layouts; one inventory engine and CRM." },
      { title: "Apartment + plot mix", body: "Towers and open plots tracked together." },
      { title: "Commercial phase", body: "Shops sold with per sq. ft. rules on same platform." },
      { title: "Launch weekend", body: "Timed blocks protect high-demand phases." },
    ],
    workflow: wf([
      { title: "Import units", body: "Plots or flats with IDs and pricing." },
      { title: "Set status rules", body: "Available, blocked, booked, sold." },
      { title: "Sell across channels", body: "Desk, agents, partners, links." },
      { title: "Confirm bookings", body: "Payments update status automatically." },
      { title: "Monitor", body: "Dashboards for sold % and exposure." },
      { title: "Adjust pricing", body: "Update once; all channels reflect change." },
    ]),
    platformOverrides: [{ href: "/property-inventory-management-platform", label: "Property inventory platform" }],
    relatedLinks: [
      { href: "/real-estate-inventory-management", label: "What is inventory management" },
      { href: "/blog/what-is-real-estate-inventory-management", label: "Inventory management guide" },
      { href: "/blog/real-estate-inventory-template-excel-alternative", label: "Excel template alternative" },
      { href: "/blog/best-real-estate-inventory-management-software-india-2026", label: "Best inventory software India" },
      { href: "/compare/real-estate-inventory-management-excel-vs-live-inventory", label: "Excel vs live inventory" },
    ],
    faqExtra: [
      {
        question: "Is there free real estate inventory management software?",
        answer:
          "Free Excel templates and rental CRM trials are common, but plot layout sales need live maps, timed blocks, and broker portals. Layouts360 offers a free demo and plans from ₹2,000/month with unlimited users on tiers—not a fake “free forever” inventory tool that breaks at launch.",
      },
      {
        question: "Does Layouts360 work as a real estate inventory app?",
        answer:
          "Yes. Layouts360 is mobile-first: agents and partners use the layout and inventory on phones and tablets at the site office. It is a web app—no separate install required for field sales.",
      },
      {
        question: "Can I use an Excel inventory template instead?",
        answer:
          "Templates help plan a phase; they do not sync desk, agents, and brokers in real time. See our guide on Excel inventory templates and migrate to live inventory before launch weekends or large partner networks.",
      },
      {
        question: "How does this relate to lead management and CRM in India?",
        answer:
          "Inventory should connect to real estate lead management and CRM on the same plot or unit ID. Layouts360 unifies inventory, CRM, bookings, and channel partners for Indian layout developers.",
      },
    ],
    extraSection: `
## Real estate inventory app for site office and brokers

Buyers searching for a **real estate inventory app** usually need field teams to see live plot or unit status—not another desktop CRM. Layouts360 runs in the browser on phones and tablets: digital layout, plot cards, block-to-book, and partner portal access without maintaining a separate “app” export from Excel.

Site agents answer availability on the map at the cabin. Brokers sell from the same live inventory as your desk. Leadership checks sold percentage from the same dashboard—**real estate software for India** that matches how layout sales actually happen.

If you are comparing **real estate inventory management software free** listings, validate live blocking on your layout in the demo—not feature checklists alone.
`,
    ctaTitle: "Ready to transform your inventory management?",
    ctaDescription: "See your inventory on an interactive layout in a free demo.",
  }),

  page({
    pageKey: "inventoryManagement",
    path: "/real-estate-inventory-management",
    primaryKeyword: "real estate inventory management",
    title: "Real Estate Inventory Management for Layout Developers (India)",
    description:
      "Learn real estate inventory management for Indian layout developers—metrics, bottlenecks, broker discipline, and live inventory practices. Software when you are ready to digitize.",
    keywords: [
      "real estate inventory management",
      "real estate inventory",
      "property inventory management",
      "inventory management real estate India",
    ],
    ogTitle: "Real Estate Inventory Management Guide | Layouts360",
    ogDescription:
      "Months of inventory, absorption rate, and live unit status for plot and layout sales in India—without Excel chaos.",
    breadcrumbLabel: "Real Estate Inventory Management",
    softwareDescription:
      "Practices and software for real estate inventory management on plotted layouts and mixed projects in India.",
    categoryTerm: "real estate inventory management",
    categoryShort: "inventory management",
    heroIntro: [
      "**Real estate inventory management** is how Indian layout developers track unsold plots, flats, and commercial units so sales, brokers, and leadership share one availability truth.",
      "This page covers what inventory means, metrics like months of inventory and absorption rate, where Excel and PDF brokers fail, and how to manage inventory before you buy software.",
      "When you are ready to digitize, Layouts360 connects live maps, bookings, CRM, and partner portals on the same unit records.",
    ],
    definition:
      "**Real estate inventory management** is the discipline of tracking sellable units, updating status when buyers block or book, and reporting sold percentage and exposure across phases and projects. For layout developers, inventory is plot and unit IDs on a plan—not warehouse stock.",
    definitionExtra:
      "Educational guides on [what is real estate inventory management](/blog/what-is-real-estate-inventory-management) and [CRM with inventory](/blog/real-estate-crm-with-inventory-management) go deeper; [inventory management software](https://layouts360.com/real-estate-inventory-management-software) is the product path when operations outgrow spreadsheets.",
    faqDefinition:
      "The practice and systems used to track, sell, and report on unsold property units with accurate availability across sales, partners, and leadership.",
    solutionBullets: [
      "Define status rules: available, blocked, booking in progress, sold",
      "Measure months of inventory and absorption by phase",
      "Replace PDF broker cycles with live partner portals",
      "Connect inventory to CRM, bookings, and installments on one record",
    ],
    solutionExtra:
      "Layouts360 implements these practices as **real estate inventory management software** with digital layouts—see the software page when you need block-to-book on a live map.",
    problems: [
      {
        title: "Metrics without live data",
        body: "Months of inventory and absorption are calculated in Excel while field status lags by a day—decisions look precise but rest on stale counts.",
      },
      {
        title: "Broker PDF inventory",
        body: "Partners forward brochures faster than you update availability; high-value disputes start with wrong green cells on a map.",
      },
      {
        title: "Phase release guesswork",
        body: "Phase 2 launches while Phase 1 still has slow-moving plots because leadership lacks one portfolio view of exposure.",
      },
      {
        title: "CRM without unit context",
        body: "Pipeline lists buyer names while inventory lives elsewhere—follow-ups ignore which plots are actually available this week.",
      },
    ],
    features: [
      {
        name: "Inventory metrics that matter",
        benefit: "Track months of inventory, absorption, and absolute unsold count per phase.",
        outcome: "Release timing and broker incentives use evidence, not anecdotes.",
      },
      {
        name: "Single status vocabulary",
        benefit: "Everyone uses the same available / blocked / sold meanings.",
        outcome: "Fewer arguments between marketing, desk, and finance.",
      },
      {
        name: "Partner discipline",
        benefit: "Brokers sell from live inventory, not forwarded PDFs.",
        outcome: "Scale past twenty partners without a full-time PDF coordinator.",
      },
      {
        name: "Launch-ready blocking",
        benefit: "Timed holds during high-demand weekends.",
        outcome: "Fair queues; less hoarding and double allotment.",
      },
      {
        name: "Software when ready",
        benefit: "Digitize layout, import units, go live in days per project.",
        outcome: "Move from practices on paper to enforced status in software.",
      },
    ],
    useCases: [
      {
        title: "Director reviewing exposure",
        body: "Roll up unsold plots and flats across five active layouts before pricing or phase release.",
      },
      {
        title: "Pre-launch policy",
        body: "Publish hold duration and partner rules the week before brokers arrive.",
      },
      {
        title: "Mixed plot and tower",
        body: "One inventory language for open plots and apartment floors in the same brand.",
      },
      {
        title: "Post-launch debrief",
        body: "Use booking IDs and block logs to tune policy before the next phase—not memory alone.",
      },
    ],
    workflow: wf([
      { title: "Define units and phases", body: "Number every sellable plot or flat; isolate unreleased phases." },
      { title: "Set metrics baseline", body: "Record unsold count and recent booking pace for absorption." },
      { title: "Fix status discipline", body: "Update availability in one system when blocks and bookings happen." },
      { title: "Align brokers", body: "Portal or live links replace PDF inventory cycles." },
      { title: "Review weekly", body: "Leadership checks sold %, exposure, and collection lag per phase." },
      { title: "Digitize", body: "Adopt layout-native software when Excel risk exceeds comfort." },
    ]),
    platformOverrides: [
      { href: "/real-estate-inventory-management-software", label: "Inventory management software" },
      { href: "/property-inventory-management-platform", label: "Property inventory platform" },
    ],
    relatedLinks: [
      { href: "/blog/what-is-real-estate-inventory-management", label: "What is inventory management" },
      { href: "/blog/real-estate-inventory-template-excel-alternative", label: "Excel template guide" },
      { href: "/blog/real-estate-crm-with-inventory-management", label: "CRM with inventory" },
      { href: "/real-estate-inventory-management-software", label: "Inventory software" },
      { href: "/compare/real-estate-inventory-management-excel-vs-live-inventory", label: "Excel vs live inventory" },
    ],
    faqExtra: [
      {
        question: "What is months of inventory in real estate?",
        answer:
          "Estimated months to sell current unsold units at recent sales pace, excluding unreleased phases. Useful for phase release and broker planning when counts are live.",
      },
      {
        question: "What is absorption rate?",
        answer:
          "How quickly available units convert to bookings or sales. Rising absorption may support the next release; flat absorption with high inventory may need pricing or broker review.",
      },
      {
        question: "How is inventory management different from inventory software?",
        answer:
          "Management is process and policy; software enforces status in real time. End-of-day sheet updates are still manual management with extra steps.",
      },
      {
        question: "Do I need CRM if I fix inventory?",
        answer:
          "Inventory without CRM loses lead and visit context; CRM without inventory loses unit truth. Plot developers need both on the same plot or flat ID.",
      },
      {
        question: "Should I start from an Excel inventory template?",
        answer:
          "Templates are fine for planning; they fail as the daily master when brokers and multiple agents sell the same phase. Move to live status before scale—see the Excel template alternative guide on our blog.",
      },
    ],
    ctaTitle: "Ready to manage inventory on a live layout?",
    ctaDescription: "See real estate inventory management software with maps, blocks, and partner portals in a free demo.",
  }),

  page({
    pageKey: "booking",
    path: "/real-estate-booking-management-software",
    primaryKeyword: "real estate booking management software",
    title: "Real Estate Booking Management Software",
    description:
      "Real estate booking management software for plot sales—timed holds, tokens, confirmations, and payment-linked inventory for Indian developers.",
    keywords: ["real estate booking management software", "booking management software", "plot booking software"],
    ogTitle: "Plot Booking Management Software | Layouts360",
    ogDescription: "Manage plot bookings, holds, and payments in one system with live inventory.",
    breadcrumbLabel: "Booking Management Software",
    softwareDescription: "Booking management for plot tokens, holds, confirmations, and payment-linked inventory.",
    categoryTerm: "real estate booking management software",
    categoryShort: "booking management",
    heroIntro: [
      "**Real estate booking management software** connects every token, hold, and confirmation to live plot inventory—so sales, finance, and brokers agree on what is sold.",
      "Stop recording bookings in Excel while the layout still shows plots as available.",
      "Layouts360 links bookings to CRM and payment tracking for Indian plot and layout developers.",
    ],
    definition:
      "**Real estate booking management software** manages the path from interest to confirmed sale: temporary blocks, booking amounts, installments, documents, and map status.",
    faqDefinition:
      "Software to manage plot bookings from hold through confirmation, including tokens, payments, and live inventory updates.",
    solutionBullets: [
      "Timed plot holds with auto-expiry",
      "Paperless booking and payment links",
      "Booking tied to customer and plot records",
      "Finance and sales share one booking truth",
    ],
    problems: [
      { title: "Token without inventory lock", body: "Payment received but plot still green on the map." },
      { title: "Verbal holds", body: "Infinite blocks until someone remembers to release." },
      { title: "Disconnected payments", body: "Razorpay links not tied to unit IDs." },
      { title: "Document chaos", body: "Agreements in folders; status in spreadsheets." },
    ],
    features: [
      { name: "Timed blocking", benefit: "Configurable expiry.", outcome: "Fair access during launches." },
      { name: "Token capture", benefit: "Integrated collection.", outcome: "Fewer reconciliation errors." },
      { name: "Installment plans", benefit: "Milestones per booking.", outcome: "Finance clarity." },
      { name: "Digital documents", benefit: "Receipts and agreements stored.", outcome: "Audit readiness." },
      { name: "Online booking flows", benefit: "Customer links with live data.", outcome: "NRI-friendly sales." },
    ],
    useCases: [
      { title: "Walk-in token", body: "Block at site; payment link before buyer leaves." },
      { title: "Partner-submitted booking", body: "Approve from desk with full context." },
      { title: "Sunday night online token", body: "Inventory locked while office closed." },
      { title: "Installment collection", body: "Track partial payments on schedule." },
    ],
    workflow: wf([
      { title: "Select plot", body: "From live layout." },
      { title: "Start hold", body: "Timer begins." },
      { title: "Collect token", body: "Payment links or desk entry." },
      { title: "Confirm booking", body: "Status moves to booked." },
      { title: "Schedule installments", body: "Finance tracks balance." },
      { title: "Close handover", body: "Documents on customer record." },
    ]),
    platformOverrides: [{ href: "/online-plot-booking-software", label: "Online plot booking" }],
    relatedLinks: [
      { href: "/blog/real-estate-booking-management-software-guide", label: "Booking software guide" },
      { href: "/compare/integrated-payment-collection-plot-booking", label: "Integrated payments" },
    ],
    ctaTitle: "Streamline plot bookings end to end",
    ctaDescription: "See holds, confirmations, and payments on your layout in a demo.",
  }),

  page({
    pageKey: "crm",
    path: "/real-estate-crm-software",
    primaryKeyword: "real estate crm software",
    title: "Real Estate CRM Software for Builders & Developers",
    description:
      "Real estate CRM software built for plot developers in India—plot-linked leads, pipeline, follow-ups, and live inventory in one system.",
    keywords: [
      "real estate crm software",
      "real estate CRM software India",
      "crm for real estate",
      "real estate CRM India",
      "real estate crm app",
    ],
    ogTitle: "Real Estate CRM Software India | Layouts360",
    ogDescription:
      "Plot-linked real estate CRM software for India—mobile site office, live inventory, partners. Free demo. From ₹2,000/month.",
    breadcrumbLabel: "Real Estate CRM Software",
    softwareDescription: "Real estate CRM with plot-linked leads, pipeline, and live inventory for Indian developers.",
    categoryTerm: "real estate CRM software",
    categoryShort: "real estate CRM",
    variant: "crm",
    heroIntro: [
      "**Real estate CRM software** for builders should tie every lead to real plot inventory—not another contact list without layout context.",
      "Layouts360 connects CRM, lead management, and live maps so agents never follow up on plots that sold an hour ago.",
      "Unlimited users on tiers suit growing sales teams without per-seat surprise bills from global CRMs.",
    ],
    definition:
      "**Real estate CRM software** organizes inquiries, follow-ups, site visits, and pipeline stages from first call to booking. For plot developers, CRM must understand plot numbers, phases, and availability—not only contact names.",
    faqDefinition:
      "CRM that captures leads, schedules follow-ups, tracks site visits, and links buyers to specific plots on a live layout map.",
    solutionBullets: [
      "Plot-linked leads and pipeline",
      "Mobile follow-ups on site",
      "Lead source tracking",
      "Shared inventory with sales desk",
    ],
    problems: [
      { title: "Generic CRM gaps", body: "HubSpot does not know Plot 42 in Phase 2 exists." },
      { title: "Lost follow-ups", body: "Hot leads cool because reminders live in personal phones." },
      { title: "No inventory tie-in", body: "Agents promise unavailable units." },
      { title: "Broker lead disputes", body: "No system of record for ownership." },
    ],
    features: [
      { name: "Plot-specific leads", benefit: "Interest tied to units.", outcome: "Relevant site visits." },
      { name: "Pipeline stages", benefit: "Inquiry to sold visibility.", outcome: "Manager coaching." },
      { name: "Follow-up reminders", benefit: "Calls and visits scheduled.", outcome: "Higher conversion." },
      { name: "Lead sources", benefit: "Portal, walk-in, broker tags.", outcome: "Marketing ROI hints." },
      { name: "Team accountability", benefit: "Overdue lead views.", outcome: "Less leakage." },
    ],
    useCases: [
      { title: "Portal lead rush", body: "Assign and call within hours with plot context." },
      { title: "Site visit day", body: "Log outcomes on mobile at cabin." },
      { title: "Broker referrals", body: "Track partner-sourced leads fairly." },
      { title: "Director review", body: "See hot plots and stalled deals weekly." },
    ],
    workflow: wf([
      { title: "Capture lead", body: "Portal, walk-in, or broker." },
      { title: "Assign owner", body: "Rules by project." },
      { title: "Schedule follow-up", body: "Reminders fire." },
      { title: "Site visit", body: "Show live layout." },
      { title: "Block/book", body: "Inventory updates." },
      { title: "Handover to finance", body: "Payments on same record." },
    ]),
    platformOverrides: [
      { href: "/real-estate-lead-management-software", label: "Lead management" },
      { href: "/best-real-estate-crm-software", label: "Best CRM India" },
    ],
    relatedLinks: [
      { href: "/real-estate-crm", label: "What is real estate CRM" },
      { href: "/blog/what-is-real-estate-crm-software", label: "CRM software guide" },
      { href: "/blog/top-10-real-estate-crm-software-india", label: "Top 10 CRM India" },
      { href: "/blog/real-estate-crm-pricing-and-free-trials-india", label: "CRM pricing & free demo" },
      { href: "/blog/real-estate-crm-for-builders", label: "CRM for builders" },
      { href: "/compare/purpose-built-real-estate-software-vs-generic-crm", label: "vs generic CRM" },
    ],
    faqExtra: [
      {
        question: "Is there free real estate CRM software?",
        answer:
          "Free tiers are usually contact-limited or rental CRMs—not plot layouts with live maps and broker portals. Layouts360 offers a free demo and plans from ₹2,000/month with unlimited users on tiers.",
      },
      {
        question: "Can I download real estate CRM software?",
        answer:
          "Layouts360 is cloud CRM and inventory in the browser on phone, tablet, and desktop—no separate master file to download. Agents always use live data.",
      },
      {
        question: "What is real estate CRM pricing in India?",
        answer:
          "Compare per-seat global CRMs vs INR tiers for growing teams. See our pricing and free trials guide; total cost should include eliminating parallel Excel inventory.",
      },
      {
        question: "Is there open-source real estate CRM on GitHub?",
        answer:
          "GitHub projects lack supported launch workflows for Indian plot sales. Layouts360 is commercial cloud software built for layout developers.",
      },
    ],
    extraSection: `
## Real estate CRM app for site office and brokers

**Real estate CRM software** must work as a **mobile CRM app** at the site cabin—plot cards, follow-ups, and blocks on phone and tablet. Layouts360 is mobile-first web CRM tied to live inventory, not a desktop-only contact database agents ignore in the field.

Partners use the same system for lead submit and booking requests instead of forwarding PDF maps in WhatsApp.
`,
    ctaTitle: "Ready for a real estate CRM that understands plots?",
    ctaDescription: "See CRM, leads, and inventory in one demo walkthrough.",
  }),

  page({
    pageKey: "crmGuide",
    path: "/real-estate-crm",
    primaryKeyword: "real estate crm",
    title: "Real Estate CRM for Layout Developers in India",
    description:
      "What real estate CRM is, why plot developers need inventory-linked CRM, and how to choose CRM software in India—before you buy Sell.do or generic tools.",
    keywords: [
      "real estate crm",
      "real estate CRM India",
      "real estate crm software India",
      "best real estate crm software in India",
      "crm for real estate developers",
    ],
    ogTitle: "Real Estate CRM Guide India | Layouts360",
    ogDescription:
      "CRM practices for Indian layout developers—plot-linked leads, partners, mobile site office, vs generic CRM.",
    breadcrumbLabel: "Real Estate CRM",
    softwareDescription: "Guide to real estate CRM for plot and layout sales teams in India.",
    categoryTerm: "real estate CRM",
    categoryShort: "real estate CRM",
    variant: "crm",
    heroIntro: [
      "**Real estate CRM** for layout developers is more than contact storage—it is follow-ups, site visits, and pipeline tied to **specific plots** on a live map.",
      "This page explains what CRM should do for Indian plot sales, how it differs from apartment-first PropTech CRMs, and when to adopt software.",
      "Layouts360 connects CRM, inventory, booking, and channel partners for teams outgrowing Excel and WhatsApp pipelines.",
    ],
    definition:
      "**Real estate CRM** organizes buyer and partner relationships from enquiry through booking. For plotted land sales, CRM must reference plot numbers, phases, blocks, and live availability—not only names and phone numbers.",
    definitionExtra:
      "Product depth: [real estate CRM software](https://layouts360.com/real-estate-crm-software). Comparisons: [what is CRM software](/blog/what-is-real-estate-crm-software), [top 10 in India](/blog/top-10-real-estate-crm-software-india), [pricing & free demo](/blog/real-estate-crm-pricing-and-free-trials-india).",
    faqDefinition:
      "Systems and practices to capture leads, manage follow-ups and site visits, and connect buyers to sellable units for real estate developers.",
    solutionBullets: [
      "Plot-linked leads and pipeline stages",
      "Mobile follow-up at site office",
      "Lead source and partner ownership rules",
      "Same CRM record through booking and installments",
    ],
    solutionExtra:
      "When CRM is ready to become software, use [real estate CRM software](https://layouts360.com/real-estate-crm-software) with live inventory—not CRM plus a shadow Excel map.",
    problems: [
      {
        title: "Contact-only CRM",
        body: "Pipeline grows while agents still sell from spreadsheets without plot context.",
      },
      {
        title: "Missed follow-ups",
        body: "Hot walk-ins cool because reminders live on personal phones, not the unit they viewed.",
      },
      {
        title: "Broker lead fights",
        body: "No system of record for partner introductions before payout day.",
      },
      {
        title: "Marketing CRM mismatch",
        body: "Email automation scores high while launch still runs on paper charts.",
      },
    ],
    features: [
      {
        name: "Plot-context pipeline",
        benefit: "Stages reflect block, token, booked.",
        outcome: "Honest manager reviews.",
      },
      {
        name: "Site visit logging",
        benefit: "Plots shown recorded on mobile.",
        outcome: "Better return visits.",
      },
      {
        name: "Partner CRM rules",
        benefit: "Ownership windows in software.",
        outcome: "Fewer disputes.",
      },
      {
        name: "Inventory alignment",
        benefit: "CRM reads live map.",
        outcome: "No sold-plot follow-ups.",
      },
      {
        name: "Software path",
        benefit: "CRM + map + booking stack.",
        outcome: "One adoption curve.",
      },
    ],
    useCases: [
      { title: "Portal lead surge", body: "Assign and call with plot interest captured." },
      { title: "Walk-in at cabin", body: "Block while buyer is present." },
      { title: "Broker weekend", body: "Partner leads tagged fairly." },
      { title: "Director pipeline", body: "Weekly map-based coaching." },
    ],
    workflow: wf([
      { title: "Capture", body: "Source + plot interest required." },
      { title: "Assign", body: "Rules by project." },
      { title: "Follow up", body: "Tasks tied to units." },
      { title: "Visit", body: "Log plots shown." },
      { title: "Block/book", body: "Inventory updates." },
      { title: "Software", body: "Adopt CRM with live layout." },
    ]),
    platformOverrides: [
      { href: "/real-estate-crm-software", label: "CRM software" },
      { href: "/best-real-estate-crm-software", label: "Best CRM India" },
      { href: "/real-estate-lead-management-software", label: "Lead management" },
    ],
    relatedLinks: [
      { href: "/blog/what-is-real-estate-crm-software", label: "What is CRM software" },
      { href: "/blog/top-10-real-estate-crm-software-india", label: "Top 10 CRM India" },
      { href: "/compare/real-estate-crm-software-india-leadsquared-selldo-vs-layouts360", label: "PropTech CRM comparison" },
    ],
    faqExtra: [
      {
        question: "What is the best real estate CRM in India?",
        answer:
          "For plot developers, the best CRM links leads to live layout inventory and bookings. Compare block-to-book in demo with your map—not only marketing features.",
      },
      {
        question: "How is CRM different from lead management?",
        answer:
          "Lead management focuses on capture and assignment; CRM adds pipeline, visits, and conversion through booking. Plot sales need both plus inventory.",
      },
    ],
    ctaTitle: "Ready for CRM software built for plots?",
    ctaDescription: "Book a demo—CRM, inventory, and partners on one layout.",
  }),

  page({
    pageKey: "channelPartner",
    path: "/real-estate-channel-partner-management-software",
    primaryKeyword: "channel partner management software",
    title: "Channel Partner Management Software for Real Estate Developers",
    description:
      "Channel partner management software for layout developers—broker portals, live inventory, lead tagging, and booking workflows in India.",
    keywords: ["channel partner management software", "broker portal real estate"],
    ogTitle: "Real Estate Channel Partner Management Software | Layouts360",
    ogDescription: "Broker portal, live layouts, and plot-linked bookings for Indian real estate channel sales.",
    breadcrumbLabel: "Channel Partner Management",
    softwareDescription: "Channel partner management with broker portals and live plot inventory.",
    categoryTerm: "channel partner management software",
    categoryShort: "channel partner management",
    heroIntro: [
      "**Channel partner management software** helps developers scale broker networks with live inventory, structured bookings, and fewer lead disputes than WhatsApp PDFs.",
      "Give hundreds of partners the same availability your desk sees—without hourly layout exports.",
      "Layouts360 is built for Indian layout developers coordinating internal sales and CP networks.",
    ],
    definition:
      "**Channel partner management software** onboards brokers, shares live project inventory, routes leads fairly, and aligns commissions with confirmed bookings.",
    faqDefinition:
      "Software to manage broker networks with live inventory access, booking requests, and commission alignment for plot sales.",
    solutionBullets: ["Partner portals", "Live layout access", "Booking request workflow", "Lead and commission records"],
    problems: [
      { title: "WhatsApp PDF cycles", body: "Brokers sell outdated availability." },
      { title: "Lead fights", body: "Duplicate claims without audit trail." },
      { title: "Commission disputes", body: "Excel ledgers disagree with sales." },
      { title: "Slow approvals", body: "Booking requests lost in chat." },
    ],
    features: [
      { name: "Partner login", benefit: "Project-scoped access.", outcome: "Security and focus." },
      { name: "Live map", benefit: "Same inventory as HQ.", outcome: "Accurate pitches." },
      { name: "Booking requests", benefit: "Approve with context.", outcome: "Faster closures." },
      { name: "Lead capture", benefit: "Phone-based tagging.", outcome: "Fewer disputes." },
      { name: "Commission view", benefit: "Tied to bookings.", outcome: "Partner trust." },
    ],
    useCases: [
      { title: "20-broker network", body: "Replace group PDF blasts with portal." },
      { title: "Launch with CPs", body: "Partners block from live map." },
      { title: "Regional coordinators", body: "Roles approve partner requests." },
      { title: "New broker onboarding", body: "Training on one system." },
    ],
    workflow: wf([
      { title: "Onboard partner", body: "Credentials and projects." },
      { title: "Share live layout", body: "Partner sells from map." },
      { title: "Submit request", body: "Booking or enquiry." },
      { title: "Approve", body: "Desk reviews finance context." },
      { title: "Confirm", body: "Inventory and CRM update." },
      { title: "Commission", body: "Accrue on booking." },
    ]),
    relatedLinks: [
      { href: "/blog/channel-partner-management-software-real-estate-developers", label: "CP management guide" },
      { href: "/compare/channel-partner-broker-portal-real-estate", label: "Broker portal comparison" },
    ],
    ctaTitle: "Professionalize your broker network",
    ctaDescription: "See partner inventory and booking flows in a demo.",
  }),

  page({
    pageKey: "salesAutomation",
    path: "/real-estate-sales-automation-software",
    primaryKeyword: "real estate sales automation software",
    title: "Real Estate Sales Automation Software",
    description:
      "Real estate sales automation software for Indian plot developers—follow-ups, pipeline, and inventory-backed workflows.",
    keywords: ["real estate sales automation", "real estate sales automation software"],
    ogTitle: "Real Estate Sales Automation | Layouts360",
    ogDescription: "Automate follow-ups, pipeline, and plot-linked sales workflows.",
    breadcrumbLabel: "Sales Automation Software",
    softwareDescription: "Sales automation with plot-linked pipeline and live inventory.",
    categoryTerm: "real estate sales automation software",
    categoryShort: "sales automation",
    heroIntro: [
      "**Real estate sales automation software** routes leads, reminds agents, and updates pipeline stages while tied to live plot inventory.",
      "Automation fails when it ignores which plots are actually available—Layouts360 connects tasks to real units.",
      "Ideal for layout launches and growing sales teams in India.",
    ],
    definition:
      "**Real estate sales automation software** reduces manual coordination between marketing, agents, partners, and closing teams with rules, reminders, and inventory-aware actions.",
    faqDefinition:
      "Software that automates lead routing, follow-ups, and pipeline updates connected to property inventory for plot sales.",
    solutionBullets: ["Lead assignment", "Follow-up reminders", "Pipeline stages", "Inventory-aware actions"],
    problems: [
      { title: "Cold leads", body: "Delayed callbacks after portal enquiries." },
      { title: "Stalled pipeline", body: "No visibility on overdue steps." },
      { title: "Generic automation", body: "Emails without plot context." },
      { title: "Launch overload", body: "Manual triage breaks down." },
    ],
    features: [
      { name: "Auto-assign", benefit: "Rules by project.", outcome: "Faster first response." },
      { name: "Reminders", benefit: "Calls and visits.", outcome: "Less leakage." },
      { name: "Pipeline", benefit: "Inquiry to booked.", outcome: "Forecasting." },
      { name: "Hot plot views", benefit: "Inquiry heat map.", outcome: "Pricing decisions." },
      { name: "Launch mode", benefit: "High-volume triage.", outcome: "Calmer weekends." },
    ],
    useCases: [
      { title: "Portal spike", body: "Assign 50 leads same day." },
      { title: "Agent coaching", body: "See overdue by rep." },
      { title: "Launch weekend", body: "Automate hold reminders." },
      { title: "Partner leads", body: "Route CP-sourced enquiries." },
    ],
    workflow: wf([
      { title: "Lead in", body: "Capture with source." },
      { title: "Assign", body: "Agent or team." },
      { title: "Remind", body: "Follow-up tasks." },
      { title: "Visit", body: "Log on mobile." },
      { title: "Block/book", body: "Inventory sync." },
      { title: "Report", body: "Conversion by source." },
    ]),
    platformOverrides: [{ href: "/launch-day-plot-sales-software", label: "Launch day sales" }],
    relatedLinks: [
      { href: "/blog/real-estate-sales-automation-layout-launches", label: "Sales automation for launches" },
      { href: "/compare/instant-lead-follow-up-real-estate-crm", label: "Instant follow-up" },
    ],
    ctaTitle: "Automate plot sales without losing control",
    ctaDescription: "See pipeline and reminders on live inventory in a demo.",
  }),

  page({
    pageKey: "launchDay",
    path: "/launch-day-plot-sales-software",
    primaryKeyword: "launch day plot sales software",
    title: "Launch Day Plot Sales Software",
    description:
      "Launch day plot sales software with timed blocking, live inventory, and launch CRM workflows for Indian developers.",
    keywords: ["launch day plot sales software", "real estate launch CRM"],
    ogTitle: "Launch Day Plot Sales Software | Layouts360",
    ogDescription: "Run digital launches with live layout inventory and timed blocks.",
    breadcrumbLabel: "Launch Day Plot Sales",
    softwareDescription: "Launch day software with timed blocks and live inventory for high-volume plot sales.",
    categoryTerm: "launch day plot sales software",
    categoryShort: "launch day sales",
    heroIntro: [
      "**Launch day plot sales software** helps developers run high-velocity openings with timed plot blocks, live maps, and structured bookings.",
      "Replace paper launch rooms and verbal holds with inventory your desk and brokers share in real time.",
      "Layouts360 supports launch CRM workflows alongside inventory and partner portals.",
    ],
    definition:
      "**Launch day plot sales software** (and **real estate launch CRM** workflows) coordinate EOI, tokens, timed blocks, and approvals when hundreds of buyers act at once.",
    faqDefinition:
      "Software to run project launches with live inventory, timed plot blocks, and structured bookings during high-volume events.",
    solutionBullets: ["Timed blocks", "Live map for all desks", "Partner portal", "Leadership dashboard"],
    problems: [
      { title: "Double allotment", body: "Paper chaos at peak hour." },
      { title: "Broker conflicts", body: "Competing claims on same plot." },
      { title: "Invisible pipeline", body: "No live sold %." },
      { title: "Hold hoarding", body: "Verbal blocks never expire." },
    ],
    features: [
      { name: "Conditional blocking", benefit: "Auto-expiry.", outcome: "Fair inventory." },
      { name: "EOI capture", benefit: "Tied to plots.", outcome: "Ordered queue." },
      { name: "Partner training mode", benefit: "Pre-launch access.", outcome: "Smoother day one." },
      { name: "Live sold %", benefit: "Director view.", outcome: "Faster decisions." },
      { name: "Token workflow", benefit: "Integrated payments.", outcome: "Less manual entry." },
    ],
    useCases: [
      { title: "200-plot opening", body: "Desk + 80 brokers on live map." },
      { title: "Phase 2 release", body: "Repeatable launch playbook." },
      { title: "VIP pre-block window", body: "Policy-driven timers." },
      { title: "Post-launch cleanup", body: "Expired blocks release automatically." },
    ],
    workflow: wf([
      { title: "Pre-train brokers", body: "Portal rehearsal." },
      { title: "Open window", body: "Blocks enabled." },
      { title: "Sell live", body: "Map updates instantly." },
      { title: "Token", body: "Payment confirms booking." },
      { title: "Monitor", body: "Leadership dashboard." },
      { title: "Close", body: "Release unsold holds." },
    ]),
    relatedLinks: [
      { href: "/blog/launch-day-plot-sales-playbook", label: "Launch playbook" },
      { href: "/compare/digital-launch-day-plot-sales", label: "Digital launch day" },
    ],
    ctaTitle: "Run your next launch on live inventory",
    ctaDescription: "See launch blocking and bookings in a demo.",
  }),

  page({
    pageKey: "onlineBooking",
    path: "/online-plot-booking-software",
    primaryKeyword: "online plot booking software",
    title: "Online Plot Booking Software",
    description:
      "Online plot booking software with secure flows, payment collection, and live inventory for Indian real estate developers.",
    keywords: ["online plot booking software", "digital plot booking system"],
    ogTitle: "Online Plot Booking Software India | Layouts360",
    ogDescription: "Customer booking flows with live availability and integrated payments.",
    breadcrumbLabel: "Online Plot Booking Software",
    softwareDescription: "Online plot booking with live inventory and payment integration.",
    categoryTerm: "online plot booking software",
    categoryShort: "online plot booking",
    heroIntro: [
      "**Online plot booking software** lets buyers complete tokens and bookings against live plot inventory—not disconnected payment links in chat.",
      "Share branded project links on ads, WhatsApp, and your website with current pricing and availability.",
      "Layouts360 connects online booking to CRM and payment tracking for Indian developers.",
    ],
    definition:
      "**Online plot booking software** combines customer-facing booking journeys, secure payments, and automatic inventory updates when a plot is reserved or sold.",
    faqDefinition:
      "Software enabling customers to book or token plots online with live availability and integrated payment collection.",
    solutionBullets: ["Live project links", "Secure payments", "Inventory sync", "Mobile-friendly UX"],
    problems: [
      { title: "Stale links", body: "PDFs and old web pages lie about availability." },
      { title: "Orphan payments", body: "Money without plot lock." },
      { title: "NRI friction", body: "Hard to complete steps remotely." },
      { title: "Manual reconciliation", body: "Finance matches payments by hand." },
    ],
    features: [
      { name: "Live layout link", benefit: "Always current.", outcome: "Trust." },
      { name: "Checkout flow", benefit: "Token on plot.", outcome: "Fewer errors." },
      { name: "Receipts", benefit: "Instant confirmation.", outcome: "Professional CX." },
      { name: "CRM record", benefit: "Buyer tied to unit.", outcome: "Follow-up continuity." },
      { name: "GST-ready tracking", benefit: "Amounts recorded.", outcome: "Finance alignment." },
    ],
    useCases: [
      { title: "Instagram campaign", body: "Bio link to live map." },
      { title: "NRI booking", body: "Remote token before visit." },
      { title: "Site office QR", body: "Walk-in scans project link." },
      { title: "Broker-shared link", body: "Partner sends same URL." },
    ],
    workflow: wf([
      { title: "Publish link", body: "Marketing channels." },
      { title: "Buyer selects plot", body: "On map." },
      { title: "Start booking", body: "Inventory locks." },
      { title: "Pay", body: "Gateway collection." },
      { title: "Confirm", body: "Receipt + CRM." },
      { title: "Installments", body: "Schedule continues." },
    ]),
    relatedLinks: [
      { href: "/blog/online-plot-booking-security-payment-flow", label: "Security & payment flow" },
      { href: "/compare/integrated-payment-collection-plot-booking", label: "Integrated payments" },
    ],
    ctaTitle: "Enable online plot booking on your layout",
    ctaDescription: "See customer links and payments in a demo.",
  }),

  page({
    pageKey: "propertyInventory",
    path: "/property-inventory-management-platform",
    primaryKeyword: "property inventory management platform",
    title: "Property Inventory Management Platform",
    description:
      "Property inventory management platform for plots, flats, and commercial units—live maps, CRM, booking, and payments in one system.",
    keywords: ["property inventory management platform", "real estate inventory platform"],
    ogTitle: "Property Inventory Management Platform | Layouts360",
    ogDescription: "Unified platform for property inventory, bookings, and channel sales.",
    breadcrumbLabel: "Property Inventory Platform",
    softwareDescription: "Property inventory management platform with live layouts and sales sync.",
    categoryTerm: "property inventory management platform",
    categoryShort: "property inventory",
    heroIntro: [
      "A **property inventory management platform** is the single system of record for sellable units, status, pricing, and bookings—shared by sales, brokers, and leadership.",
      "Layouts360 unifies maps, CRM, booking, and payments so you are not duct-taping spreadsheets to a website.",
      "Built for Indian developers selling plots, apartments, and commercial inventory.",
    ],
    definition:
      "**Property inventory management platform** (and **property inventory management software**) centralizes unit data, live availability, customer records, and collections for real estate sales teams.",
    faqDefinition:
      "A unified platform for property inventory, digital layouts, CRM, bookings, and payments for developers selling units in India.",
    solutionBullets: ["One database", "Live maps", "Multi-property types", "Partner + desk sync"],
    problems: [
      { title: "Tool sprawl", body: "CRM, Excel, WhatsApp, and PDFs disagree." },
      { title: "No map layer", body: "Tables hide spatial context." },
      { title: "Weak reporting", body: "Manual roll-ups weekly." },
      { title: "Partner drift", body: "Brokers off-platform." },
    ],
    features: [
      { name: "Unified SSOT", benefit: "One status engine.", outcome: "Trust." },
      { name: "Layout layer", benefit: "Spatial selling.", outcome: "Faster decisions." },
      { name: "CRM native", benefit: "Leads on plots.", outcome: "Relevance." },
      { name: "Booking native", benefit: "Locks and tokens.", outcome: "Control." },
      { name: "Reporting", benefit: "Live dashboards.", outcome: "Speed." },
    ],
    useCases: [
      { title: "Portfolio developer", body: "Many projects, one platform." },
      { title: "Mixed inventory", body: "Plots + towers + shops." },
      { title: "Broker-heavy", body: "Partners on live portal." },
      { title: "Digital marketing", body: "Ads to live links." },
    ],
    workflow: wf([
      { title: "Model inventory", body: "Units per project." },
      { title: "Digitize maps", body: "Sell visually." },
      { title: "Run sales", body: "Desk + partners." },
      { title: "Book", body: "Locks and payments." },
      { title: "Collect", body: "Installments tracked." },
      { title: "Report", body: "Leadership view." },
    ]),
    relatedLinks: [
      { href: "/blog/best-real-estate-inventory-management-software-india-2026", label: "Best inventory software" },
      { href: "/compare/single-source-of-truth-plot-inventory", label: "SSOT guide" },
    ],
    ctaTitle: "See your property inventory on one platform",
    ctaDescription: "Schedule a demo across your project types.",
  }),

  page({
    pageKey: "lead",
    path: "/real-estate-lead-management-software",
    primaryKeyword: "real estate lead management software",
    title: "Real Estate Lead Management Software",
    description:
      "Real estate lead management software for Indian developers—capture, assign, and convert leads with plot-linked CRM.",
    keywords: ["real estate lead management software", "lead tracking software real estate"],
    ogTitle: "Real Estate Lead Management Software | Layouts360",
    ogDescription: "Capture, assign, and convert leads with plot-linked CRM and follow-ups.",
    breadcrumbLabel: "Lead Management Software",
    softwareDescription: "Lead management tied to plot inventory and CRM for Indian developers.",
    categoryTerm: "real estate lead management software",
    categoryShort: "lead management",
    variant: "crm",
    heroIntro: [
      "**Real estate lead management software** captures portal, walk-in, and broker enquiries in one place—with assignment rules and follow-up discipline.",
      "Stop losing buyers in forwarded WhatsApp messages while inventory lives elsewhere.",
      "Layouts360 lead management connects to plot maps and CRM on the same platform.",
    ],
    definition:
      "**Real estate lead management software** structures capture, assignment, follow-ups, and conversion reporting—with plot context for layout developers.",
    faqDefinition:
      "Software to capture buyer inquiries, route them to agents, schedule follow-ups, and track progress until booking with plot-level detail.",
    solutionBullets: ["Source tracking", "Assignment rules", "Follow-up reminders", "Plot-linked records"],
    problems: [
      { title: "Lead leakage", body: "No owner after first call." },
      { title: "Duplicate calls", body: "Two agents call same buyer." },
      { title: "Portal chaos", body: "CSV imports delayed." },
      { title: "No conversion data", body: "Cannot see best sources." },
    ],
    features: [
      { name: "Capture", benefit: "All channels.", outcome: "Full funnel." },
      { name: "Assign", benefit: "By project/agent.", outcome: "Accountability." },
      { name: "Remind", benefit: "Tasks fire.", outcome: "Speed." },
      { name: "Plot interest", benefit: "Unit on record.", outcome: "Better visits." },
      { name: "Reports", benefit: "By source.", outcome: "Marketing ROI." },
    ],
    useCases: [
      { title: "99acres CSV", body: "Import and assign same day." },
      { title: "Walk-in log", body: "Site office tablet." },
      { title: "Broker lead", body: "Tagged to partner." },
      { title: "Campaign spike", body: "Auto-assign rules." },
    ],
    workflow: wf([
      { title: "Lead arrives", body: "Tagged source." },
      { title: "Qualify", body: "Budget and plot." },
      { title: "Assign", body: "Agent owns." },
      { title: "Follow up", body: "Reminders." },
      { title: "Visit", body: "Live map." },
      { title: "Convert", body: "Book on inventory." },
    ]),
    platformOverrides: [{ href: "/real-estate-crm-software", label: "Real estate CRM" }],
    relatedLinks: [{ href: "/compare/instant-lead-follow-up-real-estate-crm", label: "Instant follow-up" }],
    ctaTitle: "Stop losing leads between inquiry and visit",
    ctaDescription: "See lead capture and follow-up in a demo.",
  }),

  page({
    pageKey: "bestCrm",
    path: "/best-real-estate-crm-software",
    primaryKeyword: "best real estate crm software",
    title: "Best Real Estate CRM Software in India (2026)",
    description:
      "Looking for the best real estate CRM software in India? Compare plot-linked CRM vs generic tools for layout developers.",
    keywords: [
      "best real estate crm software",
      "best real estate crm software in India",
      "top 10 crm for real estate",
      "real estate CRM software India",
    ],
    ogTitle: "Best Real Estate CRM Software in India | Layouts360",
    ogDescription: "Buyer's guide to the best real estate CRM for builders and layout developers.",
    breadcrumbLabel: "Best Real Estate CRM (India)",
    softwareDescription: "Guide to best real estate CRM for plot developers in India.",
    categoryTerm: "best real estate CRM software",
    categoryShort: "best real estate CRM",
    variant: "crm",
    heroIntro: [
      "Searching **best real estate CRM software in India** means you are close to a decision. Skip lists built for US brokerages—evaluate against plot sales reality.",
      "The best fit for many Indian layout developers combines CRM with live inventory and digital maps, not per-seat global tools.",
      "This page explains criteria and where Layouts360 fits as purpose-built **real estate CRM software**.",
    ],
    definition:
      "The **best real estate CRM software** for plot developers links leads to specific units, prevents double bookings, works on mobile at site offices, and supports INR pricing for growing teams.",
    faqDefinition:
      "The best CRM for Indian layout developers connects leads, plot inventory, bookings, and maps in one platform—not contacts alone.",
    solutionBullets: [
      "Plot-level leads",
      "Live inventory",
      "Mobile site workflows",
      "INR pricing",
      "Built-in layout selling",
    ],
    problems: [
      { title: "Wrong category", body: "Rental CRM rankings mislead plot sellers." },
      { title: "Per-seat cost", body: "Global CRMs punish hiring agents." },
      { title: "Customization tax", body: "Months bending generic CRM." },
      { title: "Inventory outside CRM", body: "Excel still runs sales." },
    ],
    features: [
      { name: "Evaluation criteria", benefit: "Checklist included.", outcome: "Faster decisions." },
      { name: "Plot-native CRM", benefit: "No custom objects.", outcome: "Adoption." },
      { name: "Comparison table", benefit: "vs generic CRM.", outcome: "Clarity." },
      { name: "Pricing lens", benefit: "INR tiers.", outcome: "Predictable cost." },
      { name: "Demo path", benefit: "Try on your layout.", outcome: "Proof." },
    ],
    useCases: [
      { title: "Outgrowing Excel", body: "First CRM purchase." },
      { title: "Failed HubSpot", body: "Switch to plot-native." },
      { title: "Launch preparation", body: "CRM before brokers arrive." },
      { title: "Multi-project", body: "One CRM, many layouts." },
    ],
    workflow: wf([
      { title: "Define motion", body: "Plot sales checklist." },
      { title: "Score vendors", body: "Criteria on this page." },
      { title: "Demo", body: "Your project data." },
      { title: "Pilot", body: "One layout." },
      { title: "Rollout", body: "Agents + partners." },
      { title: "Measure", body: "Conversion by source." },
    ]),
    extraSection:
      "## Comparison snapshot\n\n| Capability | Generic CRM | Layouts360 |\n| --- | --- | --- |\n| Plot-level leads | Custom fields | Native |\n| Layout selling | Not included | Built-in |\n| Double-booking prevention | Manual | Live inventory |\n| India pricing | USD per seat | From ₹2,000/mo |",
    relatedLinks: [
      { href: "/real-estate-crm", label: "Real estate CRM guide" },
      { href: "/blog/top-10-real-estate-crm-software-india", label: "Top 10 CRM checklist" },
      { href: "/blog/real-estate-crm-pricing-and-free-trials-india", label: "Pricing & free demo" },
      { href: "/real-estate-crm-software", label: "CRM software product" },
      { href: "/compare/purpose-built-real-estate-software-vs-generic-crm", label: "vs generic CRM" },
    ],
    faqExtra: [
      {
        question: "Is Layouts360 the best real estate CRM software in India?",
        answer:
          "It is built for layout and plot developers needing live maps, inventory, CRM, and partners—not every apartment marketer. Validate with your layout in a demo against your checklist.",
      },
      {
        question: "How does pricing compare to global CRMs?",
        answer:
          "INR tiers from ₹2,000/month with unlimited users on tiers often beat per-seat USD pricing for large Indian sales teams.",
      },
    ],
    ctaTitle: "See if Layouts360 is the best fit for your project",
    ctaDescription: "Book a demo comparing lead management, CRM, and plot selling.",
  }),

  page({
    pageKey: "client",
    path: "/real-estate-client-management-software",
    primaryKeyword: "real estate client management software",
    title: "Real Estate Client Management Software for Developers",
    description:
      "Real estate client management software and CRM for plot developers—from inquiry to booking with plot-specific lifecycle.",
    keywords: ["real estate client management software", "real estate crm software"],
    ogTitle: "Real Estate Client Management | Layouts360",
    ogDescription: "Plot-specific client management for developers and sales teams.",
    breadcrumbLabel: "Client Management Software",
    softwareDescription: "Client management and CRM for plot buyer lifecycle in India.",
    categoryTerm: "real estate client management software",
    categoryShort: "client management",
    variant: "crm",
    heroIntro: [
      "**Real estate client management software** tracks the buyer journey from inquiry through booking and handover—with plot context at every step.",
      "Generic contact databases miss which unit a buyer wanted in Phase 2. Layouts360 links clients to inventory on live maps.",
      "Built for Indian layout developers and sales teams.",
    ],
    definition:
      "**Real estate client management software** (closely related to **real estate CRM software**) manages buyer profiles, communications, visits, bookings, and payment status on connected records.",
    faqDefinition:
      "Software managing buyer lifecycle for plot sales with client records tied to specific plots and projects.",
    solutionBullets: ["Buyer 360 view", "Visit history", "Booking status", "Document storage"],
    problems: [
      { title: "Scattered chats", body: "History in WhatsApp not CRM." },
      { title: "No unit context", body: "Cannot see plot interest." },
      { title: "Handover gaps", body: "Finance lacks client view." },
      { title: "Repeat buyers", body: "No cross-project profile." },
    ],
    features: [
      { name: "Client profile", benefit: "Plots and payments.", outcome: "One screen." },
      { name: "Communication log", benefit: "Calls noted.", outcome: "Continuity." },
      { name: "Documents", benefit: "Agreements stored.", outcome: "Compliance." },
      { name: "Team visibility", benefit: "Manager oversight.", outcome: "Quality." },
      { name: "Portal option", benefit: "Buyer transparency.", outcome: "Trust." },
    ],
    useCases: [
      { title: "Long negotiation", body: "Track touches until token." },
      { title: "Family buyers", body: "Multiple contacts one booking." },
      { title: "NRI client", body: "Remote updates and docs." },
      { title: "Post-booking service", body: "Installment reminders." },
    ],
    workflow: wf([
      { title: "Create client", body: "From lead." },
      { title: "Log interactions", body: "Calls and visits." },
      { title: "Link plots", body: "Interest and booking." },
      { title: "Collect payments", body: "On record." },
      { title: "Store docs", body: "Deeds and receipts." },
      { title: "Handover", body: "Status complete." },
    ]),
    relatedLinks: [{ href: "/real-estate-crm-software", label: "Real estate CRM" }],
    ctaTitle: "Stop losing leads. Start closing deals.",
    ctaDescription: "See client management and plot-linked CRM in a demo.",
  }),

  page({
    pageKey: "asset",
    path: "/real-estate-asset-management-software",
    primaryKeyword: "real estate asset management software",
    title: "Real Estate Asset Management Software",
    description:
      "Real estate asset management software for plot-level ROI, holding costs, and portfolio performance for developers selling inventory.",
    keywords: ["real estate asset management software", "plot asset management"],
    ogTitle: "Real Estate Asset Management Software | Layouts360",
    ogDescription: "Plot-level asset tracking and ROI for land developers.",
    breadcrumbLabel: "Asset Management Software",
    softwareDescription: "Asset management for plot-level ROI and holding costs on sellable inventory.",
    categoryTerm: "real estate asset management software",
    categoryShort: "asset management",
    heroIntro: [
      "**Real estate asset management software** for developers tracks money tied up in unsold plots—acquisition, development, marketing, and sale outcomes.",
      "Layouts360 connects financial views to the same inventory records your sales team uses daily.",
      "Not rental asset management—built for selling plots and units in India.",
    ],
    definition:
      "**Real estate asset management software** here means tracking performance of sellable inventory: cost basis, holding costs, sale price, and ROI per plot or phase.",
    faqDefinition:
      "Software tracking financial performance of plot and unit inventory with ROI and holding cost visibility for developers.",
    solutionBullets: ["Plot-level P&L", "Holding cost view", "Time-to-sale", "Portfolio roll-up"],
    problems: [
      { title: "Blind exposure", body: "Unsold plots tie cash without clarity." },
      { title: "Disconnected finance", body: "Sales data not in asset view." },
      { title: "Phase confusion", body: "Cannot compare phase ROI." },
      { title: "Marketing burn", body: "Spend not tied to sales velocity." },
    ],
    features: [
      { name: "Plot P&L", benefit: "Margin per unit.", outcome: "Pricing discipline." },
      { name: "Holding costs", benefit: "Unsold drag visible.", outcome: "Capital decisions." },
      { name: "Time-to-sale", benefit: "Velocity by block.", outcome: "Phase planning." },
      { name: "Portfolio roll-up", benefit: "Multi-project.", outcome: "Board reporting." },
      { name: "Sales tie-in", benefit: "Same inventory DB.", outcome: "No re-entry." },
    ],
    useCases: [
      { title: "Slow phase", body: "Identify costly holding." },
      { title: "Premium block", body: "Compare margin vs standard plots." },
      { title: "Director review", body: "Monthly portfolio." },
      { title: "Pre-launch", body: "Price to clear exposure." },
    ],
    workflow: wf([
      { title: "Load costs", body: "Per plot or block." },
      { title: "Track sales", body: "Live inventory." },
      { title: "Compute ROI", body: "On sale." },
      { title: "Monitor holding", body: "Unsold units." },
      { title: "Adjust strategy", body: "Pricing/promo." },
      { title: "Report", body: "Leadership pack." },
    ]),
    ctaTitle: "See asset performance tied to live inventory",
    ctaDescription: "Book a demo for P&L and ROI views.",
  }),

  page({
    pageKey: "accounting",
    path: "/real-estate-accounting-software",
    primaryKeyword: "real estate accounting software",
    title: "Real Estate Payment Tracking Software",
    description:
      "Track booking amounts, installments, GST, and outstanding balances for plot sales—payment tracking built for Indian developers.",
    keywords: ["real estate accounting software", "real estate payment tracking software"],
    ogTitle: "Real Estate Payment Tracking | Layouts360",
    ogDescription: "Booking and installment tracking for plot sales with GST support.",
    breadcrumbLabel: "Payment Tracking Software",
    softwareDescription: "Payment tracking for bookings, installments, and GST on plot sales.",
    categoryTerm: "real estate payment tracking software",
    categoryShort: "payment tracking",
    heroIntro: [
      "Layouts360 provides **real estate payment tracking software** for the sales cycle—tokens, installments, GST, and balances on each booking.",
      "Finance and sales read the same numbers tied to plot records, not parallel spreadsheets.",
      "Not a full general ledger replacement—integrate with Tally for statutory books.",
    ],
    definition:
      "When buyers search **real estate accounting software** for plot sales, they usually need collection tracking during selling—not rental GL. Layouts360 focuses on customer payments from booking through handover.",
    faqDefinition:
      "Payment tracking for plot bookings, installment schedules, partial payments, and GST on Indian plot sales.",
    solutionBullets: ["Installment schedules", "Partial payments", "GST on collections", "Outstanding reports"],
    problems: [
      { title: "Sales-finance gap", body: "Agents promise handover dates finance cannot support." },
      { title: "Overdue installments", body: "No systematic reminders." },
      { title: "GST confusion", body: "Amounts scattered in chats." },
      { title: "Double entry", body: "Re-keying into Tally manually." },
    ],
    features: [
      { name: "Booking amounts", benefit: "On plot record.", outcome: "Clarity." },
      { name: "Milestones", benefit: "Plan per deal.", outcome: "Collections." },
      { name: "Reminders", benefit: "Overdue flags.", outcome: "Cash flow." },
      { name: "Receipts", benefit: "Buyer docs.", outcome: "Trust." },
      { name: "Summaries", benefit: "Export-friendly.", outcome: "Accounting handoff." },
    ],
    useCases: [
      { title: "Token + schedule", body: "Define at booking." },
      { title: "Partial pay", body: "Record without breaking status." },
      { title: "Overdue chase", body: "Finance task list." },
      { title: "GST summary", body: "Period report." },
    ],
    workflow: wf([
      { title: "Book plot", body: "Amount set." },
      { title: "Define plan", body: "Milestones." },
      { title: "Collect", body: "Record payment." },
      { title: "Remind", body: "Overdue alerts." },
      { title: "Report", body: "Outstanding." },
      { title: "Export", body: "To GL if needed." },
    ]),
    platformOverrides: [{ href: "/real-estate-back-office-software", label: "Back office software" }],
    relatedLinks: [{ href: "/blog/plot-installment-tracking-gst-india", label: "GST installment guide" }],
    ctaTitle: "Simplify payment tracking on plot sales",
    ctaDescription: "See booking and installment workflows in a demo.",
  }),

  page({
    pageKey: "commercial",
    path: "/commercial-real-estate-software",
    primaryKeyword: "commercial real estate software",
    title: "Commercial Real Estate Software for Selling Shops & Plots",
    description:
      "Commercial real estate software for selling shops, office plots, and commercial layouts in India—live inventory and CRM.",
    keywords: ["commercial real estate software", "commercial plot management software"],
    ogTitle: "Commercial Real Estate Software | Layouts360",
    ogDescription: "Sell commercial plots and shops with digital layouts and live inventory.",
    breadcrumbLabel: "Commercial Real Estate Software",
    softwareDescription: "Commercial real estate software for selling shops, plots, and commercial units.",
    categoryTerm: "commercial real estate software",
    categoryShort: "commercial real estate",
    heroIntro: [
      "**Commercial real estate software** for developers selling shops, showrooms, and commercial plots—not lease administration.",
      "Track unit-level inventory, per sq. ft. pricing, and broker sales on live maps.",
      "Layouts360 supports commercial alongside residential plots in one platform.",
    ],
    definition:
      "**Commercial real estate software** here means selling commercial units to buyers with inventory, maps, CRM, and booking—aligned to Indian developer workflows.",
    faqDefinition:
      "Software to sell commercial plots and shops with unit inventory, pricing rules, and digital presentation—not rental management.",
    solutionBullets: ["Unit-level inventory", "Per sq. ft. pricing", "Digital layouts", "CRM and booking"],
    problems: [
      { title: "Complex pricing", body: "Corner premiums manual." },
      { title: "Low unit count", body: "High stakes per error." },
      { title: "Broker reliance", body: "Need accurate portal." },
      { title: "Mixed portfolio", body: "Residential + commercial silos." },
    ],
    features: [
      { name: "Shop numbering", benefit: "Clear unit IDs.", outcome: "Fewer disputes." },
      { name: "Sq. ft. rates", benefit: "Rule-based quotes.", outcome: "Faster quotes." },
      { name: "Layout presentation", benefit: "Road-facing highlight.", outcome: "Better pitches." },
      { name: "Booking", benefit: "Same engine as plots.", outcome: "Control." },
      { name: "Reporting", benefit: "Commercial roll-up.", outcome: "Visibility." },
    ],
    useCases: [
      { title: "High-street shops", body: "Sell with unit map." },
      { title: "Commercial layout", body: "Open plots with frontage rules." },
      { title: "Mall wing", body: "Floor-style plan." },
      { title: "Broker network", body: "Live commercial portal." },
    ],
    workflow: wf([
      { title: "Model units", body: "Shops/plots." },
      { title: "Price", body: "Per sq. ft. rules." },
      { title: "Market", body: "Share layout." },
      { title: "Enquire", body: "CRM lead." },
      { title: "Book", body: "Token flow." },
      { title: "Collect", body: "Payments tracked." },
    ]),
    relatedLinks: [{ href: "/blog/commercial-plot-inventory-software-india", label: "Commercial inventory guide" }],
    ctaTitle: "Sell commercial inventory with digital clarity",
    ctaDescription: "Book a demo for commercial layout sales.",
  }),

  page({
    pageKey: "erp",
    path: "/real-estate-erp-software",
    primaryKeyword: "real estate ERP software",
    title: "Real Estate ERP Software for Plot & Layout Developers",
    description:
      "Sales-side real estate ERP software—inventory, bookings, CRM, payments, channel partners, and documents. Built for Indian layout developers.",
    keywords: ["real estate ERP software", "real estate ERP software India"],
    ogTitle: "Real Estate ERP Software India | Layouts360",
    ogDescription: "Sales ERP: live layouts, inventory, bookings, CRM, and payments in one system.",
    breadcrumbLabel: "Real Estate ERP Software",
    softwareDescription: "Sales-side real estate ERP for inventory, bookings, CRM, and payments.",
    categoryTerm: "real estate ERP software",
    categoryShort: "sales ERP",
    heroIntro: [
      "Layouts360 offers **sales-side real estate ERP software** for Indian layout developers—inventory, bookings, CRM, payments, channel partners, and documents in one platform.",
      "This is not full general ledger accounting. It is the operating system for selling plots, with exports for your CA stack.",
      "Digitize layouts, run partners, and collect installments without Excel fragmentation.",
    ],
    definition:
      "**Real estate ERP software** for developers typically means unifying sales operations: maps, inventory, CRM, bookings, installments, and partner workflows—not tenant billing or statutory GL alone.",
    definitionExtra:
      "Layouts360 defines **sales ERP** as: inventory, bookings, payments, partners, documents—not replacement for Tally.",
    faqDefinition:
      "Sales-side ERP unifying digital layouts, inventory, CRM, bookings, and payment tracking for plot developers in India.",
    solutionBullets: [
      "Inventory + maps",
      "CRM + leads",
      "Booking + payments",
      "Partners + documents",
    ],
    problems: [
      { title: "Tool fragmentation", body: "Five systems for one sale." },
      { title: "ERP mismatch", body: "GL software lacks maps." },
      { title: "Custom build risk", body: "Agency projects stall." },
      { title: "Data re-entry", body: "Sales to finance by hand." },
    ],
    features: [
      { name: "Unified modules", benefit: "One login ecosystem.", outcome: "Adoption." },
      { name: "Sales ERP scope", benefit: "Clear boundaries.", outcome: "Right expectations." },
      { name: "Partner module", benefit: "CP included.", outcome: "Scale." },
      { name: "Reporting", benefit: "Ops dashboards.", outcome: "Control." },
      { name: "Fast rollout", benefit: "Days per project.", outcome: "ROI timing." },
    ],
    useCases: [
      { title: "Excel exit", body: "First unified system." },
      { title: "Post-custom failure", body: "SaaS instead of build." },
      { title: "Multi-module need", body: "Inventory + CRM + CP." },
      { title: "Launch readiness", body: "ERP before scale." },
    ],
    workflow: wf([
      { title: "Digitize", body: "Layouts + units." },
      { title: "Sell", body: "CRM + partners." },
      { title: "Book", body: "Locks + tokens." },
      { title: "Collect", body: "Installments." },
      { title: "Document", body: "Back office." },
      { title: "Report", body: "Leadership." },
    ]),
    relatedLinks: [
      { href: "/blog/real-estate-erp-vs-plot-management", label: "ERP vs plot management" },
      { href: "/real-estate-back-office-software", label: "Back office" },
    ],
    ctaTitle: "See your sales ERP on a live layout",
    ctaDescription: "Walk through modules in one demo.",
  }),

  page({
    pageKey: "apartment",
    path: "/apartment-inventory-management-software",
    primaryKeyword: "apartment inventory management software",
    title: "Apartment Inventory Management Software",
    description:
      "Apartment inventory management software for towers and phases—floor-wise units, live availability, and CRM alongside plots.",
    keywords: ["apartment inventory management software", "flat inventory management software"],
    ogTitle: "Apartment Inventory Management Software | Layouts360",
    ogDescription: "Manage apartment towers and plot layouts on one platform.",
    breadcrumbLabel: "Apartment Inventory Software",
    softwareDescription: "Apartment inventory management with towers, floors, and live availability.",
    categoryTerm: "apartment inventory management software",
    categoryShort: "apartment inventory",
    heroIntro: [
      "**Apartment inventory management software** tracks towers, floors, and units with the same live discipline as plotted land—availability, bookings, and CRM connected.",
      "Mixed developers run apartments and open plots on one **property inventory management platform**.",
      "Built for Indian builders selling flats to end buyers.",
    ],
    definition:
      "**Apartment inventory management software** manages sellable flats across blocks and floors with status, pricing, buyer interest, and booking—alongside plot inventory if needed.",
    faqDefinition:
      "Software managing apartment unit inventory with floor-wise availability, bookings, and CRM for Indian builders.",
    solutionBullets: ["Tower/block model", "Floor-wise units", "Live status", "Shared CRM"],
    problems: [
      { title: "Tower spreadsheets", body: "Separate file per block." },
      { title: "Floor confusion", body: "Wrong unit promised." },
      { title: "Plot vs flat silos", body: "Two ops systems." },
      { title: "Broker PDFs", body: "Stale tower sheets." },
    ],
    features: [
      { name: "Tower structure", benefit: "Blocks and floors.", outcome: "Clarity." },
      { name: "Unit cards", benefit: "Area and facing.", outcome: "Faster sales." },
      { name: "Live map/plan", benefit: "Visual inventory.", outcome: "Trust." },
      { name: "Unified CRM", benefit: "One buyer record.", outcome: "Continuity." },
      { name: "Booking", benefit: "Same as plots.", outcome: "Control." },
    ],
    useCases: [
      { title: "Twin towers", body: "Sell floor-wise." },
      { title: "Plot + apartment", body: "One developer account." },
      { title: "Phase handover", body: "Track ready units." },
      { title: "Broker portal", body: "Live flats list." },
    ],
    workflow: wf([
      { title: "Import units", body: "Per tower." },
      { title: "Publish plan", body: "Visual sell." },
      { title: "Capture leads", body: "CRM." },
      { title: "Book unit", body: "Lock inventory." },
      { title: "Payments", body: "Installments." },
      { title: "Report", body: "Sold per floor." },
    ]),
    relatedLinks: [{ href: "/blog/apartment-vs-plot-inventory-platform", label: "Apartment vs plot guide" }],
    ctaTitle: "Manage apartment inventory with live availability",
    ctaDescription: "See tower inventory in a demo.",
  }),

  page({
    pageKey: "backOffice",
    path: "/real-estate-back-office-software",
    primaryKeyword: "real estate back office software",
    title: "Real Estate Back Office Software",
    description:
      "Real estate back office software for documents, commissions, installments, and booking operations tied to live inventory.",
    keywords: ["real estate back office software", "property back office software"],
    ogTitle: "Real Estate Back Office Software | Layouts360",
    ogDescription: "Back office for plot sales: documents, commissions, installments.",
    breadcrumbLabel: "Real Estate Back Office",
    softwareDescription: "Back office for documents, commissions, installments, and bookings.",
    categoryTerm: "real estate back office software",
    categoryShort: "back office",
    heroIntro: [
      "**Real estate back office software** covers documents, commission tracking, installment milestones, and booking approvals on the same data sales uses.",
      "Back office should not re-type what agents already booked on the layout.",
      "Layouts360 keeps sales-side operations unified for Indian developers.",
    ],
    definition:
      "**Real estate back office software** manages post-enquiry operations: agreements, commission ledgers, installment schedules, and approval workflows linked to plot records.",
    faqDefinition:
      "Back office software for booking documents, commissions, installments, and operational approvals on plot sales in India.",
    solutionBullets: ["Document vault", "Commission ledger", "Installment tracking", "Role-based access"],
    problems: [
      { title: "Document scatter", body: "Folders per buyer." },
      { title: "Commission fights", body: "Brokers dispute payouts." },
      { title: "Approval bottlenecks", body: "Email chains." },
      { title: "Finance blind spots", body: "Sales data separate." },
    ],
    features: [
      { name: "Docs per booking", benefit: "Deeds, receipts.", outcome: "Audit." },
      { name: "Commissions", benefit: "On booking amount.", outcome: "Trust." },
      { name: "Milestones", benefit: "Payment plans.", outcome: "Collections." },
      { name: "Roles", benefit: "Finance vs sales.", outcome: "Security." },
      { name: "Audit trail", benefit: "Changes logged.", outcome: "Dispute resolution." },
    ],
    useCases: [
      { title: "Monthly payout", body: "Broker commission run." },
      { title: "Overdue installments", body: "Reminder workflow." },
      { title: "Approval chain", body: "Partner booking requests." },
      { title: "Registration prep", body: "Document checklist." },
    ],
    workflow: wf([
      { title: "Booking created", body: "Sales action." },
      { title: "Docs attached", body: "Back office." },
      { title: "Commission accrues", body: "Rules applied." },
      { title: "Payments recorded", body: "Installments." },
      { title: "Approve payouts", body: "Finance." },
      { title: "Archive", body: "Complete deal file." },
    ]),
    relatedLinks: [{ href: "/compare/automated-broker-commission-tracking", label: "Commission tracking" }],
    ctaTitle: "Unify back office with live inventory",
    ctaDescription: "Demo documents, commissions, and installments.",
  }),
]
