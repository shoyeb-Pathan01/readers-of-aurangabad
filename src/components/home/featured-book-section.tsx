"use client"

import { Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldLink } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { ExLibrisStamp } from "@/lib/mughal-patterns"
import { Book3D } from "@/components/ui/book-3d"

export function FeaturedBookSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-library">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-[--text-on-library]">
          <SectionHeader
            title="Featured Book"
            subtitle="A community-recommended read"
            className="items-start text-left"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <ArchCard className="relative w-full max-w-md mx-auto lg:mx-0 mt-8">
                <ArchCardContent className="pt-8 px-6 pb-6">
                  <div className="flex items-start gap-2 mb-3">
                    <Star className="h-3.5 w-3.5 fill-[--accent-brass] text-[--accent-brass]" />
                    <span className="text-xs text-[--accent-brass-text] tracking-wider uppercase">Community Pick</span>
                  </div>
                  <h3 className="font-heading text-2xl tracking-wide text-[--accent-brass-text]">The Alchemist</h3>
                  <p className="mt-1 text-sm text-[--text-secondary]">by Paulo Coelho</p>
                  <p className="mt-4 text-sm leading-relaxed text-[--text-secondary]">
                    A beautifully simple story about following your dreams and listening to your heart. Recommended by our community for its universal wisdom.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[--accent-burgundy]/30 px-3 py-1 text-xs text-[--accent-burgundy]">Fiction</span>
                    <span className="rounded-full border border-[--accent-emerald]/30 px-3 py-1 text-xs text-[--accent-emerald]">Easy Read</span>
                  </div>
                  <div className="mt-6">
                    <GoldLink href="/books" variant="primary" size="md">
                      Browse All Books
                    </GoldLink>
                    <ExLibrisStamp className="mx-auto mt-5 h-10 w-10 text-[--accent-gold-leaf]" />
                  </div>
                </ArchCardContent>
              </ArchCard>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <FadeIn>
              <Book3D
                title="The Alchemist"
                author="Paulo Coelho"
                category="Fiction"
                rating={4}
                href="/books"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
