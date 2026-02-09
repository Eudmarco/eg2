import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2069&q=80" 
          alt="Eletricista profissional trabalhando em painel elétrico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eg-dark/95 via-eg-dark/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-eg-gold text-eg-dark px-3 py-1 rounded font-bold text-sm mb-4 animate-pulse">
            ⚡ ATENDIMENTO 24 HORAS
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
            Soluções Elétricas <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eg-gold to-yellow-200">
              Seguras e Inteligentes
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Especialistas em instalações elétricas, energia solar e automação residencial em Jaguariúna e região. 
            Segurança, tecnologia e garantia para sua casa ou empresa.
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
      </div>
    </section>
  );
};

export default Hero;