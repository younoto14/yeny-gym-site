import { Star, Award, Users, Dumbbell } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Manufacturing-Grade Equipment",
    description:
      "We invest in only the highest quality, commercial-grade fitness equipment built to last and perform.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Our certified professionals bring years of experience to help you achieve your fitness goals safely.",
  },
  {
    icon: Award,
    title: "Premium Facilities",
    description:
      "From our Finnish sauna to dedicated studio spaces, every detail is designed for excellence.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card relative overflow-hidden">
      {/* Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5F00] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-[#FF5F00] font-semibold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Where Excellence Meets{" "}
              <span className="text-[#FF5F00]">Fitness</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Yeny Gym Fitness, we believe that achieving your fitness goals 
              requires more than just equipment—it demands an environment that 
              inspires excellence. Located in the heart of Beylikduzu, Istanbul, 
              we have built a sanctuary for fitness enthusiasts who demand the best.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg mb-8">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FF5F00] text-[#FF5F00]"
                  />
                ))}
                <Star className="w-5 h-5 fill-[#FF5F00]/30 text-[#FF5F00]" />
              </div>
              <div>
                <span className="font-bold text-foreground">4.3</span>
                <span className="text-muted-foreground"> Community Rating</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FF5F00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#FF5F00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square bg-gradient-to-br from-secondary to-background rounded-2xl overflow-hidden relative max-w-md mx-auto lg:max-w-none">
              {/* Placeholder for gym image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-4 sm:mb-6 bg-[#FF5F00]/20 rounded-full flex items-center justify-center">
                    <Dumbbell className="w-12 sm:w-16 h-12 sm:h-16 text-[#FF5F00]" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Premium Training Environment
                  </p>
                </div>
              </div>
              
              {/* Orange accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-[#FF5F00] rounded-2xl -z-10" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-0 sm:-left-6 bg-card border border-border rounded-xl p-3 sm:p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF5F00] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Since 2018</p>
                  <p className="text-xs text-muted-foreground">
                    Serving Beylikduzu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
