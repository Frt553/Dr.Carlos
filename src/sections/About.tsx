import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Stethoscope, Users, CheckCircle2, Building2 } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Formação',
    items: [
      'Graduação em Medicina - UFMG',
      'Residência em Neurologia - HC-UFMG',
      'Fellowship em Neurofisiologia Clínica'
    ]
  },
  {
    icon: Award,
    title: 'Especializações',
    items: [
      'Neurologia Geral',
      'Neurofisiologia Clínica',
      'Distúrbios do Movimento'
    ]
  },
  {
    icon: Building2,
    title: 'Atuação',
    items: [
      'Consultório particular desde 2010',
      'Hospital São Francisco',
      'Hospital Felício Rocho'
    ]
  }
];

const highlights = [
  { icon: Users, value: '10.000+', label: 'Pacientes Atendidos' },
  { icon: Stethoscope, value: '15+', label: 'Anos de Experiência' },
  { icon: Award, value: '50+', label: 'Artigos Publicados' },
  { icon: CheckCircle2, value: '100%', label: 'Compromisso' },
];

export function About() {
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
      id="sobre"
      ref={sectionRef}
      className="section-padding bg-[#f7f9fb] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0bb79d]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 rounded-full bg-[#0bb79d]/10 text-[#0bb79d] text-sm font-medium mb-4">
            Sobre o Médico
          </span>
          <h2 className="reveal opacity-0 delay-100 section-title">
            Dr. Carlos Guilherme
          </h2>
          <p className="reveal opacity-0 delay-200 section-subtitle">
            Neurologista dedicado ao cuidado integral da saúde neurológica, 
            combinando expertise técnica com atendimento humanizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="reveal opacity-0 delay-200 relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/sobre.png"
                  alt="Dr. Carlos Guilherme"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f3b4d]/30 to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#0bb79d]/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-[#0bb79d]" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#1f3b4d]">15+</p>
                    <p className="text-gray-500 text-sm">Anos de Experiência</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#0bb79d]/20 rounded-2xl" />
            </div>
          </div>

          {/* Content Column */}
          <div>
            <div className="reveal opacity-0 delay-300 mb-8">
              <h3 className="text-2xl font-bold text-[#1f3b4d] mb-4">
                Comprometido com a excelência em neurologia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Formado pela Universidade Federal de Minas Gerais (UFMG), o Dr. Carlos Guilherme 
                possui especialização em Neurologia pelo Hospital das Clínicas da UFMG e fellowship 
                em Neurofisiologia Clínica.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sua abordagem combina o conhecimento técnico atualizado com um atendimento 
                humanizado, buscando sempre entender as necessidades individuais de cada paciente 
                para oferecer o melhor tratamento possível.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="reveal opacity-0 delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <item.icon className="w-6 h-6 text-[#0bb79d] mx-auto mb-2" />
                  <p className="text-xl font-bold text-[#1f3b4d]">{item.value}</p>
                  <p className="text-xs text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Qualifications */}
            <div className="reveal opacity-0 delay-500 space-y-4">
              {qualifications.map((qual, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0bb79d]/10 flex items-center justify-center flex-shrink-0">
                      <qual.icon className="w-5 h-5 text-[#0bb79d]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1f3b4d] mb-2">{qual.title}</h4>
                      <ul className="space-y-1">
                        {qual.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[#0bb79d]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
