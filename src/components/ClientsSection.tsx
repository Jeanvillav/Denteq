"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Kavo", logo: "/marcas/KavoDentalExcellence.jpeg" },
  { name: "Star Dental", logo: "/marcas/StarDentalez.jpeg" },
  { name: "W&H", logo: "/marcas/WyH.jpeg" },
  { name: "Bien Air", logo: "/marcas/bienair.jpeg" },
  { name: "Coxo", logo: "/marcas/coxo.jpeg" },
  { name: "Dentsply Sirona", logo: "/marcas/detnsplysirona.jpeg" },
  { name: "Mikata", logo: "/marcas/mikatadental.jpeg" },
  { name: "MK-dent", logo: "/marcas/mkdent.jpeg" },
  { name: "Nouvag", logo: "/marcas/nouvag.jpeg" },
  { name: "NSK", logo: "/marcas/nsk.jpeg" },
  { name: "Saeshin", logo: "/marcas/saewshin.jpeg" },
  { name: "Tealth", logo: "/marcas/tealth.jpeg" },
  { name: "Woodpecker", logo: "/marcas/woodpecker.jpeg" },
  { name: "Zzlinker", logo: "/marcas/zzlinker.jpeg" },
];

export default function ClientsSection() {
  // Duplicate array for infinite marquee effect
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-white py-20 flex flex-col items-center overflow-hidden" aria-label="Marcas que reparamos">
      <div className="w-full text-center">

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-extrabold text-[var(--color-primary-dark)] uppercase tracking-wider md:tracking-[0.25em] mb-14 px-4 max-w-4xl mx-auto leading-relaxed"
        >
          Repuestos para todas las marcas y modelos de Piezas de Mano - Micromotores - Contrangulos - Piezas Rectas - Cavitrones - Scalers - Ultrasonidos
        </motion.p>

        {/* Marquee container */}
        <div className="w-full relative flex overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Marquee track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {marqueeBrands.map((b, i) => (
              <div
                key={i}
                className="mx-4 md:mx-6 h-36 w-64 md:h-44 md:w-80 bg-white border border-[var(--color-mid-bg)] rounded-2xl shadow-sm flex flex-shrink-0 items-center justify-center p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-accent-cyan)]/40 transition-all duration-300 group"
              >
                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Image
                    src={b.logo}
                    alt={`Logo de la marca ${b.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
