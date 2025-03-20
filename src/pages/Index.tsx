
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessSegments } from "@/components/BusinessSegments";
import { Mission } from "@/components/Mission";
import { Solutions } from "@/components/Solutions";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/animations/FadeIn";

const Index = () => {
  useEffect(() => {
    document.title = "Troiton Connect+ | Sua Ponte para a Tecnologia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="business-segments" className="py-16 md:py-24 bg-gradient-to-b from-white to-troiton-gray/20">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center">Nossos Segmentos de Negócio</h2>
              <p className="section-subtitle text-center mx-auto">
                Soluções completas de tecnologia para diferentes públicos em um só lugar
              </p>
            </FadeIn>
            
            <div className="mt-12">
              <BusinessSegments />
            </div>
          </div>
        </section>
        
        <section id="solutions" className="py-16 md:py-24">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center">Nossas Soluções</h2>
              <p className="section-subtitle text-center mx-auto">
                Tecnologia de ponta para empresas e consumidores finais
              </p>
            </FadeIn>
            
            <div className="mt-12">
              <Solutions />
            </div>
          </div>
        </section>
        
        <section id="mission" className="py-16 md:py-24 bg-gradient-to-b from-white to-troiton-gray/20">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center">Sobre Nós</h2>
              <p className="section-subtitle text-center mx-auto">
                Conheça mais sobre a Troiton Connect+ e nossos valores
              </p>
            </FadeIn>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <Tabs defaultValue="mission" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="mission">Missão</TabsTrigger>
                  <TabsTrigger value="vision">Visão</TabsTrigger>
                  <TabsTrigger value="values">Valores</TabsTrigger>
                </TabsList>
                
                <TabsContent value="mission" className="p-6 rounded-lg bg-white shadow-sm">
                  <Mission />
                </TabsContent>
                
                <TabsContent value="vision" className="p-6 rounded-lg bg-white shadow-sm">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-troiton-dark">Nossa Visão</h3>
                    <p className="text-muted-foreground">
                      Ser reconhecida como a principal ponte entre pessoas e tecnologia, criando um ecossistema onde empresas 
                      e consumidores finais encontram as melhores soluções tecnológicas de forma acessível e intuitiva.
                    </p>
                    <p className="text-muted-foreground">
                      Buscamos liderar o mercado de tecnologia através da inovação constante, 
                      mantendo nosso compromisso com a qualidade e a satisfação completa de nossos clientes.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="values" className="p-6 rounded-lg bg-white shadow-sm">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-troiton-dark">Nossos Valores</h3>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="bg-troiton-gray/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg text-troiton-blue">Inovação</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Buscamos constantemente novas tecnologias e métodos para melhorar nossas soluções.
                        </p>
                      </div>
                      
                      <div className="bg-troiton-gray/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg text-troiton-purple">Qualidade</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Mantemos os mais altos padrões em todos os produtos e serviços que oferecemos.
                        </p>
                      </div>
                      
                      <div className="bg-troiton-gray/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg text-troiton-blue">Acessibilidade</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Trabalhamos para tornar a tecnologia acessível a todos, independentemente do conhecimento técnico.
                        </p>
                      </div>
                      
                      <div className="bg-troiton-gray/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg text-troiton-purple">Confiabilidade</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Cumprimos nossas promessas e construímos relacionamentos duradouros baseados na confiança.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        <section id="clients" className="py-16 md:py-24">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center">Nossos Clientes</h2>
              <p className="section-subtitle text-center mx-auto">
                Empresas e organizações que confiam na Troiton Connect+
              </p>
            </FadeIn>
            
            <div className="mt-12">
              <Clients />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
