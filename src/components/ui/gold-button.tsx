"use client"

import { cn } from "@/lib/utils"
import { useRef, useCallback, useState } from "react"

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  magnetic?: boolean
}

export function GoldButton({
  children,
  className,
  variant = "primary",
  size = "md",
  magnetic = true,
  ...props
}: GoldButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [rippleStyle, setRippleStyle] = useState({})
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    if (magnetic) setMagnetPos({ x: x * 6, y: y * 6 })
    setRippleStyle({ "--mouse-x": `${((e.clientX - rect.left) / rect.width) * 100}%`, "--mouse-y": `${((e.clientY - rect.top) / rect.height) * 100}%` } as React.CSSProperties)
  }, [magnetic])

  const handleMouseLeave = useCallback(() => {
    setMagnetPos({ x: 0, y: 0 })
  }, [])

  return (
    <button
      ref={btnRef}
      className={cn(
        "relative overflow-hidden",
        "inline-flex items-center justify-center gap-2",
        "font-body tracking-wide",
        "transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent-gold] focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg-base]",
        "active:scale-[0.97]",
        size === "sm" && "px-4 py-2 text-xs rounded-md",
        size === "md" && "px-6 py-3 text-sm rounded-lg",
        size === "lg" && "px-8 py-4 text-base rounded-lg",
        variant === "primary" &&
          "border border-[--accent-gold] text-[--accent-gold] hover:text-[--bg-base]",
        variant === "primary" &&
          "before:absolute before:inset-0 before:bg-[--accent-gold] before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0",
        variant === "primary" && "[&>*]:relative [&>*]:z-10",
        variant === "secondary" &&
          "bg-[--surface-alt] text-[--text-primary] border border-[--border-hairline] hover:border-[--accent-gold] hover:text-[--accent-gold] rounded-lg",
        variant === "secondary" && "hover:bg-[--surface-card]",
        "ripple",
        className,
      )}
      style={{
        transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)`,
        ...rippleStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
  magnetic = true,
}: {
  children: React.ReactNode
  className?: string
  href: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  magnetic?: boolean
}) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linkRef.current || !magnetic) return
    const rect = linkRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMagnetPos({ x: x * 6, y: y * 6 })
  }, [magnetic])

  const handleMouseLeave = useCallback(() => {
    setMagnetPos({ x: 0, y: 0 })
  }, [])

  return (
    <a
      ref={linkRef}
      href={href}
      className={cn(
        "relative overflow-hidden",
        "inline-flex items-center justify-center gap-2",
        "font-body tracking-wide",
        "transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent-gold] focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg-base]",
        "active:scale-[0.97]",
        size === "sm" && "px-4 py-2 text-xs rounded-md",
        size === "md" && "px-6 py-3 text-sm rounded-lg",
        size === "lg" && "px-8 py-4 text-base rounded-lg",
        variant === "primary" &&
          "border border-[--accent-gold] text-[--accent-gold] hover:text-[--bg-base]",
        variant === "primary" &&
          "before:absolute before:inset-0 before:bg-[--accent-gold] before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0",
        variant === "primary" && "[&>*]:relative [&>*]:z-10",
        variant === "secondary" &&
          "bg-[--surface-alt] text-[--text-primary] border border-[--border-hairline] hover:border-[--accent-gold] hover:text-[--accent-gold] rounded-lg",
        variant === "secondary" && "hover:bg-[--surface-card]",
        "ripple",
        className,
      )}
      style={{ transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  )
}
