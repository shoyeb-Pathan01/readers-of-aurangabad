import type { Metadata } from "next"
import { BookOpen, Search } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldButton } from "@/components/ui/gold-button"

export const metadata: Metadata = {
  title: "Books",
  description: "Explore books recommended by the Readers of Aurangabad community — curated reads from fellow members.",
}

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", difficulty: "Easy", suggestedBy: "Community Pick" },
  { title: "Atomic Habits", author: "James Clear", category: "Self-Development", difficulty: "Easy", suggestedBy: "Ananya P." },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", difficulty: "Medium", suggestedBy: "Rahul D." },
  { title: "The God of Small Things", author: "Arundhati Roy", category: "Fiction", difficulty: "Medium", suggestedBy: "Priya S." },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", difficulty: "Hard", suggestedBy: "Vikram M." },
  { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", category: "Biography", difficulty: "Easy", suggestedBy: "Neha K." },
  { title: "1984", author: "George Orwell", category: "Fiction", difficulty: "Medium", suggestedBy: "Arjun R." },
  { title: "Deep Work", author: "Cal Newport", category: "Productivity", difficulty: "Medium", suggestedBy: "Community Pick" },
]

const categories = ["All", "Fiction", "Non-Fiction", "Self-Development", "Psychology", "Biography", "Productivity"]

export default function BooksPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Books"
          subtitle="Curated recommendations from our community — find your next read"
        />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[--text-secondary]" />
            <input
              type="search"
              placeholder="Search books..."
              className="w-full rounded-md border border-[--border-hairline] bg-[--surface-card] py-2 pl-10 pr-3 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-gold] focus:outline-none focus:ring-1 focus:ring-[--accent-gold]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="rounded-md border border-[--border-hairline] px-3 py-1.5 text-xs text-[--text-secondary] hover:border-[--accent-gold] hover:text-[--accent-gold] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <ArchCard key={book.title} className="h-full">
              <ArchCardContent className="flex flex-col pt-6">
                <div className="mx-auto mb-4 flex h-36 w-28 items-center justify-center rounded border border-[--border-hairline] bg-[--bg-base] text-[--accent-gold] amber-shadow">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-base tracking-wide text-[--text-primary]">{book.title}</h3>
                <p className="text-xs text-[--text-secondary]">{book.author}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[--accent-burgundy]/10 px-2 py-0.5 text-[10px] text-[--accent-burgundy]">
                    {book.category}
                  </span>
                  <span className="rounded-full bg-[--accent-forest]/10 px-2 py-0.5 text-[10px] text-[--accent-forest]">
                    {book.difficulty}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[--text-secondary]">Suggested by {book.suggestedBy}</p>
              </ArchCardContent>
            </ArchCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[--text-secondary]">
            Have a book to recommend?{' '}
            <a href="/contact" className="text-[--accent-gold] hover:underline">Suggest it here</a>
          </p>
        </div>
      </div>
    </div>
  )
}
