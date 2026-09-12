import Link from "next/link"
import Header from "@/components/marketing/header"
import { MarketingButtonLink } from "@/components/ui/marketing-button-link"
import { ArrowRight, PlayCircle } from "lucide-react"

const PLATFORM_PROOF = [
  {
    href: "/digital-layout-maps",
    prefix: "Live on",
    name: "Google Maps",
  },
  {
    href: "/compare/live-inventory-portal-vs-whatsapp-updates",
    prefix: "Share on",
    name: "WhatsApp",
  },
  {
    href: "/blog/excel-vs-plot-management-software",
    prefix: "Replace",
    name: "Excel",
  },
] as const

export default function Hero() {
  return (
    <div className="relative bg-white text-gray-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      {/* Header */}
      <Header theme="light" />

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-24 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-slate-500"></span>
              For real estate companies
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Manage every plot.
            <br />
            <span className="text-[#34D399]">Sell every layout.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Layouts360 brings your plots, inventory, bookings, CRM and channel
            partners into one platform.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <MarketingButtonLink href="/contact">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </MarketingButtonLink>
            <MarketingButtonLink href="/#how-it-works" variant="outline">
              <PlayCircle className="mr-2 h-4 w-4" /> See How It Works
            </MarketingButtonLink>
          </div>

          <a
            href="https://www.producthunt.com/products/layouts360?utm_source=layouts360&utm_medium=website&utm_campaign=hero"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6154] text-[10px] font-bold text-white"
              aria-hidden
            >
              P
            </span>
            Featured on Product Hunt
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>

          <nav
            aria-label="How teams use Layouts360"
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-500"
          >
            {PLATFORM_PROOF.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-2">
                {index > 0 && <span className="text-slate-300" aria-hidden>·</span>}
                <Link
                  href={item.href}
                  className="transition-colors hover:text-slate-900"
                >
                  {item.prefix}{" "}
                  <span className="font-semibold text-slate-700">{item.name}</span>
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </section>
    </div>
  )
}
