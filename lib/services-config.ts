/**
 * Services Configuration
 * 
 * This file contains all service/feature-related configuration that can be easily updated.
 * Add, remove, or modify services by editing this config file.
 * 
 * To add a new service:
 * 1. Import the icon from lucide-react (or use an existing one)
 * 2. Add a new object to the servicesConfig array below
 * 3. Provide: id, title, description, icon, color, href
 * 
 * Optional fields:
 * - image: Path to an image file (if different from default)
 * - graphic.overlay: Custom text for the right side graphic overlay
 */

import { Layout, Smartphone, Database, Code, Globe, Cloud, type LucideIcon } from "lucide-react"

export interface ServiceConfig {
  id: string
  title: string
  description: string
  longDescription?: string
  benefits?: string[]
  /** Extra paragraphs for SEO depth on feature detail pages */
  extendedCopy?: string[]
  image?: string
  color: string // Tailwind gradient class (e.g., "from-pink-500 to-rose-500")
  href: string
  graphic?: {
    // Optional custom graphic configuration for right side
    overlay?: string // Overlay text like "FEATURE 01" (defaults to "Feature 01", "Feature 02", etc.)
  }
}

export const servicesConfig: ServiceConfig[] = [
  {
    id: "plot-details",
    title: "Plot Details on Tap",
    description: "Instantly access comprehensive details for every plot. From dimensions to pricing, get all the critical information you need with a single tap.",
    longDescription: "Empower your sales team and clients with instant access to granular plot data. No more shuffling through paper maps or static PDFs. Our interactive plot details system provides a wealth of information at your fingertips, ensuring transparency and speeding up the decision-making process.",
    benefits: [
      "Instant access to:",
      "Dimensions",
      "Facing",
      "Area Details"
    ],
    extendedCopy: [
      "Buyers and agents tap a plot on your digital layout and see dimensions, facing, area, and current status without opening a PDF or calling the back office. That speed matters on site visits when decisions are made in minutes.",
      "Plot details stay synced with inventory: when a unit moves from available to blocked or sold, the plot card updates for everyone—sales, partners, and customer-facing layout links.",
    ],
    image: "/assets/images/plotdetailsontap.webp",
    color: "from-pink-500 to-rose-500",
    href: "/features/plot-details",
  },
  {
    id: "availability",
    title: "Real-Time Availability",
    description: "Never miss a sale due to outdated information. View live availability status for all your properties, color-coded for instant clarity.",
    longDescription: "Eliminate double-bookings and confusion with our centralized real-time availability engine. As soon as a unit is booked or blocked, the status updates instantly across all devices and platforms. This single source of truth is essential for high-velocity sales teams and large-scale launches.",
    benefits: [
      "Live color-coded status (Available, Blocked, Sold)",
      "Instant synchronization across all sales channels",
      "Size wise filtering"
    ],
    extendedCopy: [
      "Real-time availability is the difference between a confident site visit and an awkward callback. Color-coded plots on your layout show what is open, on hold, or sold so agents never promise the same unit twice.",
      "Status changes propagate instantly to mobile apps, office dashboards, and shared customer links—critical during launch weekends when multiple brokers sell the same phase.",
    ],
    image: "/assets/images/availabilitystatus.webp",
    color: "from-emerald-500 to-green-500",
    href: "/features/availability",
  },
  {
    id: "gallery",
    title: "Immersive Gallery",
    description: "Showcase your properties in their best light. High-resolution image galleries and media integration to captivate potential buyers.",
    longDescription: "A picture is worth a thousand words, and in real estate, it's worth millions in revenue. Our immersive gallery features allow you to present high-fidelity visuals, walkthroughs, and lifestyle imagery that create an emotional connection with potential buyers before they even visit the site.",
    benefits: [
      "High-resolution photo rendering with zoom capabilities",
      "Integrated video player for walkthroughs and drone shots",
      "360-degree panoramic view support",
      "Categorized albums for amenities, interiors, and exteriors"
    ],
    extendedCopy: [
      "High-quality visuals help NRIs and out-of-town buyers evaluate a layout before travelling. Group photos and videos by amenity, phase, or interior type so agents send the right story for each buyer segment.",
      "Gallery content sits alongside live plot data, so marketing and sales stay aligned—no outdated brochure claiming availability that no longer exists.",
    ],
    image: "/assets/images/gallery.webp",
    color: "from-purple-500 to-violet-500",
    href: "/features/gallery",
  },
  {
    id: "cross-platform",
    title: "All-Screen Support",
    description: "A seamless experience across all devices. Whether on a desktop, tablet, or mobile, your property management tools are always optimized and ready.",
    longDescription: "Your business doesn't stop when you leave the office. Our platform is built with a mobile-first philosophy, ensuring that every feature—from inventory management to customer presentations—works flawlessly on smartphones, tablets, and large touchscreens. Deliver a premium experience anywhere, anytime.",
    benefits: [
      "Responsive design optimized for all screen sizes",
      "Touch-friendly interface for tablets and kiosks",
      "Consistent experience across iOS, Android, and Web",
    ],
    extendedCopy: [
      "Sales happen on phones at the site office, on tablets during partner meetings, and on desktops at HQ. Layouts360 keeps layout, CRM, and inventory usable on every screen size without a separate native app project.",
      "Touch-friendly controls help agents zoom plots, block units, and log follow-ups during walkthroughs—without pinching through a PDF designed for print.",
    ],
    image: "/assets/images/allscreensupport.webp",
    color: "from-blue-500 to-cyan-500",
    href: "/features/cross-platform",
  }
] as const

