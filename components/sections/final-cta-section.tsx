"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FinalCtaSection() {
  return (
    <section
      aria-label="Финальный призыв"
      className="relative min-h-[70svh] overflow-hidden bg-brand-ink text-white sm:min-h-[80svh]"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/soy-ella/2nd.JPG"
          alt="Участницы SOY ELLA на встрече в Мадриде"
          fill
          sizes="100vw"
          className="object-cover object-[center_65%]"
          style={{ filter: 'saturate(0.85) contrast(1.05)' }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/50 to-brand-ink/30" />

      {/* Content */}
      <div className="site-shell relative z-10 flex min-h-[70svh] flex-col justify-end pb-16 pt-20 sm:min-h-[80svh] sm:pb-20">
        {/* Section tag */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.65rem]"
        >
          No. 08 / Решение
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-brand-butter sm:text-[0.65rem]"
        >
          Beauty Day · 30 мая · 30 мест
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-3xl font-display text-[clamp(1.75rem,5vw,3.5rem)] leading-[1] tracking-[-0.01em] text-white sm:mt-8"
        >
          Твое окружение влияет на скорость роста.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Занимай одно из 30 мест на Beauty Day. Без формальностей — просто приходи, знакомься и останься среди своих.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-3 sm:mt-12"
        >
          <a
            href="#event"
            className="inline-flex items-center justify-center bg-white px-8 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-brand-ink transition-all duration-300 hover:bg-brand-butter sm:px-10 sm:text-[0.7rem]"
          >
            Занять место · 195€
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center border border-white/30 bg-transparent px-8 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-brand-ink sm:px-10 sm:text-[0.7rem]"
          >
            Сначала узнать больше
          </a>
        </motion.div>
      </div>
    </section>
  )
}
