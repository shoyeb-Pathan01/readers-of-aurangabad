"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { ScaleReveal, CountUp } from "@/components/ui/motion-wrapper"
import { BookOpen, Users, Calendar, MapPin } from "lucide-react"

const stats = [
  { icon: Users, label: "Active Members", value: 12, suffix: "+" },
  { icon: Calendar, label: "Sunday Meetups", value: 48, suffix: "+" },
  { icon: BookOpen, label: "Books Discussed", value: 150, suffix: "+" },
  { icon: MapPin, label: "Venues Visited", value: 8, suffix: "" },
]

export function StatsSection() {
  return (
    <section className="py-36 md:py-44 bg-texture warm-light overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Our Reach"
          subtitle="Growing one Sunday at a time"
        />

        <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <ScaleReveal key={s.label}>
                <ArchCard className="h-full">
                  <ArchCardContent className="flex flex-col items-center justify-center py-10 px-6">
                    <Icon className="h-8 w-8 text-[--accent-gold] mb-5" />
                    <p className="font-heading text-4xl sm:text-5xl md:text-6xl text-[--accent-gold] leading-none">
                      <CountUp end={s.value} duration={2.5} />
                      {s.suffix}
                    </p>
                    <p className="mt-3 text-sm sm:text-base text-[--text-secondary]">{s.label}</p>
                  </ArchCardContent>
                </ArchCard>
              </ScaleReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
