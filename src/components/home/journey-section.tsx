"use client"

import { Search, Users, BookOpen, MessageCircle } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper"

const steps = [
  { icon: Search, title: "Discover", description: "Find books that speak to you through curated recommendations." },
  { icon: Users, title: "Meet", description: "Join us every Sunday at a new venue across Aurangabad." },
  { icon: BookOpen, title: "Read", description: "Spend an hour in quiet reading among fellow book lovers." },
  { icon: MessageCircle, title: "Reflect", description: "Share thoughts and grow through meaningful conversation." },
]

export function JourneySection() {
  return (
    <section className="py-24 md:py-28 bg-texture bg-wood">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="The Reading Journey"
          subtitle="Discover &rarr; Meet &rarr; Read &rarr; Reflect — a simple rhythm that creates connection."
        />

        <StaggerContainer className="mt-12 md:mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.title}>
                <ArchCard className="h-full text-center group">
                  <ArchCardContent className="flex flex-col items-center pt-8 pb-6">
                    <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[--accent-gold] text-[--accent-gold] transition-all duration-500 group-hover:bg-[--accent-gold] group-hover:text-[--bg-base] group-hover:shadow-[0_0_20px_-4px_var(--accent-gold)]">
                      <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[--accent-gold] text-[10px] text-[--bg-base] font-medium">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl tracking-wide text-[--text-primary] transition-colors duration-400 group-hover:text-[--accent-gold]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[--text-secondary] max-w-xs">
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
