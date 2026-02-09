import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialized from './components/Specialized';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Popup from './components/Popup';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialized />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Popup />
    </div>
  );
};

export default App;