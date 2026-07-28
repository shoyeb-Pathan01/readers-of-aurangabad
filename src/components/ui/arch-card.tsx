"use client"

import Link from "next/link"
import { useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface ArchCardProps {
  children: React.ReactNode
  className?: string
  href?: string
  tilt?: boolean
}

export function ArchCard({ children, className, href, tilt = true }: ArchCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tiltStyle, setTiltStyle] = useState({})
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -3
    const rotateY = ((x - centerX) / centerX) * 3
    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.12s ease-out",
    })
  }, [tilt])

  const handleMouseEnter = useCallback(() => {
    setHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(false)
    setTiltStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.6s ease",
    })
  }, [])

  const shared = cn(
    "relative overflow-hidden rounded-sm",
    "bg-[--surface-card] border border-[--border-hairline]",
    "card-shadow-warm",
    "transition-all duration-500 ease-out",
    hovered
      ? "card-shadow-lift -translate-y-1.5 border-[--accent-gold]/40 gold-border-glow"
      : "",
    href && "cursor-pointer",
    "bg-paper",
    className,
  )

  const content = (
    <div
      ref={cardRef}
      className="h-full"
      style={{ transformStyle: "preserve-3d", ...tiltStyle }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="absolute top-0 left-0 w-full h-8 md:h-10 pointer-events-none z-10"
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40H0Z" className="fill-[--bg-base]" opacity="0.9" />
        <path d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" opacity="0.3" />
      </svg>
      <div className="relative z-20 pt-8 md:pt-10 h-full">{children}</div>
    </div>
  )

  if (href) return <Link href={href} className={shared}>{content}</Link>
  return <div className={shared}>{content}</div>
}

export function ArchCardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-5 pb-5 md:px-6 md:pb-6", className)}>{children}</div>
}
