"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { DEFAULT_LOCALE, LOCALE_COOKIE, parseLocale, type Locale } from "@/lib/i18n/locale"
import { getNavCopy } from "@/lib/i18n/nav"
import { LanguageSwitcher } from "@/components/marketing/language-switcher"

type HeaderProps = Readonly<{
  theme?: "light" | "dark"
  /** When provided (e.g. homepage SSR), avoids a language flash in the nav. */
  locale?: Locale
}>

function readCookieLocale(): Locale {
  if (typeof document === "undefined") return DEFAULT_LOCALE
  const match = new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`).exec(document.cookie)
  return parseLocale(match?.[1])
}

export default function Header({ theme = "light", locale: localeProp }: HeaderProps) {
  const isDark = theme === "dark"
  const [locale, setLocale] = useState<Locale>(localeProp ?? DEFAULT_LOCALE)
  const nav = getNavCopy(locale)

  useEffect(() => {
    if (localeProp) {
      setLocale(localeProp)
      return
    }
    setLocale(readCookieLocale())
  }, [localeProp])

  return (
    <header className="relative z-50 w-full pt-4 sm:pt-6 md:pt-8">
      <input
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
        tabIndex={-1}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 shadow-sm backdrop-blur-md sm:px-6 sm:py-3",
            isDark ? "border-white/10 bg-white/10 text-white" : "border-gray-200 bg-white/80 text-gray-900",
          )}
        >
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="Layouts360 logo"
              width={28}
              height={28}
              className="rounded-lg sm:h-8 sm:w-8"
              priority
            />
            <span className={cn("text-base font-semibold sm:text-lg", isDark ? "text-white" : "text-gray-900")}>
              Layouts360
            </span>
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-5 text-sm font-medium lg:flex lg:gap-7",
              isDark ? "text-gray-300" : "text-gray-700",
            )}
            aria-label={nav.mainNav}
          >
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[#FFB800]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher locale={locale} theme={theme} label={nav.language} />
            <Link
              href="/contact#demo-form"
              className="rounded-full bg-[#FFB800] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[#E5A600] md:px-6 md:text-base"
            >
              {nav.getStarted}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher locale={locale} theme={theme} label={nav.language} />
            <label
              htmlFor="mobile-nav-toggle"
              className={cn("cursor-pointer p-1", isDark ? "text-white" : "text-gray-900")}
              aria-label={nav.openMenu}
            >
              <Menu className="h-6 w-6" />
            </label>
          </div>
        </div>
      </div>

      <label
        htmlFor="mobile-nav-toggle"
        className="fixed inset-0 z-[60] hidden cursor-pointer bg-black/60 backdrop-blur-sm peer-checked:block md:hidden"
        aria-label={nav.closeMenu}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[80%] max-w-sm translate-x-full flex-col bg-white shadow-2xl transition-transform duration-300 peer-checked:translate-x-0 md:hidden",
        )}
        aria-label={nav.mobileNav}
      >
        <div className="flex items-center justify-between border-b p-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Layouts360 logo" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-semibold text-gray-900">Layouts360</span>
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="cursor-pointer rounded-full p-2 text-gray-500 hover:bg-gray-100"
            aria-label={nav.closeMenu}
          >
            <X className="h-6 w-6" />
          </label>
        </div>

        <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6 text-lg font-medium text-gray-600">
          {nav.links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#FFB800]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t bg-gray-50 p-6">
          <Link
            href="/contact#demo-form"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#FFB800] text-lg font-bold text-black transition-colors hover:bg-[#E5A600]"
          >
            {nav.getStarted}
          </Link>
        </div>
      </aside>
    </header>
  )
}
