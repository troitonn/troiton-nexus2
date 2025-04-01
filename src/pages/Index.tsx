
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessSegments } from "@/components/BusinessSegments";
import { AboutUs } from "@/components/AboutUs";
import { Solutions } from "@/components/Solutions";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Server, Code, ShieldCheck, Cpu, Building, Users, Smartphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    document.title = "Troiton Business+ | Transformando o Futuro com Tecnologia";
  }, []);
  
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <main className="flex-grow pt-10 md:pt-12">
        <Hero />
        
        <section id="business-segments" className="py-16 md:py-24 relative overflow-hidden">
          {/* Modern tech pattern background */}
          <div className="absolute inset-0 tech-pattern-dots opacity-5"></div>
          <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          
          <div className="troiton-container">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-4">
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple text-xl md:text-2xl lg:text-3xl"></h2>
              </div>
              <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-4"></p>
            </FadeIn>
            
            <div className="mt-8 md:mt-12">
              <BusinessSegments />
            </div>
          </div>
        </section>

        {/* New Section: Troiton Connect+ */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-troiton-blue/5 to-troiton-purple/5 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern-dots opacity-5"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-troiton-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-troiton-purple/10 rounded-full blur-3xl"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-0.5 w-5 md:w-10 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple text-xl md:text-2xl lg:text-3xl">
                  Conheça a Troiton Connect+
                </h2>
                <div className="h-0.5 w-5 md:w-10 bg-gradient-to-r from-troiton-purple to-troiton-blue"></div>
              </div>
              <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-4">
                Conectando você às melhores soluções do mercado
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn delay={200}>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-troiton-dark">Sobre a Troiton Connect+</h3>
                  <p className="text-muted-foreground mb-6">
                    A Troiton Connect+ é uma empresa de varejo que oferece uma ampla variedade de produtos e soluções tecnológicas para o mercado.
                    Nosso objetivo é tornar a experiência de compra mais acessível, prática e segura, conectando nossos clientes às melhores soluções do mercado.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Trabalhamos com transparência e compromisso, sempre buscando oferecer produtos de qualidade a preços competitivos.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                        <Building className="h-5 w-5 text-troiton-blue" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium">Experiência</h4>
                        <p className="text-sm text-muted-foreground mt-1">Atuação constante no mercado de tecnologia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <Users className="h-5 w-5 text-troiton-purple" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium">Alcance</h4>
                        <p className="text-sm text-muted-foreground mt-1">Atendendo clientes em diversas regiões do Brasil</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <Smartphone className="h-5 w-5 text-troiton-purple" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium">Variedade</h4>
                        <p className="text-sm text-muted-foreground mt-1">Amplo catálogo de produtos tecnológicos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                        <Globe className="h-5 w-5 text-troiton-blue" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium">Acessibilidade</h4>
                        <p className="text-sm text-muted-foreground mt-1">Soluções para todos os perfis de clientes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link to="/sobre" className="inline-flex items-center gap-2 bg-gradient-to-r from-troiton-blue to-troiton-purple hover:opacity-90 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                      Conheça mais
                      <Server className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={300} direction="right">
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Troiton Connect+" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        <section id="solutions" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Modern tech grid pattern */}
          <div className="absolute inset-0 tech-pattern-grid opacity-5"></div>
          <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-troiton-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-troiton-purple/5 rounded-full blur-3xl"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-4"></p>
            </FadeIn>
            
            <div className="mt-8 md:mt-12">
              <Solutions />
            </div>
          </div>
        </section>
        
        <section id="about-us" className="py-16 md:py-24 relative overflow-hidden">
          {/* Modern tech-inspired background elements */}
          <div className="absolute inset-0 tech-pattern-dots opacity-5"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-0.5 w-5 md:w-10 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple text-xl md:text-2xl lg:text-3xl">
                  Nossa Trajetória
                </h2>
                <div className="h-0.5 w-5 md:w-10 bg-gradient-to-r from-troiton-purple to-troiton-blue"></div>
              </div>
              <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-4">
                Uma história de inovação e compromisso com a excelência tecnológica
              </p>
            </FadeIn>
            
            <div className="mt-8 md:mt-12 max-w-5xl mx-auto">
              <AboutUs />
            </div>
          </div>
        </section>
        
        
      </main>
      <Footer />
    </div>;
};
export default Index;
