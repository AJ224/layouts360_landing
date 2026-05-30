import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { SEO_SOLUTION_LINKS } from "@/lib/seo-solutions"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black pt-12 pb-8 text-white sm:pt-16 md:pt-20 sm:pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 grid grid-cols-1 justify-between gap-8 sm:mb-16 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm space-y-4 sm:space-y-6">
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
            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              Transforming real estate management with innovative digital solutions. Build, scale, and manage with
              confidence.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base font-semibold text-white sm:text-lg">Features</h3>
            <ul className="space-y-3 text-sm text-gray-400 sm:text-base">
              <li>
                <Link href="/features/availability" className="transition-colors hover:text-[#FFB800]">
                  Real-Time Availability
                </Link>
              </li>
              <li>
                <Link href="/features/plot-details" className="transition-colors hover:text-[#FFB800]">
                  Digital Plot Cards
                </Link>
              </li>
              <li>
                <Link href="/features/gallery" className="transition-colors hover:text-[#FFB800]">
                  Interactive Gallery
                </Link>
              </li>
              <li>
                <Link href="/features/cross-platform" className="transition-colors hover:text-[#FFB800]">
                  Mobile Sales App
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base font-semibold text-white sm:text-lg">Solutions</h3>
            <ul className="space-y-3 text-sm text-gray-400 sm:text-base">
              {SEO_SOLUTION_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-[#FFB800]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:text-right">
            <div className="mb-6 flex flex-wrap justify-start gap-6 text-sm font-medium text-gray-400 md:justify-end">
              <Link href="/" className="hover:text-[#FFB800]">
                Home
              </Link>
              <Link href="/pricing" className="hover:text-[#FFB800]">
                Pricing
              </Link>
              <Link href="/blog" className="hover:text-[#FFB800]">
                Blog
              </Link>
              <Link href="/faq" className="hover:text-[#FFB800]">
                FAQ
              </Link>
              <Link href="/contact" className="hover:text-[#FFB800]">
                Contact
              </Link>
            </div>
            <h3 className="mb-4 text-base font-semibold sm:mb-6 sm:text-lg">Contact Us</h3>
            <ul className="inline-block space-y-4 text-left sm:space-y-6 md:text-right">
              <li className="flex items-start gap-3 text-sm text-gray-400 sm:text-base md:flex-row-reverse">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#FFB800] sm:h-5 sm:w-5" />
                <span>Pune 411014</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 sm:text-base md:flex-row-reverse">
                <Phone className="h-4 w-4 shrink-0 text-[#FFB800] sm:h-5 sm:w-5" />
                <a href="tel:+917276495199" className="transition-colors hover:text-white">
                  +91 72764 95199
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:pt-8 sm:text-sm">
          <p>© {year} Layouts360. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end sm:gap-6">
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
