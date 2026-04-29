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
    text: "Наконец встреча, где вкусно, красиво и полезно. Жду следующей встречи!",
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
      className="section-pad bg-brand-yellow-soft text-brand-blue"
    >
      <div className="site-shell">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 07 / Отзывы
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mega-title mt-8 max-w-3xl font-display text-brand-blue sm:mt-10"
        >
          Что говорят участницы
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-brand-blue/70 sm:text-lg md:text-xl"
        >
          Короткие живые отзывы девушек, которые приходят к нам снова.
        </motion.p>

        {/* Reviews grid */}
        <ul className="mt-14 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:gap-7">
          {REVIEWS.map((review, index) => (
            <motion.li
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="flex flex-col bg-brand-cream p-7 transition-shadow duration-500 hover:shadow-[0_20px_50px_-15px_rgba(29,45,61,0.15)] sm:p-10"
            >
              <p className="font-serif text-xl leading-relaxed text-brand-blue sm:text-2xl md:text-3xl">
                {review.text}
              </p>

              <div className="mt-10 flex items-center gap-4 border-t border-brand-blue/15 pt-7">
                <span className="flex size-12 items-center justify-center bg-brand-blue font-serif text-base text-brand-cream sm:size-14 sm:text-lg">
                  {review.initial}
                </span>
                <div>
                  <p className="text-base font-semibold text-brand-blue sm:text-lg">{review.name}</p>
                  <p className="mt-0.5 text-sm text-brand-blue/55">{review.role}</p>
                </div>
                <span className="ml-auto font-serif text-3xl text-brand-blue/15 sm:text-4xl">
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
