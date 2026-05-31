import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Metadata } from "next"
import {
  ALL_LANDING_PAGE_KEYS,
  LANDING_PAGE_PATHS,
  landingSlugFromPageKey,
  landingSlugFromPath,
} from "@/lib/landing-page-keys"
import type { SeoLandingPageKey } from "@/lib/seo-landing-pages"
import { absoluteUrl } from "@/lib/site-url"
import type { LandingMdxDocument, LandingMdxFrontmatter } from "@/types/landing-mdx"

const landingsDirectory = path.join(process.cwd(), "content/landings")

function parseLandingFile(slug: string, fileContents: string): LandingMdxDocument {
  const { data, content } = matter(fileContents)
  const fm = data as LandingMdxFrontmatter
  return {
    slug,
    content,
    ...fm,
  }
}

export function getAllLandings(): LandingMdxDocument[] {
  if (!fs.existsSync(landingsDirectory)) {
    return []
  }

  return fs
    .readdirSync(landingsDirectory)
    .filter((name) => name.endsWith(".mdx") && !name.startsWith("_"))
    .map((name) => {
      const slug = name.replace(/\.mdx$/, "")
      const fullPath = path.join(landingsDirectory, name)
      return parseLandingFile(slug, fs.readFileSync(fullPath, "utf8"))
    })
}

export function getLandingByPageKey(pageKey: SeoLandingPageKey): LandingMdxDocument | undefined {
  const slug = landingSlugFromPageKey(pageKey)
  const fullPath = path.join(landingsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    return undefined
  }
  return parseLandingFile(slug, fs.readFileSync(fullPath, "utf8"))
}

export function getLandingByPath(pathname: string): LandingMdxDocument | undefined {
  const slug = landingSlugFromPath(pathname)
  const fullPath = path.join(landingsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    return undefined
  }
  return parseLandingFile(slug, fs.readFileSync(fullPath, "utf8"))
}

export function landingExists(pageKey: SeoLandingPageKey): boolean {
  return fs.existsSync(path.join(landingsDirectory, `${landingSlugFromPageKey(pageKey)}.mdx`))
}

export function createLandingMetadata(pageKey: SeoLandingPageKey): Metadata {
  const landing = getLandingByPageKey(pageKey)
  if (!landing) {
    throw new Error(`Missing landing MDX for pageKey: ${pageKey}`)
  }

  return {
    title: landing.title,
    description: landing.description,
    keywords: [...landing.keywords],
    alternates: { canonical: absoluteUrl(landing.path) },
    openGraph: {
      title: landing.ogTitle,
      description: landing.ogDescription,
      type: "website",
      url: absoluteUrl(landing.path),
    },
  }
}

export function getLandingPageKeysWithMdx(): SeoLandingPageKey[] {
  return ALL_LANDING_PAGE_KEYS.filter(landingExists)
}

export { LANDING_PAGE_PATHS }
