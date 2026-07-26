"use client"

import { Mail, MapPin, Calendar, Send } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldButton } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { useState } from "react"

export function CTASection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeIn>
            <div>
              <SectionHeader
                title="Ready to Join?"
                subtitle="No membership fees. No barriers. Just bring a book and an open mind."
                className="items-start text-left"
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 text-[--accent-gold]" />
                  <div>
                    <p className="text-sm font-medium text-[--text-primary]">Every Sunday</p>
                    <p className="text-sm text-[--text-secondary]">Different venue across Aurangabad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-[--accent-gold]" />
                  <div>
                    <p className="text-sm font-medium text-[--text-primary]">Venues vary weekly</p>
                    <p className="text-sm text-[--text-secondary]">Check our Meetups page for the next location</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-[--accent-gold]" />
                  <div>
                    <p className="text-sm font-medium text-[--text-primary]">Get in touch</p>
                    <p className="text-sm text-[--text-secondary]">hello@readersofaurangabad.in</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ArchCard className="w-full">
              <ArchCardContent className="pt-8">
                <h3 className="font-heading text-lg tracking-wide text-[--accent-gold]">
                  Stay Updated
                </h3>
                <p className="mt-1 text-sm text-[--text-secondary]">
                  Drop your email to receive updates about upcoming meetups and events.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-md border border-[--accent-forest] bg-[--accent-forest]/10 px-4 py-3 text-sm text-[--accent-forest]">
                    Thank you! You are now part of the Readers of Aurangabad community.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <label htmlFor="cta-name" className="block text-sm text-[--text-secondary] mb-1">Name</label>
                      <input
                        id="cta-name"
                        type="text"
                        required
                        className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-email" className="block text-sm text-[--text-secondary] mb-1">Email</label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold]"
                        placeholder="your@email.com"
                      />
                    </div>
                    <GoldButton type="submit" className="w-full group">
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      Subscribe
                    </GoldButton>
                  </form>
                )}
              </ArchCardContent>
            </ArchCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
