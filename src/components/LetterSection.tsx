"use client";

import { motion } from "framer-motion";

export default function LetterSection() {
  return (
    <section className="w-full bg-[var(--color-primary-dark)] px-4 py-16 flex flex-col items-center" aria-label="La solución Denteq">
      <div className="max-w-2xl w-full space-y-12 text-base md:text-lg leading-relaxed">
        {/* Encabezado visual para conectar con la sección anterior */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-[var(--color-accent-yellow)]">
            La Solución Definitiva
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">Conozca cómo transformamos el mantenimiento de su clínica:</p>
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

        {/* Caja de cierre — CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 text-[var(--color-primary-dark)] space-y-5 shadow-2xl text-center md:text-left"
        >
          <p className="text-[var(--color-accent-yellow)] font-bold text-xl md:text-2xl" style={{color: '#B45309'}}>
            Haga click en el botón abajo...
          </p>

          <p className="font-bold underline underline-offset-4 text-xl md:text-2xl">
            Llena tus datos para enviar al courier.
          </p>

          <p className="font-extrabold text-3xl md:text-4xl">¡Hablamos pronto!</p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href="/#booking"
              className="btn-primary w-full block text-center text-xl md:text-2xl font-extrabold py-6 mt-4 shadow-xl"
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
