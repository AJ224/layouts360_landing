import Image from "next/image"
import { BadgeCheck, Eye, Search, Snowflake, Trophy } from "lucide-react"
import { Section } from "@/components/marketing/landing/ui"
import { LANDING_IMAGES } from "@/lib/media"
import type { HomeContent } from "@/lib/i18n/home-content"

const STEP_ICONS = [Search, Eye, Snowflake, BadgeCheck, Trophy] as const

type HowItWorksSectionProps = {
  content: HomeContent["howItWorks"]
}

export function HowItWorksSection({ content }: HowItWorksSectionProps) {
  return (
    <Section id="how-it-works" className="bg-blue-50/50 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
            {content.headline}
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {content.steps.map((step, index) => {
              const Icon = STEP_ICONS[index] ?? Search
              return (
                <li
                  key={step.title}
                  className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3.5 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-blue-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="block font-semibold text-slate-900">{step.title}</span>
                    <span className="mt-0.5 block text-sm text-slate-500">{step.desc}</span>
                  </span>
                </li>
              )
            })}
          </ol>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            {content.productCaption}
          </p>
        </div>

        <div className="mx-auto w-full max-w-[240px] lg:col-span-5 lg:max-w-[280px]">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-xl shadow-slate-900/20">
            <Image
              src={LANDING_IMAGES.productMobile.src}
              alt={LANDING_IMAGES.productMobile.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 240px, 280px"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
