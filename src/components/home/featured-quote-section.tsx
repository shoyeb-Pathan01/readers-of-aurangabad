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
    <section className="py-36 md:py-44 bg-texture warm-light">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <SectionHeader title="A Moment with Books" subtitle="Words that inspire our reading journey" />

        <ScaleReveal key={current}>
          <ArchCard className="relative mt-16 md:mt-20 text-center">
            <ArchCardContent className="px-10 py-14 md:px-14">
              <Quote className="mx-auto mb-8 h-10 w-10 text-[--accent-gold] opacity-20" />
              <blockquote className="font-quote text-2xl leading-relaxed italic text-[--text-primary] sm:text-3xl md:text-4xl">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <p className="mt-8 text-base text-[--accent-gold] tracking-wide">&mdash; {quote.author}</p>
              <div className="mt-10 flex items-center justify-center gap-3">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === current ? "w-10 bg-[--accent-gold]" : "w-1.5 bg-[--border-hairline] hover:bg-[--accent-gold]"
                    }`}
                    aria-label={`Show quote ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((p) => (p + 1) % quotes.length)}
                className="mt-5 inline-flex items-center gap-2 text-sm text-[--text-secondary] hover:text-[--accent-gold] transition-colors duration-400 group"
                aria-label="Next quote"
              >
                <RefreshCw className="h-3.5 w-3.5 transition-transform duration-400 group-hover:rotate-180" />
                Next quote
              </button>
            </ArchCardContent>
          </ArchCard>
        </ScaleReveal>
      </div>
    </section>
  )
}
