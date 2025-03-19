
import React from "react";
import { FadeIn } from "./animations/FadeIn";

export function Mission() {
  return (
    <section id="mission" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-troiton-blue/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-troiton-purple/5 blur-3xl"></div>
      </div>

      <div className="troiton-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 items-center">
          <div>
            <FadeIn direction="left">
              <h2 className="section-title mb-6">
                Our Mission & Purpose
              </h2>
            </FadeIn>
            <FadeIn direction="left" delay={200}>
              <div className="space-y-6">
                <div className="glass-card p-6 border-l-4 border-troiton-blue">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="inline-block h-8 w-8 rounded-lg bg-troiton-blue/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                        <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10Z"></path>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                      </svg>
                    </span>
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To make technology more accessible through innovation, efficiency, and high-quality solutions that cater to both businesses and end consumers.
                  </p>
                </div>

                <div className="glass-card p-6 border-l-4 border-troiton-purple">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="inline-block h-8 w-8 rounded-lg bg-troiton-purple/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                        <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                        <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M12 12v6"></path>
                        <path d="M9 15h6"></path>
                      </svg>
                    </span>
                    Our Purpose
                  </h3>
                  <p className="text-muted-foreground">
                    To build a bridge between technology and users by ensuring quality, competitive pricing, and a seamless shopping experience.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={400}>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-1">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                    </div>
                    <span className="ml-3 text-sm">Innovation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-1">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                    </div>
                    <span className="ml-3 text-sm">Quality</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-1">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                    </div>
                    <span className="ml-3 text-sm">Accessibility</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 flex items-center justify-center mt-1">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-troiton-blue to-troiton-purple"></span>
                    </div>
                    <span className="ml-3 text-sm">Customer Focus</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="right" delay={300}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 blur-3xl"></div>
              <div className="relative z-10 glass-card p-1 rounded-xl bg-white/80 shadow-lg">
                <div className="glass-card p-8 md:p-10 rounded-lg bg-gradient-to-br from-white to-troiton-gray/20 border-none overflow-hidden">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center mb-6 shadow-md transform transition-transform duration-300 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3"></path>
                      <circle cx="18" cy="18" r="3"></circle>
                      <path d="m19.9 17.1-.4.4c-.4.3-.8.3-1.1 0l-.4-.4c-.3-.3-.3-.8 0-1.1l.4-.4c.3-.3.7-.3 1.1 0l.4.4c.3.4.3.8 0 1.1Z"></path>
                      <path d="m21.7 18.9-.4.4c-.4.3-.8.3-1.1 0l-.4-.4c-.3-.3-.3-.8 0-1.1l.4-.4c.3-.3.7-.3 1.1 0l.4.4c.3.4.3.8 0 1.1Z"></path>
                      <path d="m10.5 20 2.8-3.5c.4-.4.5-1.1.2-1.6l-1-1.6c-.1-.3-.3-.5-.5-.6L9.6 12"></path>
                    </svg>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3">Why Choose Us?</h3>
                    <p className="text-muted-foreground">
                      At Troiton Connect+, we differentiate ourselves through our unwavering commitment to quality, innovation, and customer satisfaction.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-blue/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-blue">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Comprehensive Solutions</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          All your technology needs in one place, from business to consumer products.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Quality Assurance</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Only the best products and services make it to our shelves.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-troiton-blue/10 to-troiton-purple/10 flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-troiton-purple">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Expert Support</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Our team of experts is always ready to assist you with any questions.
                        </p>
                      </div>
                    </div>
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
