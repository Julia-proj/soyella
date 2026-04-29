"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const EXPERTS = [
  {
    name: "Christina",
    topic: "Воркшоп по современному уходу и клеточному долголетию",
    tag: "Skincare",
    image: "/soy-ella/expert-christina.jpg",
  },
  {
    name: "Leame Beauty Zone",
    topic: "3D-диагностика лица и индивидуальный протокол",
    tag: "Diagnostic",
    image: "/soy-ella/3d.jpg",
  },
  {
    name: "Amazoniko",
    topic: "Эффект салонных волос дома",
    tag: "Hair Care",
    image: "/soy-ella/expert-amazoniko.jpg",
  },
  {
    name: "Matcha Atelier",
    topic: "Дегустация премиальной церемониальной матчи",
    tag: "Tea",
    image: "/soy-ella/matcha.jpg",
  },
]

export function ExpertsSection() {
  return (
    <section id="experts" aria-label="Эксперты встречи" className="section-pad bg-brand-sand text-brand-ink">
      <div className="site-shell">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number"
        >
          No. 03 / Эксперты
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="section-title mt-6 max-w-2xl font-display sm:mt-8"
        >
          Те, кто выйдет к нам на сцену
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-brand-ink/60 sm:text-lg"
        >
          Каждый спикер встречи отобран лично. Только те, кто действительно знает дело и готов делиться по-настоящему полезным.
        </motion.p>

        {/* Experts grid — horizontal cards like reference */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-2">
          {EXPERTS.map((expert, index) => (
            <motion.article
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group flex gap-5 border-b border-brand-ink/10 pb-6 sm:gap-6 sm:pb-8"
            >
              {/* Image */}
              <div className="relative aspect-square w-24 shrink-0 overflow-hidden bg-brand-cream sm:w-32 md:w-36">
                <Image
                  src={expert.image}
                  alt={`Эксперт SOY ELLA: ${expert.name}`}
                  fill
                  sizes="(min-width: 768px) 144px, 96px"
                  className="editorial-photo-warm object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-brand-taupe sm:text-[0.6rem]">
                  {expert.tag}
                </span>
                <h3 className="mt-2 font-serif text-xl text-brand-ink sm:text-2xl">
                  {expert.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/60 sm:text-base">
                  {expert.topic}
                </p>
              </div>

              {/* Number badge */}
              <span className="ml-auto hidden shrink-0 font-serif text-3xl text-brand-ink/10 sm:block md:text-4xl">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
