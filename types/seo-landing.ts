export interface SeoFaqItem {
  question: string
  answer: string
}

export type SeoFeatureCardIcon = "target" | "users" | "bell"

export interface SeoLandingCrossLink {
  href: string
  label: string
}

export interface SeoLandingSection {
  title: string
  muted?: boolean
  paragraphs?: string[]
  bullets?: string[]
  footerNote?: string
  clusterNav?: boolean
  comparison?: {
    negative: { title: string; body: string }
    positive: { title: string; body: string }
  }
  featureCards?: {
    icon: SeoFeatureCardIcon
    title: string
    body: string
  }[]
  criteria?: string[]
  comparisonTable?: {
    rows: {
      capability: string
      generic: string
      layouts360: string
    }[]
  }
  crossLinks?: {
    prefix: string
    links: SeoLandingCrossLink[]
    suffix?: string
  }
  linkParts?: { text: string; href?: string }[]
}

export type SeoLandingVariant = "product" | "crm"

export interface SeoLandingPageConfig {
  path: string
  breadcrumbLabel: string
  softwareDescription: string
  variant?: SeoLandingVariant
  metadata: {
    title: string
    description: string
    keywords: readonly string[]
    ogTitle: string
    ogDescription: string
  }
  hero: {
    title: string
    subtitle: string
  }
  sections: SeoLandingSection[]
  faqs: SeoFaqItem[]
  extraContent?: {
    title: string
    paragraphs: string[]
  }
  cta: {
    title: string
    description: string
  }
}
