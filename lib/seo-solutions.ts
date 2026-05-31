import { CRM_CLUSTER_LINKS } from "@/lib/crm-cluster-links"

const PRODUCT_SOLUTION_LINKS = [
  { href: "/real-estate-plot-management-software", label: "Plot Management" },
  { href: "/real-estate-inventory-management-software", label: "Inventory Management" },
  { href: "/real-estate-booking-management-software", label: "Booking Management" },
  { href: "/online-plot-booking-software", label: "Online Plot Booking" },
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
] as const

/** Footer + discovery: CRM cluster first, then product solutions. */
export const SEO_SOLUTION_LINKS = [...CRM_CLUSTER_LINKS, ...PRODUCT_SOLUTION_LINKS] as const

/** Compact, deduplicated groups for site footer (not every landing URL). */
export const FOOTER_SOLUTION_GROUPS = [
  {
    title: "CRM",
    links: [
      { href: "/real-estate-crm-software", label: "Real Estate CRM" },
      { href: "/real-estate-lead-management-software", label: "Lead Management" },
      { href: "/real-estate-client-management-software", label: "Client Management" },
    ],
  },
  {
    title: "Sales & inventory",
    links: [
      { href: "/real-estate-plot-management-software", label: "Plot Management" },
      { href: "/real-estate-inventory-management-software", label: "Inventory" },
      { href: "/real-estate-booking-management-software", label: "Bookings" },
      { href: "/real-estate-channel-partner-management-software", label: "Channel Partners" },
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
] as const
