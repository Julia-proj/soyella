import Image from "next/image"
import { ArrowUpRight, Instagram } from "lucide-react"
import { Sticker } from "@/components/sticker"

export function FeaturedOrganizerSection() {
  return (
    <section
      aria-label="Один из организаторов встречи - Keratin Madrid"
      className="section-pad relative overflow-hidden bg-brand-blue text-white"
    >
      <div className="site-shell grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-16">
        <div data-reveal="" className="relative lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0_24px_70px_-46px_rgba(0,0,0,0.72)] sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/soy-ella/expert-keratin-madrid.jpg"
              alt="Елена Александрова, Keratin Madrid"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="editorial-photo object-cover object-top transition-transform duration-1000 hover:scale-[1.02]"
            />
          </div>
          <Sticker tone="white" rotate={-1} className="absolute left-3 top-3 sm:left-5 sm:top-5">
            Keratin Madrid
          </Sticker>
        </div>

        <div data-reveal="" data-delay="150" className="lg:col-span-7 lg:pt-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-brand-butter sm:text-xs">Один из организаторов</p>
          <h2 className="section-title mt-3 font-display text-white sm:mt-4">
            Елена
            <br />
            <em className="text-brand-butter">Александрова</em>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-base md:mt-8 md:text-lg md:leading-[1.75]">
            Она представит систему домашнего восстановления волос и новый
            курс для девушек, которые хотят сильные здоровые волосы без хаотичных трат.
          </p>

          <div className="mt-4 max-w-2xl border-y border-white/18 py-4 sm:mt-5 md:mt-8 md:py-5">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/55 sm:text-[0.68rem]">В программе Beauty Day</p>
            <p className="mt-1.5 font-serif text-lg uppercase leading-none text-white sm:mt-2 sm:text-xl md:text-2xl lg:text-3xl">
              Восстановление волос · авторский курс
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3 md:mt-6">
            <a
              href="https://www.instagram.com/keratin_madrid/"
              target="_blank"
              rel="noreferrer"
              className="pill-button bg-brand-butter px-5 py-3 text-[0.7rem] text-brand-ink sm:px-6 sm:py-3.5"
            >
              <Instagram className="mr-1.5 size-3.5 sm:mr-2 sm:size-4" aria-hidden />
              Instagram
              <ArrowUpRight className="ml-1.5 size-3.5 sm:ml-2 sm:size-4" aria-hidden />
            </a>
            <a
              href="https://www.instagram.com/curso_keratin_madrid/"
              target="_blank"
              rel="noreferrer"
              className="pill-button border border-white/40 px-5 py-3 text-[0.7rem] text-white hover:bg-white hover:text-brand-ink sm:px-6 sm:py-3.5"
            >
              Смотреть курс
              <ArrowUpRight className="ml-1.5 size-3.5 sm:ml-2 sm:size-4" aria-hidden />
            </a>
          </div>

          <dl className="mt-5 grid max-w-2xl grid-cols-3 border-y border-white/15 sm:mt-6 md:mt-10">
            <div data-reveal="" data-delay="80" className="border-r border-white/15 py-3 pr-3 sm:px-4 sm:py-4 md:px-6 md:py-5">
              <dt className="text-[0.55rem] font-bold uppercase text-white/55 sm:text-[0.65rem]">Лет практики</dt>
              <dd className="mt-1 font-serif text-xl text-brand-butter sm:text-2xl md:text-3xl lg:text-4xl">12</dd>
            </div>
            <div data-reveal="" data-delay="160" className="border-r border-white/15 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5">
              <dt className="text-[0.55rem] font-bold uppercase text-white/55 sm:text-[0.65rem]">Учениц</dt>
              <dd className="mt-1 font-serif text-xl text-brand-butter sm:text-2xl md:text-3xl lg:text-4xl">500+</dd>
            </div>
            <div data-reveal="" data-delay="240" className="py-3 pl-3 sm:px-4 sm:py-4 md:px-6 md:py-5">
              <dt className="text-[0.55rem] font-bold uppercase text-white/55 sm:text-[0.65rem]">Фокус</dt>
              <dd className="mt-1 font-serif text-xl italic text-brand-butter sm:text-2xl md:text-3xl lg:text-4xl">Hair care</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
