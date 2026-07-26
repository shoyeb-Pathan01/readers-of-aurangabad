import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { JourneySection } from "@/components/home/journey-section"
import { TestimonialSection } from "@/components/home/testimonial-section"
import { FeaturedQuoteSection } from "@/components/home/featured-quote-section"
import { FeaturedBookSection } from "@/components/home/featured-book-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <JourneySection />
      <TestimonialSection />
      <FeaturedQuoteSection />
      <FeaturedBookSection />
      <CTASection />
    </>
  )
}
