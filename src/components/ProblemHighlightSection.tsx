"use client";

import { motion } from "framer-motion";

export default function ProblemHighlightSection() {
  return (
    <section
      className="w-full bg-[#fdf6fc] px-4 py-16 md:py-24 flex flex-col items-center relative overflow-hidden"
      aria-label="La Diferencia y Solución"
    >
      <div className="max-w-3xl w-full relative z-10 flex flex-col items-center">
        
        {/* Imagen de la Diferencia provista por el usuario */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 mb-16"
        >
          <img 
            src="/diferencia.png" 
            alt="Diferencia entre el método antiguo y la nueva forma con Denteq" 
            className="w-full h-auto object-contain" 
            loading="lazy" 
          />
        </motion.div>

        {/* === Caja de Solución === */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 md:p-12 text-left shadow-[0_30px_60px_rgba(0,0,0,0.1)] relative w-full border border-gray-100" 
          role="region" 
          aria-label="La solución Denteq"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold italic text-[#2596be] mb-4">La solución:</h3>
          <p className="text-xl md:text-2xl font-bold text-black mb-8">Denteq</p>
          
          <ul className="space-y-4 text-base md:text-lg italic mb-12 leading-relaxed" role="list">
            {[
              { bold: "Servicio puerta a puerta a nivel nacional (Ecuador)", rest: " — comodidad total sin interrumpir su trabajo." },
              { bold: "Repuestos para todas las marcas y modelos en un solo lugar", rest: " — sin necesidad de buscar en distintos proveedores." },
              { bold: "Técnicos certificados", rest: " — confianza y calidad en cada reparación." },
              { bold: "Garantía en repuestos y reparaciones", rest: " — cero riesgo." },
              { bold: "Ahorro de tiempo y dinero", rest: " al evitar compras innecesarias o reparaciones fallidas." }
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <span className="font-bold text-[#2596be]">{item.bold}</span>
                <span className="text-gray-800 font-medium">{item.rest}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <a
              href="/#booking"
              className="bg-[#FFE000] text-black font-extrabold py-4 px-12 md:px-16 rounded-md text-lg md:text-xl shadow-[0_10px_20px_rgba(255,224,0,0.3)] transition-colors hover:bg-[#FFD000]"
              aria-label="Agenda Llamada"
            >
              Agenda Llamada
            </a>
          </motion.div>
        </motion.div>

        {/* === Galería de Neuromarketing (Paquete + Piezas) === */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:gap-8 w-full mt-16"
        >
          <div className="w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-200 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <img src="/paquete.jpeg" alt="Paquete de recolección courier de Denteq" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {['/piezas1.jpeg', '/piezas2.jpeg', '/piezas3.jpeg'].map((src, i) => (
              <div 
                key={i}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer relative"
              >
                <img src={src} alt={`Detalle de repuestos y rodamientos dentales de alta precisión ${i+1}`} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
