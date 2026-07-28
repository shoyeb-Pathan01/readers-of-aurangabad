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
    <div className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Meetups"
          subtitle="Every Sunday at a new venue across Aurangabad — all are welcome"
        />

        <div className="mt-12 md:mt-14">
          <h3 className="font-heading text-xl tracking-wide text-[--accent-brass-text] mb-6">Upcoming Meetups</h3>

          {upcomingMeetups.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {upcomingMeetups.map((meetup) => (
                <ArchCard key={meetup.date} className="h-full group border-l-2 border-l-[--accent-navy]">
                  <ArchCardContent className="pt-8 pb-6">
                    <div className="flex items-center gap-2 text-sm text-[--accent-brass-text] mb-3">
                      <Calendar className="h-4 w-4 transition-transform duration-400 group-hover:scale-110" />
                      <span className="font-medium">{meetup.date}</span>
                    </div>
                    <h4 className="font-heading text-xl tracking-wide text-[--text-primary]">{meetup.venue}</h4>
                    <p className="text-sm text-[--text-secondary] mt-1">{meetup.location}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-[--text-secondary]">
                        <Clock className="h-3.5 w-3.5 shrink-0 transition-transform duration-400 group-hover:scale-110" />
                        <span>{meetup.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[--text-secondary]">
                        <Users className="h-3.5 w-3.5 shrink-0 transition-transform duration-400 group-hover:scale-110" />
                        <span>Hosted by {meetup.host}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-[--text-secondary]">
                        <BookOpen className="h-3.5 w-3.5 shrink-0 mt-0.5 transition-transform duration-400 group-hover:scale-110" />
                        <span>{meetup.agenda}</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <GoldButton variant="primary" size="sm">Register for this Meetup</GoldButton>
                    </div>
                  </ArchCardContent>
                </ArchCard>
              ))}
            </div>
          ) : (
            <div className="rounded-sm border border-[--border-hairline] bg-[--surface-card] p-10 text-center card-shadow-premium">
              <Calendar className="mx-auto h-8 w-8 text-[--accent-brass] mb-3" />
              <p className="text-sm text-[--text-secondary]">No upcoming meetups scheduled yet. Check back soon.</p>
            </div>
          )}
        </div>

        <div className="mt-14">
          <h3 className="font-heading text-xl tracking-wide text-[--text-secondary] mb-6">Past Meetups</h3>
          <div className="space-y-3">
            {pastMeetups.map((meetup, i) => (
              <div
                key={meetup.date}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-sm border border-[--border-hairline] bg-[--surface-card] px-4 py-3 card-shadow-soft group hover:card-shadow-warm transition-all duration-400"
              >
                <span className="font-heading text-base text-[--accent-brass-text] w-24 shrink-0">{meetup.date}</span>
                <span className="text-sm text-[--text-primary] font-medium">{meetup.venue}</span>
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
