import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type MarketingButtonLinkProps = {
  href: string
  children: ReactNode
  className?: string
  variant?: "primary" | "outline" | "accent"
  showArrow?: boolean
}

const variants = {
  primary:
    "bg-brand text-white shadow-[0_1px_0_rgb(17_24_32/0.08)] hover:bg-brand-ink hover:-translate-y-px",
  outline: "border border-line bg-white text-ink hover:bg-ink/[0.04]",
  accent:
    "bg-brand text-white shadow-[0_1px_0_rgb(17_24_32/0.08)] hover:bg-brand-ink hover:-translate-y-px",
} as const

export function MarketingButtonLink({
  href,
  children,
  className,
  variant = "primary",
  showArrow,
}: MarketingButtonLinkProps) {
  const withArrow = showArrow ?? (variant === "primary" || variant === "accent")

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 min-w-0 items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium transition-all sm:min-w-[160px] sm:px-8 sm:text-base",
        variants[variant],
        className,
      )}
    >
      {children}
      {withArrow ? (
        <ArrowRight
          className="-me-0.5 size-4 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
          aria-hidden
        />
      ) : null}
    </Link>
  )
}
