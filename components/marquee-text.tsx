"use client"

import { motion } from "framer-motion"

interface MarqueeTextProps {
  text?: string
  variant?: "blue" | "yellow" | "cream"
  className?: string
}

export function MarqueeText({ variant = "blue", className = "" }: MarqueeTextProps) {
  const content = "Soy Ella  +++  Madrid  +++  Closed Community  +++  Quality over Quantity  +++  "

  const styles = {
    blue: "bg-brand-blue text-brand-yellow",
    yellow: "bg-brand-yellow text-brand-blue",
    cream: "bg-brand-cream text-brand-blue border-y border-brand-blue/15",
  }

  return (
    <div className={`overflow-hidden py-5 sm:py-6 ${styles[variant]} ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
      >
        <span className="font-display text-2xl tracking-[0.08em] sm:text-3xl md:text-4xl lg:text-5xl">
          {content}
        </span>
        <span className="font-display text-2xl tracking-[0.08em] sm:text-3xl md:text-4xl lg:text-5xl">
          {content}
        </span>
        <span className="font-display text-2xl tracking-[0.08em] sm:text-3xl md:text-4xl lg:text-5xl">
          {content}
        </span>
      </motion.div>
    </div>
  )
}
