import Image from "next/image"
import { LANDING_IMAGES } from "@/lib/media"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"

const PILLARS = [
  {
    title: "Interactive Plot Layouts",
    description: "Turn your site layout into an interactive inventory map.",
    points: [
      "Click a plot to see details, availability, and status",
      "Move units from available to hold, booked, or sold",
    ],
    image: LANDING_IMAGES.interactivePlot,
  },
  {
    title: "Flat & Apartment Inventory",
    description: "Manage apartment projects by building, floor, and unit.",
    points: [
      "Flat number, floor, configuration, area, price",
      "Availability, customer, and booking status",
      "A live view of what's actually available for your sales team",
    ],
    image: LANDING_IMAGES.apartmentFloor,
  },
  {
    title: "Live Inventory Dashboard",
    description: "Know what's happening across your project without opening multiple files.",
    points: [
      "Total Units | Available | Hold | Booked | Sold",
      "Filter by project, block, building, floor, unit type, status, price",
    ],
    image: LANDING_IMAGES.liveDashboard,
  },
] as const

export function PlatformInventorySection() {
  return (
    <Section id="platform" className="bg-slate-50 py-20">
      <SectionHeader
        eyebrow="One platform"
        eyebrowClassName="bg-teal-100 text-teal-700"
        title="One platform. Your entire inventory."
        description="Plots, flats, and apartments. Visualize, manage, and sell from a single live system."
      />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article key={pillar.title} className="flex flex-col">
            <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src={pillar.image.src}
                alt={pillar.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
              {pillar.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
