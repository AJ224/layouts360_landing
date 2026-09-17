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

type FeatureCard = {
  icon: LucideIcon
  label: string
  description: string
}

const FEATURES: FeatureCard[] = [
  {
    icon: LayoutGrid,
    label: "Inventory Management",
    description: "Manage every plot and unit from one system.",
  },
  {
    icon: Map,
    label: "Interactive Visualization",
    description: "Make inventory easy to understand and present.",
  },
  {
    icon: Handshake,
    label: "CRM & Sales Workflow",
    description: "Connect customers, salespeople and inventory.",
  },
  {
    icon: Building2,
    label: "Bulk Management",
    description: "Update large inventories quickly.",
  },
  {
    icon: BarChart3,
    label: "Reports & Dashboard",
    description: "Understand project and sales status at a glance.",
  },
  {
    icon: Share2,
    label: "Customer Sharing",
    description: "Share relevant inventory with prospective buyers.",
  },
  {
    icon: Users,
    label: "Team Management",
    description: "Control access and responsibilities.",
  },
  {
    icon: FileSpreadsheet,
    label: "Excel Import",
    description: "Bring your existing inventory into Layouts360.",
  },
]

export function FeatureCardsSection() {
  return (
    <Section id="features" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#00C29F]">
            Everything your team needs
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Inventory, workflow, and team tools together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Plots, flats, and apartments on one live platform, from visualization to booking and reporting.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
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
            <Link href="/contact#demo-form">Book a demo</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 rounded-full border-slate-300 bg-white px-6 text-sm font-medium text-slate-700 hover:bg-slate-50"
            asChild
          >
            <Link href="/features">Full feature details</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
