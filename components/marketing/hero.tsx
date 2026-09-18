import Image from "next/image"
import Link from "next/link"
import Header from "@/components/marketing/header"
import { MarketingButtonLink } from "@/components/ui/marketing-button-link"
import { LANDING_IMAGES } from "@/lib/media"
import { ArrowRight, PlayCircle } from "lucide-react"
import type { HomeContent } from "@/lib/i18n/home-content"
import type { Locale } from "@/lib/i18n/locale"

type HeroProps = {
  content: HomeContent["hero"]
  locale: Locale
}

export default function Hero({ content, locale }: HeroProps) {
  return (
    <div className="relative min-h-[100svh] overflow-hidden text-white">
      <Image
        src={LANDING_IMAGES.heroLiveLayout.src}
        alt={LANDING_IMAGES.heroLiveLayout.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/80" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Header theme="dark" locale={locale} />

      <section className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-28 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            {content.headlineBefore}{" "}
            <span className="text-[#34D399]">{content.headlineAccent}</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {content.subhead}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <MarketingButtonLink href="/contact" variant="accent">
              {content.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
            </MarketingButtonLink>
            <MarketingButtonLink
              href="/#how-it-works"
              variant="outline"
              className="border-white/25 bg-white/10 text-white hover:bg-white/20"
            >
              <PlayCircle className="mr-2 h-4 w-4" /> {content.secondaryCta}
            </MarketingButtonLink>
          </div>

          <nav
            aria-label={content.proofAria}
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 pt-2 text-sm text-slate-300"
          >
            {content.proof.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-2">
                {index > 0 && (
                  <span className="text-slate-500" aria-hidden>
                    ·
                  </span>
                )}
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.prefix}{" "}
                  <span className="font-semibold text-white">{item.name}</span>
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </section>
    </div>
  )
}
