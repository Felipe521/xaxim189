// Fonte única da verdade sobre o imóvel.
// Alterar preço, percentual de obra, contato ou endereço aqui — nada mais no código deve
// duplicar esses valores.

export const property = {
  title: "Sobrado no Xaxim",
  code: "XAXIM 189",

  area: 189,
  suites: 3,
  bedrooms: 3,
  parkingSpots: 4,
  parkingCovered: 2,
  parkingUncovered: 2,
  bathrooms: "5+",

  price: 1190000,
  priceLabel: "R$ 1.190.000",

  neighborhood: "Xaxim",
  city: "Curitiba",
  state: "PR",
  address: "Rua Pedro Wieler, 1091 — Sobrado 08",

  contact: {
    name: "Robson",
    phoneDisplay: "(41) 99647-7564",
    phoneRaw: "5541996477564",
  },

  // Percentual da obra: a fonte trouxe dois números diferentes (94% e ~95%).
  // Mantido como faixa, de forma transparente, em vez de escolher um valor arbitrário.
  construction: {
    min: 94,
    max: 95,
    status: "Obra em fase final",
    display: "94% — 95%",
    note: "Percentual informado entre 94% e aproximadamente 95% de conclusão.",
  },
} as const;

export const whatsappMessage =
  "Olá, Robson! Vi o sobrado de 189m² no Xaxim e gostaria de receber mais informações sobre o imóvel e as condições de pagamento.";

export function buildWhatsAppLink(message: string = whatsappMessage) {
  return `https://wa.me/${property.contact.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const ctas = {
  hero: "QUERO CONHECER",
  heroSecondary: "EXPLORAR O PROJETO",
  afterRooms: "EXPLORAR O IMÓVEL",
  afterPrice: "FALAR SOBRE O IMÓVEL",
  final: "AGENDAR UMA CONVERSA",
  mobileBar: "TENHO INTERESSE NESTE IMÓVEL",
} as const;

export type PropertyImage = {
  src: string;
  alt: string;
  orientation: "landscape" | "portrait";
};

// Todas as imagens são fotos reais do imóvel em obras (não são renders).
// Ordem pensada como narrativa editorial: fachada → social → circulação →
// área íntima → banheiros → subsolo.
export const galleryImages: PropertyImage[] = [
  { src: "/images/fachada.jpg", alt: "Fachada do sobrado", orientation: "landscape" },
  { src: "/images/social-hall-escada.jpg", alt: "Hall de entrada integrado à escada", orientation: "landscape" },
  { src: "/images/social-living-ampla.jpg", alt: "Living amplo para dois ambientes", orientation: "landscape" },
  { src: "/images/terreo-lavabo.jpg", alt: "Lavabo do piso térreo", orientation: "portrait" },
  { src: "/images/circulacao-vertical-luz.jpg", alt: "Vão de escada com pé-direito duplo", orientation: "portrait" },
  { src: "/images/circulacao-vertical-detalhe.jpg", alt: "Detalhe da circulação vertical", orientation: "portrait" },
  { src: "/images/suite-master.jpg", alt: "Suíte master", orientation: "landscape" },
  { src: "/images/superior-suite-quarto-a.jpg", alt: "Suíte do piso superior", orientation: "landscape" },
  { src: "/images/superior-suite-quarto-b.jpg", alt: "Suíte do piso superior com sacada", orientation: "landscape" },
  { src: "/images/superior-corredor.jpg", alt: "Corredor de acesso às suítes", orientation: "portrait" },
  { src: "/images/superior-suite-banheiro-a.jpg", alt: "Banheiro de suíte", orientation: "portrait" },
  { src: "/images/superior-suite-banheiro-b.jpg", alt: "Banheiro de suíte", orientation: "portrait" },
  { src: "/images/superior-suite-banheiro-c.jpg", alt: "Banheiro de suíte", orientation: "portrait" },
  { src: "/images/superior-suite-banheiro-d.jpg", alt: "Banheiro de suíte", orientation: "portrait" },
  { src: "/images/superior-banheiro-detalhe-a.jpg", alt: "Detalhe de acabamento do banheiro", orientation: "portrait" },
  { src: "/images/superior-banheiro-detalhe-b.jpg", alt: "Detalhe de acabamento do banheiro", orientation: "portrait" },
  { src: "/images/subsolo-escada.jpg", alt: "Escada de acesso ao subsolo", orientation: "landscape" },
  { src: "/images/corredor-passagem.jpg", alt: "Corredor de passagem", orientation: "portrait" },
];
