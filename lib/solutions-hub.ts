/** Solutions hub — grouped SEO/GEO landing pages for /solutions */

export interface SolutionHubItem {
  href: string
  label: string
  description: string
}

export interface SolutionHubGroup {
  title: string
  description: string
  items: SolutionHubItem[]
}

export const SOLUTION_HUB_GROUPS: SolutionHubGroup[] = [
  {
    title: "Inventory & plots",
    description: "Live maps, plot management, and property inventory for Indian developers.",
    items: [
      {
        href: "/real-estate-plot-management-software",
        label: "Plot management software",
        description: "Digital layouts, plot data, and booking workflows for layout developers.",
      },
      {
        href: "/layout-management-software",
        label: "Layout management software",
        description: "Digitize site plans and manage phase-wise plot release on a live layout.",
      },
      {
        href: "/digital-layout-maps",
        label: "Digital layout maps",
        description: "Interactive, satellite-backed maps with live plot-level detail.",
      },
      {
        href: "/township-management-software",
        label: "Township management software",
        description: "Multi-phase inventory and reporting for large plotted townships.",
      },
      {
        href: "/real-estate-inventory-management",
        label: "Inventory management guide",
        description: "Metrics, practices, and bottlenecks for plot and layout inventory in India.",
      },
      {
        href: "/real-estate-inventory-management-software",
        label: "Inventory management software",
        description: "Real-time availability across plots, flats, and commercial units.",
      },
      {
        href: "/commercial-real-estate-software",
        label: "Commercial real estate software",
        description: "Sell shops, office plots, and commercial layouts with live inventory.",
      },
      {
        href: "/real-estate-asset-management-software",
        label: "Asset management",
        description: "Plot-level ROI, holding costs, and portfolio performance.",
      },
    ],
  },
  {
    title: "CRM & sales",
    description: "Leads, pipeline, automation, and launch-day selling.",
    items: [
      {
        href: "/real-estate-crm-software",
        label: "Real estate CRM software",
        description: "Plot-linked CRM for builders and layout developers.",
      },
      {
        href: "/real-estate-lead-management-software",
        label: "Lead management software",
        description: "Capture, assign, and convert portal and walk-in leads.",
      },
      {
        href: "/best-real-estate-crm-software",
        label: "Best real estate CRM (India)",
        description: "Buyer's guide for plot developers evaluating CRM options.",
      },
      {
        href: "/real-estate-client-management-software",
        label: "Client management",
        description: "Buyer lifecycle from enquiry to booking and handover.",
      },
      {
        href: "/site-visit-management",
        label: "Site visit management",
        description: "Schedule, log, and follow up on site visits tied to real plots.",
      },
      {
        href: "/real-estate-sales-automation-software",
        label: "Sales automation software",
        description: "Follow-ups, pipeline, and inventory-backed sales workflows.",
      },
      {
        href: "/launch-day-plot-sales-software",
        label: "Launch day plot sales",
        description: "Timed blocking, live inventory, and launch CRM for high-volume events.",
      },
    ],
  },
  {
    title: "Booking & payments",
    description: "Tokens, online booking, installments, and finance alignment.",
    items: [
      {
        href: "/real-estate-booking-management-software",
        label: "Booking management software",
        description: "Holds, confirmations, and booking records tied to live plots.",
      },
      {
        href: "/online-plot-booking-software",
        label: "Online plot booking software",
        description: "Customer booking flows with payments and live availability.",
      },
      {
        href: "/real-estate-accounting-software",
        label: "Payment tracking software",
        description: "Booking amounts, installments, GST, and outstanding balances.",
      },
      {
        href: "/real-estate-back-office-software",
        label: "Back office software",
        description: "Documents, commissions, milestones, and booking operations.",
      },
    ],
  },
  {
    title: "Partners & platform",
    description: "Channel sales, ERP scope, and full-stack selling.",
    items: [
      {
        href: "/real-estate-channel-partner-management-software",
        label: "Channel partner management",
        description: "Broker portals, live inventory, and structured CP bookings.",
      },
      {
        href: "/real-estate-erp-software",
        label: "Sales ERP software",
        description: "Sales-side ERP: inventory, bookings, CRM, partners, and documents.",
      },
      {
        href: "/property-inventory-management-platform",
        label: "Property inventory platform",
        description: "Unified platform for plots, flats, and commercial unit inventory.",
      },
      {
        href: "/apartment-inventory-management-software",
        label: "Apartment inventory software",
        description: "Tower and floor-wise unit management alongside plot layouts.",
      },
    ],
  },
]

export const ALL_SOLUTION_HUB_HREFS = SOLUTION_HUB_GROUPS.flatMap((g) =>
  g.items.map((i) => i.href),
)
