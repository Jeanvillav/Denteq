export default function LetterSection() {
  return (
    <section className="w-full bg-[var(--color-primary-dark)] px-4 py-16 flex flex-col items-center" aria-label="La solución Denteq">
      <div className="max-w-2xl w-full space-y-12 text-base md:text-lg leading-relaxed">
        {/* Encabezado visual para conectar con la sección anterior */}
        <div className="text-center space-y-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[var(--color-accent-yellow)]">
            La Solución Definitiva
          </h2>
          <p className="text-gray-300">Conozca cómo transformamos el mantenimiento de su clínica:</p>
        </div>

        {/* Infografía 1 */}
        <div className="w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--color-accent-cyan)]/20 hover:scale-[1.01] transition-transform duration-500">
          <img src="/taller_1.jpeg" alt="Especialistas en turbinas dentales y servicio de courier" className="w-full h-auto object-contain" loading="lazy" />
        </div>

        {/* Infografía 2 */}
        <div className="w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--color-accent-cyan)]/20 hover:scale-[1.01] transition-transform duration-500">
          <img src="/taller_2.jpeg" alt="Garantía, seguimiento de piezas y tiempos de entrega" className="w-full h-auto object-contain" loading="lazy" />
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
            href="/#booking"
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
