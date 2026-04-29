"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const IMAGES = [
  {
    src: "/soy-ella/flower.jpeg",
    alt: "Флористика встречи SOY ELLA",
    frame: "aspect-[3/4] sm:col-span-2 lg:col-span-4 lg:row-span-2",
  },
  {
    src: "/soy-ella/IMG_4920.jpeg",
    alt: "Букет и сервировка встречи",
    frame: "aspect-[4/3] lg:col-span-5",
  },
  {
    src: "/soy-ella/reir.JPG",
    alt: "Выступление эксперта SOY ELLA",
    frame: "aspect-[4/3] lg:col-span-3",
  },
  {
    src: "/soy-ella/IMG_4752.PNG",
    alt: "Детали премиального события",
    frame: "aspect-[4/3] lg:col-span-4",
  },
  {
    src: "/soy-ella/salmon.jpeg",
    alt: "Угощения на встрече SOY ELLA",
    frame: "aspect-[4/3] lg:col-span-4",
  },
  {
    src: "/soy-ella/IMG_9498.JPG",
    alt: "Теплая встреча участниц SOY ELLA",
    frame: "aspect-[4/3] sm:col-span-2 lg:col-span-8",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Галерея встреч" className="section-pad relative overflow-hidden bg-brand-sand text-brand-ink">
      <div className="site-shell">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number"
        >
          No. 06 / Галерея
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="section-title mt-6 max-w-2xl font-display sm:mt-8"
        >
          Наши встречи в кадре
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-lg text-base leading-relaxed text-brand-ink/60 sm:text-lg"
        >
          Каждая встреча — отдельная история. Формат, детали и свет подобраны так, чтобы хотелось вернуться.
        </motion.p>

        {/* Image grid */}
        <div className="mt-12 grid grid-cols-2 gap-2 sm:mt-16 sm:gap-3 lg:grid-cols-12 lg:auto-rows-[12rem] lg:gap-4 xl:auto-rows-[14rem]">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className={`group relative overflow-hidden bg-brand-cream ${img.frame}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                className="editorial-photo-warm object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
