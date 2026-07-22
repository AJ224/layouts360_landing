/**
 * Target keywords from docs/seo/SEO_KEYWORD_STRATEGY.md (SEMrush analysis, Jan 2026)
 */

/** Tier 1 — quick wins */
export const TIER_1_KEYWORDS = [
  "real estate asset management software",
  "real estate accounting software",
  "real estate client management software",
  "commercial real estate software",
  "real estate management softwares",
] as const

/** Tier 2 — build authority */
export const TIER_2_KEYWORDS = [
  "real estate crm software",
  "real estate software",
  "real estate transaction management software",
] as const

/** Tier 3 — long-term */
export const TIER_3_KEYWORDS = [
  "real estate management software",
  "real estate property management software",
] as const

/** Secondary / supporting */
export const SECONDARY_KEYWORDS = [
  "plot management software",
  "plot management software India",
  "real estate inventory management software",
  "real estate plot management software",
  "digital layout software",
  "real estate inventory management",
  "layout developer software",
] as const

export const ALL_TARGET_KEYWORDS = [
  ...TIER_1_KEYWORDS,
  ...TIER_2_KEYWORDS,
  ...SECONDARY_KEYWORDS,
] as const

export const PAGE_KEYWORDS = {
  home: [
    "real estate plot management software",
    "plot booking software",
    "real estate inventory management software",
    "plot management software India",
    "real estate crm software",
    "township management software",
    "booking management software",
    "channel partner management software",
    "digital layout maps",
    "builder CRM India",
  ],
  inventory: [
    "real estate inventory management software",
    "real estate inventory management",
    "real estate inventory app",
    "real estate inventory template excel",
    "real estate software India",
    "real estate management softwares",
    "real estate software",
    "plot management software",
    "property inventory software",
  ],
  inventoryManagement: [
    "real estate inventory management",
    "real estate inventory",
    "months of inventory real estate",
    "absorption rate real estate",
    "property inventory management",
    "inventory management real estate India",
  ],
  plot: [
    "real estate plot management software",
    "plot management software",
    "plot management software India",
    "digital layout software",
    "plot booking software",
    "real estate inventory software",
  ],
  asset: [
    "real estate asset management software",
    "plot asset management",
    "real estate asset tracking",
    "real estate portfolio management",
    "real estate management software",
  ],
  accounting: [
    "real estate accounting software",
    "real estate payment tracking software",
    "real estate transaction management software",
    "plot payment tracking software",
    "installment tracking software",
    "real estate GST software",
  ],
  client: [
    "real estate client management software",
    "real estate crm software",
    "real estate CRM",
    "lead management software",
    "real estate client management",
    "plot buyer tracking",
  ],
  crm: [
    "real estate crm software",
    "real estate CRM software India",
    "real estate crm software free",
    "real estate CRM pricing",
    "real estate crm",
    "crm for real estate",
    "crm software for real estate agents",
    "crm for builders and developers",
    "real estate CRM India",
  ],
  crmGuide: [
    "real estate crm",
    "real estate CRM India",
    "best real estate crm software in India",
    "top 10 crm for real estate",
    "crm for real estate developers",
  ],
  lead: [
    "real estate lead management software",
    "real estate lead management",
    "how real estate companies manage leads",
    "lead tracking software real estate",
    "property lead management India",
  ],
  bestCrm: [
    "best real estate crm",
    "best real estate crm software",
    "best real estate crm software in India",
    "top 10 crm for real estate",
    "best crm for real estate developers",
    "real estate crm comparison",
  ],
  commercial: [
    "commercial real estate software",
    "commercial plot management software",
    "commercial real estate sales software",
    "commercial property sales",
    "shop plot management",
  ],
  blog: [
    "real estate blog",
    "real estate software comparison",
    "real estate crm software",
    "plot management tips",
    "real estate technology India",
    "excel vs plot management software",
  ],
  features: [
    "real estate software features",
    "plot management software features",
    "real estate crm software",
    "digital layout software",
    "real estate inventory management",
  ],
  pricing: [
    "real estate software pricing",
    "plot management software cost India",
    "real estate CRM pricing",
    "real estate software India",
  ],
  faq: [
    "real estate software FAQ",
    "plot management software questions",
    "real estate CRM India",
    "layout software for developers",
  ],
  channelPartner: [
    "channel partner management software",
    "real estate channel partner management",
    "broker portal real estate",
    "real estate agent management software",
    "channel partner software India",
    "broker commission software real estate",
  ],
  booking: [
    "booking management software",
    "real estate booking management software",
    "plot booking software",
    "real estate booking system",
    "property booking management software",
    "plot booking management India",
  ],
  erp: [
    "real estate ERP",
    "real estate ERP software",
    "real estate ERP software India",
    "ERP for real estate developers",
    "real estate sales ERP",
    "property sales ERP software",
  ],
  salesAutomation: [
    "real estate sales automation",
    "real estate sales automation software",
    "sales automation for real estate",
    "plot sales automation",
    "real estate pipeline automation",
  ],
  launchDay: [
    "launch day plot sales software",
    "real estate launch CRM",
    "project launch software real estate",
    "plot launch management software",
    "real estate launch day software",
  ],
  onlineBooking: [
    "online plot booking software",
    "online plot booking",
    "real estate online booking software",
    "plot booking online India",
    "digital plot booking system",
    "e-commerce plot booking",
  ],
  apartment: [
    "apartment inventory management software",
    "apartment inventory management",
    "flat inventory management software",
    "tower inventory management real estate",
    "apartment booking software India",
  ],
  backOffice: [
    "real estate back office software",
    "real estate back office",
    "property back office software",
    "real estate document management software",
    "installment tracking real estate",
  ],
  propertyInventory: [
    "property inventory management platform",
    "property inventory management software",
    "real estate inventory platform",
    "property sales inventory system",
  ],
  about: [
    "Layouts360 company",
    "real estate software company India",
    "plot management software company",
  ],
  caseStudies: [
    "Layouts360 case studies",
    "plot management software results",
    "real estate software customer stories",
  ],
  solutions: [
    "real estate software solutions",
    "plot management software India",
    "real estate inventory management software",
    "real estate ERP software",
    "channel partner management software",
    "booking management software real estate",
  ],
} as const

/** GEO / category landing pages for sitemap and llms.txt */
export const GEO_SOLUTION_PATHS = [
  "/real-estate-channel-partner-management-software",
  "/real-estate-booking-management-software",
  "/real-estate-erp-software",
  "/real-estate-sales-automation-software",
  "/launch-day-plot-sales-software",
  "/online-plot-booking-software",
  "/apartment-inventory-management-software",
  "/real-estate-back-office-software",
  "/property-inventory-management-platform",
] as const

export const TRUST_PAGES = ["/about", "/case-studies"] as const

/** Merge page keywords with post tags for article pages */
export function keywordsForArticle(tags?: string[]): string[] {
  const fromTags = tags ?? []
  const combined = [...fromTags, ...SECONDARY_KEYWORDS.slice(0, 4)]
  return [...new Set(combined)]
}
