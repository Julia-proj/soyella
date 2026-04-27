import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Sticker } from "@/components/sticker"

export function FinalCtaSection() {
  return (
    <section
      aria-label="Финальный призыв"
      className="relative min-h-[88svh] overflow-hidden bg-brand-ink pb-28 text-white"
    >
      <Image
        src="/soy-ella/2nd.JPG"
        alt="Участницы SOY ELLA на встрече в Мадриде"
        fill
        sizes="100vw"
        className="editorial-photo object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-ink/52" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(0deg,rgba(24,20,16,0.9)_0%,rgba(24,20,16,0)_100%)]" />

      <div className="site-shell relative z-10 flex min-h-[88svh] flex-col justify-center py-16">
        <Sticker tone="white" rotate={0} className="mb-10 w-fit">
          последний блок - решись
        </Sticker>

        <h2 data-reveal="" data-delay="80" className="mega-title max-w-6xl font-display text-brand-butter">
          Твое окружение влияет на скорость роста
        </h2>

        <p data-reveal="" data-delay="180" className="mt-8 max-w-xl text-xl leading-relaxed text-white/85">
          Занимай одно из 30 мест на Beauty Day. Без формальностей, просто приходи,
          знакомься и оставайся среди своих.
        </p>

        <div data-reveal="" data-delay="260" className="mt-10 flex flex-wrap gap-3">
          <a href="#contact" className="pill-button bg-brand-butter text-brand-ink">
            Занять место
            <ArrowUpRight className="ml-2 size-4" aria-hidden />
          </a>
          <a href="#about" className="pill-button border border-white/50 text-white hover:bg-white hover:text-brand-ink">
            Узнать больше
          </a>
        </div>

        <p data-reveal="" data-delay="320" className="mt-8 text-xs font-bold uppercase tracking-widest text-white/55">
          30 мая — Madrid — 30 мест
        </p>
      </div>
    </section>
  )
}
