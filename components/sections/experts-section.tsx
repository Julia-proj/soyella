import Image from "next/image"

const EXPERTS = [
  {
    name: "Christina",
    topic: "Воркшоп по современному уходу и клеточному долголетию",
    tag: "Longevity",
    image: "/soy-ella/expert-christina.jpg",
  },
  {
    name: "Lera Ruma",
    topic: "Личный бренд и стратегия: как говорить о себе ярко и строить влиятельный проект",
    tag: "Стратегия",
    image: "/soy-ella/ruma.jpg",
  },
  {
    name: "Amazoniko",
    topic: "Эффект салонных волос дома",
    tag: "Hair Care",
    image: "/soy-ella/expert-amazoniko.jpg",
  },
  {
    name: "Leame Beauty Zone",
    topic: "3D-диагностика лица и честная beauty-стратегия",
    tag: "Diagnostic",
    image: "/soy-ella/3d.jpg",
  },
  {
    name: "Matcha Atelier",
    topic: "Дегустация премиальной матчи и ритуалы энергии",
    tag: "Tea",
    image: "/soy-ella/matcha.jpg",
  },
]

export function ExpertsSection() {
  return (
    <section id="experts" aria-label="Эксперты встречи" className="section-pad bg-brand-butter text-brand-ink">
      <div className="site-shell">
        <div className="grid gap-4 sm:gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-label text-brand-blue">Программа</p>
            <h2 className="section-title mt-3 font-display sm:mt-4">
              Программа в этот день
            </h2>
          </div>
          <p className="hidden max-w-md text-lg leading-relaxed text-brand-ink/70 lg:col-span-4 lg:block">
            Каждый спикер отобран лично. Только те, кто действительно знает дело и умеет
            делиться полезным без лишней воды.
          </p>
        </div>

        <ul className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
          {EXPERTS.map((expert, index) => (
            <li
              key={expert.name}
              data-reveal=""
              data-delay={index * 80}
              className="group card-lift flex overflow-hidden rounded-lg border border-brand-ink/8 bg-brand-white sm:flex-col sm:rounded-xl"
            >
              {/* Image: square on mobile (row), portrait on sm+ (col) */}
              <div className="relative aspect-square w-24 shrink-0 overflow-hidden bg-brand-sand sm:aspect-[3/4] sm:w-full">
                <Image
                  src={expert.image}
                  alt={`Эксперт SOY ELLA: ${expert.name}`}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 6rem"
                  className="editorial-photo-warm object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              {/* Text */}
              <div className="flex flex-1 flex-col justify-center gap-1 p-3 sm:justify-start sm:gap-1.5 sm:p-5">
                <span className="section-label text-[0.6rem] text-brand-blue sm:text-[0.65rem]">{expert.tag}</span>
                <h3 className="font-serif text-base uppercase leading-tight text-brand-ink sm:text-xl">{expert.name}</h3>
                <p className="text-[0.7rem] leading-snug text-brand-ink/60 sm:mt-0.5 sm:text-[0.8rem] sm:leading-relaxed">{expert.topic}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
