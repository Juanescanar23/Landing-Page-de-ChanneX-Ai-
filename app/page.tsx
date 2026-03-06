import { CtaSection } from "@/components/cta-section";
import { DataSection } from "@/components/data-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ImplementationSection } from "@/components/implementation-section";
import { MetricsBar } from "@/components/metrics-bar";
import { Navigation } from "@/components/navigation";
import { PlatformSection } from "@/components/platform-section";
import { PricingSection } from "@/components/pricing-section";
import { ProblemSection } from "@/components/problem-section";

export default function Home() {
  return (
    <>
      <div className="ambient-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      <Navigation />
      <main className="relative z-10 overflow-x-clip">
        <HeroSection />
        <div className="line-rule" />
        <MetricsBar />
        <div className="line-rule" />
        <ProblemSection />
        <div className="line-rule" />
        <DataSection />
        <div className="line-rule" />
        <PlatformSection />
        <div className="line-rule" />
        <ImplementationSection />
        <div className="line-rule" />
        <PricingSection />
        <div className="line-rule" />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
