"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import Header from "@/components/marketing/header"
import { HeroAtmosphere } from "@/components/marketing/hero-atmosphere"
import { MarketingButtonLink } from "@/components/ui/marketing-button-link"
import { PlayCircle } from "lucide-react"
import type { HomeContent } from "@/lib/i18n/home-content"
import type { Locale } from "@/lib/i18n/locale"

const TownshipScene = dynamic(
  () => import("@/components/product/township-scene").then((m) => m.TownshipScene),
  {
    ssr: false,
    loading: () => (
      <div
        className="animate-pulse rounded-2xl border border-white/15 bg-[#141414] bg-[url('/images/marketing/layout-terrain-bg.jpg')] bg-cover bg-center sm:rounded-3xl"
        style={{ aspectRatio: "16 / 10" }}
        aria-hidden
      />
    ),
  },
)

type HeroProps = {
  content: HomeContent["hero"]
  locale: Locale
}

export default function Hero({ content, locale }: HeroProps) {
  return (
    <div className="relative overflow-hidden text-white">
      <HeroAtmosphere idPrefix="hero" />

      <Header theme="dark" locale={locale} />

      <section className="relative z-10 flex flex-col items-center px-4 pb-10 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-24">
        <div className="mx-auto w-full max-w-4xl space-y-4 sm:space-y-6">
          <h1
            className="text-balance text-[clamp(1.625rem,6vw,3.75rem)] font-bold leading-[1.12] tracking-tight text-white"
            data-split="lines"
            data-intro
          >
            {`${content.headlineBefore} `}
            <span className="text-logo">{content.headlineAccent}</span>
          </h1>

          <p
            className="mx-auto max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-slate-200 sm:text-lg"
            data-reveal="fade"
            data-intro
            data-delay="0.35"
          >
            {content.subhead}
          </p>

          <div
            className="flex w-full flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:pt-2"
            data-reveal="up"
            data-intro
            data-delay="0.55"
          >
            <MarketingButtonLink href="/contact" variant="accent" className="w-full sm:w-auto">
              {content.primaryCta}
            </MarketingButtonLink>
            <MarketingButtonLink
              href="/#how-it-works"
              variant="outline"
              showArrow={false}
              className="w-full border-white/25 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
            >
              <PlayCircle className="h-4 w-4" aria-hidden /> {content.secondaryCta}
            </MarketingButtonLink>
          </div>

          <nav
            aria-label={content.proofAria}
            className="flex flex-nowrap items-center justify-center gap-x-2 overflow-x-auto pt-2 text-[0.625rem] font-medium tracking-[0.04em] text-white/55 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-x-4 sm:pt-3 sm:text-xs sm:tracking-[0.1em] [&::-webkit-scrollbar]:hidden"
            data-reveal="fade"
            data-intro
            data-delay="0.7"
          >
            {content.proof.map((item, index) => (
              <span key={item.href} className="inline-flex shrink-0 items-center gap-2 sm:gap-4">
                {index > 0 && (
                  <span className="text-white/25" aria-hidden>
                    ·
                  </span>
                )}
                <Link
                  href={item.href}
                  className="inline-flex items-baseline gap-1 uppercase transition-colors hover:text-white sm:gap-1.5"
                >
                  <span className="font-bold text-white">{item.prefix}</span>
                  <span className="font-normal text-white/55">{item.name}</span>
                </Link>
              </span>
            ))}
          </nav>
        </div>

        <div
          className="relative mx-auto mt-10 w-full max-w-5xl sm:mt-16"
          data-reveal="up"
          data-intro
          data-delay="0.85"
        >
          <div className="overflow-hidden rounded-xl border border-white/15 shadow-2xl shadow-black/40 sm:rounded-2xl md:rounded-3xl">
            <div className="aspect-[4/3] sm:aspect-[16/10]">
              <TownshipScene className="h-full w-full rounded-none border-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
