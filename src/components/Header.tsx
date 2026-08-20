import { useState, useEffect } from 'react';
import { Camera, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

interface HeaderProps {
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  onBookSession: () => void;
}

export default function Header({ soundEnabled, setSoundEnabled, onBookSession }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const sections = ['inicio', 'portafolio', 'sobre-mi', 'servicios', 'proceso', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { label: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' }
  ];

  const handleNavClick = (href: string) => {
    if (soundEnabled) playShutterSound(true);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    if (soundEnabled) playShutterSound(true);
    setMobileMenuOpen(false);
    onBookSession();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]/70 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo / Wordmark */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#inicio');
          }}
          className="group flex items-center gap-2.5 text-inherit no-underline focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full border border-[#c5a880]/60 flex items-center justify-center bg-[#18181b]/80 group-hover:border-[#c5a880] transition-colors duration-300">
            <Camera className="w-4 h-4 text-[#c5a880] group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-display font-bold text-lg tracking-[0.18em] text-white group-hover:text-[#c5a880] transition-colors">
            HOPKINS.PH98
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm tracking-wider uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a880] rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Sound Toggle + Reservar sesión CTA) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full border border-[#27272a] bg-[#121215] text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-colors"
            title={soundEnabled ? 'Silenciar efectos de obturador' : 'Activar sonido de obturador'}
            aria-label="Toggle camera sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#c5a880]" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={handleBookClick}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#09090b] hover:bg-[#dfc19b] active:scale-95 transition-all shadow-[0_0_20px_rgba(197,168,128,0.2)]"
          >
            <span>Reservar sesión</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full border border-[#27272a] bg-[#121215] text-[#a1a1aa]"
            aria-label="Toggle camera sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#c5a880]" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg border border-[#27272a] bg-[#121215] text-white hover:bg-[#18181b]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/98 border-b border-[#27272a] px-6 py-6 space-y-4 animate-fade-in backdrop-blur-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-base tracking-wider uppercase py-2 border-b border-[#18181b] flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-[#c5a880] font-medium'
                    : 'text-[#d4d4d8] hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleBookClick}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c5a880] text-[#09090b] hover:bg-[#dfc19b] active:scale-98 transition-all"
            >
              <span>Reservar sesión</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
