import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Building2,
  FileSpreadsheet,
  Handshake,
  LayoutGrid,
  Map,
  Share2,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/marketing/landing/ui"
import type { HomeContent } from "@/lib/i18n/home-content"

const FEATURE_ICONS: LucideIcon[] = [
  LayoutGrid,
  Map,
  Handshake,
  Building2,
  BarChart3,
  Share2,
  Users,
  FileSpreadsheet,
]

type FeatureCardsSectionProps = {
  content: HomeContent["features"]
}

export function FeatureCardsSection({ content }: FeatureCardsSectionProps) {
  return (
    <Section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {content.headline}
          </h2>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((feature, index) => {
            const Icon = FEATURE_ICONS[index] ?? LayoutGrid
            return (
              <li key={feature.label}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-[#00C29F]/40">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C29F]/10">
                    <Icon className="h-5 w-5 text-[#00C29F]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-slate-900 sm:text-[15px]">{feature.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </article>
              </li>
            )
          })}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-11 rounded-full bg-[#0B1E3B] px-6 text-sm font-medium text-white hover:bg-[#0B1E3B]/90"
            asChild
          >
            <Link href="/contact#demo-form">{content.primaryCta}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 rounded-full border-slate-300 bg-white px-6 text-sm font-medium text-slate-700 hover:bg-slate-50"
            asChild
          >
            <Link href="/features">{content.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
