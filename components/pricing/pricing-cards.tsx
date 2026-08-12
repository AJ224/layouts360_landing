"use client"

import { Button } from "@/components/ui/button"
import { pricingConfig, type PricingPackage } from "@/lib/pricing-config"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

function packageHref(pkg: PricingPackage) {
  const params = new URLSearchParams({ package: pkg.id })
  return `/contact?${params.toString()}#demo-form`
}

function PackageCard({ pkg }: Readonly<{ pkg: PricingPackage }>) {
  const featured = pkg.recommended
  const isLayouts = pkg.id === "visual"

  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-2xl border px-7 py-8 sm:px-8",
        featured
          ? "border-[#0B1E3B] bg-[#0B1E3B] text-white lg:-translate-y-3 lg:px-9 lg:py-9"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      {featured && (
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#EAB308]">
          Recommended
        </p>
      )}

      <div>
        <p
          className={[
            "text-[11px] font-medium uppercase tracking-[0.2em]",
            featured ? "text-white/45" : "text-slate-400",
          ].join(" ")}
        >
          {pkg.stage}
        </p>
        <h3 className="mt-2 text-[1.65rem] font-semibold tracking-tight">{pkg.name}</h3>
        <p className={["mt-1.5 text-sm leading-relaxed", featured ? "text-white/70" : "text-slate-500"].join(" ")}>
          {pkg.tagline}
        </p>
      </div>

      <div className={["mt-8 border-t pt-7", featured ? "border-white/10" : "border-slate-100"].join(" ")}>
        <p className="text-[2.15rem] font-semibold leading-none tracking-tight">{pkg.pricePrimary}</p>
        <p className={["mt-2 text-sm", featured ? "text-white/65" : "text-slate-500"].join(" ")}>
          {pkg.priceSecondary}
        </p>
        <p className={["mt-1 text-xs", featured ? "text-white/40" : "text-slate-400"].join(" ")}>
          {pkg.priceNote}
        </p>
      </div>

      <ul className="mt-8 space-y-2.5">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              className={["mt-0.5 h-4 w-4 shrink-0", featured ? "text-[#EAB308]" : "text-slate-400"].join(" ")}
              strokeWidth={1.75}
              aria-hidden
            />
            <span className={["text-[13.5px] leading-snug", featured ? "text-white/85" : "text-slate-600"].join(" ")}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {isLayouts && (
        <a
          href="https://demo3.layouts360.com/s/MTf0e8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-sm text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-slate-800"
        >
          See a live sample
        </a>
      )}

      <div className="mt-auto pt-8">
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
  const { packages, addons } = pricingConfig

  return (
    <div className="space-y-20">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3 lg:items-stretch">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <div className="mx-auto max-w-3xl">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
          Optional
        </p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {addons.map((addon) => (
            <div key={addon.id} className="bg-white px-7 py-7">
              <h3 className="text-base font-semibold tracking-tight text-[#0B1E3B]">{addon.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{addon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
