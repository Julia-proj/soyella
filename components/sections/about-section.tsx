"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const PRINCIPLES = [
  {
    n: "01",
    t: "Закрытый формат",
    d: "Только по заявке. Ограниченные места на каждую встречу.",
  },
  {
    n: "02",
    t: "Экспертные встречи",
    d: "Спикеры, бренды и темы, проверенные на себе.",
  },
  {
    n: "03",
    t: "Теплая среда",
    d: "Женщины, которые вдохновляют, а не сравнивают.",
  },
]

export function AboutSection() {
  return (
    <section id="about" aria-label="О SOY ELLA" className="section-pad relative overflow-hidden bg-brand-cream text-brand-blue">
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 01 / О Soy Ella
        </motion.span>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10 max-w-3xl sm:mt-12"
        >
          <p className="font-serif text-2xl italic text-brand-blue/55 sm:text-3xl md:text-4xl">
            Не массовый нетворкинг. Качество важнее количества.
          </p>
        </motion.blockquote>

        {/* Main title - LARGE editorial */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mega-title mt-12 max-w-5xl font-display text-brand-blue sm:mt-16"
        >
          Пространство, где женщины знакомятся, растут и выходят на новый уровень.
        </motion.h2>

        {/* Two-column content */}
        <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base leading-relaxed text-brand-blue/70 sm:text-lg md:text-xl"
          >
            Мы создаем среду, в которой легко быть собой, говорить по-настоящему и находить своих. Без пустых знакомств и конкуренции.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base leading-relaxed text-brand-blue/70 sm:text-lg md:text-xl"
          >
            Каждая встреча продумана как личный вечер: сильные спикеры, теплый контакт, премиальные партнеры и девушки, с которыми хочется оставаться на связи.
          </motion.p>
        </div>

        {/* Image grid */}
        <div className="mt-16 grid gap-4 sm:mt-24 sm:gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]"
          >
            <Image
              src="/soy-ella/hero.jpg"
              alt="Женщины общаются на встрече SOY ELLA"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="editorial-photo object-cover object-[center_40%] transition-transform duration-1000 hover:scale-[1.02]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]"
          >
            <Image
              src="/soy-ella/IMG_4749.PNG"
              alt="Детали премиального события SOY ELLA"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="editorial-photo-warm object-cover object-[center_35%] transition-transform duration-1000 hover:scale-[1.02]"
            />
          </motion.div>
        </div>

        {/* Principles */}
        <ul className="mt-16 grid border-t border-brand-blue/15 sm:mt-24 sm:grid-cols-3">
          {PRINCIPLES.map((item, i) => (
            <motion.li
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="border-b border-brand-blue/15 py-10 sm:border-b-0 sm:border-r sm:px-8 sm:py-14 sm:last:border-r-0 md:px-10"
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-butter sm:text-[0.7rem]">
                {item.n}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-brand-blue sm:text-3xl">
                {item.t}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-blue/65 sm:text-lg">
                {item.d}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
