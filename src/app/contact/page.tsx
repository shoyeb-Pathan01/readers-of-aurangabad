"use client"

import { Mail, MapPin, Send } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldButton } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contact Us"
          subtitle="Have a question, suggestion, or want to collaborate? We would love to hear from you."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-[--accent-gold]" />
                <div>
                  <p className="text-sm font-medium text-[--text-primary]">Email</p>
                  <p className="text-sm text-[--text-secondary]">hello@readersofaurangabad.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[--accent-gold]" />
                <div>
                  <p className="text-sm font-medium text-[--text-primary]">Location</p>
                  <p className="text-sm text-[--text-secondary]">Aurangabad, Maharashtra, India</p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-[--border-hairline] bg-[--surface-card] p-5 amber-shadow">
                <h4 className="font-heading text-base tracking-wide text-[--accent-gold]">Connect With Us</h4>
                <p className="mt-2 text-sm text-[--text-secondary]">
                  Follow us on Instagram or join our WhatsApp group for the latest updates and discussions.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://instagram.com/readersofaurangabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-[--border-hairline] px-4 py-2 text-xs text-[--accent-gold] hover:bg-[--accent-gold] hover:text-[--bg-base] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://chat.whatsapp.com/readersofaurangabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-[--border-hairline] px-4 py-2 text-xs text-[--accent-gold] hover:bg-[--accent-gold] hover:text-[--bg-base] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ArchCard>
              <ArchCardContent className="pt-8">
                <h3 className="font-heading text-lg tracking-wide text-[--accent-gold]">Send a Message</h3>
                <p className="mt-1 text-sm text-[--text-secondary]">
                  Suggest a book, share feedback, or just say hello.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-md border border-[--accent-forest] bg-[--accent-forest]/10 px-4 py-3 text-sm text-[--accent-forest]">
                    Thank you! Your message has been received. We will get back to you soon.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                    className="mt-6 space-y-4"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm text-[--text-secondary] mb-1">Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold]"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-[--text-secondary] mb-1">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm text-[--text-secondary] mb-1">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        required
                        className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold]"
                        placeholder="What is this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm text-[--text-secondary] mb-1">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold] resize-none"
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
