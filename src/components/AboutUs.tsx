import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { Building2, Users, BarChart3, Star, Award, Heart, Trophy, Medal, TrendingUp } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export function AboutUs() {
  return <div className="w-full">
      <Carousel className="w-full mb-12">
        <CarouselContent>
          <CarouselItem>
            <div className="glass-card p-6 h-full transform transition-all duration-300 overflow-hidden relative border-t-4 border-troiton-blue">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-blue-400/20">
                <Building2 size={30} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Nossa História</h3>
              <p className="text-center text-sm">Somos uma empresa dedicada a transformar o acesso à tecnologia no Brasil, conectando empresas e consumidores finais às melhores soluções em equipamentos, como periféricos, teclados, mouses, notebooks e muito mais.</p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="glass-card p-6 h-full transform transition-all duration-300 overflow-hidden relative border-t-4 border-troiton-purple">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-purple-400/20">
                <Users size={30} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Nossa Equipe</h3>
              <p className="text-center text-sm">
                Profissionais apaixonados por tecnologia e inovação, comprometidos em oferecer as melhores soluções para nossos clientes.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="glass-card p-6 h-full transform transition-all duration-300 overflow-hidden relative border-t-4 border-green-500">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/5 rounded-full blur-xl"></div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-green-400/20">
                <TrendingUp size={30} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Nosso Crescimento</h3>
              <p className="text-center text-sm">
                Em poucos anos, nos tornamos referência em soluções tecnológicas, expandindo nossa presença em todo o Brasil.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="static transform-none mx-2 bg-gradient-to-r from-troiton-blue/10 to-troiton-purple/10 hover:bg-gradient-to-r hover:from-troiton-blue/20 hover:to-troiton-purple/20 border-0" />
          <CarouselNext className="static transform-none mx-2 bg-gradient-to-r from-troiton-blue/10 to-troiton-purple/10 hover:bg-gradient-to-r hover:from-troiton-blue/20 hover:to-troiton-purple/20 border-0" />
        </div>
      </Carousel>

      {/* Valores em cards visuais */}
      <FadeIn delay={200}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center glass-card p-6 hover:shadow-md hover:shadow-blue-400/10 hover:scale-105 transition-all duration-300 border-l-4 border-blue-500 overflow-hidden relative group">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Star size={30} className="text-blue-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Inovação</h4>
            <p className="text-sm text-center">Buscamos constantemente as melhores tecnologias para nossos clientes.</p>
          </div>
          
          <div className="flex flex-col items-center glass-card p-6 hover:shadow-md hover:shadow-purple-400/10 hover:scale-105 transition-all duration-300 border-l-4 border-purple-500 overflow-hidden relative group">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Award size={30} className="text-purple-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Qualidade</h4>
            <p className="text-sm text-center">Mantemos os mais altos padrões em todos os nossos produtos e serviços.</p>
          </div>
          
          <div className="flex flex-col items-center glass-card p-6 hover:shadow-md hover:shadow-green-400/10 hover:scale-105 transition-all duration-300 border-l-4 border-green-500 overflow-hidden relative group">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-green-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Heart size={30} className="text-green-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Compromisso</h4>
            <p className="text-sm text-center">Dedicamo-nos a superar as expectativas de nossos clientes.</p>
          </div>
        </div>
      </FadeIn>

      {/* Números da empresa em cards que brilham */}
      <FadeIn delay={400}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          
          
          
          
          
          
          
        </div>
      </FadeIn>
    </div>;
}