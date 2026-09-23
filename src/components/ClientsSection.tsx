import Image from "next/image";

const clients = [
  { name: "ODONTO CENTER", logo: null },
  { name: "GOLDENT", logo: null },
  { name: "Encalabad Odontología", logo: "/encalabad.png" },
  { name: "Regeneris Dental", logo: "/regeneris.png" },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-white py-14 flex flex-col items-center" aria-label="Algunos de nuestros clientes">
      <div className="max-w-2xl w-full text-center px-4">

        {/* Título con fuerte contraste */}
        <p className="text-xs font-extrabold text-[var(--color-primary-dark)] uppercase tracking-[0.25em] mb-8">
          Algunos De Nuestros Clientes
        </p>

        {/* Logos / pills de clientes */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {clients.map((c, i) => (
            <div
              key={i}
              className="h-14 px-5 bg-[var(--color-light-bg)] border border-[var(--color-mid-bg)] rounded-xl shadow-sm flex items-center justify-center hover:shadow-md hover:border-[var(--color-accent-cyan)]/40 transition-all duration-300"
            >
              {c.logo ? (
                <div className="relative w-28 h-10">
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="font-serif font-extrabold text-base text-[var(--color-primary-dark)] tracking-wider">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
