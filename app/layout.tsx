import type { Metadata, Viewport } from "next"
import { Montserrat, Old_Standard_TT } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { RevealController } from "@/components/reveal-controller"
import "./globals.css"

const oldStandard = Old_Standard_TT({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SOY ELLA - закрытое женское комьюнити в Мадриде",
  description:
    "SOY ELLA - премиальное комьюнити для русскоговорящих женщин в Мадриде. Нетворкинг, рост, окружение уровня. Следующая встреча: BEAUTY DAY, 30 мая.",
  generator: "v0.app",
  openGraph: {
    title: "SOY ELLA - закрытое женское комьюнити в Мадриде",
    description:
      "Премиальное комьюнити для русскоговорящих женщин в Мадриде. Следующая встреча: BEAUTY DAY, 30 мая.",
    locale: "ru_RU",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#4188e8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${oldStandard.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        <RevealController />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
