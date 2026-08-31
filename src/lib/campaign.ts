export const CANDIDATE = {
  name: "BIA PICCOLI",
  number: "11 311",
  role: "DEPUTADA ESTADUAL",
  party: "PP — PARTIDO PROGRESSISTA",
  cnpj: "68.404.016/0001-01",
  phoneLabel: "51 99977-3654",
  slogan: "Juntos, podemos chegar mais longe!",
  instagram: "https://instagram.com/piccolibia",
  instagramHandle: "@piccolibia",
  facebook: "https://facebook.com/beatrizpiccoli",
  facebookHandle: "@beatrizpiccoli",
} as const;

export const WHATSAPP_MESSAGE = "Olá! Gostaria de receber materiais da Bia Piccoli.";
export const WHATSAPP_LINK = `https://wa.me/5551999773654?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const IMAGES = {
  portrait: "/assets/bia/bia-principal.png",
  tribuna: "/assets/bia/bia-tribuna-1998.jpg",
  arteJuntos: "/assets/campaign/arte-juntos.jpg",
  artePropostas: "/assets/campaign/arte-propostas.jpg",
  arte1998: "/assets/campaign/arte-1998.jpg",
} as const;

export const ACHIEVEMENTS = [
  {
    emoji: "👵",
    title: "COORDENADORIA DO IDOSO",
    text: "Implementei a Coordenadoria do Idoso de Porto Alegre, em 1998.",
  },
  {
    emoji: "🏛️",
    title: "DELEGACIA DO IDOSO",
    text: "Lutei pela criação da Delegacia do Idoso.",
  },
  {
    emoji: "👩",
    title: "CENTRO DE REFERÊNCIA DA MULHER",
    text: "Fui Coordenadora Estadual do Centro de Referência da Mulher Vânia Araújo Machado.",
  },
  {
    emoji: "🤝",
    title: "SOLIDARIEDADE NAS ENCHENTES",
    text: "Na enchente, trabalhei e fiz campanha para compra de cobertores, móveis, roupas e comidas para as famílias atingidas.",
  },
] as const;

export const PROPOSALS = [
  {
    emoji: "🎓",
    title: "EDUCAÇÃO PARA PREVENIR",
    text: "Projetos e parcerias para levar música, esporte, cultura, inclusão e cidadania às escolas e comunidades, prevenindo a violência.",
  },
  {
    emoji: "♿",
    title: "INCLUSÃO",
    text: "Ações e projetos para pessoas com deficiência e inclusão social.",
  },
  {
    emoji: "👩",
    title: "PROTEÇÃO À MULHER",
    text: "Acolhimento a mulheres e filhos em situação de violência e fortalecimento de rede.",
  },
  {
    emoji: "🛡️",
    title: "SEGURANÇA",
    text: "Valorização do policial e prevenção da violência com cidadania e oportunidades.",
  },
  {
    emoji: "❤️",
    title: "SAÚDE",
    text: "Mais acesso, acolhimento e qualidade, com atenção às comunidades e idosos.",
  },
  {
    emoji: "🐾",
    title: "CAUSA ANIMAL",
    text: "Defesa, proteção e políticas públicas para os animais.",
  },
] as const;
