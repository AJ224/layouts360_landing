import Link from "next/link"
import { ArrowRight } from "lucide-react"

/** Publish named metrics only after customer approval — composites match recurring live workflows. */
const CASE_STUDY_TEMPLATES = [
  {
    title: "From Version-6 Excel to zero status meetings",
    industry: "Boutique layout · 120 plots",
    challenge:
      "Master sheet at Version 6. Site office calling HQ all day. About 12–15 staff hours/week lost to reconciliation—and 2 double-booking incidents in one quarter.",
    outcome:
      "One live map. Timed holds. Availability answers in seconds. Reconciliation meetings for status dropped toward zero; sales time moved back to closing and collections.",
    numbers: ["120 plots", "2 incidents/quarter → target 0", "12–15 hrs/week freed"],
    href: "/blog/layouts360-business-case-study-manual-ops-to-growth",
  },
  {
    title: "Launch room with 200+ brokers, no weekend archaeology",
    industry: "Multi-phase township · high-intensity launch",
    challenge:
      "Paper charts, verbal holds, 200+ brokers. End-of-weekend spreadsheet archaeology to discover what actually sold—and partner disputes every launch.",
    outcome:
      "Timed blocking on one map for desk and partners. No reconciliation after the weekend. Phase 2 can release while Phase 1 still sells.",
    numbers: ["200+ brokers", "Timed locks", "0 end-of-weekend status merge"],
    href: "/blog/layouts360-business-case-study-manual-ops-to-growth",
  },
  {
    title: "40+ partners without hourly PDF blasts",
    industry: "Channel network · multi-project sales",
    challenge:
      "Hourly WhatsApp PDF updates. Constant ‘my PDF was green’ fights. Partner growth stalled because trust broke before commissions did.",
    outcome:
      "Partner logins on live inventory. Booking requests tied to plots. Fair access scaled the network without adding chat coordinators.",
    numbers: ["40+ partners", "0 PDF blast cycles", "Live portal = same stock"],
    href: "/blog/layouts360-business-case-study-manual-ops-to-growth",
  },
] as const

const GROWTH_POINTS = [
  {
    stat: "3–5 → 1",
    label: "Sources of truth collapsed to one live map",
  },
  {
    stat: "₹2K/mo+",
    label: "Plans from ₹2,000/month with unlimited users on tiers",
  },
  {
    stat: "3–5 days",
    label: "Typical go-live per project after layout data",
  },
  {
    stat: "16 · 2,378 · 66",
    label: "Live platform scale: projects · units · users",
  },
] as const

export function CaseStudiesContent() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Customer stories & business outcomes
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            How layout developers replace manual staff chaos—Excel, WhatsApp, verbal holds—with live
            inventory, and what that does to growth. Named logos publish with customer approval; the
            workflows and metrics below match recurring Indian plot-sales operations.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-10 sm:py-12">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {GROWTH_POINTS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-center"
              >
                <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {item.stat}
                </p>
                <p className="mt-2 text-xs leading-snug text-slate-600 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <ul className="space-y-8">
          {CASE_STUDY_TEMPLATES.map((story) => (
            <li
              key={story.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                {story.industry}
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">{story.title}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {story.numbers.map((n) => (
                  <li
                    key={n}
                    className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-900"
                  >
                    {n}
                  </li>
                ))}
              </ul>
              <dl className="mt-5 space-y-3 text-sm text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-800">Challenge (manual / staff)</dt>
                  <dd className="mt-1">{story.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-800">Business outcome</dt>
                  <dd className="mt-1">{story.outcome}</dd>
                </div>
              </dl>
              <Link
                href={story.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
              >
                Read the full business case study
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-lg font-bold text-slate-900">
            Why this matters for growth—not only “going digital”
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <strong className="text-slate-800">Protect revenue:</strong> one serious double
              allotment on a mid-ticket plot can cost more than a year of software.
            </li>
            <li>
              <strong className="text-slate-800">Raise throughput:</strong> more brokers and walk-ins
              without proportional chat staff.
            </li>
            <li>
              <strong className="text-slate-800">Redeploy payroll:</strong> 8–20 hours/week of
              reconciliation becomes follow-ups, collections, and partner enablement.
            </li>
            <li>
              <strong className="text-slate-800">Faster Phase decisions:</strong> sold % and blocked
              exposure from the live map—not Friday email merges.
            </li>
          </ul>
          <Link
            href="/blog/layouts360-business-case-study-manual-ops-to-growth"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            Open the full ROI-style case study
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </section>

        <section className="mt-12 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <h2 className="text-lg font-bold text-slate-900">Share your project story</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600">
            We publish named case studies with customer permission. Use our{" "}
            <Link
              href="/blog/digital-launch-case-study-template"
              className="font-medium text-blue-600 hover:underline"
            >
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
