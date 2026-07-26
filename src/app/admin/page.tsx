import Link from "next/link"
import { BookOpen, Users, Calendar, Image, MessageSquare, Settings } from "lucide-react"
import { LogoMark } from "@/lib/mughal-patterns"

const adminSections = [
  { icon: BookOpen, label: "Books", href: "/admin/books", count: "2 pending" },
  { icon: Users, label: "Members", href: "/admin/members", count: "5 active" },
  { icon: Calendar, label: "Meetups", href: "/admin/meetups", count: "1 upcoming" },
  { icon: Image, label: "Gallery", href: "/admin/gallery", count: "3 albums" },
  { icon: MessageSquare, label: "Reviews", href: "/admin/reviews", count: "1 flagged" },
  { icon: Settings, label: "Settings", href: "/admin/settings", count: "" },
]

export default function AdminPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        <LogoMark className="h-8 w-8 text-[--accent-gold]" />
        <div>
          <h1 className="font-heading text-xl tracking-wide text-[--text-primary]">Admin Dashboard</h1>
          <p className="text-xs text-[--text-secondary]">Manage Readers of Aurangabad</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {adminSections.map((section) => {
          const Icon = section.icon
          return (
            <Link
              key={section.label}
              href={section.href}
              className="group rounded-lg border border-[--border-hairline] bg-[--surface-card] p-6 amber-shadow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[--accent-gold] text-[--accent-gold] group-hover:bg-[--accent-gold] group-hover:text-[--bg-base] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base tracking-wide text-[--text-primary]">{section.label}</h3>
                  {section.count && (
                    <p className="text-xs text-[--text-secondary]">{section.count}</p>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 rounded-lg border border-[--border-hairline] bg-[--surface-card] p-6 amber-shadow">
        <h2 className="font-heading text-lg tracking-wide text-[--accent-gold]">Recent Activity</h2>
        <div className="mt-4 space-y-3">
          {[
            { action: "New book suggested", detail: "The Art of Happiness by Priya S.", time: "2 hours ago" },
            { action: "New member joined", detail: "Vikram Mehta", time: "1 day ago" },
            { action: "Meetup created", detail: "August 2 — Siddharth Garden", time: "2 days ago" },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-md border border-[--border-hairline] bg-[--bg-base] px-4 py-3"
            >
              <div>
                <p className="text-sm text-[--text-primary]">{activity.action}</p>
                <p className="text-xs text-[--text-secondary]">{activity.detail}</p>
              </div>
              <span className="text-[10px] text-[--text-secondary]">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
