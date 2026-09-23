import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-[var(--color-primary-dark)] px-4 py-24 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-40" />
      {/* Subtle background shape */}
      <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-[var(--color-light-bg)] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-start relative z-10">

        {/* Photo Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center shrink-0">
          <div className="w-56 h-56 md:w-64 md:h-64 relative rounded-full shadow-[0_25px_60px_rgba(10,15,36,0.18)] border-[8px] border-[var(--color-mid-bg)] overflow-hidden mb-6 hover:scale-105 transition-transform duration-500">
            <Image
              src="/TioKevin.jpeg"
              alt="Kevin Easter"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-extrabold text-2xl font-serif text-[var(--color-primary-dark)] text-center tracking-tight">
            KEVIN EASTER
          </h3>
          <span className="mt-2 inline-block text-[var(--color-accent-cyan)] font-extrabold uppercase tracking-widest text-xs bg-[var(--color-primary-dark)] px-4 py-1.5 rounded-full shadow-md">
            Director de Denteq
          </span>
          {/* Credenciales */}
          <div className="mt-6 space-y-2 text-center text-sm text-gray-500 font-medium">
            <p>🇬🇧 Formado en Gran Bretaña</p>
            <p>🦷 Ingeniero Dental desde 1997</p>
            <p>⚙️ Sistemas neumáticos y electrónicos</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full space-y-5 text-lg text-gray-700 leading-relaxed font-sans">
          <p className="font-extrabold text-[var(--color-primary-dark)] text-2xl md:text-3xl text-center md:text-left border-b-2 border-[var(--color-accent-cyan)] pb-4">
            Repuestos Para Todas Las Marcas — Ahorro De Tiempo Y Dinero.
          </p>

          <p className="italic font-semibold text-gray-600">Estimado Dr./Dra.:</p>
          <p>Las piezas de mano siempre dan problemas:</p>

          <ul className="space-y-2 text-gray-700 font-medium">
            {[
              "No sujetan bien las fresas.",
              "No tienen fuerza de tallado.",
              "Cabecean.",
              "Producen ruidos extraños.",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[var(--color-accent-cyan)]/15 border border-[var(--color-accent-cyan)]/40 flex items-center justify-center text-[var(--color-accent-cyan)] font-extrabold text-xs flex-shrink-0">✕</span>
                {item}
              </li>
            ))}
          </ul>

          <p>
            Clientes nos cuentan que han intentado cambiar repuestos o reparar con otros, pero los problemas persisten. Con Denteq, eso se termina.
          </p>
          <p>
            Inicié mi trayectoria en la industria dental en 1997 en Gran Bretaña, especializándome en Ingeniería Dental (Sistemas neumáticos/electrónicos). Hoy llevamos tu pieza desde tu consultorio hasta nuestro taller, y la devolvemos reparada.
          </p>

          {/* Decision box */}
          <div className="bg-[var(--color-light-bg)] border-l-4 border-[var(--color-accent-cyan)] p-6 rounded-r-2xl my-8 shadow-sm">
            <p className="text-gray-800 font-semibold mb-4">
              El diagnóstico y presupuesto son <strong>100% gratuitos y sin compromiso</strong>. Decides tú:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-bold text-lg">
              <div className="flex-1 bg-white rounded-xl p-4 text-center shadow-sm border border-green-200">
                <span className="text-green-600 text-2xl block mb-1">✅</span>
                <span className="text-[var(--color-primary-dark)]">Reparamos</span>
              </div>
              <div className="flex items-center justify-center text-gray-400 font-normal">o</div>
              <div className="flex-1 bg-white rounded-xl p-4 text-center shadow-sm border border-red-100">
                <span className="text-red-400 text-2xl block mb-1">↩️</span>
                <span className="text-gray-600">Te la devolvemos</span>
              </div>
            </div>
          </div>

          <p className="font-extrabold text-[var(--color-primary-dark)] text-xl">
            ¡Hablamos pronto! 👇
          </p>

          <div className="pt-4">
            <a href="#booking" className="btn-primary text-base">
              🚚 ENVIAR MIS PIEZAS AHORA
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
