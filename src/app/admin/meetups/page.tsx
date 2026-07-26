"use client"

import { Calendar, Plus } from "lucide-react"
import { GoldButton } from "@/components/ui/gold-button"

const meetups = [
  { id: "1", date: "August 2, 2026", venue: "Siddharth Garden", agenda: "Stories that shaped us", status: "upcoming" as const },
  { id: "2", date: "July 26, 2026", venue: "Panchakki", agenda: "Summer reading picks", status: "past" as const },
  { id: "3", date: "July 19, 2026", venue: "City Library", agenda: "Indian authors we love", status: "past" as const },
]

export default function AdminMeetupsPage() {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="font-heading text-xl tracking-wide text-[--text-primary]">Meetups</h1>
          <p className="text-sm text-[--text-secondary]">
            {meetups.filter((m) => m.status === "upcoming").length} upcoming
          </p>
        </div>
        <GoldButton variant="primary" size="sm">
          <Plus className="h-4 w-4" />
          Create Meetup
        </GoldButton>
      </div>

      <div className="space-y-3">
        {meetups.map((meetup) => (
          <div
            key={meetup.id}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-[--border-hairline] bg-[--surface-card] px-4 py-3 amber-shadow"
          >
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-4 w-4 text-[--accent-gold]" />
              <div>
                <p className="text-sm text-[--text-primary]">{meetup.venue}</p>
                <p className="text-xs text-[--text-secondary]">{meetup.date} · {meetup.agenda}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] ${
                  meetup.status === "upcoming"
                    ? "bg-[--accent-forest]/10 text-[--accent-forest]"
                    : "bg-[--bg-alt] text-[--text-secondary]"
                }`}
              >
                {meetup.status}
              </span>
              <div className="flex gap-2">
                <button className="rounded border border-[--border-hairline] px-2.5 py-1 text-[11px] text-[--text-secondary] hover:border-[--accent-gold] hover:text-[--accent-gold] transition-colors">
                  Edit
                </button>
                <button
                  onClick={() => confirm("Delete this meetup?")}
                  className="rounded border border-[--border-hairline] px-2.5 py-1 text-[11px] text-[--text-secondary] hover:border-[--accent-burgundy] hover:text-[--accent-burgundy] transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
