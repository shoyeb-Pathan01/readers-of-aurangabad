import type { Metadata } from "next"
import { MapPin, Clock, Calendar, Users, BookOpen } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldButton } from "@/components/ui/gold-button"

export const metadata: Metadata = {
  title: "Meetups",
  description: "Join Readers of Aurangabad for our Sunday meetups — silent reading, discussion, and community across Aurangabad.",
}

const upcomingMeetups = [
  {
    date: "August 2, 2026",
    time: "7:00 AM – 9:00 AM",
    venue: "Siddharth Garden & Zoo",
    host: "Priya & Rahul",
    agenda: "Silent reading + discussion on 'Stories that shaped us'",
    location: "Siddharth Garden, Aurangabad",
  },
  {
    date: "August 9, 2026",
    time: "7:00 AM – 9:00 AM",
    venue: "Bibi Ka Maqbara Garden",
    host: "Ananya",
    agenda: "Silent reading + poetry sharing session",
    location: "Bibi Ka Maqbara, Aurangabad",
  },
]

const pastMeetups = [
  { date: "July 26, 2026", venue: "Panchakki", topic: "Summer reading picks", host: "Priya" },
  { date: "July 19, 2026", venue: "City Library", topic: "Indian authors we love", host: "Rahul" },
  { date: "July 12, 2026", venue: "Salim Ali Lake", topic: "Nature in literature", host: "Ananya" },
  { date: "July 5, 2026", venue: "Kala Academy", topic: "Art & literature", host: "Vikram" },
  { date: "June 28, 2026", venue: "Prozone Mall", topic: "Quick reads", host: "Neha" },
]

export default function MeetupsPage() {
  return (
    <div className="py-36 md:py-44">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Meetups"
          subtitle="Every Sunday at a new venue across Aurangabad — all are welcome"
        />

        <div className="mt-16 md:mt-20">
          <h3 className="font-heading text-2xl tracking-wide text-[--accent-gold] mb-8">Upcoming Meetups</h3>

          {upcomingMeetups.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {upcomingMeetups.map((meetup) => (
                <ArchCard key={meetup.date} className="h-full">
                  <ArchCardContent className="pt-8 pb-6">
                    <div className="flex items-center gap-2.5 text-sm text-[--accent-gold] mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{meetup.date}</span>
                    </div>
                    <h4 className="font-heading text-2xl tracking-wide text-[--text-primary]">{meetup.venue}</h4>
                    <p className="text-sm text-[--text-secondary] mt-1">{meetup.location}</p>
                    <div className="mt-5 space-y-2.5">
                      <div className="flex items-center gap-2.5 text-sm text-[--text-secondary]">
                        <Clock className="h-4 w-4 shrink-0" />
                        <span>{meetup.time}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-[--text-secondary]">
                        <Users className="h-4 w-4 shrink-0" />
                        <span>Hosted by {meetup.host}</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-sm text-[--text-secondary]">
                        <BookOpen className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{meetup.agenda}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <GoldButton variant="primary" size="md">Register for this Meetup</GoldButton>
                    </div>
                  </ArchCardContent>
                </ArchCard>
              ))}
            </div>
          ) : (
            <div className="rounded-sm border border-[--border-hairline] bg-[--surface-card] p-12 text-center card-shadow-premium">
              <Calendar className="mx-auto h-10 w-10 text-[--accent-gold] mb-4" />
              <p className="text-base text-[--text-secondary]">No upcoming meetups scheduled yet. Check back soon.</p>
            </div>
          )}
        </div>

        <div className="mt-20">
          <h3 className="font-heading text-2xl tracking-wide text-[--text-secondary] mb-8">Past Meetups</h3>
          <div className="space-y-4">
            {pastMeetups.map((meetup, i) => (
              <div
                key={meetup.date}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-sm border border-[--border-hairline] bg-[--surface-card] px-5 py-4 card-shadow-warm"
              >
                <span className="font-heading text-lg text-[--accent-gold] w-28 shrink-0">{meetup.date}</span>
                <span className="text-base text-[--text-primary] font-medium">{meetup.venue}</span>
                <span className="text-[--text-secondary] hidden sm:inline">&middot;</span>
                <span className="text-sm text-[--text-secondary] flex-1">{meetup.topic}</span>
                <span className="text-xs text-[--text-secondary]">Hosted by {meetup.host}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
