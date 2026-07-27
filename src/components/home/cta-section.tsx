"use client"

import { ArrowRight, Heart } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { IwanGateway } from "@/lib/mughal-patterns"
import { GoldLink } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"

export function CTASection() {
  return (
    <section className="relative py-32 md:py-44 bg-texture overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[--bg-base]/0 via-[--accent-gold]/[0.02] to-[--bg-base]/0" />
      <div className="light-rays" />

      <IwanGateway className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <FadeIn>
          <Heart className="mx-auto h-12 w-12 text-[--accent-gold] animate-glow-pulse mb-6" />
          <SectionHeader
            title="Ready to Join Us?"
            subtitle="Bring a book, bring a friend (or just yourself). Tea and conversations are on us."
            className="mb-10"
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
