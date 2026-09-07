/** Solutions hub — only the 10 indexable pillar landings. */

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
    title: "Plot & inventory",
    description: "Live maps, inventory, and commercial layouts for Indian developers.",
    items: [
      {
        href: "/real-estate-plot-management-software",
        label: "Plot management software",
        description: "Digital layouts, satellite maps, plot inventory, and launch workflows.",
      },
      {
        href: "/real-estate-inventory-management-software",
        label: "Inventory management software",
        description: "Real-time availability, asset views, and multi-project control.",
      },
      {
        href: "/commercial-real-estate-software",
        label: "Commercial real estate software",
        description: "Shops, office plots, and commercial layouts with live inventory.",
      },
    ],
  },
  {
    title: "CRM & partners",
    description: "Plot-linked CRM, affordable pricing, and channel partner portals.",
    items: [
      {
        href: "/real-estate-crm-software",
        label: "Real estate CRM software",
        description: "Leads, visits, buyer lifecycle, and pipeline on live plots.",
      },
      {
        href: "/best-real-estate-crm-software",
        label: "Best real estate CRM (India)",
        description: "Buyer’s guide for plot developers evaluating CRM options.",
      },
      {
        href: "/affordable-real-estate-crm",
        label: "Affordable real estate CRM",
        description: "INR pricing from ₹2,000/month with unlimited users on tiers.",
      },
      {
        href: "/real-estate-channel-partner-management-software",
        label: "Channel partner management",
        description: "Broker portals, live inventory, and structured CP bookings.",
      },
      {
        href: "/360-management-software",
        label: "360 management software",
        description: "All-in-one maps, inventory, CRM, booking, and partners.",
      },
    ],
  },
  {
    title: "Booking & payments",
    description: "Online booking, holds, and installment tracking.",
    items: [
      {
        href: "/online-plot-booking-software",
        label: "Online plot booking software",
        description: "Customer checkout and desk booking ops on the same inventory.",
      },
      {
        href: "/real-estate-accounting-software",
        label: "Payment tracking software",
        description: "Booking amounts, installments, GST, and outstanding balances.",
      },
    ],
  },
]

export const ALL_SOLUTION_HUB_HREFS = SOLUTION_HUB_GROUPS.flatMap((g) =>
  g.items.map((i) => i.href),
)
