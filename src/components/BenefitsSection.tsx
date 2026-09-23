export default function BenefitsSection() {
  const benefits = [
    {
      keyTitle: 'Courier Asegurado',
      keyDesc: 'Vamos hasta tu clínica en todo Ecuador. Tú no mueves ni un dedo.',
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      color: 'cyan',
    },
    {
      keyTitle: 'Reparación Rápida',
      keyDesc: 'Diagnóstico inmediato. Tu consultorio vuelve a funcionar al 100%.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'yellow',
    },
    {
      keyTitle: 'Ahorro de hasta 90%',
      keyDesc: 'Repuestos originales para todas las marcas. Un solo proveedor.',
      icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
      color: 'green',
    },
    {
      keyTitle: 'Garantía Total',
      keyDesc: 'Cero riesgo. Si no lo reparamos, te la devolvemos sin costo.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'cyan',
    }
  ];

  const colorMap: Record<string, string> = {
    cyan:   'text-[var(--color-accent-cyan)]   group-hover:bg-[var(--color-accent-cyan)]',
    yellow: 'text-[var(--color-accent-yellow)] group-hover:bg-[var(--color-accent-yellow)]',
    green:  'text-[var(--color-accent-green)]  group-hover:bg-[var(--color-accent-green)]',
  };

  return (
    <section className="w-full bg-[var(--color-primary-dark)] px-4 py-24 flex flex-col items-center relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,_var(--color-accent-cyan)_1px,_transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-40" />

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent-cyan)] font-bold uppercase tracking-[0.2em] text-sm mb-3">POR QUÉ ELEGIRNOS</p>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white uppercase tracking-tight">
            Con Denteq, <span className="text-highlight">todo cambia:
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,207,222,0.15)] group cursor-default"
            >
              <div className={`bg-white/8 ${colorMap[benefit.color].split(' ')[0]} p-5 rounded-2xl mb-6 shadow-inner group-hover:scale-110 group-hover:text-[#050D1F] transition-all duration-400 ${colorMap[benefit.color].split(' ')[1]}`}>
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold font-serif text-white mb-3 uppercase tracking-wide leading-snug">{benefit.keyTitle}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">{benefit.keyDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
