import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { TransitionLink } from "@/components/ui/transition-link"

const NAV = [
  { href: "#about",   label: "О НАС" },
  { href: "#event",   label: "ВСТРЕЧА" },
  { href: "#experts", label: "ПРОГРАММА" },
  { href: "#gallery", label: "ГАЛЕРЕЯ" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-foreground pb-16 text-background sm:pb-20 lg:pb-24">

      {/* ── Event banner ─────────────────────────────── */}
      <div className="border-b border-background/10">
        <div className="site-shell flex flex-col gap-5 py-8 sm:gap-6 sm:py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[0.6rem] uppercase tracking-[0.22em] text-background/35 sm:mb-3 sm:text-[0.68rem]">
              Следующая встреча
            </p>
            <p
              className="font-display text-2xl leading-[0.85] tracking-normal text-background sm:text-3xl md:text-4xl lg:text-5xl"
            >
              30 МАЯ · MADRID
            </p>
          </div>
          <a
            href="#event"
            className="inline-flex items-center gap-2 self-start border border-background/30 px-6 py-3 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-background transition-colors hover:bg-background hover:text-foreground sm:px-8 sm:py-4 sm:text-[0.72rem] md:self-auto"
          >
            Посмотреть программу
            <ArrowUpRight className="size-3.5 sm:size-4" aria-hidden />
          </a>
        </div>
      </div>

      {/* ── Footer content ───────────────────────────── */}
      <div className="site-shell py-10 sm:py-16">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">

          <div className="lg:col-span-6">
            <p
              className="font-display text-2xl uppercase leading-none tracking-normal text-background sm:text-3xl md:text-4xl"
            >
              SOY ELLA
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-background/55 sm:mt-6 sm:text-base">
              Закрытое женское комьюнити в Мадриде. Место, где рождаются дружбы,
              проекты и большие идеи.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p
              className="mb-4 text-[0.6rem] font-bold uppercase tracking-widest sm:mb-5 sm:text-[0.68rem]"
              style={{ color: "var(--footer-accent)" }}
            >
              Навигация
            </p>
            <ul className="space-y-2.5 text-xs font-semibold uppercase text-background/55 sm:space-y-3 sm:text-sm">
              {NAV.map((link) => (
                <li key={link.href}>
                  <TransitionLink href={link.href} className="transition-colors hover:text-background">
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p
              className="mb-4 text-[0.6rem] font-bold uppercase tracking-widest sm:mb-5 sm:text-[0.68rem]"
              style={{ color: "var(--footer-accent)" }}
            >
              Контакты
            </p>
            <ul className="space-y-2.5 text-sm sm:space-y-3">
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-background/55 transition-colors hover:text-background"
                >
                  <Instagram className="size-3.5 sm:size-4" aria-hidden />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@soyella.com"
                  className="inline-flex items-center gap-2 text-background/55 transition-colors hover:text-background"
                >
                  <Mail className="size-3.5 sm:size-4" aria-hidden />
                  hello@soyella.com
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-background/55">
                  <MapPin className="size-3.5 sm:size-4" aria-hidden />
                  Madrid
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-background/10 pt-6 text-[0.65rem] font-bold uppercase tracking-wider text-background/35 sm:mt-14 sm:flex-row sm:gap-4 sm:pt-7 sm:text-xs">
          <p>© {new Date().getFullYear()} Soy Ella — Madrid</p>
          <p>Сделано с вниманием к деталям</p>
        </div>
      </div>

    </footer>
  )
}
