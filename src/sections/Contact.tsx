import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Av. do Contorno, 0000 - Sala 000',
    subContent: 'Funcionários, Belo Horizonte - MG',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '(31) 99689-5217',
    subContent: 'WhatsApp disponível',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'contato@drcarlosguilherme.com.br',
    subContent: 'Resposta em até 24h',
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    content: 'Segunda a Sexta: 8h às 18h',
    subContent: 'Sábado: 8h às 12h (sob agendamento)',
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="section-padding bg-[#f7f9fb] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0bb79d]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 rounded-full bg-[#0bb79d]/10 text-[#0bb79d] text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="reveal opacity-0 delay-100 section-title">
            Entre em Contato
          </h2>
          <p className="reveal opacity-0 delay-200 section-subtitle">
            Estou à disposição para tirar suas dúvidas e agendar sua consulta. 
            Escolha a forma de contato que preferir.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="reveal opacity-0 delay-300 lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0bb79d]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#0bb79d]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1f3b4d] mb-1">{item.title}</h4>
                    <p className="text-gray-700 text-sm">{item.content}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.subContent}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5531996895217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white rounded-xl p-5 hover:bg-[#128C7E] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-0.5">Fale pelo WhatsApp</h4>
                <p className="text-white/80 text-sm">Resposta rápida e direta</p>
              </div>
            </a>
          </div>

          {/* Contact Form & Map */}
          <div className="reveal opacity-0 delay-400 lg:col-span-3 space-y-8">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#1f3b4d] mb-6">Envie uma Mensagem</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#0bb79d]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#0bb79d]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#1f3b4d] mb-2">Mensagem Enviada!</h4>
                  <p className="text-gray-600">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(31) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Selecione...</option>
                        <option value="agendamento">Agendamento de Consulta</option>
                        <option value="duvida">Dúvida sobre Tratamento</option>
                        <option value="convenio">Informação sobre Convênio</option>
                        <option value="outro">Outro Assunto</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Descreva como podemos ajudar..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.989041368167!2d-43.9386!3d-19.9191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzA4LjgiUyA0M8KwNTYnMTkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
