export default function BenefitsSection() {
  const benefits = [
    {
      num: "01",
      keyTitle: "Courier Puerta a Puerta",
      keyDesc: "Servicio puerta a puerta a nivel nacional (Ecuador) — comodidad total sin interrumpir su trabajo.",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
      accent: "cyan",
    },
    {
      num: "02",
      keyTitle: "Solución Rápida",
      keyDesc: "Diagnóstico y reparación inmediata. Tu clínica vuelve al 100% sin demoras.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      accent: "yellow",
    },
    {
      num: "03",
      keyTitle: "Todas las Marcas",
      keyDesc: "Repuestos para todo tipo y marca en un solo lugar — sin buscar en distintos proveedores.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      accent: "green",
    },
    {
      num: "04",
      keyTitle: "Garantía Total",
      keyDesc: "Garantía en repuestos y reparaciones. Técnicos certificados. Cero riesgo.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      accent: "cyan",
    },
  ];

  const colors: Record<string, { text: string; bg: string; hoverBg: string; num: string }> = {
    cyan:   { text: "text-[var(--color-accent-cyan)]",   bg: "bg-[var(--color-accent-cyan)]/10",   hoverBg: "group-hover:bg-[var(--color-accent-cyan)]",   num: "text-[var(--color-accent-cyan)]"   },
    yellow: { text: "text-[var(--color-accent-yellow)]", bg: "bg-[var(--color-accent-yellow)]/10", hoverBg: "group-hover:bg-[var(--color-accent-yellow)]", num: "text-[var(--color-accent-yellow)]" },
    green:  { text: "text-[var(--color-accent-green)]",  bg: "bg-[var(--color-accent-green)]/10",  hoverBg: "group-hover:bg-[var(--color-accent-green)]",  num: "text-[var(--color-accent-green)]"  },
  };

  return (
    <section
      className="w-full bg-[var(--color-primary-dark)] px-4 py-16 flex flex-col items-center relative overflow-hidden"
      aria-label="Beneficios de Denteq"
    >
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--color-accent-cyan)_1px,_transparent_1px)] [background-size:28px_28px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-30" aria-hidden="true" />

      <div className="max-w-2xl w-full relative z-10">
        <div className="text-center mb-10">
          <p className="text-[var(--color-accent-cyan)] font-extrabold uppercase tracking-[0.2em] text-xs mb-3">
            Con nosotros
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white uppercase tracking-tight">
            Con la nueva forma…{" "}
            <span className="text-highlight">todo cambia:</span>
          </h2>
        </div>

        {/* 2 columnas en mobile */}
        <div className="grid grid-cols-2 gap-4">
          {benefits.map((b) => {
            const c = colors[b.accent];
            return (
              <div
                key={b.num}
                className="glass-card flex flex-col p-5 rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,207,222,0.18)] group cursor-default relative overflow-hidden"
              >
                {/* Número de orden — decorativo */}
                <span className={`absolute top-3 right-4 text-4xl font-black opacity-[0.25] ${c.num} select-none`} aria-hidden="true">
                  {b.num}
                </span>

                {/* Ícono */}
                <div className={`${c.bg} ${c.text} ${c.hoverBg} group-hover:text-[#050D1F] p-3.5 rounded-xl mb-4 w-fit transition-all duration-300 group-hover:scale-110`} aria-hidden="true">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>

                <h3 className="text-base font-extrabold font-serif text-white mb-2 uppercase leading-snug">
                  {b.keyTitle}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{b.keyDesc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
