"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const IMAGES = [
  // Desktop: left hero (5 cols, 2 rows) | Mobile: full-width
  {
    src: "/soy-ella/flower.jpeg",
    alt: "Флористика встречи SOY ELLA",
    frame: "aspect-[3/4] sm:col-span-2 sm:aspect-[16/10] lg:col-span-5 lg:row-span-2 lg:aspect-auto",
  },
  // Desktop: right-top wide (7 cols) | Tablet: full-width
  {
    src: "/soy-ella/IMG_4920.jpeg",
    alt: "Букет и сервировка встречи",
    frame: "aspect-[3/4] sm:col-span-2 sm:aspect-[16/9] lg:col-span-7 lg:row-span-1 lg:aspect-auto",
  },
  // Desktop: right-bottom pair (4+3 cols) | Mobile: 2-col pair
  {
    src: "/soy-ella/reir.JPG",
    alt: "Выступление эксперта SOY ELLA",
    frame: "aspect-[4/5] lg:col-span-4 lg:row-span-1",
  },
  {
    src: "/soy-ella/IMG_4752.PNG",
    alt: "Детали премиального события",
    frame: "aspect-[4/5] lg:col-span-3 lg:row-span-1",
  },
  // Desktop: three equal (4+4+4) | Mobile: 2-col pair
  {
    src: "/soy-ella/IMG_4749.PNG",
    alt: "Улыбки девушек на встрече",
    frame: "aspect-[4/5] lg:col-span-4 lg:row-span-1",
  },
  {
    src: "/soy-ella/salmon.jpeg",
    alt: "Угощения на встрече SOY ELLA",
    frame: "aspect-[4/5] lg:col-span-4 lg:row-span-1",
  },
  // Desktop: third of three | Tablet: full-width to avoid orphan
  {
    src: "/soy-ella/IMG_9498.JPG",
    alt: "Теплая встреча участниц SOY ELLA",
    frame: "aspect-[4/5] sm:col-span-2 sm:aspect-[16/9] lg:col-span-4 lg:row-span-1",
  },
  // Desktop: full-width panorama | Tablet+: full-width
  {
    src: "/soy-ella/table.jpeg",
    alt: "Сервировка стола SOY ELLA",
    frame: "aspect-[3/4] sm:col-span-2 sm:aspect-[16/9] lg:col-span-12 lg:row-span-1 lg:aspect-[21/9]",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Галерея встреч" className="relative overflow-hidden bg-brand-blue py-12 text-white sm:py-16 md:py-28 xl:py-36">
      <div className="site-shell">
        <div className="grid gap-4 sm:gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-brand-butter sm:text-xs">Атмосфера</p>
            <h2 className="section-title mt-3 font-display sm:mt-4">
              Наши встречи в кадре
            </h2>
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
          className="mt-6 grid grid-cols-2 gap-1.5 sm:mt-8 sm:gap-3 lg:grid-cols-12 lg:auto-rows-[14rem] lg:gap-4 xl:auto-rows-[15rem]"
        >
          {IMAGES.map((img) => (
            <motion.div
              key={img.src}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className={`group relative overflow-hidden rounded-lg bg-white/10 shadow-[0_18px_56px_-36px_rgba(0,0,0,0.55)] sm:rounded-xl lg:rounded-2xl ${img.frame}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                className="editorial-photo-warm object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
