import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  CreditCard,
  LayoutGrid,
  Link2,
  Map,
  Rocket,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react"

export interface BlogVisualTheme {
  gradient: string
  icon: LucideIcon
  label: string
}

const THEMES: BlogVisualTheme[] = [
  {
    gradient: "from-teal-600 via-teal-700 to-slate-900",
    icon: Map,
    label: "Plot sales",
  },
  {
    gradient: "from-blue-600 via-blue-700 to-slate-900",
    icon: BarChart3,
    label: "Analytics",
  },
  {
    gradient: "from-emerald-600 via-emerald-700 to-slate-900",
    icon: Zap,
    label: "Operations",
  },
  {
    gradient: "from-violet-600 via-violet-700 to-slate-900",
    icon: Users,
    label: "CRM",
  },
  {
    gradient: "from-amber-600 via-orange-700 to-slate-900",
    icon: CreditCard,
    label: "Payments",
  },
  {
    gradient: "from-cyan-600 via-teal-700 to-slate-900",
    icon: Link2,
    label: "Marketing",
  },
  {
    gradient: "from-rose-600 via-rose-700 to-slate-900",
    icon: Rocket,
    label: "Launch",
  },
  {
    gradient: "from-slate-600 via-slate-700 to-slate-900",
    icon: Shield,
    label: "Compliance",
  },
]

const THEME_RULES: { pattern: RegExp; theme: BlogVisualTheme }[] = [
  { pattern: /crm|lead|client|broker|channel-partner/i, theme: THEMES[3] },
  { pattern: /analytics|dashboard|data-driven/i, theme: THEMES[1] },
  { pattern: /payment|commission|pricing|accounting/i, theme: THEMES[4] },
  { pattern: /launch|offline|real-time|blocking|hold/i, theme: THEMES[6] },
  { pattern: /audit|compliance|secure/i, theme: THEMES[7] },
  { pattern: /layout|map|virtual|brochure|portal|inventory/i, theme: THEMES[0] },
  { pattern: /agent|mobile|tool|empower/i, theme: { ...THEMES[2], icon: Smartphone, label: "Field sales" } },
  { pattern: /link|email|pdf|whatsapp/i, theme: THEMES[5] },
  { pattern: /excel|manual|digit/i, theme: { ...THEMES[2], icon: LayoutGrid, label: "Digitization" } },
]

function hashSlug(slug: string): number {
  let sum = 0
  for (const char of slug) {
    sum += char.codePointAt(0) ?? 0
  }
  return sum
}

export function getBlogVisualTheme(slug: string, tags?: string[]): BlogVisualTheme {
  const haystack = `${slug} ${(tags ?? []).join(" ")}`.toLowerCase()

  for (const rule of THEME_RULES) {
    if (rule.pattern.test(haystack)) {
      return rule.theme
    }
  }

  return THEMES[hashSlug(slug) % THEMES.length]
}

export function formatBlogDate(dateStr: string): string {
  const date = new Date(`${dateStr}T12:00:00`)
  if (Number.isNaN(date.getTime())) {
    return dateStr
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

export function getPrimaryTag(tags?: string[]): string | null {
  if (!tags?.length) {
    return null
  }

  return tags[0]
}

export function getPostCategoryLabel(slug: string, tags?: string[]): string {
  return getBlogVisualTheme(slug, tags).label
}
