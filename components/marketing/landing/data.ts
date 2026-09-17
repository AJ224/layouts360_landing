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
  description: string
}

export const painPoints: PainPoint[] = [
  {
    icon: FileText,
    title: "Static PDF layouts",
    description: "Printed or forwarded PDFs go stale the moment inventory changes.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel inventory sheets",
    description: 'Multiple versions, no map, and constant "which file is latest?" chaos.',
  },
  {
    icon: MessageCircle,
    title: "WhatsApp availability updates",
    description: "Status lives in chat threads: easy to miss, hard to trust.",
  },
  {
    icon: RefreshCw,
    title: "Manual booking updates",
    description: "Someone has to update every file again whenever a unit moves.",
  },
  {
    icon: Search,
    title: "Hunting for units",
    description: "Finding the right plot, floor, or flat means digging through files.",
  },
  {
    icon: Users,
    title: "Shared inventory risk",
    description: "Multiple salespeople on the same stock means double holds and confusion.",
  },
]

export const plotManagementBenefits = [
  "Replace Excel with real-time inventory sync",
  "Prevent double bookings automatically",
  "Interactive digital layouts with satellite view",
  "Mobile-first for field sales teams",
]

export const howItWorksSteps = [
  { icon: Search, title: "Find", desc: "Search the exact plot or apartment the customer wants" },
  { icon: Eye, title: "Show", desc: "Show the location or unit visually" },
  { icon: Snowflake, title: "Hold", desc: "Reserve inventory while the customer decides" },
  { icon: BadgeCheck, title: "Book", desc: "Record the booking and customer information" },
  { icon: Trophy, title: "Track", desc: "Follow the transaction until completion" },
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
