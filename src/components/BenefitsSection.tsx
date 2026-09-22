export default function BenefitsSection() {
  const benefits = [
    {
      keyTitle: 'CURIER ASEGURADO (ECUADOR)',
      keyDesc: 'Comodidad total y tranquilidad',
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },
    {
      keyTitle: 'REPARACIONES RÁPIDAS',
      keyDesc: 'Clínica/Consultorio siempre productivo',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      keyTitle: 'AHORRO DE TIEMPO',
      keyDesc: 'En un solo lugar sin necesidad de buscar en distintos proveedores',
      icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
    },
    {
      keyTitle: 'GARANTÍA EN REPARACIONES',
      keyDesc: 'Cero riesgo',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    }
  ];

  return (
    <section className="w-full bg-[var(--color-primary-dark)] px-4 py-24 flex flex-col items-center relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-accent-cyan)_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white uppercase tracking-tight mb-16 text-center">
          CON LA NUEVA FORMA... <span className="text-highlight-cyan block mt-2">TODO CAMBIA:</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,242,254,0.15)] group">
              <div className="bg-white/10 text-[var(--color-accent-cyan)] p-5 rounded-2xl mb-8 shadow-inner group-hover:scale-110 group-hover:bg-[var(--color-accent-cyan)] group-hover:text-[#0A0F24] transition-all duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-4 uppercase tracking-wide leading-snug">{benefit.keyTitle}</h3>
              <p className="text-gray-400 text-base font-medium">{benefit.keyDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
