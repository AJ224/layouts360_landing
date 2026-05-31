import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  CalendarCheck,
  LayoutGrid,
  Map,
  Users,
  Wallet,
} from "lucide-react"

export interface ProductSuiteTile {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

/** Homepage product suite — matches buyer mental model (Inventory · Maps · CRM · Booking · Partners · Reports) */
export const PRODUCT_SUITE_TILES: ProductSuiteTile[] = [
  {
    title: "Inventory",
    description: "Live plot and unit availability across projects—no double bookings.",
    href: "/real-estate-inventory-management-software",
    icon: LayoutGrid,
  },
  {
    title: "Maps",
    description: "Interactive digital layouts with satellite view and plot-level detail.",
    href: "/real-estate-plot-management-software",
    icon: Map,
  },
  {
    title: "CRM",
    description: "Plot-linked leads, follow-ups, and pipeline for builders and sales teams.",
    href: "/real-estate-crm-software",
    icon: Users,
  },
  {
    title: "Booking",
    description: "Holds, tokens, online booking flows, and payment-linked confirmations.",
    href: "/real-estate-booking-management-software",
    icon: CalendarCheck,
  },
  {
    title: "Partners",
    description: "Channel partner portals with live inventory and structured CP bookings.",
    href: "/real-estate-channel-partner-management-software",
    icon: Wallet,
  },
  {
    title: "Reports",
    description: "Sales intelligence, collections, and team performance on live data.",
    href: "/real-estate-sales-automation-software",
    icon: BarChart3,
  },
]
