/** Optimized static assets (WebP). Run `node scripts/optimize-images.mjs` after replacing PNG sources. */
export const OG_IMAGE = {
  url: "/herosection.webp",
  width: 1200,
  height: 630,
  alt: "Layouts360 — plot management and inventory management software for real estate developers in India",
} as const

export const DASHBOARD_PREVIEW = "/assets/images/DashboardPreview.webp"

/** Landing page marketing visuals (`public/images`). */
export const LANDING_IMAGES = {
  heroLiveLayout: {
    src: "/images/hero-live-layout-map-ultra.jpg",
    alt: "Aerial plotted layout with live color-coded plot inventory",
  },
  interactivePlot: {
    src: "/images/interactive-plot-inventory.png",
    alt: "Interactive plot inventory map on a laptop",
  },
  apartmentFloor: {
    src: "/images/apartment-floor-inventory.jpg",
    alt: "3D cutaway of a modern three-bedroom flat with living, dining, kitchen, and en-suite bedrooms",
  },
  liveDashboard: {
    src: "/images/live-inventory-dashboard.png",
    alt: "Live inventory dashboard with status and filters",
  },
  floorPlanCloseup: {
    src: "/images/floor-plan-closeup.jpg",
    alt: "Detailed isometric floor plan of a luxury three-bedroom apartment for sales inventory",
  },
  beforeAfter: {
    src: "/images/before-after-inventory.png",
    alt: "Before messy PDFs and Excel versus after live inventory on tablet",
  },
  salesWalkthrough: {
    src: "/images/sales-walkthrough-realistic.jpg",
    alt: "Sales team showing interactive layout inventory to buyers",
  },
  multiBuilding: {
    src: "/images/multi-building-towers.jpg",
    alt: "Modern mid-rise apartment building with glass balconies, wood accents, and landscaped grounds",
  },
  productPlatform: {
    src: "/images/marketing/hero-platform-card.jpg",
    alt: "Layouts360 — Your Real Estate. One Platform. Projects, inventory, leads, sales and teams on desktop and mobile.",
  },
  productMobile: {
    src: "/images/product-mobile-dashboard-new.jpg",
    alt: "Layouts360 mobile app — punch-in, enquiries, bookings, sold, and collections on one screen",
  },
} as const
