import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  Building2,
  CalendarCheck,
  ClipboardList,
  FileText,
  Handshake,
  LayoutDashboard,
  LayoutGrid,
  Map,
  PieChart,
  Radar,
  Share2,
  UserCog,
  UserPlus,
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

const CAPABILITIES: Capability[] = [
  {
    icon: Map,
    title: "Interactive Digital Layout Maps",
    description: "Satellite-backed, zoomable layouts with tap-to-view plot detail.",
    href: "/digital-layout-maps",
  },
  {
    icon: LayoutGrid,
    title: "Plot Inventory Management",
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
    icon: UserPlus,
    title: "Lead Management",
    description: "Capture, assign, and route enquiries from every source.",
    href: "/real-estate-lead-management-software",
  },
  {
    icon: Wallet,
    title: "Payment Tracking",
    description: "Booking amounts, installments, GST, and outstanding balances.",
    href: "/real-estate-accounting-software",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Allotment letters, agreements, and receipts against each plot.",
    href: "/real-estate-back-office-software",
  },
  {
    icon: ClipboardList,
    title: "Site Visit Management",
    description: "Schedule, log, and follow up on visits tied to real plots shown.",
    href: "/site-visit-management",
  },
  {
    icon: UserCog,
    title: "Sales Team Management",
    description: "Territory, targets, and performance visibility by agent.",
    href: "/real-estate-sales-automation-software",
  },
  {
    icon: Handshake,
    title: "Partner & Commission Management",
    description: "Broker portals, lead ownership rules, and commission clarity.",
    href: "/real-estate-channel-partner-management-software",
  },
  {
    icon: LayoutDashboard,
    title: "Project Dashboard",
    description: "Sold %, collections, and pipeline on one leadership screen.",
    href: "/features",
  },
  {
    icon: Radar,
    title: "Real-Time Plot Availability",
    description: "Available, blocked, booked, sold—synced instantly for everyone.",
    href: "/real-estate-plot-management-software",
  },
  {
    icon: Share2,
    title: "Public Live Layout Sharing",
    description: "Shareable project links for buyers, NRIs, and brokers—no login.",
    href: "/digital-layout-maps",
  },
  {
    icon: Building2,
    title: "Multi Project Management",
    description: "Run every phase and project from one account with roll-ups.",
    href: "/property-inventory-management-platform",
  },
  {
    icon: PieChart,
    title: "Reporting & Analytics",
    description: "Sales velocity, collections, and partner performance, live.",
    href: "/features",
  },
]

export function CoreCapabilitiesSection() {
  return (
    <Section id="features" className="py-20">
      <SectionHeader
        eyebrow="Features"
        eyebrowClassName="bg-blue-50 text-blue-600"
        title="Every capability a plot management platform needs"
        description="Not a layout viewer—a complete real estate plot management and inventory management platform covering the full sales lifecycle."
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((item) => (
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
    </Section>
  )
}
