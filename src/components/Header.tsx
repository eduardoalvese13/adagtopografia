import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Serviços", path: "/servicos" },
  { label: "Sobre", path: "/sobre" },
  { label: "Portfólio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-bold text-primary tracking-tight">ADAG</span>
              <span className="text-[10px] font-body text-muted-foreground tracking-widest uppercase -mt-1">Topografia & Engenharia</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-accent/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:3133820978" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              (31) 3382-0978
            </a>
            <a
              href="https://wa.me/553133820978?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent-gradient text-accent-foreground shadow-button hover:opacity-90 font-heading font-semibold">
                Solicitar Orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-accent/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/553133820978?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-accent-gradient text-accent-foreground shadow-button font-heading font-semibold">
                Solicitar Orçamento
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
