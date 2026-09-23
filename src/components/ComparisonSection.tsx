export default function ComparisonSection() {
  const oldWay = [
    "Perdió tiempo buscando quién tenía el repuesto.",
    "Intentó reparar y no quedaron bien.",
    "No encontró solución y terminó comprando una nueva.",
  ];

  const newWay = [
    { bold: "Servicio puerta a puerta a nivel nacional", rest: " – comodidad total sin interrumpir su trabajo." },
    { bold: "Repuestos para todas las marcas y modelos en un solo lugar", rest: " – sin necesidad de buscar en distintos proveedores." },
    { bold: "Técnicos certificados", rest: " – confianza y calidad en cada reparación." },
    { bold: "Garantía en repuestos y reparaciones", rest: " – cero riesgo." },
    { bold: "Ahorro de tiempo y dinero", rest: " al evitar compras innecesarias o reparaciones fallidas." },
  ];

  return (
    <section className="w-full bg-[var(--color-light-bg)] px-4 py-16 flex flex-col items-center" aria-label="Esta es la diferencia">
      <div className="max-w-2xl w-full">

        <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[var(--color-primary-dark)] mb-10 text-center tracking-tight">
          Esta Es La Diferencia:
        </h2>

        {/* Stack vertical en mobile, lado a lado en md+ */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* A la antigua */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-400" role="region" aria-label="Método antiguo">
            <h3 className="text-xl font-extrabold text-gray-800 mb-1 text-center">A la antigua...</h3>
            <p className="text-center text-sm text-gray-500 mb-5 italic">Lo que ya has vivido:</p>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Clientes me cuentan que han intentado cambiar repuestos o reparar, pero los problemas persisten.
            </p>
            <p className="text-gray-700 mb-3 text-sm font-semibold">Y usted ya ha experimentado esto:</p>
            <ul className="space-y-3" role="list">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-400 font-bold text-xs flex-shrink-0" aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <p className="text-gray-800 font-bold italic text-center text-sm">
                Perdió tiempo y dinero... sin resultados.
              </p>
            </div>
          </div>

          {/* Con la nueva forma */}
          <div className="flex-1 bg-[var(--color-primary-dark)] text-white p-6 rounded-2xl shadow-xl border-t-4 border-[var(--color-accent-cyan)]" role="region" aria-label="Con Denteq">
            <h3 className="text-xl font-extrabold text-[var(--color-accent-yellow)] mb-1 text-center">Con la nueva forma...</h3>
            <p className="text-center text-sm text-gray-400 mb-5 italic">todo cambia:</p>
            <ul className="space-y-4" role="list">
              {newWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-[var(--color-accent-cyan)] font-extrabold mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                  <span>
                    <strong className="text-white">{item.bold}</strong>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-white font-bold text-center text-sm leading-relaxed">
                Simplificamos todo el proceso para que usted reciba soluciones rápidas, seguras y garantizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
