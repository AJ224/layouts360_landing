import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Briefcase, HardHat, Handshake, LineChart, Map } from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"

interface Persona {
  icon: LucideIcon
  title: string
  description: string
  href: string
  label: string
}

const PERSONAS: Persona[] = [
  {
    icon: Map,
    title: "Real estate developers & land promoters",
    description: "Digitize layouts, manage plot inventory, and give leadership one live view of every project.",
    href: "/real-estate-plot-management-software",
    label: "Plot management software",
  },
  {
    icon: Briefcase,
    title: "Township developers",
    description: "Run multi-phase, multi-year townships with phase-level control and project-wide reporting.",
    href: "/township-management-software",
    label: "Township management software",
  },
  {
    icon: HardHat,
    title: "Builders & villa project owners",
    description: "Coordinate mixed plot and villa inventory across sales, finance, and site teams.",
    href: "/real-estate-inventory-management-software",
    label: "Inventory management software",
  },
  {
    icon: LineChart,
    title: "Real estate sales teams",
    description: "Mobile-first tools for site offices—plot cards, follow-ups, and site visit tracking.",
    href: "/real-estate-crm",
    label: "Real estate CRM",
  },
  {
    icon: Handshake,
    title: "Channel partners & broker networks",
    description: "Live project portals with structured booking requests and transparent commissions.",
    href: "/real-estate-channel-partner-management-software",
    label: "Channel partner management",
  },
]

export function WhoShouldUseSection() {
  return (
    <Section className="py-20">
      <SectionHeader
        eyebrow="Who should use Layouts360"
        eyebrowClassName="bg-indigo-100 text-indigo-700"
        title="One platform, five teams, no version conflicts"
      />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PERSONAS.map((persona) => (
          <Link
            key={persona.title}
            href={persona.href}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-300 hover:shadow-md"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50">
              <persona.icon className="h-5 w-5 text-indigo-700" aria-hidden />
            </div>
            <h3 className="text-base font-bold text-slate-900">{persona.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{persona.description}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700">
              {persona.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  )
}
