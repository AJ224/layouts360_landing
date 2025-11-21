import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Calendar,
  Lock,
  CreditCard,
  MessageSquare,
  LayoutGrid,
  MapPin,
  ShoppingCart,
  BookOpen,
  RefreshCw,
  FileText,
  UserCircle,
  BarChart3,
  CheckCircle2,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Customer Management",
    description: "Comprehensive CRM system for managing customer relationships",
  },
  {
    icon: Calendar,
    title: "Booking Management",
    description: "Schedule and manage bookings efficiently",
  },
  {
    icon: Lock,
    title: "Plot Freezing",
    description: "Temporarily reserve plots for customers",
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    description: "Track payments, installments, and financial transactions",
  },
  {
    icon: MessageSquare,
    title: "Customer Enquiry",
    description: "Handle and respond to customer inquiries",
  },
  {
    icon: LayoutGrid,
    title: "Plot Inventory Management & Bulk Entry",
    description: "Manage plot inventory with bulk import capabilities",
  },
  {
    icon: MapPin,
    title: "Raise Plot Enquiry from Digital Layout",
    description: "Create enquiries directly from interactive layout maps",
  },
  {
    icon: BarChart3,
    title: "Customer-Facing Interactive Digital Layout",
    description: "Interactive layout viewer for customers",
  },
  {
    icon: ShoppingCart,
    title: "Sales Desk & PoS",
    description: "Point of sale system for in-person transactions",
  },
  {
    icon: BookOpen,
    title: "Bookings, Booked Plots & Customers Management",
    description: "Comprehensive booking and customer tracking system",
  },
  {
    icon: RefreshCw,
    title: "Auto Release Blocked Inventory",
    description: "Automatically release blocked plots after timeout",
  },
  {
    icon: FileText,
    title: "Payments, Attachments, Installments",
    description: "Manage payments with document attachments and installment plans",
  },
  {
    icon: UserCircle,
    title: "Customer Login Portal",
    description: "Self-service portal for customers to view their bookings",
  },
  {
    icon: BarChart3,
    title: "Project Dashboard",
    description: "Real-time analytics and insights for your projects",
  },
]

export default function PricingFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          With Platform Fee You Get
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive features included in your subscription to help you manage your real estate business efficiently
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-12 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800 p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-semibold">All Features Included</h3>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every feature listed above is included in your platform subscription. No hidden costs, no per-feature charges.
        </p>
      </div>
    </section>
  )
}

