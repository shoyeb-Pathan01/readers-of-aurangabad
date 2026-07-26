"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full",
          "text-accent-gold hover:text-accent-gold-bright",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[--border-hairline]",
          "transition-colors duration-200",
          className,
        )}
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-4 w-4" />
      </button>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full",
        "text-accent-gold hover:text-accent-gold-bright",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[--border-hairline]",
        "transition-colors duration-200",
        className,
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
