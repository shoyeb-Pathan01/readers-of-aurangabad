"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LogoMark } from "@/lib/mughal-patterns"
import { motion, AnimatePresence } from "framer-motion"

export function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        scrolled
          ? "glass-nav shadow-[0_1px_0_var(--glass-border)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-400 hover:scale-[1.02]"
        >
          <LogoMark className="h-10 w-10 sm:h-11 sm:w-11 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_var(--accent-brass)]" />
          <span className="hidden sm:inline font-heading text-xl tracking-wider text-[--text-primary] transition-colors duration-400 group-hover:text-[--accent-brass]">
            {SITE_NAME}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-body tracking-wide transition-colors duration-400",
                  "hover:text-[--accent-brass-text]",
                  "after:absolute after:bottom-0.5 after:left-4 after:right-4 after:h-[1px] after:bg-[--accent-brass]",
                  "after:origin-center after:transition-transform after:duration-400 after:ease-out",
                    isActive
                      ? "text-[--accent-brass-text] after:scale-x-100"
                      : "text-[--text-secondary] after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[--accent-brass] hover:text-[--accent-brass-bright] md:hidden transition-all duration-400 hover:scale-110"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-t border-[--glass-border] bg-[--glass-bg] backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-body tracking-wide rounded-lg transition-all duration-400",
                      "hover:text-[--accent-brass-text]",
                      isActive
                        ? "text-[--accent-brass-text] bg-[--accent-brass]/5"
                        : "text-[--text-secondary] hover:bg-[--accent-brass]/5",
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
