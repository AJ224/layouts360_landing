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
  icon: LucideIcon
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
    id: "property-portals",
    title: "Integrated Property Portal",
    description: "A centralized command center for landlords and tenants. Manage leases, maintenance requests, and payments seamlessly from a single, secure dashboard.",
    icon: Layout,
    image: "/services/ui-ux.png",
    color: "from-pink-500 to-rose-500",
    href: "/features/property-management",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Suite",
    description: "Native iOS and Android applications that keep your stakeholders connected. Enable real-time notifications, digital document signing, and community engagement on the go.",
    icon: Smartphone,
    image: "/services/mobile.png",
    color: "from-blue-500 to-cyan-500",
    href: "/features/mobile-apps",
  },
  {
    id: "crm",
    title: "Built-in CRM",
    description: "A specialized Real Estate CRM to manage leads, track sales pipelines, and automate follow-ups. Directly integrated with your property listings for seamless sales operations.",
    icon: Database,
    image: "/services/web.png",
    color: "from-emerald-500 to-green-500",
    href: "/features/crm",
  },
  {
    id: "ai-valuation",
    title: "AI-Powered Valuation",
    description: "Leverage advanced algorithms to estimate property values based on real-time market trends and historical data. Empower your pricing strategy with data-driven insights.",
    icon: Code,
    image: "/services/ai.png",
    color: "from-purple-500 to-violet-500",
    href: "/features/ai-valuation",
  },
  {
    id: "virtual-tours",
    title: "Virtual Tour Integration",
    description: "Support for immersive 3D walkthroughs and AR experiences. Allow potential buyers to explore properties remotely, increasing engagement and qualifying leads faster.",
    icon: Globe,
    image: "/services/data.png",
    color: "from-orange-500 to-amber-500",
    href: "/features/virtual-tours",
  }
] as const

