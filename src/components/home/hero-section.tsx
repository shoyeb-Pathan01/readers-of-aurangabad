"use client"

import { ScallopedCorner, DoubleBorderFrame, IwanGateway } from "@/lib/mughal-patterns"
import { GoldLink } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"
import dynamic from "next/dynamic"

const Hero3DScene = dynamic(
  () => import("@/components/home/hero-3d").then((m) => m.Hero3DScene),
  { ssr: false },
)

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Hero3DScene />
      <div className="absolute inset-0 bg-gradient-to-b from-[--bg-base] via-[--bg-alt] to-[--bg-base]" />

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100h200M100 0v200M0 0l200 200M200 0L0 200M0 50h200M0 150h200M50 0v200M150 0v200' stroke='%23C89B4A' stroke-width='0.5' opacity='1'/%3E%3Cpath d='M100 50a50 50 0 010 100 50 50 0 010-100z' stroke='%23C89B4A' stroke-width='0.3' fill='none' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <IwanGateway className="relative z-10 mx-auto max-w-4xl px-4 text-center py-12">
        <FadeIn>
          <div className="relative inline-block px-8 py-6">
            <DoubleBorderFrame className="absolute inset-0 text-[--accent-gold]" />
            <ScallopedCorner className="top-0 left-0 text-[--accent-gold]" />
            <ScallopedCorner className="top-0 right-0 text-[--accent-gold] scale-x-[-1]" />
            <ScallopedCorner className="bottom-0 left-0 text-[--accent-gold] scale-y-[-1]" />
            <ScallopedCorner className="bottom-0 right-0 text-[--accent-gold] scale-[-1]" />

            <h1 className="font-heading text-3xl tracking-wider text-[--text-primary] sm:text-4xl md:text-5xl lg:text-6xl">
              Readers of
              <br />
              <span className="text-[--accent-gold]">Aurangabad</span>
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl font-quote text-base leading-relaxed italic text-[--text-secondary] sm:text-lg">
            &ldquo;Igniting the love for reading in Aurangabad — one Sunday, one book, one conversation at a time.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldLink href="/meetups" variant="primary" size="lg">
              Join a Meetup
            </GoldLink>
            <GoldLink href="/community" variant="secondary" size="lg">
              Learn More
            </GoldLink>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-12 flex items-center justify-center gap-2 text-xs text-[--text-secondary]">
            <span className="inline-block h-px w-8 bg-[--border-hairline]" />
            Open to all · Free to join
            <span className="inline-block h-px w-8 bg-[--border-hairline]" />
          </div>
        </FadeIn>
      </IwanGateway>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[--bg-base] to-transparent" />
    </section>
  )
}
