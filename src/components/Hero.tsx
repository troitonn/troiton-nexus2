
import React from "react";
import { FadeIn } from "./animations/FadeIn";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-troiton-purple/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-troiton-blue/5 blur-3xl"></div>
      </div>

      <div className="troiton-container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-troiton-purple bg-troiton-purple/10 rounded-full">
              Your Bridge to Technology
            </span>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight max-w-5xl">
              Connecting People with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-troiton-blue to-troiton-purple">
                Technology
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
              Complete technology solutions for businesses and consumers. From B2B services to consumer products and digital games - all in one place.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a 
                href="#solutions" 
                className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 button-effect"
              >
                Explore Solutions
              </a>
              <a 
                href="#products" 
                className="group flex items-center justify-center gap-2 bg-troiton-gray hover:bg-troiton-gray/80 px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                View Products
                <ArrowRight size={18} className="text-troiton-purple transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={800} className="mt-20 md:mt-28 w-full">
            <div className="glass-card p-6 md:p-10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 blur-xl"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="h-14 w-14 rounded-lg bg-troiton-blue/10 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                        <path d="M18 8a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v.01"></path>
                        <path d="M4 22h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"></path>
                        <path d="M10 20v-4"></path>
                        <path d="M14 20v-4"></path>
                        <path d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Business Solutions</h3>
                    <p className="mt-2 text-center text-muted-foreground">
                      Comprehensive B2B technology services and products.
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="h-14 w-14 rounded-lg bg-troiton-purple/10 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.825-4.5 2.1C10.832 3.825 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Consumer Products</h3>
                    <p className="mt-2 text-center text-muted-foreground">
                      The latest tech innovations for everyday users.
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M12 12h.01"></path>
                        <path d="M2 14h20"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Digital Games</h3>
                    <p className="mt-2 text-center text-muted-foreground">
                      Curated gaming experiences for all player types.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
