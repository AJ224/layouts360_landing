import type React from "react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Developers",
    role: "Managing Director",
    content: "IdeatoLive transformed our sales process completely. We've seen significant improvements in sales efficiency and our customers love the transparency of the interactive layouts.",
    rating: 5,
    project: "Multiple projects managed"
  },
  {
    name: "Priya Sharma",
    company: "Sharma Builders",
    role: "Sales Director",
    content: "The payment tracking and CRM features have revolutionized how we manage our projects. Our team is more organized and our customers are happier.",
    rating: 5,
    project: "300+ active customers"
  },
  {
    name: "Amit Patel",
    company: "Patel Realty",
    role: "CEO",
    content: "The analytics and reporting features give us insights we never had before. We can now make data-driven decisions and optimize our sales strategy.",
    rating: 5,
    project: "1000+ plots sold"
  },
  {
    name: "Sunita Reddy",
    company: "Reddy Constructions",
    role: "Operations Head",
    content: "Implementation was smooth and the support team is excellent. Our sales team was up and running within a week. Highly recommended for any real estate developer.",
    rating: 5,
    project: "Multiple projects"
  },
  {
    name: "Vikram Singh",
    company: "Singh Developers",
    role: "Founder",
    content: "The document management and customer portal features have reduced our administrative work by 60%. Our customers can access everything they need without calling us.",
    rating: 5,
    project: "200+ satisfied customers"
  },
  {
    name: "Meera Joshi",
    company: "Joshi Builders",
    role: "Sales Manager",
    content: "The marketing automation tools have increased our lead conversion by 35%. The landing pages and email campaigns are professional and effective.",
    rating: 5,
    project: "150+ leads converted"
  }
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          See how real estate developers across India are transforming their business with IdeatoLive
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="space-y-1">
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                <div className="text-xs font-medium text-primary">{testimonial.company}</div>
                <div className="text-xs text-muted-foreground">{testimonial.project}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

    </section>
  )
}