"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { TransitionLink } from "@/components/ui/transition-link"

const LINKS = [
  { href: "#about",   label: "О НАС" },
  { href: "#event",   label: "ВСТРЕЧА" },
  { href: "#experts", label: "ПРОГРАММА" },
  { href: "#gallery", label: "ГАЛЕРЕЯ" },
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
      {/* Top nav — all screen sizes */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-xl"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="site-shell flex h-16 items-center justify-between gap-6 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            aria-label="SOY ELLA — на главную"
            className="font-display text-xl leading-none tracking-normal sm:text-2xl"
          >
            <span className={cn("transition-colors duration-300", scrolled ? "text-foreground" : "text-white")}>SOY </span>
            <span className="text-brand-blue">ELLA</span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Основная навигация" className="hidden lg:flex">
            <ul className="flex items-center gap-8 text-[0.72rem] font-semibold uppercase tracking-[0.08em]">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className={cn(
                      "transition-colors duration-300 hover:text-brand-butter",
                      scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white",
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
              "hidden lg:inline-flex rounded-full px-6 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5",
              scrolled
                ? "bg-brand-ink text-white hover:bg-brand-ink/80"
                : "bg-white/15 text-white border border-white/40 hover:bg-white/25",
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
              "lg:hidden inline-flex size-11 items-center justify-center transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white",
            )}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
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
            SOY <span className="text-brand-blue">ELLA</span>
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
