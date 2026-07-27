"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
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
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-[1.03]"
        >
          <LogoMark className="h-9 w-9 sm:h-10 sm:w-10 brightness-100 transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_var(--accent-gold)]" />
          <span className="hidden sm:inline font-heading text-lg tracking-wider text-[--text-primary] transition-colors duration-300 group-hover:text-[--accent-gold]">
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
                  "relative px-3 py-2 text-sm font-body tracking-wide transition-colors duration-200",
                  "hover:text-[--accent-gold]",
                  "after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-[1.5px] after:bg-[--accent-gold]",
                  "after:origin-center after:transition-transform after:duration-300",
                  isActive
                    ? "text-[--accent-gold] after:scale-x-100"
                    : "text-[--text-secondary] after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[--accent-gold] hover:text-[--accent-gold-bright] md:hidden transition-all duration-200 hover:scale-110"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-[--glass-border] bg-[--glass-bg] backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-3 py-3 text-sm font-body tracking-wide rounded-lg transition-all duration-200",
                      "hover:text-[--accent-gold]",
                      isActive
                        ? "text-[--accent-gold] bg-[--accent-gold]/5"
                        : "text-[--text-secondary] hover:bg-[--accent-gold]/5",
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
