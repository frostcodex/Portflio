import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Metrics } from "@/components/landing/Metrics";
import { Services } from "@/components/landing/Services";
import { EngagementModels } from "@/components/landing/EngagementModels";
import { WhyUs } from "@/components/landing/WhyUs";
import { TechStack } from "@/components/landing/TechStack";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <EngagementModels />
      <WhyUs />
      <TechStack />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
