"use client"

import { useState } from "react"
import { BookOpen, Plus, Check, X, Search } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { GoldButton } from "@/components/ui/gold-button"

const initialBooks = [
  { id: "1", title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", suggestedBy: "Priya S.", status: "approved" as const },
  { id: "2", title: "The Art of Happiness", author: "Dalai Lama", category: "Self-Development", suggestedBy: "Rahul D.", status: "pending" as const },
  { id: "3", title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", suggestedBy: "Neha K.", status: "pending" as const },
  { id: "4", title: "Atomic Habits", author: "James Clear", category: "Self-Development", suggestedBy: "Ananya P.", status: "approved" as const },
  { id: "5", title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", suggestedBy: "Rahul D.", status: "rejected" as const },
]

export default function AdminBooksPage() {
  const [books, setBooks] = useState(initialBooks)
  const [search, setSearch] = useState("")

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()),
  )

  const pendingCount = books.filter((b) => b.status === "pending").length

  const approve = (id: string) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "approved" as const } : b)),
    )
  }

  const reject = (id: string) => {
    const reason = prompt("Enter reason for rejection:")
    if (reason) {
      setBooks((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: "rejected" as const } : b)),
      )
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="font-heading text-xl tracking-wide text-[--text-primary]">Books</h1>
          <p className="text-sm text-[--text-secondary]">
            {pendingCount} pending approval
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[--text-secondary]" />
            <input
              type="search"
              placeholder="Search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-48 rounded-md border border-[--border-hairline] bg-[--bg-base] py-2 pl-10 pr-3 text-sm text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-brass] focus:outline-none focus:ring-1 focus:ring-[--accent-brass]"
            />
          </div>
          <GoldButton variant="primary" size="sm">
            <Plus className="h-4 w-4" />
            Add Book
          </GoldButton>
        </div>
      </div>

      <div className="rounded-lg border border-[--border-hairline] bg-[--surface-card] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[--border-hairline] bg-[--bg-alt]">
                <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Title</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Author</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Suggested By</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[--text-secondary]">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-[--text-secondary]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((book) => (
                <tr key={book.id} className="border-b border-[--border-hairline] last:border-0">
                  <td className="px-4 py-3 text-[--text-primary]">{book.title}</td>
                  <td className="px-4 py-3 text-[--text-secondary]">{book.author}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-[--accent-burgundy]/10 px-2 py-0.5 text-[10px] text-[--accent-burgundy]">
                      {book.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[--text-secondary]">{book.suggestedBy}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] ${
                        book.status === "approved"
                          ? "bg-[--accent-emerald]/10 text-[--accent-emerald]"
                          : book.status === "rejected"
                            ? "bg-[--accent-burgundy]/10 text-[--accent-burgundy]"
                            : "bg-[--accent-brass]/10 text-[--accent-brass]"
                      }`}
                    >
                      {book.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    {book.status === "pending" ? (
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => approve(book.id)}
                          className="rounded border border-[--accent-emerald] px-2.5 py-1 text-[11px] text-[--accent-emerald] hover:bg-[--accent-emerald] hover:text-white transition-colors"
                        >
                          <Check className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => reject(book.id)}
                          className="rounded border border-[--accent-burgundy] px-2.5 py-1 text-[11px] text-[--accent-burgundy] hover:bg-[--accent-burgundy] hover:text-white transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          if (confirm("Delete this book?")) {
                            setBooks((prev) => prev.filter((b) => b.id !== book.id))
                          }
                        }}
                        className="rounded border border-[--border-hairline] px-2.5 py-1 text-[11px] text-[--text-secondary] hover:border-[--accent-burgundy] hover:text-[--accent-burgundy] transition-colors"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center py-12 text-center">
            <BookOpen className="mb-3 h-8 w-8 text-[--accent-brass]" />
            <p className="text-sm text-[--text-secondary]">No books found</p>
          </div>
        )}
      </div>
    </div>
  )
}
