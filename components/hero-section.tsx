import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-black" />
      
      {/* Geometric accent - hidden on small screens for performance */}
      <div className="hidden sm:block absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF5F00]/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-1/4 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#FF5F00]/5 rounded-full blur-2xl" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#FF5F00 1px, transparent 1px), linear-gradient(90deg, #FF5F00 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-[#FF5F00] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-[#FF5F00] font-medium">
              Premium Fitness in Beylikduzu
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-foreground">START YOUR</span>
            <br />
            <span className="text-[#FF5F00]">TRANSFORMATION</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Experience the pinnacle of fitness at Yeny Gym. Manufacturing-grade 
            equipment, expert trainers, and a community that pushes you to excel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
            >
              <Link href="#pricing">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border hover:border-[#FF5F00] hover:text-[#FF5F00] font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
            >
              <Link href="#facilities">
                <Play className="w-5 h-5 mr-2" />
                Explore Facilities
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 max-w-3xl mx-auto px-2">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF5F00]">4.3</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Star Rating</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">1000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small mobile */}
      <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#FF5F00] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
