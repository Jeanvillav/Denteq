"use client";

import { motion } from "framer-motion";

export default function ThreeStepsSection() {
  const steps = [
    { num: "1", text: "CONTACTANOS! Y COORDINAMOS LA RECOLECCION." },
    { num: "2", text: "DIAGNOSTICAMOS Y REPARAMOS SI ESTÁS DE ACUERDO." },
    { num: "3", text: "ENTREGAMOS TUS PIEZAS EN TU DIRECCIÓN EN PERFECTO FUNCIONAMIENTO." },
  ];

  return (
    <section
      className="w-full bg-[var(--color-primary-dark)] px-4 py-20 flex flex-col items-center text-center relative overflow-hidden"
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
            *Servicio de Presupuesto incluyendo recolección <span className="text-highlight-cyan">NO TIENE COSTO!</span> MENSAJEA O RELLENA EL FORMULARIO DE CONTACTO!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
