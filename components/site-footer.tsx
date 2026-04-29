import { Instagram, MapPin } from "lucide-react"
import { TransitionLink } from "@/components/ui/transition-link"

const NAV = [
  { href: "#about",   label: "О нас" },
  { href: "#event",   label: "Встреча" },
  { href: "#experts", label: "Эксперты" },
  { href: "#gallery", label: "Галерея" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-brand-blue-deep pb-12 text-brand-cream sm:pb-16 lg:pb-20">

      {/* Event banner */}
      <div className="border-b border-brand-cream/10">
        <div className="site-shell flex flex-col gap-6 py-12 sm:py-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
              Следующая встреча
            </p>
            <p className="mt-4 font-display text-3xl leading-none tracking-[-0.01em] text-brand-cream sm:text-4xl md:text-5xl">
              30 мая · Madrid
            </p>
          </div>
          <a
            href="#event"
            className="inline-flex items-center justify-center self-start rounded-full border border-brand-cream/25 bg-transparent px-8 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-cream transition-all duration-300 hover:bg-brand-yellow hover:text-brand-blue hover:border-brand-yellow sm:text-[0.7rem] md:self-auto"
          >
            Посмотреть программу
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="site-shell py-14 sm:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <p className="font-display text-2xl tracking-[0.05em] text-brand-cream sm:text-3xl">
              SOY ELLA
            </p>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-brand-cream/55 sm:text-lg">
              Закрытое женское комьюнити в Мадриде. Место, где рождаются дружбы,
              проекты и большие идеи.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
              Навигация
            </p>
            <ul className="mt-6 space-y-3 text-base text-brand-cream/55">
              {NAV.map((link) => (
                <li key={link.href}>
                  <TransitionLink href={link.href} className="transition-colors hover:text-brand-cream">
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-brand-yellow sm:text-[0.65rem]">
              Контакты
            </p>
            <ul className="mt-6 space-y-3 text-base text-brand-cream/55">
              <li>
                <a
                  href="https://www.instagram.com/soy_ella.madrid/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand-cream"
                >
                  <Instagram className="size-4" aria-hidden />
                  Instagram
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" aria-hidden />
                  Madrid
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-brand-cream/10 pt-10 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-brand-cream/35 sm:mt-20 sm:flex-row sm:text-[0.65rem]">
          <p>© {new Date().getFullYear()} Soy Ella · Madrid</p>
          <p>Сделано с вниманием к деталям</p>
        </div>
      </div>

    </footer>
  )
}
