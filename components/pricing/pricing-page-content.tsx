import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import UsageCalculator from "@/components/pricing/usage-calculator"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/company"
import {
  estimateUsagePricing,
  formatInr,
  pricingConfig,
  unitActivationRate,
} from "@/lib/pricing-config"

const STEPS = [
  {
    n: "01",
    title: "Platform",
    body: "Access Layouts360 for your sales team.",
  },
  {
    n: "02",
    title: "Inventory",
    body: "Pay only for the units you activate on the map.",
  },
  {
    n: "03",
    title: "Scale",
    body: "Add inventory when the project grows. No forced upgrade.",
  },
] as const

const JOURNEY = [
  "Project launches",
  "Inventory added",
  "Units sold",
  "New inventory added",
  "Portfolio grows",
] as const

const OBJECTIONS = [
  {
    title: "Need 5,000+ units?",
    body: "We size onboarding and support for large books. Start with an estimate, then we refine.",
  },
  {
    title: "Need a custom setup?",
    body: "Approvals, migrations, or brochure redraw are quoted separately. Core pricing stays clear.",
  },
  {
    title: "Managing multiple projects?",
    body: "Activate inventory per project. One platform. No plan chase as phases open.",
  },
  {
    title: "Want to start with a pilot?",
    body: "Begin with one layout or tower. Expand when the team is ready.",
  },
] as const

function ScenarioCard({
  label,
  units,
  blurb,
  recommended,
  unitType,
}: Readonly<{
  label: string
  units: number
  blurb: string
  recommended?: boolean
  unitType: "plot" | "flat"
}>) {
  const estimate = estimateUsagePricing(units, unitType, "monthly")
  const unitWord = unitType === "flat" ? "flats" : "plots"

  return (
    <article
      className={[
        "flex h-full flex-col rounded-3xl border p-6 sm:p-7",
        recommended
          ? "border-[#00C29F]/35 bg-white shadow-[0_20px_50px_-30px_rgba(0,194,159,0.45)]"
          : "border-[#E8E2D9] bg-[#FBF9F6]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Example pricing
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0B1E3B]">{label}</h3>
          <p className="mt-1 text-sm text-slate-500">{blurb}</p>
        </div>
        {recommended ? (
          <span className="shrink-0 rounded-full bg-[#00C29F]/10 px-3 py-1 text-[11px] font-medium text-[#0B7A6A]">
            Common starting point
          </span>
        ) : null}
      </div>

      <p className="mt-6 text-sm text-slate-500">
        <span className="font-semibold text-[#0B1E3B]">{units.toLocaleString("en-IN")}</span> {unitWord}
      </p>

      <dl className="mt-5 space-y-3 border-t border-[#E8E2D9] pt-5 text-sm">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-slate-500">Visualization · one-time</dt>
          <dd className="font-semibold text-[#0B1E3B]">{formatInr(estimate.activationOneTime)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-slate-500">Platform · monthly</dt>
          <dd className="font-semibold text-[#0B1E3B]">{formatInr(estimate.platformMonthly)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3 border-t border-dashed border-[#E8E2D9] pt-3">
          <dt className="font-medium text-[#0B1E3B]">To get started</dt>
          <dd className="text-right">
            <span className="block font-semibold text-[#00A88E]">
              {formatInr(estimate.activationOneTime)} + {formatInr(estimate.platformMonthly)}/mo
            </span>
          </dd>
        </div>
      </dl>
    </article>
  )
}

export default function PricingPageContent() {
  const plotRate = unitActivationRate("plot")
  const flatRate = unitActivationRate("flat")
  const platform = pricingConfig.platformFee.monthly

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#0B1E3B] selection:bg-[#00C29F]/20">
      <Header theme="light" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgba(0,194,159,0.1),transparent_50%),linear-gradient(180deg,#FBF9F6_0%,#F3EFE8_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12 lg:pt-32">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold tracking-tight text-[#0B1E3B]">
                Layouts360
                <span className="mx-2 text-slate-300" aria-hidden>
                  ·
                </span>
                <span className="font-medium text-[#00A88E]">Pricing</span>
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1E3B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                Pricing that grows with your inventory.
              </h1>

              <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-600">
                Start with what you need. Add inventory as your project grows. No rigid packages. No
                paying for capacity you don't use.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="h-11 rounded-full bg-[#EAB308] px-6 text-sm font-semibold text-[#0B1E3B] hover:bg-[#f0c43a]"
                  asChild
                >
                  <a href="#calculate">
                    Calculate your cost
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-full border-[#D9D2C8] bg-white px-6 text-sm font-medium text-[#0B1E3B] hover:bg-white"
                  asChild
                >
                  <Link href="/contact#demo-form">Talk to sales</Link>
                </Button>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Start small · Scale when ready · No surprise upgrades
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E8E2D9] bg-white shadow-[0_20px_50px_-32px_rgba(11,30,59,0.4)]">
              <div className="border-b border-[#E8E2D9] bg-[#F7F4EF]/70 px-5 py-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  How pricing works
                </p>
              </div>
              <div className="divide-y divide-[#E8E2D9]">
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-[#0B1E3B]">Platform</p>
                    <p className="mt-0.5 text-xs text-slate-500">Full sales system access</p>
                  </div>
                  <p className="text-xl font-semibold tracking-tight text-[#0B1E3B]">
                    {formatInr(platform)}
                    <span className="ml-1 text-xs font-medium text-slate-400">/mo</span>
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-[#0B1E3B]">Plots</p>
                    <p className="mt-0.5 text-xs text-slate-500">Activate on the live map</p>
                  </div>
                  <p className="text-xl font-semibold tracking-tight text-[#00A88E]">
                    {formatInr(plotRate)}
                    <span className="ml-1 text-xs font-medium text-slate-400">once</span>
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-[#0B1E3B]">Flats</p>
                    <p className="mt-0.5 text-xs text-slate-500">Activate on the live map</p>
                  </div>
                  <p className="text-xl font-semibold tracking-tight text-[#00A88E]">
                    {formatInr(flatRate)}
                    <span className="ml-1 text-xs font-medium text-slate-400">once</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 border-t border-[#E8E2D9]/80 pt-8 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.n} className="flex gap-3 rounded-xl bg-white/60 px-4 py-3.5">
                <span className="font-mono text-xs font-medium text-[#00A88E]">{step.n}</span>
                <div>
                  <p className="text-sm font-semibold text-[#0B1E3B]">{step.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-5xl">
          <UsageCalculator />
          <p className="mt-5 text-center text-xs text-slate-400">
            Used by layout developers and apartment sales teams across India · Based in {COMPANY.headquarters}
          </p>
        </div>
      </section>

      {/* Example scenarios */}
      <section className="border-y border-[#E8E2D9] bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Anchored to real project sizes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Example pricing, not locked packages
            </h2>
            <p className="mt-3 text-base text-slate-500">
              Figures below use plot activation at {formatInr(plotRate)}. Switch to flats in the calculator for{" "}
              {formatInr(flatRate)} per unit.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pricingConfig.scenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                label={scenario.label}
                units={scenario.units}
                blurb={scenario.blurb}
                recommended={"recommended" in scenario ? scenario.recommended : false}
                unitType="plot"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value journey */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for the way real-estate inventory actually changes.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            You don't rebuy a bigger plan every time a phase opens or a tower goes live. Activate what you
            need, when you need it.
          </p>
          <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-0">
            {JOURNEY.map((item, index) => (
              <div key={item} className="flex items-center sm:contents">
                <div className="flex-1 rounded-2xl border border-[#E8E2D9] bg-white px-4 py-4 text-sm font-medium text-[#0B1E3B] sm:flex-none sm:px-5">
                  {item}
                </div>
                {index < JOURNEY.length - 1 ? (
                  <span className="hidden px-2 text-[#00C29F] sm:inline" aria-hidden>
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-[#E8E2D9] bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            What's included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            The platform. Not a feature maze.
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Core capabilities come with platform access. We don't invent tiers just to hide tools.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingConfig.includedCapabilities.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#00A88E]">
                  {group.group}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00C29F]" strokeWidth={2.5} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / objections */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Still deciding?</h2>
            <p className="mt-3 text-base text-slate-500">
              Common questions from developers and brokers. No pressure. Clear next step.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {OBJECTIONS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#E8E2D9] bg-white/70 p-6 transition-colors hover:border-[#00C29F]/30"
              >
                <h3 className="text-lg font-semibold tracking-tight text-[#0B1E3B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.body}</p>
                <Link
                  href="/contact#demo-form"
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#00A88E] hover:text-[#0B7A6A]"
                >
                  Talk to us
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#0B1E3B] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Start with your inventory. Scale when you're ready.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Calculate a starting number, or book a demo on your own layout. We’ll keep pricing transparent.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 rounded-full bg-[#EAB308] px-6 text-sm font-medium text-[#0B1E3B] hover:bg-[#f0c43a]"
              asChild
            >
              <a href="#calculate">
                Calculate your cost
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-white/20 bg-transparent px-6 text-sm text-white hover:bg-white/5"
              asChild
            >
              <Link href="/contact#demo-form">Book a demo</Link>
            </Button>
          </div>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="mt-6 inline-block text-sm text-white/45 transition-colors hover:text-white/70"
          >
            Or call {COMPANY.phone}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
