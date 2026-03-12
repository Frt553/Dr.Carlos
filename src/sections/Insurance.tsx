import { useEffect, useRef } from 'react';
import { Check, CreditCard, Shield, Info, Phone, ChevronRight } from 'lucide-react';

const insurancePlans = [
  { name: 'Unimed BH', type: 'Convênio', highlight: true },
  { name: 'Unimed Nacional', type: 'Convênio', highlight: true },
  { name: 'Bradesco Saúde', type: 'Convênio', highlight: false },
  { name: 'Amil', type: 'Convênio', highlight: false },
  { name: 'SulAmérica', type: 'Convênio', highlight: false },
  { name: 'Porto Seguro', type: 'Convênio', highlight: false },
  { name: 'NotreDame Intermédica', type: 'Convênio', highlight: false },
  { name: 'Golden Cross', type: 'Convênio', highlight: false },
];

const paymentMethods = [
  { icon: CreditCard, title: 'Cartão de Crédito', description: 'Até 6x sem juros' },
  { icon: CreditCard, title: 'Cartão de Débito', description: 'À vista' },
  { icon: CreditCard, title: 'PIX', description: 'À vista com desconto' },
  { icon: CreditCard, title: 'Dinheiro', description: 'À vista com desconto' },
];

export function Insurance() {
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
      id="convenios"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0bb79d]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 rounded-full bg-[#0bb79d]/10 text-[#0bb79d] text-sm font-medium mb-4">
            Convênios e Pagamento
          </span>
          <h2 className="reveal opacity-0 delay-100 section-title">
            Formas de Atendimento
          </h2>
          <p className="reveal opacity-0 delay-200 section-subtitle">
            Trabalhamos com as principais operadoras de saúde e oferecemos 
            diversas opções de pagamento para sua conveniência.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Insurance Plans */}
          <div className="reveal opacity-0 delay-300">
            <div className="bg-gradient-to-br from-[#1f3b4d] to-[#2d5a6b] rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#0bb79d]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Convênios Atendidos</h3>
                  <p className="text-white/70 text-sm">Parceiros de saúde</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {insurancePlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-3 rounded-xl ${
                      plan.highlight
                        ? 'bg-[#0bb79d]/20 border border-[#0bb79d]/30'
                        : 'bg-white/5'
                    }`}
                  >
                    <Check className={`w-4 h-4 ${plan.highlight ? 'text-[#0bb79d]' : 'text-white/60'}`} />
                    <span className={`text-sm ${plan.highlight ? 'font-medium' : ''}`}>
                      {plan.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Unimed Highlight */}
              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#0bb79d] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Destaque Unimed</p>
                    <p className="text-white/70 text-sm">
                      Somos credenciados Unimed BH e Unimed Nacional. 
                      Consulte sua carteirinha e aproveite os benefícios do seu plano.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Private Payment */}
          <div className="reveal opacity-0 delay-400 space-y-6">
            <div className="bg-[#f7f9fb] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0bb79d]/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#0bb79d]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f3b4d]">Atendimento Particular</h3>
                  <p className="text-gray-500 text-sm">Múltiplas formas de pagamento</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <method.icon className="w-6 h-6 text-[#0bb79d] mb-2" />
                    <p className="font-medium text-[#1f3b4d] text-sm">{method.title}</p>
                    <p className="text-gray-500 text-xs">{method.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Info */}
            <div className="bg-[#0bb79d]/5 rounded-2xl p-6 border border-[#0bb79d]/10">
              <h4 className="font-semibold text-[#1f3b4d] mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#0bb79d]" />
                Como agendar sua consulta
              </h4>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0bb79d] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  Entre em contato pelo WhatsApp (31) 99689-5217
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0bb79d] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  Informe seu convênio ou preferência de pagamento
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0bb79d] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  Escolha a melhor data e horário disponível
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0bb79d] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  Receba a confirmação e orientações para a consulta
                </li>
              </ol>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5531996895217"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Agendar Consulta Agora
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
