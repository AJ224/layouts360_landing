"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Map,
    Users,
    CreditCard,
    Upload,
    Share2,
    Snowflake,
    MessageSquare,
    Trophy,
    LayoutDashboard,
    Smartphone,
    Globe,
    Settings,
    BarChart3,
    ShieldCheck,
    CircleAlert,
    Clock,
    TrendingDown,
    FileSpreadsheet,
    History,
    ArrowRight,
    Tablet,
    Monitor,
    Calendar
} from "lucide-react"

// --- Section 1: Sound Familiar? ---
export function SoundFamiliarSection() {
    const cards = [
        {
            icon: <CircleAlert className="w-6 h-6 text-rose-500" />,
            title: "Confusion",
            description: "Scattered data across spreadsheets and papers.",
            bg: "bg-rose-50"
        },
        {
            icon: <Clock className="w-6 h-6 text-rose-500" />,
            title: "Slow Follow-ups",
            description: "Leads slip through without timely action.",
            bg: "bg-rose-50"
        },
        {
            icon: <TrendingDown className="w-6 h-6 text-rose-500" />,
            title: "Missed Opportunities",
            description: "No real-time visibility into what's available.",
            bg: "bg-rose-50"
        },
        {
            icon: <FileSpreadsheet className="w-6 h-6 text-rose-500" />,
            title: "Excel Sheet Chaos",
            description: "Multiple versions, conflicting data, & no one knows which sheet is the latest.",
            bg: "bg-rose-50"
        },
        {
            icon: <Users className="w-6 h-6 text-rose-500" />,
            title: "Multiple Customer Handling",
            description: "Showing the same layout to different customers while juggling between papers.",
            bg: "bg-rose-50"
        },
        {
            icon: <History className="w-6 h-6 text-rose-500" />,
            title: "Delayed Updates",
            description: "By the time your layout is updated, another customer is looking at wrong information.",
            bg: "bg-rose-50"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-600 font-medium text-xs tracking-wider uppercase mb-4">
                        The Challenge
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Sound familiar?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {cards.map((card, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
                            <div className={`w-14 h-14 rounded-full ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- Section 2: One System. Complete Control. ---
export function OneSystemSection() {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                    <div className="lg:w-1/2 space-y-6">
                        <span className="text-[#00C29F] font-medium text-sm tracking-wider uppercase">Dashboard</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Replace the Chaos <br />
                            <span className="text-[#00C29F]">with Clarity.</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                            Stop juggling WhatsApp, Excel, and paper maps. Centralize your entire operation with real-time updates across all devices.
                        </p>

                        <ul className="space-y-3 mt-4">
                            {['Live Layout Status', 'Customer Management', 'Team Performance Tracking'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-[#00C29F]/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-[#00C29F]" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-[4/3]">
                            <Image
                                src="/assets/images/DashboardPreview.png"
                                alt="Layouts360 Dashboard Interface"
                                fill
                                className="object-contain bg-slate-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- Section 3: Real Location (Parallax/Satellite) ---
export function RealLocationSection() {
    return (
        <section className="relative py-32 bg-slate-900 overflow-hidden">
            {/* Background Image Placeholder - would be satellite map */}
            <div className="absolute inset-0 bg-[url('/satellite-map-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <Map className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Build Instant Trust with <br />
                    <span className="text-blue-400">Satellite Precision</span>
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-8">
                    Don't just show a drawing. Show the reality. Prove your location's value instantly by showing plots on actual satellite imagery.
                </p>
                <Link href="/features/plot-details" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group">
                    Explore Satellite Features <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    )
}

// --- Section 4: How It Works ---
export function HowItWorksSection() {
    const steps = [
        { icon: <Upload className="w-6 h-6" />, title: "Upload", desc: "Upload layout plan" },
        { icon: <Share2 className="w-6 h-6" />, title: "Share", desc: "Share link with customers" },
        { icon: <Snowflake className="w-6 h-6" />, title: "Freeze", desc: "Freeze/Book plots" },
        { icon: <Users className="w-6 h-6" />, title: "Follow", desc: "Manage Follow-ups" },
        { icon: <Trophy className="w-6 h-6" />, title: "Wins", desc: "Close more deals" },
    ]

    return (
        <section className="py-20 bg-blue-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">Process</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
                        How it works <span className="text-blue-600">for you</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-blue-200 -z-10 border-t-2 border-dashed border-blue-200"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center w-32 md:w-40 relative group">
                            <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex flex-col items-center justify-center gap-2 mb-4 group-hover:-translate-y-2 transition-transform duration-300 border border-blue-50">
                                <div className="nav-icon text-blue-600 bg-blue-50 p-2 rounded-lg">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="font-bold text-slate-900">{step.title}</h3>
                            <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- Section 5: What You Can Manage ---
export function ManagementGridSection() {
    const items = [
        { label: "Enquiries", count: "324", growth: "+12%", color: "text-blue-600", bg: "bg-blue-50", icon: Users },
        { label: "Bookings", count: "89", growth: "+8%", color: "text-emerald-600", bg: "bg-emerald-50", icon: Calendar },
        { label: "Payments", count: "₹2.4Cr", growth: "+24%", color: "text-emerald-600", bg: "bg-emerald-50", icon: CreditCard },
        { label: "Documents", count: "156", growth: "+5%", color: "text-amber-600", bg: "bg-amber-50", icon: FileSpreadsheet },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-medium text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">Dashboard</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900">
                        What you can <span className="text-blue-500">manage</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg">Every aspect of your sales pipeline, in one view</p>
                    <Link href="/features/availability" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium mt-4 transition-colors group">
                        See Management Tools <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    {/* Left: Cards Grid */}
                    <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
                        {items.map((item, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-white shadow-xl shadow-slate-200/50 flex flex-col items-start justify-between aspect-[1.2/1] transition-transform hover:-translate-y-1 duration-300">
                                <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center mb-2`}>
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500 font-medium block mb-1">{item.label}</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-slate-900">{item.count}</span>
                                        <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full">{item.growth}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Feature Graphic/Screenshot */}
                    <div className="w-full md:w-2/3">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-video relative">
                            <Image
                                src="/assets/images/DashboardPreview.png"
                                alt="Management Dashboard"
                                fill
                                className="object-contain bg-slate-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- Section 6: Multiple Layouts ---
export function MultipleLayoutsSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-12">
                    <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">Scalability</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 leading-tight">
                        Multiple layouts,<br />
                        <span className="text-blue-600">one system</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white aspect-[21/9] relative">
                        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                            <span className="text-slate-400 font-medium">Map View of Multiple Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- Section 7: Responsive Showcase ---
export function ResponsiveShowcaseSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-16">
                    <span className="text-[#00C29F] font-medium text-sm tracking-wider uppercase">Accessibility</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">
                        Close deals <br />
                        <span className="text-[#00C29F]">from anywhere</span>
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg mb-8">
                        Whether you're at the site, in the office, or at home. Your inventory is always in your pocket.
                    </p>
                    <Link href="/features/cross-platform" className="inline-flex items-center text-[#00C29F] hover:text-[#00A085] font-medium transition-colors group">
                        View Mobile Capabilities <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="flex flex-row flex-wrap items-end justify-center gap-8 md:gap-16 max-w-6xl mx-auto pb-8">
                    {/* Mobile - Landscape */}
                    <div className="flex flex-col items-center gap-4 transition-transform hover:-translate-y-2 duration-300">
                        <div className="relative w-32 sm:w-40 aspect-[16/9] bg-slate-900 rounded-xl border-[6px] border-slate-900 shadow-xl overflow-hidden transform rotate-0">
                            <Image
                                src="/assets/images/DashboardPreview.png"
                                alt="Mobile Dashboard Landscape"
                                fill
                                className="object-contain bg-[#f3f4f6]"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <Smartphone className="w-4 h-4" />
                            <span>Mobile</span>
                        </div>
                    </div>

                    {/* Tablet - Landscape */}
                    <div className="flex flex-col items-center gap-4 transition-transform hover:-translate-y-2 duration-300">
                        <div className="relative w-48 sm:w-60 aspect-[4/3] bg-slate-900 rounded-2xl border-[8px] border-slate-900 shadow-xl overflow-hidden">
                            <Image
                                src="/assets/images/DashboardPreview.png"
                                alt="Tablet Dashboard Landscape"
                                fill
                                className="object-contain bg-[#f3f4f6]"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <Tablet className="w-4 h-4" />
                            <span>Tablet</span>
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="flex flex-col items-center gap-4 transition-transform hover:-translate-y-2 duration-300">
                        <div className="relative">
                            <div className="w-64 sm:w-96 aspect-[16/10] bg-slate-900 rounded-lg border-[10px] border-slate-900 shadow-2xl overflow-hidden relative z-10">
                                <Image
                                    src="/assets/images/DashboardPreview.png"
                                    alt="Desktop Dashboard View"
                                    fill
                                    className="object-contain bg-[#f3f4f6]"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            {/* Monitor Stand */}
                            <div className="w-24 h-4 bg-slate-800 mx-auto -mt-1 relative z-0 rounded-b-sm"></div>
                            <div className="w-32 h-1.5 bg-slate-700 mx-auto rounded-full shadow-lg"></div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <Monitor className="w-4 h-4" />
                            <span>Desktop</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- Section 8: CTA Footer Top ---
export function CtaSectionNew() {
    return (
        <section className="py-24 bg-[#0B1221] text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,#0B1221_100%)]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur mx-auto flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">P</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's see it in action</h2>
                <p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg">
                    Transform your real estate sales process today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg rounded-full font-bold" asChild>
                        <Link href="/contact">Start for free</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-full font-medium" asChild>
                        <Link href="/contact">Talk to sales</Link>
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-8 mt-12 text-sm text-slate-500 uppercase tracking-widest font-medium">
                    <span>No Credit card</span>
                    <span>•</span>
                    <span>14 Days Trial</span>
                    <span>•</span>
                    <span>Cancel Anytime</span>
                </div>
            </div>
        </section>
    )
}
