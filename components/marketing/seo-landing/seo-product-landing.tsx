import Link from "next/link"
import {
  SeoCta,
  SeoFaq,
  SeoHero,
  SeoPageShell,
  SeoSection,
  SeoStructuredData,
} from "@/components/marketing/seo-landing"
import { SeoSectionContent } from "@/components/marketing/seo-landing/seo-section-content"
import { SeoSolutionsNav } from "@/components/marketing/seo-landing/seo-solutions-nav"
import type { SeoLandingPageKey } from "@/lib/seo-landing-pages"
import { getSeoLandingPage } from "@/lib/seo-landing-pages"

interface SeoProductLandingProps {
  pageKey: SeoLandingPageKey
}

export function SeoProductLanding({ pageKey }: SeoProductLandingProps) {
  const page = getSeoLandingPage(pageKey)
  const isCrm = page.variant === "crm"

  return (
    <SeoPageShell>
      <SeoStructuredData
        path={page.path}
        breadcrumbLabel={page.breadcrumbLabel}
        faqs={page.faqs}
      />
      <SeoHero title={page.hero.title} subtitle={page.hero.subtitle} />
      {page.sections.map((section) => (
        <SeoSection key={section.title} title={section.title} muted={section.muted}>
          <SeoSectionContent section={section} path={page.path} />
        </SeoSection>
      ))}
      {!isCrm && <SeoSolutionsNav currentPath={page.path} />}
      {page.extraContent && (
        <SeoSection title={page.extraContent.title} muted>
          {page.extraContent.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mb-4 text-lg leading-relaxed text-gray-700 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </SeoSection>
      )}
      {pageKey === "client" && (
        <SeoSection title="Explore the CRM cluster" muted>
          <p className="text-lg text-gray-700">
            Dive deeper into{" "}
            <Link href="/real-estate-crm-software" className="font-semibold text-blue-600 underline">
              real estate CRM software
            </Link>
            ,{" "}
            <Link href="/real-estate-lead-management-software" className="font-semibold text-blue-600 underline">
              lead management
            </Link>
            , and{" "}
            <Link href="/best-real-estate-crm-software" className="font-semibold text-blue-600 underline">
              best CRM in India
            </Link>
            .
          </p>
        </SeoSection>
      )}
      {pageKey === "plot" && (
        <SeoSection title="Go deeper" muted>
          <p className="text-lg text-gray-700">
            Pair plot management with{" "}
            <Link href="/real-estate-inventory-management-software" className="font-semibold text-blue-600 underline">
              inventory software
            </Link>{" "}
            and{" "}
            <Link href="/real-estate-crm-software" className="font-semibold text-blue-600 underline">
              CRM
            </Link>{" "}
            for a complete sales stack.
          </p>
        </SeoSection>
      )}
      <SeoFaq items={page.faqs} />
      <SeoCta title={page.cta.title} description={page.cta.description} />
    </SeoPageShell>
  )
}
