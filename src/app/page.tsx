import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TaglineReveal from "@/components/TaglineReveal";
import HowItWorks from "@/components/HowItWorks";
import ProductUSPs from "@/components/ProductUSPs";
import SocialProofMetrics from "@/components/SocialProofMetrics";
import Scenarios from "@/components/Scenarios";
import Specifications from "@/components/Specifications";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="sv-refresh-site v6-home-page">
      <a className="v6-skip-link" href="#v6-main">
        Skip to content
      </a>

      {/* Floating Translucent Navigation per B7 */}
      <Navbar />

      <main id="v6-main">
        {/* Section 1: Outcome-Driven Hero with Kinetic Typography and 4K Visual */}
        <Hero />

        {/* Section 2: 9 Wellbeing Categories Continuous Running Marquee */}
        <Marquee />

        {/* Section 3: B11 Mandatory Scroll-Triggered Tagline Word-by-Word Reveal */}
        <TaglineReveal />

        {/* Section 4: 5-Step Habit Breaking Carousel with Full-Bleed Photography */}
        <HowItWorks />

        {/* Section 5: Core Benefits & Physical Boundary Bento Grid */}
        <ProductUSPs />

        {/* Section 6: Social Proof Signals & Reclaimed Attention Metrics */}
        <SocialProofMetrics />

        {/* Section 7: In-Use Lifestyle Photography */}
        <Scenarios />

        {/* Section 8: General Hardware Specifications & Interactive Blueprint */}
        <Specifications />

        {/* Section 9: Objection Handling FAQ */}
        <FAQ />

        {/* Section 10: Founder Reservation Waitlist with Risk Reversal */}
        <Waitlist id="v6-waitlist" isLaunchCta={false} />
      </main>

      {/* Official Crabster Technology Footer with Wide Typography Branding */}
      <Footer />
    </div>
  );
}
