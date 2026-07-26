"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LogoMark } from "@/lib/mughal-patterns"

export function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[--border-hairline] bg-[--bg-base]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[--text-primary] group transition-transform duration-300 hover:scale-[1.03]"
        >
          <LogoMark className="h-8 w-8 brightness-100 transition-all duration-300 group-hover:brightness-125" />
          <span className="hidden font-heading text-lg tracking-wider sm:inline transition-colors duration-300 group-hover:text-[--accent-gold]">
            {SITE_NAME}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-sm font-body tracking-wide transition-colors duration-200",
                "hover:text-[--accent-gold]",
                "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[1px] after:bg-[--accent-gold]",
                "after:scale-x-0 after:origin-center after:transition-transform after:duration-250 hover:after:scale-x-100",
                pathname === link.href
                  ? "text-[--accent-gold] after:scale-x-100"
                  : "text-[--text-secondary]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[--accent-gold] hover:text-[--accent-gold-bright] md:hidden transition-transform duration-200 hover:scale-110"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-[--border-hairline] bg-[--bg-base] md:hidden animate-fade-in-up">
          <div className="flex flex-col px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-sm font-body tracking-wide rounded-md transition-all duration-200",
                  "hover:text-[--accent-gold] hover:bg-[--surface-alt]",
                  pathname === link.href
                    ? "text-[--accent-gold] bg-[--surface-alt]"
                    : "text-[--text-secondary]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
