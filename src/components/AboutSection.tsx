import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-[var(--color-primary-dark)] px-4 py-20 relative overflow-hidden" aria-label="Sobre Kevin Easter y Denteq">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-40" aria-hidden="true" />
      <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-[var(--color-light-bg)] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-2xl mx-auto flex flex-col gap-10 relative z-10">

        {/* Cabecera con foto */}
        <div className="flex flex-col items-center text-center">
          <div className="w-44 h-44 relative rounded-full shadow-[0_20px_50px_rgba(10,15,36,0.15)] border-[6px] border-[var(--color-mid-bg)] overflow-hidden mb-5 hover:scale-105 transition-transform duration-500">
            <Image
              src="/TioKevin.jpeg"
              alt="Kevin Easter, Director de Denteq, ingeniero dental con más de 25 años de experiencia"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="font-extrabold text-2xl font-serif text-[var(--color-primary-dark)] tracking-tight">
            KEVIN EASTER
          </h2>
          <span className="mt-2 inline-block text-[var(--color-accent-cyan)] font-extrabold uppercase tracking-widest text-xs bg-[var(--color-primary-dark)] px-4 py-1.5 rounded-full shadow-md">
            Director de Denteq
          </span>

          {/* Credenciales en fila */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-semibold text-gray-500">
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full">🇬🇧 Formado en Gran Bretaña</span>
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full">⚙️ Ing. Dental desde 1997</span>
            <span className="bg-[var(--color-light-bg)] px-3 py-1.5 rounded-full">🦷 Sistemas neumáticos/electrónicos</span>
          </div>
        </div>

        {/* Cuerpo de texto — 100% fiel a imágenes */}
        <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed">

          <h3 className="font-extrabold text-xl md:text-2xl text-[var(--color-primary-dark)] border-b-2 border-[var(--color-accent-cyan)] pb-3 text-center">
            Repuestos Para Todas Las Marcas Y Modelos En Un Solo Lugar, Ahorro De Tiempo Y Dinero.
          </h3>

          <p className="italic font-semibold text-gray-600">Estimado Dr./Dra.:</p>

          <p><span className="underline underline-offset-4 font-semibold">Las piezas de mano siempre dan problemas...</span></p>

          <ul className="space-y-2" role="list">
            {[
              "No sujetan bien las fresas.",
              "No tienen fuerza de tallado.",
              "Cabecean.",
              "Producen ruidos extraños.",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-400 font-extrabold text-xs flex-shrink-0" aria-hidden="true">✕</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="italic text-gray-600">
            Clientes me cuentan que han intentado cambiar repuestos o reparar, pero los problemas persisten.
          </p>

          <hr className="border-[var(--color-mid-bg)]" />

          <p>
            Inicié mi trayectoria en la industria dental en <strong>1997 en Gran Bretaña</strong>, especializándome en <strong>Ingeniería Dental (Sistemas neumáticos/electrónicos)</strong>.
          </p>
          <p>
            Con formación especializada, años de experiencia en campo y una visión enfocada en resultados, nuestra misión es ayudar a los profesionales de la odontología a mantener su equipamiento clínico en óptimas condiciones, evitando pérdidas de tiempo y dinero, y asegurando que cada consulta funcione con la máxima eficiencia.
          </p>

          <p className="font-bold text-[var(--color-primary-dark)]">
            🚚 Solicita la recolección gratuita de tus piezas.
          </p>
          <p>No tienes que salir de tu consultorio. Nosotros nos encargamos de todo.</p>

          {/* Caja de decisión */}
          <div className="bg-[var(--color-light-bg)] border-l-4 border-[var(--color-accent-cyan)] p-5 rounded-r-2xl shadow-sm" role="region" aria-label="Opciones de decisión">
            <p className="text-gray-800 font-semibold mb-4">
              Esta recolección <strong>no es una venta agresiva.</strong><br />
              Solo busca darle la información que necesita para <strong>decidir con confianza:</strong>
            </p>
            <div className="flex gap-4 font-bold text-base">
              <div className="flex-1 bg-white rounded-xl p-4 text-center shadow-sm border border-green-200">
                <span className="text-green-600 text-2xl block mb-1" aria-hidden="true">✅</span>
                <span className="text-[var(--color-primary-dark)]">Sí, reparan</span>
              </div>
              <div className="flex items-center justify-center text-gray-400 font-normal text-sm">o</div>
              <div className="flex-1 bg-white rounded-xl p-4 text-center shadow-sm border border-red-100">
                <span className="text-red-400 text-2xl block mb-1" aria-hidden="true">❌</span>
                <span className="text-gray-600">No, la devuelven</span>
              </div>
            </div>
          </div>

          <p className="font-bold text-lg text-[var(--color-primary-dark)] text-center">
            Haga click en el botón de abajo...
          </p>
          <p className="font-semibold underline decoration-[var(--color-accent-cyan)] underline-offset-4 text-center">
            Llena tus datos para enviar al courier.
          </p>
          <p className="font-bold text-xl text-[var(--color-primary-dark)] text-center">
            ¡Hablamos pronto! 👇
          </p>

          <div className="pt-4 flex justify-center">
            <a href="#booking" className="btn-primary text-base w-full text-center" aria-label="Ir al formulario de envío de piezas">
              🚚 ENVIAR MIS PIEZAS AHORA
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
