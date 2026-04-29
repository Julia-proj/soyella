"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FeaturedOrganizerSection() {
  return (
    <section
      aria-label="Один из организаторов встречи - Keratin Madrid"
      className="section-pad relative overflow-hidden bg-brand-cream text-brand-ink"
    >
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number"
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
            <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
              <Image
                src="/soy-ella/expert-keratin-madrid.jpg"
                alt="Елена Александрова, Keratin Madrid"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="editorial-photo object-cover object-top transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
            <p className="mt-3 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-brand-ink/40 sm:text-[0.65rem]">
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
            <h2 className="font-display text-[clamp(2rem,6vw,4rem)] leading-[0.9] tracking-[-0.01em] text-brand-ink">
              Keratin
              <br />
              Madrid
              <span className="text-brand-taupe"> × </span>
              <span className="text-brand-taupe">Soy Ella</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-brand-ink/70 sm:text-lg">
              Keratin Madrid — один из организаторов сообщества Soy Ella. Елена Александрова отвечает за экспертную программу и приводит на встречи систему домашнего восстановления волос для девушек, которые ценят качество и время.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <a
                href="https://www.instagram.com/keratin_madrid/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-brand-ink bg-brand-ink px-6 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand-ink sm:px-8 sm:text-[0.7rem]"
              >
                Instagram Keratin Madrid
              </a>
              <a
                href="https://www.instagram.com/curso_keratin_madrid/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-brand-ink/20 bg-transparent px-6 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-brand-ink transition-all duration-300 hover:border-brand-ink hover:bg-brand-ink hover:text-white sm:px-8 sm:text-[0.7rem]"
              >
                Смотреть курс
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-3 border-t border-brand-ink/10 pt-8 sm:mt-14 sm:pt-10">
              <div>
                <dt className="text-[0.55rem] font-medium uppercase tracking-[0.15em] text-brand-ink/40 sm:text-[0.6rem]">
                  Лет практики
                </dt>
                <dd className="mt-2 font-serif text-2xl text-brand-ink sm:text-3xl md:text-4xl">12</dd>
              </div>
              <div>
                <dt className="text-[0.55rem] font-medium uppercase tracking-[0.15em] text-brand-ink/40 sm:text-[0.6rem]">
                  Учениц
                </dt>
                <dd className="mt-2 font-serif text-2xl text-brand-ink sm:text-3xl md:text-4xl">500+</dd>
              </div>
              <div>
                <dt className="text-[0.55rem] font-medium uppercase tracking-[0.15em] text-brand-ink/40 sm:text-[0.6rem]">
                  Город
                </dt>
                <dd className="mt-2 font-serif text-2xl text-brand-ink sm:text-3xl md:text-4xl">Madrid</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
