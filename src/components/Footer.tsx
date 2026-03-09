import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-2">ADAG</h3>
            <p className="text-xs tracking-widest uppercase text-primary-foreground/60 mb-4">Topografia & Engenharia</p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Soluções técnicas com precisão, tecnologia e agilidade para projetos de engenharia em todo o Brasil.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/servicos" className="hover:text-accent transition-colors">Topografia</Link></li>
              <li><Link to="/servicos" className="hover:text-accent transition-colors">Aerolevantamento com Drones</Link></li>
              <li><Link to="/servicos" className="hover:text-accent transition-colors">Tecnologia LiDAR</Link></li>
              <li><Link to="/servicos" className="hover:text-accent transition-colors">Georreferenciamento</Link></li>
              <li><Link to="/servicos" className="hover:text-accent transition-colors">Regularização Fundiária</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/sobre" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfólio</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                Rua Antônio Araújo Penido, 395<br />Belo Horizonte – MG
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                (31) 3382-0978
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                contato@adagtopografia.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} ADAG Topografia e Engenharia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
