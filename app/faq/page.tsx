"use client"

import { Card } from "@/components/ui/card"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"
import { MessageCircle, HelpCircle, ShieldCheck, Zap, Smartphone, Globe, Layers, UserCheck } from "lucide-react"

// Added icons to data structure for "Direct Cards"
const faqs = [
    {
        category: "Basics",
        items: [
            {
                icon: Layers,
                question: "What exactly is Layouts360?",
                answer: "Think of it as a 'Google Maps' for your project. Send a link instead of a PDF. Customers open it, see the layout on satellite maps, and can instantly see if a plot is Available or Sold."
            },
            {
                icon: UserCheck,
                question: "Do I need technical skills?",
                answer: "Zero. If you can use WhatsApp, you can use Layouts360. We designed it for non-technical staff. Marking a plot as 'Booked' takes just two clicks."
            },
            {
                icon: Smartphone,
                question: "Does it work on phone?",
                answer: "Yes! Layouts360 is 'Mobile First'. It works perfectly on iPhone, Android, and Tablets without installing any heavy apps."
            }
        ]
    },
    {
        category: "Daily Usage",
        items: [
            {
                icon: Zap,
                question: "Works with slow internet?",
                answer: "Yes. We optimized it for basic 4G data. It doesn't use heavy data like video, so it loads fast even in remote site locations."
            },
            {
                icon: ShieldCheck,
                question: "Can my staff use it?",
                answer: "Absolutely. You can give your sales team access to 'View' and 'Block' plots, but restrict them from 'Deleting' anything. You have full control."
            },
            {
                icon: Globe,
                question: "Connects to my website?",
                answer: "Yes. Use your project link (layouts360.com/your-project) on your website, Instagram bio, or WhatsApp status."
            }
        ]
    },
    // {
    //     category: "Safety & Money",
    //     items: [
    //         {
    //             icon: ShieldCheck,
    //             question: "Is customer data safe?",
    //             answer: "100%. We use bank-grade encryption. We do not sell, share, or view your customer lists. You deal directly with your buyers."
    //         },
    //         {
    //             icon: HelpCircle,
    //             question: "Why a subscription?",
    //             answer: "Software needs maintenance. Google Maps updates, security patches, and new features (like WhatsApp integration) are added monthly to keep your business running."
    //         },
    //         {
    //             icon: UserCheck,
    //             question: "Can I cancel anytime?",
    //             answer: "Yes. No long-term contracts. If you finish selling your project, simply stop the subscription. No questions asked."
    //         }
    //     ]
    // }
]

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header theme="light" />

            {/* Hero Content */}
            <section className="relative pt-12 pb-6 sm:pb-8 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4" />
                        <span>Support Center</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Common Questions
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Simple answers to help you understand how Layouts360 transforms your real estate business.
                    </p>
                </div>
            </section>

            {/* FAQ Grid */}
            <section className="pt-8 pb-16 md:pt-12 md:pb-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    {faqs.map((group, groupIndex) => (
                        <div key={groupIndex} className="mb-16 last:mb-0">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px bg-slate-200 flex-1"></div>
                                <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest text-sm">
                                    {group.category}
                                </h2>
                                <div className="h-px bg-slate-200 flex-1"></div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.items.map((faq, index) => (
                                    <Card key={index} className="p-6 border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col items-start h-full">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                                            <faq.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                                            {faq.question}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Still have questions? */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Still have doubts?</h3>
                    <p className="text-slate-600 mb-8 text-lg">
                        Sometimes it's easier to just talk. Chat comfortably with our team on WhatsApp.
                    </p>
                    <a
                        href="https://wa.me/917276495199"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-200 hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                    </a>
                </div>
            </section>

            <CtaSection />
            <Footer />
        </div>
    )
}
