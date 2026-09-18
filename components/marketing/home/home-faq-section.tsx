import { FAQSchema } from "@/components/seo/schema"
import { SeoFaq } from "@/components/marketing/seo-landing/seo-faq"
import type { HomeContent } from "@/lib/i18n/home-content"

type HomeFaqSectionProps = {
  content: HomeContent["faq"]
}

export function HomeFaqSection({ content }: HomeFaqSectionProps) {
  return (
    <>
      <FAQSchema faqs={content.items} />
      <SeoFaq items={content.items} heading={content.heading} subhead={content.subhead} />
    </>
  )
}
