
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessSegments } from "@/components/BusinessSegments";
import { AboutUs } from "@/components/AboutUs";
import { Solutions } from "@/components/Solutions";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Server, Code, ShieldCheck, Cpu } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Troiton Business+ | Transformando o Futuro com Tecnologia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="business-segments" className="py-20 md:py-28 relative overflow-hidden">
          {/* Modern tech pattern background */}
          <div className="absolute inset-0 tech-pattern-dots opacity-5"></div>
          <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          
          <div className="troiton-container">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-0.5 w-10 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                  Segmentos de Atuação
                </h2>
                <div className="h-0.5 w-10 bg-gradient-to-r from-troiton-purple to-troiton-blue"></div>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Soluções tecnológicas especializadas para cada setor do mercado
              </p>
            </FadeIn>
            
            <div className="mt-12">
              <BusinessSegments />
            </div>
          </div>
        </section>
        
        <section id="solutions" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Modern tech grid pattern */}
          <div className="absolute inset-0 tech-pattern-grid opacity-5"></div>
          <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-troiton-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-troiton-purple/5 rounded-full blur-3xl"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-0.5 w-10 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                  Soluções Integradas
                </h2>
                <div className="h-0.5 w-10 bg-gradient-to-r from-troiton-purple to-troiton-blue"></div>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Tecnologias que transformam negócios e elevam experiências digitais
              </p>
            </FadeIn>
            
            <div className="mt-12">
              <Solutions />
            </div>
          </div>
        </section>
        
        <section id="about-us" className="py-20 md:py-28 relative overflow-hidden">
          {/* Modern tech-inspired background elements */}
          <div className="absolute inset-0 tech-pattern-dots opacity-5"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-0.5 w-10 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                  Nossa Trajetória
                </h2>
                <div className="h-0.5 w-10 bg-gradient-to-r from-troiton-purple to-troiton-blue"></div>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Uma história de inovação e compromisso com a excelência tecnológica
              </p>
            </FadeIn>
            
            <div className="mt-12 max-w-5xl mx-auto">
              <AboutUs />
            </div>
          </div>
        </section>
        
        <section id="clients" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Modern tech-inspired background elements */}
          <div className="absolute inset-0 tech-pattern-grid opacity-5"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-troiton-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-troiton-purple/5 rounded-full blur-3xl"></div>
          
          <div className="troiton-container relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-0.5 w-10 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
                <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                  Empresas que Confiam em Nós
                </h2>
                <div className="h-0.5 w-10 bg-gradient-to-r from-troiton-purple to-troiton-blue"></div>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Parceiros de negócios que transformaram suas operações com nossas soluções
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
