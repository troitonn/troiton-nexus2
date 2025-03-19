
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessSegments } from "@/components/BusinessSegments";
import { Mission } from "@/components/Mission";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Troiton Connect+ | Your Bridge to Technology";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BusinessSegments />
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
