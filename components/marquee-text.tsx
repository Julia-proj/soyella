"use client"

import { motion } from "framer-motion"

interface MarqueeTextProps {
  text?: string
  className?: string
}

export function MarqueeText({ className = "" }: MarqueeTextProps) {
  const content = "Soy Ella · Soy Ella · Soy Ella · Soy Ella · "

  return (
    <div className={`overflow-hidden border-y border-brand-ink/10 py-6 sm:py-8 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        <span className="font-display text-3xl tracking-[0.15em] text-brand-ink sm:text-4xl md:text-5xl lg:text-6xl">
          {content}
        </span>
        <span className="font-display text-3xl tracking-[0.15em] text-brand-ink sm:text-4xl md:text-5xl lg:text-6xl">
          {content}
        </span>
      </motion.div>
    </div>
  )
}
