import type { Metadata } from "next"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper"
import { Heart, Globe, BookOpen, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Community",
  description: "Learn about the Readers of Aurangabad community — our mission, values, and how to join.",
}

const values = [
  {
    icon: Heart,
    title: "Open to All",
    description: "No boundaries of religion, language, age, gender, profession or educational background. Everyone is welcome.",
  },
  {
    icon: Globe,
    title: "Diverse Perspectives",
    description: "We celebrate the richness that different backgrounds bring to our discussions and book choices.",
  },
  {
    icon: BookOpen,
    title: "Love for Reading",
    description: "Whether you are an avid reader or just starting, our community supports your reading journey.",
  },
  {
    icon: Users,
    title: "Meaningful Connection",
    description: "Beyond books, we build genuine friendships and a sense of belonging in Aurangabad.",
  },
]

export default function CommunityPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Community"
          subtitle="An open reading community based in Aurangabad — igniting the love for reading, one Sunday at a time"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div>
              <h3 className="font-heading text-2xl tracking-wide text-[--accent-gold]">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-[--text-secondary]">
                Readers of Aurangabad was founded with a simple belief: that reading is more powerful when shared. Our mission is to ignite the love for reading in Aurangabad by creating welcoming spaces where people can read together, discuss ideas, and grow as a community.
              </p>
              <p className="mt-4 leading-relaxed text-[--text-secondary]">
                Every Sunday, we gather at a different location across the city. The format is simple: a warm welcome, 45–60 minutes of silent reading, tea and conversation, and a shared discussion about what everyone read.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-[--accent-gold]">
                <Sparkles className="h-4 w-4" />
                <span>Joining is free. Everyone is welcome.</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-lg border border-[--border-hairline] bg-[--surface-card] p-6 amber-shadow">
              <h4 className="font-heading text-lg tracking-wide text-[--accent-gold]">A Typical Sunday</h4>
              <ol className="mt-4 space-y-3">
                {[
                  "Welcome & introduction",
                  "Silent reading (~45–60 minutes)",
                  "Tea/Coffee break",
                  "Discussion about what everyone read",
                  "Sharing experiences and ideas",
                  "Group photographs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[--text-secondary]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[--accent-gold] text-xs text-[--accent-gold]">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <StaggerItem key={value.title}>
                <ArchCard className="h-full text-center">
                  <ArchCardContent className="flex flex-col items-center pt-6">
                    <Icon className="mb-4 h-8 w-8 text-[--accent-gold]" />
                    <h3 className="font-heading text-lg tracking-wide text-[--text-primary]">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[--text-secondary]">{value.description}</p>
                  </ArchCardContent>
                </ArchCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </div>
  )
}
