import type { Metadata } from "next"
import { SectionHeader } from "@/components/ui/section-header"
import { Book3D } from "@/components/ui/book-3d"

export const metadata: Metadata = {
  title: "Books",
  description: "Explore books recommended by the Readers of Aurangabad community — curated reads from fellow members.",
}

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", difficulty: "Easy", suggestedBy: "Community Pick", rating: 4.5, pages: 208, summary: "A journey of following your dreams." },
  { title: "Atomic Habits", author: "James Clear", category: "Self-Development", difficulty: "Easy", suggestedBy: "Ananya P.", rating: 4.5, pages: 320, summary: "Small changes, remarkable results." },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", difficulty: "Medium", suggestedBy: "Rahul D.", rating: 4.5, pages: 464, summary: "The history of humankind." },
  { title: "The God of Small Things", author: "Arundhati Roy", category: "Fiction", difficulty: "Medium", suggestedBy: "Priya S.", rating: 4, pages: 340, summary: "A story of love and tragedy." },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", difficulty: "Hard", suggestedBy: "Vikram M.", rating: 4, pages: 512, summary: "Two systems that shape our judgments." },
  { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", category: "Biography", difficulty: "Easy", suggestedBy: "Neha K.", rating: 4.5, pages: 180, summary: "An autobiography of a dreamer." },
  { title: "1984", author: "George Orwell", category: "Fiction", difficulty: "Medium", suggestedBy: "Arjun R.", rating: 4.5, pages: 328, summary: "A dystopian masterpiece." },
  { title: "Deep Work", author: "Cal Newport", category: "Productivity", difficulty: "Medium", suggestedBy: "Community Pick", rating: 4, pages: 296, summary: "Focused success in a distracted world." },
]

export default function BooksPage() {
  return (
    <div>
      <div className="py-20 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeader
            title="Books"
            subtitle="Curated recommendations from our community — find your next read"
          />
        </div>
      </div>

      <div className="bg-library py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
            {books.map((book) => (
              <div key={book.title} className="flex flex-col items-center">
                <Book3D
                  title={book.title}
                  author={book.author}
                  category={book.category}
                  rating={book.rating}
                  difficulty={book.difficulty}
                  summary={book.summary}
                  suggestedBy={book.suggestedBy}
                />
                <div className="mt-3 text-center">
                  <h3 className="font-heading text-xs tracking-wide text-[--text-on-library]">{book.title}</h3>
                  <p className="text-[10px] text-[--text-on-library]/70">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 text-center">
          <p className="text-sm text-[--text-secondary]">
            Have a book to recommend?{' '}
            <a href="/contact" className="text-[--accent-brass-text] hover:underline">Suggest it here</a>
          </p>
        </div>
      </div>
    </div>
  )
}
