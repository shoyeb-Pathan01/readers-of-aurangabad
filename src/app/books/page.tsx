import type { Metadata } from "next"
import { BookOpen, Star, Clock } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArchCard, ArchCardContent } from "@/components/ui/arch-card"
import { GoldLink } from "@/components/ui/gold-button"

export const metadata: Metadata = {
  title: "Books",
  description: "Explore books recommended by the Readers of Aurangabad community — curated reads from fellow members.",
}

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", difficulty: "Easy", suggestedBy: "Community Pick", rating: 4.5, pages: 208 },
  { title: "Atomic Habits", author: "James Clear", category: "Self-Development", difficulty: "Easy", suggestedBy: "Ananya P.", rating: 4.5, pages: 320 },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", difficulty: "Medium", suggestedBy: "Rahul D.", rating: 4.5, pages: 464 },
  { title: "The God of Small Things", author: "Arundhati Roy", category: "Fiction", difficulty: "Medium", suggestedBy: "Priya S.", rating: 4, pages: 340 },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", difficulty: "Hard", suggestedBy: "Vikram M.", rating: 4, pages: 512 },
  { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", category: "Biography", difficulty: "Easy", suggestedBy: "Neha K.", rating: 4.5, pages: 180 },
  { title: "1984", author: "George Orwell", category: "Fiction", difficulty: "Medium", suggestedBy: "Arjun R.", rating: 4.5, pages: 328 },
  { title: "Deep Work", author: "Cal Newport", category: "Productivity", difficulty: "Medium", suggestedBy: "Community Pick", rating: 4, pages: 296 },
]

const difficultyColors: Record<string, string> = {
  Easy: "text-[--accent-forest] border-[--accent-forest]/40 bg-[--accent-forest]/8",
  Medium: "text-[--accent-gold] border-[--accent-gold]/40 bg-[--accent-gold]/8",
  Hard: "text-[--accent-burgundy] border-[--accent-burgundy]/40 bg-[--accent-burgundy]/8",
}

export default function BooksPage() {
  return (
    <div className="py-36 md:py-44">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          title="Books"
          subtitle="Curated recommendations from our community — find your next read"
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <ArchCard key={book.title} className="h-full group">
              <ArchCardContent className="flex flex-col pt-8 pb-6">
                <div className="mx-auto mb-5 flex h-44 w-32 items-center justify-center rounded-sm border border-[--border-hairline] bg-[--bg-base] card-shadow-warm transition-all duration-500 group-hover:card-shadow-lift group-hover:-translate-y-1.5 group-hover:border-[--accent-gold]">
                  <BookOpen className="h-10 w-10 text-[--accent-gold]" />
                </div>
                <h3 className="font-heading text-xl tracking-wide text-[--text-primary] group-hover:text-[--accent-gold] transition-colors duration-400">{book.title}</h3>
                <p className="text-sm text-[--text-secondary] mt-0.5">{book.author}</p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-[--accent-gold]">
                  <Star className="h-3 w-3 fill-[--accent-gold]" />
                  <span>{book.rating}</span>
                  <span className="text-[--text-secondary]">&middot;</span>
                  <Clock className="h-3 w-3" />
                  <span className="text-[--text-secondary]">{book.pages} pages</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[--accent-burgundy]/30 px-3 py-1 text-xs text-[--accent-burgundy]">
                    {book.category}
                  </span>
                  <span className={`rounded-full border px-3 py-1 text-xs ${difficultyColors[book.difficulty]}`}>
                    {book.difficulty}
                  </span>
                </div>
                <p className="mt-3 text-xs text-[--text-secondary]">Suggested by {book.suggestedBy}</p>
              </ArchCardContent>
            </ArchCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-[--text-secondary]">
            Have a book to recommend?{' '}
            <a href="/contact" className="text-[--accent-gold] hover:underline">Suggest it here</a>
          </p>
        </div>
      </div>
    </div>
  )
}
