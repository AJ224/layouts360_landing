"use client"

export default function Stats() {
    return (
        <section className="py-20 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-6xl font-bold text-[#FFB800]">10+</h3>
                        <p className="text-gray-400 font-medium">Years of Innovation</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-6xl font-bold text-[#FFB800]">100+</h3>
                        <p className="text-gray-400 font-medium">Projects Powered</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-6xl font-bold text-[#FFB800]">50+</h3>
                        <p className="text-gray-400 font-medium">Enterprise Clients</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-6xl font-bold text-[#FFB800]">98%</h3>
                        <p className="text-gray-400 font-medium">Client Retention</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
