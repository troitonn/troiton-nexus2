
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessSegments } from "@/components/BusinessSegments";
import { Mission } from "@/components/Mission";
import { Solutions } from "@/components/Solutions";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/animations/FadeIn";
import { AboutUs } from "@/components/AboutUs";

const Index = () => {
  useEffect(() => {
    document.title = "Troiton Connect+ | Sua Ponte para a Tecnologia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="business-segments" className="py-16 md:py-24 bg-gradient-to-b from-white to-troiton-gray/20">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center">Nossos Segmentos de Negócio</h2>
              <p className="section-subtitle text-center mx-auto">
                Soluções completas de tecnologia para diferentes públicos em um só lugar
              </p>
            </FadeIn>
            
            <div className="mt-12">
              <BusinessSegments />
            </div>
          </div>
        </section>
        
        <section id="solutions" className="py-16 md:py-24">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center">Nossas Soluções</h2>
              <p className="section-subtitle text-center mx-auto">
                Tecnologia de ponta para empresas e consumidores finais
              </p>
            </FadeIn>
            
            <div className="mt-12">
              <Solutions />
            </div>
          </div>
        </section>
        
        <section id="about-us" className="py-16 md:py-24 bg-gradient-to-b from-white to-troiton-gray/20">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center">Sobre Nós</h2>
              <p className="section-subtitle text-center mx-auto">
                Conheça mais sobre a Troiton Connect+ e nossos valores
              </p>
            </FadeIn>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <AboutUs />
            </div>
          </div>
        </section>
        
        <section id="clients" className="py-16 md:py-24">
          <div className="troiton-container">
            <FadeIn>
              <h2 className="section-title text-center">Nossos Clientes</h2>
              <p className="section-subtitle text-center mx-auto">
                Empresas e organizações que confiam na Troiton Connect+
              </p>
            </FadeIn>
            
            <div className="mt-12">
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
