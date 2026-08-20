import { useState, useEffect, FormEvent } from 'react';
import { Send, Instagram, MessageSquare, Mail, Check, Sparkles, ChevronDown, MapPin, Calendar } from 'lucide-react';
import { FAQS } from '../data/portfolioData';
import { playShutterSound } from '../utils/audio';

interface ContactSectionProps {
  soundEnabled: boolean;
  selectedServicePreload?: string;
}

export default function ContactSection({ soundEnabled, selectedServicePreload }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoSession: selectedServicePreload || 'Retratos',
    ubicacion: 'Quito — Centro Histórico',
    fecha: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (selectedServicePreload) {
      setFormData(prev => ({ ...prev, tipoSession: selectedServicePreload }));
    }
  }, [selectedServicePreload]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (soundEnabled) playShutterSound(true);
    setLoading(true);

    // Simulate reliable sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `¡Hola Anthony! Vengo de tu web hopkins.ph98. Me interesa una sesión de ${formData.tipoSession || 'Fotografía'} en ${formData.ubicacion || 'Quito'}. Mi nombre es ${formData.nombre || '...'}.`
    );
    // WhatsApp direct with Ecuador Country Code +593
    return `https://wa.me/593987654321?text=${text}`;
  };

  return (
    <section id="contacto" className="relative py-28 sm:py-36 bg-[#09090b]">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Contacto Directo • Quito, Ecuador</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-5">
            CREEMOS ALGO INCREÍBLE
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed max-w-2xl mx-auto">
            ¿Tienes una idea, proyecto o quieres realizar una sesión fotográfica en Quito o cualquier rincón de Ecuador? Hablemos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct channels & Information with AOS */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right" data-aos-duration="900">
            
            <div className="p-8 rounded-2xl bg-[#121215] border border-[#27272a] space-y-6 shadow-xl">
              <h3 className="text-xl font-display font-bold text-white">Canales de Contacto Directo</h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Respondo personalmente cada mensaje en un plazo máximo de 24 horas. Elige la vía que te resulte más cómoda:
              </p>

              {/* Action Buttons: WhatsApp Ecuador, Instagram, Email */}
              <div className="space-y-3 pt-2">
                {/* WhatsApp */}
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (soundEnabled) playShutterSound(true);
                  }}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-emerald-500/50 hover:bg-emerald-950/20 text-white transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-white group-hover:text-emerald-400 transition-colors">WhatsApp Directo</span>
                      <span className="text-[11px] text-[#71717a] font-mono">+593 Ecuador (Chat prioritario)</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#a1a1aa] group-hover:text-white font-mono font-medium">Escribir →</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/hopkins.ph98"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (soundEnabled) playShutterSound(true);
                  }}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#c5a880]/50 hover:bg-[#c5a880]/5 text-white transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-white group-hover:text-[#c5a880] transition-colors">Instagram DM</span>
                      <span className="text-[11px] text-[#71717a] font-mono">@hopkins.ph98</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#a1a1aa] group-hover:text-white font-mono font-medium">Mensaje →</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:contacto@hopkinsph.com?subject=Consulta%20Sesion%20Fotografica%20Quito"
                  onClick={() => {
                    if (soundEnabled) playShutterSound(true);
                  }}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] hover:bg-[#1e1e24] text-white transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d4d4d8]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-white">Correo Electrónico</span>
                      <span className="text-[11px] text-[#71717a] font-mono">contacto@hopkinsph.com</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#a1a1aa] group-hover:text-white font-mono font-medium">Enviar →</span>
                </a>
              </div>

              {/* Location & Studio Note */}
              <div className="pt-4 border-t border-[#1e1e24] text-xs text-[#71717a] space-y-1.5">
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span><strong>Base:</strong> Quito, Ecuador (Centro, Norte, Cumbayá & Valles).</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span><strong>Disponibilidad:</strong> Sesiones de lunes a domingo previa reserva.</span>
                </p>
              </div>
            </div>

            {/* Quick FAQ Section */}
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="200">
              <span className="text-xs uppercase tracking-widest text-[#71717a] font-bold block">
                Preguntas Frecuentes
              </span>
              <div className="space-y-2">
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#121215] border border-[#27272a] overflow-hidden transition-colors hover:border-[#3f3f46]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs font-semibold text-white hover:text-[#c5a880] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-[#71717a] transition-transform duration-200 shrink-0 ${
                        openFaq === idx ? 'rotate-180 text-[#c5a880]' : ''
                      }`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-xs text-[#a1a1aa] leading-relaxed border-t border-[#1e1e24] pt-3 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form with AOS */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-duration="900">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121215] border border-[#27272a] shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#c5a880]/20 border border-[#c5a880] flex items-center justify-center mx-auto text-[#c5a880]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">¡Solicitud Enviada con Éxito!</h3>
                  <p className="text-sm text-[#a1a1aa] max-w-md mx-auto leading-relaxed">
                    Muchas gracias por contactarme, <strong className="text-white">{formData.nombre}</strong>. He recibido los detalles de tu consulta para una sesión de <strong className="text-[#c5a880]">{formData.tipoSession}</strong> en Quito y te responderé en breve.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Abrir copia en WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nombre: '',
                          email: '',
                          telefono: '',
                          tipoSession: 'Retratos',
                          ubicacion: 'Quito — Centro Histórico',
                          fecha: '',
                          mensaje: ''
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#d4d4d8] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-[#1e1e24] pb-4 mb-2">
                    <h3 className="text-xl font-display font-bold text-white">Solicitud de Sesión Fotográfica</h3>
                    <p className="text-xs text-[#71717a] mt-1">Completa los campos y coordinaremos los detalles para tu sesión en Quito.</p>
                  </div>

                  {/* Field: Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8] mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej: Gabriela Morales"
                      className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder-[#52525b] text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                    />
                  </div>

                  {/* Row: Email & Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8] mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="gabriela@ejemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder-[#52525b] text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8] mb-2">
                        WhatsApp / Celular (Ecuador)
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+593 99 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder-[#52525b] text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row: Tipo de sesión & Locación en Quito */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="tipoSession" className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8] mb-2">
                        Tipo de Sesión *
                      </label>
                      <select
                        id="tipoSession"
                        value={formData.tipoSession}
                        onChange={(e) => setFormData({ ...formData, tipoSession: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                      >
                        <option value="Retratos">Retratos Personales / Artísticos</option>
                        <option value="Fotografía de moda">Moda Urbana & Lookbook</option>
                        <option value="Sesiones creativas">Sesión Creativa Nocturna / Estudio</option>
                        <option value="Eventos">Eventos & Cobertura Documental</option>
                        <option value="Fotografía urbana">Sesión Urbana en Calles / Metro</option>
                        <option value="Otro">Proyecto Especial / Marca</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="ubicacion" className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8] mb-2">
                        Locación Preferida
                      </label>
                      <select
                        id="ubicacion"
                        value={formData.ubicacion}
                        onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                      >
                        <option value="Quito — Centro Histórico">Centro Histórico de Quito</option>
                        <option value="Metro de Quito (Estaciones)">Metro de Quito (Estaciones)</option>
                        <option value="Parque La Carolina / Jardín Botánico">Parque La Carolina / Jardín Botánico</option>
                        <option value="Cumbayá / Valle de Tumbaco">Cumbayá / Tumbaco</option>
                        <option value="Mirador de Guápulo / Itchimbía">Mirador de Guápulo / Itchimbía</option>
                        <option value="Estudio Fotográfico Privado">Estudio Fotográfico Privado</option>
                        <option value="Otra locación en Ecuador">Otra provincia / A coordinar</option>
                      </select>
                    </div>
                  </div>

                  {/* Field: Fecha estimada */}
                  <div>
                    <label htmlFor="fecha" className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8] mb-2">
                      Fecha Estimada / Disponibilidad
                    </label>
                    <input
                      id="fecha"
                      type="text"
                      value={formData.fecha}
                      onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                      placeholder="Ej: Este fin de semana / Próximo mes / Días entre semana"
                      className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder-[#52525b] text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                    />
                  </div>

                  {/* Field: Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8] mb-2">
                      Mensaje / Cuéntame tu Visión *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Cuéntame sobre ti, qué estilo de fotos buscas, si tienes referencias visuales o alguna idea en mente..."
                      className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder-[#52525b] text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c5a880] hover:bg-[#dfc19b] text-[#09090b] shadow-[0_0_25px_rgba(197,168,128,0.25)] active:scale-98 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Enviando solicitud...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar solicitud de sesión</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#71717a] text-center font-mono">
                    Tus datos se manejan con estricta confidencialidad. Sin spam.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
