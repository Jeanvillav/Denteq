import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ProblemHighlightSection from "@/components/ProblemHighlightSection";
import ClientsSection from "@/components/ClientsSection";
import LetterSection from "@/components/LetterSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center w-full">
      <StickyHeader />
      <HeroSection />
      <ProblemHighlightSection />
      <ClientsSection />
      <LetterSection />
      <BenefitsSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
