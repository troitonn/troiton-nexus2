
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, Clock, Building, Users, Award, Target } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "Troiton Business+ | Sobre Nós";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <section className="py-16">
          <div className="troiton-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div>
                <FadeIn>
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 text-troiton-dark">
                    Sobre a Troiton Business+
                  </h1>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="text-lg text-muted-foreground mb-8">
                    Somos uma empresa brasileira especializada em soluções B2B, dedicada a transformar 
                    o mercado corporativo através de tecnologia e inovação.
                  </p>
                </FadeIn>
                <FadeIn delay={300}>
                  <p className="text-muted-foreground mb-8">
                    Fundada com a missão de simplificar e otimizar processos empresariais através da 
                    implementação de tecnologias disruptivas, a Troiton Business+ se destaca pela 
                    excelência em serviços e pelo profundo entendimento das necessidades específicas 
                    de cada setor do mercado.
                  </p>
                </FadeIn>
                <FadeIn delay={400}>
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-troiton-purple mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <span className="font-medium text-troiton-dark">+10 anos</span> de experiência no mercado B2B
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-troiton-blue mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <span className="font-medium text-troiton-dark">+500 clientes</span> atendidos em todo Brasil
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-troiton-purple mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <span className="font-medium text-troiton-dark">98% de satisfação</span> entre nossos clientes
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn direction="left" delay={300}>
                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-troiton-blue/20 to-troiton-purple/20 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Equipe Troiton" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={500}>
              <div className="bg-gradient-to-r from-troiton-blue/5 to-troiton-purple/5 p-8 md:p-12 rounded-xl mb-20">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-troiton-dark">
                    Troiton B2B: Conectando empresas ao futuro
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Nossa divisão B2B é especializada em fornecer soluções tecnológicas personalizadas para empresas de todos os tamanhos. 
                    Desenvolvemos e implementamos ferramentas que melhoram processos, aumentam a eficiência e impulsionam o crescimento 
                    dos negócios de nossos clientes.
                  </p>
                  <p className="text-muted-foreground">
                    Com uma abordagem consultiva e orientada a resultados, trabalhamos em estreita colaboração com nossos clientes para 
                    entender seus desafios específicos e desenvolver soluções que atendam às suas necessidades únicas.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="mb-20">
              <FadeIn delay={600}>
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-troiton-dark text-center">
                  Nossos Valores
                </h2>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FadeIn delay={700}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-12 w-12 rounded-full bg-troiton-blue/10 flex items-center justify-center mb-6">
                      <Award className="h-6 w-6 text-troiton-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Excelência</h3>
                    <p className="text-muted-foreground">
                      Buscamos a excelência em tudo o que fazemos, desde o desenvolvimento de soluções até o atendimento ao cliente.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={800}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-12 w-12 rounded-full bg-troiton-purple/10 flex items-center justify-center mb-6">
                      <Users className="h-6 w-6 text-troiton-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Colaboração</h3>
                    <p className="text-muted-foreground">
                      Acreditamos no poder do trabalho em equipe e na colaboração com nossos clientes para alcançar resultados excepcionais.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={900}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-12 w-12 rounded-full bg-troiton-blue/10 flex items-center justify-center mb-6">
                      <Target className="h-6 w-6 text-troiton-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Inovação</h3>
                    <p className="text-muted-foreground">
                      Estamos sempre à frente, explorando novas tecnologias e abordagens para oferecer soluções inovadoras aos nossos clientes.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

            <FadeIn delay={1000}>
              <div className="bg-gradient-to-r from-troiton-blue to-troiton-purple p-12 rounded-xl text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Pronto para transformar seu negócio?
                </h2>
                <p className="mb-8 max-w-2xl mx-auto">
                  Entre em contato com nossa equipe para descobrir como as soluções da Troiton Business+ podem 
                  impulsionar sua empresa para o próximo nível.
                </p>
                <a 
                  href="/contato" 
                  className="inline-block px-8 py-3 bg-white text-troiton-purple font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Fale Conosco
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
