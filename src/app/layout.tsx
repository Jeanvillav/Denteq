import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import CookieBanner from "@/components/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Denteq | Reparación de Piezas de Mano Dentales en Ecuador",
  description: "Servicio de reparación de piezas de mano y micromotores dentales. Servicio courier puerta a puerta asegurado en todo Ecuador. Presupuesto sin compromiso.",
  keywords: ["denteq", "reparación piezas de mano", "odontología ecuador", "ingeniería dental", "mantenimiento equipos dentales", "micromotores dentales ecuador", "repuestos dentales", "kevin easter"],
  authors: [{ name: "Kevin Easter" }],
  icons: {
    icon: "/LogoDenteq.jpeg",
    apple: "/LogoDenteq.jpeg",
  },
  openGraph: {
    title: "Denteq | Expertos en Reparación Dental",
    description: "Servicio técnico especializado para piezas de mano y micromotores dentales en todo Ecuador con recolección gratuita.",
    url: "https://denteq-ec.vercel.app/",
    siteName: "Denteq",
    images: [
      {
        url: "/LogoDenteq.jpeg",
        width: 1200,
        height: 630,
        alt: "Denteq - Reparación de Piezas de Mano",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denteq | Expertos en Reparación Dental",
    description: "Servicio de reparación de piezas de mano y micromotores dentales. Courier puerta a puerta en todo Ecuador.",
    images: ["/LogoDenteq.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
