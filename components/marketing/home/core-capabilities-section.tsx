import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Handshake,
  LayoutGrid,
  Map,
  Users,
  Wallet,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"

interface Capability {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

/** Homepage highlights only — full catalogue lives on /features and SEO landings. */
const HIGHLIGHTS: Capability[] = [
  {
    icon: Map,
    title: "Interactive Digital Layout Maps",
    description: "Satellite-backed, zoomable layouts with tap-to-view plot detail.",
    href: "/digital-layout-maps",
  },
  {
    icon: LayoutGrid,
    title: "Inventory Management",
    description: "Every plot's status, dimensions, and pricing in one live record.",
    href: "/real-estate-inventory-management-software",
  },
  {
    icon: CalendarCheck,
    title: "Plot Booking & Reservation",
    description: "Timed holds, tokens, and confirmed bookings on live inventory.",
    href: "/real-estate-booking-management-software",
  },
  {
    icon: Users,
    title: "Real Estate CRM",
    description: "Leads and buyers linked to specific plots, not generic contacts.",
    href: "/real-estate-crm-software",
  },
  {
    icon: Wallet,
    title: "Payment Tracking",
    description: "Booking amounts, installments, and outstanding balances on each plot.",
    href: "/real-estate-accounting-software",
  },
  {
    icon: Handshake,
    title: "Partner & Commission Management",
    description: "Broker portals, lead ownership rules, and commission clarity.",
    href: "/real-estate-channel-partner-management-software",
  },
]

export function CoreCapabilitiesSection() {
  return (
    <Section id="features" className="py-20">
      <SectionHeader
        eyebrow="Capabilities"
        eyebrowClassName="bg-blue-50 text-blue-600"
        title="What Layouts360 covers"
        description="The core stack for layout sales—plot management, inventory management, booking, CRM, payments, and partners."
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-blue-300 hover:bg-blue-50/40"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-700">
              <item.icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block font-semibold text-slate-900 group-hover:text-blue-700">{item.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-slate-600">{item.description}</span>
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
          <Link href="/real-estate-plot-management-software" className="hover:text-blue-700 hover:underline">
            Plot management software
          </Link>
          <Link href="/real-estate-inventory-management-software" className="hover:text-blue-700 hover:underline">
            Inventory management software
          </Link>
          <Link href="/digital-layout-maps" className="hover:text-blue-700 hover:underline">
            Digital layout map
          </Link>
        </div>
        <Link
          href="/features"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
        >
          <Building2 className="h-4 w-4" aria-hidden />
          See all features
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Section>
  )
}
