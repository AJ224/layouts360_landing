import { CRM_CLUSTER_LINKS } from "@/lib/crm-cluster-links"

const PRODUCT_SOLUTION_LINKS = [
  { href: "/real-estate-plot-management-software", label: "Plot Management" },
  { href: "/real-estate-inventory-management-software", label: "Inventory Management" },
  { href: "/real-estate-asset-management-software", label: "Asset Management" },
  { href: "/real-estate-accounting-software", label: "Payment Tracking" },
  { href: "/commercial-real-estate-software", label: "Commercial Real Estate" },
] as const

/** Footer + discovery: CRM cluster first, then product solutions. */
export const SEO_SOLUTION_LINKS = [...CRM_CLUSTER_LINKS, ...PRODUCT_SOLUTION_LINKS] as const
