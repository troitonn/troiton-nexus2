
import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { 
  Building, 
  Users, 
  Award, 
  Shield, 
  Globe, 
  TrendingUp, 
  CheckCircle 
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export function Clients() {
  return (
    <section id="clients" className="py-20 md:py-32 bg-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-troiton-blue/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-troiton-purple/5 blur-3xl"></div>
      </div>

      <div className="troiton-container relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="section-title mb-6">
              Nossos Clientes e Parcerias
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="section-subtitle max-w-3xl mx-auto">
              Construímos relações duradouras com empresas e consumidores que confiam em nossas soluções tecnológicas.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-troiton-dark">Parcerias Estratégicas</h3>
              <p className="text-muted-foreground mb-8">
                A Troiton Connect+ mantém parcerias estratégicas com as principais marcas e fornecedores de tecnologia do mercado, 
                garantindo acesso aos melhores produtos e soluções para nossos clientes.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="h-14 w-14 rounded-lg bg-troiton-blue/10 flex-shrink-0 flex items-center justify-center">
                    <Building size={28} className="text-troiton-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Grandes Corporações</h4>
                    <p className="text-muted-foreground">
                      Atendemos empresas de médio e grande porte com soluções personalizadas que otimizam processos e impulsionam a produtividade.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="h-14 w-14 rounded-lg bg-troiton-purple/10 flex-shrink-0 flex items-center justify-center">
                    <TrendingUp size={28} className="text-troiton-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Startups e Negócios em Crescimento</h4>
                    <p className="text-muted-foreground">
                      Apoiamos o crescimento de empresas emergentes com tecnologia escalável e consultoria especializada.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex-shrink-0 flex items-center justify-center">
                    <Users size={28} className="text-troiton-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Consumidores Exigentes</h4>
                    <p className="text-muted-foreground">
                      Milhares de consumidores confiam em nossos produtos e serviços para suas necessidades tecnológicas diárias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={300}>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award size={20} className="text-troiton-blue" />
                Por que Somos a Escolha dos Clientes
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-troiton-gray/40">
                  <AccordionTrigger className="hover:text-troiton-blue transition-colors py-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-troiton-blue" />
                      <span>Atendimento Excepcional</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Nossa equipe de atendimento é treinada para entender profundamente as necessidades de cada cliente, 
                    oferecendo soluções personalizadas e suporte contínuo. Mantemos um canal de comunicação direto e eficiente, 
                    garantindo respostas rápidas e resoluções efetivas.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-troiton-gray/40">
                  <AccordionTrigger className="hover:text-troiton-purple transition-colors py-4">
                    <div className="flex items-center gap-3">
                      <Shield size={18} className="text-troiton-purple" />
                      <span>Garantia de Qualidade</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Todos os produtos e serviços oferecidos pela Troiton Connect+ passam por rigorosos controles de qualidade. 
                    Trabalhamos apenas com fornecedores confiáveis e oferecemos garantias estendidas, assegurando total 
                    tranquilidade nas suas compras.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-troiton-gray/40">
                  <AccordionTrigger className="hover:text-troiton-blue transition-colors py-4">
                    <div className="flex items-center gap-3">
                      <Globe size={18} className="text-troiton-blue" />
                      <span>Cobertura Nacional</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Com presença em todas as principais regiões do Brasil, conseguimos atender clientes em todo o território nacional. 
                    Nossa logística eficiente garante entregas rápidas e nossa rede de suporte oferece assistência onde quer que você esteja.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b-0">
                  <AccordionTrigger className="hover:text-troiton-purple transition-colors py-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp size={18} className="text-troiton-purple" />
                      <span>Soluções Inovadoras</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Mantemo-nos sempre à frente das tendências tecnológicas, trazendo constantemente novidades e inovações para nossos clientes. 
                    Nosso compromisso com a pesquisa e o desenvolvimento nos permite oferecer soluções que antecipam as necessidades do mercado.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8 pt-6 border-t border-troiton-gray/30">
                <p className="font-medium text-troiton-dark">Opinião dos nossos clientes:</p>
                <div className="flex items-center mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-troiton-dark">4.9/5 - Baseado em mais de 1.200 avaliações</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={500}>
          <div className="mt-20 pt-12 border-t border-troiton-gray/30">
            <h3 className="text-xl font-bold mb-8 text-center">Parceiros e Marcas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[1, 2, 3, 4, 5, 6].map((partner) => (
                <div key={`partner-${partner}`} className="flex items-center justify-center h-20 bg-troiton-gray/10 rounded-lg">
                  <span className="text-lg font-semibold text-troiton-dark/30">Parceiro {partner}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
