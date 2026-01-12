"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16 justify-between">
                    {/* Brand Column */}
                    <div className="space-y-4 sm:space-y-6 max-w-sm">
                        <Link href="/" className="flex items-center gap-2 sm:gap-3">
                            <Image
                                src="/logo.png"
                                alt="Layouts360 logo"
                                width={32}
                                height={32}
                                className="rounded-lg sm:w-10 sm:h-10"
                            />
                            <span className="text-lg sm:text-xl font-bold">Layouts360</span>
                        </Link>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            Transforming real estate management with innovative digital solutions. Build, scale, and manage with confidence.
                        </p>
                        {/* <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#FFB800] hover:text-black transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#FFB800] hover:text-black transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#FFB800] hover:text-black transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#FFB800] hover:text-black transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div> */}
                    </div>

                    {/* Features Column */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-base sm:text-lg font-semibold text-white">Features</h3>
                        <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                            <li><Link href="/features/availability" className="hover:text-[#FFB800] transition-colors">Real-Time Availability</Link></li>
                            <li><Link href="/features/plot-details" className="hover:text-[#FFB800] transition-colors">Digital Plot Cards</Link></li>
                            <li><Link href="/features/gallery" className="hover:text-[#FFB800] transition-colors">Interactive Gallery</Link></li>
                            <li><Link href="/features/cross-platform" className="hover:text-[#FFB800] transition-colors">Mobile Sales App</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:text-right">
                        <div className="flex flex-wrap justify-start md:justify-end gap-6 mb-6 text-sm font-medium text-gray-400">
                            <Link href="/" className="hover:text-[#FFB800] transition-colors">Home</Link>
                            <Link href="/pricing" className="hover:text-[#FFB800] transition-colors">Pricing</Link>
                            <Link href="/blog" className="hover:text-[#FFB800] transition-colors">Blog</Link>
                            <Link href="/contact" className="hover:text-[#FFB800] transition-colors">Contact</Link>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h3>
                        <ul className="space-y-4 sm:space-y-6 inline-block text-left md:text-right">
                            <li className="flex md:flex-row-reverse items-start gap-3 text-sm sm:text-base text-gray-400">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB800] shrink-0 mt-1" />
                                <span>Pune 411014</span>
                            </li>
                            {/* <li className="flex md:flex-row-reverse items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-[#FFB800] shrink-0" />
                                <a href="mailto:hello@layouts360.com" className="hover:text-white transition-colors">hello@layouts360.com</a>
                            </li> */}
                            <li className="flex md:flex-row-reverse items-center gap-3 text-sm sm:text-base text-gray-400">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB800] shrink-0" />
                                <a href="tel:+917276495199" className="hover:text-white transition-colors">+91 72764 95199</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Layouts360. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
                        <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
