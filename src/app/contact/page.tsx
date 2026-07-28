"use client"

import { Mail, MapPin, Send, Heart } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldButton } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { SocialIcons } from "@/components/ui/social-icons"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Write to Us"
          subtitle="Have a question, a book to recommend, or just want to say hello? We would love to hear from you."
        />

        <div className="mt-12 md:mt-14 grid grid-cols-1 gap-10 lg:gap-14 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[--accent-brass] shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[--text-primary]">Email</p>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-sm text-[--text-secondary] hover:text-[--accent-brass] transition-colors duration-400">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[--accent-brass] shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[--text-primary]">Location</p>
                  <p className="text-sm text-[--text-secondary]">Aurangabad, Maharashtra, India</p>
                </div>
              </div>

              <div className="rounded-sm border border-[--accent-navy]/30 bg-[--surface-card] p-5 card-shadow-warm">
                <h4 className="font-heading text-base tracking-wide text-[--accent-brass-text]">Connect With Us</h4>
                <p className="mt-1 text-xs text-[--text-secondary]">
                  Follow us on social media for the latest updates.
                </p>
                <SocialIcons className="mt-4" />
              </div>

              <div className="border-l-2 border-[--accent-navy]/40 pl-4 py-1">
                <p className="text-xs italic text-[--text-secondary] leading-relaxed">
                  &ldquo;A book is a gift you can open again and again.&rdquo;
                </p>
                <p className="text-xs text-[--accent-brass-text] mt-0.5">&mdash; Readers of Aurangabad</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ArchCard>
              <ArchCardContent className="pt-8 pb-6 px-6">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="h-3.5 w-3.5 text-[--accent-burgundy]" />
                  <h3 className="font-heading text-lg tracking-wide text-[--accent-brass-text]">Send a Letter</h3>
                </div>
                <p className="text-xs text-[--text-secondary] mb-5">
                  Suggest a book, share feedback, or just say hello. We read every message.
                </p>

                {submitted ? (
                  <div className="rounded-sm border border-[--accent-emerald] bg-[--accent-emerald]/8 px-4 py-3 text-sm text-[--accent-emerald] card-shadow-warm">
                    Thank you for your message. We will write back soon.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs text-[--text-secondary] mb-1">Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="w-full rounded-sm border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-brass] focus:outline-none focus:ring-1 focus:ring-[--accent-brass] transition-all duration-400"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs text-[--text-secondary] mb-1">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full rounded-sm border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-brass] focus:outline-none focus:ring-1 focus:ring-[--accent-brass] transition-all duration-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs text-[--text-secondary] mb-1">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        required
                        className="w-full rounded-sm border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-brass] focus:outline-none focus:ring-1 focus:ring-[--accent-brass] transition-all duration-400"
                        placeholder="What is this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs text-[--text-secondary] mb-1">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full rounded-sm border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-brass] focus:outline-none focus:ring-1 focus:ring-[--accent-brass] transition-all duration-400 resize-none"
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
