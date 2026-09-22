"use client";

import { useState } from 'react';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-hero px-4 pt-32 pb-24 flex flex-col items-center text-center relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl w-full relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight tracking-tight text-white uppercase drop-shadow-2xl">
          SOLUCIONAMOS PROBLEMAS DENTALES DE FORMA RÁPIDA CUANDO: <span className="text-highlight">CABECEAN...</span>
        </h1>
        
        <p className="mt-8 text-xl md:text-2xl text-gray-300 font-sans tracking-wide leading-relaxed max-w-3xl mx-auto font-medium">
          Y LO MEJOR, SIN QUE TENGAS QUE SALIR DE TU CONSULTORIO, AHORRANDO HASTA UN <span className="text-highlight-cyan font-bold">90%</span> EN REPUESTOS.
        </p>

        <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest bg-white/5 py-3 px-8 rounded-full border border-white/10 backdrop-blur-sm w-max mx-auto shadow-lg">
          <p>SERVICIO CURIER PUERTA/PUERTA ASEGURADO</p>
          <span className="hidden md:block text-cyan-400">•</span>
          <p>SIN GASTOS INNECESARIOS</p>
        </div>

        <div className="mb-14 relative w-full max-w-4xl mx-auto pt-[56.25%] bg-black rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-10 bg-black/50 hover:bg-black/30 transition-all duration-300 backdrop-blur-[2px]"
              onClick={() => setIsPlaying(true)}
            >
              <img 
                src="https://img.youtube.com/vi/Hv8_lFwsaQs/maxresdefault.jpg" 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover -z-10 scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24]/90 via-transparent to-[#0A0F24]/50 -z-10"></div>
              
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-[var(--color-accent-yellow)] rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="relative bg-[var(--color-accent-yellow)] text-[#0A0F24] rounded-full p-6 shadow-2xl">
                  <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Hv8_lFwsaQs?autoplay=1&mute=0&rel=0"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <a 
          href="#booking"
          className="btn-primary text-lg md:text-xl px-12 py-5 shadow-[0_0_30px_rgba(253,243,84,0.3)]"
        >
          AGENDAR LLAMADA
        </a>
      </div>
    </section>
  );
}
