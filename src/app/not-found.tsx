import Link from "next/link"
import { LogoMark } from "@/lib/mughal-patterns"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <LogoMark className="mb-6 h-16 w-16 text-[--accent-brass]" />
      <h1 className="font-heading text-6xl tracking-wider text-[--accent-brass]">404</h1>
      <p className="mt-4 font-heading text-xl text-[--text-primary]">
        This page has not been written yet
      </p>
      <p className="mt-2 text-sm text-[--text-secondary]">
        Perhaps it is waiting to be discovered in a book.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md border border-[--accent-brass] px-5 py-2.5 text-sm text-[--accent-brass] hover:bg-[--accent-brass] hover:text-[--bg-base] transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
