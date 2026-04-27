"use client"

import Image from "next/image"
import { Sticker } from "@/components/sticker"
import { motion } from "framer-motion"

const IMAGES = [
  { src: "/soy-ella/IMG_9498.JPG", alt: "Теплая встреча участниц SOY ELLA" },
  { src: "/soy-ella/IMG_4920.jpeg", alt: "Букет и сервировка встречи" },
  { src: "/soy-ella/reir.JPG", alt: "Выступление эксперта SOY ELLA" },
  { src: "/soy-ella/IMG_4752.PNG", alt: "Детали премиального события" },
  { src: "/soy-ella/IMG_4749.PNG", alt: "Улыбки девушек на встрече" },
  { src: "/soy-ella/salmon.jpeg",   alt: "Угощения на встрече SOY ELLA" },
  { src: "/soy-ella/flower.jpeg",   alt: "Флористика встречи SOY ELLA" },
  { src: "/soy-ella/table.jpeg",    alt: "Сервировка стола SOY ELLA" },
  { src: "/soy-ella/2nd.JPG",       alt: "Участница встречи SOY ELLA" },
]

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Галерея встреч" className="section-pad relative overflow-hidden bg-brand-blue text-white">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-butter">Атмосфера</p>
            <h2 className="section-title mt-4 font-display">
              Наши встречи в кадре
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-fit lg:col-span-4 lg:justify-self-end"
          >
            <Sticker tone="white" rotate={0}>
              как маленький праздник
            </Sticker>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
        >
          {IMAGES.map((img, index) => {
            const tall = index === 0 || index === 3
            const wide = index === 1 || index === 5
            return (
              <motion.div
                key={img.src}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={
                  "group relative overflow-hidden rounded-lg bg-white/10 shadow-[0_18px_56px_-36px_rgba(0,0,0,0.55)] " +
                  (tall ? "row-span-2 aspect-[3/4] lg:aspect-[3/5]" : wide ? "aspect-[5/3]" : "aspect-square")
                }
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="editorial-photo-warm object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025]"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
