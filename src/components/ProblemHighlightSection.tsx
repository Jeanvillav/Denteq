export default function ProblemHighlightSection() {
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
      {/* Glow rojo sutil arriba */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" aria-hidden="true" />
      <div className="absolute top-[-5%] left-[20%] w-[40%] h-[40%] bg-red-900/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-2xl w-full relative z-10">
        {/* Eyebrow */}
        <p className="text-red-400 font-extrabold uppercase tracking-[0.2em] text-xs mb-4">
          ¿Ya has vivido esto?
        </p>

        <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white uppercase tracking-tight mb-4 leading-tight">
          Clientes me cuentan que han intentado cambiar repuestos o reparar,{" "}
          <span className="text-red-400">pero los problemas persisten...</span>
        </h2>

        <p className="text-lg text-gray-400 font-medium mb-10">
          ¿Usted ya ha experimentado esto?
        </p>

        {/* Problem cards — fondo ligeramente más claro sobre oscuro */}
        <div className="flex flex-col gap-4 text-left mb-10" role="list">
          {problems.map((p, i) => (
            <div
              key={i}
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
            </div>
          ))}
        </div>

        {/* Resultado — banner de impacto */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl px-6 py-5" role="alert">
          <p className="text-2xl md:text-3xl font-extrabold text-red-400 uppercase tracking-wide leading-tight">
            Perdió tiempo y dinero…{" "}
            <span className="text-white">sin resultados.</span>
          </p>
        </div>

        {/* === Nueva Caja de Solución (basada en imagen) === */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 text-left shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative w-full" role="region" aria-label="La solución Denteq">
          <h3 className="text-3xl md:text-4xl font-extrabold italic text-[#2596be] mb-4">La solución:</h3>
          <p className="text-xl md:text-2xl font-bold text-black mb-6">Denteq</p>
          
          <ul className="space-y-4 text-base md:text-lg italic mb-12 md:pl-6 leading-snug" role="list">
            <li>
              <span className="font-bold text-[#2596be]">Servicio puerta a puerta a nivel nacional (Ecuador)</span>
              <span className="text-gray-800 font-medium"> — comodidad total sin interrumpir su trabajo.</span>
            </li>
            <li>
              <span className="font-bold text-[#2596be]">Repuestos para todas las marcas y modelos en un solo lugar</span>
              <span className="text-gray-800 font-medium"> — sin necesidad de buscar en distintos proveedores.</span>
            </li>
            <li>
              <span className="font-bold text-[#2596be]">Técnicos certificados</span>
              <span className="text-gray-800 font-medium"> — confianza y calidad en cada reparación.</span>
            </li>
            <li>
              <span className="font-bold text-[#2596be]">Garantía en repuestos y reparaciones</span>
              <span className="text-gray-800 font-medium"> — cero riesgo.</span>
            </li>
            <li>
              <span className="font-bold text-[#2596be]">Ahorro de tiempo y dinero </span>
              <span className="text-gray-800 font-medium">al evitar compras innecesarias o reparaciones fallidas.</span>
            </li>
          </ul>

          <div className="flex justify-center">
            <a
              href="/#booking"
              className="bg-[#FFE000] hover:bg-[#FFD000] text-black font-bold py-4 px-12 md:px-16 rounded-md text-lg md:text-xl transition-transform hover:scale-105 duration-300 shadow-md"
              aria-label="Agenda Llamada"
            >
              Agenda Llamada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
