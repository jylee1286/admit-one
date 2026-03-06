import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import ScorePreview from "@/components/ScorePreview";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Marquee />
      <Stats />
      <HowItWorks />
      <ScorePreview />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
