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

interface InventoryType {
  icon: LucideIcon
  title: string
  description: string
}

const TYPES: InventoryType[] = [
  {
    icon: MapPinned,
    title: "Plotted Development",
    description: "Interactive layouts for thousands of plots.",
  },
  {
    icon: Layers,
    title: "Residential Layouts",
    description: "Manage phases, blocks and individual plots.",
  },
  {
    icon: Building2,
    title: "Apartments",
    description: "Inventory by building, floor, and flat.",
  },
  {
    icon: Building,
    title: "Multi-Building Projects",
    description: "Manage multiple towers and configurations.",
  },
  {
    icon: Home,
    title: "Villas",
    description: "Track individual villa inventory and status.",
  },
  {
    icon: Landmark,
    title: "Large Projects",
    description: "Manage inventory across multiple phases and projects.",
  },
]

export function WhoShouldUseSection() {
  return (
    <Section className="py-20">
      <SectionHeader
        eyebrow="Built for your inventory"
        eyebrowClassName="bg-indigo-100 text-indigo-700"
        title="Built for different real-estate inventory"
        description="Whether you sell plots, flats, apartments, villas, or entire projects, one place to manage what matters."
      />

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TYPES.map((type) => (
          <article
            key={type.title}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50">
              <type.icon className="h-5 w-5 text-indigo-700" aria-hidden />
            </div>
            <h3 className="text-base font-bold text-slate-900">{type.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{type.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
