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

export const SOLUTION_PAGE = {
  eyebrow: "Solutions",
  headline: "Stop selling from PDF, Excel and WhatsApp.",
  subhead:
    "One live system for your layout — inventory, booking, leads, brokers. Pick the problem that costs you sales. We’ll show it on your project in a demo.",
  primaryCta: "Book a free demo",
  who: {
    headline: "For teams who sell plots and flats",
    items: [
      "Plot & layout developers",
      "Apartment & villa projects",
      "Sales heads and site teams",
      "Channel partner networks",
    ],
  },
} as const

/** Buyer-job cards — conversion first, then deep landings. */
export const SOLUTION_JOBS = [
  {
    id: "maps",
    title: "We’re still selling from PDFs",
    body: "Digitize the layout. Color-coded plots. Agents tap a unit instead of hunting a sheet.",
    href: "/real-estate-plot-management-software",
    cta: "Plot & layout software",
    featured: true,
  },
  {
    id: "inventory",
    title: "We keep double-booking",
    body: "One inventory. A hold locks the unit for everyone — office, site, and brokers.",
    href: "/real-estate-inventory-management-software",
    cta: "Live inventory",
    featured: false,
  },
  {
    id: "crm",
    title: "CRM doesn’t match the map",
    body: "Leads, visits, and buyers sit on the plot they want — not a generic deal.",
    href: "/real-estate-crm-software",
    cta: "CRM on the plot",
    featured: false,
  },
  {
    id: "partners",
    title: "Brokers fight over stock",
    body: "Partner logins on live availability. Booking requests on real units, not group chat.",
    href: "/real-estate-channel-partner-management-software",
    cta: "Channel partners",
    featured: false,
  },
] as const

export const SOLUTION_HUB_GROUPS: SolutionHubGroup[] = [
  {
    title: "Layouts & inventory",
    description: "Stop selling from files. Put every plot, flat, and shop on a live map.",
    items: [
      {
        href: "/real-estate-plot-management-software",
        label: "Plot management",
        description: "Interactive layout. Tap a plot for size, facing, price, and status.",
      },
      {
        href: "/real-estate-inventory-management-software",
        label: "Inventory management",
        description: "Available, held, booked, sold — one truth across projects.",
      },
      {
        href: "/commercial-real-estate-software",
        label: "Commercial layouts",
        description: "Shops, offices, and commercial plots with the same live stock.",
      },
    ],
  },
  {
    title: "Booking & money in",
    description: "Hold, book, and track what the buyer still owes — on the same unit.",
    items: [
      {
        href: "/online-plot-booking-software",
        label: "Plot booking",
        description: "Freeze a unit, book it, keep desk and customer on the same inventory.",
      },
      {
        href: "/real-estate-accounting-software",
        label: "Payment tracking",
        description: "Booking amount, installments, and outstanding — tied to the unit.",
      },
    ],
  },
  {
    title: "Team, brokers, one system",
    description: "Sales, partners, and the map in one place — not five WhatsApp groups.",
    items: [
      {
        href: "/real-estate-crm-software",
        label: "Real estate CRM",
        description: "Leads and follow-ups linked to the plot or flat, not a spreadsheet deal.",
      },
      {
        href: "/real-estate-channel-partner-management-software",
        label: "Channel partners",
        description: "Broker login, live stock, structured booking requests.",
      },
      {
        href: "/360-management-software",
        label: "All-in-one (360)",
        description: "Maps, inventory, CRM, booking, and partners together.",
      },
    ],
  },
  {
    title: "If you’re comparing CRM options",
    description: "Short guides for developers choosing software — then talk to us on your layout.",
    items: [
      {
        href: "/best-real-estate-crm-software",
        label: "Choosing a CRM in India",
        description: "What plot developers should look for — unit-linked, not generic sales CRM.",
      },
      {
        href: "/affordable-real-estate-crm",
        label: "A CRM that fits your inventory",
        description: "Built for developers. Contact us for a plan that matches your projects.",
      },
    ],
  },
]

export const ALL_SOLUTION_HUB_HREFS = SOLUTION_HUB_GROUPS.flatMap((g) =>
  g.items.map((i) => i.href),
)
