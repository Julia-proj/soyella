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
      {/* Photo with scale animation */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/soy-ella/2nd.JPG"
          alt="SOY ELLA — женское комьюнити в Мадриде"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
          style={{ filter: 'saturate(0.85) contrast(1.05)' }}
        />
      </motion.div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/40 via-brand-ink/20 to-brand-ink/60" />

      {/* Top bar with logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 right-0 top-0 z-20 px-5 pt-6 sm:px-8 sm:pt-8"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="font-display text-sm tracking-[0.15em] text-white/90 sm:text-base">
            SOY ELLA
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-[0.65rem]">
            Madrid · 2024
          </span>
        </div>
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white/70 sm:mb-8 sm:text-[0.7rem] sm:tracking-[0.35em]"
        >
          Закрытое женское комьюнити
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display hero-title text-white"
        >
          Soy Ella.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-[22rem] text-[0.85rem] font-light leading-relaxed text-white/80 sm:mt-10 sm:max-w-md sm:text-base md:max-w-lg md:text-lg"
        >
          Камерные встречи, экспертный круг и среда, в которой решения рождаются за одним столом.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12"
        >
          <a
            href="#event"
            className="inline-flex items-center justify-center border border-white/30 bg-transparent px-8 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-white hover:text-brand-ink sm:px-10 sm:py-4 sm:text-[0.7rem]"
          >
            Занять место
          </a>
        </motion.div>
      </div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-6 sm:px-8 sm:pb-8"
      >
        <div className="mx-auto flex max-w-[1400px] items-end justify-between">
          <div>
            <p className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.6rem]">
              Следующая встреча
            </p>
            <p className="mt-1 font-serif text-sm text-white/80 sm:text-base">
              30 мая · Мадрид
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[0.55rem] font-medium uppercase tracking-[0.25em] text-white/40 sm:text-[0.6rem]">
              Scroll
            </span>
            <div className="mt-2 h-8 w-px bg-gradient-to-b from-white/40 to-transparent sm:h-10" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
