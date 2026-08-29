# Site oficial — Bia Piccoli | 11 311 | Deputada Estadual

Site completo, mobile-first, em português, com identidade azul-marinho/azul vivo e a ferramenta "Foto de Apoio" 1080x1080.

## Imagens enviadas (uso planejado)

- Retrato recortado (fundo branco) → foto principal do Hero, do bloco de identidade e da moldura da Foto de Apoio; também vira o favicon (recorte quadrado do rosto).
- Arte "Juntos, podemos chegar mais longe" → referência visual (cores, tipografia, faixa de assinatura).
- Arte "Gostou das minhas propostas" → referência da seção Propostas.
- Foto na tribuna (arte 1998) → recortada para uso na seção Destaque 1998.

Não foi enviado um arquivo de logo isolado. A assinatura "BIA PICCOLI / DEPUTADA ESTADUAL / 11 311 / PP" será reconstruída em tipografia (Bebas Neue + Montserrat), fiel às artes, sem alterar dados. Se você tiver o logo em PNG/SVG, envie e eu substituo.

## Seções (nesta ordem)

1. Header fixo — assinatura + menu (Início, Minha História, O Que Já Fiz, Propostas, Participe) + botão WhatsApp; hamburger no celular.
2. Hero — foto da Bia, "BIA PICCOLI" com "11 311" gigante ao lado, "DEPUTADA ESTADUAL" pequeno abaixo, PP, chamada "Juntos, podemos chegar mais longe!" e 4 botões.
3. Faixa de identidade — nome + 11 311 em destaque máximo.
4. Minha História — 3 parágrafos + selo "MAIS DE 30 ANOS".
5. O Que Eu Já Fiz — 4 cards.
6. Destaque 1998 — "1998" gigante + foto da tribuna.
7. Minhas Propostas — 6 cards + chamada para compartilhar.
8. Participe — 3 opções grandes.
9. Quero Receber Material — bloco WhatsApp.
10. Foto de Apoio — ferramenta completa.
11. Chamada final azul-marinho com os 4 botões.
12. Rodapé — assinatura, CNPJ 68.404.016/0001-01, WhatsApp 51 99977-3654, espaços para Instagram/Facebook/YouTube (sem links inventados).

## Ferramenta Foto de Apoio

- Escolha: 📷 Usar câmera (getUserMedia, frontal, só após clique) ou 🖼️ Galeria (JPG/JPEG/PNG/WEBP).
- Editor quadrado com zoom, arrastar e girar; nada modifica o rosto.
- Canvas 1080x1080: foto centralizada em moldura circular, faixa azul-marinho com "EU APOIO!", "BIA PICCOLI", "11 311", "DEPUTADA ESTADUAL", "PP".
- Exportar PNG alta qualidade; Web Share API nativa quando disponível, senão download + orientação para Instagram/Facebook/WhatsApp.
- Processamento 100% no navegador, sem upload, sem cadastro.

## Detalhes técnicos

- Todas as fotos ficam no repositório (`public/assets/bia`, `/logo`, `/campaign`), referenciadas por caminho relativo; nenhuma URL externa de imagem.
- Fontes Bebas Neue, Montserrat e Sora carregadas via `<link>` no root; tokens de cor (#071B4B, #09245C, #145FE8, #1769F5, #2F80FF, #FFFFFF, #F5F7FA) no design system.
- SEO: title "Bia Piccoli | 11 311 | Deputada Estadual", meta description, Open Graph e Twitter Card, favicon a partir da foto principal.
- Acessibilidade: alt text, aria-label, foco visível, alvos de toque grandes; animações suaves de fade/slide no scroll.
- Todos os botões de material abrem https://wa.me/5551999773654 com a mensagem sugerida.
- Observação: o projeto é publicado pela Lovable; exportar para GitHub e Vercel funciona normalmente, pois tudo é estático e relativo.
