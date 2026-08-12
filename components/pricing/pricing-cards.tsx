"use client"

import { Button } from "@/components/ui/button"
import { pricingConfig, type PricingPackage } from "@/lib/pricing-config"
import {
  ArrowRight,
  Satellite,
  Navigation,
  Search,
  BarChart3,
  Images,
  Ruler,
  Tags,
  Link2,
  Download,
  MapPinned,
  Users,
  Lock,
  FileText,
  Building2,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

function packageHref(pkg: PricingPackage) {
  const params = new URLSearchParams({ package: pkg.id })
  return `/contact?${params.toString()}#demo-form`
}

const FEATURE_ICONS: Array<{ test: (f: string) => boolean; icon: typeof Satellite }> = [
  { test: (f) => f.includes("satellite") || f.includes("google maps"), icon: Satellite },
  { test: (f) => f.includes("gps") || f.includes("attendance") || f.includes("direction"), icon: Navigation },
  { test: (f) => f.includes("search") || f.includes("filter") || f.includes("digitize") || f.includes("cad"), icon: Search },
  { test: (f) => f.includes("inventory") || f.includes("real-time") || f.includes("dashboard") || f.includes("report"), icon: BarChart3 },
  { test: (f) => f.includes("gallery") || f.includes("photos") || f.includes("youtube") || f.includes("nearby"), icon: Images },
  { test: (f) => f.includes("label") || f.includes("sq ft") || f.includes("facing") || f.includes("group"), icon: Tags },
  { test: (f) => f.includes("dimension") || f.includes("unit") || f.includes("scale"), icon: Ruler },
  { test: (f) => f.includes("share") || f.includes("public") || f.includes("link"), icon: Link2 },
  { test: (f) => f.includes("download"), icon: Download },
  { test: (f) => f.includes("map") || f.includes("pan") || f.includes("zoom") || f.includes("layout"), icon: MapPinned },
  { test: (f) => f.includes("crm") || f.includes("enquir") || f.includes("follow-up") || f.includes("facebook") || f.includes("instagram") || f.includes("my day") || f.includes("joint") || f.includes("team"), icon: Users },
  { test: (f) => f.includes("freeze") || f.includes("lock") || f.includes("hold") || f.includes("sold"), icon: Lock },
  { test: (f) => f.includes("payment") || f.includes("receipt") || f.includes("ledger") || f.includes("upi") || f.includes("booking") || f.includes("register"), icon: FileText },
  { test: (f) => f.includes("partner") || f.includes("role") || f.includes("workflow") || f.includes("portfolio") || f.includes("project"), icon: Building2 },
]

function getFeatureIcon(feature: string) {
  const f = feature.toLowerCase()
  return FEATURE_ICONS.find((entry) => entry.test(f))?.icon ?? ShieldCheck
}

function PackageCard({ pkg }: Readonly<{ pkg: PricingPackage }>) {
  const isFeatured = pkg.recommended
  const isDark = pkg.theme === "dark" || pkg.theme === "accent"
  const isLayoutsPackage = pkg.id === "visual"
  const visibleFeatures = pkg.features
  const articleClassName = (() => {
    if (isFeatured) {
      return "border-[#EAB308]/50 bg-[#0B1E3B] text-white shadow-2xl shadow-[#0B1E3B]/20 ring-1 ring-[#EAB308]/30 md:-translate-y-2"
    }

    if (pkg.theme === "accent") {
      return "border-slate-800 bg-slate-900 text-white shadow-lg"
    }

    return "border-slate-200/80 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:shadow-md"
  })()

  const featureBgClass = (() => {
    if (isFeatured) return "bg-[#EAB308]/15"
    if (isDark) return "bg-white/10"
    return "bg-emerald-50"
  })()

  const featureCheckColorClass = (() => {
    if (isFeatured) return "text-[#EAB308]"
    if (isDark) return "text-emerald-300"
    return "text-emerald-600"
  })()

  const ctaButtonClass = (() => {
    if (isFeatured) {
      return "bg-[#EAB308] text-[#0B1E3B] hover:bg-[#f0c43a]"
    }
    if (isDark) {
      return "bg-white text-slate-900 hover:bg-slate-100"
    }
    return "bg-[#0B1E3B] text-white hover:bg-[#0B1E3B]/90"
  })()

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 ${articleClassName}`}
    >
      {isFeatured && (
        <div className="bg-[#EAB308] px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B1E3B]">
          Most sites run this
        </div>
      )}

      <div className="flex flex-1 flex-col px-6 pb-7 pt-7 sm:px-8">
        <div className="space-y-1">
          <p
            className={[
              "text-[11px] font-semibold uppercase tracking-[0.2em]",
              isDark ? "text-slate-400" : "text-slate-500",
            ].join(" ")}
          >
            {pkg.stage}
          </p>
          <h3 className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-[#0B1E3B]"}`}>
            {pkg.name}
          </h3>
          <p className={`text-sm leading-snug ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {pkg.tagline}
          </p>
          <p className={`pt-2 text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {pkg.description}
          </p>
        </div>

        <div className={`mt-6 border-t pt-6 ${isDark ? "border-white/10" : "border-slate-100"}`}>
          <p className={`text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {pkg.pricePrimary}
          </p>
          <p className={`mt-1 text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            {pkg.priceSecondary}
          </p>
          <p className={`mt-2 text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {pkg.priceNote}
          </p>
        </div>

        <ul className="mt-4 space-y-3">
          {visibleFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              {(() => {
                const Icon = getFeatureIcon(feature)
                return (
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featureBgClass}`}
                  >
                    <Icon
                      className={`h-3 w-3 ${featureCheckColorClass}`}
                      aria-hidden
                    />
                  </span>
                )
              })()}
              <span className={`text-sm leading-snug ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {isLayoutsPackage && (
          <a
            href="https://demo3.layouts360.com/s/MTf0e8"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-5 inline-flex items-center text-sm font-semibold underline underline-offset-4 ${isDark ? "text-slate-200" : "text-[#0B1E3B]"}`}
          >
            See a live sample
          </a>
        )}

        <div className="mt-auto pt-8">
          <Button
            className={`h-12 w-full rounded-xl text-base font-semibold ${ctaButtonClass}`}
            asChild
          >
            <Link href={packageHref(pkg)}>
              {pkg.ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

export default function PricingCards() {
  const { packages, addons } = pricingConfig

  return (
    <div className="space-y-14">

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">If you need extra</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold text-[#0B1E3B]">{addon.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{addon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
