import Image from "next/image";

const clients = [
  { name: "Odonto Center",      logo: "/LogoOdontoCenter.jpeg" },
  { name: "Goldent",            logo: "/LogoGoldent.jpeg" },
  { name: "Encalabad Odontología", logo: "/LogoEncalabad.jpeg" },
  { name: "Regeneris Dental",   logo: "/LogoRegenerisDental.jpeg" },
];

export default function ClientsSection() {
  // Duplicate array for infinite marquee effect
  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <section className="w-full bg-white py-20 flex flex-col items-center overflow-hidden" aria-label="Algunos de nuestros clientes">
      <div className="w-full text-center">

        {/* Eyebrow más grande y legible */}
        <p className="text-sm md:text-base font-extrabold text-[var(--color-primary-dark)] uppercase tracking-[0.25em] mb-14 px-4">
          Clínicas Que Confían En Nosotros
        </p>

        {/* Marquee container */}
        <div className="w-full relative flex overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Marquee track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {marqueeClients.map((c, i) => (
              <div
                key={i}
                className="mx-4 md:mx-6 h-36 w-64 md:h-44 md:w-80 bg-white border border-[var(--color-mid-bg)] rounded-2xl shadow-sm flex flex-shrink-0 items-center justify-center p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-accent-cyan)]/40 transition-all duration-300 group"
              >
                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
