import type { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-url"
import type { SeoLandingPageConfig } from "@/types/seo-landing"

export type SeoLandingPageKey =
  | "plot"
  | "inventory"
  | "asset"
  | "accounting"
  | "commercial"
  | "client"
  | "crm"
  | "lead"
  | "bestCrm"

export const SEO_LANDING_PAGES: Record<SeoLandingPageKey, SeoLandingPageConfig> = {
  plot: {
    path: "/real-estate-plot-management-software",
    breadcrumbLabel: "Plot Management Software",
    softwareDescription:
      "Plot management software for layout developers in India—digital maps, live inventory, CRM, and booking workflows.",
    metadata: {
      title: "Real Estate Plot Management Software | Layouts360",
      description:
        "Real estate plot management software for builders and developers—manage plots, inventory, bookings, payments, and digital layouts in one platform.",
      keywords: PAGE_KEYWORDS.plot,
      ogTitle: "Real Estate Plot Management Software | Layouts360",
      ogDescription:
        "Complete plot management for builders: inventory, bookings, payments, and interactive digital layouts.",
    },
    hero: {
      title: "Real Estate Plot Management Software for Developers & Builders",
      subtitle:
        "Layouts360 is real estate plot management software for builders and developers—manage plots, inventory, bookings, payments, and digital layouts in one place, without Excel chaos or double bookings.",
    },
    sections: [
      {
        title: "What is real estate plot management software?",
        paragraphs: [
          "Plot management software helps layout developers digitize site plans, track every unit's status, and sell with confidence. Unlike generic spreadsheets, it understands phases, plot numbers, dimensions, and live availability.",
          "Layouts360 combines interactive satellite-backed layouts with CRM and payment tracking so sales, brokers, and buyers all see the same truth.",
        ],
        bullets: [
          "Digital layout maps with plot-level detail",
          "Real-time available / blocked / sold status",
          "CRM and lead tracking tied to specific plots",
          "Booking amounts and installment schedules",
        ],
      },
      {
        title: "Why Excel and PDF maps fail at scale",
        muted: true,
        comparison: {
          negative: {
            title: "Excel & WhatsApp",
            body: "Version conflicts, double bookings, and agents selling from outdated PDFs sent in chat groups.",
          },
          positive: {
            title: "Layouts360",
            body: "One live inventory on web and mobile—every booking updates the layout instantly for the whole team.",
          },
        },
        footerNote:
          "See also: inventory management, real estate CRM, and payment tracking on dedicated solution pages below.",
      },
      {
        title: "Built for Indian layout developers",
        paragraphs: [
          "From 50-plot boutique layouts to multi-phase townships, teams go live in days—not months. Sales Starter plans start at ₹2,000/month with unlimited users for growing sales teams.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between plot management software and a CRM?",
        answer:
          "A generic CRM tracks leads and customers but doesn't understand real estate inventory. Plot management software manages plot-level data (dimensions, status, location), prevents double bookings, and provides visual layouts.",
      },
      {
        question: "Can Layouts360 handle multiple projects or layouts?",
        answer:
          "Yes. Manage multiple projects, phases, and layouts in one account—each with its own inventory, pricing, and sales team.",
      },
      {
        question: "How long does it take to set up Layouts360?",
        answer:
          "Typically 3-5 days: provide your layout plan, we digitize it, upload plot data, and configure the system.",
      },
      {
        question: "Is Layouts360 suitable for small developers?",
        answer:
          "Yes. Sales Starter fits developers with 50-200 plots who want professional presentation and real-time inventory.",
      },
      {
        question: "Can I try Layouts360 before committing?",
        answer:
          "Yes. Book a free demo with a sample layout or trial setup with your project data.",
      },
    ],
    extraContent: {
      title: "Plot management during launch weekends",
      paragraphs: [
        "Launch weekends are when double bookings hurt most. Layouts360 locks a plot when an agent starts a hold, shows in-progress status to everyone else, and releases automatically if the timer expires.",
        "Channel partners and walk-ins see the same map your office team uses—no more arguing over which broker 'called dibs' first on Plot 42.",
      ],
    },
    cta: {
      title: "Ready to modernize your plot management?",
      description: "Join developers who replaced Excel with Layouts360. Book a free demo and see your layout live.",
    },
  },
  inventory: {
    path: "/real-estate-inventory-management-software",
    breadcrumbLabel: "Inventory Management Software",
    softwareDescription:
      "Real estate inventory management software for plots, flats, and commercial units with live availability and sales sync.",
    metadata: {
      title: "Real Estate Inventory Management Software | Layouts360",
      description:
        "Real estate inventory management software for plots, flats, and commercial units—live availability, prevent double bookings, and sync sales across teams.",
      keywords: PAGE_KEYWORDS.inventory,
      ogTitle: "Real Estate Inventory Management Software | Layouts360",
      ogDescription:
        "Centralized inventory for plots, flats, and commercial units with real-time availability.",
    },
    hero: {
      title: "Real Estate Inventory Management Software",
      subtitle:
        "Track plots, flats, and commercial units in one platform. Real-time availability, automatic locks during booking, and visibility for every agent and broker.",
    },
    sections: [
      {
        title: "What is real estate inventory management software?",
        paragraphs: [
          "It is a single system for all sellable units across projects—open plots, apartments, shops, and offices—with status, pricing, and buyer interest in one place.",
        ],
        bullets: [
          "Live color-coded availability",
          "Automatic booking locks",
          "Multi-project dashboards",
          "Plots, flats, and commercial on one platform",
        ],
      },
      {
        title: "Stop double bookings before they happen",
        muted: true,
        comparison: {
          negative: {
            title: "Manual tracking",
            body: "Two agents book the same unit because the spreadsheet wasn't updated after the morning site visit.",
          },
          positive: {
            title: "Layouts360",
            body: "Units move to in-progress instantly; confirmed bookings sync across mobile and desktop in seconds.",
          },
        },
      },
      {
        title: "Property types on one platform",
        paragraphs: [
          "Manage open plots and gated layouts alongside apartment towers and commercial units. Switch projects instantly and roll up reports for leadership.",
        ],
        footerNote: "Plot-specific workflows: see our plot management software page.",
      },
    ],
    faqs: [
      {
        question: "What is real estate inventory management software?",
        answer:
          "A digital platform to track, manage, and sell property inventory with real-time visibility into availability, bookings, and sales performance.",
      },
      {
        question: "Can Layouts360 handle different property types?",
        answer:
          "Yes—plots, flats, villas, row houses, and commercial units across multiple projects.",
      },
      {
        question: "How does it prevent double bookings?",
        answer:
          "Starting a booking locks the unit; others see in-progress status until confirmed or released.",
      },
      {
        question: "Can I manage multiple projects simultaneously?",
        answer:
          "Yes. Built for developers running several layouts or towers at once.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Typically 3-5 days per project after you share layout plans and inventory data.",
      },
    ],
    cta: {
      title: "Ready to transform your inventory management?",
      description: "See your inventory on an interactive layout. Schedule a free demo.",
    },
  },
  asset: {
    path: "/real-estate-asset-management-software",
    breadcrumbLabel: "Asset Management Software",
    softwareDescription:
      "Real estate asset management software for plot-level ROI, holding costs, and portfolio performance.",
    metadata: {
      title: "Real Estate Asset Management Software | Layouts360",
      description:
        "Track plot-level P&L, ROI, holding costs, and portfolio performance with real estate asset management software built for developers selling inventory.",
      keywords: PAGE_KEYWORDS.asset,
      ogTitle: "Real Estate Asset Management Software | Layouts360",
      ogDescription: "Plot-level asset tracking and ROI for land developers.",
    },
    hero: {
      title: "Real Estate Asset Management Software",
      subtitle:
        "Understand profitability per plot, phase, and project. Track acquisition cost, development spend, sale price, and time-to-sale—not just unit counts.",
    },
    sections: [
      {
        title: "What is real estate asset management software?",
        paragraphs: [
          "For layout developers, assets are unsold plots and units with money tied up in land, development, and marketing. Asset management connects those costs to live inventory and sales outcomes.",
        ],
        bullets: [
          "Plot-level P&L and ROI",
          "Holding cost visibility while units remain unsold",
          "Time-to-sale by phase",
          "Portfolio roll-ups across projects",
        ],
      },
      {
        title: "Asset management vs rental property software",
        muted: true,
        paragraphs: [
          "Layouts360 is for developers selling plots and units to end buyers—not lease administration or tenant management. Financial views tie to the same records your sales team uses daily.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is real estate asset management software?",
        answer:
          "Software that tracks financial performance of inventory—acquisition, development, sale price, holding costs, and ROI per plot or phase.",
      },
      {
        question: "Is this for rental property management?",
        answer: "No. Layouts360 focuses on selling inventory to buyers, not rental operations.",
      },
      {
        question: "Can I see ROI per plot?",
        answer: "Yes. Track cost basis, marketing spend, sale price, and margin per plot or block.",
      },
      {
        question: "Does asset management connect to inventory?",
        answer: "Yes. Financial and operational data share the same plot records.",
      },
    ],
    cta: {
      title: "See asset performance tied to live inventory",
      description: "Book a demo to explore P&L and ROI views on your project type.",
    },
  },
  accounting: {
    path: "/real-estate-accounting-software",
    breadcrumbLabel: "Payment Tracking Software",
    softwareDescription:
      "Real estate payment tracking for booking amounts, installments, GST, and outstanding balances on plot sales.",
    metadata: {
      title: "Real Estate Accounting Software | Payment Tracking | Layouts360",
      description:
        "Track booking amounts, installments, GST, and outstanding balances for plot sales—payment tracking built for Indian developers, not generic accounting.",
      keywords: PAGE_KEYWORDS.accounting,
      ogTitle: "Real Estate Payment Tracking | Layouts360",
      ogDescription: "Booking and installment tracking for plot sales with GST support.",
    },
    hero: {
      title: "Real Estate Payment Tracking Software",
      subtitle:
        "Track booking amounts, installment schedules, partial payments, and GST on plot sales. Finance and sales work from one source of truth—not separate spreadsheets.",
    },
    sections: [
      {
        title: "Payment tracking for plot sales (not rental accounting)",
        paragraphs: [
          "Layouts360 handles money collected during the sales cycle: token, installments, and balance before registration. It is not a full general ledger replacement.",
        ],
        bullets: [
          "Booking and installment schedules",
          "Partial payment recording",
          "GST on transactions",
          "Outstanding balance reports",
        ],
      },
      {
        title: "Why finance and sales need shared data",
        muted: true,
        paragraphs: [
          "When payment status lives in the same system as plot inventory and CRM, agents know what is due before promising handover dates—and accounts sees which bookings are at risk.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Layouts360 full accounting software?",
        answer:
          "It tracks customer payments during plot sales—bookings, installments, GST, and balances—not full GL or rental accounting.",
      },
      {
        question: "Can I track installment schedules?",
        answer: "Yes. Define plans per booking, record partial payments, and see overdue amounts.",
      },
      {
        question: "Does it support GST for plot sales?",
        answer: "Yes. Configure GST and generate payment summaries for Indian workflows.",
      },
      {
        question: "Can finance and sales see the same data?",
        answer: "Yes. Payments link to customer and plot records in one system.",
      },
    ],
    cta: {
      title: "Simplify payment tracking on plot sales",
      description: "See booking and installment workflows in a live demo.",
    },
  },
  commercial: {
    path: "/commercial-real-estate-software",
    breadcrumbLabel: "Commercial Real Estate Software",
    softwareDescription:
      "Commercial real estate software for selling shops, office plots, and commercial layouts with digital maps and CRM.",
    metadata: {
      title: "Commercial Real Estate Software | Plot & Shop Sales | Layouts360",
      description:
        "Commercial real estate software for selling shops, office plots, and commercial layouts in India—digital maps, live inventory, and sales CRM.",
      keywords: PAGE_KEYWORDS.commercial,
      ogTitle: "Commercial Real Estate Software | Layouts360",
      ogDescription: "Sell commercial plots and shops with digital layouts and live inventory.",
    },
    hero: {
      title: "Commercial Real Estate Software for Selling Shops & Plots",
      subtitle:
        "Sell commercial plots, shops, and office spaces with unit-level inventory, per sq. ft. pricing, and digital layouts—built for developers selling units, not managing leases.",
    },
    sections: [
      {
        title: "Commercial sales, not lease management",
        paragraphs: [
          "Layouts360 helps developers market and sell commercial inventory—mall units, high-street shops, and office plots—with the same live-map experience used for residential layouts.",
        ],
        bullets: [
          "Unit numbers and square footage",
          "Per sq. ft. and premium pricing rules",
          "Digital floor-style layouts",
          "CRM and booking for commercial buyers",
        ],
      },
      {
        title: "Why commercial teams choose Layouts360",
        muted: true,
        paragraphs: [
          "Brokers and buyers see exact shop numbers, road-facing premiums, and live availability—reducing disputes during high-velocity commercial launches.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Layouts360 handle commercial plot sales?",
        answer:
          "Yes. Shops, showrooms, and commercial plots with unit-level inventory and digital layouts.",
      },
      {
        question: "Is this for lease and tenant management?",
        answer: "No. Built for selling commercial units to buyers.",
      },
      {
        question: "Can I price commercial units per square foot?",
        answer: "Yes. Track area, rate per sq. ft., and corner or road-facing premiums.",
      },
      {
        question: "Does commercial inventory sync with CRM?",
        answer: "Yes. Same CRM and availability engine as residential plots.",
      },
    ],
    cta: {
      title: "Sell commercial inventory with digital clarity",
      description: "Book a demo tailored to commercial layout and shop sales.",
    },
  },
  client: {
    path: "/real-estate-client-management-software",
    breadcrumbLabel: "Client Management Software",
    softwareDescription:
      "Real estate client management and CRM for plot developers—leads, follow-ups, and buyer lifecycle tied to inventory.",
    metadata: {
      title: "Real Estate CRM Software & Client Management | Layouts360",
      description:
        "Real estate client management software and CRM for plot developers—from lead to deed, with plot-specific leads, follow-ups, and buyer lifecycle.",
      keywords: PAGE_KEYWORDS.client,
      ogTitle: "Real Estate Client Management | Layouts360",
      ogDescription: "Plot-specific CRM for developers and sales teams in India.",
    },
    hero: {
      title: "Real Estate Client Management Software for Developers",
      subtitle:
        "From lead to deed: manage buyers with client management software that links every lead to specific plots, tracks follow-ups, and supports your entire sales team on mobile.",
    },
    sections: [
      {
        title: "What is real estate client management software?",
        paragraphs: [
          "It is a CRM built for the plot sales journey—portal leads, walk-ins, site visits, negotiation, booking, and handover—with inventory context generic CRMs lack.",
        ],
        bullets: [
          "Lead capture from portals, brokers, and walk-ins",
          "Plot-specific interest tracking",
          "Follow-up and site visit scheduling",
          "Pipeline from inquiry to sold",
        ],
      },
      {
        title: "Why generic CRMs fail for real estate",
        muted: true,
        comparison: {
          negative: {
            title: "Generic CRM",
            body: "Contacts and deals without plot numbers, layout phases, or live availability.",
          },
          positive: {
            title: "Layouts360",
            body: "Every lead tied to inventory on an interactive map—agents sell what is actually available.",
          },
        },
        footerNote:
          "Also explore: real estate CRM software, lead management, and best CRM for developers in India.",
      },
    ],
    faqs: [
      {
        question: "Is the CRM included in all Layouts360 plans?",
        answer:
          "Basic lead tracking is on all plans; full CRM features are on the Business Plan. Contact us for pricing.",
      },
      {
        question: "Can I import leads from 99acres or MagicBricks?",
        answer: "Yes—manual entry or CSV import; portal API integrations are on the roadmap.",
      },
      {
        question: "How many users can access the CRM?",
        answer: "Unlimited users on plans—no per-seat fees for large sales teams.",
      },
      {
        question: "Can agents access the CRM on mobile?",
        answer: "Yes. Mobile-first for leads, follow-ups, and status updates on site.",
      },
    ],
    cta: {
      title: "Stop losing leads. Start closing deals.",
      description: "See plot-linked CRM and follow-up workflows in a free demo.",
    },
  },
  crm: {
    path: "/real-estate-crm-software",
    breadcrumbLabel: "Real Estate CRM Software",
    variant: "crm",
    softwareDescription:
      "Real estate CRM software for plot developers in India—plot-linked leads, pipeline, and live inventory.",
    metadata: {
      title: "Real Estate CRM Software for Builders & Developers | Layouts360",
      description:
        "Real estate CRM software built for plot developers and builders in India. Tie leads to plots, track follow-ups, bookings, and sales—without generic CRM chaos.",
      keywords: PAGE_KEYWORDS.crm,
      ogTitle: "Real Estate CRM Software | Layouts360",
      ogDescription:
        "Purpose-built CRM for layout developers: plot-linked leads, pipeline visibility, and inventory in one system.",
    },
    hero: {
      title: "Real Estate CRM Software for Builders & Developers",
      subtitle:
        "Real estate CRM software that links every lead to real plot inventory—not another generic contact list. Built for layout developers and builders in India who sell plots, not leases.",
    },
    sections: [
      {
        title: "What is real estate CRM software?",
        paragraphs: [
          "Real estate CRM software organizes your sales pipeline from first inquiry to booking and handover. Buyers searching for crm for real estate or real estate crm software usually need:",
        ],
        bullets: [
          "Lead capture from 99acres, MagicBricks, walk-ins, and referrals",
          "Follow-up reminders so hot leads do not go cold",
          "Site visit scheduling and outcome tracking",
          "Plot-specific interest (which unit is the buyer considering?)",
          "Booking and payment status tied to the customer record",
        ],
        footerNote:
          "Layouts360 is a CRM for builders and developers selling layouts, plots, and commercial units—with interactive maps and live availability built in.",
        clusterNav: true,
      },
      {
        title: "Why generic CRMs fail for plot developers",
        muted: true,
        comparison: {
          negative: {
            title: "No plot context",
            body: "HubSpot does not know Plot 42 in Phase 2 exists. You cannot see which plots drive the most inquiries.",
          },
          positive: {
            title: "Layouts360",
            body: "Every lead links to layout inventory. Agents show the exact plot on a satellite map during site visits.",
          },
        },
        linkParts: [
          { text: "Need deeper lead workflows? See our " },
          {
            text: "real estate lead management software",
            href: "/real-estate-lead-management-software",
          },
          { text: " page. Comparing options? Read " },
          {
            text: "best real estate CRM software in India",
            href: "/best-real-estate-crm-software",
          },
          { text: "." },
        ],
      },
      {
        title: "CRM software for real estate agents on your team",
        paragraphs: [
          "Field agents need mobile access, not desk-only dashboards. Layouts360 lets agents log calls, schedule follow-ups, and mark site visits complete from their phone—while managers see pipeline health by agent and by plot.",
        ],
        bullets: [
          "Unlimited users on plans (no per-seat surprise bills)",
          "Lead source tracking (portal, referral, walk-in)",
          "Pipeline stages: Inquiry → Visit → Negotiation → Booked → Sold",
          "Integration with payment tracking and digital plot cards",
        ],
      },
    ],
    extraContent: {
      title: "How Indian layout developers use real estate CRM day to day",
      paragraphs: [
        "Most layout launches in India still run on Excel sheets, broker WhatsApp groups, and static PDF maps. When three agents call the same buyer about Plot 42, trust erodes fast. A real estate CRM built for plot sales removes that chaos by tying every conversation to a live unit on your digital layout.",
        "Layouts360 is used by sales teams during site visits: open the layout on a tablet, show satellite-backed plot boundaries, confirm availability in green, and log the follow-up before the buyer leaves the site office. Back at HQ, managers see which plots are getting inquiries, which agents are behind on callbacks, and which channel partners sent the hottest leads.",
        "Unlike rental-focused property management tools, Layouts360 focuses on selling inventory—open plots, villa phases, and commercial shops. Pricing starts at ₹2,000 per month with unlimited users, so you are not penalized for hiring more agents during a launch weekend.",
      ],
    },
    faqs: [
      {
        question: "What is real estate CRM software?",
        answer:
          "Real estate CRM software helps developers and sales teams capture leads, schedule follow-ups, track site visits, and move buyers from inquiry to booking. Layouts360 extends CRM with plot-level inventory so every lead is tied to specific units on your layout map.",
      },
      {
        question: "How is a real estate CRM different from HubSpot or Zoho?",
        answer:
          "Generic CRMs manage contacts and deals. A real estate CRM understands plots, phases, availability status, booking amounts, and site visits. Layouts360 combines CRM with digital layouts and inventory so agents never sell a plot that is already booked.",
      },
      {
        question: "Is Layouts360 a CRM for real estate agents?",
        answer:
          "Yes. Sales agents, channel partners, and office staff can capture leads on mobile, assign follow-ups, and update pipeline stages. Managers see which agent is working which lead and which plots are hot.",
      },
      {
        question: "Can I use Layouts360 as CRM for builders and developers?",
        answer:
          "Layouts360 is designed for layout developers, villa projects, and builders selling open plots or units—not for rental or tenant management. If you sell inventory to end buyers, it fits your workflow.",
      },
      {
        question: "Does the CRM connect to plot management?",
        answer:
          "Yes. CRM, lead management, and plot inventory share one database. When a lead books Plot 42, availability updates instantly across your team and customer-facing layout.",
      },
    ],
    cta: {
      title: "Ready for a real estate CRM that understands plots?",
      description:
        "See how Layouts360 connects CRM, leads, and inventory in one demo—built for developers, not generic SaaS.",
    },
  },
  lead: {
    path: "/real-estate-lead-management-software",
    breadcrumbLabel: "Lead Management Software",
    variant: "crm",
    softwareDescription:
      "Real estate lead management software for Indian developers—capture, assign, and convert leads with plot-linked CRM.",
    metadata: {
      title: "Real Estate Lead Management Software | Layouts360",
      description:
        "Real estate lead management software for Indian developers—capture portal leads, assign follow-ups, track site visits, and convert faster with plot-linked CRM.",
      keywords: PAGE_KEYWORDS.lead,
      ogTitle: "Real Estate Lead Management Software | Layouts360",
      ogDescription:
        "Capture, assign, and convert leads with follow-up discipline tied to plot inventory and sales pipeline.",
    },
    hero: {
      title: "Real Estate Lead Management Software",
      subtitle:
        "Capture every inquiry, assign follow-ups, and convert faster with real estate lead management software tied to your plot inventory—not scattered WhatsApp threads.",
    },
    sections: [
      {
        title: "How real estate companies manage leads with Layouts360",
        paragraphs: [
          "Most developers lose revenue in the gap between first call and site visit. Lead management software closes that gap with structure: who owns the lead, what to do next, and which plot to show.",
        ],
        featureCards: [
          {
            icon: "target",
            title: "Capture",
            body: "Log portal leads, walk-ins, broker referrals, and campaign responses in one place with source tracking.",
          },
          {
            icon: "users",
            title: "Assign",
            body: "Route leads to agents or teams. Link interest to specific plots and phases on your layout.",
          },
          {
            icon: "bell",
            title: "Follow up",
            body: "Reminders for calls and site visits. Pipeline stages show who is close to booking.",
          },
        ],
        clusterNav: true,
      },
      {
        title: "Lead management vs spreadsheets and WhatsApp",
        muted: true,
        paragraphs: [
          "Excel and chat groups hide leads in forwarded messages. You cannot report conversion by source or agent. Real estate lead management software gives you audit trails and accountability.",
        ],
        bullets: [
          "No duplicate follow-ups on the same buyer",
          "Manager visibility into stalled leads",
          "Plot availability checked before promising a unit",
          "Handoff from marketing to sales without data loss",
        ],
        crossLinks: {
          prefix: "Full buyer lifecycle? Explore ",
          links: [
            { href: "/real-estate-crm-software", label: "real estate CRM software" },
            {
              href: "/real-estate-client-management-software",
              label: "client management",
            },
          ],
          suffix: ".",
        },
      },
      {
        title: "Built for layout developers in India",
        paragraphs: [
          "Layouts360 lead management is part of the same platform as digital layouts, inventory, and payment tracking—so when a lead books, inventory and finance stay in sync. Pricing starts at ₹2,000/month for sales teams ready to stop losing inquiries.",
        ],
      },
    ],
    extraContent: {
      title: "Lead management for 99acres, walk-ins, and broker networks",
      paragraphs: [
        "Real estate lead management software should answer one question instantly: who is working this buyer, and what happens next? Portal leads from 99acres or MagicBricks, walk-ins at the site office, and broker referrals often land in different inboxes. Without a central system, duplicate calls and lost follow-ups cost bookings every week.",
        "Layouts360 captures the lead source, budget band, and preferred plot before assignment. Managers route leads to agents or channel partners, set visit dates, and track outcomes in a pipeline from inquiry to booked. Because inventory is connected, agents never promise a plot that was sold an hour ago.",
        "Teams switching from spreadsheets typically go live in a few days per project. You keep WhatsApp for quick chats, but the official record lives in Layouts360—giving you reporting on conversion by source, agent, and layout phase.",
      ],
    },
    faqs: [
      {
        question: "What is real estate lead management software?",
        answer:
          "It is software that captures buyer inquiries, routes them to the right agent, schedules follow-ups, and tracks progress until booking. Layouts360 adds plot-level context so you know which layout and unit each lead wants.",
      },
      {
        question: "How do real estate companies manage leads without losing them?",
        answer:
          "Successful teams use a single system for lead capture, assignment rules, follow-up reminders, and visit outcomes—not spreadsheets and WhatsApp groups. Layouts360 centralizes leads and ties them to live inventory.",
      },
      {
        question: "Can I import leads from property portals?",
        answer:
          "You can enter leads manually or import CSV exports from 99acres, MagicBricks, and other channels. Each lead stores source, budget, and preferred plot for reporting.",
      },
      {
        question: "How does lead management connect to CRM?",
        answer:
          "Lead management is the front of your CRM: capture and qualify. Layouts360 continues the same record through site visits, booking, and payments. See our real estate CRM software page for the full lifecycle.",
      },
      {
        question: "Do agents get follow-up reminders?",
        answer:
          "Yes. Agents receive reminders for scheduled calls and site visits so leads do not stall. Managers can see overdue follow-ups by agent.",
      },
    ],
    cta: {
      title: "Stop losing leads between inquiry and site visit",
      description: "See lead capture, assignment, and follow-up workflows in a live Layouts360 demo.",
    },
  },
  bestCrm: {
    path: "/best-real-estate-crm-software",
    breadcrumbLabel: "Best Real Estate CRM (India)",
    variant: "crm",
    softwareDescription:
      "Guide to the best real estate CRM software in India for plot developers—compare plot-linked CRM vs generic tools.",
    metadata: {
      title: "Best Real Estate CRM Software in India (2026) | Layouts360",
      description:
        "Looking for the best real estate CRM software in India? Compare what matters for plot developers—plot-linked leads, inventory, maps, and pricing vs generic CRMs.",
      keywords: PAGE_KEYWORDS.bestCrm,
      ogTitle: "Best Real Estate CRM Software in India | Layouts360",
      ogDescription:
        "Buyer's guide: how to choose the best real estate CRM for builders and layout developers in India.",
    },
    hero: {
      title: "Best Real Estate CRM Software in India (2026)",
      subtitle:
        "Searching best real estate crm or best real estate crm software? This guide explains what plot developers and builders should evaluate—and where Layouts360 fits.",
    },
    sections: [
      {
        title: "How to choose the best real estate CRM software",
        paragraphs: [
          "Buyer-intent searches like best real estate crm software mean you are close to a decision. Skip generic lists that rank global tools for US brokerages. For Indian layout developers, evaluate against your actual sales motion:",
        ],
        criteria: [
          "Links leads to specific plots and phases—not just contact names",
          "Shows live availability to prevent double bookings",
          "Works on mobile for site visits and field sales",
          "Understands Indian payment flows (booking, installments, GST)",
          "Affordable for growing developer teams (not enterprise-only pricing)",
          "Includes or integrates digital layout / map selling",
        ],
        clusterNav: true,
      },
      {
        title: "Why Layouts360 ranks well for builders and developers",
        muted: true,
        linkParts: [
          {
            text: "Layouts360 is not a bolt-on CRM module on generic software. It is a unified system for selling plots: digital layouts, inventory, ",
          },
          {
            text: "lead management",
            href: "/real-estate-lead-management-software",
          },
          { text: ", " },
          { text: "CRM", href: "/real-estate-crm-software" },
          { text: ", and payments." },
        ],
        comparisonTable: {
          rows: [
            {
              capability: "Plot-level leads",
              generic: "Custom fields only",
              layouts360: "Native",
            },
            {
              capability: "Layout / map selling",
              generic: "Not included",
              layouts360: "Built-in",
            },
            {
              capability: "Double-booking prevention",
              generic: "Manual",
              layouts360: "Live inventory",
            },
            {
              capability: "India pricing (INR)",
              generic: "USD / per seat",
              layouts360: "From ₹2,000/mo",
            },
          ],
        },
      },
      {
        title: "CRM for builders vs CRM for brokerages",
        paragraphs: [
          "Brokerages need listing syndication and rental workflows. CRM for builders and developers needs phase-wise plot sales, channel partner leads, and booking amounts. Layouts360 targets the second group—layout developers, villa projects, and commercial plot sales in India.",
        ],
      },
    ],
    extraContent: {
      title: "Choosing the best real estate CRM for plot developers in India",
      paragraphs: [
        "Lists of the best real estate CRM software often rank global tools built for US brokerages or rental portfolios. If you sell open plots in Pune, Hyderabad, or tier-2 cities, evaluate software against your sales motion: layout maps, phase-wise releases, booking amounts, and broker coordination.",
        "The best fit for many Indian developers is a platform that combines CRM with plot inventory—not a CRM bolted onto a generic website. Check for mobile site-visit workflows, live availability, INR pricing, and support for channel partner leads before you commit to a per-seat enterprise contract.",
        "Layouts360 is purpose-built for this model. Book a demo to compare lead management, CRM pipeline, and digital layout selling in one walkthrough—especially if you are outgrowing Excel or considering an expensive custom build from an agency.",
      ],
    },
    faqs: [
      {
        question: "What is the best real estate CRM software in India?",
        answer:
          "The best fit depends on your business model. For layout and plot developers, choose a CRM that connects leads to inventory and digital maps—not a generic global CRM. Layouts360 is built specifically for selling plots and units in India.",
      },
      {
        question: "Is Salesforce or HubSpot the best real estate CRM?",
        answer:
          "They work for large brokerages and marketing teams but lack plot inventory and layout maps out of the box. Developers often pay for heavy customization. Mid-size layout developers typically need a specialized real estate CRM.",
      },
      {
        question: "What should builders look for in a CRM?",
        answer:
          "Plot-linked leads, site visit tracking, agent accountability, booking and payment status, and integration with how you actually sell (maps, phases, commercial units). See our criteria list on this page.",
      },
      {
        question: "How much does real estate CRM software cost in India?",
        answer:
          "Layouts360 starts at ₹2,000/month for sales teams, with unlimited users on plans—unlike per-seat global CRMs that scale cost quickly as you hire agents.",
      },
      {
        question: "Can I try Layouts360 before buying?",
        answer:
          "Yes. Book a free demo via the contact page. We walk through lead management, CRM pipeline, and plot inventory on your project type.",
      },
    ],
    cta: {
      title: "See if Layouts360 is the best fit for your project",
      description:
        "Book a demo and compare lead management, CRM, and plot selling in one walkthrough.",
    },
  },
}

export function getSeoLandingPage(key: SeoLandingPageKey): SeoLandingPageConfig {
  return SEO_LANDING_PAGES[key]
}

export function getSeoLandingPageByPath(path: string): SeoLandingPageConfig | undefined {
  return Object.values(SEO_LANDING_PAGES).find((page) => page.path === path)
}

export function createSeoLandingMetadata(key: SeoLandingPageKey): Metadata {
  const page = SEO_LANDING_PAGES[key]
  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: [...page.metadata.keywords],
    alternates: { canonical: absoluteUrl(page.path) },
    openGraph: {
      title: page.metadata.ogTitle,
      description: page.metadata.ogDescription,
      type: "website",
      url: absoluteUrl(page.path),
    },
  }
}
