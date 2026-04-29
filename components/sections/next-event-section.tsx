import Image from "next/image"
import { Calendar, MapPin, Users } from "lucide-react"

export function NextEventSection() {
  return (
    <>
      {/* Marquee strip — transparent bg */}
      <div className="overflow-hidden border-y border-brand-ink/12 py-4 sm:py-6">
        <div
          className="flex w-max animate-marquee whitespace-nowrap font-display text-brand-ink"
          style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)", lineHeight: 1 }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="pr-12 sm:pr-20">BEAUTY DAY</span>
          ))}
        </div>
      </div>

      <section
        id="event"
        aria-label="Следующая встреча SOY ELLA"
        className="section-pad relative overflow-hidden bg-brand-ink text-white"
      >
        <div className="site-shell">

          {/* Eyebrow */}
          <span className="eyebrow text-brand-butter">Следующая встреча</span>

          {/* Title */}
          <h2 className="mt-6 font-display section-title text-white sm:mt-8">
            <span className="block">BEAUTY</span>
            <span className="block text-brand-butter">Day.</span>
          </h2>

          {/* Metadata */}
          <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-white/15 pt-6 sm:mt-14 sm:gap-6 sm:pt-8">
            <div>
              <dt className="eyebrow flex items-center gap-1.5 text-[0.6rem] text-white/50 sm:gap-2 sm:text-[0.688rem]">
                <Calendar className="size-3 sm:size-3.5" aria-hidden /> Дата
              </dt>
              <dd className="mt-1.5 font-serif text-lg sm:mt-2 sm:text-2xl md:text-3xl">30 мая</dd>
            </div>
            <div>
              <dt className="eyebrow flex items-center gap-1.5 text-[0.6rem] text-white/50 sm:gap-2 sm:text-[0.688rem]">
                <MapPin className="size-3 sm:size-3.5" aria-hidden /> Место
              </dt>
              <dd className="mt-1.5 font-serif text-lg sm:mt-2 sm:text-2xl md:text-3xl">Мадрид</dd>
            </div>
            <div>
              <dt className="eyebrow flex items-center gap-1.5 text-[0.6rem] text-white/50 sm:gap-2 sm:text-[0.688rem]">
                <Users className="size-3 sm:size-3.5" aria-hidden /> Мест
              </dt>
              <dd className="mt-1.5 font-serif text-lg sm:mt-2 sm:text-2xl md:text-3xl">Ограничено</dd>
            </div>
          </dl>

          {/* Image + payment card */}
          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-12 lg:gap-8">

            {/* Photo */}
            <figure className="relative overflow-hidden rounded-xl lg:col-span-7 lg:rounded-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[28rem]">
                <Image
                  src="/soy-ella/IMG_4920.jpeg"
                  alt="Beauty Day — следующая встреча SOY ELLA"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="editorial-photo-warm object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </figure>

            {/* Payment card */}
            <div className="relative flex flex-col justify-between rounded-xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-7 lg:col-span-5 lg:rounded-2xl lg:p-9">
              <div>
                <span className="eyebrow text-brand-butter">Участие</span>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base">
                  Welcome box, закуски и напитки, все выступления экспертов, нетворкинг и знакомства с участницами.
                </p>
                <ul className="mt-4 space-y-2.5 border-t border-white/15 pt-4 text-xs text-white/70 sm:mt-6 sm:space-y-3 sm:pt-6 sm:text-sm">
                  <li className="flex items-start gap-2.5 sm:gap-3">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-butter sm:mt-1.5" aria-hidden />
                    Безопасная оплата через Stripe
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:gap-3">
                <a
                  href="https://buy.stripe.com/YOUR_FULL_PAYMENT_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-full bg-brand-butter px-5 py-3.5 text-xs font-medium text-brand-ink shadow-[0_8px_30px_-12px_rgba(248,255,185,0.55)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-4 sm:text-sm"
                >
                  <span>Оплатить полностью</span>
                  <span className="font-serif text-base sm:text-lg">195 €</span>
                </a>
                <a
                  href="https://buy.stripe.com/YOUR_RESERVATION_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-full border border-white/30 bg-white/5 px-5 py-3.5 text-xs font-medium text-white transition-all duration-300 hover:bg-white/10 sm:px-6 sm:py-4 sm:text-sm"
                >
                  <span>Резервация места</span>
                  <span className="font-serif text-base sm:text-lg">50 €</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
