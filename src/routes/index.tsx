import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import heatersHero from "@/assets/aquecedores-hero.png";
import { OrbitalHeaterHero } from "@/components/OrbitalHeaterHero";
import { ServicesCarousel } from "@/components/ServicesCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TecGaz Aquecedores Curitiba | Venda, Instalação & Conserto em Curitiba" },
      {
        name: "description",
        content:
          "Venda, instalação certificada ABNT NBR 13103, manutenção preventiva, conserto e conversão de aquecedores a gás em Curitiba e região. Atendimento prioritário e laudo técnico.",
      },
      {
        property: "og:title",
        content: "TecGaz Aquecedores Curitiba | Venda, Instalação & Assistência em Curitiba",
      },
      {
        property: "og:description",
        content:
          "Venda, instalação, manutenção preventiva e conserto de aquecedores a gás em Curitiba. Peças originais Rinnai, Rheem, Lorenzetti e Komeco.",
      },
      {
        property: "og:image",
        content: "/images/hero-chuveiro.jpg",
      },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: "TecGaz Aquecedores Curitiba | Venda & Assistência em Curitiba",
      },
      {
        name: "twitter:description",
        content:
          "Instalação, manutenção preventiva e conserto de aquecedores a gás em Curitiba. Atendimento técnico certificado.",
      },
      {
        name: "twitter:image",
        content: "/images/hero-chuveiro.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5511940300560";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Quem Somos", href: "#quem-somos" },
];

const brands = [
  "Rinnai",
  "Rheem",
  "Komeco",
  "Lorenzetti",
  "Rowa",
  "Aquakent",
  "Inova",
];

const reviews = [
  {
    name: "Marcelo Andrade",
    text: "Atendimento rápido e muito profissional. Resolveram o problema do meu aquecedor Rinnai no mesmo dia. Recomendo demais!",
  },
  {
    name: "Patrícia Lima",
    text: "Fizeram a manutenção preventiva do aquecedor do prédio. Equipe pontual, educada e deixou tudo limpo. Excelente serviço.",
  },
  {
    name: "Rodrigo Teixeira",
    text: "Conversão de gás feita com muito cuidado e explicação de cada etapa. Preço justo e garantia no serviço.",
  },
  {
    name: "Fernanda Souza",
    text: "Instalaram meu aquecedor novo e o pressurizador. O banho ficou perfeito! Técnicos muito atenciosos.",
  },
];

const whyItems = [
  {
    image: "/images/tecnico-certificado.jpg",
    title: "Técnicos Certificados ABNT NBR 13103",
    description:
      "Equipe altamente treinada e especializada nas principais marcas do mercado, assegurando instalação e manutenção 100% segura.",
  },
  {
    image: "/images/garantia-satisfacao.jpg",
    title: "Peças Originais e Garantia por Escrito",
    description:
      "Trabalhamos exclusivamente com componentes genuínos e emitimos garantia formal em todos os serviços executados.",
  },
  {
    image: "/images/seguranca-normas.jpg",
    title: "Laudo Técnico e Teste de Estanqueidade",
    description:
      "Medição precisa de exaustão e verificação de vazamentos de gás para condomínios, residências e empresas em Curitiba.",
  },
];

const projects = [
  {
    icon: "fa-building",
    title: "Condomínios Residenciais",
    text: "Manutenção preventiva programada de aquecedores centrais e redes de gás em condomínios de Curitiba.",
  },
  {
    icon: "fa-house-chimney",
    title: "Residências e Apartamentos",
    text: "Dimensionamento e instalação perfeita de aquecedores a gás adequados para o consumo da sua família.",
  },
  {
    icon: "fa-utensils",
    title: "Comércios e Restaurantes",
    text: "Sistemas de alta capacidade de água quente com segurança contínua e suporte técnico ágil.",
  },
  {
    icon: "fa-dumbbell",
    title: "Academias e Clínicas",
    text: "Pressurização de água e aquecimento ininterrupto projetado para alto fluxo diário.",
  },
];

const stats = [
  { value: "+15 Anos", label: "Experiência em Curitiba" },
  { value: "+5.000", label: "Clientes Atendidos" },
  { value: "24/7", label: "Plantão de Emergência" },
  { value: "5,0 ★", label: "Nota Máxima no Google" },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`text-tecgaz-gold ${className}`} aria-hidden="true">
      <i className="fa-solid fa-star" />
      <i className="fa-solid fa-star ml-0.5" />
      <i className="fa-solid fa-star ml-0.5" />
      <i className="fa-solid fa-star ml-0.5" />
      <i className="fa-solid fa-star ml-0.5" />
    </span>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextReview = useCallback(() => setReviewIndex((i) => (i + 1) % reviews.length), []);
  const prevReview = useCallback(() => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  const finishReviewSwipe = (clientX: number) => {
    if (touchStart === null) return;
    const distance = clientX - touchStart;
    if (Math.abs(distance) > 45) {
      if (distance < 0) nextReview();
      else prevReview();
    }
    setTouchStart(null);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Top Bar */}
      <div className="border-b border-border/60 bg-tecgaz-dark-900 px-4 py-2 text-[11px] text-muted-foreground sm:px-[5%] sm:text-[13px]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-3 gap-y-2 sm:flex sm:items-center sm:justify-between">
          <div className="contents sm:flex sm:items-center sm:gap-5">
            <span className="min-w-0 truncate">
              <i className="fa-regular fa-clock mr-1.5 text-primary" />
              Seg - Sáb: 8:00 às 18:00 | Emergência 24h
            </span>
            <a href="tel:+551143787585" className="min-w-0 truncate text-right transition-colors hover:text-foreground sm:text-left">
              <i className="fa-solid fa-phone mr-1.5 text-primary" />
              (11) 4378-7585
            </a>
          </div>
          <div className="contents sm:flex sm:items-center sm:gap-5">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="min-w-0 truncate transition-colors hover:text-foreground">
              <i className="fa-brands fa-whatsapp mr-1.5 text-primary" />
              (11) 94030-0560
            </a>
            <span className="min-w-0 truncate text-right">
              <i className="fa-solid fa-location-dot mr-1.5 text-primary" />
              Curitiba - PR
            </span>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 px-4 py-3 backdrop-blur-xl sm:px-[5%]">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo-tecgaz.jpg"
              alt="TecGaz Aquecedores Curitiba"
              className="h-14 w-14 shrink-0 rounded-full border-2 border-primary/40 object-cover shadow-lg shadow-primary/20 transition-transform group-hover:scale-105"
            />
            <div className="hidden leading-tight sm:block">
              <div className="text-lg font-extrabold tracking-tight text-foreground">TecGaz CWB</div>
              <div className="text-[11px] font-bold uppercase tracking-wide text-primary">
                Aquecedores a Gás Curitiba
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-tecgaz-red-hover hover:shadow-primary/40"
            >
              Solicitar Orçamento Grátis
            </a>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-card/70 transition-colors hover:border-primary lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-lg`} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 border-t border-border/70 pt-3 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-tecgaz-red-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Orçamento Grátis
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section with 3D Orbital Component */}
      <section id="inicio" className="cinematic-hero relative isolate overflow-hidden border-b border-border/60">
        <div className="steam-layer" aria-hidden="true" />
        <div className="water-sheen" aria-hidden="true" />
        
        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-112px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-[5%] sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,.95fr)] lg:gap-6">
          <div className="max-w-3xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm">
              <i className="fa-solid fa-shield-halved text-primary" />
              Assistência Técnica Certificada ABNT em Curitiba
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Venda, Instalação & Conserto de <span className="text-primary">Aquecedores a Gás</span> em Curitiba
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg lg:mx-0">
              Manutenção preventiva, laudo de estanqueidade e atendimento de emergência 24/7 com peças originais Rinnai, Rheem, Lorenzetti, Komeco e Rowa.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row lg:justify-start">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-tecgaz-red-hover hover:shadow-primary/50"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-lg" />
                Solicitar Orçamento no WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-foreground/20 bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-primary/60 hover:bg-card/70"
              >
                Ver Todos os Serviços
              </a>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-foreground/10 bg-foreground/10 sm:grid-cols-4 lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-background/50 p-4 backdrop-blur-md">
                  <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Planetary Orbital Ring Component */}
          <div className="w-full flex justify-center items-center">
            <OrbitalHeaterHero imageSrc={heatersHero} />
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section id="servicos" className="section-texture bg-background px-4 py-20 sm:px-[5%] md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              <i className="fa-solid fa-fire-burner" />
              Nossos Serviços Especializados
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Soluções Rápidas & Seguras para seu Aquecedor
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Deslize para conhecer os serviços de venda, instalação, manutenção preventiva e suporte de emergência em Curitiba.
            </p>
          </div>

          {/* Interactive Responsive Carousel */}
          <ServicesCarousel />
        </div>
      </section>

      {/* Premium Highlight Section */}
      <section id="solucoes" className="px-4 py-10 sm:px-[5%]">
        <div className="mx-auto max-w-7xl">
          <div className="service-feature relative overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground shadow-2xl sm:p-10 lg:p-12">
            <div className="absolute inset-y-0 right-0 hidden w-2/5 border-l border-primary-foreground/10 lg:block" aria-hidden="true" />

            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase backdrop-blur-sm">
                  <i className="fa-solid fa-star text-[11px]" />
                  Atendimento Especializado em Curitiba & Região
                </div>
                <h3 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                  Seu Aquecedor com Defeito ou Água Fria no Banho?
                </h3>
                <p className="mt-5 text-base leading-relaxed opacity-95 md:text-lg">
                  Atendemos chamados de emergência no mesmo dia. Diagnóstico preciso, substituição de peças originais e garantia real por escrito.
                </p>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-tecgaz-dark-900 px-8 py-4 text-base font-bold text-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-tecgaz-card hover:shadow-2xl sm:w-fit"
              >
                <i className="fa-brands fa-whatsapp text-2xl text-emerald-400" />
                Chamar Técnico Agora no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Google Reviews */}
      <section className="section-texture bg-background px-4 py-20 sm:px-[5%] md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              <i className="fa-brands fa-google" />
              Avaliações Reais no Google
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Quem Chama a TecGaz Recomenda
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Confira os depoimentos de clientes que confiaram no nosso trabalho em Curitiba.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
            <div className="review-score flex flex-col items-center justify-center rounded-2xl border border-border bg-card/70 p-8 text-center backdrop-blur-md lg:col-span-5 lg:p-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-4xl text-primary">
                <i className="fa-brands fa-google" />
              </div>
              <span className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-foreground">
                Excelente Pontuação
              </span>
              <div className="mt-3 text-5xl font-extrabold text-foreground">5,0</div>
              <Stars className="mt-4 justify-center text-2xl" />
              <p className="mt-5 text-base text-muted-foreground">
                Baseado em avaliações verificadas de clientes em{" "}
                <span className="font-semibold text-foreground">Curitiba</span>
              </p>
            </div>

            <div className="relative flex flex-col justify-center lg:col-span-7">
              <div
                className="overflow-hidden rounded-2xl touch-pan-y"
                onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
                onTouchEnd={(event) => finishReviewSwipe(event.changedTouches[0]?.clientX ?? 0)}
              >
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: `translateX(-${reviewIndex * 100}%)` }}
                >
                  {reviews.map((review) => (
                    <figure key={review.name} className="w-full shrink-0 px-1">
                      <div className="review-card flex h-full min-h-[320px] flex-col rounded-2xl border border-border bg-card/80 p-7 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10">
                        <div className="flex items-center justify-between">
                          <Stars className="text-base" />
                          <i className="fa-brands fa-google text-xl text-muted-foreground" />
                        </div>
                        <blockquote className="mt-8 flex-1 text-base leading-relaxed text-muted-foreground lg:text-lg">
                          “{review.text}”
                        </blockquote>
                        <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                            {review.name.charAt(0)}
                          </span>
                          <div>
                            <span className="block text-base font-semibold">{review.name}</span>
                            <span className="text-xs text-muted-foreground">Cliente verificado em Curitiba</span>
                          </div>
                        </figcaption>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={prevReview}
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground sm:-translate-x-5"
                aria-label="Depoimento anterior"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground sm:translate-x-5"
                aria-label="Próximo depoimento"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>

              <div className="mt-8 flex justify-center gap-2.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setReviewIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === reviewIndex
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground"
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-border bg-tecgaz-dark-900 px-4 py-20 text-center sm:px-[5%] md:py-28">
        <h2 className="text-3xl font-bold md:text-4xl">Por que escolher a TecGaz em Curitiba?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Segurança, conformidade ABNT e peças originais para seu conforto diário.
        </p>

        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-border bg-background/60 text-left transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={1024}
                height={768}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects / Where we act */}
      <section id="projetos" className="section-texture px-4 py-20 sm:px-[5%] md:py-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Onde Atuamos</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Atendimento residencial, condominial e comercial em toda a região de Curitiba e Grande Curitiba.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-border bg-card/70 p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <i className={`fa-solid ${project.icon} text-xl`} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="border-y border-border bg-tecgaz-dark-900 px-4 py-20 sm:px-[5%] md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              Tradição & Qualidade em Curitiba
            </span>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">Quem Somos</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A TecGaz Aquecedores é uma empresa especializada em sistemas de aquecimento de água a gás em Curitiba. Atuamos com venda, instalação, manutenção preventiva, conserto e conversão de gás, sempre em conformidade rigorosa com as normas técnicas da ABNT NBR 13103.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Nossa equipe é altamente certificada e trabalha exclusivamente com peças originais, realizando testes de estanqueidade e emissão de laudo para condomínios, residências e empresas.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Orçamento sem compromisso",
                "Peças originais com garantia",
                "Laudo técnico e estanqueidade",
                "Atendimento em toda a região",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <i className="fa-solid fa-circle-check text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/tecnico-certificado.jpg"
            alt="Técnico da TecGaz realizando manutenção de aquecedor a gás em Curitiba"
            loading="lazy"
            width={1024}
            height={768}
            className="h-full min-h-[340px] max-h-[480px] w-full rounded-2xl border border-border object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* Map & Location */}
      <section className="section-texture px-4 py-20 sm:px-[5%] md:py-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Como Chegar na TecGaz Curitiba</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Atendimento presencial em Curitiba - PR. Venha nos visitar ou solicite uma visita técnica no seu endereço.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card/80 p-7 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-bold">Nossa Sede em Curitiba</h3>
            <ul className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-primary text-lg" />
                <span>Curitiba - PR</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-phone mt-1 text-primary text-lg" />
                <span>(41) 99999-9999</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-brands fa-whatsapp mt-1 text-primary text-lg" />
                <span>(41) 99999-9999</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-regular fa-clock mt-1 text-primary text-lg" />
                <span>Segunda a Sábado: 8:00 às 18:00</span>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=TecGaz+Aquecedores+Curitiba"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-tecgaz-red-hover"
            >
              <i className="fa-solid fa-diamond-turn-right text-base" />
              Traçar Rota no Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl lg:col-span-2">
            <iframe
              title="Mapa da localização da TecGaz Aquecedores em Curitiba"
              src="https://maps.google.com/maps?q=Curitiba%20-%20PR&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="cta-texture border-y border-primary/70 bg-primary px-4 py-16 text-center text-primary-foreground sm:px-[5%]">
        <h2 className="text-3xl font-extrabold md:text-4xl">Precisa de Assistência Técnica Agora?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base opacity-95">
          Fale diretamente com nossa equipe via WhatsApp e receba atendimento rápido em Curitiba e região.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-tecgaz-dark-900 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground shadow-2xl transition-transform hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp mr-2 text-xl text-emerald-400" />
            Chamar no WhatsApp
          </a>
          <a
            href="tel:+5541999999999"
            className="rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-sm font-semibold backdrop-blur-md transition-colors hover:bg-primary-foreground/20"
          >
            <i className="fa-solid fa-phone mr-2" />
            Ligar para Assistência Curitiba
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-tecgaz-dark-900 px-4 py-12 text-[13px] text-muted-foreground sm:px-[5%]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-tecgaz.jpg"
                alt="TecGaz Aquecedores Curitiba"
                className="h-12 w-12 rounded-full border border-primary/40 object-cover shadow-md"
              />
              <div>
                <div className="font-bold text-foreground">TecGaz Aquecedores Curitiba</div>
                <div className="text-xs text-muted-foreground">Curitiba - PR</div>
              </div>
            </div>
            <p className="max-w-xs leading-relaxed">
              Tecnologia e segurança em aquecimento de água a gás para residências, condomínios e empresas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contato & Endereço</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <i className="fa-solid fa-location-dot mr-2 text-primary" />
                Curitiba - PR
              </li>
              <li>
                <i className="fa-solid fa-phone mr-2 text-primary" />
                (41) 99999-9999
              </li>
              <li>
                <i className="fa-brands fa-whatsapp mr-2 text-primary" />
                (41) 99999-9999
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Horário de Funcionamento</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>Segunda a Sábado: 8:00 às 18:00</li>
              <li className="text-primary font-medium">Plantão de Emergência 24h</li>
              <li className="mt-2 text-xs">© {new Date().getFullYear()} TecGaz Aquecedores Curitiba. Todos os direitos reservados.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
