import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Home,
  Layers,
  MapPinned,
  Building,
  Landmark,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"
import type { HomeContent } from "@/lib/i18n/home-content"

const TYPE_ICONS: LucideIcon[] = [MapPinned, Layers, Building2, Building, Home, Landmark]

type WhoShouldUseSectionProps = {
  content: HomeContent["inventoryTypes"]
}

export function WhoShouldUseSection({ content }: WhoShouldUseSectionProps) {
  return (
    <Section className="bg-slate-50 py-20">
      <SectionHeader title={content.headline} />

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.types.map((title, index) => {
          const Icon = TYPE_ICONS[index] ?? MapPinned
          return (
            <article
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                <Icon className="h-5 w-5 text-indigo-700" aria-hidden />
              </div>
              <h3 className="text-base font-bold text-slate-900">{title}</h3>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
