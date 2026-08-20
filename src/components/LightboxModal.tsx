import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Camera, MapPin, Calendar, Share2, Check, ArrowRight } from 'lucide-react';
import { PhotoItem } from '../data/portfolioData';
import { playShutterSound } from '../utils/audio';

interface LightboxModalProps {
  photo: PhotoItem | null;
  allPhotos: PhotoItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
  soundEnabled: boolean;
  onBookSimilar: (category: string, title: string) => void;
}

export default function LightboxModal({
  photo,
  allPhotos,
  isOpen,
  onClose,
  onSelectPhoto,
  soundEnabled,
  onBookSimilar
}: LightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        navigate(1);
      } else if (e.key === 'ArrowLeft') {
        navigate(-1);
      } else if (e.key === 'i' || e.key === 'I') {
        setShowInfo(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, photo]);

  if (!isOpen || !photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === photo.id);

  const navigate = (direction: number) => {
    if (soundEnabled) playShutterSound(true);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = allPhotos.length - 1;
    if (nextIndex >= allPhotos.length) nextIndex = 0;
    onSelectPhoto(allPhotos[nextIndex]);
    setIsZoomed(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b]/96 backdrop-blur-xl animate-fade-in select-none">
      
      {/* Top Bar Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-[#09090b]/90 to-transparent">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-sm tracking-wider text-white">
            HOPKINS.PH98
          </span>
          <span className="text-xs text-[#71717a]">
            {currentIndex + 1} / {allPhotos.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom toggle */}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-[#18181b] border border-[#27272a] text-[#d4d4d8] hover:text-white hover:border-[#3f3f46] transition-colors"
            title={isZoomed ? 'Reducir zoom' : 'Aumentar zoom'}
          >
            {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Share button */}
          <button
            type="button"
            onClick={handleShare}
            className="p-2.5 rounded-full bg-[#18181b] border border-[#27272a] text-[#d4d4d8] hover:text-white hover:border-[#3f3f46] transition-colors"
            title="Copiar enlace"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Close button */}
          <button
            type="button"
            onClick={() => {
              if (soundEnabled) playShutterSound(true);
              onClose();
            }}
            className="p-2.5 rounded-full bg-[#18181b] border border-[#27272a] text-[#d4d4d8] hover:text-white hover:bg-[#27272a] transition-colors"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-12 md:p-16">
        
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-[#18181b]/80 border border-[#27272a] text-white hover:bg-[#27272a] hover:border-[#c5a880] transition-all hover:scale-110"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => navigate(1)}
          className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-[#18181b]/80 border border-[#27272a] text-white hover:bg-[#27272a] hover:border-[#c5a880] transition-all hover:scale-110"
          aria-label="Foto siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* The Image Container */}
        <div
          className={`relative max-h-[82vh] max-w-[88vw] flex items-center justify-center transition-all duration-300 ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="max-h-[80vh] max-w-full object-contain rounded-md shadow-2xl border border-[#27272a]"
          />
        </div>
      </div>

      {/* Bottom Metadata Drawer */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          
          {/* Photo Info */}
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30">
                {photo.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#a1a1aa]">
                <MapPin className="w-3 h-3 text-[#c5a880]" />
                {photo.location}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#71717a]">
                <Calendar className="w-3 h-3" />
                {photo.year}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {photo.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-2">
              {photo.description}
            </p>

            {/* EXIF Specs Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-mono text-[#71717a]">
              <span className="flex items-center gap-1 text-[#d4d4d8]">
                <Camera className="w-3 h-3 text-[#c5a880]" />
                {photo.exif.camera}
              </span>
              <span>• {photo.exif.lens}</span>
              <span>• {photo.exif.aperture}</span>
              <span>• {photo.exif.shutter}</span>
              <span>• {photo.exif.iso}</span>
            </div>
          </div>

          {/* Action CTA: Quiero una sesión similar */}
          <div className="shrink-0 pt-2 md:pt-0">
            <button
              type="button"
              onClick={() => {
                if (soundEnabled) playShutterSound(true);
                onClose();
                onBookSimilar(photo.category, photo.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c5a880] text-[#09090b] text-xs font-bold uppercase tracking-wider hover:bg-[#dfc19b] active:scale-95 transition-all shadow-lg"
            >
              <span>Quiero una sesión similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
