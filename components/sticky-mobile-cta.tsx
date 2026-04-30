"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { openBookingModal } from "@/lib/booking-events"

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
        "fixed inset-x-0 bottom-0 z-50 bg-brand-blue text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
        <div className="min-w-0 flex flex-col">
          <p className="text-[0.48rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[0.52rem]">
            30 мая · Madrid
          </p>
          <p className="mt-0.5 text-lg font-semibold text-brand-yellow sm:text-xl">
            Beauty Day
          </p>
          <p className="mt-0.5 text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-brand-yellow/70 sm:text-[0.52rem]">
            бронь до 23 мая
          </p>
        </div>
        <button
          type="button"
          onClick={openBookingModal}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-4 py-2.5 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-brand-ink transition-colors hover:bg-brand-butter sm:px-6 sm:py-3 sm:text-[0.6rem] sm:tracking-[0.2em]"
        >
          Занять место
        </button>
      </div>
    </div>
  )
}
