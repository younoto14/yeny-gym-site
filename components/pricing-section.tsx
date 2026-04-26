import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    period: "Monthly",
    price: "Monthly Plan",
    description: "Perfect for trying out our facilities",
    features: [
      "Full gym access",
      "Cardio & weight zones",
      "Locker room access",
      "Basic fitness assessment",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    period: "6 Months",
    price: "6-Month Plan",
    description: "Our most popular choice for committed members",
    features: [
      "Everything in Basic",
      "Group fitness classes",
      "She Club access (women)",
      "Sauna access",
      "1 personal training session/month",
      "Priority class booking",
    ],
    popular: true,
    cta: "Best Value",
  },
  {
    name: "Pro",
    period: "Annual",
    price: "Annual Plan",
    description: "The ultimate fitness experience",
    features: [
      "Everything in Standard",
      "Unlimited personal training",
      "Roll Shape recovery access",
      "Nutrition consultation",
      "Guest passes (2/month)",
      "Exclusive member events",
      "Freeze membership option",
    ],
    popular: false,
    cta: "Go Pro",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-card relative overflow-hidden">
      {/* Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5F00] to-transparent" />
      <div className="hidden sm:block absolute top-1/2 right-0 w-64 h-64 bg-[#FF5F00]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#FF5F00] font-semibold text-sm tracking-widest uppercase">
            Membership Plans
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Invest in Your <span className="text-[#FF5F00]">Health</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the membership that fits your lifestyle. All plans include
            access to our premium facilities and supportive community.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-background border-border ${
                plan.popular
                  ? "ring-2 ring-[#FF5F00] md:scale-105 shadow-xl shadow-[#FF5F00]/10"
                  : "hover:border-[#FF5F00]/30"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5F00] text-black font-semibold">
                  <Zap className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {plan.period}
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#FF5F00]">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FF5F00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full font-semibold ${
                    plan.popular
                      ? "bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-black"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Contact us for current pricing and special offers. Corporate and
          family discounts available.
        </p>
      </div>
    </section>
  )
}
