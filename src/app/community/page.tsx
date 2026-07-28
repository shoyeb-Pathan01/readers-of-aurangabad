import type { Metadata } from "next"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper"
import { FaqAccordion } from "@/components/ui/faq-accordion"
import { Heart, Globe, BookOpen, Users, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

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
    color: "navy",
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
              <h3 className="font-heading text-2xl tracking-wide text-[--accent-brass-text]">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-[--text-secondary]">
                Readers of Aurangabad was founded with a simple belief: that reading is more powerful when shared. Our mission is to ignite the love for reading in Aurangabad by creating welcoming spaces where people can read together, discuss ideas, and grow as a community.
              </p>
              <p className="mt-4 leading-relaxed text-[--text-secondary]">
                Every Sunday, we gather at a different location across the city. The format is simple: a warm welcome, 45–60 minutes of silent reading, tea and conversation, and a shared discussion about what everyone read.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-[--accent-brass-text]">
                <Sparkles className="h-4 w-4" />
                <span>Joining is free. Everyone is welcome.</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-lg border border-[--border-hairline] bg-[--surface-card] p-6 amber-shadow">
              <h4 className="font-heading text-lg tracking-wide text-[--accent-brass-text]">A Typical Sunday</h4>
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
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[--accent-brass] text-xs text-[--accent-brass-text]">
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
            const accentColor = value.color === "navy" ? "--accent-navy" : "--accent-brass"
            return (
              <StaggerItem key={value.title}>
                <ArchCard className={cn("h-full text-center", value.color === "navy" && "border-t-2 border-t-[--accent-navy]")}>
                  <ArchCardContent className="flex flex-col items-center pt-6">
                    <Icon className="mb-4 h-8 w-8" style={{ color: `var(${accentColor})` }} />
                    <h3 className="font-heading text-lg tracking-wide text-[--text-primary]">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[--text-secondary]">{value.description}</p>
                  </ArchCardContent>
                </ArchCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>

      <section className="py-20 md:py-24 bg-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Meet the Organizers" subtitle="The dedicated team behind Readers of Aurangabad" />
          <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Rahul Deshmukh", role: "Lead Organizer", bio: "Founded the community in Nov 2023 with a vision to bring readers together. Rahul organizes weekly meetups and curates the reading list." },
              { name: "Priya Sharma", role: "Co-Organizer", bio: "Co-hosts Sunday meetups and manages community outreach. Priya ensures every member feels welcome from the moment they walk in." },
              { name: "Ananya Patil", role: "Events Coordinator", bio: "Plans venue logistics and the post-reading discussions. Ananya's enthusiasm makes every meetup feel like a gathering of old friends." },
              { name: "Vikram Mehta", role: "Content Lead", bio: "Manages book recommendations and the community library. Vikram curates our seasonal reading lists." },
              { name: "Neha Kulkarni", role: "Social Media & Design", bio: "Captures meetup moments and runs our online presence. Neha creates the visual identity for the community." },
            ].map((organizer) => (
              <StaggerItem key={organizer.name}>
                <ArchCard className="h-full">
                  <ArchCardContent className="flex flex-col items-center text-center pt-8 px-5 pb-6">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[--accent-brass]/40 bg-[--surface-card] text-xl font-heading text-[--accent-brass-text]">
                      {organizer.name.charAt(0)}
                    </div>
                    <h3 className="font-heading text-lg tracking-wide text-[--text-primary]">{organizer.name}</h3>
                    <p className="mt-1 font-script text-base text-[--accent-brass-text]" style={{ transform: "rotate(-1deg)" }}>{organizer.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">{organizer.bio}</p>
                  </ArchCardContent>
                </ArchCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know about our community" />
          <FaqAccordion />
        </div>
      </section>
    </div>
  )
}
