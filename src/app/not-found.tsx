import Link from 'next/link';
import StickyHeader from '@/components/StickyHeader';
import Footer from '@/components/Footer';

export const metadata = {
  title: '404 - Página no encontrada | Denteq',
  description: 'La página que buscas no existe o ha sido movida.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center w-full">
      <StickyHeader />
      
      <section className="flex-1 w-full bg-white px-4 py-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-md w-full space-y-6">
          <div className="text-8xl font-black text-[var(--color-light-bg)] mb-4 select-none drop-shadow-sm">
            404
          </div>
          
          <h1 className="text-3xl font-serif font-extrabold text-[var(--color-primary-dark)]">
            Uy, parece que esta pieza de mano se perdió...
          </h1>
          
          <p className="text-gray-500 pb-4">
            La página que estás buscando no existe, ha cambiado de nombre o está temporalmente inaccesible.
          </p>
          
          <Link 
            href="/"
            className="btn-primary px-8 py-4 inline-flex items-center justify-center text-sm md:text-base uppercase"
          >
            Volver al inicio
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
