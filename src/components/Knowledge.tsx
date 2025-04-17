
import React from 'react';
import { Sparkles, Lightbulb, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Knowledge: React.FC = () => {
  const knowledgeAreas = [
    {
      icon: <Sparkles className="h-6 w-6 text-tupi-forest" />,
      title: "Agricultura Sustentável",
      description: "Técnicas de cultivo que preservam o solo e aumentam a biodiversidade, como consórcios de plantas e sistemas agroflorestais.",
      example: "O sistema de coivara controlada permite o cultivo sem esgotar os recursos do solo."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-tupi-sun" />,
      title: "Tecnologias Naturais",
      description: "Desenvolvimento de ferramentas e processos que aproveitam elementos da natureza de forma eficiente e renovável.",
      example: "Uso de materiais naturais para construção que se adaptam ao clima e têm baixo impacto ambiental."
    },
    {
      icon: <Shield className="h-6 w-6 text-tupi-river" />,
      title: "Conservação da Água",
      description: "Práticas de preservação e uso consciente dos recursos hídricos, fundamentais para a manutenção da vida.",
      example: "Sistemas de irrigação que aproveitam a topografia e minimizam o desperdício de água."
    },
    {
      icon: <Heart className="h-6 w-6 text-tupi-clay" />,
      title: "Medicina Natural",
      description: "A medicina dos Tupi é baseada no uso de plantas medicinais, rituais espirituais e no conhecimento dos pajés (curandeiros). Eles tratam tanto o corpo quanto o espírito, sempre respeitando a natureza. O saber é passado oralmente entre as gerações.",
      example: "Os Tupi utilizam o chá da casca de aroeira para tratar inflamações, feridas e infecções. Também fazem banhos com a planta para aliviar dores no corpo e purificar energias negativas."
    }
  ];

  return (
    <section id="knowledge" className="section-padding bg-white">
      <div className="tupi-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Sabedoria Tupi</h2>
          <p className="section-subtitle">
            Conhecimentos ancestrais para um futuro sustentável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {knowledgeAreas.map((area, index) => (
            <Card key={index} className="border-t-4 border-t-tupi-earth shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {area.icon}
                  <CardTitle className="text-xl font-heading">{area.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="bg-muted p-4 rounded-lg text-sm italic">
                  <span className="font-semibold">Exemplo: </span>
                  {area.example}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-tupi-earth/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-tupi-earth mb-4">
                Aplicando o Conhecimento Tupi
              </h3>
              <p className="text-muted-foreground mb-6">
                O conhecimento tradicional Tupi pode ser integrado às práticas modernas 
                de energia e sustentabilidade, criando soluções inovadoras que respeitam 
                o meio ambiente e promovem o bem-estar das comunidades.
              </p>
              <p className="text-muted-foreground mb-6">
                Projetos que combinam tecnologias atuais com a sabedoria ancestral 
                têm demonstrado eficiência no uso de recursos e na redução de impactos 
                ambientais, apresentando caminhos promissores para um futuro mais sustentável.
              </p>
              <Button className="bg-tupi-forest hover:bg-tupi-forest/90 text-white">
                Conhecer projetos
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-tupi-forest/10 blur-sm transform rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Aplicação de conhecimentos Tupi" 
                className="relative rounded-xl object-cover w-full h-full aspect-video shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
