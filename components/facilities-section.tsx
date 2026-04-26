import {
  Dumbbell,
  Heart,
  Music,
  Sparkles,
  Users,
  Flame,
  Wind,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const facilities = [
  {
    icon: Dumbbell,
    title: "Free Weights Zone",
    description:
      "Comprehensive selection of dumbbells, barbells, and plate-loaded machines for serious strength training.",
    features: ["Olympic Platforms", "Power Racks", "Competition Benches"],
    highlight: false,
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    description:
      "State-of-the-art treadmills, ellipticals, rowing machines, and bikes with personal entertainment systems.",
    features: ["Smart Equipment", "Heart Rate Monitoring", "Virtual Trails"],
    highlight: false,
  },
  {
    icon: Music,
    title: "Zumba & Yoga Studio",
    description:
      "Dedicated studio space with premium flooring and sound system for group fitness classes.",
    features: ["Daily Classes", "Expert Instructors", "All Levels"],
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Pilates Studio",
    description:
      "Fully equipped Pilates studio with reformers and specialized equipment for core strengthening.",
    features: ["Reformer Machines", "Mat Classes", "Private Sessions"],
    highlight: false,
  },
  {
    icon: Users,
    title: "She Club",
    description:
      "Exclusive women-only training area with dedicated equipment and private atmosphere.",
    features: ["Women Only", "Private Space", "Personal Trainers"],
    highlight: true,
    badge: "Women&apos;s Area",
  },
  {
    icon: Flame,
    title: "Fin Hamami (Sauna)",
    description:
      "Traditional Finnish sauna for post-workout recovery and relaxation.",
    features: ["Authentic Finnish", "Recovery Focus", "Premium Experience"],
    highlight: true,
    badge: "Premium",
  },
  {
    icon: Wind,
    title: "Roll Shape Recovery",
    description:
      "Advanced recovery technology with Roll Shape machines for muscle relaxation and body contouring.",
    features: ["Body Contouring", "Muscle Recovery", "Relaxation"],
    highlight: true,
    badge: "Wellness",
  },
]

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#FF5F00] font-semibold text-sm tracking-widest uppercase">
            Our Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            World-Class <span className="text-[#FF5F00]">Equipment</span> &
            Spaces
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every corner of Yeny Gym is designed to inspire and support your
            fitness journey with premium facilities and equipment.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((facility) => (
            <Card
              key={facility.title}
              className={`bg-card border-border hover:border-[#FF5F00]/50 transition-all duration-300 group ${
                facility.highlight ? "ring-1 ring-[#FF5F00]/20" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-[#FF5F00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF5F00]/20 transition-colors">
                    <facility.icon className="w-7 h-7 text-[#FF5F00]" />
                  </div>
                  {facility.badge && (
                    <Badge
                      variant="outline"
                      className="border-[#FF5F00]/50 text-[#FF5F00]"
                    >
                      {facility.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl mt-4">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {facility.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
