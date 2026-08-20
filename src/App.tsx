import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioGallery from './components/PortfolioGallery';
import LightboxModal from './components/LightboxModal';
import FeaturedQuote from './components/FeaturedQuote';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WorkProcess from './components/WorkProcess';
import InstagramFeed from './components/InstagramFeed';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { PORTFOLIO_PHOTOS, PhotoItem } from './data/portfolioData';
import { useAOS } from './utils/useAOS';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedServicePreload, setSelectedServicePreload] = useState<string>('Retratos');

  // Initialize AOS scroll animations safely
  useAOS();

  const handleOpenLightbox = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setSelectedPhoto(null);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSession = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServicePreload(serviceName);
    }
    scrollToSection('contacto');
  };

  const handleBookSimilarFromLightbox = (category: string) => {
    setSelectedServicePreload(category);
    scrollToSection('contacto');
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#e4e4e7] flex flex-col selection:bg-[#c5a880] selection:text-[#09090b] relative">
      
      {/* Top Fixed Header */}
      <Header
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onBookSession={() => handleBookSession()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero
          soundEnabled={soundEnabled}
          onExplorePortfolio={() => scrollToSection('portafolio')}
          onContactClick={() => scrollToSection('contacto')}
        />

        {/* 2. Portfolio Gallery Section with Filterable Masonry */}
        <PortfolioGallery
          soundEnabled={soundEnabled}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 3. Featured Editorial Quote & Before/After Color Grading Comparison */}
        <FeaturedQuote
          soundEnabled={soundEnabled}
          onBookSession={() => handleBookSession()}
        />

        {/* 4. About Section (Detrás de la Cámara) */}
        <AboutSection
          soundEnabled={soundEnabled}
          onBookSession={() => handleBookSession()}
        />

        {/* 5. Services Section */}
        <ServicesSection
          soundEnabled={soundEnabled}
          onSelectServiceForBooking={(service) => handleBookSession(service)}
        />

        {/* 6. Work Process (¿Cómo trabajamos?) */}
        <WorkProcess
          soundEnabled={soundEnabled}
          onStartBooking={() => handleBookSession()}
        />

        {/* 7. Instagram Feed Section */}
        <InstagramFeed
          soundEnabled={soundEnabled}
        />

        {/* 8. Contact & Booking Form */}
        <ContactSection
          soundEnabled={soundEnabled}
          selectedServicePreload={selectedServicePreload}
        />

      </main>

      {/* Footer */}
      <Footer
        soundEnabled={soundEnabled}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        allPhotos={PORTFOLIO_PHOTOS}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        soundEnabled={soundEnabled}
        onBookSimilar={handleBookSimilarFromLightbox}
      />

    </div>
  );
}
