export default function LetterSection() {
  const benefits = [
    { bold: "Ya no tendrá que preocuparse cuando sus piezas de mano no sujeten bien las fresas." },
    { bold: "Ya no tendrá que preocuparse cuando sus turbinas no tengan fuerza de tallado." },
    { bold: "Ya no tendrá que preocuparse por ruidos extraños en sus piezas." },
    { bold: "Ya no tendrá que preocuparse cuando sus piezas estén bloqueadas o cabeceen." },
  ];

  const conNosotros = [
    "Tendrá una solución rápida.",
    "Disfrutará de un servicio puerta a puerta (Ecuador).",
    "Encontrará repuestos para todo tipo y marca en un solo lugar.",
    "Obtendrá garantía en todos los repuestos y reparaciones.",
    "Será atendido por técnicos certificados y especializados.",
    "Ahorrará tiempo y dinero.",
  ];

  return (
    <section className="w-full bg-[var(--color-primary-dark)] px-4 py-16 flex flex-col items-center" aria-label="La solución Denteq">
      <div className="max-w-2xl w-full space-y-8 text-base md:text-lg leading-relaxed">

        {/* Bloque: La solución es que usted */}
        <div className="glass-card rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[var(--color-accent-yellow)] text-center">
            La solución es que usted:
          </h2>
          <ul className="space-y-4" role="list">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white text-sm md:text-base">
                <span className="text-[var(--color-accent-green)] font-extrabold mt-0.5 flex-shrink-0 text-lg" aria-hidden="true">✓</span>
                <span className="underline underline-offset-4 decoration-white/30">{item.bold}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Con nosotros */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-extrabold text-[var(--color-accent-yellow)] font-serif italic">Con nosotros:</h3>
          <ul className="space-y-3" role="list">
            {conNosotros.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-200 italic text-sm md:text-base">
                <span className="text-[var(--color-accent-cyan)] font-bold mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* La solución: Denteq */}
        <div className="glass-card rounded-2xl p-6 space-y-5 border border-[var(--color-accent-cyan)]/20">
          <h3 className="text-xl font-extrabold text-[var(--color-accent-yellow)] font-serif italic underline underline-offset-4">
            La solución: Denteq
          </h3>

          <div className="space-y-4 text-white text-sm md:text-base">
            <p>
              <span className="underline underline-offset-4 font-semibold">• Servicio puerta a puerta a nivel nacional (Ecuador)</span>
              {' '}– comodidad total sin interrumpir su trabajo.
            </p>
            <p>
              <span className="underline underline-offset-4 font-semibold">• Repuestos para todas las marcas y modelos en un solo lugar</span>
              {' '}– sin necesidad de buscar en distintos proveedores.
            </p>
            <p>• Técnicos certificados – confianza y calidad en cada reparación.</p>
            <p>• Garantía en repuestos y reparaciones – cero riesgo.</p>
            <p>• Ahorro de tiempo y dinero al evitar compras innecesarias o reparaciones fallidas.</p>
          </div>

          <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
            Simplificamos todo el proceso para que usted reciba soluciones rápidas, seguras y garantizadas.
          </p>
        </div>

        {/* Caja de cierre — CTA */}
        <div className="bg-white rounded-2xl p-6 text-[var(--color-primary-dark)] space-y-5 shadow-xl">

          <p className="text-base md:text-lg font-semibold leading-relaxed">
            Esta recolección <strong>no es una venta agresiva.</strong><br />
            Solo busca darle la información que necesita para <strong>decidir con confianza:</strong>
          </p>

          <div className="flex flex-col gap-3 font-bold text-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">✅</span>
              <span>Sí</span>
            </div>
            <div className="text-gray-400 font-normal text-sm pl-9">o</div>
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">❌</span>
              <span>No</span>
            </div>
          </div>

          <p className="text-[var(--color-accent-yellow)] font-bold text-base" style={{color: '#B45309'}}>
            Haga click en el botón abajo...
          </p>

          <p className="font-bold underline underline-offset-4 text-base">
            Llena tus datos para enviar al courier.
          </p>

          <p className="font-bold text-xl">¡Hablamos pronto!</p>

          <a
            href="#booking"
            className="btn-primary w-full block text-center text-base py-5 mt-2"
            aria-label="Ir al formulario de solicitud de recolección"
          >
            🚚 SOLICITAR RECOLECCIÓN GRATUITA
          </a>
        </div>

      </div>
    </section>
  );
}
