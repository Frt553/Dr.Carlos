import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Tratamentos', href: '#tratamentos' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Convênios', href: '#convenios' },
  { name: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'navbar-solid shadow-lg' : 'navbar-glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3"
          >
            <img 
              src="/images/logo.dr.png" 
              alt="Dr. Carlos Guilherme" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-white font-semibold text-sm leading-tight">Dr. Carlos Guilherme</p>
              <p className="text-white/70 text-xs">Neurologista</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5531996895217"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0f2b46]/98 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5531996895217"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center mt-4"
          >
            <Phone className="w-4 h-4 mr-2 inline" />
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
