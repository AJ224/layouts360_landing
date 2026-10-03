import { CRM_CLUSTER_LINKS } from "@/lib/crm-cluster-links"
import { PLOT_CLUSTER_LINKS } from "@/lib/plot-cluster-links"

const PRODUCT_SOLUTION_LINKS = [
  { href: "/real-estate-channel-partner-management-software", label: "Channel Partners" },
  { href: "/360-management-software", label: "360 Management" },
  { href: "/real-estate-accounting-software", label: "Payment Tracking" },
  { href: "/commercial-real-estate-software", label: "Commercial Real Estate" },
  { href: "/online-plot-booking-software", label: "Online Plot Booking" },
] as const

function dedupeByHref<T extends { href: string }>(items: readonly T[]): T[] {
  const seen = new Set<string>()
  return items.filter((item) => {
    if (seen.has(item.href)) return false
    seen.add(item.href)
    return true
  })
}

/** Footer + discovery: CRM cluster, plot cluster, then other product solutions. */
export const SEO_SOLUTION_LINKS = dedupeByHref([
  ...CRM_CLUSTER_LINKS,
  ...PLOT_CLUSTER_LINKS,
  ...PRODUCT_SOLUTION_LINKS,
])

/** Compact, deduplicated groups for site footer (not every landing URL). */
export const FOOTER_SOLUTION_GROUPS = [
  {
    title: "Core",
    links: [
      { href: "/real-estate-crm-software", label: "CRM" },
      { href: "/real-estate-plot-management-software", label: "Plot Management" },
      { href: "/real-estate-inventory-management-software", label: "Inventory Management" },
    ],
  },
  {
    title: "Sales & ops",
    links: [
      { href: "/online-plot-booking-software", label: "Plot Booking" },
      { href: "/real-estate-channel-partner-management-software", label: "Channel Partners" },
      { href: "/real-estate-accounting-software", label: "Payment Tracking" },
    ],
  },
] as const

export const FOOTER_COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/tools", label: "Tools" },
] as const
