export function ArchCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-b-lg border border-[--border-hairline] bg-[--surface-card] amber-shadow animate-pulse">
      <svg
        className="absolute top-0 left-0 w-full h-8 md:h-10 pointer-events-none"
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40H0Z" className="fill-[--bg-base]" />
      </svg>
      <div className="pt-8 md:pt-10 px-4 pb-4 md:px-5 md:pb-5">
        <div className="h-36 w-28 mx-auto mb-4 rounded bg-[--bg-alt]" />
        <div className="h-4 w-3/4 mx-auto rounded bg-[--bg-alt]" />
        <div className="mt-2 h-3 w-1/2 mx-auto rounded bg-[--bg-alt]" />
        <div className="mt-3 flex justify-center gap-2">
          <div className="h-4 w-14 rounded-full bg-[--bg-alt]" />
          <div className="h-4 w-14 rounded-full bg-[--bg-alt]" />
        </div>
      </div>
    </div>
  )
}

const SKELETON_LINE_WIDTHS = [92, 78, 85, 70, 96, 82]

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-3 rounded bg-[--bg-alt]"
          style={{ width: `${SKELETON_LINE_WIDTHS[i % SKELETON_LINE_WIDTHS.length]}%` }}
        />
      ))}
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center animate-pulse">
      <div className="text-center">
        <div className="mx-auto h-12 w-64 rounded bg-[--bg-alt] mb-6" />
        <div className="mx-auto h-4 w-96 rounded bg-[--bg-alt]" />
        <div className="mt-10 flex justify-center gap-4">
          <div className="h-12 w-36 rounded-md bg-[--bg-alt]" />
          <div className="h-12 w-36 rounded-md bg-[--bg-alt]" />
        </div>
      </div>
    </div>
  )
}
