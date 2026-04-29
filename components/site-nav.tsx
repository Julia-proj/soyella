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
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
      {/* Top nav */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-brand-ink/5 bg-brand-cream/95 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="site-shell flex h-14 items-center justify-between gap-4 sm:h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            aria-label="SOY ELLA — на главную"
            className="font-display text-sm tracking-[0.1em] sm:text-base"
          >
            <span className={cn("transition-colors duration-300", scrolled ? "text-brand-ink" : "text-white")}>SOY </span>
            <span className="text-brand-blue">ELLA</span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Основная навигация" className="hidden lg:flex">
            <ul className="flex items-center gap-10 text-[0.65rem] font-medium uppercase tracking-[0.15em]">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className={cn(
                      "transition-colors duration-300",
                      scrolled ? "text-brand-ink/60 hover:text-brand-ink" : "text-white/70 hover:text-white",
                    )}
                  >
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#event"
            className={cn(
              "hidden lg:inline-flex px-6 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300",
              scrolled
                ? "rounded-full border border-brand-ink bg-brand-ink text-white hover:bg-transparent hover:text-brand-ink"
                : "rounded-full border border-white/30 text-white hover:bg-white hover:text-brand-ink",
            )}
          >
            Занять место
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
            aria-expanded={open}
            className={cn(
              "inline-flex size-10 items-center justify-center transition-colors duration-300 lg:hidden",
              scrolled ? "text-brand-ink" : "text-white",
            )}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-brand-ink/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] w-full max-w-[320px] bg-brand-cream px-6 pt-6 text-brand-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Меню навигации"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-sm uppercase tracking-[0.1em]">
            <span className="text-brand-ink">SOY </span><span className="text-brand-blue">ELLA</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
            className="inline-flex size-10 items-center justify-center"
          >
            <X className="size-4" />
          </button>
        </div>

        <ul className="mt-12">
          {LINKS.map((link) => (
            <li key={link.href}>
              <TransitionLink
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-t border-brand-ink/10 py-5 font-serif text-2xl text-brand-ink transition-colors hover:text-brand-taupe"
              >
                {link.label}
              </TransitionLink>
            </li>
          ))}
        </ul>

        <a
          href="#event"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex w-full items-center justify-center rounded-full border border-brand-ink bg-brand-ink py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-brand-ink"
        >
          Занять место
        </a>
      </div>
    </>
  )
}
