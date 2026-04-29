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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://soyella.es"
const ogImage = "/soy-ella/og-image.jpg"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SOY ELLA - закрытое женское комьюнити в Мадриде",
  description:
    "SOY ELLA - премиальное комьюнити для русскоговорящих женщин в Мадриде. Нетворкинг, рост, окружение уровня. Следующая встреча: BEAUTY DAY, 30 мая.",
  applicationName: "SOY ELLA",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/soy-ella/icon.svg",
    apple: "/soy-ella/apple-icon.png",
  },
  openGraph: {
    title: "SOY ELLA - закрытое женское комьюнити в Мадриде",
    description:
      "Премиальное комьюнити для русскоговорящих женщин в Мадриде. Следующая встреча: BEAUTY DAY, 30 мая.",
    url: "/",
    siteName: "SOY ELLA",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SOY ELLA - Beauty Day в Мадриде",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOY ELLA - Beauty Day в Мадриде",
    description: "Премиальное женское комьюнити в Мадриде. Следующая встреча: BEAUTY DAY, 30 мая.",
    images: [ogImage],
  },
}

export const viewport: Viewport = {
  themeColor: "#1d2d3d",
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
