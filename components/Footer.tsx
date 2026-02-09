import React from 'react';
import { ADDRESS, EMAIL_ADDRESS, INSTAGRAM_HANDLE, PHONE_DISPLAY, FACEBOOK_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-white font-display font-bold text-2xl mb-4">
              <span className="text-eg-red">EG</span> ELÉTRICA
            </h3>
            <p className="text-sm mb-6">
              Soluções completas em engenharia elétrica, energia solar e automação. 
              Compromisso com qualidade, segurança e satisfação do cliente em Jaguariúna e região.
            </p>
            <div className="flex gap-4">
               {/* Instagram Link */}
               <a 
                 href="https://instagram.com/eg.eletrica10" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-white hover:text-eg-gold transition-colors"
                 title="Instagram"
               >
                 <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </a>

               {/* Facebook Link */}
               <a 
                 href={FACEBOOK_URL} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-white hover:text-eg-gold transition-colors"
                 title="Facebook"
               >
                 <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                 </svg>
               </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-eg-gold mt-1">📍</span>
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-eg-gold">📞</span>
                <span>{PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-eg-gold">✉️</span>
                <span>{EMAIL_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-eg-gold">⏰</span>
                <span>Seg - Dom: 24 Horas (Plantão)</span>
              </li>
            </ul>
          </div>

          {/* Map (Simplified image placeholder linking to Google Maps) */}
          <div className="rounded-lg overflow-hidden h-64 bg-gray-800 relative group">
            <a 
                href="https://www.google.com/maps/search/?api=1&query=Travessa+padre+Anchieta,+39+-+centro+-+Jaguariúna+SP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full relative"
            >
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                    alt="Mapa de Localização Jaguariúna"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white text-eg-dark px-4 py-2 rounded-full font-bold shadow-lg">Ver no Google Maps</span>
                </div>
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EG Elétrica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;