"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function NextEventSection() {
  return (
    <section
      id="event"
      aria-label="Следующая встреча SOY ELLA"
      className="section-pad relative overflow-hidden bg-brand-ink text-white"
    >
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.65rem]"
        >
          No. 02 / Следующая встреча
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-6 font-display text-[clamp(3rem,12vw,8rem)] leading-[0.85] tracking-[-0.02em] text-white sm:mt-8"
        >
          Beauty
          <br />
          <span className="text-brand-butter">Day.</span>
        </motion.h2>

        {/* Metadata */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-8 border-y border-white/10 py-6 sm:mt-14 sm:gap-12 sm:py-8"
        >
          <div>
            <dt className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.6rem]">
              Дата
            </dt>
            <dd className="mt-1 font-serif text-lg text-white sm:text-xl">30 мая</dd>
          </div>
          <div>
            <dt className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.6rem]">
              Локация
            </dt>
            <dd className="mt-1 font-serif text-lg text-white sm:text-xl">Madrid</dd>
          </div>
          <div>
            <dt className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.6rem]">
              Мест
            </dt>
            <dd className="mt-1 font-serif text-lg text-white sm:text-xl">Всего 30</dd>
          </div>
          <div>
            <dt className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.6rem]">
              Формат
            </dt>
            <dd className="mt-1 font-serif text-lg text-white sm:text-xl">Closed</dd>
          </div>
        </motion.dl>

        {/* Content grid */}
        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Photo */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative overflow-hidden lg:col-span-7"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="/soy-ella/IMG_4920.jpeg"
                alt="Beauty Day — следующая встреча SOY ELLA"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="editorial-photo-warm object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-white/30 sm:text-[0.65rem]">
              Beauty Day · Madrid
            </figcaption>
          </motion.figure>

          {/* Payment card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col justify-between border border-white/10 p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand-butter sm:text-[0.65rem]">
                Участие
              </span>
              <p className="mt-6 font-serif text-3xl text-white sm:text-4xl">
                195 €
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                Включено: welcome box, премиальные закуски и напитки, все выступления экспертов, нетворкинг.
              </p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-brand-butter" aria-hidden />
                  Безопасная оплата через Stripe
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-brand-butter" aria-hidden />
                  Возврат за 72 часа до события
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10">
              <a
                href="https://buy.stripe.com/YOUR_FULL_PAYMENT_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white py-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-brand-ink transition-all duration-300 hover:bg-brand-butter sm:text-[0.7rem]"
              >
                Оплатить участие
              </a>
              <a
                href="https://buy.stripe.com/YOUR_RESERVATION_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-white/20 bg-transparent py-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/10 sm:text-[0.7rem]"
              >
                Резервация · 50 €
              </a>
            </div>
          </motion.div>
        </div>

        {/* Program blocks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-[0.65rem]">
            Что будет на встрече
          </h3>
          <ul className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "01", t: "Экспертные выступления", d: "Спикеры уровня, короткие форматы, живые вопросы." },
              { n: "02", t: "Beauty инновации", d: "Новые подходы к уходу, волосам и коже." },
              { n: "03", t: "Нетворкинг", d: "Знакомства, которые остаются не на один вечер." },
              { n: "04", t: "Закуски и напитки", d: "Премиальное меню от партнеров." },
              { n: "05", t: "Подарки партнеров", d: "Каждая уходит с welcome box." },
              { n: "06", t: "Новые знакомства", d: "Девушки, с которыми хочется дружить." },
            ].map((item) => (
              <li key={item.n} className="bg-brand-ink p-5 sm:p-6">
                <span className="text-[0.55rem] font-medium uppercase tracking-[0.15em] text-brand-butter sm:text-[0.6rem]">
                  {item.n}
                </span>
                <h4 className="mt-3 font-serif text-base text-white sm:text-lg">{item.t}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/50 sm:text-sm">{item.d}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
