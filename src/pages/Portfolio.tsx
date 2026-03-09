import { useState } from "react";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";
import droneImage from "@/assets/drone-field.jpg";
import lidarImage from "@/assets/lidar-scan.jpg";
import terrainImage from "@/assets/terrain-model.jpg";
import surveyorImage from "@/assets/surveyor-field.jpg";

const categories = ["Todos", "Topografia", "Aerolevantamento", "Georreferenciamento", "LiDAR"];

const projects = [
  { img: heroImage, title: "Levantamento para Obra Residencial", category: "Topografia", location: "Belo Horizonte, MG", desc: "Levantamento planialtimétrico completo para empreendimento residencial de alto padrão." },
  { img: droneImage, title: "Mapeamento Aéreo de Fazenda", category: "Aerolevantamento", location: "Triângulo Mineiro, MG", desc: "Aerolevantamento de 500 hectares para planejamento agrícola." },
  { img: lidarImage, title: "Escaneamento de Mina", category: "LiDAR", location: "Itabirito, MG", desc: "Escaneamento LiDAR para cálculo volumétrico em mineração." },
  { img: terrainImage, title: "MDT para Loteamento", category: "Topografia", location: "Interior de SP", desc: "Modelo digital de terreno para projeto de loteamento urbano." },
  { img: surveyorImage, title: "Georreferenciamento Rural", category: "Georreferenciamento", location: "Norte de MG", desc: "Georreferenciamento de imóvel rural para certificação no INCRA." },
  { img: heroImage, title: "Acompanhamento de Obra Viária", category: "Topografia", location: "Contagem, MG", desc: "Acompanhamento topográfico de obra de duplicação de rodovia." },
];

const Portfolio = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="py-20 lg:py-28 bg-hero text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Portfólio</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Conheça alguns dos projetos realizados pela ADAG.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-heading font-bold text-foreground mt-1 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
