import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PRODUCT_SUITE_TILES } from "@/lib/product-suite"

export function ProductSuiteSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="product-suite-heading">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#FFB800]">Product suite</p>
          <h2 id="product-suite-heading" className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            One platform for selling plots end to end
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Inventory, maps, CRM, booking, channel partners, and reports. Pick what you need today and scale without
            stitching tools together.
          </p>
          <Link
            href="/solutions"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            View all solutions
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_SUITE_TILES.map((tile) => {
            const Icon = tile.icon
            return (
              <li key={tile.title}>
                <Link
                  href={tile.href}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-6 transition-colors hover:border-[#FFB800]/50 hover:bg-white hover:shadow-md"
                >
                  <Icon className="h-8 w-8 text-[#FFB800]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-700">{tile.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tile.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
