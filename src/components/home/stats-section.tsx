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
    <section className="py-20 md:py-24 lg:py-32 bg-texture warm-light overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Our Reach"
          subtitle="Growing one Sunday at a time"
        />

        <div className="mt-12 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <ScaleReveal key={s.label}>
                <ArchCard className="h-full">
                  <ArchCardContent className="flex flex-col items-center justify-center py-8 px-5">
                    <Icon className="h-7 w-7 text-[--accent-brass] mb-4" />
                    <p className="font-heading text-3xl sm:text-4xl md:text-5xl text-[--accent-brass-text] leading-none">
                      <CountUp end={s.value} duration={2} />
                      {s.suffix}
                    </p>
                    <p className="mt-2 text-sm text-[--text-secondary]">{s.label}</p>
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
