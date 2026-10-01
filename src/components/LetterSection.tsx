"use client";

import { motion } from "framer-motion";

export default function LetterSection() {
  return (
    <section className="w-full bg-transparent px-4 py-16 flex flex-col items-center" aria-label="La solución Denteq">
      <div className="max-w-2xl w-full space-y-12 text-base md:text-lg leading-relaxed">
        {/* Botón CTA Superior */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-auto">
            <a
              href="/#booking"
              className="btn-primary w-full block text-center text-lg md:text-xl font-extrabold py-5 px-6 md:px-12 shadow-[0_15px_30px_rgba(255,224,0,0.3)] uppercase"
              aria-label="Solicitar Recolección"
            >
              🚚 SOLICITAR RECOLECCIÓN GRATUITA
            </a>
          </motion.div>
        </motion.div>

        {/* Infografía 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--color-accent-cyan)]/20 hover:scale-[1.01] transition-transform duration-500"
        >
          <img src="/taller_1.jpeg" alt="Especialistas en turbinas dentales y servicio de courier" className="w-full h-auto object-contain" loading="lazy" />
        </motion.div>

        {/* Infografía 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--color-accent-cyan)]/20 hover:scale-[1.01] transition-transform duration-500"
        >
          <img src="/taller_2.jpeg" alt="Garantía, seguimiento de piezas y tiempos de entrega" className="w-full h-auto object-contain" loading="lazy" />
        </motion.div>

        {/* Botón CTA Inferior */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-auto">
            <a
              href="/#booking"
              className="btn-primary w-full block text-center text-lg md:text-xl font-extrabold py-5 px-6 md:px-12 shadow-[0_15px_30px_rgba(255,224,0,0.3)] uppercase"
              aria-label="Ir al formulario de solicitud de recolección"
            >
              🚚 SOLICITAR RECOLECCIÓN GRATUITA
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
