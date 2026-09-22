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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b border-white/10 ${
        isScrolled ? "bg-[#091124] shadow-lg" : "bg-[#091124]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4 text-white">
          <div className="relative w-48 h-14">
            <Image src="/LogoDenteq.jpeg" alt="Denteq Logo" fill className="object-contain object-left" />
          </div>
        </div>
        
        {/* Booking CTA for Header (Optional) */}
        <div className="flex items-center gap-4">
          <a href="#booking" className="hidden md:inline-block bg-[#fdf354] text-[#091124] px-4 py-2 text-sm font-bold uppercase tracking-wider rounded hover:bg-white transition-colors">
            AGENDAR LLAMADA
          </a>
        </div>
      </div>
    </div>
  );
}
