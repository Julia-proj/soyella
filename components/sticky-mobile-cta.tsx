"use client"

import { useEffect, useState } from "react"
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
        "fixed inset-x-0 bottom-0 z-50 bg-brand-ink/95 backdrop-blur-sm text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex h-16 items-center justify-between px-5 sm:px-6">
        <div>
          <p className="text-[0.5rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.55rem]">
            30 мая · Madrid
          </p>
          <p className="mt-0.5 font-serif text-sm text-white sm:text-base">
            Beauty Day
          </p>
        </div>
        <a
          href="#event"
          className="inline-flex items-center justify-center bg-white px-5 py-2.5 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-brand-ink transition-colors hover:bg-brand-butter sm:px-6 sm:py-3 sm:text-[0.6rem]"
        >
          Занять место
        </a>
      </div>
    </div>
  )
}
