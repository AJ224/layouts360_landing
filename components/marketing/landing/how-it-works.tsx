import { BadgeCheck, Eye, Search, Snowflake, Trophy } from "lucide-react"
import { IconBadge } from "@/components/ui/icon-badge"
import { InteractivePhoneMockup } from "@/components/product/interactive-phone-mockup"
import type { HomeContent } from "@/lib/i18n/home-content"

const STEP_ICONS = [Search, Eye, Snowflake, BadgeCheck, Trophy] as const

type HowItWorksSectionProps = {
  content: HomeContent["howItWorks"]
}

export function HowItWorksSection({ content }: HowItWorksSectionProps) {
  return (
    <section
      id="how-it-works"
      className="section-y border-t border-line bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-site grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <h2 id="how-it-works-heading" className="t-section text-ink" data-split="lines">
            {content.headline}
          </h2>
          <ol
            className="mt-6 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4"
            data-reveal="up"
            data-stagger
          >
            {content.steps.map((step, index) => {
              const Icon = STEP_ICONS[index] ?? Search
              return (
                <li
                  key={step.title}
                  className="flex items-start gap-3.5 rounded-[var(--radius-card)] border border-line bg-white px-4 py-4 shadow-[var(--shadow-float)]"
                >
                  <IconBadge icon={Icon} tone="brand" className="h-10 w-10" />
                  <span>
                    <span className="block text-sm font-semibold text-ink sm:text-[0.9375rem]">
                      {step.title}
                    </span>
                    <span className="mt-0.5 block text-sm leading-snug text-subtle">{step.desc}</span>
                  </span>
                </li>
              )
            })}
          </ol>
          <p
            className="mt-5 max-w-lg text-sm leading-relaxed text-subtle sm:mt-6 sm:text-[0.9375rem]"
            data-reveal="fade"
            data-delay="0.15"
          >
            {content.productCaption}
          </p>
        </div>

        <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:col-span-5 lg:max-w-none" data-reveal="up">
          <InteractivePhoneMockup />
        </div>
      </div>
    </section>
  )
}
