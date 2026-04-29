"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="SOY ELLA — главный экран"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/soy-ella/hero-new.png"
          alt="SOY ELLA — женское комьюнити в Мадриде"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Elegant gradient overlay — dark at bottom for text, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-deep/30 via-brand-blue-deep/50 to-brand-blue-deep/85" />
      </div>

      {/* Content — vertically centered */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-28 pt-24 text-center sm:px-8 sm:pb-36">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-yellow sm:mb-10 sm:text-[0.7rem]"
        >
          Madrid
        </motion.p>

        {/* Main title — enormous like reference */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white"
          style={{
            fontSize: "clamp(5rem, 22vw, 16rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            fontWeight: 400,
          }}
        >
          Soy Ella
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-sm text-base font-light leading-relaxed text-white/80 sm:mt-12 sm:max-w-md sm:text-lg"
        >
          Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост, качество жизни и сильное окружение.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#event"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 inline-flex items-center gap-3 bg-brand-yellow px-8 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-blue transition-all duration-300 hover:bg-white sm:mt-14 sm:px-10"
        >
          Следующая встреча
        </motion.a>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10"
      >
        <div className="site-shell flex items-center justify-between py-5 sm:py-6">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/50 sm:text-[0.65rem]">
            30 мая · Madrid
          </p>
          <p className="hidden text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/50 sm:block sm:text-[0.65rem]">
            Beauty Day · No. 04
          </p>
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/50 sm:text-[0.65rem]">
            Мест ограничено
          </p>
        </div>
      </motion.div>
    </section>
  )
}
