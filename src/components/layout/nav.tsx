"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Home, Users, BookOpen, Calendar, Image as ImageIcon, Mail, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LogoMark } from "@/lib/mughal-patterns"
import { motion, AnimatePresence } from "framer-motion"
import { useSession } from "next-auth/react"
import { LoginButton, LogoutButton } from "@/components/ui/auth-buttons"

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/community": Users,
  "/books": BookOpen,
  "/meetups": Calendar,
  "/gallery": ImageIcon,
  "/contact": Mail,
}

export function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const authRef = useRef<HTMLDivElement>(null)
  const { data: session } = useSession()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (authRef.current && !authRef.current.contains(e.target as Node)) {
        setAuthOpen(false)
      }
    }
    document.addEventListener("mousedown", onMouseDown)
    return () => document.removeEventListener("mousedown", onMouseDown)
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
          <LogoMark className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="hidden sm:inline font-heading text-xl tracking-wider text-[--text-primary] transition-colors duration-400 group-hover:text-[--accent-brass]">
            {SITE_NAME}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            const Icon = NAV_ICONS[link.href]
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-4 py-2 text-sm font-body tracking-wide transition-colors duration-400",
                  "hover:text-[--accent-brass-text]",
                  "after:absolute after:bottom-0.5 after:left-4 after:right-4 after:h-[1px] after:bg-[--accent-brass]",
                  "after:origin-center after:transition-transform after:duration-400 after:ease-out",
                    isActive
                      ? "text-[--accent-brass-text] after:scale-x-100"
                      : "text-[--text-secondary] after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="relative hidden md:block" ref={authRef}>
            <button
              onClick={() => setAuthOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[--accent-brass] hover:text-[--accent-brass-bright] transition-all duration-400 hover:scale-110"
              aria-label={session ? "Account menu" : "Sign in"}
            >
              {session?.user?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={session.user.image} alt="" className="h-7 w-7 rounded-full border border-[--border-hairline]" />
              ) : (
                <User className="h-5 w-5" />
              )}
            </button>
            {authOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md border border-[--border-hairline] bg-[--surface-card] p-4 card-shadow-warm text-center">
                {session ? (
                  <>
                    <p className="text-xs text-[--text-secondary] mb-3 truncate">{session.user?.email}</p>
                    <LogoutButton className="w-full justify-center" />
                  </>
                ) : (
                  <>
                    <p className="text-xs text-[--text-secondary] mb-3">Sign in to suggest books, write reviews, and join the conversation.</p>
                    <LoginButton className="w-full justify-center" />
                  </>
                )}
              </div>
            )}
          </div>
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
                const Icon = NAV_ICONS[link.href]
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-3 text-sm font-body tracking-wide rounded-lg transition-all duration-400",
                      "hover:text-[--accent-brass-text]",
                      isActive
                        ? "text-[--accent-brass-text] bg-[--accent-brass]/5"
                        : "text-[--text-secondary] hover:bg-[--accent-brass]/5",
                    )}
                  >
                    <Icon className="h-4 w-4" />
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
