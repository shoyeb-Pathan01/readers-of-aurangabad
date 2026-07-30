"use client"

import { ArrowRight, Heart } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { IwanGateway } from "@/lib/mughal-patterns"
import { GoldLink } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"

export function CTASection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <IwanGateway className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <Heart className="mx-auto h-10 w-10 text-[--accent-brass] animate-glow-pulse mb-6" />
          <SectionHeader
            title="Ready to Join Us?"
            subtitle="Bring a book, bring a friend (or just yourself). Tea and conversations are on us."
            className="mb-8"
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldLink href="/meetups" variant="primary" size="lg">
              Find the Next Meetup
              <ArrowRight className="ml-2 h-4 w-4" />
            </GoldLink>
            <GoldLink href="/contact" variant="secondary" size="lg">
              Say Hello
            </GoldLink>
          </div>
        </FadeIn>
      </IwanGateway>
    </section>
  )
}
