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
      {/* Background photo — pushed down via object position */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/soy-ella/2nd.JPG"
          alt="SOY ELLA — женское комьюнити в Мадриде"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_75%]"
          style={{ filter: "saturate(0.8) contrast(1.08) brightness(0.92)" }}
        />
      </motion.div>

      {/* Layered overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/55 via-brand-ink/10 to-brand-ink/70" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-ink/60 to-transparent" />

      {/* Center lockup */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 text-center sm:px-8 sm:pb-28">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-[0.62rem] font-medium uppercase tracking-[0.4em] text-white/50 sm:mb-10 sm:text-[0.65rem]"
        >
          SOY ELLA
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-white"
          style={{
            fontSize: "clamp(2.8rem, 16vw, 12rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            fontWeight: 400,
          }}
        >
          Закрытое сообщество женщин в Мадриде
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-lg text-[0.95rem] font-light leading-[1.8] text-white/65 sm:mt-12 sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg"
        >
          Камерные встречи, экспертный круг и среда, в которой решения рождаются за одним столом.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 sm:mt-14"
        >
          <a
            href="#event"
            className="inline-flex items-center justify-center border border-white/35 px-10 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-white hover:text-brand-ink sm:px-12 sm:py-4.5 sm:text-[0.72rem]"
          >
            Занять место
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-7 sm:px-8 sm:pb-9"
      >
        <div className="mx-auto flex max-w-[1400px] items-end justify-between">
          <div>
            <p className="text-[0.52rem] font-medium uppercase tracking-[0.22em] text-white/35 sm:text-[0.58rem]">
              Следующая встреча
            </p>
            <p className="mt-1 font-serif text-sm text-white/75 sm:text-base">
              30 мая · Мадрид
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[0.5rem] font-medium uppercase tracking-[0.28em] text-white/35">Scroll</span>
            <div className="h-9 w-px bg-gradient-to-b from-white/35 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
