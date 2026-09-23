import Image from "next/image";

const clients = [
  { name: "Odonto Center",      logo: "/LogoOdontoCenter.jpeg" },
  { name: "Goldent",            logo: "/LogoGoldent.jpeg" },
  { name: "Encalabad Odontología", logo: "/LogoEncalabad.jpeg" },
  { name: "Regeneris Dental",   logo: "/LogoRegenerisDental.jpeg" },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-white py-14 flex flex-col items-center" aria-label="Algunos de nuestros clientes">
      <div className="max-w-2xl w-full text-center px-4">

        <p className="text-xs font-extrabold text-[var(--color-primary-dark)] uppercase tracking-[0.25em] mb-8">
          Algunos De Nuestros Clientes
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {clients.map((c, i) => (
            <div
              key={i}
              className="h-24 w-44 bg-[var(--color-light-bg)] border border-[var(--color-mid-bg)] rounded-xl shadow-sm flex items-center justify-center p-3 hover:shadow-md hover:border-[var(--color-accent-cyan)]/40 transition-all duration-300"
            >
              <div className="relative w-full h-full">
                <Image
                  src={c.logo}
                  alt={`Logo de ${c.name}`}
                  fill
                  className="object-contain"
                  sizes="144px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
