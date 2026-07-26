import type { Metadata } from "next"
import { MapPin, Clock, Calendar, Users } from "lucide-react"
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
  },
  {
    date: "August 9, 2026",
    time: "7:00 AM – 9:00 AM",
    venue: "Bibi Ka Maqbara Garden",
    host: "Ananya",
    agenda: "Silent reading + poetry sharing session",
  },
]

const pastMeetups = [
  { date: "July 26, 2026", venue: "Panchakki", topic: "Summer reading picks" },
  { date: "July 19, 2026", venue: "City Library", topic: "Indian authors we love" },
  { date: "July 12, 2026", venue: "Salim Ali Lake", topic: "Nature in literature" },
  { date: "July 5, 2026", venue: "Kala Academy", topic: "Art & literature" },
  { date: "June 28, 2026", venue: "Prozone Mall Food Court", topic: "Quick reads" },
]

export default function MeetupsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Meetups"
          subtitle="Every Sunday at a new venue across Aurangabad — all are welcome"
        />

        <div className="mt-12 space-y-6">
          <h3 className="font-heading text-xl tracking-wide text-[--accent-gold]">Upcoming Meetups</h3>

          {upcomingMeetups.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {upcomingMeetups.map((meetup) => (
                <ArchCard key={meetup.date}>
                  <ArchCardContent className="pt-6">
                    <div className="flex items-center gap-2 text-sm text-[--accent-gold]">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{meetup.date}</span>
                    </div>
                    <h4 className="mt-2 font-heading text-lg tracking-wide text-[--text-primary]">{meetup.venue}</h4>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[--text-secondary]">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{meetup.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[--text-secondary]">
                        <Users className="h-3.5 w-3.5" />
                        <span>Hosted by {meetup.host}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-[--text-secondary]">{meetup.agenda}</p>
                    <div className="mt-4">
                      <GoldButton variant="primary" size="sm">Register for this Meetup</GoldButton>
                    </div>
                  </ArchCardContent>
                </ArchCard>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-[--border-hairline] bg-[--surface-card] p-8 text-center">
              <Calendar className="mx-auto h-8 w-8 text-[--accent-gold] mb-3" />
              <p className="text-sm text-[--text-secondary]">No upcoming meetups scheduled yet. Check back soon!</p>
            </div>
          )}
        </div>

        <div className="mt-16">
          <h3 className="font-heading text-xl tracking-wide text-[--text-secondary] mb-6">Past Meetups</h3>
          <div className="space-y-3">
            {pastMeetups.map((meetup) => (
              <div
                key={meetup.date}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-lg border border-[--border-hairline] bg-[--surface-card] px-4 py-3 text-sm amber-shadow"
              >
                <span className="font-medium text-[--accent-gold]">{meetup.date}</span>
                <span className="text-[--text-primary]">{meetup.venue}</span>
                <span className="text-[--text-secondary] hidden sm:inline">·</span>
                <span className="text-[--text-secondary]">{meetup.topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
