import Link from "next/link"
import { BookOpen, Users, Calendar, Image, MessageSquare, Settings, LayoutDashboard, ArrowLeft } from "lucide-react"

const adminNav = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: BookOpen, label: "Books", href: "/admin/books" },
  { icon: Users, label: "Members", href: "/admin/members" },
  { icon: Calendar, label: "Meetups", href: "/admin/meetups" },
  { icon: Image, label: "Gallery", href: "/admin/gallery" },
  { icon: MessageSquare, label: "Reviews", href: "/admin/reviews" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="hidden w-64 shrink-0 border-r border-[--border-hairline] bg-[--bg-alt] lg:block">
        <div className="p-4">
          <Link
            href="/"
            className="mb-6 flex items-center gap-2 text-xs text-[--text-secondary] hover:text-[--accent-gold] transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to site
          </Link>
          <nav className="space-y-1">
            {adminNav.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-[--text-secondary] hover:bg-[--surface-card] hover:text-[--accent-gold] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      <div className="flex-1 p-6 lg:p-8">
        <div className="mx-auto max-w-5xl">{children}</div>
      </div>
    </div>
  )
}
