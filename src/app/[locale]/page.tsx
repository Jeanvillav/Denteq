import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ProblemHighlightSection from "@/components/ProblemHighlightSection";
import ClientsSection from "@/components/ClientsSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center w-full overflow-x-hidden">
      <StickyHeader />
      
      {/* Hero always visible immediately */}
      <div className="w-full">
        <HeroSection />
      </div>
      
      {/* Scroll animations for everything below the fold */}
      <ScrollReveal className="w-full">
        <ClientsSection />
      </ScrollReveal>
      
      <ScrollReveal className="w-full">
        <ProblemHighlightSection />
      </ScrollReveal>
      
      <ScrollReveal className="w-full">
        <BenefitsSection />
      </ScrollReveal>
      
      <ScrollReveal className="w-full">
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal className="w-full">
        <BookingSection />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
}
