"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Header from "@/components/marketing/header"
import { cn } from "@/lib/utils"
import { servicesConfig, type ServiceConfig } from "@/lib/services-config"

const ServiceCard = ({ service, isInView, index }: { service: ServiceConfig, isInView: boolean, index: number }) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center min-h-[50vh] sm:min-h-[60vh] py-6 sm:py-8 md:py-10 transition-opacity duration-500 relative pl-0 sm:pl-4 md:pl-8 lg:pl-12", // Hide padding on mobile, show line only on larger screens
        isInView ? "opacity-100" : "opacity-30"
      )}
    >
      {/* Service Content */}
      <div className="flex flex-col gap-4 sm:gap-6 items-start text-left w-full">
        {/* Numbering */}
        <span className="text-blue-500 font-mono text-base sm:text-lg md:text-xl font-medium tracking-wider">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight w-full">
          {service.title}
        </h3>

        {/* Description - Hidden on mobile */}
        <p className="hidden md:block text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-md">
          {service.description}
        </p>

        {/* Mobile Image - Visible only on mobile */}
        <div className="block md:hidden w-full aspect-[504/331] rounded-xl overflow-hidden relative my-6">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-contain rounded-xl"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-xl`} />
          )}
        </div>

        {/* Button */}
        <div className="pt-2 sm:pt-3 md:pt-4">
          <Link
            href={service.href}
            className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-sm sm:text-base rounded-full border border-gray-700 text-white font-medium transition-all hover:bg-white hover:text-black hover:border-white group w-full sm:w-auto"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeService, setActiveService] = useState(0)

  const videoRef = useRef<HTMLDivElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVideoPlaying(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Header */}
        <Header theme="light" />

        {/* Hero Content */}
        <section className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 pb-24 sm:pb-32 md:pb-36 lg:pb-44 xl:pb-52">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Badge/Tagline */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs sm:text-sm font-medium text-gray-600 mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse"></span>
                Transforming Real Estate Management
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1] px-4">
                Transform Your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Real Estate Business
                </span>
              </h1>

              {/* Subheadline */}
              <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
                Comprehensive digital tools for Real Estate Developers. From interactive layouts to payment management, we help you scale efficiently and effortlessly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4">
                <Button
                  size="lg"
                  className="bg-[#FFB800] hover:bg-[#E5A600] text-black text-base sm:text-lg font-bold rounded-full px-6 sm:px-8 py-5 sm:py-6 md:py-7 h-auto w-full sm:w-auto min-w-[160px] sm:min-w-[180px] transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/contact#demo-form">
                    Schedule Demo
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-gray-300 hover:bg-gray-50 text-gray-900 text-base sm:text-lg font-medium rounded-full px-6 sm:px-8 py-5 sm:py-6 md:py-7 h-auto w-full sm:w-auto min-w-[160px] sm:min-w-[180px] backdrop-blur-sm transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating Video Container - Half in white section, half in black section */}
        <div className="absolute bottom-0 left-0 right-0 z-[60] px-4 sm:px-6 pointer-events-none">
          <div className="mx-auto max-w-6xl relative pointer-events-auto">
            <div
              className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_25px_70px_-12px_rgba(0,0,0,0.25)] bg-white"
              style={{
                transform: 'translateY(50%)',
                willChange: 'transform'
              }}
            >
              {/* Video Placeholder */}
              <div
                ref={videoRef}
                className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group cursor-pointer overflow-hidden"
                onClick={() => setIsVideoPlaying(true)}
              >
                {isVideoPlaying ? (
                  <video
                    src="https://dulkwtst6l5u22jl.public.blob.vercel-storage.com/Export%20Video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onLoadedMetadata={(e) => e.currentTarget.playbackRate = 0.7}
                  />
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section - Black Background (Directly after Hero) */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 relative z-10" ref={containerRef}>
        {/* Spacer for video bottom half - accounts for ~50% of video height (responsive) */}
        <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72" aria-hidden="true" />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 sm:mb-6 px-4">Platform Features</h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
              A complete ecosystem of tools designed to help you build, scale, and maintain your real estate business efficiently.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Column: Scrollable Text */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative pl-0 sm:pl-4 md:pl-8 lg:pl-12">
              {/* Continuous vertical line connecting all services - hidden on mobile */}
              <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800">
                {/* Active progress line - animated */}
                <div
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800 transition-all duration-700 ease-out"
                  style={{
                    height: `${Math.min(((activeService + 1) / servicesConfig.length) * 100, 100)}%`,
                    opacity: 0.5
                  }}
                />
                {/* Sticky Dot Indicator */}
                <div className="sticky top-[278px] left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20" />
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
              <div className="sticky top-32 w-full max-w-[504px] h-[331px] rounded-3xl overflow-hidden mx-auto">
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
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Service Image */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={504}
                          height={331}
                          className="object-contain w-full h-full"
                          priority={index === 0}
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${service.color}`} />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}
