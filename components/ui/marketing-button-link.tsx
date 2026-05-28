import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type MarketingButtonLinkProps = {
  href: string
  children: ReactNode
  className?: string
  variant?: "primary" | "outline" | "accent"
}

const variants = {
  primary:
    "bg-slate-800 text-white hover:bg-slate-700",
  outline:
    "border border-slate-200 bg-slate-100 text-slate-900 hover:bg-slate-200",
  accent:
    "bg-[#FFB800] text-black hover:bg-[#E5A600]",
} as const

export function MarketingButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: MarketingButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg px-8 text-base font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  )
}
