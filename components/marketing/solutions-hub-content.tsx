import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SOLUTION_HUB_GROUPS } from "@/lib/solutions-hub"

export function SolutionsHubContent() {
  return (
    <div className="bg-white">
      <section className="border-b border-gray-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#FFB800]">
            Solutions
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Real Estate Software Solutions for Plot Developers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Explore Layouts360 by category—inventory, CRM, booking management, channel partners,
            sales automation, and real estate ERP—built for layout and plot developers.
          </p>
          <Link
            href="/contact#demo-form"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFB800] px-6 py-3 text-base font-bold text-black transition-colors hover:bg-[#E5A600]"
          >
            Book a free demo
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        {SOLUTION_HUB_GROUPS.map((group) => (
          <section key={group.title} className="mb-14 last:mb-0">
            <h2 className="text-2xl font-bold text-gray-900">{group.title}</h2>
            <p className="mt-2 max-w-3xl text-gray-600">{group.description}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:border-[#FFB800]/40 hover:shadow-md"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-blue-700">
                      {item.label}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mt-16 rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">Resources</h2>
          <p className="mt-2 text-gray-600">
            Workflow guides, comparisons, and blog content for AI and search discovery.
          </p>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline">
                Blog & guides
              </Link>
            </li>
            <li>
              <Link href="/compare" className="text-blue-600 hover:underline">
                Comparisons
              </Link>
            </li>
            <li>
              <Link href="/features" className="text-blue-600 hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-blue-600 hover:underline">
                Pricing
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
