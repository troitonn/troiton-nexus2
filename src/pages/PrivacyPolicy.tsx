
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Troiton Business+ | Política de Privacidade";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <section className="py-16">
          <div className="troiton-container">
            <FadeIn>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-troiton-dark">
                Política de Privacidade
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-muted-foreground mb-10">
                Na Troiton Business+, levamos a sua privacidade a sério. Esta política descreve como coletamos, 
                usamos e protegemos suas informações pessoais.
              </p>
            </FadeIn>

            <div className="space-y-12 mt-12">
              <FadeIn delay={300}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-troiton-dark">1. Informações que Coletamos</h2>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-4">
                    Podemos coletar os seguintes tipos de informações pessoais:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Informações de contato (nome, e-mail, telefone, endereço)</li>
                    <li>Informações de perfil (cargo, empresa)</li>
                    <li>Dados de acesso e uso do site</li>
                    <li>Informações de dispositivo e conexão</li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-troiton-dark">2. Como Utilizamos suas Informações</h2>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-4">
                    Utilizamos suas informações pessoais para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Fornecer, manter e melhorar nossos serviços</li>
                    <li>Processar transações e enviar notificações relacionadas</li>
                    <li>Responder a suas solicitações e fornecer suporte</li>
                    <li>Enviar comunicações de marketing (com seu consentimento)</li>
                    <li>Cumprir obrigações legais e proteger nossos direitos</li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-troiton-dark">3. Compartilhamento de Informações</h2>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-4">
                    Podemos compartilhar suas informações com:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Parceiros de negócios e prestadores de serviços que nos auxiliam</li>
                    <li>Autoridades governamentais em resposta a solicitações legais</li>
                    <li>Terceiros em caso de reorganização empresarial, fusão ou venda</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Não vendemos ou alugamos suas informações pessoais a terceiros.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={600}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-troiton-dark">4. Segurança de Dados</h2>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground">
                    Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso, 
                    uso ou divulgação não autorizados. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento 
                    eletrônico é 100% seguro. Portanto, não podemos garantir sua segurança absoluta.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={700}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-troiton-dark">5. Seus Direitos</h2>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-4">
                    Você tem direitos em relação às suas informações pessoais, incluindo:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Acesso às suas informações pessoais</li>
                    <li>Correção de dados imprecisos ou incompletos</li>
                    <li>Exclusão de suas informações (em determinadas circunstâncias)</li>
                    <li>Restrição ou objeção ao processamento de seus dados</li>
                    <li>Portabilidade de dados</li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={800}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-troiton-dark">6. Alterações a esta Política</h2>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground">
                    Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos 
                    operacionais, legais ou regulatórios. Recomendamos que você revise esta política regularmente. A data efetiva no topo da página 
                    indica quando a política foi atualizada pela última vez.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={900}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-troiton-dark">7. Contato</h2>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground">
                    Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, 
                    entre em contato conosco pelo e-mail: <a href="mailto:connect@troiton.com.br" className="text-troiton-purple hover:underline">connect@troiton.com.br</a> 
                    ou pelo telefone: <a href="tel:+551158231139" className="text-troiton-purple hover:underline">+55 (11) 95823-1139</a>.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
