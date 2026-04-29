"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const IMAGES = [
  { src: "/soy-ella/flower.jpeg", alt: "Флористика встречи SOY ELLA" },
  { src: "/soy-ella/IMG_4920.jpeg", alt: "Букет и сервировка встречи" },
  { src: "/soy-ella/gallery-girls.jpg", alt: "Участницы SOY ELLA" },
  { src: "/soy-ella/vstrechi.jpg", alt: "Премиальные закуски на встрече" },
  { src: "/soy-ella/reir.JPG", alt: "Выступление эксперта SOY ELLA" },
  { src: "/soy-ella/gallery-girls-2.jpg", alt: "Девушки на встрече SOY ELLA" },
]

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Галерея встреч" className="bg-brand-cream py-16 sm:py-24 lg:py-32">
      <div className="site-shell mb-10 sm:mb-14">
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
          className="section-title mt-5 max-w-lg font-display sm:mt-6"
        >
          Наши встречи в кадре
        </motion.h2>
      </div>

      {/* Gallery grid - responsive and stylish */}
      <div className="grid grid-cols-2 gap-1.5 px-3 sm:gap-2 sm:px-5 md:grid-cols-3 md:gap-3 lg:px-8">
        {IMAGES.map((img, index) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.06 * index }}
            className="group relative aspect-[4/5] overflow-hidden bg-brand-sand sm:aspect-square md:aspect-[4/5]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ filter: "saturate(0.92) contrast(1.02)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
