"use client"

import { motion } from "framer-motion"

const ITEMS = [
  { n: "01", t: "Ищешь окружение", d: "Хочешь быть среди тех, кто тоже растет." },
  { n: "02", t: "Хочешь рост", d: "В деле, в теле, в отношениях, в жизни." },
  { n: "03", t: "Умная красота", d: "Красота и здоровье без маркетинговых ловушек." },
  { n: "04", t: "Ценишь качество", d: "Одно премиальное вместо десяти средних." },
  { n: "05", t: "Новая в Мадриде", d: "Ищешь своих и хочешь быстро войти в среду." },
  { n: "06", t: "Знакомства уровня", d: "Женщины, с которыми хочется быть на связи." },
]

export function ForWhoSection() {
  return (
    <section aria-label="Для кого SOY ELLA" className="section-pad overflow-hidden bg-brand-ink text-white">
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.65rem]"
        >
          No. 05 / Для кого
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="section-title mt-6 max-w-2xl font-display sm:mt-8"
        >
          Для тебя, если ты
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
        >
          Шесть признаков женщины, для которой Soy Ella — про своих. Узнала себя хотя бы в трех — точно наша.
        </motion.p>

        {/* Grid */}
        <ul className="mt-12 grid gap-px bg-white/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.li
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 * i }}
              className="group bg-brand-ink p-6 transition-colors duration-500 hover:bg-white/5 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[0.55rem] font-medium uppercase tracking-[0.15em] text-brand-butter sm:text-[0.6rem]">
                  {item.n}—
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl text-white sm:text-2xl">
                {item.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50 sm:text-base">
                {item.d}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
