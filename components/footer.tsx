import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, Instagram, Facebook, Youtube } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#facilities", label: "Facilities" },
  { href: "#pricing", label: "Membership" },
  { href: "#contact", label: "Contact" },
]

const facilities = [
  "Free Weights Zone",
  "Cardio Zone",
  "Zumba & Yoga Studio",
  "Pilates Studio",
  "She Club",
  "Sauna & Recovery",
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-MMoXJqEmRnlG7YAkIEwVSBFnu6s9M4.png"
                alt="Yeny Gym Fitness Club"
                width={220}
                height={80}
                className="h-16 sm:h-20 w-auto brightness-110 mix-blend-lighten"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Premium fitness experience in Beylikduzu, Istanbul. Transform your
              body and mind with world-class equipment and expert guidance.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-[#FF5F00] hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-[#FF5F00] hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-[#FF5F00] hover:text-black transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#FF5F00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Facilities</h4>
            <ul className="space-y-3">
              {facilities.map((facility) => (
                <li key={facility}>
                  <span className="text-sm text-muted-foreground">
                    {facility}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#FF5F00] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Adnan Kahveci Mah., Yavuz Sultan Selim Blv. No:45,
                  Beylikduzu/Istanbul
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#FF5F00] flex-shrink-0" />
                <a
                  href="tel:+905330853943"
                  className="text-sm text-muted-foreground hover:text-[#FF5F00] transition-colors"
                >
                  +90 533 085 39 43
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-[#FF5F00] flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Weekdays: 7:00 AM - 11:00 PM</p>
                  <p>Weekends: 10:00 AM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Yeny Gym Fitness. All rights
              reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Beylikduzu, Istanbul - Turkey
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
