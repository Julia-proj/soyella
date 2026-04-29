import Image from "next/image"
import { Sticker } from "@/components/sticker"


const PRINCIPLES = [
  {
    n: "01",
    t: "Закрытый формат",
    d: "Небольшой круг, заявки вручную и атмосфера, где легко быть собой.",
  },
  {
    n: "02",
    t: "Окружение уровня",
    d: "Предпринимательницы, специалисты и девушки, которым важно качество контакта.",
  },
  {
    n: "03",
    t: "Красиво и по делу",
    d: "Встречи с экспертами, честные разговоры, эстетика и практическая польза.",
  },
]

export function AboutSection() {
  return (
    <section id="about" aria-label="О SOY ELLA" className="section-pad relative overflow-hidden bg-brand-cream">
      <div className="site-shell">
        <div data-reveal="" className="max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-blue">О SOY ELLA</p>
          <h2 className="section-title font-display text-brand-ink">
            Мы создаем среду, где знакомства становятся дружбой, партнерством и точкой роста.
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-6 sm:mt-14 sm:gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div data-reveal="" data-delay="80" className="relative lg:col-span-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_24px_70px_-48px_rgba(24,24,20,0.45)] sm:aspect-[3/4]">
              <Image
                src="/soy-ella/hero.jpg"
                alt="Женщины общаются на встрече SOY ELLA"
                fill
                sizes="(min-width: 1024px) 31vw, 100vw"
                className="editorial-photo object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div data-reveal="" data-delay="160" className="py-6 lg:col-span-4 lg:py-0">
            <p className="text-base leading-relaxed text-brand-ink/70 sm:text-lg lg:text-xl">
              Каждая встреча продумана как личный вечер: сильные спикеры, теплый контакт,
              премиальные партнеры и девушки, с которыми хочется оставаться на связи.
            </p>
          </div>

          <div data-reveal="" data-delay="240" className="relative lg:col-span-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_24px_70px_-48px_rgba(24,24,20,0.45)] sm:aspect-[4/5]">
              <Image
                src="/soy-ella/IMG_4749.PNG"
                alt="Детали премиального события SOY ELLA"
                fill
                sizes="(min-width: 1024px) 31vw, 100vw"
                className="editorial-photo-warm object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
            <Sticker tone="white" rotate={1} className="absolute bottom-4 right-3 sm:bottom-5 sm:right-4">
              качество важнее количества
            </Sticker>
          </div>
        </div>

        <ul className="mt-10 grid gap-px bg-brand-ink/10 sm:mt-14 sm:grid-cols-3 lg:mt-16">
          {PRINCIPLES.map((item, i) => (
            <li
              key={item.n}
              data-reveal=""
              data-delay={i * 100}
              className="bg-brand-cream px-5 py-8 sm:px-6 sm:py-10 md:px-8"
            >
              <span className="font-serif text-4xl italic text-brand-blue sm:text-5xl">{item.n}</span>
              <h3 className="mt-4 font-serif text-2xl uppercase leading-none sm:mt-5 sm:text-3xl">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/65 sm:mt-4 sm:text-base">{item.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
