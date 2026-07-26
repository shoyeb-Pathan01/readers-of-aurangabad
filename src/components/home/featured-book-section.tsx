"use client"

import { BookOpen, Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { ScallopedCorner } from "@/lib/mughal-patterns"
import { GoldLink } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"

export function FeaturedBookSection() {
  return (
    <section className="bg-[--bg-alt] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Book"
          subtitle="A community-recommended read"
        />

        <div className="mt-12 flex justify-center">
          <FadeIn>
            <ArchCard className="relative w-full max-w-md">
              <ScallopedCorner className="top-2 left-2 text-[--accent-gold]" />
              <ScallopedCorner className="top-2 right-2 text-[--accent-gold] scale-x-[-1]" />
              <ArchCardContent className="pt-8 text-center">
                <div className="group mx-auto mb-6 flex h-48 w-36 items-center justify-center rounded border border-[--border-hairline] bg-[--bg-base] amber-shadow transition-all duration-500 hover:scale-105 hover:shadow-[0_0_24px_-4px_var(--accent-gold)]">
                  <BookOpen className="h-12 w-12 text-[--accent-gold] transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-heading text-xl tracking-wide text-[--accent-gold]">
                  The Alchemist
                </h3>
                <p className="mt-1 text-sm text-[--text-secondary]">by Paulo Coelho</p>
                <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
                  A beautifully simple story about following your dreams and listening to your heart. Recommended by our community for its universal wisdom.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[--accent-gold]">
                  <Sparkles className="h-3 w-3 animate-pulse" />
                  <span>Community Pick</span>
                  <Sparkles className="h-3 w-3 animate-pulse" />
                </div>
                <div className="mt-6">
                  <GoldLink href="/books" variant="primary" size="sm">
                    Browse All Books
                  </GoldLink>
                </div>
              </ArchCardContent>
            </ArchCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
