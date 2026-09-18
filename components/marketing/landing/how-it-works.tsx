import { BadgeCheck, Eye, Search, Snowflake, Trophy } from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"
import type { HomeContent } from "@/lib/i18n/home-content"

const STEP_ICONS = [Search, Eye, Snowflake, BadgeCheck, Trophy] as const

type HowItWorksSectionProps = {
  content: HomeContent["howItWorks"]
}

export function HowItWorksSection({ content }: HowItWorksSectionProps) {
  return (
    <Section id="how-it-works" className="bg-blue-50/50 py-20">
      <SectionHeader title={content.headline} />

      <div className="relative mx-auto flex max-w-5xl flex-wrap justify-center gap-8 md:gap-12">
        <div
          className="absolute top-12 hidden h-0.5 border-t-2 border-dashed border-blue-200 md:block md:left-[10%] md:right-[10%]"
          aria-hidden
        />
        {content.steps.map((step, index) => {
          const Icon = STEP_ICONS[index] ?? Search
          return (
            <div
              key={step.title}
              className="relative flex w-36 flex-col items-center text-center md:w-40"
            >
              <div className="mb-4 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-blue-50 bg-white shadow-lg transition-transform hover:-translate-y-1">
                <span className="mb-1 text-xs font-bold text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{step.desc}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
