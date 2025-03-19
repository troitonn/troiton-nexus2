
import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { Building, Users, ShoppingCart, Package, Gamepad, ArrowRight } from "lucide-react";

export function BusinessSegments() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-troiton-gray/30">
      <div className="troiton-container">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="section-title max-w-3xl">
              Complete Technology Solutions, All in One Place
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="section-subtitle mx-auto">
              We bridge the gap between cutting-edge technology and users, providing seamless solutions for both businesses and consumers.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          <FadeIn direction="up" delay={0}>
            <div className="feature-card flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-troiton-blue/10 flex items-center justify-center mb-5">
                <Building size={28} className="text-troiton-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Solutions</h3>
              <p className="text-muted-foreground flex-grow mb-6">
                Technology infrastructure, software solutions, and consulting services tailored for businesses of all sizes.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-blue/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-blue"></span>
                  </div>
                  <span className="ml-3 text-sm">IT Infrastructure</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-blue/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-blue"></span>
                  </div>
                  <span className="ml-3 text-sm">Software Solutions</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-blue/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-blue"></span>
                  </div>
                  <span className="ml-3 text-sm">Business Consulting</span>
                </div>
              </div>
              <a href="#contact" className="group inline-flex items-center text-sm font-medium text-troiton-blue hover:text-troiton-purple mt-auto">
                Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="feature-card flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-troiton-purple/10 flex items-center justify-center mb-5">
                <ShoppingCart size={28} className="text-troiton-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consumer Products</h3>
              <p className="text-muted-foreground flex-grow mb-6">
                The latest technology products for everyday use, from smartphones and laptops to smart home devices and accessories.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Smartphones & Computers</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Smart Home Devices</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Accessories & Peripherals</span>
                </div>
              </div>
              <a href="#contact" className="group inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue mt-auto">
                Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={400}>
            <div className="feature-card flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex items-center justify-center mb-5">
                <Gamepad size={28} className="text-troiton-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Games</h3>
              <p className="text-muted-foreground flex-grow mb-6">
                A curated selection of digital games for casual players and hardcore gamers, providing entertainment for everyone.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">PC & Console Games</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Mobile Gaming</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                  </div>
                  <span className="ml-3 text-sm">Gaming Accessories</span>
                </div>
              </div>
              <a href="#contact" className="group inline-flex items-center text-sm font-medium text-troiton-purple hover:text-troiton-blue mt-auto">
                Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={600} className="mt-16">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-troiton-blue to-troiton-purple"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to elevate your technology experience?</h3>
                <p className="text-muted-foreground">
                  Contact us today to discover how Troiton Connect+ can provide tailored technology solutions for your specific needs.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 button-effect"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
