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
    src: "/images/hero-live-layout-map.png",
    alt: "Aerial plotted layout with live color-coded plot inventory",
  },
  interactivePlot: {
    src: "/images/interactive-plot-inventory.png",
    alt: "Interactive plot inventory map on a laptop",
  },
  apartmentFloor: {
    src: "/images/apartment-floor-inventory.png",
    alt: "Apartment project with building floor and unit inventory",
  },
  liveDashboard: {
    src: "/images/live-inventory-dashboard.png",
    alt: "Live inventory dashboard with status and filters",
  },
  floorPlanCloseup: {
    src: "/images/floor-plan-closeup.png",
    alt: "Detailed apartment floor plan for sales inventory",
  },
  beforeAfter: {
    src: "/images/before-after-inventory.png",
    alt: "Before messy PDFs and Excel versus after live inventory on tablet",
  },
  salesWalkthrough: {
    src: "/images/sales-walkthrough.png",
    alt: "Sales team showing interactive layout inventory to buyers",
  },
  multiBuilding: {
    src: "/images/multi-building-towers.png",
    alt: "Multi-building apartment towers with unit inventory highlights",
  },
  productPlatform: {
    src: "/images/product-platform-banner.png",
    alt: "Layouts360 on laptop and phone — projects, inventory, leads, sales, and teams",
  },
  productMobile: {
    src: "/images/product-mobile-dashboard.jpg",
    alt: "Layouts360 mobile app — enquiries, bookings, sold, and payments on one screen",
  },
} as const
