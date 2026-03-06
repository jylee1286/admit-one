import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyItWorks from "@/components/WhyItWorks";
import Schools from "@/components/Schools";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <HowItWorks />
      <WhyItWorks />
      <Schools />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
