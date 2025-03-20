
import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-troiton-purple/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-troiton-blue/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-yellow-500/5 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="troiton-container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-troiton-blue/10 to-troiton-purple/10 rounded-full">
              <Sparkles size={16} className="text-troiton-purple" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                Tecnologia a um clique de distância
              </span>
              <Sparkles size={16} className="text-troiton-blue" />
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
                href="#products" 
                className="group flex items-center justify-center gap-2 bg-troiton-gray hover:bg-troiton-gray/80 px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Ver Produtos
                <ArrowRight size={18} className="text-troiton-purple transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={600} className="mt-16 md:mt-24 w-full">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                  <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-400/20 transition-all duration-300">
                      <Zap size={30} className="text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Soluções Empresariais</h3>
                  </div>

                  <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-400/20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.825-4.5 2.1C10.832 3.825 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Produtos para Consumidores</h3>
                  </div>

                  <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400/20 to-teal-600/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-400/20 transition-all duration-300">
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
