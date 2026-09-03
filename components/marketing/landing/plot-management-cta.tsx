import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { plotManagementBenefits } from "@/components/marketing/landing/data"
import { CheckList, Section } from "@/components/marketing/landing/ui"

export function PlotManagementSoftwareSection() {
  return (
    <Section className="border-y border-slate-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid gap-10 md:grid-cols-[1fr_240px] md:items-start">
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-700">
              Complete Solution
            </span>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Looking for <span className="text-blue-600">Plot Management Software</span>?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              <strong>Plot management and inventory management software</strong> with built-in CRM and booking for
              layout developers—live maps, channel partners, and payment tracking in one platform.
            </p>
            <CheckList items={plotManagementBenefits} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/real-estate-plot-management-software"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 group"
              >
                Plot management
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/real-estate-inventory-management-software"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Inventory management
              </Link>
            </div>
          </div>

          <aside className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 p-6">
            <p className="text-2xl font-bold text-emerald-900">Contact for pricing</p>
            <p className="mt-1 text-sm font-medium text-emerald-800">Quote on enquiry</p>
            <Link
              href="/contact#demo-form"
              className="mt-6 flex h-10 w-full items-center justify-center rounded-md bg-emerald-700 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
            >
              Enquire now
            </Link>
          </aside>
        </div>
      </div>
    </Section>
  )
}
