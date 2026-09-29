"use client";

import { motion } from "framer-motion";

export default function RedProblemSection() {
  const problems = [
    { bold: "Perdió tiempo", rest: " buscando quién tenía el repuesto." },
    { bold: "Intentó reparar", rest: " y no quedaron bien." },
    { bold: "No encontró solución", rest: " y terminó comprando una nueva." },
  ];

  return (
    <section
      className="w-full bg-[var(--color-primary-dark)] px-4 py-20 flex flex-col items-center text-center relative overflow-hidden"
      aria-label="Problemas comunes con piezas de mano"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" aria-hidden="true" />
      <div className="absolute top-[-5%] left-[20%] w-[40%] h-[40%] bg-red-900/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

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
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-red-400 font-extrabold uppercase tracking-[0.2em] text-xs mb-4"
        >
          ¿Ya has vivido esto?
        </motion.p>

        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-3xl md:text-4xl font-serif font-extrabold text-white uppercase tracking-tight mb-4 leading-tight"
        >
          Clientes me cuentan que han intentado cambiar repuestos o reparar,{" "}
          <span className="text-red-400">pero los problemas persisten...</span>
        </motion.h2>

        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-lg text-gray-400 font-medium mb-10"
        >
          ¿Usted ya ha experimentado esto?
        </motion.p>

        <div className="flex flex-col gap-4 text-left mb-10" role="list">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } } }}
              role="listitem"
              className="flex items-start gap-4 p-5 bg-white/5 border border-red-500/20 rounded-2xl hover:border-red-400/40 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center" aria-hidden="true">
                <span className="text-red-400 font-bold text-base">✗</span>
              </div>
              <p className="text-base text-gray-200 pt-1">
                <span className="font-extrabold text-white">{p.bold}</span>
                {p.rest}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }}
          className="bg-red-500/10 border border-red-500/30 rounded-2xl px-6 py-5" role="alert"
        >
          <p className="text-2xl md:text-3xl font-extrabold text-red-400 uppercase tracking-wide leading-tight">
            Perdió tiempo y dinero…{" "}
            <span className="text-white">sin resultados.</span>
          </p>
        </motion.div>

        <motion.div 
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 text-left shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative w-full" role="region" aria-label="La solución Denteq"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold italic text-[#2596be] mb-4">La solución:</h3>
          <p className="text-xl md:text-2xl font-bold text-black mb-6">Denteq</p>
          
          <ul className="space-y-4 text-base md:text-lg italic mb-12 md:pl-6 leading-snug" role="list">
            {[
              { bold: "Servicio puerta a puerta a nivel nacional (Ecuador)", rest: " — comodidad total sin interrumpir su trabajo." },
              { bold: "Repuestos para todas las marcas y modelos en un solo lugar", rest: " — sin necesidad de buscar en distintos proveedores." },
              { bold: "Técnicos certificados", rest: " — confianza y calidad en cada reparación." },
              { bold: "Garantía en repuestos y reparaciones", rest: " — cero riesgo." },
              { bold: "Ahorro de tiempo y dinero ", rest: "al evitar compras innecesarias o reparaciones fallidas." }
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
              className="bg-[#FFE000] text-black font-bold py-4 px-12 md:px-16 rounded-md text-lg md:text-xl shadow-[0_10px_20px_rgba(255,224,0,0.3)] transition-colors hover:bg-[#FFD000]"
              aria-label="Agenda Llamada"
            >
              Agenda Llamada
            </a>
          </motion.div>

          <div className="mt-14 flex flex-col gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 pointer-events-none" aria-hidden="true" />
              <img src="/paquete.jpeg" alt="Paquete de recolección courier de Denteq" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {['/piezas1.jpeg', '/piezas2.jpeg', '/piezas3.jpeg'].map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer relative"
                >
                  <img src={src} alt={`Detalle de repuestos y rodamientos dentales de alta precisión ${i+1}`} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
