"use client";

import { motion } from "framer-motion";

export default function ProblemHighlightSection() {
  return (
    <section
      className="w-full bg-[#fdf6fc] py-16 flex flex-col items-center relative overflow-hidden"
      aria-label="La Diferencia"
    >
      <div className="max-w-2xl w-full px-4 relative z-10 flex flex-col items-center gap-12">
        
        {/* Imagen de la Diferencia provista por el usuario */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
        >
          <img 
            src="/diferencia.png" 
            alt="Diferencia entre el método antiguo y la nueva forma con Denteq" 
            className="w-full h-auto object-contain" 
            loading="lazy" 
          />
        </motion.div>

      </div>
    </section>
  );
}
