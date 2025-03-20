
import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { Building2, Users, BarChart3, Star, Award, Heart } from "lucide-react";

export function AboutUs() {
  return (
    <div className="w-full">
      {/* Cards visuais com a história e informações da empresa */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FadeIn delay={100}>
          <div className="glass-card p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center mb-6 mx-auto">
              <Building2 size={30} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Nossa História</h3>
            <p className="text-muted-foreground text-center">
              Fundada em 2015, a Troiton Connect+ nasceu com o objetivo de transformar a maneira como pessoas e empresas acessam tecnologia no Brasil.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="glass-card p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center mb-6 mx-auto">
              <Users size={30} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Nossa Equipe</h3>
            <p className="text-muted-foreground text-center">
              Contamos com profissionais apaixonados por tecnologia e inovação, comprometidos em oferecer as melhores soluções para nossos clientes.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="glass-card p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center mb-6 mx-auto">
              <BarChart3 size={30} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Nosso Crescimento</h3>
            <p className="text-muted-foreground text-center">
              Em poucos anos, nos tornamos referência em soluções tecnológicas, expandindo nossa presença e alcançando milhares de clientes em todo o Brasil.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Seção visual de valores */}
      <FadeIn delay={400}>
        <div className="bg-gradient-to-r from-troiton-blue/5 to-troiton-purple/5 rounded-xl p-8 md:p-10 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Nossos Valores</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start bg-white/50 p-5 rounded-lg backdrop-blur-sm">
              <div className="h-12 w-12 rounded-lg bg-troiton-blue/10 flex items-center justify-center flex-shrink-0 mr-4">
                <Star className="text-troiton-blue h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Inovação</h4>
                <p className="text-sm text-muted-foreground">Buscamos constantemente novas tecnologias e métodos para melhorar nossas soluções.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white/50 p-5 rounded-lg backdrop-blur-sm">
              <div className="h-12 w-12 rounded-lg bg-troiton-purple/10 flex items-center justify-center flex-shrink-0 mr-4">
                <Award className="text-troiton-purple h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Qualidade</h4>
                <p className="text-sm text-muted-foreground">Mantemos os mais altos padrões em todos os produtos e serviços que oferecemos.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white/50 p-5 rounded-lg backdrop-blur-sm">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex items-center justify-center flex-shrink-0 mr-4">
                <Heart className="text-troiton-purple h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Compromisso</h4>
                <p className="text-sm text-muted-foreground">Dedicamo-nos a superar as expectativas de nossos clientes em cada interação.</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Números da empresa */}
      <FadeIn delay={500}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="glass-card p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-troiton-blue mb-2">8+</h3>
            <p className="text-muted-foreground text-sm">Anos de experiência</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-troiton-purple mb-2">5000+</h3>
            <p className="text-muted-foreground text-sm">Clientes satisfeitos</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-troiton-blue mb-2">50+</h3>
            <p className="text-muted-foreground text-sm">Parceiros tecnológicos</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-troiton-purple mb-2">3</h3>
            <p className="text-muted-foreground text-sm">Regiões atendidas</p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
