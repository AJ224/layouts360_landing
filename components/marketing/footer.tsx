import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { FOOTER_COMPANY_LINKS, FOOTER_SOLUTION_GROUPS } from "@/lib/seo-solutions"

const footerLinkClass = "transition-colors hover:text-[#FFB800]"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black pt-10 pb-8 text-white sm:pt-12 sm:pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.png"
                alt="Layouts360 logo"
                width={32}
                height={32}
                className="rounded-lg sm:h-10 sm:w-10"
              />
              <span className="text-lg font-bold sm:text-xl">Layouts360</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Plot and inventory software with CRM and booking for layout developers.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">
              Features
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
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
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">
              Solutions
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {FOOTER_SOLUTION_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-xs font-medium text-gray-500">{group.title}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
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
              className="mt-4 inline-block text-sm font-medium text-[#FFB800] hover:underline"
            >
              View all solutions →
            </Link>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">
              Company
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-gray-300">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]" aria-hidden />
                <span>Pune 411014</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#FFB800]" aria-hidden />
                <a href="tel:+917276495199" className={footerLinkClass}>
                  +91 72764 95199
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:text-sm">
          <p>© {year} Layouts360. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
