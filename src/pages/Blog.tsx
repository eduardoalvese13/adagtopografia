import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "o-que-e-levantamento-topografico",
    title: "O que é levantamento topográfico e para que serve?",
    excerpt: "Entenda o que é um levantamento topográfico, quais os tipos existentes e quando ele é necessário para o seu projeto de engenharia.",
    date: "2026-03-01",
    category: "Topografia",
  },
  {
    slug: "aerolevantamento-com-drones",
    title: "Para que serve o aerolevantamento com drones?",
    excerpt: "Descubra como os drones estão revolucionando o mapeamento aéreo e quais as vantagens para a sua obra ou projeto.",
    date: "2026-02-15",
    category: "Aerolevantamento",
  },
  {
    slug: "diferenca-topografia-georreferenciamento",
    title: "Diferença entre topografia e georreferenciamento",
    excerpt: "Muitos confundem esses dois termos. Entenda as diferenças e quando cada serviço é necessário.",
    date: "2026-02-01",
    category: "Georreferenciamento",
  },
  {
    slug: "como-funciona-lidar",
    title: "Como funciona a tecnologia LiDAR?",
    excerpt: "Saiba como o LiDAR cria modelos 3D precisos do terreno e suas aplicações em engenharia e mineração.",
    date: "2026-01-15",
    category: "LiDAR",
  },
  {
    slug: "quando-terreno-precisa-levantamento",
    title: "Quando um terreno precisa de levantamento topográfico?",
    excerpt: "Conheça as situações em que um levantamento topográfico é obrigatório ou recomendado.",
    date: "2026-01-01",
    category: "Topografia",
  },
];

const Blog = () => {
  return (
    <>
      <section className="py-20 lg:py-28 bg-hero text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Blog</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Artigos técnicos sobre topografia, aerolevantamento, LiDAR e georreferenciamento.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-primary/5 flex items-center justify-center">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </div>
                  <h2 className="font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-sm font-medium text-accent inline-flex items-center gap-1">
                    Ler mais <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
