
import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { ArrowRight, Cpu, Zap, Shield } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* Background elements - tech-inspired patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full tech-pattern-grid opacity-20"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-troiton-purple/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-troiton-blue/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="troiton-container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-troiton-blue/10 to-troiton-purple/10 rounded-full">
              <Cpu size={16} className="text-troiton-purple" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                Tecnologia a um clique de distância
              </span>
              <Cpu size={16} className="text-troiton-blue" />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight max-w-5xl">
              Conectando Pessoas com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple animate-pulse">
                Tecnologia
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a 
                href="#solutions" 
                className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 button-effect"
              >
                Explorar Soluções
              </a>
              <a 
                href="/produtos" 
                className="group flex items-center justify-center gap-2 bg-troiton-gray hover:bg-troiton-gray/80 px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Ver Produtos
                <ArrowRight size={18} className="text-troiton-purple transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={600} className="mt-16 md:mt-24 w-full">
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Digital circuit pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full tech-pattern-dots"></div>
              </div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                  <div className="flex flex-col items-center hover-lift hover-glow">
                    <div className="tech-icon-container h-16 w-16 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center mb-4">
                      <Zap size={30} className="text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Soluções Empresariais</h3>
                  </div>

                  <div className="flex flex-col items-center hover-lift hover-glow">
                    <div className="tech-icon-container h-16 w-16 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center mb-4">
                      <Cpu size={30} className="text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Produtos para Consumidores</h3>
                  </div>

                  <div className="flex flex-col items-center hover-lift hover-glow">
                    <div className="tech-icon-container h-16 w-16 rounded-full bg-gradient-to-br from-green-400/20 to-teal-600/20 flex items-center justify-center mb-4">
                      <Shield size={30} className="text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Jogos Digitais</h3>
                  </div>
                </div>
                
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10"></div>
                
                <div className="flex justify-center items-center gap-10 md:gap-16">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-troiton-blue to-troiton-purple">8+</div>
                    <div className="text-sm text-gray-500">Anos de Experiência</div>
                  </div>
                  
                  <div className="h-10 w-px bg-gray-200"></div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-troiton-blue to-troiton-purple">5000+</div>
                    <div className="text-sm text-gray-500">Clientes Satisfeitos</div>
                  </div>
                  
                  <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
                  
                  <div className="text-center hidden md:block">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-troiton-blue to-troiton-purple">50+</div>
                    <div className="text-sm text-gray-500">Parceiros</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
