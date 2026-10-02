import React from "react";
import Image from "next/image";

export default function AboutSection() {
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

          </div>

          <h2 className="font-extrabold text-2xl font-serif text-[var(--color-primary-dark)] tracking-tight">
            KEVIN EASTER
          </h2>


          {/* Especialidades */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold text-[var(--color-primary-dark)]">
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full border border-[var(--color-mid-bg)]">🇬🇧 Formado en Gran Bretaña</span>
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full border border-[var(--color-mid-bg)]">⚙️ Ingeniería Dental</span>
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full border border-[var(--color-mid-bg)]">🦷 Sistemas Neumáticos / Electrónicos</span>
          </div>
        </div>

        {/* === Sobre su experiencia === */}
        <div className="bg-[#fdf6fc] p-6 md:p-10 rounded-3xl shadow-lg border border-[var(--color-accent-cyan)]/10 text-lg md:text-xl text-[var(--color-primary-dark)] font-medium leading-relaxed text-center space-y-6">
          <p>
            Inicié mi trayectoria en la industria dental en <strong className="text-[var(--color-accent-cyan)]">1997 en Gran Bretaña</strong>, especializándome en{" "}
            <strong className="text-[var(--color-accent-cyan)]">Ingeniería Dental (Sistemas neumáticos/electrónicos)</strong>.
          </p>
          <p>
            Con formación especializada, años de experiencia en campo y una visión enfocada en resultados, nuestra misión es ayudar a los profesionales de la odontología a mantener su equipamiento clínico en óptimas condiciones, evitando pérdidas de tiempo y dinero, y asegurando que cada consulta funcione con la máxima eficiencia.
          </p>
        </div>
      </div>
    </section>
  );
}
