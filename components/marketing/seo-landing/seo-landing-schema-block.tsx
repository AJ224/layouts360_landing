import { SeoStructuredData } from "./seo-structured-data"
import type { SeoLandingPageKey } from "@/lib/seo-landing-pages"
import { getSeoLandingPage } from "@/lib/seo-landing-pages"

interface SeoLandingSchemaBlockProps {
  pageKey: SeoLandingPageKey
}

export function SeoLandingSchemaBlock({ pageKey }: SeoLandingSchemaBlockProps) {
  const page = getSeoLandingPage(pageKey)
  return (
    <SeoStructuredData
      path={page.path}
      breadcrumbLabel={page.breadcrumbLabel}
      faqs={page.faqs}
    />
  )
}
