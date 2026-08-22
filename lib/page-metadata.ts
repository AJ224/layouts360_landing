import type { Metadata } from "next"
import { OG_IMAGE } from "@/lib/media"
import { absoluteUrl } from "@/lib/site-url"

export const SITE_NAME = "Layouts360" as const
export const OG_LOCALE = "en_IN" as const

export const DEFAULT_OG_IMAGE = OG_IMAGE

const BRAND_SUFFIX = /\s*\|\s*Layouts360\s*$/i

/** Strip trailing brand so root `%s | Layouts360` template is not duplicated. */
export function stripBrandSuffix(title: string): string {
  return title.replace(BRAND_SUFFIX, "").trim()
}

export function absolutePageTitle(title: string): Metadata["title"] {
  const base = stripBrandSuffix(title)
  return { absolute: `${base} | ${SITE_NAME}` }
}

type BuildPageMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
  robots?: Metadata["robots"]
  /** Full browser title — skips the `%s | Layouts360` template (homepage). */
  titleAbsolute?: boolean
  ogTitle?: string
  ogDescription?: string
  ogType?: "website" | "article"
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  robots,
  titleAbsolute = false,
  ogTitle,
  ogDescription,
  ogType = "website",
}: BuildPageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path)
  const pageTitle = titleAbsolute ? absolutePageTitle(title) : stripBrandSuffix(title)
  const socialTitle = stripBrandSuffix(ogTitle ?? (typeof pageTitle === "string" ? pageTitle : title))
  const socialDescription = ogDescription ?? description

  return {
    title: pageTitle,
    description,
    ...(keywords ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      type: ogType,
      url: canonical,
      siteName: SITE_NAME,
      locale: OG_LOCALE,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
  }
}
