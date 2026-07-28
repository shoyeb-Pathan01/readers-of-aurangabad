import { cn } from "@/lib/utils"
import { DomeDivider } from "@/lib/mughal-patterns"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-2xl mx-auto", className)}>
      <h2 className="font-heading text-2xl tracking-wide text-[--text-primary] sm:text-3xl lg:text-4xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-[--text-secondary] sm:text-base">
          {subtitle}
        </p>
      )}
      <DomeDivider className="mt-4 text-[--accent-gold]" />
    </div>
  )
}
