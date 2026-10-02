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

          <div className="mt-8 pt-8 border-t border-[var(--color-accent-cyan)]/20 space-y-4 flex flex-col items-center">
            <h4 className="font-extrabold text-2xl md:text-3xl text-[var(--color-primary-dark)]">
              ¿TIENES PREGUNTAS TÉCNICAS?
            </h4>
            <p className="text-xl md:text-2xl font-black text-[#2596be]">
              ¡YO TE AYUDO!
            </p>
            
            <p className="text-xs md:text-sm font-bold text-[var(--color-primary-dark)]/80 uppercase tracking-widest mt-6">
              Envíame un mensaje / Escríbeme al WhatsApp:
            </p>
            
            <a 
              href="https://wa.me/593996120385" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300 mt-2 mb-4"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              099 612 0385
            </a>
            
            <p className="text-xs md:text-sm font-bold text-[var(--color-primary-dark)]/80 uppercase tracking-widest mt-6 max-w-lg">
              O completa el formulario de abajo y un miembro de mi equipo te contactará.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
