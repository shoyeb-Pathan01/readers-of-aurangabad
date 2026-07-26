"use client"

import { ImageIcon, Plus, Trash2 } from "lucide-react"
import { GoldButton } from "@/components/ui/gold-button"

const albums = [
  { id: "1", name: "July 2026 — Panchakki", count: 8 },
  { id: "2", name: "July 2026 — City Library", count: 12 },
  { id: "3", name: "June 2026 — Salim Ali Lake", count: 6 },
]

export default function AdminGalleryPage() {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="font-heading text-xl tracking-wide text-[--text-primary]">Gallery</h1>
          <p className="text-sm text-[--text-secondary]">{albums.length} albums</p>
        </div>
        <GoldButton variant="primary" size="sm">
          <Plus className="h-4 w-4" />
          New Album
        </GoldButton>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {albums.map((album) => (
          <div key={album.id} className="rounded-lg border border-[--border-hairline] bg-[--surface-card] p-4 amber-shadow">
            <div className="flex h-40 items-center justify-center rounded border border-[--border-hairline] bg-[--bg-base] mb-3">
              <ImageIcon className="h-8 w-8 text-[--accent-gold]" />
            </div>
            <h3 className="text-sm text-[--text-primary]">{album.name}</h3>
            <p className="text-xs text-[--text-secondary]">{album.count} photos</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded border border-[--border-hairline] px-2.5 py-1 text-[11px] text-[--text-secondary] hover:border-[--accent-gold] hover:text-[--accent-gold] transition-colors">
                Upload
              </button>
              <button
                onClick={() => confirm("Delete this album?")}
                className="rounded border border-[--border-hairline] px-2.5 py-1 text-[11px] text-[--text-secondary] hover:border-[--accent-burgundy] hover:text-[--accent-burgundy] transition-colors"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
