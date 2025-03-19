
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Smartphone, Laptop, Headphones, Speaker, Watch, Tv, Router } from "lucide-react";

const Products = () => {
  useEffect(() => {
    document.title = "Troiton Connect+ | Produtos";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <section className="py-16">
          <div className="troiton-container">
            <div className="text-center mb-16">
              <FadeIn>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-troiton-dark">
                  Nossos Produtos
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Descubra nossa ampla gama de produtos de tecnologia, desde dispositivos móveis até 
                  soluções para sua casa inteligente. Qualidade e inovação em um só lugar.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={300}>
              <Tabs defaultValue="smartphones" className="w-full">
                <TabsList className="w-full max-w-3xl mx-auto flex flex-wrap justify-center mb-12 bg-troiton-gray/30">
                  <TabsTrigger value="smartphones">Smartphones</TabsTrigger>
                  <TabsTrigger value="computers">Computadores</TabsTrigger>
                  <TabsTrigger value="audio">Áudio</TabsTrigger>
                  <TabsTrigger value="wearables">Wearables</TabsTrigger>
                  <TabsTrigger value="tv">TV & Vídeo</TabsTrigger>
                  <TabsTrigger value="network">Rede & Internet</TabsTrigger>
                </TabsList>

                <TabsContent value="smartphones" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={`smartphone-${item}`} className="feature-card group transition-all duration-300 hover:shadow-md">
                        <div className="aspect-square bg-troiton-gray/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          <Smartphone size={64} className="text-troiton-blue/40" />
                          <div className="absolute inset-0 bg-gradient-to-b from-troiton-blue/0 to-troiton-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Smartphone Premium {item}</h3>
                        <p className="text-muted-foreground mb-4">
                          Experimente o melhor da tecnologia com nosso smartphone de última geração, câmera profissional e bateria de longa duração.
                        </p>
                        <a href="#" className="inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue">
                          Ver detalhes <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="computers" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={`computer-${item}`} className="feature-card group transition-all duration-300 hover:shadow-md">
                        <div className="aspect-square bg-troiton-gray/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          <Laptop size={64} className="text-troiton-purple/40" />
                          <div className="absolute inset-0 bg-gradient-to-b from-troiton-purple/0 to-troiton-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Notebook {item % 2 === 0 ? 'Profissional' : 'Gamer'}</h3>
                        <p className="text-muted-foreground mb-4">
                          {item % 2 === 0 
                            ? 'Ideal para trabalho e produtividade, com processador potente e design ultrafino.' 
                            : 'Projetado para gamers exigentes, com gráficos impressionantes e refrigeração avançada.'}
                        </p>
                        <a href="#" className="inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue">
                          Ver detalhes <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="audio" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={`audio-${item}`} className="feature-card group transition-all duration-300 hover:shadow-md">
                        <div className="aspect-square bg-troiton-gray/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          {item % 2 === 0 ? 
                            <Headphones size={64} className="text-troiton-blue/40" /> : 
                            <Speaker size={64} className="text-troiton-purple/40" />
                          }
                          <div className="absolute inset-0 bg-gradient-to-b from-troiton-blue/0 to-troiton-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item % 2 === 0 ? `Fone de Ouvido Premium ${item}` : `Caixa de Som Bluetooth ${item}`}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {item % 2 === 0 
                            ? 'Cancelamento de ruído ativo e qualidade de som excepcional para uma experiência imersiva.' 
                            : 'Som potente e de alta definição, perfeita para festas e ambientes amplos.'}
                        </p>
                        <a href="#" className="inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue">
                          Ver detalhes <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                {/* More tabs content would go here - abbreviated for brevity */}
                <TabsContent value="wearables" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                      <div key={`wearable-${item}`} className="feature-card group transition-all duration-300 hover:shadow-md">
                        <div className="aspect-square bg-troiton-gray/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          <Watch size={64} className="text-troiton-purple/40" />
                          <div className="absolute inset-0 bg-gradient-to-b from-troiton-purple/0 to-troiton-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Smartwatch Pro {item}</h3>
                        <p className="text-muted-foreground mb-4">
                          Monitore sua saúde, atividades físicas e receba notificações diretamente no seu pulso.
                        </p>
                        <a href="#" className="inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue">
                          Ver detalhes <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="tv" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                      <div key={`tv-${item}`} className="feature-card group transition-all duration-300 hover:shadow-md">
                        <div className="aspect-square bg-troiton-gray/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          <Tv size={64} className="text-troiton-blue/40" />
                          <div className="absolute inset-0 bg-gradient-to-b from-troiton-blue/0 to-troiton-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Smart TV {40 + (item * 15)}" 4K</h3>
                        <p className="text-muted-foreground mb-4">
                          Imagem ultra HD, sistema smart intuitivo e design slim que se adapta a qualquer ambiente.
                        </p>
                        <a href="#" className="inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue">
                          Ver detalhes <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="network" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                      <div key={`network-${item}`} className="feature-card group transition-all duration-300 hover:shadow-md">
                        <div className="aspect-square bg-troiton-gray/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          <Router size={64} className="text-troiton-purple/40" />
                          <div className="absolute inset-0 bg-gradient-to-b from-troiton-purple/0 to-troiton-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item === 1 ? "Roteador Mesh" : item === 2 ? "Repetidor de Sinal" : "Switch Inteligente"}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {item === 1 
                            ? "Cobertura completa para sua casa com tecnologia mesh avançada." 
                            : item === 2 
                              ? "Amplie o sinal Wi-Fi para áreas com conectividade fraca." 
                              : "Gerencie sua rede doméstica com controle inteligente de tráfego."}
                        </p>
                        <a href="#" className="inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue">
                          Ver detalhes <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
