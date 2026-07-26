import type { Metadata } from "next"
import { ImageIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery from Readers of Aurangabad meetups — moments of reading, discussion, and community.",
}

const albums = [
  { name: "July 2026 — Panchakki Meetup", count: 8 },
  { name: "July 2026 — City Library Meetup", count: 12 },
  { name: "June 2026 — Salim Ali Lake", count: 6 },
  { name: "June 2026 — Prozone Mall", count: 10 },
  { name: "May 2026 — Siddharth Garden", count: 15 },
]

export default function GalleryPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Gallery"
          subtitle="Moments captured at our Sunday meetups across Aurangabad"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <ArchCard key={album.name} className="h-full">
              <ArchCardContent className="pt-6">
                <div className="mb-4 flex h-48 items-center justify-center rounded border border-[--border-hairline] bg-[--bg-base] amber-shadow">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-8 w-8 text-[--accent-gold]" />
                    <p className="mt-2 text-xs text-[--text-secondary]">{album.count} photos</p>
                  </div>
                </div>
                <h3 className="font-heading text-base tracking-wide text-[--text-primary]">{album.name}</h3>
              </ArchCardContent>
            </ArchCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[--text-secondary]">
            Gallery photos will be uploaded soon. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  )
}
