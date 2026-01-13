"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import PricingCards from "@/components/pricing/pricing-cards"
import PricingCalculator from "@/components/pricing/pricing-calculator"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"
import { motion } from "framer-motion"

const faqs = [
    {
        question: "How does subscription pricing work?",
        answer: "Starts at ₹4,000/month. Save 20% on yearly plans. Everything included."
    },
    {
        question: "What's the plot pricing?",
        answer: "₹10,000 for 150 plots. ₹100 per extra plot. Pay once for setup."
    },
    {
        question: "Do I need my own domain?",
        answer: "No. You can use our link. If you want your own .com name, we can do it for ₹6,000/month."
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes. Upgrade or modify anytime with prorated billing. Contact support for assistance."
    }
]

export default function PricingPageContent() {
    return (
        <div className="min-h-screen bg-white relative selection:bg-blue-100">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
            </div>

            {/* Header */}
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
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Best Value for Money
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 px-4">
                            Make Profit from <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Day One
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
                            Software that pays for itself. Manage your entire layout for less than the cost of a few site visits.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <PricingCards />
                </motion.div>
            </section>

            {/* Pricing Calculator */}
            <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 bg-gray-50/50 border-y border-gray-100">
                <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">See Your Total Cost</h2>
                    <p className="text-base sm:text-lg text-gray-600">Check how much you need to invest.</p>
                </div>
                <div className="max-w-2xl mx-auto px-4">
                    <PricingCalculator />
                </div>
            </section>


            {/* FAQ Section */}
            <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 md:py-24">
                <div className="text-center mb-12 sm:mb-16 px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4 text-gray-900">Frequently Asked Questions</h2>
                    <p className="text-base sm:text-lg text-gray-600">Quick answers to common questions about our pricing and plans.</p>
                </div>

                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border-gray-100 hover:border-blue-100 bg-white">
                                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-900">{faq.question}</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <CtaSection />

            {/* Footer */}
            <Footer />
        </div>
    )
}
