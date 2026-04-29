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
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/soy-ella/hero-new.png"
          alt="SOY ELLA — женское комьюнити в Мадриде"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] sm:object-[center_45%] md:object-center"
          style={{ filter: "saturate(0.92) contrast(1.02) brightness(0.95)" }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-transparent to-brand-ink/70" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-ink/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14 md:pb-16">
        
        {/* Main content area */}
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-brand-gold sm:text-[0.65rem]"
          >
            Soy Ella
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-serif text-[1.75rem] leading-[1.2] text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост, качество жизни и сильное окружение.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-base"
          >
            Камерные встречи, экспертный круг и среда, в которой решения рождаются за одним столом.
          </motion.p>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-10 flex items-end justify-between border-t border-white/15 pt-5 sm:mt-14 sm:pt-6"
        >
          <div>
            <p className="text-[0.55rem] font-medium uppercase tracking-[0.25em] text-white/40 sm:text-[0.6rem]">
              Следующая встреча
            </p>
            <p className="mt-1.5 font-serif text-base text-white/80 sm:text-lg">
              30 мая, Мадрид
            </p>
          </div>

          <a
            href="#event"
            className="group flex items-center gap-3 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:text-[0.65rem]"
          >
            <span>Узнать больше</span>
            <span className="inline-block h-px w-6 bg-white/40 transition-all group-hover:w-10 group-hover:bg-brand-gold sm:w-8" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
