
import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "./animations/FadeIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Server, Laptop, ShoppingCart, Smartphone, Headphones, Gamepad, ArrowRight, Printer, MonitorSmartphone, CloudCog, Network, Database, ChevronRight } from "lucide-react";

export function Solutions() {
  return <section id="solutions-detail" className="py-20 md:py-32 bg-gradient-to-b from-white to-troiton-gray/20">
      <div className="troiton-container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="section-title mb-6">
              Soluções Tecnológicas Integradas
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="section-subtitle max-w-3xl mx-auto">
              Conectamos empresas e consumidores às melhores soluções tecnológicas, 
              impulsionando a transformação digital e otimizando experiências.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <Tabs defaultValue="b2b" className="w-full">
            <TabsList className="w-full max-w-lg mx-auto flex justify-center mb-12 bg-troiton-gray/30">
              <TabsTrigger value="b2b" className="flex items-center gap-2">
                <Building size={16} /> Soluções Empresariais (B2B)
              </TabsTrigger>
              <TabsTrigger value="b2c" className="flex items-center gap-2">
                <ShoppingCart size={16} /> Varejo (B2C)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="b2b">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-troiton-dark">Soluções Empresariais</h3>
                  <p className="text-muted-foreground mb-6">
                    Equipamentos e serviços especializados para empresas de todos os portes, 
                    com foco em produtividade, eficiência e otimização do ambiente de trabalho.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                        <ChevronRight size={14} className="text-troiton-blue" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Equipe Especializada B2B</h4>
                        <p className="text-sm text-muted-foreground mt-1">Suporte dedicado para ambientes corporativos.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                        <ChevronRight size={14} className="text-troiton-blue" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Soluções Tecnológicas para Empresas</h4>
                        <p className="text-sm text-muted-foreground mt-1">Equipamentos voltados para melhorar a produtividade e a eficiência de empresas de diferentes portes.</p>
                      </div>
                    </div>
                    
                  </div>
                  
                  <Link to="/contato" className="inline-flex items-center gap-2 bg-troiton-blue hover:bg-troiton-blue/90 text-white font-medium px-6 py-3 rounded-lg mt-8 transition-all duration-300 hover:shadow-lg">
                    Fale com um Consultor
                    <ArrowRight size={16} />
                  </Link>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="glass-card p-6 border-t-2 border-troiton-blue hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-troiton-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Printer size={20} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Periféricos e Impressoras</h4>
                      <p className="text-sm text-muted-foreground">
                        Equipamentos de alta qualidade para otimizar o fluxo de trabalho empresarial.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-purple hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Server size={20} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Soluções</h4>
                      <p className="text-sm text-muted-foreground">Oferecemos soluções  corporativa projetadas para otimizar os processos empresariais.</p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-purple hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <CloudCog size={20} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Serviços em Nuvem</h4>
                      <p className="text-sm text-muted-foreground">
                        Soluções escaláveis e seguras para migração e gestão de ambientes cloud.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-blue hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-troiton-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Network size={20} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Mobiliário Corporativo</h4>
                      <p className="text-sm text-muted-foreground">
                        Cadeiras ergonômicas e móveis especializados para ambientes de trabalho.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-gradient-to-br from-troiton-blue to-troiton-purple hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Laptop size={20} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Equipamentos</h4>
                      <p className="text-sm text-muted-foreground">
                        Notebooks, desktops e dispositivos de alto desempenho para equipes profissionais.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-gradient-to-br from-troiton-blue to-troiton-purple hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Database size={20} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Segurança Digital</h4>
                      <p className="text-sm text-muted-foreground">
                        Proteção avançada para dados e sistemas com monitoramento em tempo real.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="b2c">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="glass-card p-6 border-t-2 border-troiton-blue hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-troiton-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Smartphone size={20} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Smartphones</h4>
                      <p className="text-sm text-muted-foreground">
                        Últimos lançamentos com tecnologia de ponta para consumidores exigentes.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-purple hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Laptop size={20} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Notebooks e Tablets</h4>
                      <p className="text-sm text-muted-foreground">
                        Dispositivos portáteis para trabalho, estudo e entretenimento.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-purple hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Headphones size={20} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Áudio & Acessórios</h4>
                      <p className="text-sm text-muted-foreground">
                        Fones, caixas de som e periféricos para melhorar sua experiência digital.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-blue hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-troiton-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Gamepad size={20} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Games & Entretenimento</h4>
                      <p className="text-sm text-muted-foreground">
                        Jogos digitais e acessórios para diversão e lazer.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-gradient-to-br from-troiton-blue to-troiton-purple hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <MonitorSmartphone size={20} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Produtos Smart Home</h4>
                      <p className="text-sm text-muted-foreground">
                        Tecnologia para automação residencial e controle de dispositivos conectados.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-gradient-to-br from-troiton-blue to-troiton-purple hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <ShoppingCart size={20} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Promoções Especiais</h4>
                      <p className="text-sm text-muted-foreground">
                        Descontos exclusivos e ofertas sazonais em produtos selecionados.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-troiton-dark">Soluções para Varejo</h3>
                  <p className="text-muted-foreground mb-6">Uma seleção produtos tecnológicos para o dia a dia, com foco na experiência do usuário e nas últimas tendências do mercado.</p>
                  <p className="text-muted-foreground mb-6">
                    Nossa linha B2C oferece tecnologia acessível e intuitiva para transformar 
                    sua experiência digital, seja em casa, no trabalho ou em movimento.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <ChevronRight size={14} className="text-troiton-purple" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Satisfação</h4>
                        <p className="text-sm text-muted-foreground mt-1">Satisfação garantida </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <ChevronRight size={14} className="text-troiton-purple" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Atendimento Personalizado</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Consultores especializados para recomendar produtos que atendam suas necessidades.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <ChevronRight size={14} className="text-troiton-purple" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Entrega Expressa</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Receba seus produtos rapidamente com nossa logística otimizada.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/produtos" className="inline-flex items-center gap-2 bg-troiton-purple hover:bg-troiton-purple/90 text-white font-medium px-6 py-3 rounded-lg mt-8 transition-all duration-300 hover:shadow-lg">
                    Explorar Produtos
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="mt-12 p-6 glass-card bg-gradient-to-r from-troiton-blue/5 to-troiton-purple/5 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="max-w-lg">
                    <h3 className="text-xl font-bold mb-2">Transforme seu dia a dia com tecnologia intuitiva</h3>
                    <p className="text-sm text-muted-foreground">
                      Descubra como nossos produtos podem tornar sua vida mais conectada, produtiva e divertida.
                    </p>
                  </div>
                  <Link to="/produtos" className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-blue/90 hover:to-troiton-purple/90 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2 whitespace-nowrap">
                    Ver Catálogo Completo
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </section>;
}
