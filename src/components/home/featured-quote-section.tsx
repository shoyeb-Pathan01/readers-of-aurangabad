"use client"

import { Quote, RefreshCw } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { ScaleReveal } from "@/components/ui/motion-wrapper"
import { useState, useEffect } from "react"

const quotes = [
  { text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.", author: "George R.R. Martin" },
  { text: "Books are a uniquely portable magic.", author: "Stephen King" },
  { text: "The only thing you absolutely have to know is the location of the library.", author: "Albert Einstein" },
  { text: "Reading is to the mind what exercise is to the body.", author: "Joseph Addison" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
]

export function FeaturedQuoteSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % quotes.length), 7000)
    return () => clearInterval(timer)
  }, [])

  const quote = quotes[current]

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-texture warm-light">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <SectionHeader title="A Moment with Books" subtitle="Words that inspire our reading journey" />

        <ScaleReveal key={current}>
          <ArchCard className="relative mt-12 md:mt-14 text-center" torn>
            <ArchCardContent className="px-8 py-10 md:px-12">
              <Quote className="mx-auto mb-6 h-9 w-9 text-[--accent-brass] opacity-20" />
              <blockquote className="font-script text-2xl leading-relaxed text-[--text-primary] sm:text-3xl md:text-4xl drop-cap" style={{ transform: "rotate(-1.5deg)" }}>
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <p className="mt-6 font-script text-lg text-[--accent-brass-text] tracking-wide" style={{ transform: "rotate(1deg)" }}>&mdash; {quote.author}</p>
              <div className="mt-8 flex items-center justify-center gap-2.5">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === current ? "w-8 bg-[--accent-brass]" : "w-1.5 bg-[--border-hairline] hover:bg-[--accent-brass]"
                    }`}
                    aria-label={`Show quote ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((p) => (p + 1) % quotes.length)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[--text-secondary] hover:text-[--accent-brass] transition-colors duration-400 group"
                aria-label="Next quote"
              >
                <RefreshCw className="h-3 w-3 transition-transform duration-400 group-hover:rotate-180" />
                Next quote
              </button>
            </ArchCardContent>
          </ArchCard>
        </ScaleReveal>
      </div>
    </section>
  )
}
