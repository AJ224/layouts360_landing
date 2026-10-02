import Link from "next/link"
import { COMPANY } from "@/lib/company"
import { PRIMARY_TAGLINE, SALES_ERP_DEFINITION } from "@/lib/brand"
import { CompanyEmailLink } from "@/components/marketing/company-email-link"
import { MapPin, Phone, Mail } from "lucide-react"

export function AboutContent() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">About Layouts360</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{PRIMARY_TAGLINE}</p>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900">What we build</h2>
          <p className="text-slate-600 leading-relaxed">
            {COMPANY.productName} is software for real estate companies: layout developers, builders, and sales teams
            selling plots, apartments, and commercial units. We replace Excel inventory, WhatsApp PDF
            updates, and paper layouts with live digital maps, booking workflows, CRM, and payment tracking.
          </p>
          <p className="text-slate-600 leading-relaxed">{SALES_ERP_DEFINITION}</p>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">Who we serve</h2>
          <ul className="list-disc space-y-2 pl-6 text-slate-600">
            <li>Real estate companies with layout and plot projects</li>
            <li>Township developers with phased releases</li>
            <li>Builders running plotted layouts alongside apartment towers</li>
            <li>Sales teams and channel partner networks that need live inventory</li>
            <li>Companies preparing for high-velocity launch days</li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">What we are not</h2>
          <p className="text-slate-600 leading-relaxed">
            We do not target residential rental management, society maintenance, or full statutory accounting.
            Finance teams can export collection data; statutory books stay in your existing accounting tools.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">Contact & location</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" aria-hidden />
              <span>
                <strong className="text-slate-900">{COMPANY.productName}</strong>
                <br />
                {COMPANY.legalName}
                <br />
                {COMPANY.headquarters} {COMPANY.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#FFB800]" aria-hidden />
              <a href={`tel:${COMPANY.phoneTel}`} className="font-medium text-blue-600 hover:underline">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#FFB800]" aria-hidden />
              <CompanyEmailLink className="font-medium text-blue-600 hover:underline" />
            </li>
          </ul>
          <Link
            href="/contact#demo-form"
            className="mt-6 inline-flex rounded-full bg-[#FFB800] px-6 py-3 text-sm font-bold text-black hover:bg-[#E5A600]"
          >
            Book a demo
          </Link>
        </section>

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href="/solutions" className="text-blue-600 hover:underline">
            Browse all solutions
          </Link>
          {" · "}
          <Link href="/case-studies" className="text-blue-600 hover:underline">
            Customer stories
          </Link>
        </p>
      </div>
    </div>
  )
}
