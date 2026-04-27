import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="SOY ELLA — главный экран"
      className="relative min-h-[100svh] overflow-hidden bg-brand-cream text-brand-ink"
    >
      <Image
        src="/soy-ella/IMG_9509.JPG"
        alt="Участница женского комьюнити SOY ELLA в Мадриде"
        fill
        priority
        sizes="100vw"
        className="animate-hero-photo editorial-photo object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,239,231,0.42)_0%,rgba(244,239,231,0.08)_38%,rgba(24,24,20,0.42)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,rgba(244,239,231,0.86)_0%,rgba(244,239,231,0)_100%)]" />

      <h1 className="hero-lockup hero-title animate-fade-up font-display">
        <span className="block sm:inline">SOY</span>{" "}
        <span className="block sm:inline">ELLA</span>
      </h1>

      <div className="site-shell relative z-20 flex min-h-[100svh] flex-col justify-between py-8 pt-28 sm:pt-32 lg:pb-16 lg:pt-10">
        <p className="animate-fade-up text-[0.68rem] uppercase tracking-[0.22em] text-brand-ink/60">
          Женское комьюнити · Мадрид
        </p>

        <div className="grid gap-8 pb-12 pt-[34svh] sm:pt-[38svh] lg:grid-cols-12 lg:items-end lg:pb-0 lg:pt-0">
          <div className="flex max-w-sm flex-col gap-4 text-white drop-shadow-[0_2px_18px_rgba(24,24,20,0.34)] lg:col-span-4">
            <p className="text-lg font-medium leading-relaxed text-white md:text-xl">
              Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост,
              качество жизни и сильное окружение.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#event"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-butter px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Занять место
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/55 px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-ink"
              >
                О комьюнити
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
