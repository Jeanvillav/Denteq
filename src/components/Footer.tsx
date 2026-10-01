import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary-dark)] border-t border-white/8 text-white py-12 flex flex-col items-center gap-6">

      {/* Logo */}
      <div className="relative w-52 h-16">
        <Image src="/LogoDenteq.jpeg" alt="Denteq — Reparación de piezas de mano dentales" fill className="object-contain" />
      </div>

      {/* Contact & Social Links */}
      <div className="flex flex-col items-center gap-4">
        {/* Email CTA */}
        <a
          href="mailto:denteq.ec@gmail.com"
          className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[var(--color-accent-cyan)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-cyan)] rounded"
          aria-label="Enviar correo a Denteq"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          denteq.ec@gmail.com
        </a>

        {/* Facebook Link */}
        <a
          href="https://www.facebook.com/share/1CUWJj8eF1/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[#1877F2] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-cyan)] rounded"
          aria-label="Síguenos en Facebook"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
          <span className="hidden md:inline">Síguenos en Facebook</span>
        </a>
      </div>

      {/* Legal Links */}
      <div className="flex gap-4 text-xs font-medium text-gray-500">
        <Link href="/privacy" className="hover:text-[var(--color-accent-cyan)] transition-colors">
          Política de Privacidad
        </Link>
        <span>|</span>
        <Link href="/terms" className="hover:text-[var(--color-accent-cyan)] transition-colors">
          Términos y Condiciones
        </Link>
      </div>

      {/* Divider */}
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />

      {/* Copyright */}
      <Link
        href="https://denteq-ec.vercel.app/"
        className="text-gray-600 text-xs tracking-widest uppercase hover:text-gray-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-cyan)] rounded"
        aria-label="Sitio oficial de Denteq"
      >
        © 2026 Denteq — Todos los derechos reservados
      </Link>

    </footer>
  );
}
