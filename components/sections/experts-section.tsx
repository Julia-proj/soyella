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
          No. 03 / Программа
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

        {/* Experts grid - larger photos */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:gap-8">
          {EXPERTS.map((expert, index) => (
            <motion.article
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group"
            >
              {/* Large image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream sm:aspect-[3/2]">
                <Image
                  src={expert.image}
                  alt={`Эксперт SOY ELLA: ${expert.name}`}
                  fill
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ filter: "saturate(0.9) contrast(1.02)" }}
                />
              </div>

              {/* Content */}
              <div className="mt-5 sm:mt-6">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-brand-taupe sm:text-[0.65rem]">
                  {expert.tag}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-brand-ink sm:text-3xl">
                  {expert.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-brand-ink/60 sm:text-lg">
                  {expert.topic}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
