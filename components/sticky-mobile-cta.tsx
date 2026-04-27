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
        "fixed inset-x-0 bottom-0 z-50 bg-brand-blue text-white shadow-[0_-16px_38px_-28px_rgba(24,24,20,0.75)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex h-16 items-center justify-between px-5">
        <div>
          <p
            className="text-[0.6rem] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--brand-butter)" }}
          >
            30 МАЯ · MADRID
          </p>
          <p className="mt-1 font-display text-sm uppercase leading-none tracking-normal text-white">
            Beauty Day
          </p>
        </div>
        <a
          href="#event"
          aria-label="Посмотреть программу"
          className="inline-flex size-12 items-center justify-center rounded-full bg-brand-butter text-brand-ink transition-colors hover:bg-white"
        >
          <ArrowUpRight className="size-5" />
        </a>
      </div>
    </div>
  )
}
