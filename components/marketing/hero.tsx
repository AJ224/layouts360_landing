"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { servicesConfig, type ServiceConfig } from "@/lib/services-config"

const ServiceCard = ({ service, isInView, index }: { service: ServiceConfig, isInView: boolean, index: number }) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-center min-h-[60vh] py-10 transition-opacity duration-500 relative",
                isInView ? "opacity-100" : "opacity-30"
            )}
        >
            {/* Dot on the vertical line - perfectly centered on line */}
            <div className="absolute left-0 top-12 z-10" style={{ transform: 'translateX(-50%)' }}>
                <div className={cn(
                    "relative transition-all duration-500",
                    isInView ? "scale-125" : "scale-100"
                )}>
                    {/* Outer pulsing glow for active state - centered */}
                    {isInView && (
                        <div 
                            className="absolute w-8 h-8 rounded-full bg-[#FFB800]/30 animate-pulse blur-sm"
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                    )}
                    {/* Inner dot - perfectly centered on the line */}
                    <div className={cn(
                        "w-4 h-4 rounded-full border-2 transition-all duration-500",
                        isInView 
                            ? "bg-[#FFB800] border-[#FFB800] shadow-lg shadow-[#FFB800]/60 ring-2 ring-[#FFB800]/30" 
                            : "bg-black/80 border-gray-600/60"
                    )} />
                </div>
            </div>

            {/* Service Content - Centered */}
            <div className="pl-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className={cn("p-3 rounded-xl bg-gradient-to-br text-white shadow-lg", service.color)}>
                        <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white text-center">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto text-center">
                    {service.description}
                </p>
                <div className="flex justify-center">
                    <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-[#FFB800] hover:text-[#E5A600] transition-colors font-medium text-lg group"
                    >
                        Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeService, setActiveService] = useState(0)

    // Handle scroll to update active service
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return

            const serviceElements = containerRef.current.querySelectorAll('.service-item')
            const triggerPoint = window.innerHeight * 0.5

            for (let index = 0; index < serviceElements.length && index < servicesConfig.length; index++) {
                const el = serviceElements[index]
                const rect = el.getBoundingClientRect()
                if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
                    setActiveService(index)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <>
      {/* Hero Section - White Background */}
      <div className="relative min-h-screen bg-white text-gray-900 overflow-visible flex flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/hero-bg.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.05
          }}
        />

        {/* Header */}
        <header className="relative z-50 w-full pt-6 md:pt-8">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-center justify-between rounded-full bg-white/80 border border-gray-200 backdrop-blur-md px-6 py-3 shadow-sm">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="IdeatoLive logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-lg font-semibold text-gray-900">IdeatoLive</span>
              </Link>

              <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex" aria-label="Main">
                <Link href="/features" className="hover:text-[#FFB800] transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="hover:text-[#FFB800] transition-colors">
                  Pricing
                </Link>
                <Link href="/contact" className="hover:text-[#FFB800] transition-colors">
                  Contact
                </Link>
              </nav>

              <div className="hidden md:block">
                <Button asChild className="bg-[#FFB800] hover:bg-[#E5A600] text-black font-bold rounded-full px-6">
                  <Link href="#demo">Get Started</Link>
                </Button>
              </div>

              {/* Mobile Menu Button (Placeholder) */}
              <button className="md:hidden text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <section className="relative z-10 flex-grow flex items-center justify-center px-4 md:px-6 py-20 pb-36 md:pb-44 lg:pb-52">
          <div className="max-w-5xl mx-auto text-center space-y-8">

            {/* Badge/Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 backdrop-blur-sm mb-4 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Transforming Real Estate Management</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 leading-[1.1] md:leading-[1.1]">
              Transform Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
                Real Estate Business
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Comprehensive digital tools for Real Estate Developers. From interactive layouts to payment management, we help you scale efficiently and effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#FFB800] hover:bg-[#E5A600] text-black text-lg font-bold rounded-full px-8 py-7 h-auto min-w-[180px] transition-all hover:scale-105"
                asChild
              >
                <Link href="#demo">
                  Schedule Demo
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-gray-300 hover:bg-gray-50 text-gray-900 text-lg font-medium rounded-full px-8 py-7 h-auto min-w-[180px] backdrop-blur-sm transition-all hover:scale-105"
                asChild
              >
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Floating Video Container - Half in white section, half in black section */}
        <div className="absolute bottom-0 left-0 right-0 z-[60] px-4 md:px-6 pointer-events-none">
          <div className="mx-auto max-w-6xl relative pointer-events-auto">
            <div 
              className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_25px_70px_-12px_rgba(0,0,0,0.25)] bg-white"
              style={{ 
                transform: 'translateY(50%)',
                willChange: 'transform'
              }}
            >
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group cursor-pointer">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FFB800] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <Image
                  src="/herosection.png"
                  alt="Product Demo Video"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  priority
                />

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md border border-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 z-20 shadow-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Watch Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Black Background (Directly after Hero) */}
      <section className="bg-black py-24 relative z-10" ref={containerRef}>
        {/* Spacer for video bottom half - accounts for ~50% of video height (responsive) */}
        <div className="h-48 md:h-56 lg:h-64 xl:h-72" aria-hidden="true" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">Platform Features</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              A complete ecosystem of tools designed to help you build, scale, and maintain your real estate business efficiently.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Column: Scrollable Text */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative pl-12">
              {/* Continuous vertical line connecting all services - refined styling */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px]">
                {/* Base dim line */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 via-gray-700/40 to-gray-800/30" />
                {/* Active progress line - animated */}
                <div 
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FFB800]/40 via-[#FFB800]/60 to-[#FFB800]/40 transition-all duration-700 ease-out"
                  style={{ 
                    height: `${Math.min(((activeService + 1) / servicesConfig.length) * 100, 100)}%`,
                    opacity: 0.8
                  }}
                />
              </div>
              
              {servicesConfig.map((service, index) => (
                <div key={service.id} className="service-item relative">
                  <ServiceCard
                    service={service}
                    isInView={activeService === index}
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Image */}
            <div className="hidden lg:block w-full lg:w-1/2 order-1 lg:order-2 relative">
              <div className="sticky top-32 h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                {servicesConfig.map((service, index) => (
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
                        <p className="text-white/60 text-sm font-mono uppercase tracking-widest mb-2">
                          {service.graphic?.overlay || `Feature ${String(index + 1).padStart(2, '0')}`}
                        </p>
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
    </>
  )
}
