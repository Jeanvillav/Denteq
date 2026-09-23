import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ProblemHighlightSection from "@/components/ProblemHighlightSection";
import ClientsSection from "@/components/ClientsSection";
import LetterSection from "@/components/LetterSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center w-full overflow-hidden">
      <StickyHeader />
      
      <div className="w-full">
        <HeroSection />
      </div>
      
      <ScrollReveal className="w-full">
        <ProblemHighlightSection />
      </ScrollReveal>
      
      <ScrollReveal className="w-full">
        <ClientsSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <LetterSection />
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
