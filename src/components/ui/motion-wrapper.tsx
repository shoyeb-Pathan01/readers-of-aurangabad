"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
}

export function FadeIn({ children, className, delay = 0, y = 24, duration = 0.8 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, margin: "-30px" })
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    if (inView && !hasBeenVisible) setHasBeenVisible(true)
  }, [inView, hasBeenVisible])

  const isVisible = hasBeenVisible || inView

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, margin: "-30px" })
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    if (inView && !hasBeenVisible) setHasBeenVisible(true)
  }, [inView, hasBeenVisible])

  const isVisible = hasBeenVisible || inView

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, ease: [0.25, 0.1, 0.25, 1] } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ClipReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      animate={inView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : {}}
      transition={{ duration: 1, delay, ease: [0.65, 0, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.92, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CountUp({
  end,
  duration = 2,
  suffix = "",
  className,
}: {
  end: number
  duration?: number
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: false, margin: "-30px" })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      <CountAnimation end={end} duration={duration} inView={inView} suffix={suffix} />
    </motion.span>
  )
}

function CountAnimation({ end, duration, inView, suffix }: { end: number; duration: number; inView: boolean; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(eased * end)
        if (ref.current) ref.current.textContent = `${current}${suffix}`
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration, suffix])

  return <span ref={ref}>0{suffix}</span>
}
