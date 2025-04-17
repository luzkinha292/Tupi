
import React from 'react';
import { DropletIcon, Leaf, Sun, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "flex flex-col items-center p-6 rounded-2xl transition-all",
      className
    )}>
      <div className="p-4 rounded-full bg-white mb-4 shadow-md">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-center font-heading">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="tupi-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Sobre o Povo Tupi</h2>
          <p className="section-subtitle">
            Conhecimento ancestral em harmonia com a natureza
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Os Tupi são um dos maiores e mais importantes grupos indígenas do Brasil, 
            cuja influência se estendeu por todo o litoral brasileiro. Sua cultura, 
            língua e tradições foram fundamentais na formação da identidade brasileira.
          </p>
          <p className="text-lg text-muted-foreground">
            Com uma profunda conexão com a natureza, os Tupi desenvolveram práticas 
            sustentáveis de manejo dos recursos naturais, demonstrando uma sabedoria 
            que pode nos inspirar a encontrar soluções para os desafios ambientais atuais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <FeatureCard 
            icon={<Leaf className="w-8 h-8 text-tupi-leaf" />}
            title="Conhecimento Florestal"
            description="Técnicas de cultivo e manejo que preservam a biodiversidade e o equilíbrio dos ecossistemas."
            className="bg-tupi-leaf/10 hover:bg-tupi-leaf/20"
          />
          <FeatureCard 
            icon={<DropletIcon className="w-8 h-8 text-tupi-river" />}
            title="Gestão da Água"
            description="Sabedoria na preservação e uso sustentável dos recursos hídricos, essencial para a vida."
            className="bg-tupi-river/10 hover:bg-tupi-river/20"
          />
          <FeatureCard 
            icon={<Sun className="w-8 h-8 text-tupi-sun" />}
            title="Energia Solar"
            description="Práticas que aproveitam a energia solar de forma integrada à vida cotidiana e aos ciclos naturais."
            className="bg-tupi-sun/10 hover:bg-tupi-sun/20"
          />
          <FeatureCard 
            icon={<Wind className="w-8 h-8 text-tupi-sky" />}
            title="Harmonia Comunitária"
            description="Organização social baseada na cooperação e na distribuição justa dos recursos naturais."
            className="bg-tupi-sky/10 hover:bg-tupi-sky/20"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-tupi-earth/10 blur-sm transform -rotate-3"></div>
              <img 
                src="https://media.istockphoto.com/id/889470662/pt/foto/indigenous-girl-from-tupi-guarani-tribe-in-manaus-brazil.jpg?s=612x612&w=0&k=20&c=GhjIeujBEwKN3AnWprvWjmQYjBIhKD4t4VzEnLHqxQM=" 
                alt="Árvores representando a conexão dos Tupi com a natureza" 
                className="relative rounded-xl object-cover w-full h-full aspect-square shadow-lg"
              />
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-tupi-forest">
              Relação com a Terra e a Energia
            </h3>
            <p className="text-muted-foreground">
              Para os Tupi, a terra não é apenas um recurso a ser explorado, mas uma entidade viva 
              que provê e sustenta a vida. Essa visão holística reconhece a interconexão de todos 
              os seres e elementos naturais.
            </p>
            <p className="text-muted-foreground">
              O conceito de energia para os Tupi está intrinsecamente ligado à força vital 
              presente em todas as coisas. Rios, florestas, animais e o próprio solo são 
              considerados fontes de energia que devem ser respeitadas e preservadas.
            </p>
            <p className="text-muted-foreground">
              Esta sabedoria ancestral nos ensina que a verdadeira sustentabilidade só é possível 
              quando reconhecemos nossa interdependência com o mundo natural e agimos com 
              responsabilidade para manter seu equilíbrio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
