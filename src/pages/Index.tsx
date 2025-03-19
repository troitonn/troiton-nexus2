
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessSegments } from "@/components/BusinessSegments";
import { Mission } from "@/components/Mission";
import { Solutions } from "@/components/Solutions";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Troiton Connect+ | Sua Ponte para a Tecnologia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BusinessSegments />
        <Solutions />
        <Mission />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
