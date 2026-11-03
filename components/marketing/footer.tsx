import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { HeroAtmosphere } from "@/components/marketing/hero-atmosphere"
import { FOOTER_COMPANY_LINKS, FOOTER_SOLUTION_GROUPS } from "@/lib/seo-solutions"

const footerLinkClass = "transition-colors hover:text-logo"

export default function Footer() {
  // Fixed year avoids SSR/client Date mismatches (hydration).
  const year = 2026

  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-10 pb-8 text-ground sm:pt-12 sm:pb-10">
      <HeroAtmosphere idPrefix="footer" />
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-horizontal-on-dark.svg"
                alt="Layouts360"
                width={220}
                height={27}
                className="h-7 w-auto sm:h-8"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-ground/60">
              Plot and inventory software with CRM and booking for layout developers.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ground/80">
              Features
            </h3>
            <ul className="space-y-2 text-sm text-ground/60">
              <li>
                <Link href="/features/availability" className={footerLinkClass}>
                  Real-Time Availability
                </Link>
              </li>
              <li>
                <Link href="/features/plot-details" className={footerLinkClass}>
                  Digital Plot Cards
                </Link>
              </li>
              <li>
                <Link href="/features/gallery" className={footerLinkClass}>
                  Interactive Gallery
                </Link>
              </li>
              <li>
                <Link href="/features/cross-platform" className={footerLinkClass}>
                  Mobile Sales App
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ground/80">
              Solutions
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {FOOTER_SOLUTION_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-xs font-medium text-ground/45">{group.title}</p>
                  <ul className="space-y-2 text-sm text-ground/60">
                    {group.links.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className={footerLinkClass}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/solutions"
              className="mt-4 inline-block text-sm font-medium text-logo hover:underline"
            >
              View all solutions →
            </Link>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ground/80">
              Company
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ground/60">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-ground/80">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-ground/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-logo" aria-hidden />
                <span>Pune 411014</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-logo" aria-hidden />
                <a href="tel:+917276495199" className={footerLinkClass}>
                  +91 72764 95199
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-ground/45 sm:flex-row sm:text-left sm:text-sm">
          <p className="max-w-prose">
            © {year} Layouts360. Operated by OriginGrey Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end sm:gap-6">
            <Link href="/privacy" className="transition-colors hover:text-ground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ground">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
