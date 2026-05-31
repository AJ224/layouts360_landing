export interface LandingHeading {
  id: string
  title: string
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/\*\*/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function extractLandingHeadings(content: string): LandingHeading[] {
  const headings: LandingHeading[] = []

  for (const line of content.split("\n")) {
    const match = /^##\s+(.+)$/.exec(line.trim())
    if (!match) continue
    const title = match[1].replace(/\*\*/g, "").trim()
    headings.push({ id: slugifyHeading(title), title })
  }

  return headings
}

export function estimateLandingReadingTime(content: string, faqCount: number): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const faqWords = faqCount * 40
  return Math.max(1, Math.ceil((words + faqWords) / 200))
}

export const LANDING_PLATFORM_LINKS = [
  { href: "/real-estate-plot-management-software", label: "Plot management" },
  { href: "/real-estate-inventory-management-software", label: "Inventory" },
  { href: "/real-estate-crm-software", label: "CRM" },
  { href: "/real-estate-booking-management-software", label: "Bookings" },
  { href: "/real-estate-accounting-software", label: "Payments" },
  { href: "/real-estate-channel-partner-management-software", label: "Channel partners" },
] as const
