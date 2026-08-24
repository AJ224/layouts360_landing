import { CRM_CLUSTER_LINKS } from "@/lib/crm-cluster-links"
import { PLOT_CLUSTER_LINKS } from "@/lib/plot-cluster-links"

const PRODUCT_SOLUTION_LINKS = [
  { href: "/township-management-software", label: "Township Management" },
  { href: "/real-estate-booking-management-software", label: "Booking Management" },
  { href: "/site-visit-management", label: "Site Visit Management" },
  { href: "/real-estate-channel-partner-management-software", label: "Channel Partners" },
  { href: "/real-estate-sales-automation-software", label: "Sales Automation" },
  { href: "/launch-day-plot-sales-software", label: "Launch Day Sales" },
  { href: "/real-estate-erp-software", label: "Sales ERP" },
  { href: "/real-estate-back-office-software", label: "Back Office" },
  { href: "/property-inventory-management-platform", label: "Inventory Platform" },
  { href: "/apartment-inventory-management-software", label: "Apartments" },
  { href: "/real-estate-asset-management-software", label: "Asset Management" },
  { href: "/real-estate-accounting-software", label: "Payment Tracking" },
  { href: "/commercial-real-estate-software", label: "Commercial Real Estate" },
  { href: "/real-estate-lead-management-software", label: "Lead Management" },
  { href: "/real-estate-client-management-software", label: "Client Management" },
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
      { href: "/real-estate-crm", label: "What is CRM" },
      { href: "/best-real-estate-crm-software", label: "Best CRM (India)" },
    ],
  },
  {
    title: "Plot management",
    links: [
      { href: "/real-estate-plot-management-software", label: "Plot Management" },
      { href: "/online-plot-booking-software", label: "Plot Booking" },
      { href: "/layout-management-software", label: "Plot Layout" },
      { href: "/digital-layout-maps", label: "Digital Layout Maps" },
      { href: "/real-estate-inventory-management-software", label: "Plot Inventory" },
    ],
  },
  {
    title: "Sales & ops",
    links: [
      { href: "/site-visit-management", label: "Site Visits" },
      { href: "/real-estate-channel-partner-management-software", label: "Channel Partners" },
      { href: "/real-estate-booking-management-software", label: "Bookings" },
      { href: "/real-estate-accounting-software", label: "Payment Tracking" },
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
] as const
