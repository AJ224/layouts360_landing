import Link from "next/link"
import { FAQSchema } from "@/components/seo/schema"
import type { HomeContent } from "@/lib/i18n/home-content"

type HomeFaqSectionProps = {
  content: HomeContent["faq"]
}

/** Taste: faq — Accordion of filled tiles (`details`/`summary`). */
export function HomeFaqSection({ content }: HomeFaqSectionProps) {
  return (
    <>
      <FAQSchema faqs={content.items} />
      <section className="section-y bg-white" aria-labelledby="faq-heading">
        <div className="container-site grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2
              id="faq-heading"
              className="text-[clamp(1.5rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-ink"
              data-split="lines"
            >
              {content.heading}
            </h2>
            <p className="t-body mt-4 max-w-sm text-ink sm:mt-5" data-reveal="fade" data-delay="0.1">
              {content.body}
            </p>
            <Link
              href="/faq"
              className="mt-5 inline-flex text-[0.9375rem] font-medium text-ink sm:mt-6"
            >
              {content.link} →
            </Link>
          </div>

          <div className="space-y-2 lg:col-span-8" data-reveal="fade">
            {content.items.map((item) => (
              <details
                key={item.question}
                name="home-faq"
                className="group rounded-[4px] bg-[#eceeee] open:bg-brand open:text-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-left text-base font-medium text-ink group-open:text-white sm:gap-4 sm:px-6 sm:py-5 sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0">{item.question}</span>
                  <span
                    className="relative h-4 w-4 shrink-0"
                    aria-hidden
                  >
                    <span className="absolute top-1/2 left-0 h-[3px] w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute top-0 left-1/2 h-4 w-[3px] -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="max-w-[52ch] px-4 pb-4 text-[0.975rem] leading-relaxed text-ink group-open:text-white/90 sm:px-6 sm:pb-5 sm:text-[1.0625rem]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
