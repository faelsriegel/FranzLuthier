'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock3, Facebook, Instagram, MapPin, ShieldCheck, Wrench } from 'lucide-react';

import { Button } from '@/components/ui/button';

const INSTAGRAM_URL = 'https://www.instagram.com/franzluthier/';
const FACEBOOK_URL = 'https://www.facebook.com/p/Franz-Luthier-61558518996906/';
const WHATSAPP_NUMBER = '5547992258801';
const WHATSAPP_MESSAGE = 'Olá, Franz Luthier! Vim pelo site e gostaria de um orçamento.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const MAP_EMBED_URL = 'https://www.google.com/maps?q=Franz+Luthier+-+Estrada+Principal+Fundão,+S/N+-+Mato+Preto,+São+Bento+do+Sul+-+SC,+89285-365&output=embed';
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/w6cuwRrEvmwPVqZ38?g_st=iwb';

const SOCIAL_CAROUSEL_ITEMS = [
  {
    id: 'ig-1',
    platform: 'Instagram',
    title: 'Les Paul - detalhe do acabamento',
    subtitle: '@franzluthier',
    image: '/guitar1.jpg',
    href: INSTAGRAM_URL,
  },
  {
    id: 'ig-2',
    platform: 'Instagram',
    title: 'Les Paul - visão completa',
    subtitle: 'Trabalho recente',
    image: '/guitar2.jpg',
    href: INSTAGRAM_URL,
  },
  {
    id: 'fb-1',
    platform: 'Facebook',
    title: 'Violão - regulagem e revisão',
    subtitle: 'Franz Luthier',
    image: '/guitar3.jpg',
    href: FACEBOOK_URL,
  },
  {
    id: 'ig-4',
    platform: 'Instagram',
    title: 'Baixo elétrico - setup e precisão',
    subtitle: 'Regulagem fina de instrumento',
    image: '/guitar6.jpg',
    href: INSTAGRAM_URL,
  },
  {
    id: 'fb-2',
    platform: 'Facebook',
    title: 'Violão clássico - manutenção',
    subtitle: 'Serviço finalizado',
    image: '/guitar4.jpg',
    href: FACEBOOK_URL,
  },
  {
    id: 'ig-3',
    platform: 'Instagram',
    title: 'Violino - encordoamento e setup',
    subtitle: 'Detalhes de bancada',
    image: '/violino.jpg',
    href: INSTAGRAM_URL,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Franz Luthier',
  image: '/logo.png',
  url: '/',
  telephone: '+55 47 99225-8801',
  areaServed: 'Brasil',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Bento do Sul',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
  description: 'Luthier em São Bento do Sul especializado em regulagem, manutenção e customização de instrumentos de corda.',
};

const services = [
  {
    icon: Wrench,
    title: 'Regulagem completa',
    description: 'Ajuste preciso de ação, oitavas e tocabilidade para resposta confortável e sonora equilibrada.',
    points: ['Ação e oitavas calibradas', 'Conforto e estabilidade ao tocar'],
  },
  {
    icon: Wrench,
    title: 'Manutenção e reparos',
    description: 'Correções estruturais e elétricas com acabamento técnico e foco na durabilidade do instrumento.',
    points: ['Revisão estrutural e elétrica', 'Acabamento limpo e consistente'],
  },
  {
    icon: Wrench,
    title: 'Customização',
    description: 'Upgrades sob medida para performance, identidade sonora e melhor experiência de uso.',
    points: ['Configuração personalizada', 'Melhoria de performance real'],
  },
];

const differentials = [
  {
    icon: Clock3,
    title: 'Atendimento dedicado',
    description: 'Atendimento direto com foco em qualidade e boa experiência.',
    points: ['Contato rápido', 'Acompanhamento do serviço'],
  },
  {
    icon: ShieldCheck,
    title: 'Serviço bem feito',
    description: 'Cuidado no ajuste para deixar o instrumento confortável e pronto para tocar.',
    points: ['Ajustes com atenção', 'Resultado consistente'],
  },
  {
    icon: MapPin,
    title: 'Base em São Bento do Sul',
    description: 'Atendimento na cidade e suporte para clientes de outras regiões.',
    points: ['Atendimento local', 'Envio para todo o Brasil'],
  },
];

const cardClass =
  'group rounded-2xl border border-stone-200 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(41,37,36,0.1)]';

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.45 0 .07 5.38.07 11.99c0 2.11.55 4.17 1.6 6L0 24l6.18-1.62a11.9 11.9 0 0 0 5.87 1.5h.01c6.61 0 11.99-5.38 11.99-11.99 0-3.2-1.24-6.2-3.53-8.41zm-8.46 18.39h-.01a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-3.67.96.98-3.58-.23-.37a9.88 9.88 0 0 1-1.52-5.28C2.22 6.51 6.56 2.17 12.07 2.17c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.51-4.34 9.82-9.88 9.82zm5.42-7.37c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.67.08-.3-.15-1.28-.47-2.43-1.49-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.47.13-.62.14-.14.3-.36.46-.54.15-.18.2-.31.3-.51.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.51.08-.78.38-.27.3-1.03 1-1.03 2.44 0 1.43 1.06 2.82 1.2 3.02.15.2 2.08 3.18 5.03 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.78-.73 2.03-1.44.25-.7.25-1.31.17-1.44-.08-.13-.28-.2-.59-.36z" />
    </svg>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 md:mb-12">
      <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">{label}</p>
      <h2 className="mt-2.5 text-[clamp(1.4rem,3.8vw,2.45rem)] leading-[1.15] tracking-tight font-normal text-zinc-900 md:mt-3">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-zinc-600 md:mt-4 md:text-sm">{description}</p> : null}
    </div>
  );
}

function PatternCard({
  icon: Icon,
  title,
  description,
  points,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className={cardClass}
    >
      <div className="flex items-start justify-between gap-3">
        <Icon className="h-5 w-5 text-zinc-900" />
        <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">0{index + 1}</span>
      </div>

      <h3 className="mt-5 text-lg leading-snug font-normal text-zinc-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{description}</p>

      <div className="my-5 h-px w-full bg-stone-200" />

      <ul className="space-y-2 text-sm text-zinc-700">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function HomePage() {
  const socialCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!socialCarouselRef.current) return;
    const amount = Math.round(socialCarouselRef.current.clientWidth * 0.9);
    socialCarouselRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Script id="franz-luthier-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </Script>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Franz Luthier" width={140} height={36} priority className="h-auto w-[128px] object-contain sm:w-[140px]" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#servicos" className="text-sm font-normal text-zinc-700 transition-colors hover:text-zinc-950">Serviços</a>
            <a href="#diferenciais" className="text-sm font-normal text-zinc-700 transition-colors hover:text-zinc-950">Diferenciais</a>
            <a href="#localizacao" className="text-sm font-normal text-zinc-700 transition-colors hover:text-zinc-950">Localização</a>
          </nav>

          <Button asChild size="sm" variant="outline" className="rounded-full border-stone-300 bg-white px-3 text-zinc-900 hover:bg-stone-100 hover:text-zinc-900 sm:px-5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Falar no WhatsApp</span>
            </a>
          </Button>
        </div>
      </header>

      <main className="pt-16">
        <section className="pt-1.5 sm:pt-2">
          <div className="container mx-auto px-4 pb-8 pt-2.5 lg:px-6 md:pb-16 md:pt-4">
            <div className="mx-auto max-w-5xl py-4 text-center md:py-8 lg:py-10">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <p className="text-[11px] uppercase tracking-[0.34em] text-zinc-500">Franz Luthier</p>

                <h1 className="mx-auto mt-5 max-w-4xl text-[clamp(1.55rem,6vw,4.4rem)] font-light leading-[1.08] tracking-[-0.015em] text-zinc-900 md:mt-7">
                  Onde som, técnica e paixão
                  <span className="block font-normal italic">se encontram.</span>
                </h1>

                <p className="mx-auto mt-4 max-w-3xl px-1 text-[13px] leading-[1.75] text-zinc-600 md:mt-8 md:text-[17px] md:leading-relaxed">
                  Luthieria especializada em instrumentos de corda, com regulagens precisas, manutenção refinada e acabamento profissional.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-2 md:mt-11 md:gap-3">
                  <span className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-[11px] text-zinc-700 md:px-4 md:py-2 md:text-sm">São Bento do Sul</span>
                  <span className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-[11px] text-zinc-700 md:px-4 md:py-2 md:text-sm">Envio para todo o Brasil</span>
                  <span className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-[11px] text-zinc-700 md:px-4 md:py-2 md:text-sm">Orçamento via DM</span>
                </div>

                <div className="mt-7 flex w-full flex-col items-center justify-center gap-2.5 md:mt-11 sm:flex-row sm:gap-4">
                  <Button asChild size="lg" variant="outline" className="h-11 w-full max-w-[280px] rounded-full border-stone-300 bg-white px-6 text-sm text-zinc-900 hover:bg-stone-100 hover:text-zinc-900 md:h-12 md:w-auto md:max-w-none md:px-7 md:text-base">
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-4 w-4 text-zinc-900" />
                      Instagram
                    </a>
                  </Button>

                  <Button asChild size="lg" variant="outline" className="h-11 w-full max-w-[280px] rounded-full border-stone-300 bg-white px-6 text-sm text-zinc-900 hover:bg-stone-100 hover:text-zinc-900 md:h-12 md:w-auto md:max-w-none md:px-7 md:text-base">
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-4 w-4 text-zinc-900" />
                      Facebook
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-200 bg-stone-50 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div
              className="relative overflow-hidden rounded-3xl border border-stone-200 bg-cover bg-center bg-scroll md:bg-fixed"
              style={{ backgroundImage: "url('/banner.jpg')" }}
            >
              <div className="bg-zinc-950/45 p-7 sm:p-8 md:p-16">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/80">Destaque</p>
                  <h2 className="mt-5 text-[clamp(1.6rem,4vw,2.6rem)] tracking-tight font-normal text-white">
                    Seu instrumento merece o melhor som que ele pode oferecer!
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-white/85">Com uma regulagem profissional, você sente a diferença no primeiro acorde:</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/90 marker:text-white/85">
                    <li>Mais conforto</li>
                    <li>Melhor sonoridade</li>
                    <li>Mais prazer em tocar</li>
                  </ul>
                  <Button asChild size="lg" variant="outline" className="mt-8 h-12 rounded-full border-white/70 bg-white text-zinc-900 hover:bg-stone-100 hover:text-zinc-900">
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-4 w-4 text-zinc-900" />
                      Ver no Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="border-t border-stone-200 bg-stone-50 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-end md:justify-between md:gap-6">
              <SectionHeader
                label="Serviços"
                title="Soluções técnicas com padrão profissional"
                description="Mesmo padrão visual e de leitura para facilitar a navegação e a compreensão rápida dos serviços."
              />
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mb-10 hidden items-center gap-1 text-sm text-zinc-700 transition-colors hover:text-zinc-950 md:flex">
                Ver trabalhos
                <ArrowUpRight className="h-4 w-4 text-zinc-900" />
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {services.map((service, index) => (
                <PatternCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  points={service.points}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="border-t border-stone-200 bg-stone-100/70 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <SectionHeader
              label="Diferenciais"
              title="Atendimento simples e resultado profissional"
              description="Serviço com organização, cuidado e foco em um resultado de qualidade."
            />

            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {differentials.map((item, index) => (
                <PatternCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  points={item.points}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="instagram" className="border-t border-stone-200 bg-stone-50 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="wood-grain mx-auto max-w-6xl rounded-3xl border border-stone-200 bg-stone-100 p-6 md:p-12 lg:p-14">
              <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                  <SectionHeader
                    label="Instagram & Facebook"
                    title="Fotos e trabalhos publicados"
                    description="Veja os trabalhos recentes e envie mensagem direta para solicitar orçamento."
                  />

                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-stone-300 bg-white px-8 text-zinc-900 hover:bg-stone-100 hover:text-zinc-900">
                      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2 h-4 w-4 text-zinc-900" />
                        Abrir Instagram
                      </a>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-stone-300 bg-white px-8 text-zinc-900 hover:bg-stone-100 hover:text-zinc-900">
                      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2 h-4 w-4 text-zinc-900" />
                        Abrir Facebook
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="mb-5 flex items-center justify-start gap-2 sm:justify-end">
                    <button
                      type="button"
                      aria-label="Anterior"
                      onClick={() => scrollCarousel('left')}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white text-zinc-900 transition-colors hover:bg-stone-100"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Próximo"
                      onClick={() => scrollCarousel('right')}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white text-zinc-900 transition-colors hover:bg-stone-100"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div
                    ref={socialCarouselRef}
                    className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {SOCIAL_CAROUSEL_ITEMS.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative h-[340px] min-w-[84%] snap-start overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 sm:min-w-[56%] lg:min-w-[44%]"
                      >
                        <div className="relative h-full w-full">
                          <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/20 to-transparent" />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/80">{item.platform}</p>
                          <h3 className="mt-2 text-lg leading-tight text-white">{item.title}</h3>
                          <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="localizacao" className="border-t border-stone-200 bg-stone-100/70 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <SectionHeader label="Localização" title="São Bento do Sul, SC" description="Atendimento local com envio para todo o Brasil." />
            <div className="mb-6 -mt-4">
              <Button asChild size="sm" variant="outline" className="h-10 rounded-full border-stone-300 bg-white px-5 text-zinc-900 hover:bg-stone-100 hover:text-zinc-900">
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Abrir no Google Maps
                </a>
              </Button>
            </div>
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_8px_20px_rgba(41,37,36,0.06)]">
              <iframe
                title="Mapa Franz Luthier"
                src={MAP_EMBED_URL}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full md:h-[420px]"
              />
            </div>
          </div>
        </section>
      </main>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="animate-whatsapp-ring fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-105 md:bottom-6 md:right-6"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </a>

      <footer className="border-t border-stone-200 bg-stone-50 py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row lg:px-6">
          <Image src="/logo.png" alt="Franz Luthier" width={150} height={40} className="h-auto w-[150px] object-contain" />

          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 transition-colors hover:text-zinc-950">
              Instagram
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 transition-colors hover:text-zinc-950">
              Facebook
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 transition-colors hover:text-zinc-950">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
