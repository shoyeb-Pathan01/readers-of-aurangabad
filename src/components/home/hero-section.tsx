"use client"

import { ScallopedCorner, DoubleBorderFrame, IwanGateway, LogoMark } from "@/lib/mughal-patterns"
import { GoldLink } from "@/components/ui/gold-button"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"
import { useRef } from "react"

const Hero3DScene = dynamic(() => import("@/components/home/hero-3d").then((m) => m.Hero3DScene), { ssr: false })

const stagger = 0.2
const baseDur = 0.9

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollNext = () => {
    const section = sectionRef.current?.nextElementSibling
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Hero3DScene />
      <div className="absolute inset-0 bg-gradient-to-b from-[--bg-base]/70 via-transparent to-[--bg-base]" />

      <IwanGateway className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-12 pb-6 md:pt-14 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <LogoMark className="mx-auto h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: baseDur * 0.7, delay: stagger * 1, ease: "easeOut" }}
        >

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur, delay: stagger * 2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative inline-block px-8 py-4 md:py-6 mt-2">
            <DoubleBorderFrame className="absolute inset-0 text-[--accent-brass]" />
            <ScallopedCorner className="top-0 left-0 text-[--accent-brass]" />
            <ScallopedCorner className="top-0 right-0 text-[--accent-brass] scale-x-[-1]" />
            <ScallopedCorner className="bottom-0 left-0 text-[--accent-brass] scale-y-[-1]" />
            <ScallopedCorner className="bottom-0 right-0 text-[--accent-brass] scale-[-1]" />
            <h1 className="font-heading text-4xl tracking-wider text-[--text-primary] sm:text-5xl md:text-6xl lg:text-6xl leading-tight">
              Readers of
              <br />
              <span className="text-[--accent-brass]">Aurangabad</span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur * 0.7, delay: stagger * 3, ease: "easeOut" }}
        >
          <p className="mx-auto mt-4 max-w-2xl font-quote text-lg leading-relaxed italic text-[--text-secondary] sm:text-xl">
            &ldquo;Igniting the love for reading in Aurangabad — one Sunday, one book, one conversation at a time.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur * 0.6, delay: stagger * 4, ease: "easeOut" }}
        >
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          transition={{ duration: 0.6, delay: stagger * 5, ease: "easeOut" }}
        >
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-[--text-secondary]">
            <span className="inline-block h-px w-10 bg-[--border-hairline]" />
            Open to all &middot; Free to join
            <span className="inline-block h-px w-10 bg-[--border-hairline]" />
          </div>
        </motion.div>
      </IwanGateway>

      <motion.button
        onClick={scrollNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[--accent-brass]"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.6, delay: stagger * 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[--bg-base] to-transparent z-10" />
    </section>
  )
}
