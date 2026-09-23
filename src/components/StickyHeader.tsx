"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the header slightly after scrolling past the very top
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[var(--color-primary-dark)]/95 backdrop-blur-md ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4 text-white">
          <div className="relative w-36 md:w-48 h-10 md:h-14">
            <Image src="/LogoDenteq.jpeg" alt="Denteq Logo" fill className="object-contain object-left" />
          </div>
        </div>
        
        {/* Booking CTA for Header */}
        <div className="flex items-center gap-4">
          <a 
            href="#booking"
            className="hidden md:inline-block btn-primary px-6 py-2.5 text-sm"
          >
            ENVIAR MIS PIEZAS
          </a>
        </div>
      </div>
    </div>
  );
}
