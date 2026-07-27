"use client"

import { Quote, RefreshCw } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { ScallopedCorner } from "@/lib/mughal-patterns"
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
    const timer = setInterval(() => setCurrent((p) => (p + 1) % quotes.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const quote = quotes[current]

  return (
    <section className="py-24 md:py-36 bg-texture">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="A Moment with Books" subtitle="Words that inspire our reading journey" />

        <ScaleReveal key={current}>
          <ArchCard className="relative mt-16 text-center">
            <ScallopedCorner className="top-2 left-2 text-[--accent-gold]" />
            <ScallopedCorner className="top-2 right-2 text-[--accent-gold] scale-x-[-1]" />
            <ArchCardContent className="px-8 py-12 md:px-12">
              <Quote className="mx-auto mb-6 h-10 w-10 text-[--accent-gold] opacity-25" />
              <blockquote className="font-quote text-2xl leading-relaxed italic text-[--text-primary] sm:text-3xl">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <p className="mt-8 text-sm text-[--accent-gold] tracking-wide">&mdash; {quote.author}</p>
              <div className="mt-8 flex items-center justify-center gap-2">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === current ? "w-8 bg-[--accent-gold]" : "w-1.5 bg-[--border-hairline] hover:bg-[--accent-gold]"
                    }`}
                    aria-label={`Show quote ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((p) => (p + 1) % quotes.length)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[--text-secondary] hover:text-[--accent-gold] transition-colors group"
                aria-label="Next quote"
              >
                <RefreshCw className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                Next quote
              </button>
            </ArchCardContent>
          </ArchCard>
        </ScaleReveal>
      </div>
    </section>
  )
}
