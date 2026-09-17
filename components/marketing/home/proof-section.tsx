import Link from "next/link"

/** Story shapes describe real workflow patterns; named metrics are published only after customer approval. See /case-studies. */
const STORIES = [
  {
    industry: "Plotted layout · 120 plots",
    title: "From version-6 spreadsheet to one live map",
    detail:
      "A boutique layout team was reconciling a shared Excel file with two double-booking incidents in one quarter. Moving to a live layout with block-and-book discipline removed the reconciliation meetings.",
  },
  {
    industry: "Multi-phase township",
    title: "Launch weekend without double allotment",
    detail:
      "A launch room with 200+ brokers and verbal holds on paper charts moved to timed blocking and one inventory map for desk and partners. No spreadsheet reconciliation after the weekend.",
  },
  {
    industry: "Broker network · 40+ partners",
    title: "Fewer lead disputes, faster payouts",
    detail:
      "Hourly WhatsApp PDF blasts caused availability disputes between brokers. Partner logins on a live layout, with booking requests tied to real plots, reduced arguments over who sourced which lead.",
  },
] as const

export function ProofSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-20" aria-labelledby="proof-heading">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">How teams use Layouts360</p>
          <h2 id="proof-heading" className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Real workflows, not marketing numbers
          </h2>
          <p className="mt-4 text-slate-600">
            We publish named case studies with verified metrics only after customer approval. Until then, here are
            the workflow patterns we hear most often from real estate companies that switch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STORIES.map((story) => (
            <article key={story.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{story.industry}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{story.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{story.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Read customer stories
          </Link>
        </div>
      </div>
    </section>
  )
}
