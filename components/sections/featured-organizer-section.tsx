"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FeaturedOrganizerSection() {
  return (
    <section
      aria-label="Один из организаторов встречи - Keratin Madrid"
      className="section-pad relative overflow-hidden bg-brand-cream text-brand-blue"
    >
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 04 / Co-organizer
        </motion.span>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[3/2] overflow-hidden sm:aspect-[3/2]">
              <Image
                src="/soy-ella/expert-keratin-madrid.jpg"
                alt="Елена Александрова, Keratin Madrid"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="editorial-photo object-cover object-top transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
            <p className="mt-4 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-brand-blue/55 sm:text-[0.65rem]">
              Елена Александрова · Founder · Keratin Madrid
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="display-mega font-display text-brand-blue">
              Keratin
              <br />
              Madrid
              <span className="text-brand-butter"> × </span>
              <span className="text-brand-butter">Soy Ella</span>
            </h2>

            <p className="mt-10 max-w-lg text-base leading-relaxed text-brand-blue/75 sm:text-lg md:text-xl">
              Keratin Madrid является одним из организаторов сообщества Soy Ella. Елена Александрова отвечает за экспертную программу и представит на встрече систему домашнего профессионального восстановления волос для девушек, которые ценят качество и время.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 sm:mt-12">
              <a
                href="https://www.instagram.com/curso_keratin_madrid/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-brand-blue px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-cream transition-all duration-300 hover:bg-brand-blue-deep sm:px-8 sm:text-[0.7rem]"
              >
                Instagram Keratin Madrid
              </a>
              <a
                href="https://www.instagram.com/curso_keratin_madrid/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-blue/30 bg-transparent px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-blue transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue hover:text-brand-cream sm:px-8 sm:text-[0.7rem]"
              >
                В доступе скоро
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
