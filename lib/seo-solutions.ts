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
    title: "CRM",
    links: [
      { href: "/real-estate-crm-software", label: "Real Estate CRM" },
      { href: "/best-real-estate-crm-software", label: "Best CRM (India)" },
      { href: "/affordable-real-estate-crm", label: "Affordable CRM" },
    ],
  },
  {
    title: "Plot management",
    links: [
      { href: "/real-estate-plot-management-software", label: "Plot Management" },
      { href: "/online-plot-booking-software", label: "Plot Booking" },
      { href: "/real-estate-inventory-management-software", label: "Inventory Management" },
    ],
  },
  {
    title: "Sales & ops",
    links: [
      { href: "/real-estate-channel-partner-management-software", label: "Channel Partners" },
      { href: "/real-estate-accounting-software", label: "Payment Tracking" },
      { href: "/360-management-software", label: "360 Management" },
    ],
  },
] as const

export const FOOTER_COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/tools", label: "Tools" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const
