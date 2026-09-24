import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones | Denteq",
  description: "Términos y Condiciones del servicio de reparación de piezas de mano dentales de Denteq Ecuador.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center w-full">
      <StickyHeader />
      
      <section className="w-full bg-white px-4 py-32 flex flex-col items-center">
        <div className="max-w-3xl w-full text-gray-800 space-y-6">
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-[var(--color-primary-dark)] mb-8">
            Términos y Condiciones
          </h1>
          
          <p className="text-sm text-gray-500 mb-8">Última actualización: Septiembre 2026</p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">1. Condiciones Generales del Servicio</h2>
          <p>
            Al solicitar la recolección de sus piezas de mano o micromotores a través del formulario de Denteq, usted acepta que Denteq gestione la visita de un servicio de courier a su clínica o consultorio para trasladar el equipo a nuestras instalaciones para su evaluación técnica.
          </p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">2. El Proceso de Presupuesto</h2>
          <p>
            Una vez recibidas las piezas, nuestro equipo de ingeniería dental, liderado por Kevin Easter, realizará un diagnóstico detallado del problema. Posterior a la revisión, le emitiremos un <strong>presupuesto sin compromiso</strong>. 
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Si el cliente <strong>acepta</strong> el presupuesto, se procederá con la reparación y se devolverá el equipo 100% funcional y garantizado.</li>
            <li>Si el cliente <strong>rechaza</strong> el presupuesto, la pieza será devuelta en el mismo estado en que fue recibida.</li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">3. Responsabilidad durante el Transporte</h2>
          <p>
            El servicio de courier operado a nivel nacional cuenta con seguro de transporte. El cliente debe asegurarse de embalar de forma apropiada y segura las piezas (en estuches, cajas o plásticos burbuja) para evitar daños físicos durante su trayecto inicial hasta nuestras instalaciones. Denteq no asume responsabilidad por daños derivados de un mal embalaje de origen.
          </p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">4. Tiempos de Entrega</h2>
          <p>
            La rapidez del diagnóstico y la reparación dependerá de la logística del courier en base a la ubicación geográfica de su clínica y de la disponibilidad inmediata de repuestos específicos de su marca y modelo. Nuestro compromiso es brindarle la solución más rápida posible (generalmente demorando 2 a 3 días hábiles).
          </p>

          <h2 className="text-xl font-bold text-[var(--color-primary-dark)] mt-8">5. Garantía de Reparación</h2>
          <p>
            Todos nuestros repuestos y servicios técnicos cuentan con garantía contra defectos de fábrica o de instalación. Esta garantía pierde su validez si la pieza es abierta, manipulada, lubricada incorrectamente, o reparada por personal ajeno a Denteq luego de ser entregada.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
