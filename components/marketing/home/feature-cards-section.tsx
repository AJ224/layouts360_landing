import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Camera,
  CircleDot,
  FileUp,
  FolderKanban,
  Handshake,
  Layers,
  Link2,
  Map,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Scale,
  Snowflake,
  Tag,
  UserCog,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react"
import { Section } from "@/components/marketing/landing/ui"

type FeatureCard = {
  icon: LucideIcon
  label: string
  comingSoon?: boolean
}

/** Layouts360 capabilities — aligned with pricing, not competitor copy. */
const FEATURES: FeatureCard[] = [
  { icon: MapPin, label: "Live Plot Map" },
  { icon: CircleDot, label: "Color-Coded Status" },
  { icon: FileUp, label: "CAD or SVG Digitize" },
  { icon: Map, label: "Satellite Overlay" },
  { icon: Link2, label: "Public Enquiry Link" },
  { icon: Camera, label: "Photos, Video & Nearby" },
  { icon: Tag, label: "Custom Plot Labels" },
  { icon: Scale, label: "Sq Ft / Sq M Units" },
  { icon: Layers, label: "Group Neighbouring Plots" },
  { icon: Snowflake, label: "Freeze to Sold" },
  { icon: UserPlus, label: "Multi-Plot & Joint Buyers" },
  { icon: Users, label: "CRM on the Map" },
  { icon: Megaphone, label: "Facebook & Instagram Leads" },
  { icon: Wallet, label: "Collections & Dues" },
  { icon: BookOpen, label: "Owner & Partner Ledger" },
  { icon: Handshake, label: "Broker Portal" },
  { icon: UserCog, label: "Team Roles & GPS" },
  { icon: FolderKanban, label: "Multiple Projects" },
  { icon: MonitorSmartphone, label: "Phone & Laptop Ready" },
  { icon: Building2, label: "Apartment Inventory", comingSoon: true },
]

export function FeatureCardsSection() {
  return (
    <Section id="features" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#00C29F]">Features</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            From live map to closed booking
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Inventory, booking, CRM, collections, and partners on the same map. Built for plots today; apartments
            coming soon.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <li key={feature.label}>
                <article
                  className={[
                    "flex h-full min-h-[4.5rem] items-center gap-3.5 rounded-2xl border bg-white px-4 py-3.5 shadow-sm transition-colors sm:gap-4 sm:px-5 sm:py-4",
                    feature.comingSoon
                      ? "border-dashed border-[#00C29F]/45 bg-[#00C29F]/5"
                      : "border-slate-200 hover:border-[#00C29F]/40",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      feature.comingSoon ? "bg-white ring-1 ring-[#00C29F]/20" : "bg-[#00C29F]/10",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5 text-[#00C29F]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-snug text-slate-900 sm:text-[15px]">
                      {feature.label}
                    </p>
                    {feature.comingSoon ? (
                      <span className="mt-1.5 inline-flex rounded-md bg-[#00C29F]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#0B7A66]">
                        Coming soon
                      </span>
                    ) : null}
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#00C29F] hover:underline">
            See packages & pricing
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/features" className="text-slate-600 hover:text-blue-700 hover:underline">
            Full feature details
          </Link>
        </div>
      </div>
    </Section>
  )
}
