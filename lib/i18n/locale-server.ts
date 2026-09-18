import { cookies } from "next/headers"
import { LOCALE_COOKIE, parseLocale, type Locale } from "@/lib/i18n/locale"

export function getRequestLocale(): Locale {
  return parseLocale(cookies().get(LOCALE_COOKIE)?.value)
}
