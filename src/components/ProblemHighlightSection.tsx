"use client";

import { motion } from "framer-motion";

export default function ProblemHighlightSection() {
  return (
    <section
      className="w-full bg-[#fdf6fc] px-4 py-16 md:py-24 flex flex-col items-center relative overflow-hidden"
      aria-label="La Diferencia y Solución"
    >
      <div className="max-w-3xl w-full relative z-10 flex flex-col items-center">
        
        {/* === Sección: Esta Es La Diferencia === */}
        <motion.div 
          className="w-full flex flex-col items-center text-center mb-20"
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
            className="text-5xl md:text-6xl font-extrabold text-[#11114b] mb-12"
          >
            Esta Es La Diferencia:
          </motion.h2>

          {/* --- A la antigua --- */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="w-full text-[#333] space-y-6 text-xl md:text-2xl font-medium leading-relaxed mb-16"
          >
            <p className="font-bold text-3xl md:text-4xl text-black">A la antigua...</p>
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
            className="w-full text-[#333] space-y-6 text-xl md:text-2xl font-medium leading-relaxed"
          >
            <p className="font-bold text-3xl md:text-4xl text-black">Con la nueva forma... todo cambia:</p>
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
        </motion.div>



      </div>
    </section>
  );
}
