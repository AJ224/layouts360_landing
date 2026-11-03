import Link from "next/link"
import type { HomeContent } from "@/lib/i18n/home-content"

type CtaSectionNewProps = {
  content: HomeContent["cta"]
}

/** Light CTA — title/subtitle left, Book a Demo right (stacks on small screens). */
export function CtaSectionNew({ content }: CtaSectionNewProps) {
  return (
    <section className="section-y border-y border-slate-200 bg-slate-50" aria-labelledby="cta-sentence">
      <div className="container-site max-w-6xl">
        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="min-w-0 flex-1">
            <p
              id="cta-sentence"
              className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[clamp(1.35rem,4.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:gap-x-3 sm:gap-y-2"
            >
              <span>{content.headlineBefore.trim()}</span>
              <span className="text-logo">{content.headlineAccent}</span>
              <span>{content.headlineAfter.trim()}</span>
            </p>
            <p className="mt-3 max-w-xl text-sm text-ink/60 sm:mt-4 sm:text-base md:text-lg">{content.body}</p>
          </div>
          <Link
            href="/contact#demo-form"
            className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-[4px] bg-brand px-7 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto md:self-center"
          >
            {content.primaryCta}
          </Link>
        </div>
      </div>
    </section>
  )
}
