"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { TransitionLink } from "@/components/ui/transition-link"

const LINKS = [
  { href: "#about",   label: "О нас" },
  { href: "#event",   label: "Встреча" },
  { href: "#experts", label: "Эксперты" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Mobile header */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 lg:hidden",
          scrolled
            ? "border-b border-border bg-background/92 shadow-sm backdrop-blur-xl"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="site-shell flex h-16 items-center justify-between gap-6 sm:h-20">
          <a
            href="#home"
            aria-label="SOY ELLA — на главную"
            className="font-display text-xl leading-none tracking-normal sm:text-2xl"
          >
            <span className="text-foreground">SOY </span>
            <span className="text-accent">ELLA</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Открыть меню"
              aria-expanded={open}
              className="lg:hidden inline-flex size-11 items-center justify-center text-foreground"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop bottom nav */}
      <nav
        aria-label="Основная навигация"
        className="animate-nav-rise fixed inset-x-0 bottom-0 z-50 hidden border-t border-white/20 bg-brand-blue text-white shadow-[0_-18px_44px_-32px_rgba(24,24,20,0.8)] lg:block"
      >
        <div className="site-shell grid h-20 grid-cols-[minmax(180px,0.6fr)_minmax(0,1.8fr)_minmax(190px,0.6fr)] items-center gap-4 xl:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.6fr)_minmax(260px,0.7fr)] xl:gap-8">
          <a
            href="#home"
            aria-label="SOY ELLA — на главную"
            className="font-display text-2xl leading-none tracking-normal text-white xl:text-3xl"
          >
            SOY ELLA
          </a>

          <ul className="flex items-center justify-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.07em] text-white/82 xl:gap-9 xl:text-[0.72rem]">
            {LINKS.map((link) => (
              <li key={link.href}>
                <TransitionLink href={link.href} className="transition-colors duration-300 hover:text-brand-butter">
                  {link.label}
                </TransitionLink>
              </li>
            ))}
          </ul>

          <a
            href="#event"
            className="justify-self-end rounded-full bg-brand-butter px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white xl:px-7 xl:text-[0.72rem]"
          >
            Занять место
          </a>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] w-full max-w-[320px] bg-background px-6 pt-6 text-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Меню навигации"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-xl tracking-normal uppercase">
            SOY <span className="text-accent">ELLA</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
            className="inline-flex size-11 items-center justify-center"
          >
            <X className="size-5" />
          </button>
        </div>

        <ul className="mt-10 grid gap-0">
          {LINKS.map((link) => (
            <li key={link.href}>
              <TransitionLink
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-t border-border py-5 font-display text-3xl uppercase leading-none tracking-normal transition-colors hover:text-accent"
              >
                {link.label}
              </TransitionLink>
            </li>
          ))}
        </ul>

        <a
          href="#event"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex w-full items-center justify-center bg-foreground text-background py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-colors hover:bg-foreground/80"
        >
          Занять место
        </a>
      </div>

    </>
  )
}
