import { SeoStructuredData } from "./seo-structured-data"
import { getLandingByPageKey } from "@/lib/landings"
import type { SeoLandingPageKey } from "@/lib/seo-landing-pages"

interface SeoLandingSchemaBlockProps {
  pageKey: SeoLandingPageKey
}

export function SeoLandingSchemaBlock({ pageKey }: SeoLandingSchemaBlockProps) {
  const page = getLandingByPageKey(pageKey)
  if (!page) {
    throw new Error(`Landing MDX not found for pageKey: ${pageKey}`)
  }
  return (
    <SeoStructuredData
      path={page.path}
      breadcrumbLabel={page.breadcrumbLabel}
      faqs={page.faqs}
    />
  )
}
