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

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-reveal="" data-delay="80" className="relative lg:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-[0_24px_70px_-48px_rgba(24,24,20,0.58)]">
              <Image
                src="/soy-ella/hero.jpg"
                alt="Женщины общаются на встрече SOY ELLA"
                fill
                sizes="(min-width: 1024px) 31vw, 100vw"
                className="editorial-photo object-cover object-center transition-transform duration-1000 hover:scale-[1.025]"
              />
            </div>
          </div>

          <div data-reveal="" data-delay="160" className="border-y border-brand-ink/15 py-8 lg:col-span-4 lg:border-y-0 lg:py-0">
            <p className="font-serif text-4xl uppercase leading-[0.9] text-brand-ink md:text-5xl">
              Мы создаем среду, где знакомства становятся дружбой, партнерством и точкой роста.
            </p>
            <p className="mt-7 text-lg leading-relaxed text-brand-ink/75">
              Каждая встреча продумана как личный вечер: сильные спикеры, теплый контакт,
              премиальные партнеры и девушки, с которыми хочется оставаться на связи.
            </p>
          </div>

          <div data-reveal="" data-delay="240" className="relative lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_24px_70px_-48px_rgba(24,24,20,0.58)]">
              <Image
                src="/soy-ella/IMG_4749.PNG"
                alt="Детали премиального события SOY ELLA"
                fill
                sizes="(min-width: 1024px) 31vw, 100vw"
                className="editorial-photo-warm object-cover object-center transition-transform duration-1000 hover:scale-[1.025]"
              />
            </div>
            <Sticker tone="white" rotate={1} className="absolute bottom-5 right-4">
              качество важнее количества
            </Sticker>
          </div>
        </div>

        <ul className="mt-16 grid border-y border-brand-ink/15 md:grid-cols-3">
          {PRINCIPLES.map((item, i) => (
            <li
              key={item.n}
              data-reveal=""
              data-delay={i * 100}
              className="border-brand-ink/15 py-10 md:border-r md:px-8 md:last:border-r-0"
            >
              <span className="font-serif text-5xl italic text-brand-blue">{item.n}</span>
              <h3 className="mt-5 font-serif text-3xl uppercase leading-none">{item.t}</h3>
              <p className="mt-4 leading-relaxed text-brand-ink/70">{item.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
