import Link from "next/link"
import { cn } from "@/lib/utils"

interface ArchCardProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export function ArchCard({ children, className, href }: ArchCardProps) {
  const shared = cn(
    "relative overflow-hidden rounded-b-lg",
    "bg-[--surface-card] border border-[--border-hairline]",
    "amber-shadow",
    "transition-all duration-300",
    href && "hover:-translate-y-1.5 hover:shadow-[0_8px_32px_-8px_var(--shadow-card)]",
    className,
  )

  const content = (
    <>
      <svg
        className="absolute top-0 left-0 w-full h-8 md:h-10 pointer-events-none"
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40H0Z"
          className="fill-[--bg-base]"
        />
        <path
          d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40"
          stroke="var(--border-hairline)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
      <div className="pt-8 md:pt-10 h-full">{children}</div>
    </>
  )

  if (href) {
    return <Link href={href} className={shared}>{content}</Link>
  }

  return <div className={shared}>{content}</div>
}

export function ArchCardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-4 pb-4 md:px-5 md:pb-5", className)}>{children}</div>
}
