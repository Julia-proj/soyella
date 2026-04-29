"use client"

import { motion } from "framer-motion"

const REVIEWS = [
  {
    text: "Пришла без ожиданий, ушла с тремя подругами и новым клиентом. Формат редкий для Мадрида.",
    name: "Алина",
    role: "Founder · студия бренд-дизайна",
  },
  {
    text: "Это не про нетворкинг ради нетворкинга. Это про женщин, которые живут интересно и делятся честно.",
    name: "Вика",
    role: "Marketing director",
  },
  {
    text: "Наконец встреча, где вкусно, красиво и полезно. Жду следующей встречи!",
    name: "Мария",
    role: "Архитектор",
  },
  {
    text: "Переехала в Мадрид три месяца назад и нашла своих именно здесь. Спасибо за такое бережное комьюнити.",
    name: "Ксения",
    role: "Продюсер",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      aria-label="Отзывы участниц"
      className="section-pad bg-brand-cream text-brand-blue"
    >
      <div className="site-shell">
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

        <ul className="mt-14 grid gap-x-12 sm:mt-20 sm:grid-cols-2 lg:gap-x-16">
          {REVIEWS.map((review, index) => (
            <motion.li
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08 * index }}
              className="border-t border-brand-ink/10 py-10 sm:py-14"
            >
              <span
                aria-hidden
                className="font-serif text-5xl leading-none text-brand-yellow sm:text-6xl"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4">
                <p className="font-serif text-xl leading-relaxed text-brand-ink sm:text-2xl">
                  {review.text}
                </p>
              </blockquote>
              <footer className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink">
                  {review.name}
                </p>
                <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-brand-ink/45">
                  {review.role}
                </p>
              </footer>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
