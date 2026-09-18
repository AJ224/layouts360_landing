import { FileSpreadsheet, MessageCircle, Users2 } from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"
import type { HomeContent } from "@/lib/i18n/home-content"

const TOOL_ICONS = [FileSpreadsheet, MessageCircle, Users2] as const

type WhyToolsFailSectionProps = {
  content: HomeContent["whyToolsFail"]
}

export function WhyToolsFailSection({ content }: WhyToolsFailSectionProps) {
  return (
    <Section id="why-not-excel" className="bg-slate-50 py-20">
      <SectionHeader
        title={
          <>
            {content.headlineBefore}{" "}
            <span className="text-amber-700">{content.headlineAccent}</span>
          </>
        }
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {content.tools.map((tool, index) => {
          const Icon = TOOL_ICONS[index] ?? FileSpreadsheet
          return (
            <article
              key={tool.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <Icon className="h-6 w-6 text-slate-700" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{tool.problems}</p>
              <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-900">
                <span className="font-semibold text-emerald-700">{content.insteadPrefix} </span>
                {tool.instead}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
