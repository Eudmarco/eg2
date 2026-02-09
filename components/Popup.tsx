import React, { useEffect, useState } from 'react';
import { Icons, PHONE_NUMBER } from '../constants';

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('eg_popup_seen');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark as seen
        sessionStorage.setItem('eg_popup_seen', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden animate-fade-in-up">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500 transition-colors bg-white rounded-full z-10"
          aria-label="Fechar Popup"
        >
          <Icons.Close />
        </button>

        <div className="bg-eg-dark p-6 text-center text-white">
          <div className="w-16 h-16 bg-eg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-eg-dark animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <h3 className="font-display font-bold text-2xl">Precisa de Ajuda Urgente?</h3>
          <p className="text-gray-300 mt-2">
            Estamos prontos para te atender. Pane elétrica, curto-circuito ou falta de energia?
          </p>
        </div>

        <div className="p-6 text-center">
          <a 
            href={`https://wa.me/${PHONE_NUMBER}?text=URGENTE: Preciso de um eletricista agora!`}
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg mb-3 transition-colors shadow-md"
          >
            🚨 Chamar Emergência
          </a>
          <a 
             href={`https://wa.me/${PHONE_NUMBER}?text=Gostaria de solicitar um orçamento.`}
             target="_blank" 
             rel="noopener noreferrer"
             className="block w-full border border-gray-300 hover:border-eg-gold hover:text-eg-gold text-gray-600 font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Solicitar Orçamento Normal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;