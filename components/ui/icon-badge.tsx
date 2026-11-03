import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type IconBadgeProps = {
  icon: LucideIcon
  className?: string
  iconClassName?: string
  tone?: "brand" | "ink" | "available" | "muted" | "on-dark"
}

const tones = {
  brand: "bg-freezed-soft text-freezed-ink",
  ink: "bg-ink/[0.06] text-ink",
  available: "bg-available-soft text-available-ink",
  muted: "bg-ground text-subtle",
  "on-dark": "bg-white/10 text-ground",
} as const

/** Consistent Lucide icon chrome for marketing sections (21st / Origin-style). */
export function IconBadge({
  icon: Icon,
  className,
  iconClassName,
  tone = "brand",
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-ui)]",
        tones[tone],
        className,
      )}
    >
      <Icon className={cn("h-5 w-5", iconClassName)} strokeWidth={1.75} aria-hidden />
    </span>
  )
}
