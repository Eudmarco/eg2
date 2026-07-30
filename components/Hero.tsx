import React from 'react';
import { PHONE_NUMBER } from '../constants';

const panelServices = [
  "QUADROS RESIDENCIAIS, COMERCIAIS E INDUSTRIAIS",
  "PAINÉIS DE COMANDO ELÉTRICO E AUTOMAÇÃO",
  "CORREÇÃO DE FATOR DE POTÊNCIA",
  "QGBT (QUADRO GERAL DE BAIXA TENSÃO)",
];

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-eg-dark/95 via-eg-dark/75 to-eg-dark/55"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 w-full">

          {/* Left side — main content */}
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
              Especialista em instalações elétricas, residencial, comercial e industrial
              em Jaguariúna e região. Segurança, tecnologia e garantia para sua casa
              ou empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

            {/* Panel services card — mobile only (shows below buttons) */}
            <div className="lg:hidden w-full bg-eg-dark/85 backdrop-blur-sm border-2 border-eg-gold/70 rounded-2xl overflow-hidden mb-8">
              <div className="bg-eg-gold px-5 py-3">
                <span className="text-eg-dark font-display font-black text-sm tracking-widest">
                  ⚡ MONTAGEM DE PAINÉIS
                </span>
              </div>
              <div className="px-5 py-4">
                <p className="text-white font-display font-bold text-sm mb-3 leading-snug">
                  SOLUÇÕES EM PAINÉIS ELÉTRICOS
                </p>
                <ul className="space-y-2">
                  {panelServices.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-eg-gold font-semibold text-xs">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
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

          {/* Panel services card — desktop only (right side) */}
          <div className="hidden lg:block flex-shrink-0 w-full max-w-[360px] bg-eg-dark/85 backdrop-blur-sm border-2 border-eg-gold/70 rounded-2xl overflow-hidden">
            <div className="bg-eg-gold px-5 py-3">
              <span className="text-eg-dark font-display font-black text-sm tracking-widest">
                ⚡ MONTAGEM DE PAINÉIS
              </span>
            </div>
            <div className="px-6 py-6">
              <p className="text-white font-display font-bold text-base mb-5 leading-snug">
                SOLUÇÕES EM PAINÉIS ELÉTRICOS
              </p>
              <ul className="space-y-4">
                {panelServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-eg-gold font-semibold text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=Tenho interesse em Montagem de Painéis.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full text-center bg-eg-gold hover:bg-eg-goldhover text-eg-dark font-bold py-3 px-6 rounded-lg transition-colors text-sm"
              >
                Solicitar Orçamento de Painéis
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
