"use client"

import { Quote } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper"
import { HeartDoodle } from "@/lib/mughal-patterns"

const testimonials = [
  {
    name: "Priya Sharma",
    quote: "Readers of Aurangabad rekindled my love for reading. The Sunday meetups have become the highlight of my week — the quiet reading hour, the tea, the conversations. It&rsquo;s like finding your tribe.",
    role: "Member since 2024",
  },
  {
    name: "Rahul Deshmukh",
    quote: "I came for the books but stayed for the people. This community proves that reading need not be solitary. Every discussion opens a new window into perspectives I&rsquo;d never considered.",
    role: "Member since 2023",
  },
  {
    name: "Ananya Patil",
    quote: "As someone who struggled to finish books, the structured reading time changed everything. The non-judgmental space and the diverse choices — it&rsquo;s a book club that actually works.",
    role: "Member since 2024",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-texture bg-wood">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Voices from the Community"
          subtitle="What our members say about their experience"
        />

        <StaggerContainer className="mt-12 md:mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <ArchCard className="relative h-full" torn>
                <ArchCardContent className="pt-8 pb-6">
                  <HeartDoodle className="mb-3 h-6 w-6 text-[--accent-burgundy]" />
                  <p className="font-script text-lg leading-relaxed text-[--text-primary]" style={{ transform: "rotate(-0.5deg)" }}>
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
