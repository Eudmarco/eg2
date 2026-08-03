import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { StoreSettings } from '../types';

const FALLBACK: StoreSettings = {
  nome_fantasia: 'EG Elétrica',
  descricao: 'Instalações elétricas residenciais e comerciais, montagem de painéis elétricos, cabeamento de rede e aterramento em Jaguariúna, Campinas e região. Plantão 24h. Solicite um orçamento!',
  cidade: 'Jaguariúna',
  uf: 'SP',
  endereco: 'Travessa Padre Anchieta, 39',
  cep: '13916-000',
  whatsapp_number: '+55-19-99773-7657',
  email_contato: 'eg.eletrica10@gmail.com',
  instagram_url: 'https://instagram.com/eg.eletrica10',
  institutional_url: 'https://egeletrica.com.br',
  logo_url: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/EG%20Eletrica/Logo%20Eg%20Eletrica.avif',
  favicon_url: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/EG%20Eletrica/Logo%20Eg%20Eletrica.avif?v=2',
};

export function useStoreSettings(): StoreSettings {
  const [settings, setSettings] = useState<StoreSettings>(FALLBACK);

  useEffect(() => {
    supabase
      .from('store_settings')
      .select('*')
      .single()
      .then(({ data, error }) => {
        if (!error && data) {
          setSettings({ ...FALLBACK, ...data });
        }
      });
  }, []);

  return settings;
}
