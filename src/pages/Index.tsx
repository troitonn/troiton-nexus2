
import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Solutions } from "@/components/Solutions";
import { BusinessSegments } from "@/components/BusinessSegments";
import { Clients } from "@/components/Clients";
import { Mission } from "@/components/Mission";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Solutions />
      <BusinessSegments />
      <Clients />
      <Mission />
      <Footer />
    </div>
  );
};

export default Index;
