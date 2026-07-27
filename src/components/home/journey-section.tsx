"use client"

import { Search, Users, BookOpen, MessageCircle, ArrowRight } from "lucide-react"
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
    <section className="py-24 md:py-36 bg-texture">
      <div className="vignette" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Reading Journey"
          subtitle="Discover → Meet → Read → Reflect — a simple rhythm that creates connection"
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.title}>
                <ArchCard className="h-full text-center group">
                  <ArchCardContent className="flex flex-col items-center pt-8 pb-6">
                    <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[--accent-gold] text-[--accent-gold] transition-all duration-500 group-hover:bg-[--accent-gold] group-hover:text-[--bg-base] group-hover:scale-105 group-hover:shadow-[0_0_20px_-4px_var(--accent-gold)]">
                      <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[--accent-gold] text-[10px] text-[--bg-base] font-medium">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl tracking-wide text-[--text-primary] transition-colors duration-300 group-hover:text-[--accent-gold]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
                      {step.description}
                    </p>
                    <ArrowRight className="mt-4 h-4 w-4 text-[--accent-gold] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
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
