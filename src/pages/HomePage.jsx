import { useEffect } from "react";
import Hero from "../Components/Hero";
import ValueGrid from "../Components/ValueGrid";
import Services from "../Components/Service";
import QuoteSection from "../Components/QuoteSection";
import Testimonials from "../Components/Testimonials";
import { VALUE_PROPS, BUSINESS } from "../config";

export default function HomePage() {
  useEffect(() => {
    document.title = `${BUSINESS.name} — 24/7 Towing & Roadside Assistance in Tampa, FL`;
  }, []);

  return (
    <>
      {/* Hero → ValueGrid → ServiceCards → QuoteSection → Testimonials */}
      <Hero />
      <ValueGrid
        eyebrow="Why Choose Us"
        title="Tampa's Trusted Roadside Team"
        subtitle="Fast, fair, and available whenever you need us — here's what you can count on."
        items={VALUE_PROPS}
      />
      <Services />
      <QuoteSection />
      <Testimonials />
    </>
  );
}
