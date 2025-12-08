"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HeaderProps {
    theme?: "light" | "dark"
}

export default function Header({ theme = "light" }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const isDark = theme === "dark"

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <header className="relative z-50 w-full pt-6 md:pt-8">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className={cn(
                    "flex items-center justify-between rounded-full px-6 py-3 shadow-sm backdrop-blur-md border",
                    isDark
                        ? "bg-white/10 border-white/10 text-white"
                        : "bg-white/80 border-gray-200 text-gray-900"
                )}>
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Layouts360 logo"
                            width={32}
                            height={32}
                            className="rounded-lg"
                        />
                        <span className={cn("text-lg font-semibold", isDark ? "text-white" : "text-gray-900")}>
                            Layouts360
                        </span>
                    </Link>

                    <nav className={cn(
                        "hidden items-center gap-8 text-sm font-medium md:flex",
                        isDark ? "text-gray-300" : "text-gray-700"
                    )} aria-label="Main">
                        <Link href="/" className="hover:text-[#FFB800] transition-colors">
                            Home
                        </Link>
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
                            <Link href="/contact#demo-form">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn("md:hidden p-1", isDark ? "text-white" : "text-gray-900")}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-2xl z-[70] md:hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b">
                                <Link href="/" className="flex items-center gap-3" onClick={toggleMenu}>
                                    <Image
                                        src="/logo.png"
                                        alt="Layouts360 logo"
                                        width={32}
                                        height={32}
                                        className="rounded-lg"
                                    />
                                    <span className="text-lg font-semibold text-gray-900">
                                        Layouts360
                                    </span>
                                </Link>
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-6 px-6">
                                <nav className="flex flex-col gap-6 text-lg font-medium text-gray-600">
                                    <Link
                                        href="/"
                                        className="hover:text-[#FFB800] transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/features"
                                        className="hover:text-[#FFB800] transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        Features
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        className="hover:text-[#FFB800] transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        Pricing
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="hover:text-[#FFB800] transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        Contact
                                    </Link>
                                </nav>
                            </div>

                            <div className="p-6 border-t bg-gray-50">
                                <Button asChild className="w-full bg-[#FFB800] hover:bg-[#E5A600] text-black font-bold rounded-full h-12 text-lg">
                                    <Link href="/contact#demo-form" onClick={toggleMenu}>Get Started</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
