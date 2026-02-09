import React, { useState } from 'react';
import { PHONE_DISPLAY, PHONE_NUMBER, LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Solar & Automação', href: '#especializados' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-eg-dark text-white shadow-lg border-b border-eg-gold/30">
      <div className="container mx-auto px-4 py-4 md:py-5 flex justify-between items-center relative">
        {/* Logo Area */}
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, '#hero')}
          className="flex items-center gap-3 group z-50"
        >
           <img 
             src={LOGO_URL} 
             alt="EG Elétrica Logo" 
             className="h-16 w-auto md:h-24 object-contain transition-transform duration-300 transform group-hover:scale-105"
           />
           <div className="flex flex-col">
             <span className="font-display font-bold text-lg md:text-xl tracking-wide leading-none text-white">EG ELÉTRICA</span>
             <span className="font-display text-xs tracking-widest leading-none text-eg-gold mt-1 group-hover:text-white transition-colors">SOLUÇÕES EM ENERGIA</span>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="font-medium hover:text-eg-gold transition-colors text-sm uppercase tracking-wide cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a 
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-eg-gold text-eg-dark px-5 py-2 rounded-full font-bold hover:bg-eg-goldhover hover:text-white transition-all shadow-glow"
          >
            {PHONE_DISPLAY}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-eg-gold z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-eg-dark fixed inset-0 z-40 pt-28 px-4 h-screen w-screen overflow-y-auto">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white hover:text-eg-gold text-2xl font-display font-bold border-b border-gray-800 pb-4"
              >
                {link.label}
              </a>
            ))}
             <a 
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-eg-gold text-eg-dark py-4 rounded-xl font-bold text-xl mt-4 shadow-glow"
              >
                Ligar Agora
              </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;