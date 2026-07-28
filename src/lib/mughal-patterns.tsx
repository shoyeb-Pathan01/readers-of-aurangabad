import Image from "next/image"

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
    <Image
      src="/logo.png"
      alt="Readers of Aurangabad"
      className={className}
      width={48}
      height={48}
    />
  )
}

export function ChhatriLoader({ className }: { className?: string }) {
  return (
    <svg
      className={`chhatri-loader ${className || ""}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2L4 10h3v10h10V10h3L12 2z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
      <line x1="12" y1="14" x2="12" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  )
}

export function MinaretDivider({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className || ""}`}>
      <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-[--border-hairline] opacity-10" />
      <div className="absolute right-[20%] top-0 bottom-0 w-[1px] bg-[--border-hairline] opacity-10" />
      <svg
        width="80"
        height="30"
        viewBox="0 0 80 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[--accent-brass]"
        aria-hidden="true"
      >
        <path
          d="M40 25V5 Q38 3 35 5 Q32 7 30 5 Q28 3 25 5 Q22 7 20 5 Q18 3 15 5 Q12 7 10 5 Q8 3 5 5 Q3 7 0 5"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
        />
        <circle cx="40" cy="2" r="2" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.25" />
      </svg>
    </div>
  )
}

export function IwanGateway({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className || ""}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M100 600V200 Q100 50 400 20 Q700 50 700 200V600"
          stroke="var(--border-hairline)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.15"
        />
        <path
          d="M120 600V200 Q120 70 400 35 Q680 70 680 200V600"
          stroke="var(--border-hairline)"
          strokeWidth="0.3"
          fill="none"
          opacity="0.08"
        />
        <rect
          x="90" y="595" width="620" height="5"
          stroke="var(--border-hairline)"
          strokeWidth="0.3"
          fill="none"
          opacity="0.1"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function CharbaghGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className || ""}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="0.5" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="0.3" fill="none" />
        <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.2" fill="none" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function HeartDoodle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21C12 21 3.5 15.5 3.5 9.5C3.5 6.5 5.8 4.5 8 4.5C9.5 4.5 11 5.5 12 7C13 5.5 14.5 4.5 16 4.5C18.2 4.5 20.5 6.5 20.5 9.5C20.5 15.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19.5C12 19.5 5 15 5 10C5 7.8 6.5 6 8.5 6C10 6 11.5 7 12 8.5C12.5 7 14 6 15.5 6C17.5 6 19 7.8 19 10C19 15 12 19.5 12 19.5Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />
    </svg>
  )
}

export function TwineBow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 12C20 12 26 4 32 4C36 4 38 7 38 10C38 14 34 16 20 12Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M20 12C20 12 14 4 8 4C4 4 2 7 2 10C2 14 6 16 20 12Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M18 12L14 20"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M22 12L26 20"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        opacity="0.4"
      />
      <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
    </svg>
  )
}
