
import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "./animations/FadeIn";
import { Building, ShoppingCart, Package, Gamepad, ArrowRight, Server, Monitor, Printer, Cpu } from "lucide-react";

export function BusinessSegments() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-troiton-gray/30">
      <div className="troiton-container">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="section-title max-w-3xl">
              Soluções Completas em Tecnologia, Tudo em Um Só Lugar
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="section-subtitle mx-auto">
              Construímos a ponte entre a tecnologia de ponta e os usuários, oferecendo soluções integradas tanto para empresas quanto para consumidores finais.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          <FadeIn direction="up" delay={0}>
            <div className="feature-card flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-troiton-blue/10 flex items-center justify-center mb-5">
                <Building size={28} className="text-troiton-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Soluções B2B</h3>
              <p className="text-muted-foreground flex-grow mb-6">
                Equipamentos, periféricos e soluções para empresas, incluindo impressoras, cadeiras de escritório e infraestrutura completa.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-blue/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-blue"></span>
                  </div>
                  <span className="ml-3 text-sm">Computadores e Servidores</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-blue/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-blue"></span>
                  </div>
                  <span className="ml-3 text-sm">Impressoras e Scanners</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-blue/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-blue"></span>
                  </div>
                  <span className="ml-3 text-sm">Mobiliário e Equipamentos</span>
                </div>
              </div>
              <Link to="/contato" className="group inline-flex items-center text-sm font-medium text-troiton-blue hover:text-troiton-purple mt-auto">
                Saiba mais <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="feature-card flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-troiton-purple/10 flex items-center justify-center mb-5">
                <ShoppingCart size={28} className="text-troiton-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Soluções B2C</h3>
              <p className="text-muted-foreground flex-grow mb-6">
                Os mais recentes produtos tecnológicos para uso diário, de smartphones e laptops a dispositivos para casa inteligente e acessórios.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Smartphones & Computadores</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Dispositivos para Casa Inteligente</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Acessórios & Periféricos</span>
                </div>
              </div>
              <Link to="/produtos" className="group inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue mt-auto">
                Saiba mais <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={400}>
            <div className="feature-card flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex items-center justify-center mb-5">
                <Gamepad size={28} className="text-troiton-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Jogos Digitais</h3>
              <p className="text-muted-foreground flex-grow mb-6">
                Uma seleção curada de jogos digitais para jogadores casuais e gamers hardcore, proporcionando entretenimento para todos.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Jogos para PC & Console</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Jogos Mobile</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Acessórios para Gaming</span>
                </div>
              </div>
              <Link to="/produtos" className="group inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue mt-auto">
                Saiba mais <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={600} className="mt-16">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Pronto para elevar sua experiência tecnológica?</h3>
                <p className="text-muted-foreground">
                  Entre em contato hoje mesmo para descobrir como a Troiton Connect+ pode fornecer soluções tecnológicas personalizadas para suas necessidades específicas.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link 
                  to="/contato" 
                  className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 button-effect"
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
