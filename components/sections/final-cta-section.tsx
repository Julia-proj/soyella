import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section
      aria-label="Финальный призыв"
      className="relative min-h-[80svh] overflow-hidden bg-brand-ink pb-20 text-white sm:min-h-[88svh] sm:pb-28"
    >
      <Image
        src="/soy-ella/2nd.JPG"
        alt="Участницы SOY ELLA на встрече в Мадриде"
        fill
        sizes="100vw"
        className="editorial-photo object-cover object-[center_65%]"
      />
      <div className="absolute inset-0 bg-brand-ink/52" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(0deg,rgba(24,20,16,0.9)_0%,rgba(24,20,16,0)_100%)]" />

      <div className="site-shell relative z-10 flex min-h-[80svh] flex-col justify-center py-12 sm:min-h-[88svh] sm:py-16">
        <h2 data-reveal="" data-delay="80" className="mega-title max-w-6xl font-display text-brand-butter">
          SOY ELLA
        </h2>

        <p data-reveal="" data-delay="180" className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:mt-8 sm:max-w-xl sm:text-xl">
          Место, где рождается дружба, проекты и большие идеи.
        </p>

        <div data-reveal="" data-delay="260" className="mt-6 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
          <a href="#contact" className="pill-button bg-brand-butter px-5 py-3 text-[0.7rem] text-brand-ink sm:px-6 sm:py-3.5">
            Занять место
            <ArrowUpRight className="ml-1.5 size-3.5 sm:ml-2 sm:size-4" aria-hidden />
          </a>
          <a href="#about" className="pill-button border border-white/50 px-5 py-3 text-[0.7rem] text-white hover:bg-white hover:text-brand-ink sm:px-6 sm:py-3.5">
            Узнать больше
          </a>
        </div>

        <p data-reveal="" data-delay="320" className="mt-6 text-[0.65rem] font-bold uppercase tracking-widest text-white/55 sm:mt-8 sm:text-xs">
          30 мая — Madrid
        </p>
      </div>
    </section>
  )
}
