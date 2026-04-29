"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const EXIT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1]

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function Grain() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: GRAIN_SVG,
        backgroundSize: "180px 180px",
        opacity: 0.07,
        mixBlendMode: "overlay",
      }}
    />
  )
}

export function IntroAnimation() {
  const [visible, setVisible] = useState(true)
  const [phase, setPhase] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("se-intro")) {
      setVisible(false)
      return
    }
    document.body.style.overflow = "hidden"

    const timers = [
      setTimeout(() => setPhase(1), 300),       // "Comunidad"
      setTimeout(() => setPhase(2), 1200),      // "Madrid"
      setTimeout(() => setPhase(3), 2000),      // SOY + ELLA
      setTimeout(() => setExiting(true), 3300), // split exit
      setTimeout(() => {
        sessionStorage.setItem("se-intro", "1")
        setVisible(false)
        document.body.style.overflow = ""
      }, 4400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[300] overflow-hidden">
      {/* TOP half — navy panel with grain */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-brand-blue-deep overflow-hidden"
        animate={exiting ? { y: "-101%" } : { y: 0 }}
        transition={{ duration: 1.1, ease: EXIT_EASE }}
      >
        <Grain />
      </motion.div>

      {/* BOTTOM half — navy panel with grain */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-brand-blue-deep overflow-hidden"
        animate={exiting ? { y: "101%" } : { y: 0 }}
        transition={{ duration: 1.1, delay: 0.09, ease: EXIT_EASE }}
      >
        <Grain />
      </motion.div>

      {/* CONTENT — above the panels */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        animate={exiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Phase 1: Comunidad */}
        <div className="absolute overflow-hidden">
          <motion.p
            className="font-display uppercase text-brand-cream text-center select-none"
            style={{
              fontSize: "clamp(2.8rem, 11vw, 8.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
            }}
            initial={{ y: "110%" }}
            animate={{ y: phase === 1 ? "0%" : "110%" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            Comunidad
          </motion.p>
        </div>

        {/* Phase 2: Madrid */}
        <div className="absolute overflow-hidden">
          <motion.p
            className="font-sans font-medium uppercase text-brand-yellow tracking-[0.38em] text-center select-none"
            style={{ fontSize: "clamp(0.6rem, 1.6vw, 0.9rem)" }}
            initial={{ y: "110%" }}
            animate={{ y: phase === 2 ? "0%" : "110%" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            Madrid · 2026
          </motion.p>
        </div>

        {/* Phase 3: SOY + ELLA — enter from sides */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
          <motion.p
            className="font-display uppercase text-brand-cream text-center select-none"
            style={{
              fontSize: "clamp(4.5rem, 18vw, 13rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
            }}
            initial={{ x: "-120%" }}
            animate={{ x: phase >= 3 ? "0%" : "-120%" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Soy
          </motion.p>
          <motion.p
            className="font-display uppercase text-brand-yellow text-center select-none"
            style={{
              fontSize: "clamp(4.5rem, 18vw, 13rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
            }}
            initial={{ x: "120%" }}
            animate={{ x: phase >= 3 ? "0%" : "120%" }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
          >
            Ella
          </motion.p>

          {/* Golden rule — draws left to right */}
          <motion.div
            className="mt-5 h-px bg-brand-yellow origin-left"
            style={{ width: "2.5rem" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 3 ? 1 : 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: EASE }}
          />
        </div>
      </motion.div>
    </div>
  )
}
