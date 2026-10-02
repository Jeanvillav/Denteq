"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full bg-hero px-4 pt-28 pb-20 flex flex-col items-center text-center relative overflow-hidden" aria-label="Sección principal">
      {/* Orbs decorativos */}
      <div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <motion.div 
        className="max-w-2xl w-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >

        {/* Titular principal */}
        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="text-5xl md:text-6xl font-serif font-extrabold leading-[1.12] tracking-tight text-white uppercase mb-5"
        >
          SOLUCIONAMOS PROBLEMAS DE TUS{' '}
          <span className="text-highlight">PIEZAS DE MANO Y MICROMOTORES DENTALES</span>{' '}
          DE FORMA RÁPIDA CUANDO:{' '}
          <span className="text-highlight">NO SUJETAN LAS FRESAS, NO TIENEN FUERZA, CABECEAN O SUENAN RARO</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="text-xl md:text-2xl text-white font-bold leading-relaxed mb-4"
        >
          — Y LO MEJOR,{' '}
          <span className="underline underline-offset-4 decoration-[var(--color-accent-yellow)]">SIN QUE TENGAS QUE SALIR DE TU CONSULTORIO</span>,{' '}
          AHORRANDO HASTA UN{' '}
          <span className="text-highlight-cyan">90% EN REPUESTOS.</span>
        </motion.p>

        {/* Strip inferior */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } }
          }}
          className="my-7 px-6 py-3 glass-card rounded-full border-glow inline-block"
        >
          <p className="text-sm font-extrabold text-white/90 uppercase tracking-widest text-center">
            Servicio Courier Puerta a Puerta a Nivel Nacional Asegurado
          </p>
        </motion.div>

        {/* CTA principal */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
          }}
        >
          <a
            href="/#booking"
            className="btn-primary text-lg md:text-xl w-full block text-center px-8 py-5 hover:scale-105 transition-transform duration-300 font-extrabold shadow-[0_15px_30px_rgba(255,224,0,0.3)]"
            aria-label="Ir al formulario de recolección gratuita"
          >
            🚚 SOLICITAR RECOLECCIÓN GRATUITA
          </a>
          <p className="mt-3 text-white text-xs tracking-wide">Sin costo · Sin compromiso · Te llamamos en menos de 24h</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
