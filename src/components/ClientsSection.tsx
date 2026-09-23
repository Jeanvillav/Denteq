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
    <section className="w-full bg-white py-16 flex flex-col items-center overflow-hidden" aria-label="Algunos de nuestros clientes">
      <div className="w-full text-center">

        <p className="text-xs font-extrabold text-[var(--color-primary-dark)] uppercase tracking-[0.25em] mb-10 px-4">
          Algunos De Nuestros Clientes
        </p>

        {/* Marquee container */}
        <div className="w-full relative flex overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Marquee track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {marqueeClients.map((c, i) => (
              <div
                key={i}
                className="mx-3 md:mx-5 h-28 w-52 md:h-32 md:w-60 bg-[var(--color-light-bg)] border border-[var(--color-mid-bg)] rounded-xl shadow-sm flex flex-shrink-0 items-center justify-center p-4 hover:shadow-lg hover:border-[var(--color-accent-cyan)]/50 transition-all duration-300 group"
              >
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 208px, 240px"
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
