"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useId, useState } from "react"
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
  const [locale, setLocale] = useState<Locale>(localeProp ?? DEFAULT_LOCALE)
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = getNavCopy(locale)
  const menuId = useId()

  useEffect(() => {
    if (localeProp) {
      setLocale(localeProp)
      return
    }
    setLocale(readCookieLocale())
  }, [localeProp])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="relative z-50 w-full pt-4 sm:pt-6 md:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-white/10 px-4 py-2.5 text-white shadow-sm backdrop-blur-md sm:px-6 sm:py-3",
            theme === "dark" ? "bg-white/10" : "bg-slate-950/90",
          )}
        >
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo-horizontal-on-dark.svg"
              alt="Layouts360"
              width={220}
              height={27}
              className="h-6 w-auto sm:h-7"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-5 text-sm font-medium text-gray-300 lg:flex lg:gap-7"
            aria-label={nav.mainNav}
          >
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[#FFB800]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher locale={locale} theme="dark" label={nav.language} />
            <Link
              href="/contact#demo-form"
              className="rounded-full bg-[#FFB800] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[#E5A600] md:px-6 md:text-base"
            >
              {nav.getStarted}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher locale={locale} theme="dark" label={nav.language} />
            <button
              type="button"
              className="rounded-md p-1 text-white"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
          aria-label={nav.closeMenu}
          onClick={closeMenu}
        />
      ) : null}

      <aside
        id={menuId}
        hidden={!menuOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[80%] max-w-sm flex-col bg-white shadow-2xl md:hidden",
          menuOpen ? "flex" : "hidden",
        )}
        aria-label={nav.mobileNav}
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-slate-950 p-6">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo-horizontal-on-dark.svg"
              alt="Layouts360"
              width={220}
              height={27}
              className="h-7 w-auto"
            />
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white"
            aria-label={nav.closeMenu}
            onClick={closeMenu}
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6 text-lg font-medium text-gray-600">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#FFB800]"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t bg-gray-50 p-6">
          <Link
            href="/contact#demo-form"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#FFB800] text-lg font-bold text-black transition-colors hover:bg-[#E5A600]"
            onClick={closeMenu}
          >
            {nav.getStarted}
          </Link>
        </div>
      </aside>
    </header>
  )
}
