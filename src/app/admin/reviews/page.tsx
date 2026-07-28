"use client"

import { MessageSquare, Eye, EyeOff, Trash2 } from "lucide-react"

const reviews = [
  { id: "1", book: "The Alchemist", member: "Rahul D.", rating: 5, comment: "A beautiful story about following your dreams. Changed my perspective on life.", status: "visible" as const },
  { id: "2", book: "Atomic Habits", member: "Neha K.", rating: 4, comment: "Practical and actionable. Highly recommended for anyone looking to build better habits.", status: "visible" as const },
  { id: "3", book: "Sapiens", member: "Anon", rating: 1, comment: "Inappropriate content that violates guidelines.", status: "flagged" as const },
]

export default function AdminReviewsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-xl tracking-wide text-[--text-primary]">Reviews</h1>
        <p className="text-sm text-[--text-secondary]">{reviews.filter((r) => r.status === "flagged").length} flagged</p>
      </div>

      <div className="space-y-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-lg border border-[--border-hairline] bg-[--surface-card] px-4 py-3 amber-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[--text-primary]">{review.member}</span>
                  <span className="text-xs text-[--text-secondary]">on {review.book}</span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-xs ${i < review.rating ? "text-[--accent-brass]" : "text-[--border-hairline]"}`}>★</span>
                    ))}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[--text-secondary]">{review.comment}</p>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] shrink-0 ${
                  review.status === "flagged"
                    ? "bg-[--accent-burgundy]/10 text-[--accent-burgundy]"
                    : "bg-[--accent-emerald]/10 text-[--accent-emerald]"
                }`}
              >
                {review.status}
              </span>
            </div>
            <div className="mt-3 flex gap-2">
              {review.status === "flagged" ? (
                <button className="rounded border border-[--accent-emerald] px-2.5 py-1 text-[11px] text-[--accent-emerald] hover:bg-[--accent-emerald] hover:text-white transition-colors">
                  <Eye className="h-3 w-3 mr-1 inline" />
                  Approve
                </button>
              ) : (
                <button className="rounded border border-[--border-hairline] px-2.5 py-1 text-[11px] text-[--text-secondary] hover:border-[--accent-brass] hover:text-[--accent-brass] transition-colors">
                  <EyeOff className="h-3 w-3 mr-1 inline" />
                  Hide
                </button>
              )}
              <button
                onClick={() => confirm("Delete this review?")}
                className="rounded border border-[--border-hairline] px-2.5 py-1 text-[11px] text-[--text-secondary] hover:border-[--accent-burgundy] hover:text-[--accent-burgundy] transition-colors"
              >
                <Trash2 className="h-3 w-3 mr-1 inline" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
