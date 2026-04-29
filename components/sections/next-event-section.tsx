"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function NextEventSection() {
  return (
    <section
      id="event"
      aria-label="Следующая встреча SOY ELLA"
      className="section-pad relative overflow-hidden bg-brand-blue text-brand-cream"
    >
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-light"
        >
          No. 02 / Следующая встреча
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="display-mega mt-8 font-display text-brand-cream sm:mt-10"
        >
          Beauty
          <br />
          <span className="text-brand-yellow">Day.</span>
        </motion.h2>

        {/* Metadata */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-8 border-y border-brand-cream/15 py-8 sm:mt-16 sm:gap-14 sm:py-10"
        >
          <div>
            <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
              Дата
            </dt>
            <dd className="mt-2 font-serif text-xl text-brand-cream sm:text-2xl">30 мая</dd>
          </div>
          <div>
            <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
              Локация
            </dt>
            <dd className="mt-2 font-serif text-xl text-brand-cream sm:text-2xl">Madrid</dd>
          </div>
          <div>
            <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
              Мест
            </dt>
            <dd className="mt-2 font-serif text-xl text-brand-cream sm:text-2xl">Ограничено</dd>
          </div>
          <div>
            <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
              Формат
            </dt>
            <dd className="mt-2 font-serif text-xl text-brand-cream sm:text-2xl">Closed</dd>
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
            <figcaption className="mt-3 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-brand-cream/40 sm:text-[0.65rem]">
              Beauty Day · Madrid
            </figcaption>
          </motion.figure>

          {/* Payment card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col justify-between border border-brand-cream/15 p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brand-yellow">
                Участие
              </span>
              <p className="mt-6 text-base leading-relaxed text-brand-cream/80 sm:text-lg">
                Welcome box, премиальные закуски и напитки, все выступления экспертов, нетворкинг и знакомства с участницами.
              </p>
              <p className="mt-5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-brand-cream/40">
                Безопасная оплата · Stripe
              </p>
            </div>

            <div className="mt-10 space-y-3 sm:mt-12">
              {/* PRIMARY — full payment, bright yellow, impossible to miss */}
              <a
                href="https://buy.stripe.com/YOUR_FULL_PAYMENT_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between bg-brand-yellow px-7 py-5 text-brand-blue-deep transition-colors duration-300 hover:bg-brand-yellow-soft"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em]">
                  Оплатить участие
                </span>
                <span className="font-display text-2xl font-normal">195 €</span>
              </a>

              {/* SECONDARY — reservation, outlined */}
              <a
                href="https://buy.stripe.com/YOUR_RESERVATION_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between border border-brand-cream/30 px-7 py-5 text-brand-cream transition-colors duration-300 hover:border-brand-yellow hover:text-brand-yellow"
              >
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
                  Бронирование места
                </span>
                <span className="font-display text-2xl font-normal">50 €</span>
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
          className="mt-24 border-t border-brand-cream/15 pt-16 sm:mt-32 sm:pt-24"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.7rem]">
            В программе
          </span>
          <h3 className="mt-5 font-serif text-3xl text-brand-cream sm:mt-6 sm:text-4xl md:text-5xl">
            Что ждет на Beauty Day
          </h3>
          <ul className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              { n: "01", t: "Экспертные выступления", d: "Спикеры уровня, короткие форматы, живые вопросы." },
              { n: "02", t: "Beauty инновации", d: "Новые подходы к уходу, волосам и коже." },
              { n: "03", t: "Нетворкинг", d: "Зн��комства, которые остаются не на один вечер." },
              { n: "04", t: "Закуски и напитки", d: "Премиальное меню от партнеров." },
              { n: "05", t: "Подарки партнеров", d: "Каждая уходит с welcome box." },
              { n: "06", t: "Новые знакомства", d: "Девушки, с которыми хочется дружить." },
            ].map((item) => (
              <li key={item.n} className="border border-brand-cream/15 p-6 transition-colors duration-500 hover:border-brand-yellow/40 sm:p-7">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.7rem]">
                  {item.n}
                </span>
                <h4 className="mt-5 font-serif text-xl text-brand-cream sm:text-2xl">{item.t}</h4>
                <p className="mt-3 text-base leading-relaxed text-brand-cream/65">{item.d}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
