export function JaliPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 100h200M100 0v200M0 0l200 200M200 0L0 200M0 50h200M0 150h200M50 0v200M150 0v200"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.15"
      />
      <path
        d="M100 50a50 50 0 010 100 50 50 0 010-100z"
        stroke="currentColor"
        strokeWidth="0.3"
        fill="none"
        opacity="0.1"
      />
      <path
        d="M100 70a30 30 0 010 60 30 30 0 010-60z"
        stroke="currentColor"
        strokeWidth="0.3"
        fill="none"
        opacity="0.08"
      />
      <path
        d="M0 100a20 20 0 0140 0 20 20 0 01-40 0zM160 100a20 20 0 0140 0 20 20 0 01-40 0zM100 0a20 20 0 0140 0 20 20 0 01-40 0zM100 160a20 20 0 0140 0 20 20 0 01-40 0z"
        stroke="currentColor"
        strokeWidth="0.3"
        fill="none"
        opacity="0.08"
      />
    </svg>
  )
}

export function DomeDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 20 Q10 20 15 18 Q20 16 25 18 Q30 20 40 18 Q50 15 60 10 Q70 15 80 18 Q90 20 95 18 Q100 16 105 18 Q110 20 120 20"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M0 25 Q10 25 15 23 Q20 21 25 23 Q30 25 40 23 Q50 20 60 15 Q70 20 80 23 Q90 25 95 23 Q100 21 105 23 Q110 25 120 25"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.5"
      />
      <circle cx="60" cy="8" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
      <circle cx="35" cy="18" r="1.5" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.3" />
      <circle cx="85" cy="18" r="1.5" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.3" />
    </svg>
  )
}

export function ArchTop({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
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
          className="fill-[--surface-card]"
        />
        <path
          d="M0 40V8 Q50 -2 100 4 Q150 10 200 0 Q250 10 300 4 Q350 -2 400 8V40"
          stroke="var(--border-hairline)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
      <div className="pt-6 md:pt-8">{children}</div>
    </div>
  )
}

export function ScallopedCorner({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className || ""}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 32V0h32"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M4 32V4h28"
        stroke="currentColor"
        strokeWidth="0.3"
        fill="none"
        opacity="0.3"
      />
      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.25" />
      <circle cx="16" cy="2" r="2" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.2" />
      <circle cx="2" cy="16" r="2" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.2" />
    </svg>
  )
}

export function ArchFrame({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 300 400"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 400V100 Q10 10 150 0 Q290 10 290 100V400"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M14 400V100 Q14 16 150 5 Q286 16 286 100V400"
        stroke="currentColor"
        strokeWidth="0.3"
        fill="none"
        opacity="0.3"
      />
    </svg>
  )
}

export function DoubleBorderFrame({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="396" height="116" rx="4" stroke="currentColor" strokeWidth="0.5" opacity="0.5" fill="none" />
      <rect x="6" y="6" width="388" height="108" rx="3" stroke="currentColor" strokeWidth="0.3" opacity="0.3" fill="none" />
      <circle cx="200" cy="60" r="20" stroke="currentColor" strokeWidth="0.3" opacity="0.15" fill="none" />
      <circle cx="200" cy="60" r="28" stroke="currentColor" strokeWidth="0.2" opacity="0.1" fill="none" />
    </svg>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Readers of Aurangabad"
      className={className}
      width={48}
      height={48}
    />
  )
}
