"use client";

import { useState } from 'react';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-hero px-4 pt-32 pb-24 flex flex-col items-center text-center relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10">

        {/* Status pill */}
        <div className="flex justify-center mb-8">
          <span className="status-pill">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] animate-pulse" />
            COURIER GRATUITO · ECUADOR NACIONAL · SIN SALIR DEL CONSULTORIO
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-[1.1] tracking-tight text-white uppercase drop-shadow-2xl mb-6">
          TU PIEZA DE MANO <span className="text-highlight">NO SUJETA LAS FRESAS, CABECEAN O NO TIENE FUERZA</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 text-xl md:text-2xl text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto font-medium">
          La reparamos y te la devolvemos — <span className="text-highlight-cyan font-bold">sin que salgas de tu consultorio</span>.<br/>
          Presupuesto gratuito. Ahorra hasta un <span className="text-highlight-green font-extrabold">90%</span> vs reposición.
        </p>

        {/* Trust strip */}
        <div className="my-10 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-bold text-gray-300 uppercase tracking-widest">
          {["✔ Todas las marcas y modelos", "✔ Servicio asegurado", "✔ +25 años de experiencia"].map((item, i) => (
            <span key={i} className="glass-card px-5 py-2 rounded-full border-glow">
              {item}
            </span>
          ))}
        </div>

        {/* Video embed */}
        <div className="mb-14 relative w-full max-w-4xl mx-auto pt-[56.25%] bg-black rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden group transition-transform duration-500 hover:scale-[1.01] animate-pulse-glow">
          {!isPlaying ? (
            <div
              className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-10 bg-black/40 hover:bg-black/20 transition-all duration-300"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src="https://img.youtube.com/vi/Hv8_lFwsaQs/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover -z-10 scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D1F]/90 via-transparent to-[#050D1F]/40 -z-10" />

              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-[var(--color-accent-yellow)] rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative bg-[var(--color-accent-yellow)] text-[#050D1F] rounded-full p-6 shadow-2xl">
                  <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" />
                  </svg>
                </div>
              </div>
              <p className="mt-5 text-white/80 font-semibold text-sm tracking-widest uppercase">Ver cómo funciona</p>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Hv8_lFwsaQs?autoplay=1&mute=0&rel=0"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        {/* CTA */}
        <a
          href="#booking"
          className="btn-primary text-lg md:text-xl px-12 py-5"
        >
          🚚 SOLICITAR RECOLECCIÓN GRATUITA
        </a>
        <p className="mt-4 text-gray-500 text-sm tracking-wide">Sin costo · Sin compromiso · Respondemos en menos de 24h</p>
      </div>
    </section>
  );
}
