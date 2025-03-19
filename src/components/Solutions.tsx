
import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "./animations/FadeIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building, Server, Database, Laptop, ShoppingCart, 
  Smartphone, Headphones, Gamepad, ArrowRight,
  MonitorSmartphone, Network, CloudCog
} from "lucide-react";

export function Solutions() {
  return (
    <section id="solutions-detail" className="py-20 md:py-32 bg-gradient-to-b from-white to-troiton-gray/20">
      <div className="troiton-container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="section-title mb-6">
              Nossas Soluções Completas
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="section-subtitle max-w-3xl mx-auto">
              Oferecemos soluções tecnológicas abrangentes para empresas e consumidores,
              ajudando-os a se conectarem com as melhores tecnologias disponíveis.
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
                <ShoppingCart size={16} /> Para Consumidores (B2C)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="b2b">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-troiton-dark">Soluções Sob Medida para Empresas</h3>
                  <p className="text-muted-foreground mb-6">
                    A Troiton Connect+ entende os desafios únicos que as empresas enfrentam no mundo digital atual. 
                    Oferecemos um conjunto abrangente de soluções tecnológicas projetadas para 
                    otimizar operações, aumentar a produtividade e impulsionar o crescimento.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Nosso compromisso com a excelência garante que todas as nossas soluções B2B 
                    sejam implementadas com os mais altos padrões de qualidade e suporte contínuo.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Equipe Especializada</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Nossa equipe de especialistas em tecnologia oferece consultoria personalizada para seu negócio.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Suporte Dedicado</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Assistência técnica contínua e canais de comunicação exclusivos para clientes corporativos.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Soluções Escaláveis</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Nossas soluções crescem com o seu negócio, garantindo adaptabilidade às mudanças do mercado.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/contato" className="inline-flex items-center gap-2 bg-troiton-blue hover:bg-troiton-blue/90 text-white font-medium px-6 py-3 rounded-lg mt-8 transition-colors">
                    Fale com um Consultor
                    <ArrowRight size={16} />
                  </Link>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="glass-card p-6 border-t-2 border-troiton-blue">
                      <div className="w-12 h-12 bg-troiton-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Server size={24} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Infraestrutura de TI</h4>
                      <p className="text-sm text-muted-foreground">
                        Equipamentos de rede, servidores, armazenamento e soluções completas de infraestrutura.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-purple">
                      <div className="w-12 h-12 bg-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <CloudCog size={24} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Soluções em Nuvem</h4>
                      <p className="text-sm text-muted-foreground">
                        Migração, gerenciamento e otimização de ambientes cloud para sua empresa.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-purple">
                      <div className="w-12 h-12 bg-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Database size={24} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Gestão de Dados</h4>
                      <p className="text-sm text-muted-foreground">
                        Soluções de armazenamento, backup, análise e proteção de dados empresariais.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-blue">
                      <div className="w-12 h-12 bg-troiton-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Network size={24} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Redes Corporativas</h4>
                      <p className="text-sm text-muted-foreground">
                        Projeto e implementação de redes seguras, estáveis e de alto desempenho.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-gradient-to-br from-troiton-blue to-troiton-purple">
                      <div className="w-12 h-12 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Laptop size={24} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Equipamentos</h4>
                      <p className="text-sm text-muted-foreground">
                        Fornecimento de computadores, servidores e dispositivos para sua equipe.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-gradient-to-br from-troiton-blue to-troiton-purple">
                      <div className="w-12 h-12 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <MonitorSmartphone size={24} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Consultoria TI</h4>
                      <p className="text-sm text-muted-foreground">
                        Orientação estratégica para transformação digital e melhoria de processos.
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
                    <div className="glass-card p-6 border-t-2 border-troiton-blue">
                      <div className="w-12 h-12 bg-troiton-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Smartphone size={24} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Dispositivos Móveis</h4>
                      <p className="text-sm text-muted-foreground">
                        Smartphones, tablets e acessórios das principais marcas do mercado.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-purple">
                      <div className="w-12 h-12 bg-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Laptop size={24} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Computadores</h4>
                      <p className="text-sm text-muted-foreground">
                        Notebooks, desktops e periféricos para trabalho, estudo e entretenimento.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-purple">
                      <div className="w-12 h-12 bg-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Headphones size={24} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Áudio & Vídeo</h4>
                      <p className="text-sm text-muted-foreground">
                        Fones de ouvido, caixas de som, TVs e equipamentos de home theater.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-troiton-blue">
                      <div className="w-12 h-12 bg-troiton-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Gamepad size={24} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Games & Entretenimento</h4>
                      <p className="text-sm text-muted-foreground">
                        Consoles, jogos digitais e acessórios para gamers de todos os níveis.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-gradient-to-br from-troiton-blue to-troiton-purple">
                      <div className="w-12 h-12 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <Network size={24} className="text-troiton-purple" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Casa Inteligente</h4>
                      <p className="text-sm text-muted-foreground">
                        Dispositivos conectados para automação e controle da sua residência.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-t-2 border-gradient-to-br from-troiton-blue to-troiton-purple">
                      <div className="w-12 h-12 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-lg flex items-center justify-center mb-4">
                        <ShoppingCart size={24} className="text-troiton-blue" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Acessórios</h4>
                      <p className="text-sm text-muted-foreground">
                        Complementos e periféricos para melhorar sua experiência tecnológica.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-troiton-dark">Tecnologia para Consumidores</h3>
                  <p className="text-muted-foreground mb-6">
                    Na Troiton Connect+, selecionamos cuidadosamente os melhores produtos tecnológicos 
                    para atender às necessidades dos consumidores modernos. Nossa variedade de produtos 
                    B2C combina qualidade, inovação e funcionalidade.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Nosso objetivo é oferecer uma experiência de compra simplificada com produtos 
                    que realmente fazem a diferença no dia a dia, seja para trabalho, estudo ou lazer.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Garantia Estendida</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Proteção adicional para seus dispositivos com nossas opções de garantia estendida.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Atendimento Personalizado</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Consultores especializados para ajudar na escolha dos produtos ideais para você.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Entrega Rápida</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Receba seus produtos em casa com rapidez e segurança através de nossa logística eficiente.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/produtos" className="inline-flex items-center gap-2 bg-troiton-purple hover:bg-troiton-purple/90 text-white font-medium px-6 py-3 rounded-lg mt-8 transition-colors">
                    Explorar Produtos
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}
