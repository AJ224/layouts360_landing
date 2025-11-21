"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                alt="IdeatoLive logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <span className="text-xl font-bold">IdeatoLive</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Transforming real estate management with innovative digital solutions. Build, scale, and manage with confidence.
                        </p>
                        <div className="flex gap-4">
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
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-[#FFB800] transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-400 hover:text-[#FFB800] transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-[#FFB800] transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-[#FFB800] transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-[#FFB800] transition-colors">Terms of Use</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Features</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/features/property-management" className="text-gray-400 hover:text-[#FFB800] transition-colors">Property Portal</Link>
                            </li>
                            <li>
                                <Link href="/features/mobile-apps" className="text-gray-400 hover:text-[#FFB800] transition-colors">Mobile Apps</Link>
                            </li>
                            <li>
                                <Link href="/features/crm" className="text-gray-400 hover:text-[#FFB800] transition-colors">CRM Integration</Link>
                            </li>
                            <li>
                                <Link href="/features/ai-valuation" className="text-gray-400 hover:text-[#FFB800] transition-colors">AI Valuation</Link>
                            </li>
                            <li>
                                <Link href="/features/security" className="text-gray-400 hover:text-[#FFB800] transition-colors">Security</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-[#FFB800] shrink-0 mt-1" />
                                <span>123 Innovation Drive,<br />Tech Park, Pune 411014</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-[#FFB800] shrink-0" />
                                <a href="mailto:hello@ideatolive.com" className="hover:text-white transition-colors">hello@ideatolive.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-[#FFB800] shrink-0" />
                                <a href="tel:+917276495199" className="hover:text-white transition-colors">+91 72764 95199</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} IdeatoLive. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
