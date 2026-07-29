"use client"

import { cn } from "@/lib/utils"
import { SOCIAL_LINKS } from "@/lib/constants"
import { Camera, MessageCircle, Send, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SocialIconProps {
  icon: LucideIcon
  href: string
  label: string
}

function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon group relative"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[--text-primary] px-2 py-1 text-xs text-[--bg-base] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        {label}
      </span>
    </a>
  )
}

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <SocialIcon icon={Mail} href={`mailto:${SOCIAL_LINKS.email}`} label="Email" />
      <SocialIcon icon={Camera} href={SOCIAL_LINKS.instagram} label="Instagram" />
      <SocialIcon icon={MessageCircle} href={SOCIAL_LINKS.whatsapp} label="WhatsApp" />
      <SocialIcon icon={Send} href={SOCIAL_LINKS.telegram} label="Telegram" />
    </div>
  )
}
