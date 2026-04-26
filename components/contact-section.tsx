"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: [
      "Adnan Kahveci Mah.",
      "Yavuz Sultan Selim Blv. No:45",
      "Beylikduzu/Istanbul",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+90 533 085 39 43"],
    link: "tel:+905330853943",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Weekdays: 7:00 AM - 11:00 PM", "Weekends: 10:00 AM - 10:00 PM"],
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#FF5F00] font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Start Your <span className="text-[#FF5F00]">Journey</span> Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? Want to book a tour? Reach out to us and our team
            will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-secondary border-border"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-secondary border-border"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+90 5XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-secondary border-border"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-secondary border-border resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    className="w-full bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-black font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>

          {/* Map & Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video bg-secondary relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2147811543986!2d28.6438!3d41.0033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzEyLjAiTiAyOMKwMzgnMzcuNyJF!5e0!3m2!1sen!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yeny Gym Location"
                  className="absolute inset-0"
                />
                {/* Overlay for styling */}
                <div className="absolute inset-0 bg-[#FF5F00]/10 pointer-events-none" />
              </div>
            </Card>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-card border-border">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF5F00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#FF5F00]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) =>
                        info.link ? (
                          <a
                            key={idx}
                            href={info.link}
                            className="text-sm text-muted-foreground hover:text-[#FF5F00] transition-colors block"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
