
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessSegments } from "@/components/BusinessSegments";
import { AboutUs } from "@/components/AboutUs";
import { Solutions } from "@/components/Solutions";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Server, Code, Globe, ShieldCheck } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Troiton Connect+ | Transformando o Futuro com Tecnologia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="business-segments" className="py-16 md:py-20 bg-gradient-to-b from-white to-troiton-gray/20 relative overflow-hidden">
          {/* Digital circuit background pattern */}
          <div className="absolute inset-0 tech-pattern-dots opacity-5"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
          
          <div className="troiton-container">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                  Segmentos de Atuação
                </h2>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                Soluções tecnológicas especializadas para cada setor do mercado
              </p>
            </FadeIn>
            
            <div className="mt-8">
              <BusinessSegments />
            </div>
          </div>
        </section>
        
        <section id="solutions" className="py-16 md:py-20 bg-gradient-to-br from-troiton-blue/5 to-troiton-purple/5 relative overflow-hidden">
          {/* Animated tech grid pattern */}
          <div className="absolute inset-0 tech-pattern-grid opacity-10"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                  Soluções Integradas
                </h2>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                Tecnologias que transformam negócios e elevam experiências digitais
              </p>
            </FadeIn>
            
            <div className="mt-8">
              <Solutions />
            </div>
          </div>
        </section>
        
        <section id="about-us" className="py-16 md:py-20 relative overflow-hidden">
          {/* Tech-inspired background elements */}
          <div className="absolute inset-0 tech-pattern-dots opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-2xl"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                  Nossa Trajetória
                </h2>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                Uma história de inovação e compromisso com a excelência tecnológica
              </p>
            </FadeIn>
            
            <div className="mt-8 max-w-5xl mx-auto">
              <AboutUs />
            </div>
          </div>
        </section>
        
        <section id="clients" className="py-16 md:py-20 bg-gradient-to-br from-troiton-blue/5 to-troiton-purple/5 relative overflow-hidden">
          {/* Digital circuit background elements */}
          <div className="absolute inset-0 tech-pattern-grid opacity-10"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                  Empresas que Confiam em Nós
                </h2>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                Parceiros de negócios que transformaram suas operações com nossas soluções
              </p>
            </FadeIn>
            
            <div className="mt-8">
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
