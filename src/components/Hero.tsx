import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Aperture, Sparkles, MapPin } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

interface HeroProps {
  soundEnabled: boolean;
  onExplorePortfolio: () => void;
  onContactClick: () => void;
}

const HERO_HERO_SLIDES = [
  {
    id: 1,
    title: 'Metro de Quito • Estación Subterránea',
    category: 'Moda Urbana',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=90&w=2000',
    specs: '85mm • f/1.8 • 1/250s • ISO 100',
    location: 'Metro de Quito — San Francisco'
  },
  {
    id: 2,
    title: 'Gothic Streetwear & Adoquines',
    category: 'Estilo & Retrato',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=90&w=2000',
    specs: '50mm • f/2.0 • 1/400s • ISO 160',
    location: 'Centro Histórico — Quito, EC'
  },
  {
    id: 3,
    title: 'Luces Magenta & Nocturna Andina',
    category: 'Sesión Creativa',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=90&w=2000',
    specs: '50mm • f/1.4 • 1/160s • ISO 640',
    location: 'La Mariscal / La Carolina — Quito'
  }
];

export default function Hero({ soundEnabled, onExplorePortfolio, onContactClick }: HeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (index: number) => {
    if (index === currentSlideIndex) return;
    if (soundEnabled) playShutterSound(true);
    setIsTransitioning(true);
    setCurrentSlideIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentSlide = HERO_HERO_SLIDES[currentSlideIndex];

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b]">
      
      {/* Background Images with smooth crossfade */}
      {HERO_HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Cinematic Overlays (Vignette, Grain, Dark Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/75 to-[#09090b]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.75)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Camera Viewfinder Minimal Elements */}
      <div className="absolute inset-6 sm:inset-12 border border-white/5 pointer-events-none hidden md:block">
        {/* Corners */}
        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#c5a880]/50" />
        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#c5a880]/50" />
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#c5a880]/50" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#c5a880]/50" />
        
        {/* Viewfinder Center Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20 pointer-events-none flex items-center justify-center">
          <div className="w-full h-[1px] bg-white absolute" />
          <div className="h-full w-[1px] bg-white absolute" />
        </div>
      </div>

      {/* Main Content with Progressive Staggered Scroll Animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-16 flex flex-col items-center">
        
        {/* Brand & Location Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18181b]/80 border border-[#27272a] backdrop-blur-md mb-6"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <Aperture className="w-3.5 h-3.5 text-[#c5a880]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4d4d8] font-medium">
            Anthony Hopkins • Quito, Ecuador
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
          <span className="text-xs text-[#a1a1aa] font-mono">@hopkins.ph98</span>
        </div>

        {/* Main Headline */}
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl text-balance"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="900"
        >
          Capturando historias a través de una mirada{' '}
          <span className="font-serif italic font-normal text-[#dfc19b] relative inline-block">
            diferente.
          </span>
        </h1>

        {/* Secondary Subtitle */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-[#d4d4d8]/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          Fotografía profesional de retrato, moda urbana y momentos que trascienden en Quito, Ecuador.
        </p>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-14"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button
            type="button"
            onClick={() => {
              if (soundEnabled) playShutterSound(true);
              onExplorePortfolio();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#c5a880] text-[#09090b] text-sm font-semibold uppercase tracking-wider hover:bg-[#dfc19b] hover:shadow-[0_0_30px_rgba(197,168,128,0.3)] active:scale-95 transition-all duration-200"
          >
            <span>Ver portafolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              if (soundEnabled) playShutterSound(true);
              onContactClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#18181b]/90 hover:bg-[#27272a] text-white border border-[#3f3f46] text-sm font-medium uppercase tracking-wider active:scale-95 transition-all duration-200 backdrop-blur-sm"
          >
            <span>Contactar en Quito</span>
          </button>
        </div>

        {/* Slide Switchers & Current Shot Specs */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs text-[#a1a1aa] border-t border-white/10 w-full max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#e4e4e7] font-mono font-medium">{currentSlide.specs}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#a1a1aa]">
            <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="font-medium text-[#d4d4d8]">{currentSlide.location}</span>
          </div>

          {/* Slider Dots */}
          <div className="flex items-center gap-2">
            {HERO_HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => changeSlide(idx)}
                aria-label={`Ver slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  idx === currentSlideIndex
                    ? 'w-6 bg-[#c5a880]'
                    : 'w-2 bg-[#3f3f46] hover:bg-[#71717a]'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#71717a] hover:text-[#c5a880] transition-colors cursor-pointer"
        onClick={() => {
          if (soundEnabled) playShutterSound(true);
          onExplorePortfolio();
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Desplazar</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

    </section>
  );
}
