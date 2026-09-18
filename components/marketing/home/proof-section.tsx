import Link from "next/link"
import type { HomeContent } from "@/lib/i18n/home-content"

type ProofSectionProps = {
  content: HomeContent["proof"]
}

export function ProofSection({ content }: ProofSectionProps) {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20" aria-labelledby="proof-heading">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="proof-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {content.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.stories.map((story) => (
            <article key={story.industry} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                {story.industry}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{story.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/case-studies" className="text-sm font-semibold text-blue-600 hover:underline">
            {content.link}
          </Link>
        </div>
      </div>
    </section>
  )
}
