import React from 'react';
import { Icons, PHONE_NUMBER } from '../constants';

const Specialized: React.FC = () => {
  return (
    <section id="especializados" className="py-0 bg-eg-dark text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        
        {/* Automation Side */}
        <div className="lg:w-1/2 p-12 lg:p-20 relative group">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558002038-10917738179d?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
           <div className="relative z-10">
             <div className="text-eg-gold mb-4"><Icons.Wifi /></div>
             <h3 className="font-display font-bold text-3xl mb-4">Automação Residencial</h3>
             <p className="text-gray-300 mb-6 leading-relaxed">
               Transforme sua casa em um lar inteligente. Controle iluminação, ar-condicionado, TV e persianas por 
               <strong> comando de voz (Alexa/Google)</strong> ou pelo celular, de onde estiver.
             </p>
             <ul className="space-y-2 mb-8 text-gray-400">
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Comandos de Voz Integrados</li>
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Cenas Personalizadas</li>
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Economia de Energia</li>
             </ul>
             <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Tenho interesse em Automação Residencial.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-eg-gold text-eg-gold px-6 py-2 rounded hover:bg-eg-gold hover:text-eg-dark transition-colors font-bold cursor-pointer"
            >
              Saiba Mais
             </a>
           </div>
        </div>

        {/* Solar Side */}
        <div className="lg:w-1/2 p-12 lg:p-20 relative bg-gray-900 group border-t lg:border-t-0 lg:border-l border-gray-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1352&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
           <div className="relative z-10">
             <div className="text-eg-gold mb-4"><Icons.Solar /></div>
             <h3 className="font-display font-bold text-3xl mb-4">Energia Solar Off-Grid</h3>
             <p className="text-gray-300 mb-6 leading-relaxed">
               Gere sua própria energia em locais remotos ou garanta backup quando a rede cair. 
               Especialistas em sistemas isolados com baterias para chácaras, motorhomes e sistemas de segurança.
             </p>
             <ul className="space-y-2 mb-8 text-gray-400">
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Independência Energética</li>
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Sistemas com Baterias</li>
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Projeto e Instalação</li>
             </ul>
             <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Tenho interesse em Energia Solar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-eg-gold text-eg-dark px-6 py-2 rounded hover:bg-eg-goldhover transition-colors font-bold cursor-pointer"
            >
              Simular Projeto
             </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Specialized;