export default function HeroSection() {

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
