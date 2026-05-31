import type { SeoLandingPageKey } from "@/lib/seo-landing-pages"
import type { SeoLandingVariant } from "@/types/seo-landing"

export interface LandingFaqItem {
  question: string
  answer: string
}

export interface LandingRelatedLink {
  href: string
  label: string
}

export interface LandingMdxFrontmatter {
  pageKey: SeoLandingPageKey
  path: string
  primaryKeyword: string
  title: string
  description: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
  breadcrumbLabel: string
  softwareDescription: string
  heroIntro: string[]
  faqs: LandingFaqItem[]
  relatedLinks?: LandingRelatedLink[]
  ctaTitle: string
  ctaDescription: string
  variant?: SeoLandingVariant
  dateModified?: string
}

export interface LandingMdxDocument extends LandingMdxFrontmatter {
  slug: string
  content: string
}
