import { PROCESS_STEPS } from '../data/portfolioData';
import { ArrowRight, Workflow, CheckCircle2 } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

interface WorkProcessProps {
  soundEnabled: boolean;
  onStartBooking: () => void;
}

export default function WorkProcess({ soundEnabled, onStartBooking }: WorkProcessProps) {
  return (
    <section id="proceso" className="relative py-28 sm:py-36 bg-[#09090b]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-4">
            <Workflow className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Metodología de Trabajo</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-5">
            ¿CÓMO TRABAJAMOS?
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed max-w-2xl mx-auto">
            Un flujo transparente y cuidado desde la primera conversación hasta la entrega final de tus imágenes en Quito.
          </p>
        </div>

        {/* 4 Step Process Cards with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={(index * 150) + 100}
              data-aos-duration="850"
              className="relative p-7 rounded-2xl bg-[#121215] border border-[#27272a] flex flex-col justify-between group hover:border-[#c5a880]/50 hover:bg-[#15151a] transition-all duration-300 shadow-lg"
            >
              {/* Big Numerals Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#3f3f46] group-hover:text-[#c5a880] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#27272a] group-hover:bg-[#c5a880] transition-colors" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#dfc19b] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-[#c5a880]">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Bullet Details */}
              <div className="pt-6 mt-6 border-t border-[#1e1e24] space-y-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-[#71717a]">
                    <CheckCircle2 className="w-3 h-3 text-[#c5a880] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Connecting arrow indicator for desktop (except last step) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#09090b] border border-[#27272a] text-[#71717a] items-center justify-center pointer-events-none shadow-md">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Bottom CTA with AOS */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <button
            type="button"
            onClick={() => {
              if (soundEnabled) playShutterSound(true);
              onStartBooking();
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#c5a880] text-[#09090b] text-xs font-bold uppercase tracking-wider hover:bg-[#dfc19b] active:scale-95 transition-all shadow-[0_0_25px_rgba(197,168,128,0.25)]"
          >
            <span>Iniciar Paso 01: Cuéntame tu idea</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
