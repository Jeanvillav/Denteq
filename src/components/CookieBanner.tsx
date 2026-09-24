"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("denteq_cookies_accepted");
    if (!hasAccepted) {
      // Small delay to ensure it doesn't block the initial render visually abruptly
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("denteq_cookies_accepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-[var(--color-primary-dark)]/95 backdrop-blur-md border-t border-[var(--color-accent-cyan)]/20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-4 md:p-6 transition-all duration-500 ease-out animate-in slide-in-from-bottom-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-4xl text-center md:text-left">
          <p>
            Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web. 
            Si continúa utilizando este sitio asumiremos que está de acuerdo. Puede leer más en nuestra{" "}
            <Link href="/privacy" className="text-[var(--color-accent-cyan)] hover:underline font-semibold">
              Política de Privacidad
            </Link>.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={acceptCookies}
            className="btn-primary px-6 py-2.5 text-sm whitespace-nowrap shadow-none hover:shadow-[0_0_15px_rgba(247,233,58,0.4)]"
            aria-label="Aceptar cookies"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
