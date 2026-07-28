"use client"

import { BookOpen, Sparkles, Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldLink } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"

export function FeaturedBookSection() {
  return (
    <section className="py-36 md:py-44 bg-texture bg-wood warm-light">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeader
              title="Featured Book"
              subtitle="A community-recommended read"
              className="items-start text-left"
            />
            <FadeIn>
              <ArchCard className="relative w-full max-w-lg mx-auto lg:mx-0 mt-10">
                <ArchCardContent className="pt-10 px-6 pb-8">
                  <div className="flex items-start gap-2 mb-4">
                    <Star className="h-4 w-4 fill-[--accent-gold] text-[--accent-gold]" />
                    <span className="text-sm text-[--accent-gold] tracking-wider uppercase">Community Pick</span>
                  </div>
                  <h3 className="font-heading text-3xl tracking-wide text-[--accent-gold]">The Alchemist</h3>
                  <p className="mt-1.5 text-base text-[--text-secondary]">by Paulo Coelho</p>
                  <p className="mt-5 text-base leading-relaxed text-[--text-secondary]">
                    A beautifully simple story about following your dreams and listening to your heart. Recommended by our community for its universal wisdom.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-[--accent-burgundy]/40 bg-[--accent-burgundy]/8 px-4 py-1.5 text-sm text-[--accent-burgundy]">Fiction</span>
                    <span className="rounded-full border border-[--accent-forest]/40 bg-[--accent-forest]/8 px-4 py-1.5 text-sm text-[--accent-forest]">Easy Read</span>
                  </div>
                  <div className="mt-8">
                    <GoldLink href="/books" variant="primary" size="md">
                      Browse All Books
                    </GoldLink>
                  </div>
                </ArchCardContent>
              </ArchCard>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <FadeIn>
              <div className="group relative w-64 h-80 sm:w-72 sm:h-90">
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[--accent-gold]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full flex items-center justify-center rounded-sm border border-[--border-hairline] bg-[--surface-card] card-shadow-premium transition-all duration-500 group-hover:scale-[1.04] group-hover:border-[--accent-gold] group-hover:gold-glow">
                  <div className="text-center p-8">
                    <BookOpen className="mx-auto h-20 w-20 text-[--accent-gold] transition-transform duration-500 group-hover:scale-110" />
                    <p className="mt-5 font-heading text-2xl text-[--accent-gold]">The Alchemist</p>
                    <p className="text-base text-[--text-secondary] mt-1.5">Paulo Coelho</p>
                    <Sparkles className="mx-auto mt-5 h-4 w-4 text-[--accent-gold] animate-glow-pulse" />
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
