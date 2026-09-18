import Image from "next/image"
import {
  FileSpreadsheet,
  FileText,
  MessageCircle,
  RefreshCw,
  Search,
  Users,
} from "lucide-react"
import { IconCard, Section, SectionHeader } from "@/components/marketing/landing/ui"
import { LANDING_IMAGES } from "@/lib/media"
import type { HomeContent } from "@/lib/i18n/home-content"

const PAIN_ICONS = [FileText, FileSpreadsheet, MessageCircle, RefreshCw, Search, Users] as const

type SoundFamiliarSectionProps = {
  content: HomeContent["problem"]
}

export function SoundFamiliarSection({ content }: SoundFamiliarSectionProps) {
  return (
    <Section id="problems">
      <SectionHeader title={content.headline} />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.painCards.map((title, index) => (
          <IconCard key={title} icon={PAIN_ICONS[index] ?? FileText} title={title} />
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <Image
            src={LANDING_IMAGES.salesWalkthrough.src}
            alt={LANDING_IMAGES.salesWalkthrough.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <ul className="space-y-3">
            {content.questions.map((q) => (
              <li
                key={q}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-medium text-slate-700 shadow-sm"
              >
                “{q}”
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-semibold text-slate-900">
            {content.closerBefore}{" "}
            <span className="text-emerald-700">{content.closerAccent}</span>
            {content.closerAfter}
          </p>
        </div>
      </div>
    </Section>
  )
}
