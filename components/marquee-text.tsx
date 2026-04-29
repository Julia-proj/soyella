"use client"

import { motion } from "framer-motion"

interface MarqueeTextProps {
  text: string
  className?: string
}

export function MarqueeText({ text, className = "" }: MarqueeTextProps) {
  const repeatedText = `${text} · ${text} · ${text} · ${text} · `

  return (
    <div className={`overflow-hidden py-8 sm:py-10 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        <span className="font-serif text-4xl text-brand-ink/10 sm:text-5xl md:text-6xl lg:text-7xl">
          {repeatedText}
        </span>
        <span className="font-serif text-4xl text-brand-ink/10 sm:text-5xl md:text-6xl lg:text-7xl">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  )
}
