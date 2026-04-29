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
        {/* Desktop: photo left, content right — full-bleed */}
        <div className="lg:grid lg:grid-cols-[50fr_50fr] lg:items-stretch xl:grid-cols-[52fr_48fr]">

          {/* PHOTO COLUMN — left on desktop, hidden on mobile */}
          <motion.figure
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="hidden overflow-hidden lg:block lg:p-5 xl:p-6"
          >
            <div className="relative h-full min-h-[480px] w-full overflow-hidden rounded-2xl xl:min-h-[520px]">
              <Image
                src="/soy-ella/IMG_4920.jpeg"
                alt="Beauty Day — следующая встреча SOY ELLA"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="editorial-photo-warm object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
              <p className="absolute bottom-5 left-6 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/35">
                Beauty Day · Madrid
              </p>
            </div>
          </motion.figure>

          {/* CONTENT COLUMN — right on desktop, full-width on mobile */}
          <div className="flex flex-col justify-center gap-6 px-[max(5vw,1.25rem)] py-14 md:px-[max(8vw,3rem)] md:py-16 lg:gap-7 lg:px-10 lg:py-10 xl:px-14 xl:py-12">

            {/* Badge + title */}
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
                className="display-mega mt-6 font-display text-brand-cream sm:mt-8 lg:mt-5"
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
                className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6 sm:gap-10 lg:mt-6 lg:pt-5"
              >
                <div>
                  <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
                    Дата
                  </dt>
                  <dd className="mt-1 font-serif text-base text-brand-cream sm:text-lg lg:text-base">30 мая</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
                    Локация
                  </dt>
                  <dd className="mt-1 font-serif text-base text-brand-cream sm:text-lg lg:text-base">Madrid</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
                    Места
                  </dt>
                  <dd className="mt-1 font-serif text-base text-brand-cream sm:text-lg lg:text-base">Ограничены</dd>
                </div>
              </motion.dl>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brand-yellow">
                Участие включает
              </span>
              <p className="mt-3 text-base leading-relaxed text-brand-cream/75 lg:text-sm">
                Welcome box, премиальные закуски и напитки, все выступления экспертов, нетворкинг и знакомства с участницами.
              </p>
            </motion.div>

            {/* Payment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="border-t border-white/10 pt-6"
            >
              <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                Свободных мест осталось мало
              </p>
              <div className="space-y-1.5">
                <a
                  href="https://buy.stripe.com/8x29AT8nv9YfdK48WLdnW1U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-full bg-brand-yellow px-5 py-3 text-brand-blue-deep transition-colors duration-300 hover:bg-brand-yellow-soft lg:py-3"
                >
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em]">
                    Оплатить участие
                  </span>
                  <span className="font-display text-2xl font-normal">180 €</span>
                </a>
                <div>
                  <a
                    href="https://buy.stripe.com/8x29AT8nv9YfdK48WLdnW1U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-full border border-white/20 px-5 py-3 text-brand-cream transition-colors duration-300 hover:border-brand-yellow hover:text-brand-yellow"
                  >
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
                      Забронировать место
                    </span>
                    <span className="font-display text-2xl font-normal">50 €</span>
                  </a>
                  <p className="mt-2 px-1 text-xs leading-relaxed text-white/45">
                    Фиксирует твоё место. Остаток 130 € оплачивается ближе к дате.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-center text-[0.58rem] font-medium uppercase tracking-[0.18em] text-white/25">
                Stripe · Безопасная оплата
              </p>
            </motion.div>
          </div>



        </div>
      </div>

      {/* ── BOTTOM ZONE — brand-blue ───────────────────────────── */}
      <div className="bg-brand-blue text-brand-cream">
        <div className="site-shell py-10 md:py-14 xl:py-16">
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
