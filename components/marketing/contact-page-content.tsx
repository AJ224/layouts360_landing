import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileSpreadsheet,
  Handshake,
  Home,
  Layers,
  MapPinned,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react"
import { Suspense } from "react"
import DemoForm from "@/components/marketing/demo-form"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { FAQSchema } from "@/components/seo/schema"
import { MarketingButtonLink } from "@/components/ui/marketing-button-link"
import { COMPANY } from "@/lib/company"
import { LANDING_IMAGES } from "@/lib/media"
import { WHATSAPP_CHAT_URL, WHATSAPP_LAYOUT_CHAT_URL } from "@/lib/whatsapp"

const WORKFLOW_STEPS = [
  "Your Existing Layout",
  "Interactive Inventory",
  "Live Availability",
  "Hold / Booking",
  "Sales Visibility",
] as const

const DEMO_STEPS = [
  {
    title: "Your Layout",
    body: "See how your existing project layout can be represented digitally.",
  },
  {
    title: "Live Inventory",
    body: "See availability and unit/plot status in one place.",
  },
  {
    title: "Sales Workflow",
    body: "See how your sales team can manage the journey from availability to booking.",
  },
  {
    title: "Team & Partner Visibility",
    body: "See how your team can work from the same inventory instead of outdated files.",
  },
  {
    title: "Your Setup",
    body: "Discuss how Layouts360 can fit your project and workflow.",
  },
] as const

const AUDIENCES = [
  { title: "Plot Developers", icon: MapPinned },
  { title: "Layout & Township Developers", icon: Layers },
  { title: "Apartment Projects", icon: Building2 },
  { title: "Villa Projects", icon: Home },
  { title: "Real Estate Sales Teams", icon: Users },
  { title: "Channel Partner / Broker Networks", icon: Handshake },
] as const

const TRUST_POINTS = [
  {
    title: "One Live Inventory",
    body: "Keep availability and status centralized so your office, field team, and partners see the same picture.",
  },
  {
    title: "Interactive Layouts",
    body: "Turn static layouts into an interactive inventory experience instead of forwarding outdated PDFs.",
  },
  {
    title: "Less Spreadsheet Dependency",
    body: "Reduce fragmented Excel, PDF, and WhatsApp workflows that create double-booking risk.",
  },
  {
    title: "Built Around Real Estate Sales",
    body: "Organize the system around plots, units, bookings, leads, and sales — not generic CRM fields.",
  },
] as const

const NEXT_STEPS = [
  "We receive your project details",
  "Our team contacts you",
  "We understand your current workflow",
  "We show you Layouts360 and discuss the right setup",
] as const

const CONTACT_FAQS = [
  {
    question: "Do I need to change my existing workflow?",
    answer:
      "No. Layouts360 is designed to replace fragmented Excel, PDF, and WhatsApp inventory updates with one live system — while your team keeps the sales process they already know.",
  },
  {
    question: "Can you work with my existing project layout?",
    answer:
      "Yes. Share your PDF, CAD, Excel, or Illustrator layout. We digitize by property type, inventory size, and complexity so your team can sell from a live map.",
  },
  {
    question: "Can my sales team use it?",
    answer:
      "Yes. Give sales access to view and hold inventory with clear controls. The product is built for non-technical staff and works on phone, tablet, and desktop.",
  },
  {
    question: "Can brokers or channel partners access inventory?",
    answer:
      "Yes. Channel partners can get logins to see live availability and submit booking requests tied to real units — instead of PDF blasts or group chats.",
  },
  {
    question: "How long does setup take?",
    answer:
      "It depends on property type, inventory size, and complexity. Most projects move from static files to a live map on a scoped timeline we confirm after reviewing your layouts.",
  },
  {
    question: "Can I see a demo before purchasing?",
    answer:
      "Yes. Book a free walkthrough and we’ll show Layouts360 on a real project workflow — layout, live availability, holds, bookings, and team visibility.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing depends on inventory size, property type, and users. See the pricing page for the model, or book a demo and we’ll map a plan to your projects.",
  },
] as const

const PHONES = [
  { label: "+91 90210 18080", href: "tel:+919021018080" },
  { label: COMPANY.phone, href: `tel:${COMPANY.phoneTel}` },
] as const

export default function ContactPageContent() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-amber-100">
      <FAQSchema faqs={[...CONTACT_FAQS]} />
      <Header theme="light" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              <span>Free 20-minute product walkthrough</span>
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              See Your Real Estate Inventory Work Live
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Stop managing plots through Excel, PDFs and WhatsApp. Book a free 20-minute walkthrough
              and see how your layout, live availability, plot status, holds, bookings and sales
              workflow can work together in Layouts360.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MarketingButtonLink href="#demo-form" variant="accent" className="w-full sm:w-auto">
                Book My Free Demo
              </MarketingButtonLink>
              <a
                href={WHATSAPP_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 transition-colors hover:bg-slate-100 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">No commitment. No credit card required.</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
              <Image
                src={LANDING_IMAGES.productPlatform.src}
                alt={LANDING_IMAGES.productPlatform.alt}
                width={1024}
                height={500}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-500 sm:text-left">
              Layouts360 product view — projects, inventory, leads, sales, and teams
            </p>
          </div>
        </div>
      </section>

      {/* Visual value prop */}
      <section className="border-b border-slate-100 py-12 sm:py-16" aria-labelledby="workflow-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="workflow-heading" className="sr-only">
            How Layouts360 works
          </h2>
          <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={step} className="flex flex-1 flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-2">
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 md:flex-col md:gap-2 md:px-3 md:py-5 md:text-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold text-slate-900">{step}</p>
                </div>
                {index < WORKFLOW_STEPS.length - 1 ? (
                  <>
                    <ArrowRight className="mx-auto hidden h-4 w-4 shrink-0 text-slate-300 md:block" aria-hidden />
                    <ArrowDown className="mx-auto h-4 w-4 text-slate-300 md:hidden" aria-hidden />
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo agenda */}
      <section className="border-b border-slate-100 bg-white py-14 sm:py-20" aria-labelledby="demo-agenda-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="demo-agenda-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              See Layouts360 in Action
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              A focused walkthrough of the product — not a generic slide deck.
            </p>
          </div>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6"
              >
                <p className="text-xs font-bold tracking-wide text-[#B8860B]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-b border-slate-100 bg-slate-50 py-14 sm:py-20" aria-labelledby="audience-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="audience-heading" className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Built for Real Estate Teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map(({ title, icon: Icon }) => (
              <article
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100">
                  <Icon className="h-5 w-5 text-slate-700" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-slate-900">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-slate-100 py-14 sm:py-20" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="trust-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Why Real Estate Teams Choose Layouts360
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Every Plot. Every Flat. One Live System.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
            {TRUST_POINTS.map((point) => (
              <article key={point.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-slate-200">
            <Image
              src={LANDING_IMAGES.interactivePlot.src}
              alt={LANDING_IMAGES.interactivePlot.alt}
              width={1200}
              height={700}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* Form + what happens next */}
      <section id="demo-form" className="scroll-mt-20 border-b border-slate-100 bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Tell Us About Your Project
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                Leave your details and we&apos;ll reach out to schedule a walkthrough.
              </p>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">What Happens After You Contact Us?</h3>
                <ol className="space-y-4">
                  {NEXT_STEPS.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="pt-1">
                        <p className="text-sm font-medium text-slate-800 sm:text-base">{step}</p>
                        {index < NEXT_STEPS.length - 1 ? (
                          <div className="mt-3 ml-1 h-4 w-px bg-slate-200" aria-hidden />
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="text-sm font-medium text-slate-500">No pressure. You decide if it&apos;s a fit.</p>
              </div>

              <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">Prefer to talk now?</p>
                <div className="flex flex-col gap-2">
                  {PHONES.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="inline-flex items-center gap-2 text-base font-semibold text-slate-900 transition-colors hover:text-blue-600"
                    >
                      <Phone className="h-4 w-4 text-slate-500" aria-hidden />
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 sm:p-7">
              <Suspense
                fallback={
                  <div className="flex h-64 items-center justify-center text-sm text-slate-500">
                    Loading form…
                  </div>
                }
              >
                <DemoForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Bring your layout */}
      <section className="border-b border-slate-100 py-14 sm:py-20" aria-labelledby="layout-cta-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <FileSpreadsheet className="h-6 w-6 text-slate-700" aria-hidden />
          </div>
          <h2 id="layout-cta-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Already Have Your Layout?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Send us your existing PDF, CAD or project layout. We&apos;ll show you how your inventory
            could work inside Layouts360.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MarketingButtonLink href="#demo-form" variant="accent" className="w-full sm:w-auto">
              Show Me My Layout
            </MarketingButtonLink>
            <a
              href={WHATSAPP_LAYOUT_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-8 text-base font-medium text-emerald-900 transition-colors hover:bg-emerald-100 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Send Layout on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp */}
      <section className="border-b border-slate-100 bg-slate-900 py-14 text-white sm:py-16" aria-labelledby="whatsapp-heading">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15">
            <MessageCircle className="h-7 w-7 text-emerald-400" aria-hidden />
          </div>
          <div className="flex-1">
            <h2 id="whatsapp-heading" className="text-2xl font-bold sm:text-3xl">
              Prefer WhatsApp?
            </h2>
            <p className="mt-2 text-base text-slate-300">
              Send us your project details or existing layout directly.
            </p>
          </div>
          <a
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-8 text-base font-semibold text-white transition-colors hover:bg-emerald-400 md:w-auto"
          >
            Chat With Our Team
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-slate-100 py-14 sm:py-20" aria-labelledby="contact-faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="contact-faq-heading" className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {CONTACT_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white px-5 py-4 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-left text-sm font-semibold text-slate-900 marker:content-none sm:text-base [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="mt-0.5 shrink-0 text-slate-400 transition group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            More answers on our{" "}
            <Link href="/faq" className="font-medium text-blue-600 hover:underline">
              FAQ page
            </Link>
            {" · "}
            <Link href="/pricing" className="font-medium text-blue-600 hover:underline">
              Pricing
            </Link>
          </p>
        </div>
      </section>

      {/* Company legitimacy */}
      <section className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="text-lg font-bold text-slate-900">{COMPANY.productName}</p>
            <p className="mt-1 text-sm text-slate-600">
              A product by <span className="font-medium text-slate-800">{COMPANY.legalName}</span>
            </p>
            <p className="mt-1 text-sm text-slate-500">{COMPANY.headquarters}</p>
          </div>
          <nav aria-label="Legal and company links" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-900 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-900 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-slate-600 hover:text-slate-900 hover:underline">
              Security
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 hover:underline">
              Contact
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 hover:underline">
              About
            </Link>
          </nav>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-slate-900 py-14 text-white sm:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Your Next Project Shouldn&apos;t Run on Another Spreadsheet.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Bring your layout, inventory and sales workflow into one live system.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MarketingButtonLink href="#demo-form" variant="accent" className="w-full sm:w-auto">
              See Layouts360 in Action
            </MarketingButtonLink>
            <a
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
