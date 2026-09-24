import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad | Denteq",
  description: "Política de Privacidad y manejo de datos de Denteq Ecuador.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center w-full">
      <StickyHeader />
      
      <section className="w-full bg-white px-4 py-32 flex flex-col items-center">
        <div className="max-w-3xl w-full text-gray-800 space-y-6">
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-[var(--color-primary-dark)] mb-8">
            Política de Privacidad
          </h1>
          
          <p className="text-sm text-gray-500 mb-8">Última actualización: Septiembre 2026</p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">1. Información que Recopilamos</h2>
          <p>
            En Denteq, recopilamos información personal únicamente cuando usted llena voluntariamente nuestro formulario para solicitar la recolección de piezas dentales. Esta información incluye: nombre, apellidos, correo electrónico, número de teléfono y dirección de la clínica/consultorio.
          </p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">2. Uso de la Información</h2>
          <p>La información recopilada se utiliza exclusivamente para los siguientes propósitos:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Coordinar la recolección y entrega de sus piezas de mano o micromotores dentales a través de nuestro servicio de courier.</li>
            <li>Contactarle vía llamada telefónica o WhatsApp para confirmar detalles del envío y el diagnóstico.</li>
            <li>Enviarle su presupuesto sin compromiso.</li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">3. Protección y Privacidad de Datos</h2>
          <p>
            Valoramos su privacidad. <strong>Denteq no vende, alquila ni comparte su información personal con terceros</strong> con fines comerciales. Sus datos solo se comparten de forma estrictamente necesaria con el servicio de courier asignado para poder llegar a sus instalaciones.
          </p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">4. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para mantener la seguridad de su información personal. Nuestros servidores y bases de datos están protegidos y operan en entornos seguros.
          </p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">5. Cookies</h2>
          <p>
            Utilizamos cookies únicamente para garantizar el correcto funcionamiento técnico de nuestro sitio web y analizar el tráfico de forma anónima, mejorando así la experiencia del usuario. Puede aceptar o rechazar el uso de cookies en el banner inicial.
          </p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">6. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre esta Política de Privacidad o desea que eliminemos sus datos de nuestros registros, puede contactarnos en:
            <br /><br />
            <strong>Correo electrónico:</strong> denteq.ec@gmail.com
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
