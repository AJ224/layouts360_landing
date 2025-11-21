
"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { ArrowRight, Code, Smartphone, Globe, Database, Cloud, Layout } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const services = [
    {
        id: "property-portals",
        title: "Integrated Property Portal",
        description: "A centralized command center for landlords and tenants. Manage leases, maintenance requests, and payments seamlessly from a single, secure dashboard.",
        icon: Layout,
        image: "/services/ui-ux.png", // Placeholder
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
    },
    {
        id: "cloud-infra",
        title: "Enterprise Security",
        description: "Bank-grade security infrastructure ensuring your data is protected. We handle compliance, backups, and scaling so you can focus on growing your real estate portfolio.",
        icon: Cloud,
        image: "/services/cloud.png",
        color: "from-indigo-500 to-blue-500",
        href: "/features/security",
    },
]

const ServiceCard = ({ service, isInView }: { service: typeof services[0], isInView: boolean }) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-center min-h-[60vh] py-10 transition-opacity duration-500",
                isInView ? "opacity-100" : "opacity-30"
            )}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className={cn("p-3 rounded-xl bg-gradient-to-br text-white shadow-lg", service.color)}>
                    <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h3>
            </div>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                {service.description}
            </p>
            <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[#FFB800] hover:text-[#E5A600] transition-colors font-medium text-lg group"
            >
                Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    )
}

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeService, setActiveService] = useState(0)

    // Handle scroll to update active service
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return

            const serviceElements = containerRef.current.querySelectorAll('.service-item')
            const triggerPoint = window.innerHeight * 0.5 // Middle of screen

            serviceElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect()
                if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
                    setActiveService(index)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="bg-black py-24 relative pt-40 md:pt-48 lg:pt-56 z-10" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">Platform Features</h2>
                    <p className="text-gray-400 text-xl max-w-2xl">
                        A complete ecosystem of tools designed to help you build, scale, and maintain your real estate business efficiently.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column: Scrollable Text */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        {services.map((service, index) => (
                            <div key={service.id} className="service-item">
                                <ServiceCard
                                    service={service}
                                    isInView={activeService === index}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Image */}
                    <div className="hidden lg:block w-full lg:w-1/2 order-1 lg:order-2 relative">
                        <div className="sticky top-32 h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{
                                        opacity: activeService === index ? 1 : 0,
                                        scale: activeService === index ? 1 : 0.95,
                                        zIndex: activeService === index ? 10 : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex items-center justify-center p-8"
                                >
                                    {/* Abstract Graphic Representation */}
                                    <div className={cn(
                                        "w-full h-full rounded-2xl bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
                                        service.color
                                    )}>
                                        <div className="absolute inset-0 bg-black/20" />

                                        {/* Decorative Circles */}
                                        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                        <div className="absolute bottom-10 right-10 w-48 h-48 bg-black/20 rounded-full blur-3xl" />

                                        {/* Icon */}
                                        <service.icon className="w-32 h-32 text-white/90 relative z-10 drop-shadow-2xl" />

                                        {/* Text Overlay */}
                                        <div className="absolute bottom-8 left-8 z-10">
                                            <p className="text-white/60 text-sm font-mono uppercase tracking-widest mb-2">Feature 0{index + 1}</p>
                                            <h4 className="text-white text-3xl font-bold">{service.title}</h4>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

