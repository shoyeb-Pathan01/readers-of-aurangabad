"use client"

import { Quote } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { ScallopedCorner } from "@/lib/mughal-patterns"
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper"

const testimonials = [
  {
    name: "Priya Sharma",
    quote: "Readers of Aurangabad rekindled my love for reading. The Sunday meetups have become the highlight of my week &mdash; the quiet reading hour, the tea, the conversations. It&rsquo;s like finding your tribe.",
    role: "Member since 2024",
  },
  {
    name: "Rahul Deshmukh",
    quote: "I came for the books but stayed for the people. This community is proof that reading doesn&rsquo;t have to be a solitary act. Every discussion opens a new window into perspectives I&rsquo;d never considered.",
    role: "Member since 2023",
  },
  {
    name: "Ananya Patil",
    quote: "As someone who struggled to finish books, the structured reading time changed everything. The non-judgmental space, the diverse choices &mdash; it&rsquo;s a book club that actually works.",
    role: "Member since 2024",
  },
]

export function TestimonialSection() {
  return (
    <section className="bg-[--bg-alt] py-24 md:py-36 bg-texture bg-wood">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Voices from the Community"
          subtitle="What our members say about their experience"
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <ArchCard className="relative h-full">
                <ScallopedCorner className="top-2 right-2 text-[--accent-gold]" />
                <ArchCardContent className="pt-8 pb-6">
                  <Quote className="mb-4 h-8 w-8 text-[--accent-gold] opacity-30" />
                  <p className="font-quote text-sm leading-relaxed italic text-[--text-secondary]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-[--border-hairline] pt-4">
                    <p className="text-sm font-medium text-[--text-primary]">{t.name}</p>
                    <p className="text-xs text-[--text-secondary]">{t.role}</p>
                  </div>
                </ArchCardContent>
              </ArchCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
