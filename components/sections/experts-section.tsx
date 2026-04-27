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
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div data-reveal="" className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Эксперты</p>
            <h2 className="section-title mt-4 font-display">
              Те, кто выйдет к нам на сцену
            </h2>
          </div>
          <p data-reveal="" data-delay="120" className="max-w-md text-lg leading-relaxed text-brand-ink/75 lg:col-span-4">
            Каждый спикер отобран лично. Только те, кто действительно знает дело и умеет
            делиться полезным без лишней воды.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {EXPERTS.map((expert, index) => (
            <li
              key={expert.name}
              data-reveal=""
              data-delay={index * 80}
              className="group overflow-hidden border border-brand-ink/10 bg-brand-white transition-shadow duration-500 hover:shadow-[0_24px_70px_-46px_rgba(24,24,20,0.42)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={expert.image}
                  alt={`Эксперт SOY ELLA: ${expert.name}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="editorial-photo-warm object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-blue px-4 py-2 text-[0.68rem] font-bold uppercase text-white">
                  {expert.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-4xl uppercase leading-none">{expert.name}</h3>
                <p className="mt-4 leading-relaxed text-brand-ink/70">{expert.topic}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
