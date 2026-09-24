import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Flame,
  CalendarCheck,
  Wrench,
  Fuel,
  UserCheck,
  Gauge,
  Activity,
  Wind,
  Ambulance,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5541984968570";

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  category: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "instalacao",
    iconName: "Flame",
    title: "Instalação de Aquecedores",
    category: "Residencial & Comercial",
    description: "Instalação técnica certificada segundo a norma NBR 13103 da ABNT, com teste de estanqueidade e regulagem inicial.",
  },
  {
    id: "manutencao",
    iconName: "CalendarCheck",
    title: "Manutenção Preventiva",
    category: "Revisão Periódica",
    description: "Higienização completa dos queimadores, desoxidação de contatos, regulagem da chama e inspeção da exaustão.",
  },
  {
    id: "conserto",
    iconName: "Wrench",
    title: "Conserto e Reparo Rápido",
    category: "Diagnóstico Rápido",
    description: "Solução imediata para falhas no acendimento, substituição de membranas, sensores e correção de códigos de erro.",
  },
  {
    id: "conversao",
    iconName: "Fuel",
    title: "Conversão de Gás (GN / GLP)",
    category: "Adaptação de Combustível",
    description: "Conversão de gás natural (GN) para gás de botijão (GLP) ou vice-versa, com substituição de injetores e teste de vazamento.",
  },
  {
    id: "pressurizacao",
    iconName: "Gauge",
    title: "Sistemas de Pressurização",
    category: "Pressão de Água",
    description: "Instalação e reparo de pressurizadores Rowa, Lorenzetti e Inova para garantir ducha com fluxo forte e constante.",
  },
  {
    id: "laudo",
    iconName: "Activity",
    title: "Teste de Estanqueidade & Laudo",
    category: "Norma de Segurança",
    description: "Inspeção completa da tubulação de gás com manômetro digital e emissão de laudo técnico para condomínios e imóveis.",
  },
  {
    id: "emergencia",
    iconName: "Ambulance",
    title: "Atendimento de Emergência 24h",
    category: "Prioridade Total",
    description: "Suporte técnico imediato em Curitiba para vazamentos de gás, falhas de aquecimento e chamados urgentes.",
  },
  {
    id: "exaustao",
    iconName: "Wind",
    title: "Adequação de Duto de Exaustão",
    category: "Segurança de Exaustão",
    description: "Troca e adequação de chaminés e dutos de exaustão de monóxido de carbono conforme diretrizes de segurança.",
  },
  {
    id: "visita",
    iconName: "UserCheck",
    title: "Visita Técnica em Curitiba",
    category: "Avaliação Presencial",
    description: "Diagnóstico presencial transparente com orçamento detalhado sem taxas escondidas em toda a região.",
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  CalendarCheck,
  Wrench,
  Fuel,
  UserCheck,
  Gauge,
  Activity,
  Wind,
  Ambulance,
};

export function ServicesCarousel() {
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [autoplayPlugin]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full py-4">
      {/* Carousel Outer Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Flame;
            const waLink = `${WHATSAPP_BASE}?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20${encodeURIComponent(
              service.title
            )}`;

            return (
              <div
                key={service.id}
                className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Glowing Top Accent Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Header: Icon + Category Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-inner shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <div className="mt-6 border-t border-border/60 pt-5">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-between rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Solicitar Orçamento
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls & Pagination */}
      <div className="mt-8 flex items-center justify-between px-2">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-primary shadow-sm shadow-primary/50"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Ir para o slide de serviço ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous & Next Arrow Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-md backdrop-blur transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
            aria-label="Serviço anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-md backdrop-blur transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
            aria-label="Próximo serviço"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
