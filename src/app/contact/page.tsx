"use client"

import { Mail, MapPin, Send, Heart } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldButton } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="py-36 md:py-44">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Write to Us"
          subtitle="Have a question, a book to recommend, or just want to say hello? We would love to hear from you."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 text-[--accent-gold] shrink-0" />
                <div>
                  <p className="text-base font-medium text-[--text-primary]">Email</p>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-base text-[--text-secondary] hover:text-[--accent-gold] transition-colors duration-400">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-[--accent-gold] shrink-0" />
                <div>
                  <p className="text-base font-medium text-[--text-primary]">Location</p>
                  <p className="text-base text-[--text-secondary]">Aurangabad, Maharashtra, India</p>
                </div>
              </div>

              <div className="rounded-sm border border-[--border-hairline] bg-[--surface-card] p-6 card-shadow-warm">
                <h4 className="font-heading text-lg tracking-wide text-[--accent-gold]">Connect With Us</h4>
                <p className="mt-2 text-sm text-[--text-secondary]">
                  Follow us on Instagram or join our WhatsApp group for the latest updates.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border border-[--border-hairline] px-5 py-2.5 text-sm text-[--accent-gold] hover:bg-[--accent-gold] hover:text-[--bg-base] transition-all duration-400"
                  >
                    Instagram
                  </a>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border border-[--border-hairline] px-5 py-2.5 text-sm text-[--accent-gold] hover:bg-[--accent-gold] hover:text-[--bg-base] transition-all duration-400"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={SOCIAL_LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border border-[--border-hairline] px-5 py-2.5 text-sm text-[--accent-gold] hover:bg-[--accent-gold] hover:text-[--bg-base] transition-all duration-400"
                  >
                    Telegram
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-[--accent-gold]/30 pl-5 py-2">
                <p className="text-sm italic text-[--text-secondary] leading-relaxed">
                  &ldquo;A book is a gift you can open again and again.&rdquo;
                </p>
                <p className="text-xs text-[--accent-gold] mt-1">&mdash; Readers of Aurangabad</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ArchCard>
              <ArchCardContent className="pt-8 pb-7 px-6 md:px-7">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="h-4 w-4 text-[--accent-burgundy]" />
                  <h3 className="font-heading text-xl tracking-wide text-[--accent-gold]">Send a Letter</h3>
                </div>
                <p className="text-sm text-[--text-secondary] mb-6">
                  Suggest a book, share feedback, or just say hello. We read every message.
                </p>

                {submitted ? (
                  <div className="rounded-sm border border-[--accent-forest] bg-[--accent-forest]/8 px-5 py-4 text-sm text-[--accent-forest] card-shadow-warm">
                    Thank you for your message. We will write back soon.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm text-[--text-secondary] mb-1.5">Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="w-full rounded-sm border border-[--border-hairline] bg-[--bg-base] px-4 py-2.5 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold] transition-all duration-400"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-[--text-secondary] mb-1.5">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full rounded-sm border border-[--border-hairline] bg-[--bg-base] px-4 py-2.5 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold] transition-all duration-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm text-[--text-secondary] mb-1.5">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        required
                        className="w-full rounded-sm border border-[--border-hairline] bg-[--bg-base] px-4 py-2.5 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold] transition-all duration-400"
                        placeholder="What is this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm text-[--text-secondary] mb-1.5">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full rounded-sm border border-[--border-hairline] bg-[--bg-base] px-4 py-2.5 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold] transition-all duration-400 resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <GoldButton type="submit" className="w-full">
                      <Send className="h-4 w-4" />
                      Send Message
                    </GoldButton>
                  </form>
                )}
              </ArchCardContent>
            </ArchCard>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
