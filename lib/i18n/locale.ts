export const LOCALE_COOKIE = "layouts360_locale"
export const LOCALES = ["en", "hi"] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = "en"

export function parseLocale(value: string | undefined | null): Locale {
  return value === "hi" ? "hi" : "en"
}

export function localeHtmlLang(locale: Locale): string {
  return locale === "hi" ? "hi-IN" : "en-IN"
}
