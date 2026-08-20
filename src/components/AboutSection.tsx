import { useState } from 'react';
import { Camera, User, CheckCircle2, MapPin, Sparkles, Sliders, ShieldCheck } from 'lucide-react';
import { GEAR_ITEMS } from '../data/portfolioData';
import { playShutterSound } from '../utils/audio';

interface AboutSectionProps {
  soundEnabled: boolean;
  onBookSession: () => void;
}

export default function AboutSection({ soundEnabled, onBookSession }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<'bio' | 'gear' | 'filosofia'>('bio');

  const specialties = [
    { name: 'Retratos', desc: 'Carácter, autenticidad y mirada en Quito' },
    { name: 'Moda & Streetwear', desc: 'Lookbooks editoriales y marcas locales' },
    { name: 'Fotografía Urbana', desc: 'Metro de Quito, Centro Histórico & calles' },
    { name: 'Sesiones Creativas', desc: 'Conceptos lumínicos y nocturna andina' }
  ];

  return (
    <section id="sobre-mi" className="relative py-28 sm:py-36 bg-[#09090b] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#c5a880]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with AOS */}
        <div className="max-w-3xl mb-16 sm:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-4">
            <User className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Perfil & Trayectoria • Quito, Ecuador</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            DETRÁS DE LA CÁMARA
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] mt-3 font-light">
            Fotógrafo profesional radicado en la Mitad del Mundo, capturando la energía urbana y la esencia de cada persona.
          </p>
        </div>

        {/* Main Grid: Portrait on Left, Bio/Tabs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Photographer Picture & Identity Card with AOS fade-right */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right" data-aos-duration="900">
            
            <div className="relative group rounded-2xl overflow-hidden border border-[#27272a] shadow-2xl bg-[#121215]">
              
              {/* Graphic circle badge resembling the camera spotlight */}
              <div className="aspect-[4/5] overflow-hidden relative bg-[#0d0d10] flex items-center justify-center">
                {/* Real representation of Anthony Hopkins profile with dramatic warm top rim light and glasses */}
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=1000"
                    alt="Anthony Hopkins - Fotógrafo Profesional en Quito Ecuador"
                    className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle warm rim light glow overlay matching his exact photo lighting */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#09090b] via-transparent to-[#c5a880]/30 mix-blend-overlay pointer-events-none" />
                </div>
              </div>

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent pointer-events-none" />

              {/* Float Card Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide">Anthony Hopkins</h3>
                    <p className="text-sm font-mono text-[#c5a880] flex items-center gap-1.5">
                      <span>@hopkins.ph98</span>
                      <span className="text-xs text-[#71717a]">• Quito, EC</span>
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-[#18181b] border border-[#c5a880]/50 flex items-center justify-center shadow-lg">
                    <Camera className="w-5 h-5 text-[#c5a880]" />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#18181b]/90 border border-[#27272a] text-[#d4d4d8]">
                    <MapPin className="w-3 h-3 text-[#c5a880]" />
                    Quito, Ecuador • 2.850 msnm
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#dfc19b]">
                    Full-Frame Sony
                  </span>
                </div>
              </div>
            </div>

            {/* Specialties Badges Grid */}
            <div className="p-6 rounded-xl bg-[#121215] border border-[#27272a] space-y-4" data-aos="fade-up" data-aos-delay="150">
              <span className="text-xs uppercase tracking-widest text-[#71717a] font-bold block">
                Especialidades en Quito
              </span>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((spec, index) => (
                  <div 
                    key={spec.name} 
                    className="p-3 rounded-lg bg-[#18181b]/70 border border-[#27272a]/60 hover:border-[#c5a880]/40 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 50}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                      {spec.name}
                    </div>
                    <p className="text-[11px] text-[#71717a] mt-0.5 leading-snug">{spec.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Bio Narrative & Interactive Tabs with AOS fade-left */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-left" data-aos-duration="900">
            
            {/* Custom Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-[#27272a] pb-3 overflow-x-auto">
              <button
                type="button"
                onClick={() => {
                  if (soundEnabled) playShutterSound(true);
                  setActiveTab('bio');
                }}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  activeTab === 'bio'
                    ? 'bg-[#18181b] text-[#c5a880] border border-[#3f3f46] shadow-sm'
                    : 'text-[#71717a] hover:text-white'
                }`}
              >
                Mi Historia
              </button>

              <button
                type="button"
                onClick={() => {
                  if (soundEnabled) playShutterSound(true);
                  setActiveTab('gear');
                }}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  activeTab === 'gear'
                    ? 'bg-[#18181b] text-[#c5a880] border border-[#3f3f46] shadow-sm'
                    : 'text-[#71717a] hover:text-white'
                }`}
              >
                Equipo & Técnica
              </button>

              <button
                type="button"
                onClick={() => {
                  if (soundEnabled) playShutterSound(true);
                  setActiveTab('filosofia');
                }}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  activeTab === 'filosofia'
                    ? 'bg-[#18181b] text-[#c5a880] border border-[#3f3f46] shadow-sm'
                    : 'text-[#71717a] hover:text-white'
                }`}
              >
                Visión & Quito
              </button>
            </div>

            {/* TAB 1: BIO */}
            {activeTab === 'bio' && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-5 text-base sm:text-lg text-[#d4d4d8]/90 font-light leading-relaxed">
                  <p>
                    Soy <strong className="font-semibold text-white">Anthony Hopkins</strong>, fotógrafo profesional independiente radicado en <span className="text-[#c5a880] font-medium">Quito, Ecuador</span>. Mi pasión es capturar personas, emociones y momentos auténticos desde una mirada cinematográfica diferente.
                  </p>
                  <p>
                    Mi trabajo se desenvuelve principalmente en la fotografía de <strong className="text-white font-medium">retrato</strong>, <strong className="text-white font-medium">moda urbana</strong> y <strong className="text-white font-medium">narrativa documental</strong>. Aprovecho los contrastes visuales únicos de Quito: desde las estaciones subterráneas del nuevo Metro de Quito y los adoquines patrimoniales del Centro Histórico, hasta los atardeceres dorados en Guápulo y los parques andinos.
                  </p>
                  <p className="text-[#a1a1aa]">
                    Busco que cada fotografía tenga identidad propia, hable por sí sola y transmita una emoción honesta. No creo en las poses forzadas; mi enfoque se basa en una dirección cercana, relajada y transparente donde cada persona se sienta cómoda y segura frente al lente.
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#121215] border border-[#27272a] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Dirección Empática & Natural</h4>
                      <p className="text-xs text-[#a1a1aa] mt-0.5">Te acompaño paso a paso para que te sientas en confianza y tus expresiones fluyan.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121215] border border-[#27272a] flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Colorimetría de Autor</h4>
                      <p className="text-xs text-[#a1a1aa] mt-0.5">Tratamiento tonal cinematográfico y tonos de piel fieles y favorecedores.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: GEAR */}
            {activeTab === 'gear' && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-sm text-[#a1a1aa]">
                  Equipamiento profesional de referencia óptica Full-Frame optimizado para la luz andina de Quito y sesiones nocturnas:
                </p>
                <div className="space-y-3">
                  {GEAR_ITEMS.map((item) => (
                    <div key={item.name} className="p-3.5 rounded-xl bg-[#121215] border border-[#27272a] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:border-[#3f3f46] transition-colors">
                      <div>
                        <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-wider block">{item.category}</span>
                        <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                      </div>
                      <p className="text-xs text-[#71717a] font-light">{item.spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: FILOSOFÍA */}
            {activeTab === 'filosofia' && (
              <div className="space-y-6 animate-fade-in">
                <div className="p-6 rounded-2xl bg-[#121215] border border-[#27272a] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#c5a880]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>QUITO, ECUADOR • ESTÉTICA ANDINA & URBANA</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Mi Manifiesto Visual</h3>
                  <blockquote className="border-l-2 border-[#c5a880] pl-4 text-sm text-[#d4d4d8] italic leading-relaxed">
                    “Una buena fotografía no busca complacer al algoritmo, busca conmover a quien la contempla. La verdadera belleza reside en la imperfección honesta y el instante no planificado en las calles de Quito.”
                  </blockquote>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    En cada proyecto —sea un book personal, una sesión de moda o una cobertura de evento— dedico el tiempo necesario para comprender la visión y personalidad de cada cliente.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] text-center">
                    <span className="text-2xl font-display font-bold text-[#c5a880]">1 a 1</span>
                    <span className="block text-xs text-[#a1a1aa] mt-1">Atención directa y personalizada</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] text-center">
                    <span className="text-2xl font-display font-bold text-white">Quito + EC</span>
                    <span className="block text-xs text-[#a1a1aa] mt-1">Disponibilidad en todo el país</span>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  if (soundEnabled) playShutterSound(true);
                  onBookSession();
                }}
                className="px-7 py-3 rounded-full bg-[#c5a880] text-[#09090b] text-xs font-bold uppercase tracking-wider hover:bg-[#dfc19b] active:scale-95 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(197,168,128,0.25)]"
              >
                Planear sesión en Quito
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
