"use client"

import { motion } from "framer-motion"

interface MarqueeTextProps {
  variant?: "blue" | "yellow" | "cream"
  className?: string
}

export function MarqueeText({ variant = "blue", className = "" }: MarqueeTextProps) {
  const word = "Soy Ella"
  const separator = "   ·   "
  const repeated = Array(12).fill(word + separator).join("")

  const styles: Record<string, string> = {
    blue:   "bg-brand-blue text-white",
    yellow: "bg-brand-yellow text-brand-blue",
    cream:  "bg-brand-cream text-brand-blue border-y border-brand-blue/10",
  }

  return (
    <div
      className={`overflow-hidden py-4 sm:py-5 ${styles[variant]} ${className}`}
      aria-hidden
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 28,
          ease: "linear",
        }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-display text-xl uppercase tracking-[0.25em] sm:text-2xl md:text-3xl lg:text-4xl"
          >
            {repeated}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
