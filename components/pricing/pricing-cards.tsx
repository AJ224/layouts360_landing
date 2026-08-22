"use client"

import { Button } from "@/components/ui/button"
import {
  getPackagePriceExample,
  pricingConfig,
  type PricingPackage,
} from "@/lib/pricing-config"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

function packageHref(pkg: PricingPackage) {
  const params = new URLSearchParams({ package: pkg.id })
  return `/contact?${params.toString()}#demo-form`
}

function PriceBlock({ pkg }: Readonly<{ pkg: PricingPackage }>) {
  const featured = pkg.recommended
  const example = getPackagePriceExample(pkg)

  return (
    <div className={["mt-6 border-t pt-6", featured ? "border-white/10" : "border-slate-100"].join(" ")}>
      <dl className="space-y-3">
        {pkg.priceRows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-3">
            <dt className={["text-sm", featured ? "text-white/60" : "text-slate-500"].join(" ")}>{row.label}</dt>
            <dd className={["text-sm font-semibold", featured ? "text-white" : "text-[#0B1E3B]"].join(" ")}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      {example ? (
        <p className={["mt-4 text-xs", featured ? "text-white/55" : "text-slate-500"].join(" ")}>{example}</p>
      ) : null}
    </div>
  )
}

function PackageCard({ pkg }: Readonly<{ pkg: PricingPackage }>) {
  const featured = pkg.recommended

  return (
    <article
      className={[
        "flex h-full flex-col rounded-2xl border px-6 py-7 sm:px-7",
        featured ? "border-[#0B1E3B] bg-[#0B1E3B] text-white" : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      {featured && (
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#EAB308]">Most common</p>
      )}

      <div>
        <h3 className="text-xl font-semibold tracking-tight">{pkg.name}</h3>
        <p className={["mt-1.5 text-sm leading-snug", featured ? "text-white/75" : "text-slate-500"].join(" ")}>
          {pkg.tagline}
        </p>
      </div>

      <PriceBlock pkg={pkg} />

      <ul className="mt-6 space-y-2">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check
              className={["mt-0.5 h-3.5 w-3.5 shrink-0", featured ? "text-[#EAB308]" : "text-slate-400"].join(" ")}
              strokeWidth={2}
              aria-hidden
            />
            <span className={["text-sm leading-snug", featured ? "text-white/85" : "text-slate-600"].join(" ")}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button
          className={[
            "h-10 w-full rounded-full text-sm font-medium",
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
  const { packages } = pricingConfig

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-slate-400">
        Beautification and Excel migration quoted separately.{" "}
        <a
          href="https://demo3.layouts360.com/s/MTf0e8"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-slate-300 underline-offset-2 hover:text-slate-600"
        >
          See a live map sample
        </a>
      </p>
    </div>
  )
}
