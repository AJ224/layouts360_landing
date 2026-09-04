/** Internal links for the real-estate CRM content cluster (deduplicated by href). */
export const CRM_CLUSTER_LINKS = [
  { href: "/real-estate-crm-software", label: "Real Estate CRM Software" },
  { href: "/affordable-real-estate-crm", label: "Affordable Real Estate CRM" },
  { href: "/affordable-crm-for-realtors", label: "Affordable CRM for Realtors" },
  { href: "/real-estate-crm", label: "What is Real Estate CRM" },
  { href: "/blog/what-is-real-estate-crm-software", label: "CRM Software Guide" },
  { href: "/compare/unified-real-estate-crm-vs-excel-spreadsheets", label: "CRM vs Excel" },
  { href: "/blog/real-estate-crm-for-builders", label: "CRM for Builders" },
  { href: "/blog/real-estate-crm-with-inventory-management", label: "CRM + Inventory" },
  { href: "/blog/real-estate-crm-pricing-and-free-trials-india", label: "CRM Pricing" },
  { href: "/best-real-estate-crm-software", label: "Best Real Estate CRM (India)" },
] as const

export const CRM_CLUSTER_PATHS: ReadonlySet<string> = new Set(
  CRM_CLUSTER_LINKS.map((l) => l.href),
)
