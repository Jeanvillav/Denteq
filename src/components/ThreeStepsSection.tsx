"use client";

import { motion } from "framer-motion";

export default function ThreeStepsSection() {
  const steps = [
    { num: "1", text: "¡CONTÁCTANOS! Y COORDINAMOS LA RECOLECCIÓN." },
    { num: "2", text: "DIAGNOSTICAMOS Y REPARAMOS SI ESTÁS DE ACUERDO." },
    { num: "3", text: "ENTREGAMOS TUS PIEZAS EN TU DIRECCIÓN EN PERFECTO FUNCIONAMIENTO." },
  ];

  return (
    <section
      className="w-full bg-transparent px-4 py-20 flex flex-col items-center text-center relative overflow-hidden"
      aria-label="3 Simples Pasos"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" aria-hidden="true" />
      <div className="absolute top-[-5%] left-[20%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <motion.div 
        className="max-w-2xl w-full relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-4xl md:text-5xl font-serif font-extrabold text-white uppercase tracking-tight mb-12 leading-tight"
        >
          <span className="text-highlight-cyan">3 SIMPLES PASOS:</span>
        </motion.h2>

        <div className="flex flex-col gap-4 text-left mb-10" role="list">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } } }}
              role="listitem"
              className="flex items-start gap-4 p-5 bg-white/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-400/40 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center" aria-hidden="true">
                <span className="text-highlight-cyan font-bold text-lg">{step.num}</span>
              </div>
              <p className="text-lg md:text-xl text-white font-extrabold pt-1 uppercase tracking-wide leading-snug">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }}
          className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl px-6 py-8 md:py-10" role="alert"
        >
          <p className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide leading-relaxed">
            *¡Servicio de Presupuesto incluyendo recolección <span className="text-highlight-cyan">NO TIENE COSTO!</span> ¡ENVÍANOS UN MENSAJE O LLENA EL FORMULARIO DE CONTACTO!
          </p>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <a 
            href="https://wa.me/593996120385" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-12 mb-4 flex items-center justify-center gap-3 text-3xl md:text-4xl font-extrabold text-[#25D366] hover:text-[#128C7E] transition-all duration-300 mx-auto w-fit drop-shadow-[0_0_15px_rgba(37,211,102,0.4)]"
            aria-label="Contactar por WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            0996120385
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
