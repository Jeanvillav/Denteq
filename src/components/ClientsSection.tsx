import Image from "next/image";

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center px-4">
        <h2 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
          ALGUNOS DE NUESTROS CLIENTES
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-40 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md shadow-inner flex items-center justify-center">
              <span className="font-serif font-bold text-xl text-gray-500 tracking-wider">ODONTO CENTER</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-40 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md shadow-inner flex items-center justify-center">
              <span className="font-serif font-bold text-xl text-gray-500 tracking-wider">GOLDENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
