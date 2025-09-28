import DemoForm from "@/components/marketing/demo-form"

export default function CTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm lg:mx-0 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Ready to Scale Your Real Estate Business?
            </h2>
            <p className="text-base text-white/90 leading-relaxed mb-6">
              Transform your real estate business with our enterprise-grade solutions. 
              Get a personalized demo and discover how IdeatoLive can accelerate your growth.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Professional Real Estate Solutions
              </div>
              <p className="text-white/70 text-sm">
                Or call us directly at{" "}
                <a className="text-white font-semibold hover:text-white/80 transition-colors" href="tel:+917276495199">
                  +91 72764 95199
                </a>{" "}
                or{" "}
                <a className="text-white font-semibold hover:text-white/80 transition-colors" href="tel:+919595337334">
                  +91 95953 37334
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center lg:justify-end">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  )
}
