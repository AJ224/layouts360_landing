import Link from "next/link"
import { COMPANY, LEGAL_EFFECTIVE_DATE } from "@/lib/company"
import { CompanyEmailLink } from "@/components/marketing/company-email-link"

type LegalDocumentProps = {
  title: string
  intro: string
  children: React.ReactNode
  otherHref: string
  otherLabel: string
}

export function LegalDocument({ title, intro, children, otherHref, otherLabel }: Readonly<LegalDocumentProps>) {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            {COMPANY.productName}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-sm text-slate-500">Effective date: {LEGAL_EFFECTIVE_DATE}</p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{intro}</p>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="legal-prose space-y-10 text-slate-600">{children}</article>

        <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">Contact</h2>
          <p className="mt-3 text-slate-600">
            For questions about these terms, write to{" "}
            <CompanyEmailLink className="font-medium text-blue-600 hover:underline" /> or contact{" "}
            {COMPANY.legalName} at {COMPANY.headquarters} {COMPANY.postalCode}.
          </p>
        </section>

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href={otherHref} className="text-blue-600 hover:underline">
            {otherLabel}
          </Link>
          {" · "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
        </p>
      </div>
    </div>
  )
}

type LegalSectionProps = {
  id?: string
  title: string
  children: React.ReactNode
}

export function LegalSection({ id, title, children }: Readonly<LegalSectionProps>) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed">{children}</div>
    </section>
  )
}
