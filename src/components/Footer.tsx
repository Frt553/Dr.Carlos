import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Tratamentos', href: '#tratamentos' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Convênios', href: '#convenios' },
  { name: 'Contato', href: '#contato' },
];

const treatments = [
  'Enxaqueca',
  'Epilepsia',
  'Parkinson',
  'Alzheimer',
  'Distúrbios do Sono',
  'AVC',
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0f1e28] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="inline-block mb-6">
              <img 
                src="/images/logo.dr.png" 
                alt="Dr. Carlos Guilherme" 
                className="h-16 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Neurologista em Belo Horizonte especializado em tratamento de enxaqueca, 
              epilepsia, Parkinson, Alzheimer e distúrbios do sono.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/drcarlosguilherme"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0bb79d] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/drcarlosguilherme"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0bb79d] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/drcarlosguilherme"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0bb79d] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-[#0bb79d] transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Tratamentos</h4>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#tratamentos"
                    onClick={(e) => { e.preventDefault(); scrollToSection('#tratamentos'); }}
                    className="text-gray-400 hover:text-[#0bb79d] transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0bb79d] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Av. do Contorno, 0000 - Sala 000<br />
                  Funcionários, Belo Horizonte - MG
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0bb79d] flex-shrink-0" />
                <a 
                  href="tel:+5531996895217" 
                  className="text-gray-400 hover:text-[#0bb79d] transition-colors text-sm"
                >
                  (31) 99689-5217
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0bb79d] flex-shrink-0" />
                <a 
                  href="mailto:contato@drcarlosguilherme.com.br"
                  className="text-gray-400 hover:text-[#0bb79d] transition-colors text-sm"
                >
                  contato@drcarlosguilherme.com.br
                </a>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5531996895217"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl text-sm font-medium hover:bg-[#128C7E] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Dr. Carlos Guilherme. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-gray-500">CRM MG 47.526 | RQE 23.861</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-500">Neurologia - Belo Horizonte/MG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
