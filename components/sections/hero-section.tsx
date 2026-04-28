import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="SOY ELLA — главный экран"
      className="relative min-h-[100svh] overflow-hidden bg-brand-ink"
    >
      {/* Photo */}
      <Image
        src="/soy-ella/2nd.JPG"
        alt="SOY ELLA — женское комьюнити в Мадриде"
        fill
        priority
        sizes="100vw"
        className="animate-hero-photo hero-photo-shift object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-brand-ink/75 via-brand-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

      {/* Layout */}
      <div className="site-shell relative z-10 flex min-h-[100svh] flex-col pb-10 pt-32 sm:pb-14 sm:pt-36 lg:pb-20 lg:pt-40">
        <div className="flex items-start justify-between gap-4">
          <h1 className="animate-fade-up hero-title -mx-[1vw] w-[102%] font-display text-brand-butter mix-blend-normal drop-shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
            SOY ELLA
          </h1>
        </div>

        <p className="animate-fade-up mt-3 max-w-[13rem] self-end text-right font-serif text-xl leading-[1] text-brand-butter drop-shadow-[0_8px_20px_rgba(0,0,0,0.22)] [animation-delay:0.12s] sm:max-w-[18rem] sm:text-2xl lg:mt-1 lg:max-w-[22rem] lg:text-3xl xl:text-4xl">
          Женское комьюнити · <em className="block font-normal">Мадрид</em>
        </p>

        <div className="flex-1" />

        <div className="animate-fade-up max-w-[16rem] [animation-delay:0.25s] sm:max-w-xs lg:max-w-sm">
          <p className="mb-6 font-medium text-[0.92rem] leading-relaxed text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.34)] sm:text-[0.98rem] lg:text-base">
            Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост,
            качество жизни и сильное окружение.
          </p>
          <a
            href="#event"
            className="inline-flex items-center justify-center rounded-full bg-brand-butter px-8 py-3.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:px-10 sm:py-4 sm:text-[0.72rem]"
          >
            Занять место
          </a>
        </div>

      </div>
    </section>
  )
}
