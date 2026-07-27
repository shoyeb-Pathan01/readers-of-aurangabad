"use client"

import { BookOpen, Sparkles, Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { ScallopedCorner } from "@/lib/mughal-patterns"
import { GoldLink } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"

export function FeaturedBookSection() {
  return (
    <section className="bg-[--bg-alt] py-24 md:py-36 bg-texture bg-wood">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeader
              title="Featured Book"
              subtitle="A community-recommended read"
              className="items-start text-left"
            />
            <FadeIn>
              <ArchCard className="relative w-full max-w-md mx-auto lg:mx-0 mt-8">
                <ScallopedCorner className="top-2 left-2 text-[--accent-gold]" />
                <ScallopedCorner className="top-2 right-2 text-[--accent-gold] scale-x-[-1]" />
                <ArchCardContent className="pt-8 px-6 pb-6">
                  <div className="flex items-start gap-2 mb-3">
                    <Star className="h-3.5 w-3.5 fill-[--accent-gold] text-[--accent-gold]" />
                    <span className="text-xs text-[--accent-gold] tracking-wider uppercase">Community Pick</span>
                  </div>
                  <h3 className="font-heading text-2xl tracking-wide text-[--accent-gold]">The Alchemist</h3>
                  <p className="mt-1 text-sm text-[--text-secondary]">by Paulo Coelho</p>
                  <p className="mt-4 text-sm leading-relaxed text-[--text-secondary]">
                    A beautifully simple story about following your dreams and listening to your heart. Recommended by our community for its universal wisdom.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[--accent-burgundy]/30 bg-[--accent-burgundy]/10 px-3 py-1 text-[11px] text-[--accent-burgundy]">Fiction</span>
                    <span className="rounded-full border border-[--accent-forest]/30 bg-[--accent-forest]/10 px-3 py-1 text-[11px] text-[--accent-forest]">Easy Read</span>
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

          <div className="order-1 lg:order-2 flex justify-center">
            <FadeIn>
              <div className="group relative w-56 h-72 sm:w-64 sm:h-80">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[--accent-gold]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full flex items-center justify-center rounded-lg border-2 border-[--border-hairline] bg-[--surface-card] card-shadow-premium transition-all duration-500 group-hover:scale-[1.03] group-hover:border-[--accent-gold] group-hover:gold-glow">
                  <div className="text-center p-6">
                    <BookOpen className="mx-auto h-16 w-16 text-[--accent-gold] transition-transform duration-500 group-hover:scale-110" />
                    <p className="mt-4 font-heading text-lg text-[--accent-gold]">The Alchemist</p>
                    <p className="text-xs text-[--text-secondary] mt-1">Paulo Coelho</p>
                    <Sparkles className="mx-auto mt-4 h-4 w-4 text-[--accent-gold] animate-pulse" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
