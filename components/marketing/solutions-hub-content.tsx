import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  Handshake,
  LayoutGrid,
  Map,
  Users,
  Wallet,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import CtaSection from "@/components/marketing/cta-section"
import { LANDING_IMAGES } from "@/lib/media"
import { SOLUTION_HUB_GROUPS, SOLUTION_JOBS, SOLUTION_PAGE } from "@/lib/solutions-hub"

const JOB_META: Record<
  (typeof SOLUTION_JOBS)[number]["id"],
  { icon: LucideIcon; accent: string; chip: string }
> = {
  maps: { icon: Map, accent: "from-teal-500/20 to-emerald-900/10", chip: "Live map" },
  inventory: { icon: LayoutGrid, accent: "from-amber-400/20 to-orange-900/10", chip: "Hold lock" },
  crm: { icon: Users, accent: "from-sky-400/20 to-blue-900/10", chip: "Unit CRM" },
  partners: { icon: Handshake, accent: "from-violet-400/20 to-indigo-900/10", chip: "Broker login" },
}

const GROUP_ICONS: LucideIcon[] = [Map, Wallet, Building2, Users]

const WHO_ICONS: LucideIcon[] = [Map, Building2, Users, Handshake]

export function SolutionsHubContent() {
  const page = SOLUTION_PAGE
  const featured = SOLUTION_JOBS.find((job) => job.featured) ?? SOLUTION_JOBS[0]
  const rest = SOLUTION_JOBS.filter((job) => job.id !== featured.id)
  const FeaturedIcon = JOB_META[featured.id].icon

  return (
    <div className="bg-[#F4F6F8]">
      <section className="relative overflow-hidden bg-[#071525] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,159,0.22),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,184,0,0.12),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFB800]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C29F]" aria-hidden />
              {page.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {page.headline}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              {page.subhead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact#demo-form"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FFB800] px-7 text-base font-bold text-black transition-colors hover:bg-[#E5A600] sm:w-auto"
              >
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/features"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1f33] shadow-2xl shadow-black/40">
              <Image
                src={LANDING_IMAGES.productPlatform.src}
                alt={LANDING_IMAGES.productPlatform.alt}
                width={1024}
                height={500}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 540px"
                priority
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              {["Projects", "Inventory", "Leads", "Sales", "Teams"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <ul className="mx-auto grid max-w-6xl gap-px sm:grid-cols-2 lg:grid-cols-4">
            {page.who.items.map((item, index) => {
              const Icon = WHO_ICONS[index] ?? Map
              return (
                <li key={item} className="flex items-center gap-3 px-4 py-4 sm:px-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00C29F]/15 text-[#00C29F]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00A884]">
                Start here
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                What’s going wrong today?
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600 sm:text-right">
              Tap one. We’ll open it on your layout in a demo.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
            <Link
              href={featured.href}
              className="group relative overflow-hidden rounded-3xl bg-[#071525] p-6 text-white shadow-xl sm:p-8 lg:col-span-7 lg:row-span-2"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${JOB_META[featured.id].accent}`}
              />
              <div className="relative flex h-full min-h-[280px] flex-col lg:min-h-[420px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FFB800]">
                    01 · {JOB_META[featured.id].chip}
                  </span>
                  <FeaturedIcon className="h-6 w-6 text-white/50" aria-hidden />
                </div>
                <h3 className="mt-6 max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-md flex-1 text-base leading-relaxed text-slate-300">{featured.body}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#FFB800]">
                  {featured.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>

            {rest.map((job, index) => {
              const meta = JOB_META[job.id]
              const Icon = meta.icon
              const isLast = index === rest.length - 1
              return (
                <Link
                  key={job.id}
                  href={job.href}
                  className={`group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#00C29F]/40 hover:shadow-lg sm:p-6 lg:col-span-5 ${
                    isLast ? "lg:col-span-12 lg:flex-row lg:items-center lg:gap-8" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {String(index + 2).padStart(2, "0")} · {meta.chip}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#00C29F]/15 group-hover:text-[#00A884]">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">{job.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{job.body}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00A884]">
                    {job.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-4 sm:pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00A884]">All solutions</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Browse by what you run
          </h2>
        </div>
      </section>

      {SOLUTION_HUB_GROUPS.map((group, groupIndex) => {
        const GroupIcon = GROUP_ICONS[groupIndex] ?? LayoutGrid
        const dark = groupIndex % 2 === 0
        return (
          <section
            key={group.title}
            className={dark ? "bg-[#071525] py-12 text-white sm:py-16" : "bg-white py-12 sm:py-16"}
          >
            <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      dark ? "bg-white/10 text-[#FFB800]" : "bg-[#00C29F]/10 text-[#00A884]"
                    }`}
                  >
                    <GroupIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight">{group.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
                    {group.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-3 lg:col-span-8">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group flex items-start justify-between gap-4 rounded-2xl border px-5 py-4 transition-all sm:items-center sm:px-6 sm:py-5 ${
                        dark
                          ? "border-white/10 bg-white/[0.04] hover:border-[#FFB800]/40 hover:bg-white/[0.08]"
                          : "border-slate-200 bg-[#F4F6F8] hover:border-[#00C29F]/40 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <span>
                        <span className="block text-base font-semibold">{item.label}</span>
                        <span
                          className={`mt-1 block text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}
                        >
                          {item.description}
                        </span>
                      </span>
                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          dark ? "bg-white/10 text-[#FFB800]" : "bg-white text-[#00A884] shadow-sm"
                        }`}
                      >
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      <CtaSection />
    </div>
  )
}
