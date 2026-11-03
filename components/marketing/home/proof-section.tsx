import Link from "next/link"
import type { HomeContent } from "@/lib/i18n/home-content"

type ProofSectionProps = {
  content: HomeContent["proof"]
}

export function ProofSection({ content }: ProofSectionProps) {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50 py-12 sm:py-16 md:py-20"
      aria-labelledby="proof-heading"
    >
      <div className="container-site max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="proof-heading"
            className="text-balance text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-slate-900"
            data-split="lines"
          >
            {content.headline}
          </h2>
        </div>

        <div
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-3 md:gap-6"
          data-reveal="up"
          data-stagger
        >
          {content.stories.map((story) => (
            <article
              key={story.industry}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                {story.industry}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{story.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link href="/case-studies" className="text-sm font-semibold text-blue-600 hover:underline">
            {content.link}
          </Link>
        </div>
      </div>
    </section>
  )
}
