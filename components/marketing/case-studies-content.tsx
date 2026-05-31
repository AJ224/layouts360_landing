import Link from "next/link"
import { ArrowRight } from "lucide-react"

/** Publish named metrics only after customer approval — placeholders describe story shape. */
const CASE_STUDY_TEMPLATES = [
  {
    title: "Layout launch: zero double allotment",
    industry: "Plotted development · Tier-2 city",
    challenge: "Paper launch room, 200+ brokers, verbal holds on the same plots.",
    outcome:
      "Live blocking, timed releases, and one inventory map for desk and partners—structured launch without spreadsheet reconciliation.",
    href: "/compare/digital-launch-day-plot-sales",
  },
  {
    title: "Channel partner scale without WhatsApp PDFs",
    industry: "Multi-phase layout · Broker network",
    challenge: "Hourly PDF blasts to CPs; availability disputes between brokers.",
    outcome:
      "Partner logins on live layouts; booking requests tied to plots; fewer lead and availability arguments.",
    href: "/compare/channel-partner-broker-portal-real-estate",
  },
  {
    title: "Excel to live inventory in one week",
    industry: "Boutique layout · 120 plots",
    challenge: "Version 6 of the master sheet; two double bookings in one quarter.",
    outcome:
      "Digitized layout, imported inventory, mobile sales—team sells from one status engine.",
    href: "/compare/digital-plot-management-vs-manual-excel",
  },
] as const

export function CaseStudiesContent() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Customer stories</h1>
          <p className="mt-6 text-lg text-slate-600">
            How layout developers use Layouts360 for inventory, launches, and channel sales. Named case studies
            with verified metrics are added as customers approve publication.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <ul className="space-y-8">
          {CASE_STUDY_TEMPLATES.map((story) => (
            <li
              key={story.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{story.industry}</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">{story.title}</h2>
              <dl className="mt-4 space-y-3 text-sm text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-800">Challenge</dt>
                  <dd className="mt-1">{story.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-800">Outcome</dt>
                  <dd className="mt-1">{story.outcome}</dd>
                </div>
              </dl>
              <Link
                href={story.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
              >
                Read the workflow guide
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-12 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <h2 className="text-lg font-bold text-slate-900">Share your project story</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600">
            We publish named case studies with customer permission. Use our{" "}
            <Link href="/blog/digital-launch-case-study-template" className="font-medium text-blue-600 hover:underline">
              digital launch case study template
            </Link>{" "}
            to document results, then contact us to publish approved metrics.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[#FFB800] px-6 py-3 text-sm font-bold text-black hover:bg-[#E5A600]"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </div>
  )
}
