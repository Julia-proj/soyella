"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 bg-brand-ink text-white shadow-[0_-16px_38px_-28px_rgba(24,24,20,0.75)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-5">
        <div>
          <p
            className="text-[0.55rem] font-bold uppercase tracking-[0.22em] sm:text-[0.6rem]"
            style={{ color: "var(--brand-butter)" }}
          >
            30 МАЯ · MADRID
          </p>
          <p className="mt-0.5 font-display text-xs uppercase leading-none tracking-normal text-white sm:mt-1 sm:text-sm">
            Beauty Day
          </p>
        </div>
        <a
          href="#event"
          aria-label="Посмотреть программу"
          className="inline-flex size-10 items-center justify-center rounded-full bg-brand-butter text-brand-ink transition-colors hover:bg-white sm:size-12"
        >
          <ArrowUpRight className="size-4 sm:size-5" />
        </a>
      </div>
    </div>
  )
}
