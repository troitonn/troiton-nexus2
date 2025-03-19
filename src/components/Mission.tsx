
import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Lightbulb, Heart, Users, Award, Rocket } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-troiton-blue/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-troiton-purple/5 blur-3xl"></div>
      </div>

      <div className="troiton-container relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="section-title mb-6">
              Nossa Missão, Visão e Valores
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="section-subtitle max-w-3xl mx-auto">
              Conheça os princípios que guiam nossa jornada e moldam nosso compromisso com a tecnologia e inovação.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="w-full max-w-xl mx-auto flex justify-center mb-12 bg-troiton-gray/30">
              <TabsTrigger value="mission" className="flex items-center gap-2">
                <Target size={16} /> Missão
              </TabsTrigger>
              <TabsTrigger value="vision" className="flex items-center gap-2">
                <Lightbulb size={16} /> Visão
              </TabsTrigger>
              <TabsTrigger value="values" className="flex items-center gap-2">
                <Heart size={16} /> Valores
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mission">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="glass-card p-6 border-l-4 border-troiton-blue">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <span className="inline-block h-8 w-8 rounded-lg bg-troiton-blue/10 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                            <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10Z"></path>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </span>
                        Nossa Missão
                      </h3>
                      <p className="text-muted-foreground">
                        Tornar a tecnologia mais acessível por meio de inovação, eficiência e soluções de alta qualidade que atendam tanto às empresas quanto aos consumidores finais.
                      </p>
                    </div>

                    <div className="glass-card p-6 border-l-4 border-troiton-purple">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <span className="inline-block h-8 w-8 rounded-lg bg-troiton-purple/10 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                            <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                            <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M12 12v6"></path>
                            <path d="M9 15h6"></path>
                          </svg>
                        </span>
                        Nosso Propósito
                      </h3>
                      <p className="text-muted-foreground">
                        Construir uma ponte entre a tecnologia e os usuários, garantindo qualidade, preços competitivos e uma experiência de compra perfeita.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Objetivos Principais</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="ml-3 text-sm">Democratizar o acesso à tecnologia</span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="ml-3 text-sm">Oferecer soluções integradas</span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="ml-3 text-sm">Conectar pessoas e empresas</span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="ml-3 text-sm">Impulsionar a transformação digital</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 blur-3xl"></div>
                  <div className="relative z-10 glass-card p-1 rounded-xl bg-white/80 shadow-lg">
                    <div className="glass-card p-8 md:p-10 rounded-lg bg-gradient-to-br from-white to-troiton-gray/20 border-none overflow-hidden">
                      <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center mb-6 shadow-md transform transition-transform duration-300 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3"></path>
                          <circle cx="18" cy="18" r="3"></circle>
                          <path d="m19.9 17.1-.4.4c-.4.3-.8.3-1.1 0l-.4-.4c-.3-.3-.3-.8 0-1.1l.4-.4c.3-.3.7-.3 1.1 0l.4.4c.3.4.3.8 0 1.1Z"></path>
                          <path d="m21.7 18.9-.4.4c-.4.3-.8.3-1.1 0l-.4-.4c-.3-.3-.3-.8 0-1.1l.4-.4c.3-.3.7-.3 1.1 0l.4.4c.3.4.3.8 0 1.1Z"></path>
                          <path d="m10.5 20 2.8-3.5c.4-.4.5-1.1.2-1.6l-1-1.6c-.1-.3-.3-.5-.5-.6L9.6 12"></path>
                        </svg>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3">Por que nos escolher?</h3>
                        <p className="text-muted-foreground">
                          Na Troiton Connect+, nos diferenciamos por nosso compromisso inabalável com a qualidade, inovação e satisfação do cliente.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-base font-medium">Soluções Completas</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Todas as suas necessidades de tecnologia em um só lugar, de produtos empresariais a produtos para consumidores.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-base font-medium">Garantia de Qualidade</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Apenas os melhores produtos e serviços chegam às nossas prateleiras.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex items-center justify-center mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-base font-medium">Suporte Especializado</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Nossa equipe de especialistas está sempre pronta para ajudá-lo com qualquer dúvida.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vision">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 blur-3xl"></div>
                    <div className="relative z-10 glass-card p-1 rounded-xl bg-white/80 shadow-lg">
                      <div className="glass-card p-8 md:p-10 rounded-lg bg-gradient-to-br from-white to-troiton-gray/20 border-none overflow-hidden">
                        <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center mb-6 shadow-md transform transition-transform duration-300 hover:scale-110">
                          <Lightbulb size={32} className="text-white" />
                        </div>

                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-3">Nossa Visão de Futuro</h3>
                          <p className="text-muted-foreground">
                            Aspiramos ser reconhecidos como líderes em soluções tecnológicas integradas, criando um impacto positivo na sociedade através da inovação.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                              <Rocket size={14} className="text-troiton-blue" />
                            </div>
                            <div className="ml-3">
                              <h4 className="text-base font-medium">Pioneirismo</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Estar sempre à frente, identificando tendências e antecipando necessidades.
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                              <Users size={14} className="text-troiton-purple" />
                            </div>
                            <div className="ml-3">
                              <h4 className="text-base font-medium">Inclusão Digital</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Ampliar o acesso à tecnologia para todos os públicos e regiões.
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex items-center justify-center mt-0.5">
                              <Award size={14} className="text-troiton-purple" />
                            </div>
                            <div className="ml-3">
                              <h4 className="text-base font-medium">Excelência</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Definir padrões de qualidade inigualáveis em todos os nossos produtos e serviços.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="space-y-6">
                    <div className="glass-card p-6 border-l-4 border-troiton-purple">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <span className="inline-block h-8 w-8 rounded-lg bg-troiton-purple/10 flex items-center justify-center mr-3">
                          <Lightbulb size={18} className="text-troiton-purple" />
                        </span>
                        Visão 2030
                      </h3>
                      <p className="text-muted-foreground">
                        Ser a principal referência em conectividade tecnológica no mercado brasileiro, 
                        promovendo a transformação digital de empresas e indivíduos através de 
                        soluções inovadoras e sustentáveis.
                      </p>
                    </div>
                    
                    <div className="glass-card p-6 border-l-4 border-troiton-blue">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <span className="inline-block h-8 w-8 rounded-lg bg-troiton-blue/10 flex items-center justify-center mr-3">
                          <Target size={18} className="text-troiton-blue" />
                        </span>
                        Objetivos Estratégicos
                      </h3>
                      <ul className="mt-4 space-y-3">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-1">
                            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                          </div>
                          <span className="ml-3 text-sm">Expandir nossa presença para todas as regiões do Brasil até 2025</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-1">
                            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                          </div>
                          <span className="ml-3 text-sm">Tornar-se referência em soluções de tecnologia sustentável</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-1">
                            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                          </div>
                          <span className="ml-3 text-sm">Desenvolver parcerias estratégicas com os principais players globais</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-1">
                            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                          </div>
                          <span className="ml-3 text-sm">Investir continuamente em pesquisa e desenvolvimento de novas tecnologias</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="values">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-troiton-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart size={28} className="text-troiton-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Integridade</h3>
                  <p className="text-muted-foreground">
                    Agimos com transparência e honestidade em todas as nossas relações, 
                    mantendo os mais altos padrões éticos em nossas práticas comerciais.
                  </p>
                </div>
                
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-troiton-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users size={28} className="text-troiton-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Colaboração</h3>
                  <p className="text-muted-foreground">
                    Valorizamos o trabalho em equipe e as parcerias, acreditando que 
                    os melhores resultados surgem quando trabalhamos juntos.
                  </p>
                </div>
                
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket size={28} className="text-troiton-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Inovação</h3>
                  <p className="text-muted-foreground">
                    Estamos sempre em busca de novas ideias e soluções, impulsionando 
                    a criatividade e abraçando a mudança como caminho para o crescimento.
                  </p>
                </div>
                
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-troiton-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award size={28} className="text-troiton-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Excelência</h3>
                  <p className="text-muted-foreground">
                    Buscamos a qualidade superior em tudo o que fazemos, 
                    desafiando-nos constantemente a superar expectativas.
                  </p>
                </div>
                
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-troiton-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users size={28} className="text-troiton-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Foco no Cliente</h3>
                  <p className="text-muted-foreground">
                    Colocamos os clientes no centro de nossas decisões, 
                    dedicando-nos a entender e atender suas necessidades com soluções personalizadas.
                  </p>
                </div>
                
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb size={28} className="text-troiton-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Responsabilidade</h3>
                  <p className="text-muted-foreground">
                    Assumimos compromisso com o desenvolvimento sustentável e 
                    com o impacto positivo de nossas ações na sociedade e no meio ambiente.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}
