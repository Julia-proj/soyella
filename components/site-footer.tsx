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
    <footer id="contact" className="bg-foreground pb-20 text-background lg:pb-24">

      {/* ── Event banner ─────────────────────────────── */}
      <div className="border-b border-background/10">
        <div className="site-shell flex flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-background/35 mb-3">
              Следующая встреча
            </p>
            <p
              className="font-display text-background leading-[0.85] tracking-normal section-title"
            >
              30 МАЯ · MADRID
            </p>
          </div>
          <a
            href="#event"
            className="inline-flex items-center gap-2 border border-background/30 text-background px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-colors hover:bg-background hover:text-foreground self-start md:self-auto"
          >
            Посмотреть программу
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>

      {/* ── Footer content ───────────────────────────── */}
      <div className="site-shell py-16">
        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-6">
            <p
              className="font-display uppercase leading-none tracking-normal text-background section-title"
            >
              SOY ELLA
            </p>
            <p className="mt-6 max-w-md text-background/55 leading-relaxed">
              Закрытое женское комьюнити в Мадриде. Место, где рождаются дружбы,
              проекты и большие идеи.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p
              className="text-[0.68rem] font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--footer-accent)" }}
            >
              Навигация
            </p>
            <ul className="space-y-3 text-sm font-semibold uppercase text-background/55">
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
              className="text-[0.68rem] font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--footer-accent)" }}
            >
              Контакты
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-background/55 transition-colors hover:text-background"
                >
                  <Instagram className="size-4" aria-hidden />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@soyella.com"
                  className="inline-flex items-center gap-2 text-background/55 transition-colors hover:text-background"
                >
                  <Mail className="size-4" aria-hidden />
                  hello@soyella.com
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-background/55">
                  <MapPin className="size-4" aria-hidden />
                  Madrid
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-background/10 pt-7 text-xs font-bold uppercase tracking-wider text-background/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Soy Ella — Madrid</p>
          <p>Сделано с вниманием к деталям</p>
        </div>
      </div>

    </footer>
  )
}
