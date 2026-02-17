# FranzLuthier Website

Site institucional do Franz Luthier, com foco em presença digital local, contato rápido por WhatsApp e SEO para buscas em São Bento do Sul.

## Visão geral

- Landing page otimizada para conversão
- Integração com Instagram e Facebook
- Botão de WhatsApp com mensagem pronta
- Mapa com localização e link direto para o Google Maps
- Estrutura SEO com metadata, Open Graph, Twitter Card, JSON-LD, robots e sitemap

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Estrutura relevante

- `src/app/page.tsx`: homepage e conteúdo institucional
- `src/app/layout.tsx`: metadata global e SEO base
- `src/app/robots.ts`: política de rastreamento
- `src/app/sitemap.ts`: sitemap XML dinâmico
- `public/favicon/site.webmanifest`: metadados PWA e identidade

## Executar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Variáveis de ambiente

Para SEO canônico e URLs absolutas, configure:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Sem essa variável, o projeto usa fallback para `https://www.franzluthier.com`.

## Build de produção

```bash
npm run build
npm start
```

## Licença

Projeto privado.
