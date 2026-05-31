import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SeoLandingMidCta() {
  return (
    <div className="mt-10 rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8">
      <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
        See how Layouts360 works for your layout
      </h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
        Interactive maps, live inventory, CRM, and payments—built for Indian plot
        developers. Same platform across all solution pages.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/contact#demo-form"
          className="inline-flex items-center rounded-lg bg-[#00C29F] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00A884]"
        >
          Book a free demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/solutions"
          className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
        >
          Explore solutions
        </Link>
      </div>
    </div>
  )
}
