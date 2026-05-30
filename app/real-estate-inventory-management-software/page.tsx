import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Building2, Home, Store } from "lucide-react";
import Header from "@/components/marketing/header";
import Footer from "@/components/marketing/footer";

import { PAGE_KEYWORDS } from "@/lib/seo-keywords";
import { absoluteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
    title: "Real Estate Inventory Management Software | Layouts360",
    description:
        "Real estate inventory management software for plots, flats, and commercial units—live availability, bookings, and one source of truth for Indian developers.",
    keywords: [...PAGE_KEYWORDS.inventory],
    alternates: {
        canonical: absoluteUrl("/real-estate-inventory-management-software"),
    },
    openGraph: {
        title: "Real Estate Inventory Management Software | Layouts360",
        description:
            "Manage your entire real estate inventory - plots, flats, and commercial units - in one powerful platform. Real-time tracking, automated bookings, and sales analytics.",
        type: "website",
        url: absoluteUrl("/real-estate-inventory-management-software"),
    },
};

export default function RealEstateInventoryManagementPage() {
    return (
        <>
            {/* Header */}
            <div className="relative bg-white">
                <Header theme="light" />
            </div>

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-8 pb-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                Trusted by 500+ Developers Across India
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Real Estate Inventory Management Software for Modern Developers
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                Manage your entire <strong>real estate inventory</strong> - plots, flats, villas, and commercial units - in one powerful platform. Real-time tracking, automated bookings, and complete sales visibility.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link href="/contact">
                                    <Button size="lg" className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700">
                                        Get Free Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/pricing">
                                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-indigo-300 text-indigo-700 hover:bg-indigo-50">
                                        View Pricing
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                                <span className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    No credit card required
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    Setup in 3-5 days
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    Unlimited users
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Real Estate Inventory Management */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What is Real Estate Inventory Management Software?
                            </h2>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                <strong>Real estate inventory management software</strong> is a centralized digital platform that helps developers, builders, and real estate companies track and manage their entire property inventory across multiple projects and property types.
                            </p>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Whether you're selling plots, flats, villas, or commercial spaces, a comprehensive <strong>real estate inventory management system</strong> gives you real-time visibility into:
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    'Which units are available, booked, or sold',
                                    'Booking status and payment tracking',
                                    'Sales team performance and lead pipeline',
                                    'Inventory turnover and revenue forecasting',
                                    'Customer information and communication history'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                                        <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Layouts360 is built specifically for the Indian real estate market, understanding the unique needs of developers managing multiple projects, phases, and property types simultaneously.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Property Types Supported */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                                Manage All Property Types in One Platform
                            </h2>
                            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                                From open plots to luxury apartments, Layouts360 handles your entire real estate inventory seamlessly.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                        <Building2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Plots & Layouts</h3>
                                    <p className="text-gray-700 mb-4">
                                        Manage open plots, gated community layouts, and land parcels with interactive satellite maps and real-time availability.
                                    </p>
                                    <Link href="/real-estate-plot-management-software" className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center gap-2">
                                        Learn more about plot management
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                        <Home className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Flats & Apartments</h3>
                                    <p className="text-gray-700 mb-4">
                                        Track apartments across multiple towers, floors, and configurations. Manage 1BHK, 2BHK, 3BHK inventory with ease.
                                    </p>
                                    <span className="text-gray-500 text-sm">Perfect for apartment projects</span>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                        <Store className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Units</h3>
                                    <p className="text-gray-700 mb-4">
                                        Manage shops, offices, showrooms, and warehouses. Track square footage, pricing, and tenant information.
                                    </p>
                                    <span className="text-gray-500 text-sm">Ideal for commercial projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems with Manual Inventory Management */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                The Cost of Manual Inventory Management
                            </h2>
                            <p className="text-lg text-gray-700 mb-8">
                                Still using Excel, WhatsApp groups, and paper records? Here's what it's costing you:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Double Bookings",
                                        description: "Two agents book the same unit because they're working with different Excel files. Result: Angry customers, lost credibility, legal issues.",
                                        cost: "High cost per incident"
                                    },
                                    {
                                        title: "Inventory Confusion",
                                        description: "You don't know which units are actually available right now. Sales agents give wrong information to customers.",
                                        cost: "Lost sales daily"
                                    },
                                    {
                                        title: "Payment Tracking Chaos",
                                        description: "Tracking partial payments, installments, and due dates across hundreds of customers in spreadsheets is error-prone.",
                                        cost: "High annual reconciliation cost"
                                    },
                                    {
                                        title: "No Real-Time Updates",
                                        description: "When a unit is booked, it takes hours or days for everyone to know. Meanwhile, other agents are still showing it.",
                                        cost: "Wasted time & effort"
                                    },
                                    {
                                        title: "Poor Analytics",
                                        description: "You can't easily see which units sell fastest, which agents perform best, or what your inventory turnover is.",
                                        cost: "Missed optimization opportunities"
                                    },
                                    {
                                        title: "Scalability Issues",
                                        description: "Managing one project in Excel is hard. Managing 3-5 projects with different phases? Nearly impossible.",
                                        cost: "Growth bottleneck"
                                    }
                                ].map((problem, i) => (
                                    <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                                                <p className="text-gray-700 mb-2">{problem.description}</p>
                                                <span className="text-sm font-semibold text-red-600">{problem.cost}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl">
                                <p className="text-lg font-semibold text-gray-900 mb-2">
                                    Hidden Annual Cost of Manual Inventory Management: Significant
                                </p>
                                <p className="text-gray-700">
                                    Compare that to a professional system with predictable pricing. The ROI is obvious.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How Layouts360 Solves This */}
                <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                                How Layouts360 Transforms Your Inventory Management
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Single Source of Truth",
                                        description: "All inventory data lives in one centralized, cloud-based database. When a unit is booked, every device updates instantly. No more version control chaos."
                                    },
                                    {
                                        title: "Real-Time Availability Tracking",
                                        description: "Color-coded status (Available/Booked/Sold) updates in real-time across all devices. Your sales team always knows what's available."
                                    },
                                    {
                                        title: "Multi-Project Management",
                                        description: "Manage multiple projects, phases, and property types from one dashboard. Switch between projects instantly."
                                    },
                                    {
                                        title: "Automated Booking Prevention",
                                        description: "System automatically locks a unit when one agent starts the booking process. Impossible to double-book."
                                    },
                                    {
                                        title: "Built-In CRM & Lead Tracking",
                                        description: "Track leads, follow-ups, and customer interactions. Know which agent is handling which customer and which unit they're interested in."
                                    },
                                    {
                                        title: "Payment & Financial Tracking",
                                        description: "Record booking amounts, track installments, set due dates, and generate payment schedules automatically."
                                    },
                                    {
                                        title: "Mobile-First Design",
                                        description: "Field agents can check availability, show units, and close deals on-site using tablets or phones. No need to call the office."
                                    },
                                    {
                                        title: "Powerful Analytics & Reports",
                                        description: "See which units sell fastest, which agents perform best, inventory turnover rates, and revenue forecasts at a glance."
                                    }
                                ].map((solution, i) => (
                                    <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                                <Check className="h-6 w-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                                                <p className="text-gray-700">{solution.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Complete Real Estate Inventory Management Features
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: "📊",
                                        title: "Inventory Dashboard",
                                        description: "See all your inventory at a glance. Available, booked, and sold units across all projects."
                                    },
                                    {
                                        icon: "🗺️",
                                        title: "Interactive Layouts",
                                        description: "Visual representation of your projects with clickable units showing real-time status."
                                    },
                                    {
                                        icon: "🔄",
                                        title: "Real-Time Sync",
                                        description: "Instant updates across all devices. No delays, no confusion, no double bookings."
                                    },
                                    {
                                        icon: "👥",
                                        title: "Lead & Customer CRM",
                                        description: "Track leads, follow-ups, site visits, and customer preferences in one place."
                                    },
                                    {
                                        icon: "💰",
                                        title: "Payment Management",
                                        description: "Record bookings, track installments, send reminders, and generate receipts."
                                    },
                                    {
                                        icon: "📱",
                                        title: "Mobile Access",
                                        description: "Full-featured mobile app for field agents to work from anywhere."
                                    },
                                    {
                                        icon: "📈",
                                        title: "Sales Analytics",
                                        description: "Track sales velocity, agent performance, and revenue forecasts."
                                    },
                                    {
                                        icon: "🔐",
                                        title: "Role-Based Access",
                                        description: "Control who can view, edit, or approve bookings with user permissions."
                                    },
                                    {
                                        icon: "📄",
                                        title: "Document Management",
                                        description: "Store and manage customer documents, agreements, and payment receipts."
                                    }
                                ].map((feature, i) => (
                                    <div key={i} className="bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 transition-colors border border-gray-200">
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Should Use This */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                                Who Needs Real Estate Inventory Management Software?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Plot & Layout Developers",
                                        description: "Managing open plots, gated communities, and land parcels across multiple phases.",
                                        ideal: "50-500+ plots"
                                    },
                                    {
                                        title: "Apartment Builders",
                                        description: "Tracking flats across multiple towers, floors, and configurations (1BHK, 2BHK, 3BHK).",
                                        ideal: "20-200+ units"
                                    },
                                    {
                                        title: "Villa & Row House Developers",
                                        description: "Managing individual villas, row houses, and duplex units in gated communities.",
                                        ideal: "10-100+ villas"
                                    },
                                    {
                                        title: "Commercial Developers",
                                        description: "Tracking shops, offices, showrooms, and warehouses in commercial complexes.",
                                        ideal: "Any size"
                                    },
                                    {
                                        title: "Real Estate Agencies",
                                        description: "Managing inventory for multiple developer clients with exclusive mandates.",
                                        ideal: "Multiple projects"
                                    },
                                    {
                                        title: "Multi-Project Developers",
                                        description: "Running 3+ projects simultaneously with different property types and phases.",
                                        ideal: "Growth stage"
                                    }
                                ].map((audience, i) => (
                                    <div key={i} className="bg-white border-2 border-indigo-200 rounded-xl p-6 hover:border-indigo-400 transition-colors">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
                                        <p className="text-gray-700 mb-3">{audience.description}</p>
                                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                                            Ideal for: {audience.ideal}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Excel vs Inventory Management Software
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-xl shadow-lg">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left p-4 font-semibold text-gray-900">Capability</th>
                                            <th className="text-center p-4 font-semibold text-red-600">Excel / Manual</th>
                                            <th className="text-center p-4 font-semibold text-green-600">Layouts360</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Real-Time Inventory Updates", excel: false, software: true },
                                            { feature: "Prevent Double Bookings", excel: false, software: true },
                                            { feature: "Multi-Project Management", excel: false, software: true },
                                            { feature: "Mobile Access for Field Teams", excel: false, software: true },
                                            { feature: "Automated Payment Tracking", excel: false, software: true },
                                            { feature: "Built-In CRM", excel: false, software: true },
                                            { feature: "Sales Analytics & Reports", excel: false, software: true },
                                            { feature: "Role-Based Permissions", excel: false, software: true },
                                            { feature: "Visual Layouts & Maps", excel: false, software: true },
                                            { feature: "Unlimited Users", excel: true, software: true },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-gray-100">
                                                <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                                                <td className="p-4 text-center">
                                                    {row.excel ? (
                                                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                                                    ) : (
                                                        <X className="h-6 w-6 text-red-500 mx-auto" />
                                                    )}
                                                </td>
                                                <td className="p-4 text-center">
                                                    {row.software ? (
                                                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                                                    ) : (
                                                        <X className="h-6 w-6 text-red-500 mx-auto" />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className="bg-gray-50">
                                            <td className="p-4 font-medium text-gray-900">Annual Cost</td>
                                            <td className="p-4 text-center text-gray-700">
                                                Free<br />
                                                <span className="text-xs text-red-600">(hidden costs)</span>
                                            </td>
                                            <td className="p-4 text-center text-gray-700">
                                                Contact / Enquiry<br />
                                                <span className="text-xs text-green-600">(10x ROI)</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        question: "What is real estate inventory management software?",
                                        answer: "Real estate inventory management software is a digital platform that helps developers and builders track, manage, and sell their property inventory (plots, flats, commercial units) from a centralized system. It provides real-time visibility into availability, bookings, payments, and sales performance."
                                    },
                                    {
                                        question: "Can Layouts360 handle different types of properties?",
                                        answer: "Yes! Layouts360 supports plots, flats, villas, row houses, and commercial units. You can manage multiple property types across different projects from one dashboard."
                                    },
                                    {
                                        question: "How does it prevent double bookings?",
                                        answer: "When an agent starts booking a unit, the system automatically locks it for that transaction. Other agents see it as 'In Progress' and cannot book it. Once confirmed, it updates to 'Booked' instantly across all devices."
                                    },
                                    {
                                        question: "Can I manage multiple projects simultaneously?",
                                        answer: "Absolutely. Layouts360 is designed for developers managing 3-10+ projects. You can switch between projects instantly and get consolidated reports across all projects."
                                    },
                                    {
                                        question: "How long does implementation take?",
                                        answer: "Typically 3-5 days per project. You provide your layout plans and inventory data, we digitize and configure the system, train your team, and you're live. Much faster than building custom software (6+ months)."
                                    },
                                    {
                                        question: "What if I'm already using Excel?",
                                        answer: "We help you migrate. Export your Excel data, and we'll import it into Layouts360. The transition is smooth, and you'll immediately benefit from real-time sync and automation."
                                    },
                                    {
                                        question: "Is there a limit on users or projects?",
                                        answer: "No user limits! Add unlimited sales agents, managers, and team members. Project limits depend on your plan - check our pricing page for details."
                                    },
                                    {
                                        question: "How secure is my data?",
                                        answer: "Very secure. We use industry-standard encryption, secure cloud hosting (AWS/Azure), regular backups, and role-based access control. Your customer data and financial records are protected."
                                    }
                                ].map((faq, i) => (
                                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Transform Your Inventory Management?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Join 500+ developers who've replaced Excel chaos with Layouts360. Get a free demo and see your inventory come to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-indigo-600 hover:bg-gray-100">
                                        Schedule Free Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/pricing">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-indigo-600"
                                    >
                                        View Pricing Plans
                                    </Button>
                                </Link>
                            </div>
                            <p className="mt-8 text-sm opacity-75">
                                No credit card required • Setup in 3-5 days • Cancel anytime
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
