export default function ClientsSection() {
  const clients = [
    "ODONTO CENTER",
    "GOLDENT",
    "ENCALABAD ODONTOLOGÍA",
    "REGENERIS DENTAL",
  ];

  return (
    <section className="w-full bg-white py-14 flex flex-col items-center" aria-label="Algunos de nuestros clientes">
      <div className="max-w-2xl w-full text-center px-4">

        <p className="text-xs font-extrabold text-[var(--color-primary-dark)] uppercase tracking-[0.25em] mb-8">
          Algunos De Nuestros Clientes
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3">
          {clients.map((name, i) => (
            <div
              key={i}
              className="h-14 px-5 bg-[var(--color-light-bg)] border border-[var(--color-mid-bg)] rounded-xl shadow-sm flex items-center justify-center hover:shadow-md hover:border-[var(--color-accent-cyan)]/40 transition-all duration-300"
            >
              <span className="font-serif font-extrabold text-sm md:text-base text-[var(--color-primary-dark)] tracking-wider">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
