import React from "react";
import Image from "next/image";

export default function AboutSection() {
  const problems = [
    "No sujetan bien las fresas.",
    "No tienen fuerza de tallado.",
    "Cabecean.",
    "Producen ruidos extraños.",
  ];

  return (
    <section
      className="w-full bg-white text-[var(--color-primary-dark)] px-4 py-20 relative overflow-hidden"
      aria-label="Sobre Kevin Easter y Denteq"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-40" aria-hidden="true" />
      <div className="absolute right-0 top-0 w-[35%] h-full bg-gradient-to-l from-[var(--color-light-bg)] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-2xl mx-auto flex flex-col gap-10 relative z-10">

        {/* === Foto + nombre === */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[var(--color-accent-cyan)]/30 shadow-[0_0_40px_rgba(0,207,222,0.2)] hover:scale-105 transition-transform duration-500">
              <Image
                src="/TioKevin.jpeg"
                alt="Kevin Easter, Director de Denteq, ingeniero dental desde 1997"
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Badge de experiencia */}
            <div className="absolute -bottom-2 -right-2 bg-[var(--color-accent-cyan)] text-[var(--color-primary-dark)] text-xs font-extrabold rounded-full px-3 py-1.5 shadow-lg whitespace-nowrap">
              Desde 1997
            </div>
          </div>

          <h2 className="font-extrabold text-2xl font-serif text-[var(--color-primary-dark)] tracking-tight">
            KEVIN EASTER
          </h2>
          <span className="mt-2 inline-block text-[var(--color-accent-cyan)] font-extrabold uppercase tracking-widest text-xs bg-[var(--color-primary-dark)] px-4 py-1.5 rounded-full shadow-md">
            Director de Denteq
          </span>

          {/* Especialidades */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold text-[var(--color-primary-dark)]">
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full border border-[var(--color-mid-bg)]">🇬🇧 Formado en Gran Bretaña</span>
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full border border-[var(--color-mid-bg)]">⚙️ Ingeniería Dental</span>
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full border border-[var(--color-mid-bg)]">🦷 Sistemas Neumáticos / Electrónicos</span>
          </div>
        </div>

        {/* === Carta al doctor === */}
        <div className="space-y-5 text-base text-gray-700 leading-relaxed">

          <h3 className="font-extrabold text-xl md:text-2xl text-[var(--color-primary-dark)] border-b-2 border-[var(--color-accent-cyan)] pb-3 text-center">
            Repuestos Para Todas Las Marcas Y Modelos En Un Solo Lugar,{" "}
            <span className="text-[var(--color-primary-dark)]">Ahorro De Tiempo Y Dinero.</span>
          </h3>

          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-[var(--color-accent-cyan)]/20 mt-4 mb-6 hover:scale-[1.02] transition-transform duration-500">
            <img src="/piezas.jpeg" alt="Repuestos originales y de alta calidad" className="w-full h-auto object-cover" loading="lazy" />
          </div>

          <p className="italic font-bold text-[var(--color-primary-dark)]">Estimado Dr./Dra.:</p>

          <p className="underline underline-offset-4 font-bold text-[var(--color-primary-dark)]">
            Las piezas de mano siempre dan problemas...
          </p>

          {/* Lista de problemas */}
          <ul className="space-y-2" role="list">
            {problems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="w-5 h-5 flex-shrink-0 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-500 font-extrabold text-xs" aria-hidden="true">✕</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="italic text-[var(--color-primary-dark)] font-medium text-sm">
            Clientes me cuentan que han intentado cambiar repuestos o reparar, pero los problemas persisten.
          </p>

          <hr className="border-[var(--color-mid-bg)]" />

          <p>
            Inicié mi trayectoria en la industria dental en <strong>1997 en Gran Bretaña</strong>, especializándome en{" "}
            <strong>Ingeniería Dental (Sistemas neumáticos/electrónicos)</strong>.
          </p>
          <p className="text-sm text-[var(--color-primary-dark)] font-medium">
            Con formación especializada, años de experiencia en campo y una visión enfocada en resultados, nuestra misión es ayudar a los profesionales de la odontología a mantener su equipamiento clínico en óptimas condiciones, evitando pérdidas de tiempo y dinero, y asegurando que cada consulta funcione con la máxima eficiencia.
          </p>

        </div>
      </div>
    </section>
  );
}
