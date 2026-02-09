import React, { useState } from 'react';
import { PHONE_NUMBER } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Residencial',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é *${formData.name}*.\nTenho interesse em serviço *${formData.service}*.\nDetalhes: ${formData.details}`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-20 bg-eg-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2 text-white">
            <h2 className="text-eg-gold font-bold text-lg mb-2 uppercase tracking-wide">Fale Conosco</h2>
            <h3 className="font-display font-bold text-4xl mb-6">Solicite um Orçamento Sem Compromisso</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Preencha o formulário e você será direcionado automaticamente para nosso WhatsApp. 
              Resposta rápida e atendimento personalizado.
            </p>
            
            <div className="space-y-4">
              <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:bg-white/5 p-2 rounded-lg transition-colors group">
                <div className="bg-gray-800 p-3 rounded-lg text-eg-gold group-hover:bg-eg-gold group-hover:text-eg-dark transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold group-hover:text-eg-gold">Telefone / WhatsApp</h4>
                  <p className="text-gray-400 group-hover:text-white">(19) 99773-7657</p>
                </div>
              </a>

              <a href="mailto:eg.eletrica10@gmail.com" className="flex items-start gap-4 hover:bg-white/5 p-2 rounded-lg transition-colors group">
                 <div className="bg-gray-800 p-3 rounded-lg text-eg-gold group-hover:bg-eg-gold group-hover:text-eg-dark transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                 </div>
                 <div>
                   <h4 className="font-bold group-hover:text-eg-gold">Email</h4>
                   <p className="text-gray-400 group-hover:text-white">eg.eletrica10@gmail.com</p>
                 </div>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-eg-gold focus:ring-1 focus:ring-eg-gold"
                  placeholder="Ex: João Silva"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-bold mb-2">Tipo de Serviço</label>
                <select 
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-eg-gold"
                >
                  <option value="Residencial">Elétrica Residencial</option>
                  <option value="Comercial">Elétrica Comercial</option>
                  <option value="Solar">Energia Solar Off-Grid</option>
                  <option value="Automacao">Automação Residencial</option>
                  <option value="Emergencia">Emergência 24h</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="details" className="block text-gray-700 font-bold mb-2">Detalhes do Pedido</label>
                <textarea 
                  id="details"
                  name="details"
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-eg-gold"
                  placeholder="Descreva brevemente o que você precisa..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-eg-gold text-eg-dark font-black py-4 rounded hover:bg-eg-goldhover transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                ENVIAR NO WHATSAPP
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;