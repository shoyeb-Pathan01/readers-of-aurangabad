"use client"

import { useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { BookOpen } from "lucide-react"

interface Book3DProps {
  title: string
  author: string
  category?: string
  rating?: number
  difficulty?: string
  summary?: string
  suggestedBy?: string
  href?: string
  className?: string
  color?: string
  spineColor?: string
}

const bookColors = [
  { cover: "#7A2E2E", spine: "#5C2020", accent: "#9A3E3E" },
  { cover: "#3F4D2A", spine: "#2D3920", accent: "#556635" },
  { cover: "#5C3A1E", spine: "#3D2612", accent: "#7A4E28" },
  { cover: "#2A3A4A", spine: "#1D2A35", accent: "#3A5065" },
  { cover: "#4A2A5A", spine: "#352042", accent: "#603A75" },
  { cover: "#5A4020", spine: "#3D2A14", accent: "#75562A" },
  { cover: "#2A4A3A", spine: "#1D3528", accent: "#3A6550" },
  { cover: "#6A3030", spine: "#4A2020", accent: "#8A4040" },
]

export function Book3D({
  title,
  author,
  category,
  rating,
  difficulty,
  summary,
  suggestedBy,
  href,
  className,
  color: forceColor,
  spineColor: forceSpine,
}: Book3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [opening, setOpening] = useState(false)

  const colorIdx = title.length % bookColors.length
  const palette = bookColors[colorIdx]
  const coverColor = forceColor || palette.cover
  const spineColor = forceSpine || palette.spine

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setRotate({
      y: Math.max(-12, Math.min(12, dx * 8)),
      x: Math.max(-6, Math.min(6, dy * -4)),
    })
  }, [])

  const handleMouseEnter = useCallback(() => setHovered(true), [])
  const handleMouseLeave = useCallback(() => {
    setHovered(false)
    setRotate({ x: 0, y: 0 })
  }, [])

  const handleClick = useCallback(() => {
    if (!href) return
    setOpening(true)
    setTimeout(() => { window.location.href = href }, 800)
  }, [href])

  const W = 120
  const H = 168
  const D = 18
  const halfW = W / 2
  const halfH = H / 2
  const halfD = D / 2

  const tx = rotate.y * 2
  const ty = rotate.x * 1.5

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        ref={ref}
        className={cn("book-3d select-none", href && "cursor-pointer")}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        role={href ? "button" : undefined}
        tabIndex={href ? 0 : undefined}
        onKeyDown={href ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() } : undefined}
        aria-label={href ? `Open ${title}` : undefined}
      >
        <div
          className="book-3d-inner"
          style={{
            width: W,
            height: H,
            transform: `
              translateY(${hovered ? -6 : 0}px)
              translateX(${tx}px)
              translateY(${ty}px)
              rotateY(${rotate.y}deg)
              rotateX(${rotate.x}deg)
              scale(${hovered ? 1.04 : 1})
            `,
            transition: opening
              ? "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
              : hovered
                ? "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                : "transform 0.5s ease",
          }}
        >
          {/* Front cover */}
          <div
            className="book-cover flex items-center justify-center"
            style={{
              width: W,
              height: H,
              transform: `translateZ(${halfD}px)`,
              background: `linear-gradient(135deg, ${coverColor}, ${spineColor} 60%, ${coverColor})`,
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.15)`,
            }}
          >
          <div className="flex h-full w-full flex-col items-center justify-between px-3 py-4">
              <div className="mx-auto mt-1 h-[1px] w-6 bg-[--accent-brass]/40" />
              <p
                className="line-clamp-4 text-center text-[11px] font-heading leading-snug text-white/85 [overflow-wrap:anywhere]"
                title={title}
              >
                {title}
              </p>
              <BookOpen className="mx-auto h-5 w-5 text-white/30" />
            </div>
          </div>

          {/* Back cover */}
          <div
            className="book-cover"
            style={{
              width: W,
              height: H,
              transform: `translateZ(-${halfD}px) rotateY(180deg)`,
              background: spineColor,
            }}
          />

          {/* Spine */}
          <div
            className="book-spine"
            style={{
              width: D,
              height: H,
              transform: `translateX(-${halfW}px) rotateY(90deg)`,
              background: `linear-gradient(to bottom, ${spineColor}, ${coverColor})`,
              left: 0,
              borderRadius: "2px 0 0 2px",
            }}
          />

          {/* Top pages */}
          <div
            className="book-pages-bottom"
            style={{
              width: W,
              height: D,
              transform: `translateY(-${halfH}px) rotateX(90deg)`,
              background: "linear-gradient(to bottom, #f5f0e8, #e8e0d0)",
              top: 0,
            }}
          />

          {/* Bottom pages */}
          <div
            className="book-pages-bottom"
            style={{
              width: W,
              height: D,
              transform: `translateY(${halfH}px) rotateX(-90deg)`,
              background: "linear-gradient(to top, #f5f0e8, #e8e0d0)",
              bottom: 0,
            }}
          />

          {/* Right page edge */}
          <div
            className="book-pages-right"
            style={{
              width: D,
              height: H,
              transform: `translateX(${halfW}px) rotateY(-90deg)`,
              background: "linear-gradient(to right, #e8e0d0, #f5f0e8)",
              right: 0,
            }}
          />
        </div>

        {/* Shadow */}
        <div
          className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full transition-all duration-500"
          style={{
            width: W * 0.8,
            height: 6,
            background: `radial-gradient(ellipse, rgba(0,0,0,${hovered ? 0.18 : 0.10}) 0%, transparent 70%)`,
            transform: `translateY(${hovered ? 4 : 0}px) scale(${hovered ? 1.3 : 1})`,
            filter: `blur(${hovered ? 3 : 2}px)`,
          }}
        />
      </div>

      {/* Info below */}
      <div className={cn("relative z-10 mt-2 max-w-[130px] text-center transition-all duration-500", hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1")}>
        <p className="text-[11px] text-[--text-primary] font-heading leading-tight">{title}</p>
        <p className="text-[10px] text-[--text-secondary]">{author}</p>
        {category && (
          <span className="inline-block mt-1.5 mr-1 px-2 py-0.5 rounded-full border border-[--accent-brass]/30 text-[10px] text-[--accent-brass-text]">
            {category}
          </span>
        )}
        {difficulty && (
          <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full border border-[--border-hairline] text-[10px] text-[--text-secondary]">
            {difficulty}
          </span>
        )}
        {rating && (
          <div className="mt-1 text-[11px] text-[--accent-brass-text]">
            {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
          </div>
        )}
        {summary && (
          <p className="mt-1 text-[10px] text-[--text-secondary] leading-tight max-w-[130px] mx-auto">{summary}</p>
        )}
        {suggestedBy && (
          <p className="mt-1 text-[9px] text-[--text-secondary]/70 italic">Suggested by {suggestedBy}</p>
        )}
      </div>
    </div>
  )
}
