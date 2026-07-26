"use client"

import { Users, BookOpen, MessageCircle, MapPin } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "@/components/ui/motion-wrapper"

const stats = [
  { icon: Users, value: 120, label: "Active Members", suffix: "+" },
  { icon: BookOpen, value: 250, label: "Books Discussed", suffix: "+" },
  { icon: MessageCircle, value: 48, label: "Meetups Held", suffix: "" },
  { icon: MapPin, value: 15, label: "Venues Visited", suffix: "+" },
]

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="jali-bg">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Community in Numbers"
            subtitle="A growing movement of readers in Aurangabad"
          />

          <StaggerContainer className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <StaggerItem key={stat.label}>
                  <div className="flex flex-col items-center rounded-lg border border-[--border-hairline] bg-[--surface-card] px-4 py-8 amber-shadow">
                    <Icon className="mb-3 h-6 w-6 text-[--accent-gold]" />
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      className="font-heading text-3xl tracking-wider text-[--accent-gold] sm:text-4xl"
                    />
                    <p className="mt-1 text-sm text-[--text-secondary]">{stat.label}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
