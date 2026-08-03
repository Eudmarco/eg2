import { StoreSettings } from '../types';

export function updateMetaTags(s: StoreSettings): void {
  const ogTitle = `${s.nome_fantasia} | Painéis Elétricos e Instalações em ${s.cidade}`;

  document.title = `${s.nome_fantasia} | Eletricista em ${s.cidade} — Painéis Elétricos e Instalações`;

  setMeta('name', 'description', s.descricao);
  setMeta('property', 'og:title', ogTitle);
  setMeta('property', 'og:description', s.descricao);
  setMeta('property', 'og:image', s.logo_url);
  setMeta('name', 'twitter:title', ogTitle);
  setMeta('name', 'twitter:description', s.descricao);
  setMeta('name', 'twitter:image', s.logo_url);

  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (favicon) favicon.href = s.favicon_url;

  updateJsonLd(s);
}

function setMeta(attr: string, value: string, content: string): void {
  const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
  if (el) el.setAttribute('content', content);
}

function updateJsonLd(s: StoreSettings): void {
  const script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
  if (!script) return;

  try {
    const data = JSON.parse(script.textContent || '{}');
    data.name = s.nome_fantasia;
    data.telephone = s.whatsapp_number;
    data.email = s.email_contato;
    data.logo = s.logo_url;
    if (data.address) {
      data.address.streetAddress = s.endereco;
      data.address.postalCode = s.cep;
      data.address.addressLocality = s.cidade;
      data.address.addressRegion = s.uf;
    }
    if (Array.isArray(data.sameAs) && data.sameAs.length > 0) {
      data.sameAs[0] = s.instagram_url;
    }
    script.textContent = JSON.stringify(data, null, 2);
  } catch {
    // silently skip if JSON-LD is malformed
  }
}
