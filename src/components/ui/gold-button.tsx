"use client"

import { cn } from "@/lib/utils"
import { useRef, useCallback, useState } from "react"

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "wax"
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
    if (magnetic) setMagnetPos({ x: x * 5, y: y * 5 })
    setRippleStyle({
      "--mouse-x": `${((e.clientX - rect.left) / rect.width) * 100}%`,
      "--mouse-y": `${((e.clientY - rect.top) / rect.height) * 100}%`,
    } as React.CSSProperties)
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
        "transition-all duration-400 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent-brass] focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg-base]",
        "active:scale-[0.97]",
        size === "sm" && "px-5 py-2.5 text-sm rounded-[3px]",
        size === "md" && "px-7 py-3.5 text-base rounded-[3px]",
        size === "lg" && "px-10 py-4.5 text-lg rounded-[3px]",
        variant === "primary" &&
          "border border-[--accent-brass] text-[--accent-brass] hover:text-[#2A1A0A]",
        variant === "primary" &&
          "before:absolute before:inset-0 before:bg-[--accent-brass] before:translate-y-full before:transition-transform before:duration-400 before:ease-out hover:before:translate-y-0",
        variant === "primary" && "[&>*]:relative [&>*]:z-10",
        variant === "secondary" &&
          "bg-[--surface-alt] text-[--text-primary] border border-[--border-hairline] hover:border-[--accent-brass] hover:text-[--accent-brass] rounded-[3px]",
        variant === "secondary" && "hover:card-shadow-lift",
        variant === "wax" &&
          "bg-[--accent-burgundy] text-[#F5EDE0] border border-[--accent-burgundy] card-shadow-wax rounded-[3px]",
        variant === "wax" && "hover:brightness-110 active:brightness-95",
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
  variant?: "primary" | "secondary" | "wax"
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
    setMagnetPos({ x: x * 5, y: y * 5 })
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
        "transition-all duration-400 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent-brass] focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg-base]",
        "active:scale-[0.97]",
        size === "sm" && "px-5 py-2.5 text-sm rounded-[3px]",
        size === "md" && "px-7 py-3.5 text-base rounded-[3px]",
        size === "lg" && "px-10 py-4.5 text-lg rounded-[3px]",
        variant === "primary" &&
          "border border-[--accent-brass] text-[--accent-brass] hover:text-[#2A1A0A]",
        variant === "primary" &&
          "before:absolute before:inset-0 before:bg-[--accent-brass] before:translate-y-full before:transition-transform before:duration-400 before:ease-out hover:before:translate-y-0",
        variant === "primary" && "[&>*]:relative [&>*]:z-10",
        variant === "secondary" &&
          "bg-[--surface-alt] text-[--text-primary] border border-[--border-hairline] hover:border-[--accent-brass] hover:text-[--accent-brass] rounded-[3px]",
        variant === "secondary" && "hover:card-shadow-lift",
        variant === "wax" &&
          "bg-[--accent-burgundy] text-[#F5EDE0] border border-[--accent-burgundy] card-shadow-wax rounded-[3px]",
        variant === "wax" && "hover:brightness-110 active:brightness-95",
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
