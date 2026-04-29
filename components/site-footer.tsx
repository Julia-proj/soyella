import { Instagram, Mail, MapPin } from "lucide-react"
import { TransitionLink } from "@/components/ui/transition-link"

const NAV = [
  { href: "#about",   label: "О нас" },
  { href: "#event",   label: "Встреча" },
  { href: "#experts", label: "Эксперты" },
  { href: "#gallery", label: "Галерея" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-brand-ink pb-12 text-white sm:pb-16 lg:pb-20">

      {/* Event banner */}
      <div className="border-b border-white/10">
        <div className="site-shell flex flex-col gap-6 py-10 sm:py-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.6rem]">
              Следующая встреча
            </p>
            <p className="mt-3 font-display text-2xl leading-none tracking-[-0.01em] text-white sm:text-3xl md:text-4xl">
              30 мая · Madrid
            </p>
          </div>
          <a
            href="#event"
            className="inline-flex items-center justify-center self-start border border-white/20 bg-transparent px-8 py-4 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-brand-ink sm:text-[0.65rem] md:self-auto"
          >
            Посмотреть программу
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="site-shell py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <p className="font-display text-xl tracking-[0.05em] text-white sm:text-2xl">
              SOY ELLA
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50 sm:text-base">
              Закрытое женское комьюнити в Мадриде. Место, где рождаются дружбы,
              проекты и большие идеи.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-brand-butter sm:text-[0.6rem]">
              Навигация
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/50">
              {NAV.map((link) => (
                <li key={link.href}>
                  <TransitionLink href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-brand-butter sm:text-[0.6rem]">
              Контакты
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Instagram className="size-4" aria-hidden />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@soyella.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="size-4" aria-hidden />
                  hello@soyella.com
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

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-white/30 sm:mt-16 sm:flex-row sm:text-[0.65rem]">
          <p>© {new Date().getFullYear()} Soy Ella — Madrid</p>
          <p>Сделано с вниманием к деталям</p>
        </div>
      </div>

    </footer>
  )
}
