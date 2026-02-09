import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reviews baseados no perfil Google Maps
  const reviews: Testimonial[] = [
    {
      name: "Teresinha Aparecida Camargo",
      text: "Eduardo é um excelente profissional! Muito competente, responsável e honesto. Fez a parte elétrica da minha casa e ficou perfeito. Recomendo de olhos fechados!",
      rating: 5
    },
    {
      name: "Wellington Silva",
      text: "Profissional extremamente qualificado, serviço de primeira qualidade, atendimento rápido e preço justo. Recomendo a todos da região de Jaguariúna.",
      rating: 5
    },
    {
      name: "Maria de Lourdes",
      text: "Atendimento nota 10! Muito atencioso, explicou todo o problema e resolveu com agilidade. A automação da iluminação ficou incrível.",
      rating: 5
    },
    {
      name: "Carlos Alberto",
      text: "Contratei para instalar meu sistema de energia solar off-grid e fiquei impressionado com o conhecimento técnico. Instalação limpa e organizada.",
      rating: 5
    }
  ];

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [reviews.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Warranty Section - Trust Signals */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 -mt-32 relative z-20 border-t-4 border-eg-gold">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-4">
               <div className="text-eg-blue mb-4 flex justify-center"><Icons.CheckBadge /></div>
               <h3 className="font-bold text-lg mb-2">Garantia Comprovada</h3>
               <p className="text-gray-500 text-sm">3 meses para manutenção e <br/><strong>1 ano para instalações novas</strong>.</p>
            </div>
            <div className="p-4">
               <div className="text-eg-blue mb-4 flex justify-center"><Icons.Bolt /></div>
               <h3 className="font-bold text-lg mb-2">Segurança Total</h3>
               <p className="text-gray-500 text-sm">Profissionais habilitados com<br/><strong>NR10 e NR35</strong> atualizados.</p>
            </div>
            <div className="p-4">
               <div className="text-eg-blue mb-4 flex justify-center"><Icons.Clock /></div>
               <h3 className="font-bold text-lg mb-2">Plantão 24h</h3>
               <p className="text-gray-500 text-sm">Emergências elétricas não tem hora.<br/>Estamos prontos para atender.</p>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-eg-dark">O que nossos clientes dizem</h2>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="text-eg-gold font-bold text-xl">5.0</span>
            <div className="flex text-eg-gold"><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /></div>
            <a href="https://www.google.com/maps/place/EG+EL%C3%89TRICA/@-22.8579402,-47.0478858,61491m/data=!3m1!1e3!4m8!3m7!1s0x804fdf642018ec9d:0xff702d1861311276!8m2!3d-22.8579402!4d-47.0478858!9m1!1b1!16s%2Fg%2F11xf1hh4dh?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm underline hover:text-eg-blue">(Ver no Google Maps)</a >
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
           {/* Navigation Buttons */}
           <button 
             onClick={prevSlide}
             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-eg-gold transition-colors hidden md:block"
             aria-label="Anterior"
           >
             <Icons.ChevronLeft />
           </button>
           <button 
             onClick={nextSlide}
             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-eg-gold transition-colors hidden md:block"
             aria-label="Próximo"
           >
             <Icons.ChevronRight />
           </button>

           {/* Carousel Content */}
           <div className="relative h-64 md:h-48">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex flex-col items-center justify-center px-8 md:px-16
                    ${index === currentIndex ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95 pointer-events-none'}
                  `}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full text-center">
                    <div className="flex justify-center text-eg-gold mb-4">
                      {[...Array(review.rating)].map((_, idx) => <Icons.Star key={idx} />)}
                    </div>
                    <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm">
                            {review.name.charAt(0)}
                        </div>
                        <p className="font-bold text-eg-dark text-base">{review.name}</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
           </div>

           {/* Dots Indicators */}
           <div className="flex justify-center gap-2 mt-8">
             {reviews.map((_, index) => (
               <button
                 key={index}
                 onClick={() => goToSlide(index)}
                 className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-eg-gold w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                 aria-label={`Ir para avaliação ${index + 1}`}
               />
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;