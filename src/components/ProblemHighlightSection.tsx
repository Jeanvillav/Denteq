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
      </div>
    </section>
  );
}
