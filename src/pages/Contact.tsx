import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";

const whatsappButtons = [
  {
    label: "Solicitar Orçamento",
    msg: "Olá! Gostaria de solicitar um orçamento para um projeto.",
    variant: "hero" as const,
  },
  {
    label: "Dúvidas sobre Serviços",
    msg: "Olá! Gostaria de tirar dúvidas sobre os serviços da ADAG.",
    variant: "accent" as const,
  },
  {
    label: "Informações sobre Prazos e Entregas",
    msg: "Olá! Gostaria de informações sobre prazos e entregas de projetos.",
    variant: "outline" as const,
  },
  {
    label: "Falar com a Equipe Técnica",
    msg: "Olá! Gostaria de falar com a equipe técnica da ADAG.",
    variant: "outline" as const,
  },
];

const Contact = () => {
  return (
    <>
      <section className="py-20 lg:py-28 bg-hero text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Contato</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Entre em contato com nossa equipe técnica pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Informações de Contato</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Endereço</h3>
                    <p className="text-sm text-muted-foreground">Rua Antônio Araújo Penido, 395<br />Belo Horizonte – MG</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Telefone</h3>
                    <p className="text-sm text-muted-foreground">+55 31 8471-4692</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">E-mail</h3>
                    <p className="text-sm text-muted-foreground">contato@adagtopografia.com.br</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mb-10">
                <a
                  href="https://www.linkedin.com/company/adag-topografia-e-engenharia/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-primary" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/adag_topografia_engenharia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-primary" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9!2d-43.94!3d-19.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzEyLjAiUyA0M8KwNTYnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização ADAG Topografia"
                />
              </div>
            </div>

            {/* WhatsApp CTAs */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Fale conosco pelo WhatsApp</h2>
              <p className="text-muted-foreground mb-8">
                Escolha o assunto e inicie uma conversa diretamente com nossa equipe.
              </p>
              <div className="space-y-4">
                {whatsappButtons.map((btn) => (
                  <a
                    key={btn.label}
                    href={`https://wa.me/5531984714692?text=${encodeURIComponent(btn.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant={btn.variant} size="xl" className="w-full justify-between">
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        {btn.label}
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                ))}
              </div>

              <div className="mt-12 bg-accent/10 rounded-2xl p-8 text-center">
                <MessageCircle className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">Atendimento rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Nossa equipe responde em horário comercial de segunda a sexta-feira, das 8h às 18h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
