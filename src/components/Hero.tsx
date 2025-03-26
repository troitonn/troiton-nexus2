import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { ArrowRight, Cpu, Server, Monitor, Printer, PlugZap, Shield, Database } from "lucide-react";
import { Link } from "react-router-dom";
export function Hero() {
  return <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Enhanced technology-inspired background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full tech-pattern-grid opacity-10"></div>
        <div className="absolute top-0 right-0 w-full h-full circuit-pattern opacity-5"></div>
        
        
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl floating-element" style={{
        animationDelay: "2s"
      }}></div>
      </div>

      <div className="troiton-container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-medium bg-gradient-to-r from-troiton-blue/10 to-troiton-purple/10 rounded-full">
              <Server size={16} className="text-troiton-purple" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                Tecnologia de Ponta para a Transformação Digital
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight max-w-5xl">
              Transformando o Futuro com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple shimmer-effect">
                Tecnologia Inovadora
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções tecnológicas integradas que potencializam negócios e conectam pessoas através de sistemas inteligentes e acessíveis
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="#solutions" className="tech-btn group">
                Explorar Soluções
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/produtos" className="group flex items-center justify-center gap-2 bg-white bg-opacity-50 backdrop-blur-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 px-8 py-3.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow">
                Ver Produtos
                <ArrowRight size={18} className="text-troiton-purple transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={600} className="mt-20 md:mt-28 w-full">
            <div className="glass-card p-8 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Digital circuit pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full tech-pattern-dots"></div>
              </div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                  {/* Tecnologia Empresarial - Enhanced Design */}
                  <div className="flex flex-col modern-card p-8 bg-gradient-to-br from-white to-blue-50/50">
                    <div className="flex items-center mb-6">
                      <div className="tech-icon-container h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center mr-5">
                        <Server size={32} className="text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold">Tecnologia Empresarial</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-8">Equipamentos, periféricos e soluções de infraestrutura completas para empresas de todos os portes</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center p-3 bg-blue-50/50 rounded-lg">
                        <Monitor size={20} className="text-blue-500 mr-3" />
                        <span className="text-sm font-medium">Computadores</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50/50 rounded-lg">
                        <Printer size={20} className="text-blue-500 mr-3" />
                        <span className="text-sm font-medium">Impressoras</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50/50 rounded-lg">
                        <PlugZap size={20} className="text-blue-500 mr-3" />
                        <span className="text-sm font-medium">Periféricos</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50/50 rounded-lg">
                        <Shield size={20} className="text-blue-500 mr-3" />
                        <span className="text-sm font-medium">Segurança</span>
                      </div>
                    </div>
                    
                    <Link to="/produtos" className="group inline-flex items-center text-sm font-medium text-troiton-blue hover:text-troiton-purple mt-auto">
                      Explorar soluções empresariais <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Produtos Inovadores - Enhanced Design */}
                  <div className="flex flex-col modern-card p-8 bg-gradient-to-br from-white to-purple-50/50">
                    <div className="flex items-center mb-6">
                      <div className="tech-icon-container h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center mr-5">
                        <Cpu size={32} className="text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-semibold">Produtos Inovadores</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-8">Dispositivos e equipamentos de última geração com tecnologia avançada e performance superior</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center p-3 bg-purple-50/50 rounded-lg">
                        <Cpu size={20} className="text-purple-500 mr-3" />
                        <span className="text-sm font-medium">Smartphones</span>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50/50 rounded-lg">
                        <Monitor size={20} className="text-purple-500 mr-3" />
                        <span className="text-sm font-medium">Notebooks</span>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50/50 rounded-lg">
                        <Database size={20} className="text-purple-500 mr-3" />
                        <span className="text-sm font-medium">Armazenamento</span>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50/50 rounded-lg">
                        <Shield size={20} className="text-purple-500 mr-3" />
                        <span className="text-sm font-medium">Acessórios</span>
                      </div>
                    </div>
                    
                    <Link to="/produtos" className="group inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue mt-auto">
                      Descobrir produtos <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                
                <div className="tech-divider my-10"></div>
                
                
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>;
}