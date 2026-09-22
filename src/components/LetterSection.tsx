export default function LetterSection() {
  return (
    <section className="w-full bg-[var(--color-accent-green)] px-4 py-16 flex flex-col items-center text-[#091124]">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12">
          ESTA ES LA DIFERENCIA:
        </h2>

        <div className="text-lg md:text-xl text-left space-y-6 font-medium">
          <p>A la antigua...</p>
          <p>Clientes me cuentan que han intentado cambiar repuestos o reparar sus equipos, pero los problemas persisten:</p>
          <p>Y seguro usted ya ha experimentado esto:</p>
          <ul className="space-y-4 pl-4">
            <li>* Perdió tiempo buscando la solución o servicio técnico.</li>
            <li>* Intento reparar y no quedaron bien o no funciona.</li>
            <li>* No encontró solución.</li>
          </ul>
          
          <p className="font-bold pt-4 uppercase">
            ESTO SIGNIFICA QUE SE TRADUCE EN- <span className="underline decoration-2 underline-offset-4">PERDIDA DE TIEMPO Y DINERO.</span>
          </p>

          <p className="font-bold pt-6 text-xl">Con la nueva forma... todo cambia:</p>
          <ul className="space-y-4">
            <li>Servicio curier puerta a puerta.</li>
            <li>Repuestos todas las marcas o modelos.</li>
            <li>Técnicos calificados que dejarán tu equipo como nuevo y garantizado en un menor tiempo.</li>
          </ul>

          <p className="font-bold text-xl pt-4">Con nosotros logras:</p>
          <ul className="space-y-4 pl-4">
            <li>* Ahorrar dinero al adquirir tus repuestos al por mayor con el 90% de descuento.</li>
            <li>* Ahorro de tiempo porque te cotizamos y buscamos los repuestos que requieras por ti.</li>
            <li>* Servicio curier puerta a puerta con seguro, no tienes que moverte de tu consultorio.</li>
            <li>* Servicio técnico garantizado y especializado.</li>
            <li>* Seguimiento desde que recibimos tu equipo hasta que llega a tus manos como nuevo.</li>
            <li>* Equipo listo para usarse.</li>
          </ul>

          <p className="font-bold text-2xl uppercase pt-8">La solución es DENTEQ</p>
          <p>Especialistas en importación de repuestos y reparación técnica de piezas de mano dentales.</p>

          <p className="font-bold text-2xl uppercase text-center pt-8 tracking-widest">
            
          </p>

          <div className="bg-[#091124] text-white p-8 mt-12 text-center rounded-lg space-y-6">
            <h3 className="text-xl md:text-2xl font-bold uppercase leading-relaxed text-[#fdf354]">SI ESTÁ LIDIANDO CON LA FALLA DE SU PIEZA DE MANO O CUALQUIER OTRA PIEZA, NO ESPERE MÁS.</h3>
            <p className="text-lg">Tenerla dañada en la clínica le cuesta a usted la reputación de su clínica.</p>
            <p className="text-lg">Reserve una breve llamada por Zoom o Google meet o si lo prefiere envíenos un whatsapp <strong>haciendo clic abajo.</strong></p>
            <p className="text-lg font-bold">Le mostraré exactamente lo que está mal en su equipo.</p>
            <p className="text-xl font-bold uppercase text-[#fdf354]">Hablamos pronto!</p>
            
            <div className="pt-6">
              <a href="#booking" className="bg-[#fdf354] text-[#091124] border-2 border-[#fdf354] px-8 py-4 uppercase tracking-wider font-bold hover:bg-transparent hover:text-[#fdf354] transition-all duration-300 inline-block cursor-pointer">
                AGENDAR LLAMADA
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
