import { useTranslations, useLocale } from 'next-intl';

export default function ComparisonSection() {
  const t = useTranslations('ComparisonSection');
  const locale = useLocale();
  
  // Choose diagram based on locale
  const diagramSrc = locale === 'es' ? '/DiagramaES.jpg' : '/DiagramaEN.jpeg';

  return (
    <section className="w-full bg-[#E5E7EB] px-4 py-16 flex flex-col items-center text-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F0762] uppercase tracking-wide mb-12">
          {t('title')}
        </h2>
        
        <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-white/40 bg-white p-2 md:p-6">
          <img 
            src={diagramSrc} 
            alt="Comparison Diagram" 
            className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
