"use client"

import { signIn, signOut } from "next-auth/react"
import { LogIn, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function LoginButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => signIn("google", { redirectTo: "/" })}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-md border border-[--accent-gold] px-3 text-xs text-[--accent-gold]",
        "hover:bg-[--accent-gold] hover:text-[--bg-base] transition-colors",
        className,
      )}
      aria-label="Sign in"
    >
      <LogIn className="h-3.5 w-3.5" />
      Sign In
    </button>
  )
}

export function LogoutButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => signOut()}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-md border border-[--border-hairline] px-3 text-xs text-[--text-secondary]",
        "hover:border-[--accent-burgundy] hover:text-[--accent-burgundy] transition-colors",
        className,
      )}
      aria-label="Sign out"
    >
      <LogOut className="h-3.5 w-3.5" />
      Sign Out
    </button>
  )
}
