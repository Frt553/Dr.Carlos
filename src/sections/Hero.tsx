import { useEffect, useRef } from 'react';
import { Calendar, Award, Clock, ChevronRight } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, value: '15+', label: 'Anos de Experiência' },
    { icon: Calendar, value: '10K+', label: 'Pacientes Atendidos' },
    { icon: Clock, value: '24h', label: 'Atendimento Emergencial' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0bb79d]/20 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1f3b4d]/40 blur-[80px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="reveal opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#0bb79d] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0bb79d] animate-pulse" />
                CRM MG 47.526 | RQE 23.861
              </span>
            </div>

            <h1 className="reveal opacity-0 delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Cuidando da sua{' '}
              <span className="text-[#0bb79d]">saúde</span>{' '}
              neurológica
            </h1>

            <p className="reveal opacity-0 delay-200 text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Neurologista em Belo Horizonte especializado em tratamento de enxaqueca, 
              epilepsia, Parkinson, Alzheimer e distúrbios do sono. Atendimento humanizado 
              e de excelência.
            </p>

            <div className="reveal opacity-0 delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="https://wa.me/5531996895217"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
              </a>
              <a
                href="#tratamentos"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#tratamentos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                Conhecer Tratamentos
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 delay-400 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-[#0bb79d]" />
                    <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-white/60 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="reveal opacity-0 delay-300 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0bb79d]/30 to-transparent rounded-3xl blur-3xl scale-110" />
              
              {/* Doctor Image */}
              <img
                src="/images/Dr.Carlos.png"
                alt="Dr. Carlos Guilherme - Neurologista"
                className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl"
              />

              {/* Floating badge */}
              <div className="absolute bottom-8 -left-4 lg:-left-8 z-20 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0bb79d]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#0bb79d]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1f3b4d] text-sm">Neurologista</p>
                    <p className="text-gray-500 text-xs">Membro SBN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f9fb] to-transparent" />
    </section>
  );
}
