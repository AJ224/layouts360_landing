import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { landingMdxComponents } from "@/components/marketing/seo-landing/landing-mdx-components"
import {
  SeoCta,
  SeoFaq,
  SeoHero,
  SeoPageShell,
  SeoStructuredData,
} from "@/components/marketing/seo-landing"
import { SeoLandingBreadcrumb } from "@/components/marketing/seo-landing/seo-landing-breadcrumb"
import { SeoLandingMidCta } from "@/components/marketing/seo-landing/seo-landing-mid-cta"
import { SeoLandingMobileToc } from "@/components/marketing/seo-landing/seo-landing-mobile-toc"
import { SeoLandingSidebar } from "@/components/marketing/seo-landing/seo-landing-sidebar"
import { ArticleSchema } from "@/components/seo/schema"
import {
  estimateLandingReadingTime,
  extractLandingHeadings,
} from "@/lib/landing-display"
import { blogMdxOptions } from "@/lib/mdx"
import { getLandingByPageKey } from "@/lib/landings"
import type { SeoLandingPageKey } from "@/lib/seo-landing-pages"
import { absoluteUrl } from "@/lib/site-seo"

interface SeoMdxLandingProps {
  pageKey: SeoLandingPageKey
}

export function SeoMdxLanding({ pageKey }: SeoMdxLandingProps) {
  const landing = getLandingByPageKey(pageKey)
  if (!landing) {
    throw new Error(`Landing MDX not found for pageKey: ${pageKey}`)
  }

  const pageUrl = absoluteUrl(landing.path)
  const headings = extractLandingHeadings(landing.content)
  const readingTime = estimateLandingReadingTime(landing.content, landing.faqs.length)

  return (
    <SeoPageShell>
      <SeoStructuredData
        path={landing.path}
        breadcrumbLabel={landing.breadcrumbLabel}
        faqs={landing.faqs}
      />
      <ArticleSchema
        headline={landing.title}
        description={landing.description}
        datePublished="2026-01-21"
        dateModified={landing.dateModified ?? "2026-06-01"}
        url={pageUrl}
      />
      <SeoLandingBreadcrumb label={landing.breadcrumbLabel} />
      <SeoHero
        title={landing.title}
        introParagraphs={landing.heroIntro}
        readingTimeMinutes={readingTime}
        primaryKeyword={landing.primaryKeyword}
      />

      <div className="bg-slate-50 py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-12">
            <div className="min-w-0">
              <SeoLandingMobileToc headings={headings} />
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10">
                <article className="landing-article mx-auto max-w-none">
                  <MDXRemote
                    source={landing.content}
                    components={landingMdxComponents}
                    options={blogMdxOptions}
                  />
                </article>
              </div>
              <SeoLandingMidCta />
              {landing.relatedLinks && landing.relatedLinks.length > 0 && (
                <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:hidden">
                  <h2 className="mb-4 text-lg font-bold text-slate-900">
                    Related solutions & guides
                  </h2>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {landing.relatedLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-medium text-[#00A884] hover:text-[#00C29F] hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-600">
                    <Link
                      href="/solutions"
                      className="font-medium text-teal-800 hover:underline"
                    >
                      View all solutions
                    </Link>
                    {" · "}
                    <Link
                      href="/blog"
                      className="font-medium text-teal-800 hover:underline"
                    >
                      Blog & comparisons
                    </Link>
                  </p>
                </section>
              )}
            </div>

            <div className="hidden lg:block">
              <SeoLandingSidebar
                headings={headings}
                currentPath={landing.path}
                relatedLinks={landing.relatedLinks}
              />
            </div>
          </div>
        </div>
      </div>

      <SeoFaq items={landing.faqs} />
      <SeoCta title={landing.ctaTitle} description={landing.ctaDescription} />
    </SeoPageShell>
  )
}
