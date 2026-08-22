import Image from "next/image"
import { DASHBOARD_PREVIEW } from "@/lib/media"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Check } from "lucide-react"
import type { ReactNode } from "react"

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

export function Section({ id, className = "py-20 bg-white", children }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  eyebrow?: string
  eyebrowClassName?: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  eyebrowClassName = "text-blue-600",
  title,
  description,
  className = "text-center mb-16",
}: SectionHeaderProps) {
  return (
    <header className={className}>
      {eyebrow ? (
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-4 ${eyebrowClassName}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900">{title}</h2>
      {description ? <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">{description}</p> : null}
    </header>
  )
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-700">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
            <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function TextLink({
  href,
  children,
  className = "text-[#00C29F] hover:text-[#00A085]",
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center font-medium transition-colors group ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

type IconCardProps = {
  icon: LucideIcon
  title: string
  description: string
  iconClassName?: string
  iconWrapClassName?: string
}

export function IconCard({
  icon: Icon,
  title,
  description,
  iconClassName = "text-rose-500",
  iconWrapClassName = "bg-rose-50",
}: IconCardProps) {
  return (
    <article className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${iconWrapClassName}`}
      >
        <Icon className={`h-6 w-6 ${iconClassName}`} />
      </div>
      <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-slate-500">{description}</p>
    </article>
  )
}

export function DashboardImage({ alt, className = "aspect-[4/3]" }: { alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ${className}`}>
      <Image src={DASHBOARD_PREVIEW} alt={alt} fill className="object-contain bg-slate-50" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
    </div>
  )
}
