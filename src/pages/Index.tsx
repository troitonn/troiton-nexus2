
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessSegments } from "@/components/BusinessSegments";
import { AboutUs } from "@/components/AboutUs";
import { Solutions } from "@/components/Solutions";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";

const Index = () => {
  useEffect(() => {
    document.title = "Troiton Connect+ | Sua Ponte para a Tecnologia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="business-segments" className="py-16 md:py-20 bg-gradient-to-b from-white to-troiton-gray/20">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">Nossos Segmentos</h2>
            </FadeIn>
            
            <div className="mt-8">
              <BusinessSegments />
            </div>
          </div>
        </section>
        
        <section id="solutions" className="py-16 md:py-20 bg-gradient-to-br from-troiton-blue/5 to-troiton-purple/5">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">Nossas Soluções</h2>
            </FadeIn>
            
            <div className="mt-8">
              <Solutions />
            </div>
          </div>
        </section>
        
        <section id="about-us" className="py-16 md:py-20">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">Sobre Nós</h2>
            </FadeIn>
            
            <div className="mt-8 max-w-5xl mx-auto">
              <AboutUs />
            </div>
          </div>
        </section>
        
        <section id="clients" className="py-16 md:py-20 bg-gradient-to-br from-troiton-blue/5 to-troiton-purple/5">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">Nossos Clientes</h2>
            </FadeIn>
            
            <div className="mt-8">
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
