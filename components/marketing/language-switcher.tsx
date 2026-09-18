"use client"

import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/locale"

type LanguageSwitcherProps = Readonly<{
  locale: Locale
  theme?: "light" | "dark"
  label: string
  className?: string
}>

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`
}

function optionClass(active: boolean, isDark: boolean) {
  if (active) {
    return isDark ? "bg-white text-slate-900" : "bg-white text-slate-900 shadow-sm"
  }
  return isDark ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-gray-900"
}

export function LanguageSwitcher({
  locale,
  theme = "light",
  label,
  className,
}: LanguageSwitcherProps) {
  const router = useRouter()
  const isDark = theme === "dark"

  function switchTo(next: Locale) {
    if (next === locale) return
    setLocaleCookie(next)
    document.documentElement.lang = next === "hi" ? "hi-IN" : "en-IN"
    router.refresh()
  }

  return (
    <div
      aria-label={label}
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 text-xs font-semibold",
        isDark ? "border-white/20 bg-white/10" : "border-gray-200 bg-gray-50",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-pressed={locale === "en"}
        className={cn("rounded-full px-2.5 py-1 transition-colors", optionClass(locale === "en", isDark))}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchTo("hi")}
        aria-pressed={locale === "hi"}
        className={cn("rounded-full px-2.5 py-1 transition-colors", optionClass(locale === "hi", isDark))}
      >
        हिं
      </button>
    </div>
  )
}
