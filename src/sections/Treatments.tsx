import { useEffect, useRef } from 'react';
import { Brain, Activity, Moon, Frown, Zap, HeartPulse, ChevronRight } from 'lucide-react';

const treatments = [
  {
    id: 'enxaqueca',
    title: 'Enxaqueca',
    subtitle: 'Cefaleia e Dor de Cabeça',
    description: 'Tratamento especializado para dores de cabeça recorrentes, incluindo enxaqueca com e sem aura, cefaleia tensional e outras formas de cefaleia primária.',
    symptoms: ['Dor pulsática intensa', 'Sensibilidade à luz e som', 'Náuseas e vômitos', 'Aura visual'],
    whenToSee: 'Procure um neurologista se as dores forem frequentes, intensas ou interferirem nas atividades diárias.',
    image: '/images/enxaqueca.jpg',
    icon: Frown,
  },
  {
    id: 'epilepsia',
    title: 'Epilepsia',
    subtitle: 'Distúrbios Convulsivos',
    description: 'Diagnóstico e tratamento completo para crises epilépticas, incluindo avaliação com eletroencefalograma (EEG) e acompanhamento especializado.',
    symptoms: ['Crises convulsivas', 'Perda de consciência', 'Movimentos involuntários', 'Confusão pós-crise'],
    whenToSee: 'É fundamental buscar ajuda após a primeira crise convulsiva ou se houver mudanças no padrão das crises.',
    image: '/images/Epilepsia.jpg',
    icon: Zap,
  },
  {
    id: 'parkinson',
    title: 'Doença de Parkinson',
    subtitle: 'Distúrbios do Movimento',
    description: 'Acompanhamento especializado para pacientes com Parkinson e outros distúrbios do movimento, com foco em qualidade de vida e controle dos sintomas.',
    symptoms: ['Tremor em repouso', 'Lentidão dos movimentos', 'Rigidez muscular', 'Instabilidade postural'],
    whenToSee: 'Consulte se notar tremores, lentidão ou dificuldade para realizar movimentos cotidianos.',
    image: '/images/parkinson.jpg',
    icon: Activity,
  },
  {
    id: 'alzheimer',
    title: 'Alzheimer e Demências',
    subtitle: 'Distúrbios Cognitivos',
    description: 'Avaliação e tratamento de perda de memória e outras funções cognitivas, incluindo Alzheimer e outras formas de demência.',
    symptoms: ['Perda de memória recente', 'Dificuldade de concentração', 'Mudanças de comportamento', 'Desorientação'],
    whenToSee: 'Procure ajuda se notar esquecimentos frequentes que afetam a vida diária.',
    image: '/images/demências.jpg',
    icon: Brain,
  },
  {
    id: 'sono',
    title: 'Distúrbios do Sono',
    subtitle: 'Insônia e Apneia',
    description: 'Tratamento para problemas de sono como insônia, apneia do sono, síndrome das pernas inquietas e outros distúrbios que afetam a qualidade do descanso.',
    symptoms: ['Dificuldade para dormir', 'Ronco excessivo', 'Sonolência diurna', 'Movimentos durante o sono'],
    whenToSee: 'Consulte se tem dificuldade para dormir, acorda cansado ou ronca excessivamente.',
    image: '/images/doenças neuromusculares.jpg',
    icon: Moon,
  },
  {
    id: 'avc',
    title: 'AVC e Prevenção',
    subtitle: 'Acidente Vascular Cerebral',
    description: 'Prevenção, diagnóstico e reabilitação pós-AVC. Avaliação de fatores de risco e orientação para prevenção de novos eventos.',
    symptoms: ['Fraqueza súbita', 'Dificuldade para falar', 'Perda de visão', 'Tontura intensa'],
    whenToSee: 'Em caso de suspeita de AVC, procure emergência imediatamente. Para prevenção, agende avaliação.',
    image: '/images/acidente vascular.jpg',
    icon: HeartPulse,
  },
];

export function Treatments() {
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
      id="tratamentos"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#0bb79d]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 rounded-full bg-[#0bb79d]/10 text-[#0bb79d] text-sm font-medium mb-4">
            Tratamentos
          </span>
          <h2 className="reveal opacity-0 delay-100 section-title">
            Especialidades Neurológicas
          </h2>
          <p className="reveal opacity-0 delay-200 section-subtitle">
            Ofereço tratamento especializado para diversas condições neurológicas, 
            utilizando as mais modernas técnicas e abordagens terapêuticas.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.id}
              className="reveal opacity-0 treatment-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f3b4d]/60 to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <treatment.icon className="w-6 h-6 text-[#0bb79d]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-[#0bb79d] font-medium uppercase tracking-wider mb-1">
                  {treatment.subtitle}
                </p>
                <h3 className="text-xl font-bold text-[#1f3b4d] mb-3">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {treatment.description}
                </p>

                {/* Symptoms */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#1f3b4d] mb-2">Principais sintomas:</p>
                  <div className="flex flex-wrap gap-2">
                    {treatment.symptoms.slice(0, 3).map((symptom, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#f7f9fb] text-gray-600 text-xs rounded-full"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* When to see */}
                <div className="p-3 bg-[#0bb79d]/5 rounded-lg mb-4">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-[#0bb79d]">Quando procurar: </span>
                    {treatment.whenToSee}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/5531996895217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#0bb79d] hover:text-[#099e89] transition-colors group/link"
                >
                  Agendar consulta
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal opacity-0 delay-500 mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Não encontrou o que procurava? Entre em contato para saber mais sobre outros tratamentos.
          </p>
          <a
            href="https://wa.me/5531996895217"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com o Médico
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
