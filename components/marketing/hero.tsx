import Header from "@/components/marketing/header"
import { MarketingButtonLink } from "@/components/ui/marketing-button-link"
import { ArrowRight, PlayCircle } from "lucide-react"

const CAPABILITIES = [
  "Interactive Digital Layout Maps",
  "Plot Inventory Management",
  "Plot Booking & Reservation",
  "Real Estate CRM",
  "Payment Tracking",
  "Channel Partner Management",
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
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              Real estate plot management software · India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
            India&apos;s Real Estate <span className="text-[#34D399]">Plot Management Software</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Layouts360 is plot management and inventory management software for real estate developers, builders,
            and township projects—built to run the full sales lifecycle from one platform: live digital layout
            maps, plot inventory, booking, a real estate CRM, payment tracking, and channel partner management.
          </p>

          {/* Capability chips — explain the product within the first screen */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {CAPABILITIES.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-6 pb-6 sm:flex-row">
            <MarketingButtonLink href="/contact">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </MarketingButtonLink>
            <MarketingButtonLink href="/#how-it-works" variant="outline">
              <PlayCircle className="mr-2 h-4 w-4" /> See How It Works
            </MarketingButtonLink>
          </div>

          {/* Live plot status legend — shows the product, not just claims */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#34D399] rounded-sm"></span> Available</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#FBBF24] rounded-sm"></span> Booked</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#EF4444] rounded-sm"></span> Sold</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#64748B] rounded-sm"></span> Freeze</span>
          </div>
        </div>
      </section>
    </div>
  )
}
