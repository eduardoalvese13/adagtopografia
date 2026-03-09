import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MapPin, Crosshair, Plane, ScanLine, FileCheck, Layers,
  Cpu, Users, Zap, Globe,
  Building2, HardHat, Mountain, Wheat, LayoutGrid, Landmark, BatteryCharging, Route, Home,
  ArrowRight, Star, ChevronRight
} from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";
import surveyorImage from "@/assets/surveyor-field.jpg";
import terrainImage from "@/assets/terrain-model.jpg";
import droneImage from "@/assets/drone-field.jpg";
import lidarImage from "@/assets/lidar-scan.jpg";

const WHATSAPP_URL = "https://wa.me/553133820978?text=Olá! Gostaria de solicitar um orçamento.";

const services = [
  { icon: Crosshair, title: "Topografia", desc: "Levantamentos planialtimétricos, altimétricos e cadastrais com alta precisão para obras e projetos de engenharia." },
  { icon: Plane, title: "Aerolevantamento com Drones", desc: "Mapeamento aéreo de grandes áreas com rapidez e alta resolução." },
  { icon: ScanLine, title: "Tecnologia LiDAR", desc: "Levantamentos tridimensionais detalhados para engenharia, mineração e infraestrutura." },
  { icon: MapPin, title: "Georreferenciamento", desc: "Regularização de imóveis rurais e urbanos conforme normas técnicas e legais." },
  { icon: FileCheck, title: "Regularização Fundiária", desc: "Suporte técnico em processos de regularização territorial e documentação." },
  { icon: Layers, title: "Modelagem e Mapeamento", desc: "Geração de ortofotos, nuvens de pontos e modelos digitais de terreno." },
];

const differentials = [
  { icon: Cpu, title: "Equipamentos de última geração", desc: "Utilizamos drones, GNSS RTK, LiDAR e equipamentos topográficos de alta precisão." },
  { icon: Users, title: "Equipe técnica especializada", desc: "Profissionais qualificados em topografia, geoprocessamento e engenharia." },
  { icon: Zap, title: "Agilidade na entrega", desc: "Processamento rápido de dados e entrega eficiente dos resultados." },
  { icon: Globe, title: "Atendimento nacional", desc: "Projetos executados em todo o Brasil." },
];

const segments = [
  { icon: Building2, label: "Engenharia Civil" },
  { icon: HardHat, label: "Construção" },
  { icon: Mountain, label: "Mineração" },
  { icon: Wheat, label: "Agronegócio" },
  { icon: LayoutGrid, label: "Loteamentos" },
  { icon: Landmark, label: "Prefeituras" },
  { icon: BatteryCharging, label: "Energia" },
  { icon: Route, label: "Infraestrutura" },
  { icon: Home, label: "Regularização de Imóveis" },
];

const testimonials = [
  { name: "Carlos M.", role: "Engenheiro Civil", text: "A ADAG realizou o levantamento topográfico do nosso empreendimento com rapidez e precisão. Superou as expectativas." },
  { name: "Ana Paula S.", role: "Diretora de Operações", text: "Excelente qualidade no aerolevantamento. Os dados foram fundamentais para o planejamento do nosso projeto de mineração." },
  { name: "Roberto F.", role: "Produtor Rural", text: "O georreferenciamento foi realizado com total profissionalismo. Recomendo fortemente a ADAG." },
];

const portfolioPreview = [
  { img: heroImage, title: "Levantamento Topográfico – Obra Civil", location: "Belo Horizonte, MG" },
  { img: droneImage, title: "Aerolevantamento – Área Rural", location: "Triângulo Mineiro, MG" },
  { img: lidarImage, title: "Escaneamento LiDAR – Mineração", location: "Itabirito, MG" },
  { img: terrainImage, title: "Modelo Digital de Terreno", location: "Interior de SP" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-hero overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Aerolevantamento com drone e equipamentos topográficos" className="w-full h-full object-cover opacity-20" loading="eager" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Crosshair className="w-4 h-4" /> Precisão e Tecnologia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
              Topografia de Alta Precisão para Engenharia, Obras e Regularização de Áreas
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Tecnologia avançada em aerolevantamento, LiDAR, drones e topografia para projetos de engenharia em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/contato">
                <Button variant="hero" size="xl">
                  Solicitar Orçamento <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Quem Somos</span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Referência em topografia e aerolevantamento
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A ADAG Topografia e Soluções Fundiárias é uma empresa especializada em serviços de topografia, aerolevantamento por drones e georreferenciamento. Atuamos em todo o Brasil oferecendo soluções técnicas com precisão, tecnologia e agilidade para projetos de engenharia, regularização fundiária e mapeamentos territoriais.
              </p>
              <ul className="space-y-3">
                {["Tecnologia LiDAR", "Drones profissionais", "Equipe técnica qualificada", "Alta precisão", "Atendimento ágil"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <ChevronRight className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img src={surveyorImage} alt="Topógrafo operando estação total em campo" className="rounded-2xl shadow-card w-full" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card-hover hidden lg:block">
                <p className="text-3xl font-heading font-bold text-accent">15+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Diferenciais</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Por que escolher a ADAG?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((d) => (
              <div key={d.title} className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <d.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Serviços</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Soluções completas em topografia
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button variant="accent" size="lg">
                Ver todos os serviços <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-20 lg:py-28 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Segmentos</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mt-3">
              Atendemos diversos setores
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {segments.map((s) => (
              <div key={s.label} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 text-center hover:bg-primary-foreground/10 transition-colors">
                <s.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <span className="text-sm font-medium text-primary-foreground/90">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Portfólio</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Projetos realizados
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioPreview.map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5 bg-card">
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg">Ver portfólio completo <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Depoimentos</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card p-8 rounded-2xl shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-28 bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={terrainImage} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Precisa de um levantamento topográfico?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Solicite agora um orçamento com nossa equipe técnica. Atendemos em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button variant="hero" size="xl">
                Solicitar Orçamento <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
