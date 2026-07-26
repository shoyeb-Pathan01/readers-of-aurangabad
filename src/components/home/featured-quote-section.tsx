"use client"

import { Quote, RefreshCw } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { ScallopedCorner } from "@/lib/mughal-patterns"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { useState, useEffect } from "react"

const quotes = [
  {
    text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    author: "George R.R. Martin",
  },
  {
    text: "Books are a uniquely portable magic.",
    author: "Stephen King",
  },
  {
    text: "The only thing you absolutely have to know is the location of the library.",
    author: "Albert Einstein",
  },
  {
    text: "Reading is to the mind what exercise is to the body.",
    author: "Joseph Addison",
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
]

export function FeaturedQuoteSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const quote = quotes[current]

  return (
    <section className="bg-[--bg-alt] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="A Moment with Books"
          subtitle="Words that inspire our reading journey"
        />

        <FadeIn key={current} delay={0.2}>
          <ArchCard className="relative mt-12 text-center">
            <ScallopedCorner className="top-2 left-2 text-[--accent-gold]" />
            <ScallopedCorner className="top-2 right-2 text-[--accent-gold] scale-x-[-1]" />
            <ArchCardContent className="px-8 py-10">
              <Quote className="mx-auto mb-6 h-8 w-8 text-[--accent-gold] opacity-40" />
              <blockquote className="font-quote text-xl leading-relaxed italic text-[--text-primary] sm:text-2xl">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <p className="mt-6 text-sm text-[--accent-gold]">— {quote.author}</p>
              <div className="mt-6 flex items-center justify-center gap-2">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-[--accent-gold]"
                        : "w-1.5 bg-[--border-hairline] hover:bg-[--accent-gold]"
                    }`}
                    aria-label={`Show quote ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % quotes.length)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[--text-secondary] hover:text-[--accent-gold] transition-colors"
                aria-label="Next quote"
              >
                <RefreshCw className="h-3 w-3" />
                Next quote
              </button>
            </ArchCardContent>
          </ArchCard>
        </FadeIn>
      </div>
    </section>
  )
}
