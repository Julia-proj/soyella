"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const IMAGES = [
  { src: "/soy-ella/flower.jpeg", alt: "Флористика встречи SOY ELLA" },
  { src: "/soy-ella/IMG_4920.jpeg", alt: "Букет и сервировка встречи" },
  { src: "/soy-ella/reir.JPG", alt: "Выступление эксперта SOY ELLA" },
  { src: "/soy-ella/IMG_4752.PNG", alt: "Детали премиального события" },
  { src: "/soy-ella/salmon.jpeg", alt: "Угощения на встрече SOY ELLA" },
  { src: "/soy-ella/IMG_9498.JPG", alt: "Теплая встреча участниц SOY ELLA" },
]

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Галерея встреч" className="bg-brand-cream py-20 sm:py-28 lg:py-36">
      {/* Full-width image grid */}
      <div className="grid grid-cols-2 gap-1 sm:gap-2 md:grid-cols-3">
        {IMAGES.map((img, index) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.08 * index }}
            className="group relative aspect-[4/5] overflow-hidden bg-brand-sand"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ filter: "saturate(0.9) contrast(1.02)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
