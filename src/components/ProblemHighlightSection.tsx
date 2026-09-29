"use client";

import { motion } from "framer-motion";

export default function ProblemHighlightSection() {
  return (
    <section
      className="w-full bg-[#fdf6fc] px-4 py-16 md:py-24 flex flex-col items-center relative overflow-hidden"
      aria-label="La Diferencia"
    >
      <motion.div 
        className="max-w-3xl w-full relative z-10 flex flex-col items-center text-center"
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
          className="text-4xl md:text-5xl font-extrabold text-[#11114b] mb-12"
        >
          Esta Es La Diferencia:
        </motion.h2>

        {/* --- A la antigua --- */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="w-full text-[#333] space-y-6 text-lg md:text-xl font-medium leading-relaxed mb-16"
        >
          <p className="font-bold text-2xl text-black">A la antigua...</p>
          <p>
            Clientes me cuentan que han intentado cambiar repuestos o reparar, pero los problemas persisten. Y usted ya ha experimentado esto:
          </p>
          <ul className="list-none space-y-2">
            <li>• Perdió tiempo buscando quién tenía el repuesto</li>
            <li>• Intentó reparar y no quedaron bien</li>
            <li>• No encontró solución y terminó comprando una nueva</li>
          </ul>
          <p className="pt-2">
            Perdió tiempo y dinero... sin resultados.
          </p>
        </motion.div>

        {/* --- Con la nueva forma --- */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="w-full text-[#333] space-y-6 text-lg md:text-xl font-medium leading-relaxed mb-16"
        >
          <p className="font-bold text-2xl text-black">Con la nueva forma... todo cambia:</p>
          <ul className="list-none space-y-4 text-left mx-auto max-w-2xl pl-4">
            <li>• <span className="font-bold">Servicio puerta a puerta a nivel nacional</span> – comodidad total sin interrumpir su trabajo</li>
            <li>• <span className="font-bold">Repuestos para todas las marcas y modelos en un solo lugar</span> – sin necesidad de buscar en distintos proveedores</li>
            <li>• <span className="font-bold">Técnicos certificados</span> – confianza y calidad en cada reparación</li>
            <li>• <span className="font-bold">Garantía en repuestos y reparaciones</span> – cero riesgo</li>
            <li>• <span className="font-bold">Ahorro de tiempo y dinero</span> al evitar compras innecesarias o reparaciones fallidas</li>
          </ul>
          <p className="pt-4 text-center">
            Simplificamos todo el proceso para que usted reciba soluciones rápidas, seguras y garantizadas.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-16"
        >
          <a
            href="/#booking"
            className="bg-[#FFE000] text-black font-extrabold py-5 px-12 md:px-16 rounded-lg text-xl md:text-2xl shadow-[0_15px_30px_rgba(255,224,0,0.4)] transition-colors hover:bg-[#FFD000] inline-block"
            aria-label="Agenda Llamada"
          >
            Agenda Llamada
          </a>
        </motion.div>

        {/* === Galería de Neuromarketing (Paquete + Piezas) === */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="flex flex-col gap-6 md:gap-8 w-full mt-4"
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

      </motion.div>
    </section>
  );
}
