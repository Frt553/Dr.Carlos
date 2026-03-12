import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Maria Helena S.',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'O Dr. Carlos é um médico excepcional. Minhas enxaquecas eram debilitantes e, após o tratamento com ele, minha qualidade de vida melhorou drasticamente. Muito atencioso e sempre disponível para tirar dúvidas.',
    date: '2 meses atrás',
  },
  {
    id: 2,
    name: 'João Paulo M.',
    location: 'Contagem, MG',
    rating: 5,
    text: 'Levei meu pai que tem Parkinson e o acompanhamento tem sido impecável. O médico explica tudo com calma e ajusta o tratamento conforme necessário. Recomendo fortemente!',
    date: '3 meses atrás',
  },
  {
    id: 3,
    name: 'Ana Carolina R.',
    location: 'Nova Lima, MG',
    rating: 5,
    text: 'Atendimento humanizado e muito profissional. Conseguiu diagnosticar um problema que outros médicos não identificaram. Sou eternamente grata pela dedicação.',
    date: '1 mês atrás',
  },
  {
    id: 4,
    name: 'Roberto F.',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Excelente neurologista! Tratou minha epilepsia com muita competência. As crises diminuíram significativamente desde que comecei o acompanhamento.',
    date: '4 meses atrás',
  },
  {
    id: 5,
    name: 'Fernanda L.',
    location: 'Betim, MG',
    rating: 5,
    text: 'Minha mãe tem Alzheimer e o Dr. Carlos tem sido fundamental no cuidado dela. Sua paciência e conhecimento nos dão muita segurança.',
    date: '2 meses atrás',
  },
  {
    id: 6,
    name: 'Carlos Eduardo T.',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Profissional extremamente capacitado. Resolveu meu problema de insônia que já durava anos. O tratamento foi eficaz e sem efeitos colaterais.',
    date: '1 mês atrás',
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="section-padding bg-[#f7f9fb] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#0bb79d]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="reveal opacity-0 inline-block px-4 py-2 rounded-full bg-[#0bb79d]/10 text-[#0bb79d] text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="reveal opacity-0 delay-100 section-title">
            O que os Pacientes Dizem
          </h2>
          <p className="reveal opacity-0 delay-200 section-subtitle">
            A satisfação dos meus pacientes é meu maior orgulho. 
            Confira algumas experiências reais de quem já passou pelo consultório.
          </p>
        </div>

        {/* Google Reviews Header */}
        <div className="reveal opacity-0 delay-300 max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/images/google.png" 
                alt="Google Reviews" 
                className="h-10 w-auto"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-[#1f3b4d]">{averageRating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.round(Number(averageRating)) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">Baseado em {reviews.length * 20}+ avaliações</p>
              </div>
            </div>
            <a
              href="https://g.page/r/XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#4285F4] text-white rounded-xl font-medium hover:bg-[#3367D6] transition-colors text-sm"
            >
              Ver no Google
            </a>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="reveal opacity-0 delay-400 relative">
          <div className="overflow-hidden" ref={sliderRef}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Group reviews in sets of 3 */}
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 grid md:grid-cols-3 gap-6">
                  {reviews.slice(groupIndex * 3, groupIndex * 3 + 3).map((review) => (
                    <div
                      key={review.id}
                      className="review-card h-full flex flex-col"
                    >
                      {/* Quote icon */}
                      <Quote className="w-8 h-8 text-[#0bb79d]/20 mb-4" />
                      
                      {/* Rating */}
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                        "{review.text}"
                      </p>

                      {/* Author */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="font-semibold text-[#1f3b4d] text-sm">{review.name}</p>
                        <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                          <MapPin className="w-3 h-3" />
                          {review.location}
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{review.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1f3b4d] hover:bg-[#0bb79d] hover:text-white transition-colors z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1f3b4d] hover:bg-[#0bb79d] hover:text-white transition-colors z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-[#0bb79d]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
