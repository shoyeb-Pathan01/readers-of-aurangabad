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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -4
    const rotateY = ((x - centerX) / centerX) * 4
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.08s ease-out",
    })
  }, [tilt])

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.5s ease",
    })
  }, [])

  const shared = cn(
    "relative overflow-hidden rounded-b-lg",
    "bg-[--surface-card] border border-[--border-hairline]",
    "card-shadow-premium",
    "transition-all duration-500",
    "hover:muqarnas-shadow hover:-translate-y-2",
    "hover:border-[--accent-gold]",
    href && "cursor-pointer",
    className,
  )

  const content = (
    <div
      ref={cardRef}
      className="h-full"
      style={{ transformStyle: "preserve-3d", ...tiltStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="absolute top-0 left-0 w-full h-8 md:h-10 pointer-events-none z-10 opacity-80"
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40H0Z" className="fill-[--bg-base]" />
        <path d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40" stroke="var(--border-hairline)" strokeWidth="0.5" fill="none" />
      </svg>
      <div className="relative z-20 pt-8 md:pt-10 h-full">{children}</div>
    </div>
  )

  if (href) return <Link href={href} className={shared}>{content}</Link>
  return <div className={shared}>{content}</div>
}

export function ArchCardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-4 pb-4 md:px-5 md:pb-5", className)}>{children}</div>
}
