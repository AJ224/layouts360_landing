/** Internal links for the plot management content cluster (deduplicated by href). */
export const PLOT_CLUSTER_LINKS = [
  { href: "/real-estate-plot-management-software", label: "Plot Management Software" },
  { href: "/online-plot-booking-software", label: "Plot Booking" },
  { href: "/real-estate-inventory-management-software", label: "Inventory Management Software" },
  { href: "/layout-management-software", label: "Layout Management Software" },
  { href: "/digital-layout-maps", label: "Digital Layout Maps" },
  { href: "/real-estate-crm-software", label: "Plot CRM" },
  { href: "/compare/digital-plot-management-vs-manual-excel", label: "Plot Management vs Excel" },
  { href: "/blog/plot-management-software-india", label: "Plot Management Guide" },
] as const

export const PLOT_CLUSTER_PATHS: ReadonlySet<string> = new Set(
  PLOT_CLUSTER_LINKS.map((l) => l.href),
)
