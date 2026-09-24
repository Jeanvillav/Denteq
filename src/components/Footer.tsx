import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary-dark)] border-t border-white/8 text-white py-12 flex flex-col items-center gap-6">

      {/* Logo */}
      <div className="relative w-52 h-16">
        <Image src="/LogoDenteq.jpeg" alt="Denteq — Reparación de piezas de mano dentales" fill className="object-contain" />
      </div>

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
