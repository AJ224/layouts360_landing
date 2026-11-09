import Link from "next/link"
import { ArrowRight } from "lucide-react"

/** Playbook-style cards — illustrative composites from recurring layout workflows. */
const PLAYBOOK_LEAKS = [
  {
    title: "The coordinator who became a human database",
    outcome: "₹2–4L/yr of payroll chasing status a lock should own",
    detail: "8–20 hrs/week answering “Is Plot X free?” across Excel, PDF, and WhatsApp.",
  },
  {
    title: "Double booking is a P&L event",
    outcome: "One ₹40L dispute can cost more than a year of software",
    detail: "Refunds, broker fallout, weeks of founder attention — not an ‘ops oops’.",
  },
  {
    title: "Verbal holds invent launch chaos",
    outcome: "200+ brokers + paper chart = Monday forensics",
    detail: "Partners sell from a 9:00 a.m. PDF while the desk moved at 9:12 a.m.",
  },
  {
    title: "WhatsApp PDFs age in minutes",
    outcome: "40+ partners still fight over stale greens",
    detail: "Hourly blasts do not equal live inventory — they equal manager hours.",
  },
] as const

const CASE_STUDIES = [
  {
    title: "The 120-plot layout still on Version 6",
    industry: "Boutique layout · Tier-2 city",
    saved: "Freed ~12–15 staff hrs/week",
    savedSub: "Double-booking pattern cut toward 0",
    body: "Version-6 Excel, HQ calls all day, 2 incidents in a quarter. One live map + timed holds ended the reconciliation meetings and put sales time back on closing.",
    method: "Digitize Phase 1 → timed block/book → kill shadow Excel",
  },
  {
    title: "The launch that stopped needing Monday forensics",
    industry: "Multi-phase township · 200+ brokers",
    saved: "0 end-of-weekend status merge",
    savedSub: "Desk and partners on the same map",
    body: "Paper room, verbal holds, PDF lag. Timed blocking turned launch intensity into a repeatable machine — Phase 2 can release while Phase 1 still sells.",
    method: "Live status engine + partner portal + phase isolation",
  },
  {
    title: "The 40-partner network that quit hourly PDFs",
    industry: "Channel-heavy layout · broker disputes",
    saved: "0 PDF blast cycles",
    savedSub: "Partner access = desk access",
    body: "WhatsApp maps and ‘my PDF was green’ fights. Partner logins on live inventory replaced screenshots with booking requests and an audit trail.",
    method: "Partner portal on the same unit database",
  },
  {
    title: "The payroll you already pay — redeployed",
    industry: "Mid-market ops · India cost structure",
    saved: "~480 hrs/yr shifted chase → close",
    savedSub: "₹2–4L equivalent capacity recovered",
    body: "Status chase feels like ‘support.’ It is inventory infrastructure paid as salary. Live locks convert that headcount into follow-ups, collections, and partner enablement.",
    method: "One availability master + Monday sold-% from the map only",
  },
] as const

export function CaseStudiesContent() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            The Plot Sales Playbook
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Manual ops cost real money. Here&apos;s the math.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            How plot inventory is actually run in India — the staff hours, the ₹ risk, and the part
            most teams skip: what keeps a launch clean when buyers and brokers look. No grey
            process tricks; live locks are enough when everyone shares one map.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 py-12 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
            The operating leaks — with the ₹ math
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {PLAYBOOK_LEAKS.map((leak) => (
              <li
                key={leak.title}
                className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <h3 className="text-base font-bold text-slate-900">{leak.title}</h3>
                <p className="mt-2 text-sm font-semibold text-teal-800">{leak.outcome}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{leak.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
            Case studies — the math, spelled out
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
            Illustrative composites, not named client testimonials — grounded in recurring layout
            workflows (120-plot desks, 200+ broker launches, 40+ partner networks). Run your own
            facts on a demo and the figures are yours.
          </p>

          <ul className="mt-10 space-y-6">
            {CASE_STUDIES.map((study) => (
              <li
                key={study.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                  {study.industry}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{study.title}</h3>
                <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                  {study.saved}
                </p>
                <p className="mt-1 text-sm font-semibold text-teal-800">{study.savedSub}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{study.body}</p>
                <p className="mt-4 text-xs font-medium text-slate-500">
                  Method: {study.method}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Link
              href="/blog/layouts360-business-case-study-manual-ops-to-growth"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              Read the full playbook
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Bring your layout. Bring last quarter&apos;s pain.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            We map <strong className="font-semibold text-slate-800">your</strong> incidents, hours,
            and partner count onto the live workflow — not a slide deck. Plans from{" "}
            <strong className="font-semibold text-slate-800">₹2,000/month</strong> with unlimited
            users on tiers.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#FFB800] px-6 py-3 text-sm font-bold text-black hover:bg-[#E5A600]"
            >
              Book a demo
            </Link>
            <Link
              href="/real-estate-plot-management-software"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              See plot management
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-10">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm text-slate-600">
            Want a named public case study? Use the{" "}
            <Link
              href="/blog/digital-launch-case-study-template"
              className="font-medium text-blue-600 hover:underline"
            >
              launch case study template
            </Link>{" "}
            and{" "}
            <Link href="/contact" className="font-medium text-blue-600 hover:underline">
              contact us
            </Link>{" "}
            when metrics are approved.
          </p>
        </div>
      </section>
    </div>
  )
}
