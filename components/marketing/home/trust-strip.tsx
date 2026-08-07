import { COMPANY } from "@/lib/company"
import { MapPin, Phone } from "lucide-react"

const TRUST_ITEMS = [
  "Built for layout developers",
  "Live inventory on every device",
  "Plans from ₹2,000/month",
  "Unlimited users on tiers",
] as const

export function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-900 py-6 text-white" aria-label="Trust indicators">
      <div className="container mx-auto flex flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
          {TRUST_ITEMS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#FFB800]" aria-hidden />
            {COMPANY.headquarters}
          </span>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-[#FFB800]" aria-hidden />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
