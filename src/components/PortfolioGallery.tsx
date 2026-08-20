import { useState } from 'react';
import { Maximize2, Camera, Eye, Sparkles, MapPin } from 'lucide-react';
import { PORTFOLIO_PHOTOS, PORTFOLIO_CATEGORIES, CategoryType, PhotoItem } from '../data/portfolioData';
import { playShutterSound } from '../utils/audio';

interface PortfolioGalleryProps {
  soundEnabled: boolean;
  onOpenLightbox: (photo: PhotoItem) => void;
}

export default function PortfolioGallery({ soundEnabled, onOpenLightbox }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Todos');

  const filteredPhotos = selectedCategory === 'Todos'
    ? PORTFOLIO_PHOTOS
    : PORTFOLIO_PHOTOS.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (cat: CategoryType) => {
    if (soundEnabled) playShutterSound(true);
    setSelectedCategory(cat);
  };

  const handlePhotoClick = (photo: PhotoItem) => {
    if (soundEnabled) playShutterSound(true);
    onOpenLightbox(photo);
  };

  return (
    <section id="portafolio" className="relative py-28 sm:py-36 bg-[#09090b] border-t border-[#18181b]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-xs text-[#c5a880] uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles className="w-3 h-3 text-[#c5a880]" />
            <span>Trabajos Seleccionados • Quito</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-5">
            PORTAFOLIO
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed max-w-2xl mx-auto">
            Una selección de momentos, personas y perspectivas capturadas a través de mi lente en Quito y sus alrededores.
          </p>
        </div>

        {/* Category Filters with AOS */}
        <div 
          className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'Todos'
              ? PORTFOLIO_PHOTOS.length
              : PORTFOLIO_PHOTOS.filter(p => p.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#c5a880] text-[#09090b] shadow-[0_0_20px_rgba(197,168,128,0.25)] scale-105'
                    : 'bg-[#121215] text-[#a1a1aa] border border-[#27272a] hover:text-white hover:border-[#3f3f46]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-[#09090b]/20 text-[#09090b] font-bold' : 'bg-[#1e1e24] text-[#71717a]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Editorial Photo Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            const isWide = photo.aspectRatio === 'aspect-[16/9]';
            // Stagger animations based on index (0, 100, 200, 300, etc.)
            const animDelay = ((index % 6) * 100) + 100;

            return (
              <div
                key={photo.id}
                onClick={() => handlePhotoClick(photo)}
                data-aos="fade-up"
                data-aos-delay={animDelay}
                data-aos-duration="850"
                className={`group relative overflow-hidden rounded-xl bg-[#121215] border border-[#27272a]/80 cursor-pointer shadow-lg transition-all duration-500 hover:border-[#c5a880]/50 hover:shadow-2xl ${
                  isWide ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Photo Aspect Ratio Wrapper */}
                <div className={`w-full overflow-hidden ${photo.aspectRatio} ${isWide ? 'sm:aspect-[21/9]' : ''}`}>
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-90"
                  />
                </div>

                {/* Subtle Grain & Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Corner Quick View Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#09090b]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <Maximize2 className="w-4 h-4 text-[#c5a880]" />
                </div>

                {/* Top Left Category Pill */}
                <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#09090b]/80 backdrop-blur-md text-[#c5a880] border border-[#c5a880]/30 shadow-md">
                    {photo.category}
                  </span>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono text-[#a1a1aa] uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#c5a880]" />
                      <span>{photo.location}</span>
                      <span>• {photo.year}</span>
                    </p>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
                      {photo.title}
                    </h3>
                    <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-[#71717a]">
                      <Camera className="w-3 h-3 text-[#c5a880]" />
                      <span>{photo.exif.lens} • {photo.exif.aperture}</span>
                    </div>
                  </div>
                </div>

                {/* Active Focus Border */}
                <div className="absolute inset-0 border-2 border-[#c5a880] rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom Portfolio Count Info */}
        <div 
          className="mt-14 pt-8 border-t border-[#18181b] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span>Mostrando {filteredPhotos.length} tomas de autor en Quito y Ecuador</span>
          <span className="font-mono text-[#a1a1aa]">Anthony Hopkins • @hopkins.ph98 Archive</span>
        </div>

      </div>

    </section>
  );
}
