"use client"

import { motion } from "framer-motion"

const REVIEWS = [
  {
    text: "Пришла без ожиданий, ушла с тремя подругами и новым клиентом. Формат редкий для Мадрида.",
    name: "Алина",
    role: "Founder · студия бренд-дизайна",
    initial: "А",
  },
  {
    text: "Это не про нетворкинг ради нетворкинга. Это про женщин, которые живут интересно и делятся честно.",
    name: "Вика",
    role: "Marketing director",
    initial: "В",
  },
  {
    text: "Наконец встреча, где не стыдно быть серьезной и красивой одновременно. Вернусь на каждую.",
    name: "Мария",
    role: "Архитектор",
    initial: "М",
  },
  {
    text: "Переехала в Мадрид три месяца назад и нашла своих именно здесь. Спасибо за такое бережное комьюнити.",
    name: "Ксения",
    role: "Продюсер",
    initial: "К",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      aria-label="Отзывы участниц"
      className="section-pad bg-brand-cream text-brand-ink"
    >
      <div className="site-shell">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number"
        >
          No. 07 / Отзывы
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="section-title mt-6 max-w-2xl font-display sm:mt-8"
        >
          Что говорят участницы
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-lg text-base leading-relaxed text-brand-ink/60 sm:text-lg"
        >
          Короткие живые отзывы девушек, которые приходят к нам снова.
        </motion.p>

        {/* Reviews grid */}
        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:gap-6">
          {REVIEWS.map((review, index) => (
            <motion.li
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="flex flex-col border border-brand-ink/10 p-6 sm:p-8"
            >
              <p className="font-serif text-lg leading-relaxed text-brand-ink sm:text-xl md:text-2xl">
                {review.text}
              </p>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-brand-ink/10">
                {/* Avatar initial */}
                <span className="flex size-10 items-center justify-center bg-brand-ink font-serif text-sm text-white sm:size-12 sm:text-base">
                  {review.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-ink sm:text-base">{review.name}</p>
                  <p className="mt-0.5 text-xs text-brand-ink/50 sm:text-sm">{review.role}</p>
                </div>
                <span className="ml-auto font-serif text-2xl text-brand-ink/10 sm:text-3xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
