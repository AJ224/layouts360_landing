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
import { Feature72 } from "@/components/ui/feature-72"
import type { HomeContent } from "@/lib/i18n/home-content"

const FEATURE_ICONS = [
  LayoutGrid,
  Map,
  Handshake,
  Building2,
  BarChart3,
  Share2,
  Users,
  FileSpreadsheet,
] as const

type FeatureCardsSectionProps = {
  content: HomeContent["features"]
}

export function FeatureCardsSection({ content }: FeatureCardsSectionProps) {
  const features = content.items.map((item, index) => ({
    id: `feature-${index + 1}`,
    title: item.label,
    description: item.description,
    icon: FEATURE_ICONS[index] ?? LayoutGrid,
  }))

  return (
    <Feature72
      heading={content.headline}
      linkUrl="/features"
      linkText={content.secondaryCta}
      features={features}
    />
  )
}
