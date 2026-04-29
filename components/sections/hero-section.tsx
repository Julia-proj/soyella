"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="SOY ELLA — главный экран"
      className="relative min-h-[100svh] overflow-hidden bg-brand-ink"
    >
      {/* Background photo */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/soy-ella/hero-new.png"
          alt="SOY ELLA — женское комьюнити в Мадриде"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] sm:object-[center_40%] md:object-[center_45%]"
          style={{ filter: "saturate(0.95) contrast(1.02) brightness(0.9)" }}
        />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/50 via-brand-ink/30 to-brand-ink/80" />

      {/* Content - centered like reference */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        
        {/* Main title - large like Anna Schmidt */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(4rem,20vw,14rem)] leading-[0.85] tracking-[-0.02em] text-white"
        >
          Soy Ella
        </motion.h1>

        {/* Description - below title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-white/70 sm:mt-10 sm:max-w-2xl sm:text-lg md:text-xl"
        >
          Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост, качество жизни и сильное окружение.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#event"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 border border-white/30 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-brand-ink sm:mt-12 sm:px-10"
        >
          Следующая встреча
        </motion.a>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10"
      >
        <div className="site-shell flex items-center justify-between py-5 sm:py-6">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/40 sm:text-[0.65rem]">
            30 мая · Madrid
          </p>
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/40 sm:text-[0.65rem]">
            Beauty Day
          </p>
        </div>
      </motion.div>
    </section>
  )
}
