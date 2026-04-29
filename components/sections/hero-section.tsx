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
        className="animate-hero-photo object-cover object-[center_65%]"
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-transparent to-brand-ink/70" />
      <div className="absolute inset-0 bg-brand-ink/20" />

      {/* Centered lockup - inspired by reference */}
      <div className="hero-lockup">
        <p className="animate-fade-up mb-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-butter/90 sm:mb-6 sm:text-xs sm:tracking-[0.4em]">
          Женское комьюнити · Мадрид
        </p>
        <h1 className="animate-fade-up font-display text-[15vw] leading-[0.8] tracking-[-0.01em] text-white [animation-delay:0.1s] sm:text-[12vw] md:text-[10vw] lg:text-[9vw]">
          SOY ELLA
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-[20rem] text-[0.85rem] font-light leading-relaxed text-white/85 [animation-delay:0.2s] sm:mt-8 sm:max-w-md sm:text-base md:max-w-lg md:text-lg">
          Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост,
          качество жизни и сильное окружение.
        </p>
        <div className="animate-fade-up mt-8 [animation-delay:0.3s] sm:mt-10">
          <a
            href="#event"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white/50 hover:bg-white hover:text-brand-ink sm:px-10 sm:py-4 sm:text-[0.72rem]"
          >
            Занять место
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-fade-up [animation-delay:0.5s] sm:bottom-12">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
