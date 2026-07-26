"use client"

import { Search, Users, BookOpen, MessageCircle } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper"

const steps = [
  { icon: Search, title: "Discover", description: "Find books that speak to you through curated recommendations from our community." },
  { icon: Users, title: "Meet", description: "Join us every Sunday at a new venue across Aurangabad for silent reading and discussion." },
  { icon: BookOpen, title: "Read", description: "Spend 45–60 minutes in quiet reading, surrounded by fellow book lovers." },
  { icon: MessageCircle, title: "Reflect", description: "Share thoughts, exchange ideas, and grow through meaningful conversation over tea." },
]

export function JourneySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Reading Journey"
          subtitle="Discover → Meet → Read → Reflect — a simple rhythm that creates connection"
        />

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.title}>
                <ArchCard className="h-full text-center">
                  <ArchCardContent className="flex flex-col items-center pt-6">
                    <div className="group flex h-14 w-14 items-center justify-center rounded-full border border-[--accent-gold] text-[--accent-gold] transition-all duration-300 hover:bg-[--accent-gold] hover:text-[--bg-base] hover:scale-105">
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg tracking-wide text-[--text-primary]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[--text-secondary]">
                      {step.description}
                    </p>
                  </ArchCardContent>
                </ArchCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
