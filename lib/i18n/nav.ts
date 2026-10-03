import type { Locale } from "@/lib/i18n/locale"

export type NavCopy = {
  links: { href: string; label: string }[]
  getStarted: string
  openMenu: string
  closeMenu: string
  mainNav: string
  mobileNav: string
  language: string
}

const NAV: Record<Locale, NavCopy> = {
  en: {
    links: [
      { href: "/", label: "Home" },
      { href: "/solutions", label: "Solutions" },
      { href: "/features", label: "Features" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    getStarted: "Get Started",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
    mobileNav: "Mobile navigation",
    language: "Language",
  },
  hi: {
    links: [
      { href: "/", label: "होम" },
      { href: "/solutions", label: "सॉल्यूशन्स" },
      { href: "/features", label: "फीचर्स" },
      { href: "/blog", label: "ब्लॉग" },
      { href: "/contact", label: "संपर्क" },
    ],
    getStarted: "शुरू करें",
    openMenu: "मेनू खोलें",
    closeMenu: "मेनू बंद करें",
    mainNav: "मुख्य नेविगेशन",
    mobileNav: "मोबाइल नेविगेशन",
    language: "भाषा",
  },
}

export function getNavCopy(locale: Locale): NavCopy {
  return NAV[locale]
}
