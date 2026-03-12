import { useEffect, useRef } from 'react';
import { Calendar, Phone } from 'lucide-react';

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-cta" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0bb79d]/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1f3b4d]/40 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#0bb79d] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0bb79d] animate-pulse" />
            Agendamento Online
          </span>
        </div>

        <h2 className="reveal opacity-0 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para cuidar da sua{' '}
          <span className="text-[#0bb79d]">saúde neurológica?</span>
        </h2>

        <p className="reveal opacity-0 delay-200 text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Não espere mais para buscar ajuda especializada. Agende sua consulta hoje mesmo 
          e dê o primeiro passo em direção a uma vida mais saudável.
        </p>

        <div className="reveal opacity-0 delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5531996895217"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-[#1f3b4d] bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar pelo WhatsApp
          </a>
          <a
            href="tel:+5531996895217"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Ligar Agora
          </a>
        </div>

        {/* Trust badges */}
  <div className="reveal opacity-0 delay-400 mt-12 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Atendimento Humanizado</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>CRM MG 47.526</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Unimed Credenciado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
