import { Camera, Instagram, ArrowUp, Mail, MessageSquare, MapPin } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

interface FooterProps {
  soundEnabled: boolean;
}

export default function Footer({ soundEnabled }: FooterProps) {
  const scrollToTop = () => {
    if (soundEnabled) playShutterSound(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070709] border-t border-[#18181b] text-[#a1a1aa] py-16 sm:py-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#18181b]">
          
          {/* Brand & Tagline */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#c5a880]/50 flex items-center justify-center bg-[#121215]">
                <Camera className="w-4 h-4 text-[#c5a880]" />
              </div>
              <span className="font-display font-bold text-xl tracking-[0.2em] text-white">
                HOPKINS.PH98
              </span>
            </div>
            
            <p className="text-xs uppercase tracking-widest text-[#71717a] font-medium flex items-center justify-center md:justify-start gap-1.5">
              <span>Fotografía</span>
              <span>•</span>
              <span>Retratos</span>
              <span>•</span>
              <span>Moda</span>
              <span>•</span>
              <span className="text-[#c5a880]">Quito, Ecuador</span>
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#portafolio" className="hover:text-white transition-colors">Portafolio</a>
            <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/hopkins.ph98"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @hopkins.ph98"
              className="p-2.5 rounded-full bg-[#121215] border border-[#27272a] hover:text-white hover:border-[#c5a880] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/593987654321?text=Hola%20Anthony!%20Vengo%20de%20tu%20web"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Ecuador"
              className="p-2.5 rounded-full bg-[#121215] border border-[#27272a] hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href="mailto:contacto@hopkinsph.com"
              aria-label="Email"
              className="p-2.5 rounded-full bg-[#121215] border border-[#27272a] hover:text-white hover:border-[#c5a880] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="p-2.5 rounded-full bg-[#18181b] border border-[#3f3f46] hover:bg-[#c5a880] hover:text-[#09090b] text-white transition-all ml-2"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a] text-center sm:text-left">
          <p>© 2026 Hopkins.ph98. Todos los derechos reservados.</p>
          <p className="font-mono text-[11px] text-[#71717a] flex items-center justify-center sm:justify-start gap-1">
            <MapPin className="w-3 h-3 text-[#c5a880]" />
            <span>Anthony Hopkins Photography • Quito, Ecuador (Mitad del Mundo)</span>
          </p>
        </div>

      </div>

    </footer>
  );
}
