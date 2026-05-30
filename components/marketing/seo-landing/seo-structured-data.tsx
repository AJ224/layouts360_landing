import { BreadcrumbSchema, FAQSchema } from "@/components/seo/schema"
import { SITE_URL, absoluteUrl } from "@/lib/site-seo"
import type { SeoFaqItem } from "@/types/seo-landing"

interface SeoStructuredDataProps {
  path: string
  breadcrumbLabel: string
  faqs: SeoFaqItem[]
}

export function SeoStructuredData({ path, breadcrumbLabel, faqs }: SeoStructuredDataProps) {
  const pageUrl = absoluteUrl(path)

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: breadcrumbLabel, url: pageUrl },
        ]}
      />
    </>
  )
}
