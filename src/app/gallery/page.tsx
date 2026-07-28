import type { Metadata } from "next"
import { ImageIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery from Readers of Aurangabad meetups — moments of reading, discussion, and community.",
}

const albums = [
  { name: "July 2026 — Panchakki Meetup", count: 8, location: "Panchakki, Aurangabad" },
  { name: "July 2026 — City Library Meetup", count: 12, location: "City Central Library" },
  { name: "June 2026 — Salim Ali Lake", count: 6, location: "Salim Ali Lake Garden" },
  { name: "June 2026 — Prozone Mall", count: 10, location: "Prozone Mall Food Court" },
  { name: "May 2026 — Siddharth Garden", count: 15, location: "Siddharth Garden & Zoo" },
]

export default function GalleryPage() {
  return (
    <div className="py-36 md:py-44">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Gallery"
          subtitle="Moments captured at our Sunday meetups across Aurangabad"
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <ArchCard key={album.name} className="h-full group">
              <ArchCardContent className="pt-8 pb-6">
                <div className="mb-5 flex h-52 items-center justify-center rounded-sm border border-[--border-hairline] bg-[--bg-base] card-shadow-warm transition-all duration-500 group-hover:card-shadow-lift group-hover:border-[--accent-gold]">
                  <div className="text-center px-4">
                    <ImageIcon className="mx-auto h-10 w-10 text-[--accent-gold] transition-transform duration-500 group-hover:scale-110" />
                    <p className="mt-3 text-sm text-[--text-secondary]">{album.count} photos</p>
                  </div>
                </div>
                <h3 className="font-heading text-lg tracking-wide text-[--text-primary] group-hover:text-[--accent-gold] transition-colors duration-400">{album.name}</h3>
                <p className="mt-1 text-sm text-[--text-secondary]">{album.location}</p>
              </ArchCardContent>
            </ArchCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-[--text-secondary]">
            Gallery photos will be uploaded soon. Stay tuned.
          </p>
        </div>
      </div>
    </div>
  )
}
