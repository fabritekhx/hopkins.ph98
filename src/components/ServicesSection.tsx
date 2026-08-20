import { Camera, Sparkles, Palette, PartyPopper, ArrowRight, Check, Clock, MapPin, Image as ImageIcon } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';
import { playShutterSound } from '../utils/audio';

interface ServicesSectionProps {
  soundEnabled: boolean;
  onSelectServiceForBooking: (serviceName: string) => void;
}

export default function ServicesSection({ soundEnabled, onSelectServiceForBooking }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'camera':
        return <Camera className="w-6 h-6 text-[#c5a880]" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-[#c5a880]" />;
      case 'palette':
        return <Palette className="w-6 h-6 text-[#c5a880]" />;
      case 'party-popper':
        return <PartyPopper className="w-6 h-6 text-[#c5a880]" />;
      default:
        return <Camera className="w-6 h-6 text-[#c5a880]" />;
    }
  };

  const handleBook = (service: ServiceItem) => {
    if (soundEnabled) playShutterSound(true);
    onSelectServiceForBooking(service.title);
  };

  return (
    <section id="servicios" className="relative py-28 sm:py-36 bg-[#0c0c0e] border-t border-[#18181b]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-4">
            <Camera className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Servicios & Cobertura • Quito, Ecuador</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-5">
            SERVICIOS
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed max-w-2xl mx-auto">
            Soluciones visuales profesionales adaptadas a tu identidad personal, artística o comercial en Quito y a nivel nacional.
          </p>
        </div>

        {/* 4 Service Cards Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={(index * 150) + 100}
              data-aos-duration="850"
              className={`relative rounded-2xl bg-[#121215] border p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#c5a880]/50 hover:shadow-2xl ${
                service.popular
                  ? 'border-[#c5a880]/40 shadow-[0_0_30px_rgba(197,168,128,0.06)]'
                  : 'border-[#27272a]'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#c5a880] text-[#09090b] shadow-md">
                    Más Solicitado en Quito
                  </span>
                </div>
              )}

              {/* Service Info Top */}
              <div className="space-y-5">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#18181b] border border-[#27272a] flex items-center justify-center shadow-inner">
                  {getIcon(service.icon)}
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-[#c5a880] mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Specs quick info */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#1e1e24] text-xs text-[#71717a]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span className="truncate">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span className="truncate">Quito / Estudio</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span className="truncate">{service.photosCount}</span>
                  </div>
                </div>

                {/* Deliverables list */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#d4d4d8] block">
                    Qué incluye la sesión:
                  </span>
                  <ul className="space-y-2 text-xs text-[#a1a1aa]">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button Bottom */}
              <div className="pt-8 mt-4 border-t border-[#1e1e24]">
                <button
                  type="button"
                  onClick={() => handleBook(service)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider bg-[#18181b] hover:bg-[#c5a880] text-white hover:text-[#09090b] border border-[#3f3f46] hover:border-[#c5a880] active:scale-98 transition-all duration-200 shadow-md"
                >
                  <span>Reservar {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project Note with AOS */}
        <div 
          className="mt-12 p-6 rounded-2xl bg-[#121215] border border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <h4 className="text-base font-semibold text-white">¿Tienes un proyecto especial o fuera de estas categorías en Ecuador?</h4>
            <p className="text-xs text-[#a1a1aa] mt-1">Diseñamos paquetes a medida para campañas publicitarias, marcas de ropa, videoclips o giras en todo el país.</p>
          </div>
          <button
            type="button"
            onClick={() => onSelectServiceForBooking('Proyecto Personalizado / Especial')}
            className="shrink-0 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#27272a] hover:bg-[#c5a880] hover:text-[#09090b] text-white transition-all"
          >
            Consultar a medida
          </button>
        </div>

      </div>

    </section>
  );
}
