"use client"

import { ScallopedCorner, DoubleBorderFrame, IwanGateway, LogoMark } from "@/lib/mughal-patterns"
import { GoldLink } from "@/components/ui/gold-button"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"
import { useRef } from "react"

const Hero3DScene = dynamic(() => import("@/components/home/hero-3d").then((m) => m.Hero3DScene), { ssr: false })

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollNext = () => {
    const section = sectionRef.current?.nextElementSibling
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-texture">
      <Hero3DScene />
      <div className="absolute inset-0 bg-gradient-to-b from-[--bg-base]/60 via-transparent to-[--bg-base]" />
      <div className="light-rays" />

      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] vignette"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100h200M100 0v200M0 0l200 200M200 0L0 200M0 50h200M0 150h200M50 0v200M150 0v200' stroke='%23C89B4A' stroke-width='0.5' opacity='1'/%3E%3Cpath d='M100 50a50 50 0 010 100 50 50 0 010-100z' stroke='%23C89B4A' stroke-width='0.3' fill='none' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat", backgroundSize: "200px 200px",
        }}
      />

      <IwanGateway className="relative z-10 mx-auto max-w-4xl px-4 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <LogoMark className="mx-auto h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-6 md:mb-8 brightness-100 drop-shadow-[0_0_12px_var(--accent-gold)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="font-quote text-sm md:text-base italic text-[--text-secondary] max-w-lg mx-auto">
            &ldquo;A reader lives a thousand lives before he dies.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative inline-block px-8 py-8 md:py-10 mt-6">
            <DoubleBorderFrame className="absolute inset-0 text-[--accent-gold]" />
            <ScallopedCorner className="top-0 left-0 text-[--accent-gold]" />
            <ScallopedCorner className="top-0 right-0 text-[--accent-gold] scale-x-[-1]" />
            <ScallopedCorner className="bottom-0 left-0 text-[--accent-gold] scale-y-[-1]" />
            <ScallopedCorner className="bottom-0 right-0 text-[--accent-gold] scale-[-1]" />
            <h1 className="font-heading text-4xl tracking-wider text-[--text-primary] sm:text-5xl md:text-6xl lg:text-7xl">
              Readers of
              <br />
              <span className="text-[--accent-gold]">Aurangabad</span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          <p className="mx-auto mt-6 max-w-2xl font-quote text-base leading-relaxed italic text-[--text-secondary] sm:text-lg">
            &ldquo;Igniting the love for reading in Aurangabad — one Sunday, one book, one conversation at a time.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldLink href="/meetups" variant="primary" size="lg">
              Join a Meetup
            </GoldLink>
            <GoldLink href="/community" variant="secondary" size="lg">
              Learn More
            </GoldLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
        >
          <div className="mt-12 flex items-center justify-center gap-2 text-xs text-[--text-secondary]">
            <span className="inline-block h-px w-8 bg-[--border-hairline]" />
            Open to all · Free to join
            <span className="inline-block h-px w-8 bg-[--border-hairline]" />
          </div>
        </motion.div>
      </IwanGateway>

      <motion.button
        onClick={scrollNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[--accent-gold]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[--bg-base] to-transparent z-10" />
    </section>
  )
}
