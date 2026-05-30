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
    "real estate software",
    "real estate management software",
    "real estate crm software",
    "plot management software",
    "real estate inventory management software",
    "digital layout software",
    "real estate ERP",
    "builder CRM India",
  ],
  inventory: [
    "real estate inventory management software",
    "real estate inventory management",
    "real estate management softwares",
    "real estate software",
    "plot management software",
    "property inventory software",
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
    "real estate crm",
    "crm for real estate",
    "crm software for real estate agents",
    "crm for builders and developers",
    "real estate CRM India",
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
} as const

/** Merge page keywords with post tags for article pages */
export function keywordsForArticle(tags?: string[]): string[] {
  const fromTags = tags ?? []
  const combined = [...fromTags, ...SECONDARY_KEYWORDS.slice(0, 4)]
  return [...new Set(combined)]
}
