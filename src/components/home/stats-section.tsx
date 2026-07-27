"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { ScallopedCorner } from "@/lib/mughal-patterns"
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
    <section className="py-24 md:py-36 bg-texture overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Reach"
          subtitle="Growing one Sunday at a time"
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <ScaleReveal key={s.label}>
                <ArchCard className="h-full">
                  <ArchCardContent className="flex flex-col items-center justify-center py-8 px-4">
                    <Icon className="h-8 w-8 text-[--accent-gold] mb-4" />
                    <p className="font-heading text-3xl sm:text-4xl md:text-5xl text-[--accent-gold]">
                      <CountUp end={s.value} duration={2} />
                      {s.suffix}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-[--text-secondary]">{s.label}</p>
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
