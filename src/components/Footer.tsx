
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-tupi-earth text-white">
      <div className="tupi-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">TUPI</h3>
            <p className="mb-4 text-white/80">
              Apoie o povo Tupi seguindos-os nessas redes sociais.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/groups/136712246367683" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/radiotupi/" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/radiotupi" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#timeline" className="text-white/80 hover:text-white transition-colors">História</a></li>
              <li><a href="#knowledge" className="text-white/80 hover:text-white transition-colors">Sabedoria</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Biblioteca</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Publicações</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Parceiros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Rua José Miguel<br />
                  Vila Leão, Sorocaba, SP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-white/80">(15) 98817-1095</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-white/80">lucas.duarte.dev2024@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} TUPI. Todos os direitos reservados.</p>
          <p className="mt-2">
            Um projeto criado para compartilhar e valorizar a sabedoria do povo originário Tupi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
