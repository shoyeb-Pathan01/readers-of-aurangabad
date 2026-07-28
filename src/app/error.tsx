"use client"

import { useEffect } from "react"
import { LogoMark } from "@/lib/mughal-patterns"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <LogoMark className="mb-6 h-16 w-16 text-[--accent-brass]" />
      <h1 className="font-heading text-4xl tracking-wider text-[--accent-brass]">Something went wrong</h1>
      <p className="mt-4 text-sm text-[--text-secondary]">
        Even the best libraries have a few mishelved books. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-md border border-[--accent-brass] px-5 py-2.5 text-sm text-[--accent-brass] hover:bg-[--accent-brass] hover:text-[--bg-base] transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
