import type { LucideIcon } from "lucide-react"
import {
  Calendar,
  CircleAlert,
  Clock,
  CreditCard,
  FileSpreadsheet,
  History,
  Share2,
  Snowflake,
  TrendingDown,
  Trophy,
  Upload,
  Users,
} from "lucide-react"

export type PainPoint = {
  icon: LucideIcon
  title: string
  description: string
}

export const painPoints: PainPoint[] = [
  {
    icon: CircleAlert,
    title: "Confusion",
    description: "Messy Data: Numbers in Excel, Maps on Paper. It's a mess.",
  },
  {
    icon: Clock,
    title: "Slow Follow-ups",
    description: "You forget to call back, they buy somewhere else.",
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities",
    description: "You don't know what is sold and what is free right now.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Sheet Chaos",
    description: "Which file is the right one? Version 1 or Version 5?",
  },
  {
    icon: Users,
    title: "Multiple Customer Handling",
    description: "Showing the same plot to two people. Embarrassing.",
  },
  {
    icon: History,
    title: "Delayed Updates",
    description: "You think a plot is free, but your partner already sold it.",
  },
]

export const plotManagementBenefits = [
  "Replace Excel with real-time inventory sync",
  "Prevent double bookings automatically",
  "Interactive digital layouts with satellite view",
  "Mobile-first for field sales teams",
]

export const howItWorksSteps = [
  { icon: Upload, title: "Upload", desc: "Upload layout plan" },
  { icon: Share2, title: "Share", desc: "Share project link with customers" },
  { icon: Snowflake, title: "Freeze", desc: "Freeze/Book plots" },
  { icon: Users, title: "Follow", desc: "Manage Follow-ups" },
  { icon: Trophy, title: "Wins", desc: "Close more deals" },
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
