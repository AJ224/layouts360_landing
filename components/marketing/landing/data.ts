import type { LucideIcon } from "lucide-react"
import {
  BadgeCheck,
  Calendar,
  CreditCard,
  Eye,
  FileSpreadsheet,
  FileText,
  MessageCircle,
  RefreshCw,
  Search,
  Snowflake,
  Trophy,
  Users,
} from "lucide-react"

export type PainPoint = {
  icon: LucideIcon
  title: string
}

export const painPoints: PainPoint[] = [
  {
    icon: FileText,
    title: "Static PDF layouts go stale the moment they're forwarded",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel has no live sync — two agents, two versions",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp status is easy to miss, impossible to audit",
  },
  {
    icon: RefreshCw,
    title: "One missed update, one unit sold twice",
  },
  {
    icon: Search,
    title: "Finding a unit means digging through files",
  },
  {
    icon: Users,
    title: "Shared stock, no locking — double holds",
  },
]

export const plotManagementBenefits = [
  "Replace Excel with real-time inventory sync",
  "Prevent double bookings automatically",
  "Interactive digital layouts with satellite view",
  "Mobile-first for field sales teams",
]

export const howItWorksSteps = [
  { icon: Search, title: "Find", desc: "the exact plot or flat" },
  { icon: Eye, title: "Show", desc: "location or unit, visually" },
  { icon: Snowflake, title: "Hold", desc: "reserve while the customer decides" },
  { icon: BadgeCheck, title: "Book", desc: "record the booking" },
  { icon: Trophy, title: "Track", desc: "follow it to close" },
] as const

export const managementStats = [
  { label: "Enquiries", count: "324", growth: "+12%", color: "text-blue-600", bg: "bg-blue-50", icon: Users },
  { label: "Bookings", count: "89", growth: "+8%", color: "text-emerald-600", bg: "bg-emerald-50", icon: Calendar },
  { label: "Payments", count: "2.4Cr", growth: "+24%", color: "text-emerald-600", bg: "bg-emerald-50", icon: CreditCard },
  {
    label: "Documents",
    count: "156",
    growth: "+5%",
    color: "text-amber-600",
    bg: "bg-amber-50",
    icon: FileSpreadsheet,
  },
] as const
