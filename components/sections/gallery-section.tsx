"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const IMAGES = [
  { src: "/soy-ella/gallery-girls.jpg", alt: "Участницы SOY ELLA" },
  { src: "/soy-ella/flower.jpeg", alt: "Флористика встречи SOY ELLA" },
  { src: "/soy-ella/IMG_4920.jpeg", alt: "Букет и сервировка встречи" },
  { src: "/soy-ella/vstrechi.jpg", alt: "Премиальные закуски на встрече" },
  { src: "/soy-ella/reir.JPG", alt: "Выступление эксперта SOY ELLA" },
  { src: "/soy-ella/gallery-girls-2.jpg", alt: "Девушки на встрече SOY ELLA" },
]

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Галерея встреч" className="bg-brand-cream py-20 sm:py-28 lg:py-36">
      <div className="site-shell mb-12 sm:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number"
        >
          No. 06 / Атмосфера
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-title mt-6 max-w-lg font-display sm:mt-8"
        >
          Наши встречи в кадре
        </motion.h2>
      </div>

      {/* Gallery grid - modern masonry-like layout */}
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:gap-4">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.08 * index }}
              className={`group relative overflow-hidden bg-brand-sand ${
                index === 0 ? "aspect-[3/4] md:col-span-2 md:row-span-2 md:aspect-square" : 
                index === 5 ? "aspect-[3/4] md:col-span-1 md:aspect-square" :
                "aspect-[4/5] sm:aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ filter: "saturate(0.94) contrast(1.02)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
