"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch header state after scrolling past the hero headline
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[var(--color-primary-dark)]/95 backdrop-blur-md border-b border-[var(--color-accent-cyan)]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2" 
          : "bg-gradient-to-b from-[var(--color-primary-dark)] to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Section - Always visible */}
        <div className="flex items-center gap-4 text-white">
          <div className={`relative transition-all duration-500 ${isScrolled ? "w-32 md:w-40 h-10" : "w-40 md:w-56 h-12 md:h-16"}`}>
            <Image src="/LogoDenteq.jpeg" alt="Denteq Logo" fill className="object-contain object-left" priority />
          </div>
        </div>
        
        {/* Booking CTA - Appears only when scrolled */}
        <div className={`flex items-center transition-all duration-500 ${isScrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}>
          <a 
            href="#booking"
            className="btn-primary !px-4 md:!px-5 !py-2 md:!py-2.5 text-xs md:text-sm shadow-none hover:shadow-[0_0_15px_rgba(247,233,58,0.4)] whitespace-nowrap flex items-center gap-1"
          >
            🚚 <span className="hidden sm:inline">ENVIAR PIEZAS</span><span className="sm:hidden">ENVIAR</span>
          </a>
        </div>
      </div>
    </header>
  );
}
