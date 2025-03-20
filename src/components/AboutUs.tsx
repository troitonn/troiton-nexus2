
import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { Building2, Users, BarChart3, Star, Award, Heart, Trophy, Medal, TrendingUp } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from "@/components/ui/carousel";

export function AboutUs() {
  return (
    <div className="w-full">
      <Carousel className="w-full mb-12">
        <CarouselContent>
          <CarouselItem>
            <div className="glass-card p-6 h-full transform transition-all duration-300 overflow-hidden relative border-t-4 border-troiton-blue">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-blue-400/20">
                <Building2 size={30} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Nossa História</h3>
              <p className="text-center text-sm">
                Fundada em 2015, nascemos para transformar o acesso à tecnologia no Brasil, conectando pessoas e empresas às melhores soluções tecnológicas.
              </p>
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
          <div className="glass-card overflow-hidden relative p-3 group hover:shadow-md hover:shadow-blue-400/20 transition-all duration-300">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-blue-500 group-hover:scale-110 transition-transform duration-300">8+</span>
                <span className="text-xs text-gray-500 mt-1">Anos de experiência</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card overflow-hidden relative p-3 group hover:shadow-md hover:shadow-purple-400/20 transition-all duration-300">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-purple-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-troiton-purple to-purple-500 group-hover:scale-110 transition-transform duration-300">5000+</span>
                <span className="text-xs text-gray-500 mt-1">Clientes satisfeitos</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card overflow-hidden relative p-3 group hover:shadow-md hover:shadow-teal-400/20 transition-all duration-300">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-teal-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 group-hover:scale-110 transition-transform duration-300">50+</span>
                <span className="text-xs text-gray-500 mt-1">Parceiros tecnológicos</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card overflow-hidden relative p-3 group hover:shadow-md hover:shadow-amber-400/20 transition-all duration-300">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-amber-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 group-hover:scale-110 transition-transform duration-300">3</span>
                <span className="text-xs text-gray-500 mt-1">Regiões atendidas</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
