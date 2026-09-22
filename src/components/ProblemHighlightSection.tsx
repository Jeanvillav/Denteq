export default function ProblemHighlightSection() {
  return (
    <section className="w-full bg-[#F4F6F9] px-4 py-24 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[var(--color-primary-dark)] uppercase tracking-tight mb-6">
          CLIENTES ME CUENTAN QUE HAN INTENTADO CAMBIAR REPUESTOS O REPARAR, <span className="text-red-600">PERO LOS PROBLEMAS PERSISTEN...</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-500 font-medium mb-12">
          ¿Usted ya ha experimentado esto?
        </p>

        <div className="flex flex-col gap-6 text-left max-w-2xl mx-auto mb-16">
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold text-xl">✗</span>
            </div>
            <p className="text-lg text-gray-700 pt-1"><span className="font-bold text-gray-900">Perdido tiempo</span> buscando quién tenía el repuesto.</p>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold text-xl">✗</span>
            </div>
            <p className="text-lg text-gray-700 pt-1"><span className="font-bold text-gray-900">Intentó reparar</span> y no quedaron bien.</p>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold text-xl">✗</span>
            </div>
            <p className="text-lg text-gray-700 pt-1"><span className="font-bold text-gray-900">No encontró solución</span> y terminó comprando una nueva.</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-2xl shadow-lg inline-block w-full max-w-2xl transform transition-transform hover:-translate-y-1">
          <p className="text-2xl md:text-3xl font-extrabold text-red-700 uppercase tracking-wide">
            Perdió tiempo y dinero... <span className="text-red-500">sin resultados.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
