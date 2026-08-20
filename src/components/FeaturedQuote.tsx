import { useState, TouchEvent, MouseEvent } from 'react';
import { Sliders, Film, Compass, MapPin } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

interface FeaturedQuoteProps {
  soundEnabled: boolean;
  onBookSession: () => void;
}

export default function FeaturedQuote({ soundEnabled, onBookSession }: FeaturedQuoteProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#0c0c0e] overflow-hidden border-y border-[#18181b]">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Editorial Statement & Storytelling with AOS */}
          <div className="lg:col-span-6 space-y-8" data-aos="fade-right" data-aos-duration="900">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
              <Film className="w-3.5 h-3.5" />
              <span>Declaración Artística • Quito</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#e4e4e7] leading-[1.18] font-normal">
              “No solo tomo fotografías.{' '}
              <span className="font-display font-extrabold not-italic text-white underline decoration-[#c5a880]/50 decoration-2 underline-offset-8">
                Capturo emociones
              </span>
              , detalles y momentos que cuentan una historia.”
            </h2>

            <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              Cada disparo en las calles y estudios de Quito es el resultado de un diálogo silencioso entre la luz andina, el sujeto y la atmósfera. 
              Sin artificios ni poses forzadas: estética cinematográfica contemporánea que resiste el paso del tiempo.
            </p>

            {/* Quick stats / core principles */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1e1e24]" data-aos="fade-up" data-aos-delay="200">
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-[#dfc19b]">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#71717a]">Luz y Color de Autor</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white">48h</span>
                <span className="text-[11px] uppercase tracking-wider text-[#71717a]">Preview de Selección</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-[#dfc19b]">RAW</span>
                <span className="text-[11px] uppercase tracking-wider text-[#71717a]">Retoque de Alta Gama</span>
              </div>
            </div>

            <div className="pt-2" data-aos="fade-up" data-aos-delay="300">
              <button
                type="button"
                onClick={() => {
                  if (soundEnabled) playShutterSound(true);
                  onBookSession();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#09090b] text-xs font-bold uppercase tracking-wider hover:bg-[#c5a880] transition-colors shadow-lg active:scale-95"
              >
                <span>Hablemos de tu sesión en Quito</span>
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Color Grading / Cine Comparison Showcase with AOS */}
          <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                <div className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span className="font-medium text-white">Colorimetría de Autor • Hopkins Tone</span>
                </div>
                <span className="text-[11px] text-[#71717a]">Desliza para comparar</span>
              </div>

              {/* Comparison Container */}
              <div
                className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#27272a] shadow-2xl"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* Background (Color Graded Cine Version) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=90&w=1200"
                    alt="Hopkins signature color grade"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full bg-[#09090b]/85 border border-[#c5a880]/50 text-[11px] font-bold uppercase tracking-wider text-[#c5a880] backdrop-blur-md shadow-lg">
                    Edición de Autor (Hopkins Tone)
                  </div>
                </div>

                {/* Foreground Clipped (RAW Flat Capture Simulation) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=90&w=1200"
                      alt="Raw capture"
                      className="absolute inset-0 w-[1000px] max-w-none h-full object-cover object-center filter grayscale-[35%] contrast-[75%] brightness-95"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full bg-[#09090b]/85 border border-white/20 text-[11px] font-medium uppercase tracking-wider text-[#d4d4d8] backdrop-blur-md shadow-lg">
                    Captura RAW Original
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none shadow-xl"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#c5a880] text-[#09090b] flex items-center justify-center shadow-lg border-2 border-white">
                    <Sliders className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-[12px] text-[#71717a] text-center font-mono">
                Sony Full-Frame • Gradación tonal cinematográfica sin alterar la textura natural de la piel
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
