"use client"

import Link from "next/link"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface ArchCardProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export function ArchCard({ children, className, href }: ArchCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -3
    const rotateY = ((x - centerX) / centerX) * 3
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)"
    cardRef.current.style.transition = "transform 0.5s ease"
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transition = ""
      }
    }, 500)
  }

  const shared = cn(
    "relative overflow-hidden rounded-b-lg",
    "bg-[--surface-card] border border-[--border-hairline]",
    "amber-shadow transition-all duration-300",
    "hover:muqarnas-shadow hover:-translate-y-1.5",
    "hover:border-[--accent-gold]",
    href && "cursor-pointer",
    className,
  )

  const content = (
    <div
      ref={cardRef}
      className="h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <svg
        className="absolute top-0 left-0 w-full h-8 md:h-10 pointer-events-none opacity-80"
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40H0Z"
          className="fill-[--bg-base]"
        />
        <path
          d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40"
          stroke="var(--border-hairline)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
      <div className="pt-8 md:pt-10 h-full">{children}</div>
    </div>
  )

  if (href) {
    return <Link href={href} className={shared}>{content}</Link>
  }

  return <div className={shared}>{content}</div>
}

export function ArchCardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-4 pb-4 md:px-5 md:pb-5", className)}>{children}</div>
}
