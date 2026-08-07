import Header from "@/components/marketing/header"
import { MarketingButtonLink } from "@/components/ui/marketing-button-link"
import { ArrowRight, PlayCircle } from "lucide-react"

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
              Real estate plot management software
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Real Estate <span className="text-[#34D399]">Plot Management Software</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Layouts360 replaces Excel, PDFs, and WhatsApp updates with live plot maps, booking, and CRM—in one
            platform for layout developers.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <MarketingButtonLink href="/contact">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </MarketingButtonLink>
            <MarketingButtonLink href="/#how-it-works" variant="outline">
              <PlayCircle className="mr-2 h-4 w-4" /> See How It Works
            </MarketingButtonLink>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#34D399]"></span> Available
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#FBBF24]"></span> Booked
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#EF4444]"></span> Sold
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#64748B]"></span> Freeze
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
