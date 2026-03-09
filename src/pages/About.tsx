import { Target, Eye, Heart, Shield, Lightbulb, CheckCircle } from "lucide-react";
import surveyorImage from "@/assets/surveyor-field.jpg";

const values = [
  { icon: Shield, label: "Ética" },
  { icon: Target, label: "Precisão" },
  { icon: Lightbulb, label: "Inovação" },
  { icon: CheckCircle, label: "Responsabilidade" },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-hero text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Sobre a ADAG</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Conheça a história, missão e valores da empresa que é referência em topografia e aerolevantamento.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Nossa História</span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-6">Tradição e inovação em topografia</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundada em Belo Horizonte, a ADAG nasceu com o propósito de oferecer serviços topográficos de excelência, combinando experiência de campo com tecnologia de ponta.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao longo dos anos, investimos continuamente em equipamentos modernos, capacitação técnica e novas metodologias, tornando-nos referência no setor de topografia, aerolevantamento por drones e soluções fundiárias em todo o Brasil.
              </p>
            </div>
            <img src={surveyorImage} alt="Equipe ADAG em campo" className="rounded-2xl shadow-card w-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 mx-auto">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">Missão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Prestar serviços com qualidade e precisão, garantindo satisfação dos clientes e parceiros.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 mx-auto">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">Visão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Ser referência em excelência no mercado de serviços topográficos e aerofotogramétricos.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 mx-auto">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">Valores</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {values.map((v) => (
                  <span key={v.label} className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-medium">
                    <v.icon className="w-3 h-3" /> {v.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
