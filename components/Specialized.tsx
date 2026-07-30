import React from 'react';
import { Icons, PHONE_NUMBER } from '../constants';

const Specialized: React.FC = () => {
  return (
    <section id="especializados" className="py-0 bg-eg-dark text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">

        {/* Painéis */}
        <div className="w-full p-12 lg:p-20 relative group">
           <div className="absolute inset-0 bg-[url('/quadroeletrico.jpeg')] bg-contain bg-no-repeat bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
           <div className="relative z-10">
             <div className="text-eg-gold mb-4"><Icons.Bolt /></div>
             <h3 className="font-display font-bold text-3xl mb-4">Montagem de Painéis</h3>
             <p className="text-gray-300 mb-6 leading-relaxed">
               Painéis elétricos <strong>projetados e montados sob medida</strong> para aplicações residenciais, comerciais e industriais. Qualidade construtiva, organização e segurança em cada detalhe.
             </p>
             <ul className="space-y-2 mb-8 text-gray-400">
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Painéis elétricos sob medida</li>
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Painéis de comando</li>
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> QGBTs</li>
               <li className="flex items-center gap-2"><span className="text-eg-gold">✓</span> Painéis de automação</li>
             </ul>
             <a
              href={`https://wa.me/${PHONE_NUMBER}?text=Tenho interesse em Montagem de Painéis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-eg-gold text-eg-gold px-6 py-2 rounded hover:bg-eg-gold hover:text-eg-dark transition-colors font-bold cursor-pointer"
            >
              Saiba Mais
             </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Specialized;