/** Internal links for the real-estate CRM content cluster (deduplicated by href). */
export const CRM_CLUSTER_LINKS = [
  { href: "/real-estate-crm-software", label: "Real Estate CRM Software" },
  { href: "/affordable-real-estate-crm", label: "Affordable Real Estate CRM" },
  { href: "/best-real-estate-crm-software", label: "Best Real Estate CRM (India)" },
  { href: "/blog/what-is-real-estate-crm-software", label: "CRM Software Guide" },
  { href: "/compare/unified-real-estate-crm-vs-excel-spreadsheets", label: "CRM vs Excel" },
  { href: "/compare/purpose-built-real-estate-software-vs-generic-crm", label: "Purpose-built vs generic CRM" },
  { href: "/blog/top-10-real-estate-crm-software-india", label: "Top CRM software India" },
] as const

export const CRM_CLUSTER_PATHS: ReadonlySet<string> = new Set(
  CRM_CLUSTER_LINKS.map((l) => l.href),
)
