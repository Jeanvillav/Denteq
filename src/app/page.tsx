import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import RedProblemSection from "@/components/RedProblemSection";
import ClientsSection from "@/components/ClientsSection";
import ProblemHighlightSection from "@/components/ProblemHighlightSection";
import ThreeStepsSection from "@/components/ThreeStepsSection";
import LetterSection from "@/components/LetterSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col items-center w-full overflow-x-hidden">
      <StickyHeader />
      
      <div className="w-full">
        <HeroSection />
      </div>

      <ScrollReveal className="w-full">
        <RedProblemSection />
      </ScrollReveal>
      
      <ScrollReveal className="w-full">
        <ClientsSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <ProblemHighlightSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <ThreeStepsSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <LetterSection />
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
