import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Check } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Troiton Connect+ | Contato";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <section className="py-16">
          <div className="troiton-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <FadeIn>
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 text-troiton-dark">
                    Entre em Contato
                  </h1>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="text-lg text-muted-foreground mb-10">
                    Estamos prontos para atender suas necessidades. Envie-nos uma mensagem e nossa equipe 
                    entrará em contato o mais breve possível.
                  </p>
                </FadeIn>

                <div className="space-y-8">
                  <FadeIn delay={300}>
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-troiton-blue/10 flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-troiton-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Nosso Endereço</h3>
                        <p className="text-muted-foreground">
                          Rua Werner Von Siemens, 111 - Lapa de Baixo<br />
                          São Paulo - SP, Brasil
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={400}>
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-troiton-purple/10 flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-troiton-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Telefone</h3>
                        <p className="text-muted-foreground">
                          +55 (11) 95823-1139
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={500}>
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-troiton-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">E-mail</h3>
                        <p className="text-muted-foreground">
                          connect@troiton.com.br
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                <FadeIn delay={600}>
                  <div className="mt-16">
                    <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Segunda a Sexta: 9h às 18h</p>
                      <p>Sábado: 9h às 13h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn direction="left" delay={300}>
                <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
                  <h2 className="text-2xl font-bold mb-8">Envie uma Mensagem</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nome Completo
                        </label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-mail
                        </label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu.email@exemplo.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Telefone
                        </label>
                        <Input 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Assunto
                        </label>
                        <Select onValueChange={handleSelectChange} value={formData.subject}>
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="support">Suporte Técnico</SelectItem>
                            <SelectItem value="sales">Vendas</SelectItem>
                            <SelectItem value="business">Parcerias B2B</SelectItem>
                            <SelectItem value="other">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar?"
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple text-white"
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>Enviar Mensagem</>
                      )}
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
