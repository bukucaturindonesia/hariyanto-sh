import { About } from "@/components/about";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProcessTimeline } from "@/components/process-timeline";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProcessTimeline />
        <WhyChoose />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
