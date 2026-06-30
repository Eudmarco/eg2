import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER } from '../constants';

const heroSlides = [
  {
    category: "MONTAGEM DE PAINÉIS",
    title: "SOLUÇÕES EM PAINÉIS ELÉTRICOS",
    items: [
      "QUADROS RESIDENCIAIS, COMERCIAIS E INDUSTRIAIS",
      "PAINÉIS DE COMANDO ELÉTRICO E AUTOMAÇÃO",
      "CORREÇÃO DE FATOR DE POTÊNCIA",
      "QGBT (QUADRO GERAL DE BAIXA TENSÃO)",
    ],
  },
  {
    category: "ENERGIA SOLAR",
    title: "SISTEMAS OFF-GRID COMPLETOS",
    items: [
      "PROJETO E DIMENSIONAMENTO",
      "INSTALAÇÃO DE PAINÉIS FOTOVOLTAICOS",
      "BANCO DE BATERIAS",
      "MONITORAMENTO E MANUTENÇÃO",
    ],
  },
  {
    category: "INSTALAÇÕES ELÉTRICAS",
    title: "ATENDIMENTO 24H EM TODA A REGIÃO",
    items: [
      "RESIDENCIAL E COMERCIAL",
      "ATERRAMENTO E EQUIPOTENCIALIZAÇÃO",
      "CABEAMENTO DE REDE ESTRUTURADA",
      "PROJETOS NR10 E NR35",
    ],
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = heroSlides[currentSlide];

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2069&q=80"
          alt="Eletricista profissional trabalhando em painel elétrico"
          className="w-full h-full object-cover"
          width={2069}
          height={1380}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eg-dark/90 via-eg-dark/65 to-eg-dark/30"></div>
      </div>

      {/* Carousel prev arrow */}
      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 text-white/60 hover:text-eg-gold transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Carousel next arrow */}
      <button
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 text-white/60 hover:text-eg-gold transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Main content */}
      <div className="container mx-auto px-10 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">

          {/* Left side — unchanged */}
          <div className="max-w-xl text-white flex-shrink-0">
            <div className="inline-block bg-eg-gold text-eg-dark px-3 py-1 rounded font-bold text-sm mb-4 animate-pulse">
              ⚡ ATENDIMENTO 24 HORAS
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
              Soluções Elétricas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eg-gold to-yellow-200">
                Seguras e Inteligentes
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Especialistas em instalações elétricas, energia solar e automação
              residencial em Jaguariúna e região. Segurança, tecnologia e garantia
              para sua casa ou empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=Olá, preciso de um orçamento urgente!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-eg-gold hover:bg-eg-goldhover text-eg-dark font-bold py-4 px-8 rounded-lg text-center transition-all transform hover:scale-105 shadow-glow"
              >
                Solicitar Orçamento
              </a>
              <a
                href="#servicos"
                onClick={(e) => handleScroll(e, '#servicos')}
                className="border-2 border-white hover:border-eg-gold hover:text-eg-gold text-white font-bold py-4 px-8 rounded-lg text-center transition-colors cursor-pointer"
              >
                Conhecer Serviços
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Certificação NR10
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Certificação NR35
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Garantia Estendida
              </div>
            </div>
          </div>

          {/* Right side — service highlight panel (desktop only) */}
          <div className="hidden lg:flex flex-col text-right min-w-[320px] transition-all duration-700">
            <span className="text-eg-gold font-display font-bold text-xs tracking-widest uppercase mb-2">
              {slide.category}
            </span>
            <h2 className="text-white font-display font-bold text-lg mb-5 border-b border-eg-gold/40 pb-4 leading-snug">
              {slide.title}
            </h2>
            <ul className="space-y-4">
              {slide.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-eg-gold font-bold text-sm tracking-wide flex items-center justify-end gap-3"
                >
                  <span>{item}</span>
                  <span className="text-green-400 flex-shrink-0">✓</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-eg-gold w-6' : 'bg-white/40 w-2 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
