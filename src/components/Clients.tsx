
import React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export function Clients() {
  const clients = [
    { id: 1, name: "Cliente A", logo: "/placeholder.svg" },
    { id: 2, name: "Cliente B", logo: "/placeholder.svg" },
    { id: 3, name: "Cliente C", logo: "/placeholder.svg" },
    { id: 4, name: "Cliente D", logo: "/placeholder.svg" },
    { id: 5, name: "Cliente E", logo: "/placeholder.svg" },
    { id: 6, name: "Cliente F", logo: "/placeholder.svg" },
  ];
  
  return (
    <div className="relative">
      <FadeIn>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-0.5 w-5 md:w-10 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
          <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple text-xl md:text-2xl lg:text-3xl">
            Clientes que Confiam em Nós
          </h2>
          <div className="h-0.5 w-5 md:w-10 bg-gradient-to-r from-troiton-purple to-troiton-blue"></div>
        </div>
        <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-4">
          Parcerias de sucesso com empresas que compartilham nossa visão de inovação
        </p>
      </FadeIn>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {clients.map((client) => (
          <div 
            key={client.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex items-center justify-center aspect-[4/3]"
          >
            <img 
              src={client.logo} 
              alt={`Logo do cliente ${client.name}`} 
              className="max-h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
