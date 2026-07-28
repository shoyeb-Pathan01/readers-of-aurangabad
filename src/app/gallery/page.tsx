"use client"

import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { useState, useCallback, useEffect } from "react"

const albums = [
  { name: "July 2026 — Panchakki Meetup", count: 8, location: "Panchakki, Aurangabad", description: "Reading by the historic water mill." },
  { name: "July 2026 — City Library Meetup", count: 12, location: "City Central Library", description: "A quiet afternoon among bookshelves." },
  { name: "June 2026 — Salim Ali Lake", count: 6, location: "Salim Ali Lake Garden", description: "Nature and literature in harmony." },
  { name: "June 2026 — Prozone Mall", count: 10, location: "Prozone Mall Food Court", description: "Casual reads over coffee." },
  { name: "May 2026 — Siddharth Garden", count: 15, location: "Siddharth Garden & Zoo", description: "Our largest gathering yet." },
]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  const openLightbox = useCallback((i: number) => {
    setCurrentIdx(i)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  const goNext = useCallback(() => {
    setCurrentIdx((p) => (p + 1) % albums.length)
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIdx((p) => (p - 1 + albums.length) % albums.length)
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen, closeLightbox, goNext, goPrev])

  return (
    <div className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Gallery"
          subtitle="Moments captured at our Sunday meetups across Aurangabad"
        />

        <div className="mt-12 md:mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album, i) => (
            <ArchCard
              key={album.name}
              className="h-full group cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <ArchCardContent className="pt-8 pb-6">
                <div className="mb-4 flex h-48 items-center justify-center rounded-sm border border-[--border-hairline] bg-[--bg-base] card-shadow-warm transition-all duration-500 group-hover:card-shadow-lift group-hover:border-[--accent-brass] img-zoom">
                  <div className="text-center px-4 transition-transform duration-600 group-hover:scale-105">
                    <ImageIcon className="mx-auto h-9 w-9 text-[--accent-brass]" />
                    <p className="mt-2 text-xs text-[--text-secondary]">{album.count} photos</p>
                  </div>
                </div>
                <h3 className="font-heading text-base tracking-wide text-[--text-primary] group-hover:text-[--accent-brass] transition-colors duration-400">{album.name}</h3>
                <p className="mt-1 text-xs text-[--text-secondary]">{album.location}</p>
                <p className="mt-1.5 text-xs text-[--text-secondary] italic">{album.description}</p>
              </ArchCardContent>
            </ArchCard>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-sm border border-[--border-hairline] bg-[--surface-card] p-6 max-w-lg">
              <div className="flex h-56 items-center justify-center bg-[--bg-base] rounded-sm mb-4">
                <ImageIcon className="h-12 w-12 text-[--accent-brass]" />
              </div>
              <h3 className="font-heading text-lg tracking-wide text-[--text-primary]">{albums[currentIdx].name}</h3>
              <p className="text-sm text-[--text-secondary] mt-1">{albums[currentIdx].location}</p>
              <p className="text-sm text-[--text-secondary] mt-2">{albums[currentIdx].description}</p>
              <p className="text-xs text-[--accent-brass] mt-3">{albums[currentIdx].count} photos</p>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={goPrev}
                  className="flex items-center gap-1 text-sm text-[--text-secondary] hover:text-[--accent-brass] transition-colors"
                  aria-label="Previous album"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <button
                  onClick={goNext}
                  className="flex items-center gap-1 text-sm text-[--text-secondary] hover:text-[--accent-brass] transition-colors"
                  aria-label="Next album"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[--surface-card] border border-[--border-hairline] text-[--text-secondary] hover:text-[--accent-brass] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
