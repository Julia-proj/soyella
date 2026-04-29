"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="SOY ELLA — главный экран"
      className="relative min-h-[100svh] overflow-hidden bg-brand-cream"
    >
      {/* Top header bar */}
      <div className="absolute inset-x-0 top-0 z-20">
        <div className="site-shell flex items-center justify-between py-6 sm:py-7">
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-brand-blue/70 sm:text-[0.65rem]">
            EST. Madrid
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-brand-blue/70 sm:text-[0.65rem]">
            Closed Community
          </span>
        </div>
      </div>

      {/* Hero photo container */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-32 pt-24 sm:px-8 sm:pb-40 sm:pt-28">
        
        {/* Main title - HUGE like reference */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mb-8 text-center font-display text-brand-blue sm:mb-10"
          style={{
            fontSize: "clamp(4rem, 18vw, 13rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            fontWeight: 400,
          }}
        >
          Soy Ella
        </motion.h1>

        {/* Photo - centered like Casa Portufornia in inspiration */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-0 mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden sm:max-w-[340px] md:max-w-[400px] lg:max-w-[460px]"
        >
          <Image
            src="/soy-ella/hero-new.png"
            alt="SOY ELLA — женское комьюнити в Мадриде"
            fill
            priority
            sizes="(min-width: 1024px) 460px, (min-width: 640px) 340px, 280px"
            className="object-cover object-center"
            style={{ filter: "saturate(0.94) contrast(1.02)" }}
          />
        </motion.div>

        {/* Description below */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-md text-center text-base font-light leading-relaxed text-brand-blue/80 sm:mt-12 sm:max-w-lg sm:text-lg md:max-w-xl md:text-xl"
        >
          Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост, качество жизни и сильное окружение.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#event"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 inline-flex items-center gap-3 border-b border-brand-blue/40 pb-1 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-brand-blue transition-all duration-300 hover:gap-4 hover:border-brand-blue sm:mt-12"
        >
          Следующая встреча
          <span aria-hidden>→</span>
        </motion.a>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-brand-blue/15 bg-brand-cream"
      >
        <div className="site-shell flex items-center justify-between py-5 sm:py-6">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-brand-blue/60 sm:text-[0.65rem]">
            30 мая · Madrid
          </p>
          <p className="hidden text-[0.6rem] font-medium uppercase tracking-[0.25em] text-brand-blue/60 sm:block sm:text-[0.65rem]">
            Beauty Day · No. 04
          </p>
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-brand-blue/60 sm:text-[0.65rem]">
            By Invitation
          </p>
        </div>
      </motion.div>
    </section>
  )
}
