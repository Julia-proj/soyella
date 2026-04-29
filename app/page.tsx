import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { NextEventSection } from "@/components/sections/next-event-section"
import { ExpertsSection } from "@/components/sections/experts-section"
import { FeaturedOrganizerSection } from "@/components/sections/featured-organizer-section"
import { ForWhoSection } from "@/components/sections/for-who-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"
import { SiteFooter } from "@/components/site-footer"
import { MarqueeText } from "@/components/marquee-text"

export default function Page() {
  return (
    <>
      <main>
        <HeroSection />
        <MarqueeText text="Soy Ella" className="bg-brand-cream" />
        <AboutSection />
        <NextEventSection />
        <ExpertsSection />
        <FeaturedOrganizerSection />
        <MarqueeText text="Quality over quantity" className="bg-brand-sand" />
        <ForWhoSection />
        <GallerySection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <SiteNav />
      <StickyMobileCta />
    </>
  )
}
