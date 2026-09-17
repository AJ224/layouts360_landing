import type { LucideIcon } from "lucide-react"
import { Building2, Home, Landmark, MapPinned, Store, Trees } from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"

interface Industry {
  icon: LucideIcon
  title: string
  description: string
}

const INDUSTRIES: Industry[] = [
  {
    icon: MapPinned,
    title: "Plotted layouts",
    description: "Residential plot projects of any size, from a single 50-plot layout to multi-phase developments.",
  },
  {
    icon: Landmark,
    title: "Township projects",
    description: "Large, multi-year master-planned communities with mixed plot, villa, and amenity zones.",
  },
  {
    icon: Home,
    title: "Villa & row house projects",
    description: "Villa plots and built units sold alongside open plots on the same layout.",
  },
  {
    icon: Trees,
    title: "Farmland & agricultural plots",
    description: "Farm plot and weekend-home layouts with the same live inventory discipline.",
  },
  {
    icon: Store,
    title: "Commercial plots & shops",
    description: "Shop plots, office plots, and commercial corners inside residential or standalone layouts.",
  },
  {
    icon: Building2,
    title: "Multi-project developers",
    description: "Portfolios running several active layouts and townships from one account.",
  },
]

export function IndustriesServedSection() {
  return (
    <Section className="bg-slate-50 py-20">
      <SectionHeader
        eyebrow="Industries served"
        eyebrowClassName="bg-teal-100 text-teal-700"
        title="Built for land and plotted development, not generic property"
        description="Layouts360 is purpose-built for businesses selling land parcels and plots, not apartments-first PropTech or rental management tools adapted after the fact."
      />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry) => (
          <article key={industry.title} className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-teal-50">
              <industry.icon className="h-5 w-5 text-teal-700" aria-hidden />
            </div>
            <h3 className="text-base font-bold text-slate-900">{industry.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{industry.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
