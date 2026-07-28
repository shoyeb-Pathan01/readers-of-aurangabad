import { cn } from "@/lib/utils"
import { DomeDivider } from "@/lib/mughal-patterns"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-3xl mx-auto", className)}>
      <h2 className="font-heading text-3xl tracking-wide text-[--text-primary] sm:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[--text-secondary] sm:text-lg">
          {subtitle}
        </p>
      )}
      <DomeDivider className="mt-6 text-[--accent-gold]" />
    </div>
  )
}
