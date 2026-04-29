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
          src="/soy-ella/2nd.JPG"
          alt="SOY ELLA — женское комьюнити в Мадриде"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_65%] sm:object-[center_60%]"
          style={{ filter: "saturate(0.85) contrast(1.05) brightness(0.88)" }}
        />
      </motion.div>

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/70 via-brand-ink/30 to-brand-ink/80" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-ink/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32">
        
        {/* Top section with title */}
        <div className="flex-1 flex flex-col justify-center max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/50 sm:text-[0.7rem]"
          >
            Soy Ella
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-serif text-[2.5rem] leading-[1.1] text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост, качество жизни и сильное окружение.
          </motion.h1>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12 flex items-end justify-between border-t border-white/15 pt-6 sm:mt-16"
        >
          <div>
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/40 sm:text-[0.65rem]">
              Следующая встреча
            </p>
            <p className="mt-2 font-serif text-lg text-white/80 sm:text-xl">
              30 мая, Мадрид
            </p>
          </div>

          <a
            href="#event"
            className="group flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white sm:text-[0.7rem]"
          >
            <span>Узнать больше</span>
            <span className="inline-block h-px w-8 bg-white/40 transition-all group-hover:w-12 group-hover:bg-white" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
