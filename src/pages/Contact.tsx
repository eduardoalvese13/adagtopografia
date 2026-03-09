import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/553133820978?text=Olá! Gostaria de solicitar um orçamento.";

const serviceOptions = [
  "Topografia",
  "Aerolevantamento com Drones",
  "Tecnologia LiDAR",
  "Georreferenciamento",
  "Regularização Fundiária",
  "Modelagem e Mapeamento",
  "Outro",
];

const Contact = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", servico: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const msg = `Olá! Meu nome é ${formData.nome}.%0A%0AServiço: ${formData.servico}%0ATelefone: ${formData.telefone}%0AEmail: ${formData.email}%0A%0AMensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/553133820978?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-20 lg:py-28 bg-hero text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Contato</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Entre em contato com nossa equipe técnica para solicitar um orçamento.
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
                    <p className="text-sm text-muted-foreground">(31) 3382-0978</p>
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

              <div className="flex gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="accent" size="lg">WhatsApp</Button>
                </a>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-2xl overflow-hidden shadow-card">
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

            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Solicitar Orçamento</h2>
              {submitted ? (
                <div className="bg-accent/10 rounded-2xl p-12 text-center">
                  <p className="text-lg font-heading font-semibold text-foreground mb-2">Obrigado pelo contato!</p>
                  <p className="text-sm text-muted-foreground">Sua mensagem foi direcionada ao WhatsApp. Nossa equipe retornará em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nome *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">E-mail *</label>
                      <input
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Telefone *</label>
                      <input
                        type="tel"
                        required
                        maxLength={20}
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="(31) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Tipo de Serviço</label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Selecione um serviço</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem *</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Descreva seu projeto ou necessidade..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    Enviar Solicitação <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
