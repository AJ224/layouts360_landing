export type ToolId = "layout-calculator" | "land-converter" | "fsi-calculator"

export type ToolDefinition = {
  id: ToolId
  href: `/${string}`
  title: string
  shortTitle: string
  description: string
  metaDescription: string
  blogSlugs: readonly string[]
}

export const TOOLS: readonly ToolDefinition[] = [
  {
    id: "layout-calculator",
    href: "/tools/layout-calculator",
    title: "Layout yield calculator",
    shortTitle: "Layout yield",
    description: "Land in, saleable plots out—after roads and open space.",
    metaDescription:
      "Free layout yield calculator for Indian developers. Estimate saleable plots from land area after roads, open space, and setbacks.",
    blogSlugs: [
      "start-real-estate-business-digital-layout-management",
      "plot-management-software-india",
      "what-is-real-estate-inventory-management",
      "digital-plot-layouts-buyer-trust",
    ],
  },
  {
    id: "land-converter",
    href: "/tools/land-converter",
    title: "Land area converter",
    shortTitle: "Land converter",
    description: "Sq ft, guntha, acre, cent, sq m, and other Indian plot units.",
    metaDescription:
      "Convert Indian land units—sq ft, guntha, acre, cent, hectare, and gaj. Free land area converter for layout and plot developers.",
    blogSlugs: [
      "plot-management-software-india",
      "farmland-plot-management-software-india",
      "start-real-estate-business-digital-layout-management",
      "excel-vs-plot-management-software",
    ],
  },
  {
    id: "fsi-calculator",
    href: "/tools/fsi-calculator",
    title: "FSI / plot coverage calculator",
    shortTitle: "FSI / coverage",
    description: "Coverage % and FSI used on a plot. Optional local limits.",
    metaDescription:
      "Calculate FSI and plot coverage for Indian layouts. Check built-up area against local limits before planning roads and saleable plots.",
    blogSlugs: [
      "what-is-tdr-real-estate-layout-maps",
      "commercial-plot-inventory-software-india",
      "villa-project-inventory-software-india",
      "apartment-vs-plot-inventory-platform",
    ],
  },
] as const

export const TOOLS_HUB_BLOG_SLUGS = [
  "plot-management-software-india",
  "what-is-tdr-real-estate-layout-maps",
  "start-real-estate-business-digital-layout-management",
  "what-is-real-estate-inventory-management",
] as const

export function getTool(id: ToolId): ToolDefinition {
  const tool = TOOLS.find((item) => item.id === id)
  if (!tool) {
    throw new Error(`Unknown tool: ${id}`)
  }
  return tool
}

export const LAND_CONVERTER_FAQS = [
  {
    question: "How many square feet in 1 guntha?",
    answer:
      "1 guntha is 1,089 sq ft (33 × 33 ft), which is 1/40 of an acre. It is commonly used in Maharashtra, Karnataka, Telangana, and Andhra Pradesh.",
  },
  {
    question: "How many square feet in 1 acre?",
    answer: "1 acre = 43,560 sq ft = 40 guntha = 100 cent.",
  },
  {
    question: "How do I convert square metres to square feet?",
    answer: "Multiply square metres by 10.764. 1 sq m ≈ 10.764 sq ft.",
  },
  {
    question: "How many square feet in 1 square yard (gaj)?",
    answer: "1 square yard (gaj) = 9 sq ft.",
  },
  {
    question: "What is a cent in land measurement?",
    answer: "1 cent is 1/100 of an acre, or 435.6 sq ft. It is widely used in South India.",
  },
  {
    question: "How many acres in 1 hectare?",
    answer: "1 hectare ≈ 2.471 acres, or 10,000 sq m.",
  },
  {
    question: "What is a ground in Tamil Nadu?",
    answer: "1 ground is typically 2,400 sq ft.",
  },
] as const

export const TOOL_SELECT_CLASS =
  "border-input h-11 w-full rounded-md border bg-transparent px-3 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
