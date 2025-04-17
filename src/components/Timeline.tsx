
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  isLeft = false,
}) => {
  return (
    <div className={cn(
      "relative flex items-center justify-between",
      isLeft ? "flex-row-reverse" : "flex-row"
    )}>
      <div className="w-5/12"></div>
      <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-tupi-earth text-white font-bold text-sm relative">
        <div className="absolute w-6 h-6 rounded-full animate-ping bg-tupi-earth/30"></div>
      </div>
      <div className="w-5/12 p-6 rounded-lg shadow-md bg-white">
        <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-tupi-earth/10 text-tupi-earth mb-2">
          {year}
        </span>
        <h3 className="text-lg font-bold mb-2 font-heading text-tupi-earth">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      year: "Antes de 1500",
      title: "Formação e expansão",
      description: "Os povos Tupi se expandem pelo litoral brasileiro, desenvolvendo técnicas sustentáveis de agricultura e manejo florestal.",
    },
    {
      year: "Séculos XVI-XVII",
      title: "Contato e resistência",
      description: "Com a chegada dos europeus, os Tupi enfrentam mudanças drásticas, mas mantêm aspectos essenciais de sua relação com a natureza.",
    },
    {
      year: "Século XIX",
      title: "Registro e estudo",
      description: "Pesquisadores começam a documentar sistematicamente os conhecimentos Tupi sobre plantas medicinais e manejo ambiental.",
    },
    {
      year: "Século XX",
      title: "Reconhecimento científico",
      description: "A ciência moderna começa a validar práticas ancestrais Tupi de cultivo e manejo florestal, como o sistema agroflorestal.",
    },
    {
      year: "Anos 1980-1990",
      title: "Movimento ambientalista",
      description: "O conhecimento indígena Tupi ganha destaque no movimento ambientalista global como exemplo de sustentabilidade.",
    },
    {
      year: "Século XXI",
      title: "Renovação e aplicação",
      description: "Princípios ancestrais Tupi inspiram projetos de energia renovável e práticas sustentáveis em comunidades por todo o Brasil.",
    },
  ];

  return (
    <section id="timeline" className="section-padding bg-gradient-to-b from-white to-muted">
      <div className="tupi-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">História e Trajetória</h2>
          <p className="section-subtitle">
            Uma jornada milenar de sabedoria e adaptação
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-tupi-earth/30 rounded-full"></div>

          {/* Timeline events */}
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
