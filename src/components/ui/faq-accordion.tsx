"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "When and where do you meet?",
    a: "We meet every Sunday at a different location across Aurangabad. Each meetup lasts 90 minutes — 45–60 minutes of silent reading, followed by tea and discussion. Check our Meetups page for the upcoming schedule.",
  },
  {
    q: "Do I need to bring my own book?",
    a: "Yes, bring whatever you are currently reading. If you do not have a book, we maintain a small community library you can borrow from during the meetup.",
  },
  {
    q: "Is there a membership fee?",
    a: "No. Joining Readers of Aurangabad is completely free. We believe reading together should be accessible to everyone.",
  },
  {
    q: "What kind of books do people read?",
    a: "Everything — fiction, non-fiction, self-development, biographies, poetry, academic texts. Our members have diverse tastes and we encourage that. There is no assigned reading.",
  },
  {
    q: "Do I have to be an avid reader to join?",
    a: "Not at all. Whether you read one book a year or one a week, you are welcome. Many members joined to build a reading habit and found the structured time helpful.",
  },
  {
    q: "Can I suggest a book for the community?",
    a: "Absolutely. We have a suggestion box on our Books page. Community-recommended reads are featured regularly.",
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-12 space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={cn(
              "rounded-sm border border-[--border-hairline] bg-[--surface-card] transition-all duration-300",
              isOpen && "border-[--accent-brass]/40",
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-heading tracking-wide text-[--text-primary]">{faq.q}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[--accent-brass] transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-[--text-secondary]">{faq.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}