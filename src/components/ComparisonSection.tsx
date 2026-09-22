export default function ComparisonSection() {
  return (
    <section className="w-full bg-[#E5E7EB] px-4 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary-dark)] mb-12">
          Esta Es La Diferencia:
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 text-left">
          {/* A la antigua */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl border-t-8 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">A la antigua...</h3>
            <p className="text-gray-700 mb-4 font-medium">Clientes me cuentan que han intentado cambiar repuestos o reparar, pero los problemas persisten.</p>
            <p className="text-gray-700 mb-4">Y usted ya ha experimentado esto:</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-2"><span>•</span> Perdió tiempo buscando quién tenía el repuesto</li>
              <li className="flex items-start gap-2"><span>•</span> Intentó reparar y no quedaron bien</li>
              <li className="flex items-start gap-2"><span>•</span> No encontró solución y terminó comprando una nueva</li>
            </ul>
            <p className="text-gray-800 font-bold italic text-center">Perdió tiempo y dinero... sin resultados.</p>
          </div>

          {/* Con la nueva forma */}
          <div className="flex-1 bg-[var(--color-primary-dark)] text-white p-8 rounded-2xl shadow-xl border-t-8 border-[var(--color-accent-cyan)]">
            <h3 className="text-2xl font-bold text-[var(--color-accent-yellow)] mb-6 text-center">Con la nueva forma... todo cambia:</h3>
            <ul className="space-y-4 text-gray-300 mb-6">
              <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cyan)] font-bold">•</span> <span><strong className="text-white">Servicio puerta a puerta a nivel nacional</strong> – comodidad total sin interrumpir su trabajo</span></li>
              <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cyan)] font-bold">•</span> <span><strong className="text-white">Repuestos para todas las marcas y modelos en un solo lugar</strong> – sin necesidad de buscar en distintos proveedores</span></li>
              <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cyan)] font-bold">•</span> <span><strong className="text-white">Técnicos certificados</strong> – confianza y calidad en cada reparación</span></li>
              <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cyan)] font-bold">•</span> <span><strong className="text-white">Garantía en repuestos y reparaciones</strong> – cero riesgo</span></li>
              <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cyan)] font-bold">•</span> <span><strong className="text-white">Ahorro de tiempo y dinero</strong> al evitar compras innecesarias o reparaciones fallidas</span></li>
            </ul>
            <p className="text-white font-bold text-center mt-6">Simplificamos todo el proceso para que usted reciba soluciones rápidas, seguras y garantizadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
