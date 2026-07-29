"use client"

import { Save } from "lucide-react"
import { GoldButton } from "@/components/ui/gold-button"
import { useState } from "react"

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-xl tracking-wide text-[--text-primary]">Settings</h1>
        <p className="text-sm text-[--text-secondary]">Site configuration</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="rounded-lg border border-[--border-hairline] bg-[--surface-card] p-6 amber-shadow">
          <h2 className="font-heading text-lg tracking-wide text-[--accent-brass]">Site Information</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSaved(true)
              setTimeout(() => setSaved(false), 2000)
            }}
            className="mt-4 space-y-4"
          >
            <div>
              <label className="block text-sm text-[--text-secondary] mb-1">Site Name</label>
              <input
                type="text"
                defaultValue="Readers of Aurangabad"
                className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] focus:border-[--accent-brass] focus:outline-none focus:ring-1 focus:ring-[--accent-brass]"
              />
            </div>
            <div>
              <label className="block text-sm text-[--text-secondary] mb-1">Tagline</label>
              <input
                type="text"
                defaultValue="Igniting the love for reading in Aurangabad"
                className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] focus:border-[--accent-brass] focus:outline-none focus:ring-1 focus:ring-[--accent-brass]"
              />
            </div>
            <div>
              <label className="block text-sm text-[--text-secondary] mb-1">Contact Email</label>
              <input
                type="email"
                defaultValue="hello@readersofaurangabad.in"
                className="w-full rounded-md border border-[--border-hairline] bg-[--bg-base] px-3 py-2 text-sm text-[--text-primary] focus:border-[--accent-brass] focus:outline-none focus:ring-1 focus:ring-[--accent-brass]"
              />
            </div>
            <div className="flex items-center gap-3">
              <GoldButton type="submit">
                <Save className="h-4 w-4" />
                {saved ? "Saved!" : "Save Changes"}
              </GoldButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
