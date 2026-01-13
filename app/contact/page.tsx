"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import DemoForm from "@/components/marketing/demo-form"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"
import { motion } from "framer-motion"
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white relative selection:bg-blue-100">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 overflow-hidden z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs sm:text-sm font-medium text-gray-600 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Contact Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 px-4">
              Let's Start a <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Talk to Us
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
              Ready to transform your real estate business? Contact our team for a personalized consultation and discover how Layouts360 can accelerate your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 z-10">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-blue-100 bg-white/80 backdrop-blur-sm group">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Call Us</h3>
                <p className="text-sm sm:text-base text-gray-600">Speak directly with our sales team for immediate assistance.</p>
                <div className="space-y-2 pt-2">
                  <a href="tel:+917276495199" className="block text-base sm:text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    +91 72764 95199
                  </a>
                  <a href="tel:+919595337334" className="block text-base sm:text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    +91 95953 37334
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-green-100 bg-white/80 backdrop-blur-sm group">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">WhatsApp</h3>
                <p className="text-sm sm:text-base text-gray-600">Chat with us for quick responses and instant support.</p>
                <div className="space-y-2 pt-2">
                  <a href="https://wa.me/917276495199" target="_blank" rel="noopener noreferrer" className="block text-base sm:text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors">
                    Chat on WhatsApp
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500">Available 9 AM - 6 PM IST</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section id="demo-form" className="relative py-12 sm:py-16 md:py-20 bg-gray-50/50 border-t border-gray-100 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                See a Free Demo
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                See how Layouts360 works in real life. We will show you how to solve your daily problems.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    title: "Free Consultation",
                    description: "We see how you work now and show you a better way."
                  },
                  {
                    title: "Custom Demo",
                    description: "See our platform in action with your specific use cases and requirements."
                  },
                  {
                    title: "Setup Plan",
                    description: "Get a detailed roadmap for implementing our solutions in your business."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <DemoForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </div>
  )
}
