import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-white/8 text-white py-12 flex flex-col items-center gap-6">

      {/* Logo */}
      <div className="relative w-52 h-16">
        <Image src="/LogoDenteq.jpeg" alt="Denteq — Reparación de piezas de mano dentales" fill className="object-contain" />
      </div>

      {/* Contact & Social Links */}
      <div className="flex flex-col items-center gap-3 text-sm font-semibold text-gray-300 text-center">
        <p>Azuay y Av. Universitaria</p>
        <p>Loja</p>
        
        {/* Phone / WhatsApp */}
        <a
          href="https://wa.me/593996120385"
          className="flex items-center gap-2 hover:text-[var(--color-accent-cyan)] transition-colors duration-200 mt-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          +593 996120385
        </a>

        {/* Email CTA */}
        <a
          href="mailto:denteq.ec@gmail.com"
          className="flex items-center gap-2 hover:text-[var(--color-accent-cyan)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-cyan)] rounded"
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
          className="flex items-center gap-2 hover:text-[#1877F2] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-cyan)] rounded mt-1"
          aria-label="Síguenos en Facebook"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
          <span>Síguenos en Facebook</span>
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
