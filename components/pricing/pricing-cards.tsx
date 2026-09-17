"use client"

import { Button } from "@/components/ui/button"
import { pricingConfig, type PricingPackage } from "@/lib/pricing-config"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

function packageHref(pkg: PricingPackage) {
  const params = new URLSearchParams({ package: pkg.id })
  return `/contact?${params.toString()}#demo-form`
}

function MappingRates() {
  const { perPlotCost, perFlatCost } = pricingConfig.plotPricing

  return (
    <div className="mx-auto flex max-w-md items-stretch justify-center gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80">
      <div className="flex-1 px-6 py-5 text-center">
        <p className="text-2xl font-semibold tracking-tight text-[#0B1E3B] sm:text-3xl">
          ₹{perPlotCost.toLocaleString("en-IN")}
        </p>
        <p className="mt-1 text-xs text-slate-500">per plot · one-time</p>
      </div>
      <div className="w-px self-stretch bg-slate-200" aria-hidden />
      <div className="flex-1 px-6 py-5 text-center">
        <p className="text-2xl font-semibold tracking-tight text-[#0B1E3B] sm:text-3xl">
          ₹{perFlatCost.toLocaleString("en-IN")}
        </p>
        <p className="mt-1 text-xs text-slate-500">per flat · one-time</p>
      </div>
    </div>
  )
}

function PackageCard({ pkg }: Readonly<{ pkg: PricingPackage }>) {
  const featured = pkg.recommended
  const monthlyRow = pkg.priceRows.find((row) => row.label === "Software")

  return (
    <article
      className={[
        "flex h-full flex-col rounded-2xl border p-6 sm:p-7",
        featured
          ? "border-[#0B1E3B] bg-[#0B1E3B] text-white"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      {featured ? (
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#EAB308]">Recommended</p>
      ) : (
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">Map only</p>
      )}

      <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">{pkg.name}</h3>
      <p className={["mt-1.5 text-sm leading-snug", featured ? "text-white/65" : "text-slate-500"].join(" ")}>
        {pkg.tagline}
      </p>

      <div className="mt-6">
        <p className={["text-3xl font-semibold tracking-tight", featured ? "text-white" : "text-[#0B1E3B]"].join(" ")}>
          {monthlyRow?.value ?? "Quoted"}
        </p>
        <p className={["mt-1 text-xs", featured ? "text-white/45" : "text-slate-400"].join(" ")}>
          after mapping
        </p>
      </div>

      <ul className={["mt-6 space-y-2.5 border-t pt-6", featured ? "border-white/10" : "border-slate-100"].join(" ")}>
        {pkg.features.map((feature) => (
          <li key={feature.title} className="flex items-start gap-2.5">
            <Check
              className={["mt-0.5 h-3.5 w-3.5 shrink-0", featured ? "text-[#EAB308]" : "text-[#00C29F]"].join(" ")}
              strokeWidth={2.5}
              aria-hidden
            />
            <span className={["text-sm leading-snug", featured ? "text-white/85" : "text-slate-600"].join(" ")}>
              {feature.title}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Button
          className={[
            "h-11 w-full rounded-full text-sm font-medium",
            featured
              ? "bg-[#EAB308] text-[#0B1E3B] hover:bg-[#f0c43a]"
              : "bg-[#0B1E3B] text-white hover:bg-[#0B1E3B]/90",
          ].join(" ")}
          asChild
        >
          <Link href={packageHref(pkg)}>
            {pkg.ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </article>
  )
}

export default function PricingCards() {
  const mapOnly = pricingConfig.packages.find((pkg) => pkg.id === "visual")
  const sell = pricingConfig.packages.find((pkg) => pkg.id === "sales-platform")
  const enterprise = pricingConfig.packages.find((pkg) => pkg.id === "enterprise")

  if (!mapOnly || !sell || !enterprise) return null

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <MappingRates />

      <div className="grid gap-4 md:grid-cols-2 md:items-stretch md:gap-5">
        <PackageCard pkg={mapOnly} />
        <PackageCard pkg={sell} />
      </div>

      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 sm:flex-row">
        <p className="text-sm text-slate-600">
          <span className="font-medium text-slate-900">{enterprise.name}</span>
          <span className="text-slate-400"> · </span>
          {enterprise.tagline}
        </p>
        <Button
          variant="outline"
          className="h-9 shrink-0 rounded-full border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-white"
          asChild
        >
          <Link href={packageHref(enterprise)}>
            {enterprise.ctaLabel}
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden />
          </Link>
        </Button>
      </div>
    </div>
  )
}
