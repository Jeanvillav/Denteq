"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-hero px-4 pt-28 pb-20 flex flex-col items-center text-center relative overflow-hidden" aria-label="Sección principal">
      {/* Orbs decorativos */}
      <div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-2xl w-full relative z-10">

        {/* Status pill */}
        <div className="flex justify-center mb-7">
          <span className="status-pill" role="note">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] animate-pulse" aria-hidden="true" />
            Servicio Courier Puerta/Puerta · Ecuador Nacional · Asegurado
          </span>
        </div>

        {/* Titular principal — texto 100% fiel a imagen */}
        <h1 className="text-4xl md:text-5xl font-serif font-extrabold leading-[1.12] tracking-tight text-white uppercase mb-5">
          SOLUCIONAMOS PROBLEMAS DE TUS{' '}
          <span className="text-highlight">PIEZAS DE MANO Y MICROMOTORES DENTALES</span>{' '}
          DE FORMA RÁPIDA CUANDO:{' '}
          <span className="text-highlight">NO SUJETAN LAS FRESAS, NO TIENEN FUERZA, CABECEAN O SUENAN RARO</span>
        </h1>

        {/* Subtítulo — fiel a imagen */}
        <p className="text-lg md:text-xl text-white font-bold leading-relaxed mb-4">
          — Y LO MEJOR,{' '}
          <span className="underline underline-offset-4 decoration-[var(--color-accent-yellow)]">SIN QUE TENGAS QUE SALIR DE TU CONSULTORIO</span>,{' '}
          AHORRANDO HASTA UN{' '}
          <span className="text-highlight-cyan">90% EN REPUESTOS.</span>
        </p>

        {/* Strip inferior — fiel a imagen */}
        <div className="my-7 px-6 py-3 glass-card rounded-full border-glow inline-block">
          <p className="text-sm font-extrabold text-gray-300 uppercase tracking-widest text-center">
            Servicio Curier Puerta/Puerta a Nivel Nacional Asegurado
          </p>
        </div>

        {/* Video */}
        <div
          className="mb-12 relative w-full pt-[56.25%] bg-black rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden group transition-transform duration-500 hover:scale-[1.01]"
          role="region"
          aria-label="Video demostrativo"
        >
          {!isPlaying ? (
            <div
              className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-10 bg-black/40 hover:bg-black/20 transition-all duration-300"
              onClick={() => setIsPlaying(true)}
              role="button"
              aria-label="Reproducir video"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsPlaying(true)}
            >
              <Image
                src="https://img.youtube.com/vi/Hv8_lFwsaQs/maxresdefault.jpg"
                alt="Vista previa del video de Denteq"
                fill
                quality={85}
                priority
                className="absolute inset-0 w-full h-full object-cover -z-10 scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D1F]/90 via-transparent to-[#050D1F]/40 -z-10" aria-hidden="true" />
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-[var(--color-accent-yellow)] rounded-full blur-2xl opacity-50 animate-pulse" aria-hidden="true" />
                <div className="relative bg-[var(--color-accent-yellow)] text-[#050D1F] rounded-full p-5 shadow-2xl">
                  <svg className="w-9 h-9 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-white/80 font-semibold text-sm tracking-widest uppercase">Ver cómo funciona</p>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Hv8_lFwsaQs?autoplay=1&mute=0&rel=0"
              title="Denteq — Cómo funciona el servicio de reparación de piezas de mano"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        {/* CTA principal */}
        <a
          href="/#booking"
          className="btn-primary text-base md:text-lg w-full block text-center px-8 py-5"
          aria-label="Ir al formulario de recolección gratuita"
        >
          🚚 SOLICITAR RECOLECCIÓN GRATUITA
        </a>
        <p className="mt-3 text-white/60 text-xs tracking-wide">Sin costo · Sin compromiso · Te llamamos en menos de 24h</p>
      </div>
    </section>
  );
}
