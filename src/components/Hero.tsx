
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tupi-pattern-bg pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-tupi-river/10 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-tupi-sun/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-tupi-leaf/10 blur-3xl"></div>
      </div>

      <div className="tupi-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-tupi-earth">
              <span className="block">Sabedoria Tupi</span>
          
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-tupi-earth/80 max-w-lg mx-auto lg:mx-0">
              Conheça como a cultura, conhecimento e tradições do povo originário Tupi podem inspirar práticas energéticas sustentáveis para o nosso planeta.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-tupi-forest hover:bg-tupi-forest/90 text-white">
                Explorar
              </Button>
              <Button variant="outline" className="border-tupi-earth text-tupi-earth hover:bg-tupi-earth/10">
                Saber mais
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="aspect-square relative rounded-full overflow-hidden bg-tupi-clay/10 border-4 border-tupi-earth/20 shadow-xl">
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <img 
                  src="https://s2-g1.glbimg.com/oy4s4fThUtDLGocs45I9qZxCe_s=/0x0:768x632/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/u/P/eyPaiGRuG3wWBmFl9mhQ/1433ce28-aeee-4d18-8545-9e9dd786c407.jpeg" 
                  alt="Natureza e sustentabilidade" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-tupi-earth/70 hover:text-tupi-earth transition-colors">
            <ArrowDown size={25} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
