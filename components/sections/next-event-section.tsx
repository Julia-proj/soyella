import Image from "next/image"
import { ArrowUpRight, Calendar, Lock, MapPin, Users } from "lucide-react"
import { Sticker } from "@/components/sticker"

const BENEFITS = [
  "Экспертные выступления",
  "Beauty-инновации",
  "Нетворкинг без неловкости",
  "Премиальные напитки и закуски",
  "Подарки от партнеров",
  "Новые знакомства уровня",
]

export function NextEventSection() {
  return (
    <section
      id="event"
      aria-label="Следующая встреча SOY ELLA"
      className="section-pad relative overflow-hidden bg-brand-ink text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" aria-hidden />

      <div className="absolute left-0 right-0 top-8 overflow-hidden text-brand-butter/16" aria-hidden>
        <div className="marquee-title flex w-max animate-marquee whitespace-nowrap font-display">
          <span className="pr-12">BEAUTY DAY</span>
          <span className="pr-12">BEAUTY DAY</span>
          <span className="pr-12">BEAUTY DAY</span>
          <span className="pr-12">BEAUTY DAY</span>
        </div>
      </div>

      <div className="site-shell relative z-10">
        <Sticker tone="white" rotate={0} className="mb-10">
          главное событие сезона
        </Sticker>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal="" data-delay="80" className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-butter">Следующая встреча</p>
            <h2 className="mega-title mt-4 font-display text-white">
              Beauty
              <br />
              <em className="text-brand-butter">Day</em>
            </h2>

            <dl className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="flex gap-3">
                <Calendar className="mt-1 size-5 shrink-0 text-brand-butter" aria-hidden />
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase text-white/60">Дата</dt>
                  <dd className="mt-1 font-serif text-3xl">30 мая</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-brand-butter" aria-hidden />
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase text-white/60">Локация</dt>
                  <dd className="mt-1 font-serif text-3xl">Madrid</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="mt-1 size-5 shrink-0 text-brand-butter" aria-hidden />
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase text-white/60">Мест</dt>
                  <dd className="mt-1 font-serif text-3xl">30</dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 border border-white/20 bg-white/8 p-6 backdrop-blur-sm md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase text-white/60">Участие</p>
                  <p className="mt-2 font-serif text-7xl leading-none text-brand-butter">95€</p>
                  <p className="mt-3 max-w-md leading-relaxed text-white/75">
                    Включено: welcome box, напитки, все выступления и закрытый нетворкинг.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-butter px-4 py-2 text-[0.68rem] font-bold uppercase text-brand-ink">
                  <Lock className="size-3.5" aria-hidden />
                  30 мест
                </span>
              </div>

              <a href="#contact" className="pill-button mt-7 w-full bg-brand-butter text-brand-ink">
                Оплатить участие
                <ArrowUpRight className="ml-2 size-4" aria-hidden />
              </a>
            </div>
          </div>

          <div data-reveal="" data-delay="180" className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:aspect-[5/6]">
              <Image
                src="/soy-ella/IMG_4752.PNG"
                alt="Локация следующей встречи SOY ELLA в Мадриде"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="editorial-photo-warm object-cover object-center transition-transform duration-1000 hover:scale-[1.025]"
              />
            </div>
            <Sticker tone="white" rotate={1} className="absolute right-4 top-5">
              30 мая - madrid
            </Sticker>
          </div>
        </div>

        <ul className="mt-16 grid border-y border-white/20 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <li
              key={benefit}
              data-reveal=""
              data-delay={index * 70}
              className="border-white/20 py-6 text-white sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <span className="font-serif text-3xl italic text-brand-butter">0{index + 1}</span>
              <p className="mt-3 font-serif text-3xl uppercase leading-none">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
