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
  {
    name: "Lera Ruma",
    topic: "Личный бренд и стратегия: как говорить о себе ярко и строить влиятельный проект",
    tag: "Стратегия",
    image: "/soy-ella/expert-lera-ruma.jpg",
  },
]

export function ExpertsSection() {
  return (
    <section id="experts" aria-label="Эксперты встречи" className="section-pad bg-brand-yellow-soft text-brand-blue">
      <div className="site-shell">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 03 / Программа
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mega-title mt-8 max-w-3xl font-display text-brand-blue/80 sm:mt-10"
        >
          Что будет в этот день
        </motion.h2>

        {/* Experts grid - larger photos */}
        <div className="mt-14 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-5">
          {EXPERTS.map((expert, index) => (
            <motion.article
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 * index }}
              className={`group${
                index === 4 ? " sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream sm:aspect-[4/5] xl:aspect-[3/4]">
                <Image
                  src={expert.image}
                  alt={`Эксперт SOY ELLA: ${expert.name}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ filter: "saturate(0.95) contrast(1.02)" }}
                />
              </div>

              {/* Content */}
              <div className="mt-6 sm:mt-7">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-ink/45">
                  {expert.tag}
                </span>
                <h3 className="section-h3 mt-3 font-serif text-brand-blue">
                  {expert.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brand-ink/65 sm:text-lg">
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
