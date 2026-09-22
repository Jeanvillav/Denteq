import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-[var(--color-primary-dark)] px-4 py-24 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-30"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-start">
        
        {/* Photo Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center shrink-0">
          <div className="w-64 h-64 relative rounded-full shadow-[0_20px_50px_rgba(10,15,36,0.15)] border-[8px] border-[var(--color-light-bg)] overflow-hidden mb-6 transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/TioKevin.jpeg"
              alt="Kevin Easter"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-3xl font-serif text-[var(--color-primary-dark)] text-center tracking-tight">
            KEVIN EASTER
          </h3>
          <p className="text-[var(--color-accent-cyan)] font-extrabold uppercase tracking-widest text-sm mt-2 bg-[var(--color-primary-dark)] px-4 py-1 rounded-full shadow-md">
            Director de Denteq
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-sans">
          <p>
            Inicié mi trayectoria en la industria dental en 1997 en Gran Bretaña, especializándome en Ingeniería Dental (Sistemas neumáticos/electrónicos).
          </p>
          <p>
            Con formación especializada, años de experiencia en campo y una visión enfocada en resultados, nuestra misión es ayudar a los profesionales de la odontología a mantener su equipamiento clínico en óptimas condiciones, evitando pérdidas de tiempo y dinero, y asegurando que cada consulta funcione con la máxima eficiencia.
          </p>
          <p className="font-extrabold text-[var(--color-primary-dark)] text-2xl pt-4">
            Agenda una llamada conmigo o con alguien de mi equipo.
          </p>
          <p>
            Te explicaremos exactamente cómo este enfoque puede funcionar en tu clínica dental.
          </p>
          <div className="bg-[var(--color-light-bg)] border-l-4 border-[var(--color-accent-cyan)] p-6 rounded-r-xl my-8 shadow-sm">
            <p className="text-gray-800 italic font-medium">
              "Esta llamada no es una venta agresiva. Solo busca darte la información que necesitas para decidir con confianza."
            </p>
          </div>
          <p>
            Da click en el botón abajo... Reserva la fecha y hora que más te convenga.
          </p>
          <p className="font-bold text-2xl text-[var(--color-primary-dark)]">
            ¡Hablamos pronto!
          </p>
          
          <div className="pt-8">
            <a 
              href="#booking"
              className="btn-primary"
            >
              AGENDAR LLAMADA
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
