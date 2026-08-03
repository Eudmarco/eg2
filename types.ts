import React from 'react';

export interface StoreSettings {
  nome_fantasia: string;
  descricao: string;
  cidade: string;
  uf: string;
  endereco: string;
  cep: string;
  whatsapp_number: string;
  email_contato: string;
  instagram_url: string;
  institutional_url: string;
  logo_url: string;
  favicon_url: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}