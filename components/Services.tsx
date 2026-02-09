import React from 'react';
import { Icons } from '../constants';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Elétrica Residencial",
      description: "Instalação completa, manutenção, troca de fiação, quadros de distribuição, iluminação LED e chuveiros. Segurança para sua família.",
      icon: <Icons.Home />
    },
    {
      title: "Elétrica Comercial",
      description: "Projetos elétricos para lojas, escritórios e condomínios. Adequação de normas, balanceamento de cargas e manutenção preventiva.",
      icon: <Icons.Bolt />
    },
    {
      title: "Redes e CFTV",
      description: "Cabeamento estruturado, instalação de câmeras de segurança e configuração de redes Wi-Fi de alta performance.",
      icon: <Icons.Wifi />
    },
    {
      title: "Padrão de Entrada",
      description: "Instalação e manutenção de padrão de entrada de energia (poste), seguindo todas as normas da concessionária local.",
      icon: <Icons.CheckBadge />
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-eg-blue font-bold tracking-wider uppercase mb-2 text-sm">Nossos Serviços</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-eg-dark mb-4">
            Excelência Técnica em Cada Detalhe
          </h3>
          <p className="text-gray-600">
            Da troca de uma tomada a projetos comerciais completos, nossa equipe está preparada para atender com agilidade e precisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-xl hover:border-eg-gold/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-eg-dark text-eg-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-eg-gold group-hover:text-eg-dark transition-colors">
                {service.icon}
              </div>
              <h4 className="font-bold text-xl text-eg-dark mb-3">{service.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;