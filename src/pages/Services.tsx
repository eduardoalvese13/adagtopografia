import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crosshair, Plane, ScanLine, MapPin, FileCheck, Layers, ArrowRight, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";

const WHATSAPP_URL = "https://wa.me/553133820978?text=Olá! Gostaria de solicitar um orçamento.";

const serviceDetails = [
  {
    id: "topografia",
    icon: Crosshair,
    title: "Topografia",
    desc: "Serviços topográficos de alta precisão para obras, projetos de engenharia e demarcação de terrenos.",
    items: ["Levantamento planialtimétrico", "Levantamento cadastral", "Acompanhamento de obras", "Demarcação de terrenos", "Cálculo de volumes"],
  },
  {
    id: "aerolevantamento",
    icon: Plane,
    title: "Aerolevantamento com Drones",
    desc: "Mapeamento aéreo com drones profissionais para cobertura de grandes áreas com alta resolução e rapidez.",
    items: ["Mapeamento aéreo", "Ortofotos de alta resolução", "Modelos digitais de superfície", "Inspeção de áreas de difícil acesso"],
  },
  {
    id: "lidar",
    icon: ScanLine,
    title: "Tecnologia LiDAR",
    desc: "Escaneamento a laser tridimensional com alta densidade de dados para os mais exigentes projetos de engenharia.",
    items: ["Levantamento tridimensional", "Escaneamento de terreno", "Alta densidade de dados", "Nuvem de pontos georreferenciada"],
  },
  {
    id: "georreferenciamento",
    icon: MapPin,
    title: "Georreferenciamento",
    desc: "Regularização e georrreferenciamento de imóveis rurais e urbanos conforme legislação vigente.",
    items: ["Imóveis rurais (INCRA)", "Regularização fundiária urbana", "Cadastro técnico multifinalitário", "Retificação de área"],
  },
  {
    id: "regularizacao",
    icon: FileCheck,
    title: "Regularização Fundiária",
    desc: "Suporte técnico completo em processos de regularização territorial, documentação e laudos.",
    items: ["Documentação técnica", "Laudos periciais", "Plantas e memoriais descritivos", "Acompanhamento processual"],
  },
  {
    id: "modelagem",
    icon: Layers,
    title: "Modelagem e Mapeamento",
    desc: "Geração de produtos cartográficos digitais de alta qualidade a partir de dados coletados em campo e por drones.",
    items: ["Ortofotos georreferenciadas", "Nuvens de pontos 3D", "Modelos digitais de terreno (MDT)", "Curvas de nível"],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-hero overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Serviços de topografia" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Nossos Serviços</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Soluções técnicas completas em topografia, aerolevantamento e georreferenciamento para todo o Brasil.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 space-y-20">
          {serviceDetails.map((s, idx) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="accent" size="lg">Solicitar Orçamento <ArrowRight className="w-4 h-4" /></Button>
                </a>
              </div>
              <div className={`bg-surface rounded-2xl aspect-video flex items-center justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <s.icon className="w-24 h-24 text-primary/10" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary-foreground mb-4">Precisa de um serviço especializado?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Entre em contato para um orçamento personalizado.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato"><Button variant="hero" size="xl">Solicitar Orçamento</Button></Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><Button variant="heroOutline" size="xl">Falar no WhatsApp</Button></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
