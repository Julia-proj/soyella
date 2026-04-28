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
  {
    name: "Елена Александрова",
    topic: "Система домашнего восстановления волос · Keratin Madrid",
    tag: "Keratin",
    image: "/soy-ella/expert-keratin-madrid.jpg",
  },
]

export function ExpertsSection() {
  return (
    <section id="experts" aria-label="Эксперты встречи" className="section-pad bg-brand-butter text-brand-ink">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-label text-brand-blue">Программа</p>
            <h2 className="section-title mt-4 font-display">
              Программа в этот день
            </h2>
          </div>
          <p className="hidden max-w-md text-lg leading-relaxed text-brand-ink/75 lg:col-span-4 lg:block">
            Каждый спикер отобран лично. Только те, кто действительно знает дело и умеет
            делиться полезным без лишней воды.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {EXPERTS.map((expert, index) => (
            <li
              key={expert.name}
              data-reveal=""
              data-delay={index * 80}
              className="group card-lift flex overflow-hidden rounded-xl border border-brand-ink/8 bg-brand-white sm:flex-col sm:rounded-2xl"
            >
              {/* Image: square on mobile (row), portrait on sm+ (col) */}
              <div className="relative aspect-square w-32 shrink-0 overflow-hidden bg-brand-sand sm:aspect-[3/4] sm:w-full">
                <Image
                  src={expert.image}
                  alt={`Эксперт SOY ELLA: ${expert.name}`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 8rem"
                  className="editorial-photo-warm object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              {/* Text */}
              <div className="flex flex-1 flex-col justify-center gap-1.5 p-4 sm:justify-start sm:gap-2 sm:p-6">
                <span className="section-label text-brand-blue">{expert.tag}</span>
                <h3 className="font-serif text-lg uppercase leading-tight text-brand-ink sm:text-2xl">{expert.name}</h3>
                <p className="text-[0.78rem] leading-snug text-brand-ink/65 sm:mt-1 sm:text-[0.84rem] sm:leading-relaxed">{expert.topic}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
