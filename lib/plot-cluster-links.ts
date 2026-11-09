/** Internal links for the plot management content cluster (deduplicated by href). */
export const PLOT_CLUSTER_LINKS = [
  { href: "/real-estate-plot-management-software", label: "Plot Management Software" },
  { href: "/online-plot-booking-software", label: "Plot Booking" },
  { href: "/real-estate-inventory-management-software", label: "Inventory Management Software" },
  { href: "/real-estate-crm-software", label: "Plot CRM" },
  { href: "/compare/digital-plot-management-vs-manual-excel", label: "Plot Management vs Excel" },
  { href: "/blog/plot-management-software-india", label: "Plot Management Guide" },
  { href: "/blog/excel-vs-plot-management-software", label: "Excel vs Plot Management" },
  { href: "/blog/how-to-choose-plot-management-software", label: "How to Choose Plot Software" },
  { href: "/blog/real-estate-software-for-layout-developers", label: "Software for Layout Developers" },
  { href: "/blog/layouts360-business-case-study-manual-ops-to-growth", label: "Business Case Study" },
] as const

export const PLOT_CLUSTER_PATHS: ReadonlySet<string> = new Set(
  PLOT_CLUSTER_LINKS.map((l) => l.href),
)
