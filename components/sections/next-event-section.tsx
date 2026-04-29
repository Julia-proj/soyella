"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function NextEventSection() {
  return (
    <section
      id="event"
      aria-label="Следующая встреча SOY ELLA"
      className="relative overflow-hidden"
    >
      {/* ── TOP ZONE — black ───────────────────────────────────── */}
      <div className="bg-black text-brand-cream">
        <div className="site-shell py-16 md:py-20 xl:py-24">

          {/* MOBILE: stacked layout */}
          {/* DESKTOP: two-column split */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-0">

            {/* PHOTO COLUMN — left on desktop, hidden on mobile (inline version below) */}
            <motion.figure
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:order-1 lg:col-span-7 lg:block lg:min-h-[440px] lg:max-h-[540px] xl:min-h-[480px] xl:max-h-[580px]"
            >
              <div className="relative h-full overflow-hidden">
                <Image
                  src="/soy-ella/IMG_4920.jpeg"
                  alt="Beauty Day — следующая встреча SOY ELLA"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="editorial-photo-warm object-cover object-center"
                />
              </div>
            </motion.figure>

            {/* CONTENT COLUMN — right on desktop, full on mobile */}
            <div className="flex flex-col justify-between lg:order-2 lg:col-span-5 lg:py-8 lg:pl-12 xl:py-10 xl:pl-16">

              {/* Top: badge + title */}
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="section-number section-number-light"
                >
                  No. 02 / Следующая встреча
                </motion.span>

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

                {/* Mobile-only photo — after title, before metadata */}
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15 }}
                  className="mt-8 overflow-hidden lg:hidden"
                >
                  <div className="relative aspect-[3/2] sm:aspect-[16/10]">
                    <Image
                      src="/soy-ella/IMG_4920.jpeg"
                      alt="Beauty Day — следующая встреча SOY ELLA"
                      fill
                      sizes="100vw"
                      className="editorial-photo-warm object-cover object-center"
                    />
                  </div>
                </motion.figure>

                {/* Metadata */}
                <motion.dl
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8 sm:gap-10"
                >
                  <div>
                    <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
                      Дата
                    </dt>
                    <dd className="mt-1.5 font-serif text-lg text-brand-cream sm:text-xl">30 мая</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
                      Локация
                    </dt>
                    <dd className="mt-1.5 font-serif text-lg text-brand-cream sm:text-xl">Madrid</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
                      Места
                    </dt>
                    <dd className="mt-1.5 font-serif text-lg text-brand-cream sm:text-xl">Ограничены</dd>
                  </div>
                </motion.dl>
              </div>

              {/* Middle: description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-8 lg:mt-0"
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brand-yellow">
                  Участие включает
                </span>
                <p className="mt-4 text-base leading-relaxed text-brand-cream/75 sm:text-lg">
                  Welcome box, премиальные закуски и напитки, все выступления экспертов, нетворкинг и знакомства с участницами.
                </p>
              </motion.div>

              {/* Bottom: payment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-8 lg:mt-0 lg:border-t lg:border-white/10 lg:pt-8"
              >
                <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                  Свободных мест осталось мало
                </p>
                <div className="space-y-3">
                  <a
                    href="https://buy.stripe.com/8x29AT8nv9YfdK48WLdnW1U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-full bg-brand-yellow px-5 py-4 text-brand-blue-deep transition-colors duration-300 hover:bg-brand-yellow-soft"
                  >
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em]">
                      Оплатить участие
                    </span>
                    <span className="font-display text-2xl font-normal">180 €</span>
                  </a>
                  <a
                    href="https://buy.stripe.com/8x29AT8nv9YfdK48WLdnW1U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-full border border-white/20 px-5 py-4 text-brand-cream transition-colors duration-300 hover:border-brand-yellow hover:text-brand-yellow"
                  >
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
                      Забронировать место
                    </span>
                    <span className="font-display text-2xl font-normal">50 €</span>
                  </a>
                </div>
                <p className="mt-5 px-1 text-xs leading-relaxed text-white/55">
                  Бронирование фиксирует твоё место. Остаток 130 € оплачивается ближе к дате.
                </p>
                <p className="mt-1 px-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-white/25">
                  Безопасная оплата, Stripe
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM ZONE — brand-blue ───────────────────────────── */}
      <div className="bg-brand-blue text-brand-cream">
        <div className="site-shell py-14 md:py-20 xl:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-serif text-2xl text-brand-cream sm:text-3xl md:text-4xl">
                Почему стоит быть здесь
              </h3>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.7rem]">
                Beauty Day · 30 мая
              </span>
            </div>
            <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {[
                { n: "01", t: "Экспертные выступления", d: "Спикеры уровня, короткие форматы, живые вопросы." },
                { n: "02", t: "Beauty инновации", d: "Новые подходы к уходу, волосам и коже." },
                { n: "03", t: "Нетворкинг", d: "Знакомства, которые остаются не на один вечер." },
                { n: "04", t: "Закуски и напитки", d: "Премиальное меню от партнеров." },
                { n: "05", t: "Подарки партнеров", d: "Каждая уходит с welcome box." },
                { n: "06", t: "Новые знакомства", d: "Девушки, с которыми хочется дружить." },
              ].map((item) => (
                <li key={item.n} className="border border-brand-cream/15 p-5 transition-colors duration-500 hover:border-brand-yellow/40 sm:p-6">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.7rem]">
                    {item.n}
                  </span>
                  <h4 className="mt-4 font-serif text-lg text-brand-cream sm:text-xl">{item.t}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-brand-cream/60 sm:text-base">{item.d}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
