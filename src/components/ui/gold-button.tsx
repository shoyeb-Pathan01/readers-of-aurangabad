import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes } from "react"

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export function GoldButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: GoldButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "font-body tracking-wide transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[--accent-gold]",
        size === "sm" && "px-3 py-1.5 text-xs",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-7 py-3 text-base",
        variant === "primary" &&
          "border border-[--accent-gold] text-[--accent-gold] hover:bg-[--accent-gold] hover:text-[--bg-base] rounded-md",
        variant === "secondary" &&
          "bg-[--surface-alt] text-[--text-primary] border border-[--border-hairline] hover:border-[--accent-gold] hover:text-[--accent-gold] rounded-md",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function GoldLink({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
}: {
  children: React.ReactNode
  className?: string
  href: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "font-body tracking-wide transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[--accent-gold]",
        size === "sm" && "px-3 py-1.5 text-xs",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-7 py-3 text-base",
        variant === "primary" &&
          "border border-[--accent-gold] text-[--accent-gold] hover:bg-[--accent-gold] hover:text-[--bg-base] rounded-md",
        variant === "secondary" &&
          "bg-[--surface-alt] text-[--text-primary] border border-[--border-hairline] hover:border-[--accent-gold] hover:text-[--accent-gold] rounded-md",
        className,
      )}
    >
      {children}
    </a>
  )
}
