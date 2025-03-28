import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Cpu, Zap, Star, Users, Server } from "lucide-react";
import { Link } from "react-router-dom";
export function Footer() {
  return <footer id="contact" className="bg-gradient-to-br from-troiton-dark to-troiton-dark/95 text-white pt-16 pb-8">
      <div className="troiton-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4 group">
              <img src="/lovable-uploads/557528b9-4cc0-4997-9328-fefd46ff3798.png" alt="Troiton Business+" className="h-10 transition-all duration-300 group-hover:scale-105 brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Conectando empresas e consumidores às melhores soluções tecnológicas do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={cn("h-10 w-10 rounded-full flex items-center justify-center", "bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110")}>
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={cn("h-10 w-10 rounded-full flex items-center justify-center", "bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110")}>
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={cn("h-10 w-10 rounded-full flex items-center justify-center", "bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110")}>
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={cn("h-10 w-10 rounded-full flex items-center justify-center", "bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110")}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Zap size={18} className="text-troiton-purple" />
              Soluções
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/produtos#business" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Soluções Empresariais
                </Link>
              </li>
              <li>
                <Link to="/produtos#consumer" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Produtos para Consumidores
                </Link>
              </li>
              <li>
                <Link to="/produtos#games" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Games e Entretenimento
                </Link>
              </li>
              <li>
                <Link to="/produtos#services" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Serviços Personalizados
                </Link>
              </li>
              <li>
                <Link to="/produtos#consulting" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Consultoria Tecnológica
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Users size={18} className="text-troiton-blue" />
              Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#about-us" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato#careers" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="/contato#partners" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Parceiros
                </Link>
              </li>
              <li>
                <Link to="/contato#blog" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Blog & Notícias
                </Link>
              </li>
              <li>
                <Link to="/contato#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Mail size={18} className="text-troiton-purple" />
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start group hover:scale-105 transition-transform duration-200">
                <MapPin size={18} className="text-troiton-purple mt-0.5 mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Rua Werner Von Siemens, 111 - Lapa de Baixo - São Paulo, SP - Brasil</a>
              </div>
              <div className="flex items-center group hover:scale-105 transition-transform duration-200">
                <Mail size={18} className="text-troiton-blue mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <a href="mailto:contato@troitonconnect.com" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">connect@troiton.com.br</a>
              </div>
              <div className="flex items-center group hover:scale-105 transition-transform duration-200">
                <Phone size={18} className="text-troiton-purple mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <a href="tel:+551155555555" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">+55 (11) 95823-1139</a>
              </div>
              
              <form className="mt-6 group">
                <div className="flex flex-col space-y-2">
                  <input type="email" placeholder="Seu e-mail" className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-troiton-purple/50 transition-all" />
                  <button type="submit" className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:opacity-90 transition-all duration-300 rounded-lg px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-2 group-hover:shadow-lg shadow-purple-500/20">
                    Receber Novidades
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Troiton Business+. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/contato#terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-200"></Link>
            <Link to="/contato#privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Política de Privacidade
            </Link>
            <Link to="/contato#cookies" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}