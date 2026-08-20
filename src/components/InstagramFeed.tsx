import { Instagram, Heart, MessageCircle, ExternalLink, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, InstagramPost } from '../data/portfolioData';
import { playShutterSound } from '../utils/audio';

interface InstagramFeedProps {
  soundEnabled: boolean;
}

export default function InstagramFeed({ soundEnabled }: InstagramFeedProps) {
  const instagramUrl = 'https://instagram.com/hopkins.ph98';

  return (
    <section className="relative py-24 sm:py-32 bg-[#0c0c0e] border-t border-[#18181b]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with AOS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16" data-aos="fade-up">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
              <Instagram className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Diario Visual en Quito & Ecuador</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              SIGUE MI TRABAJO
            </h2>

            <p className="text-sm sm:text-base text-[#a1a1aa] font-light">
              Detrás de cámaras, sesiones recientes en Quito y experimentos lumínicos en tiempo real en{' '}
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c5a880] font-mono font-medium hover:underline inline-block"
              >
                @hopkins.ph98
              </a>
            </p>
          </div>

          <div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (soundEnabled) playShutterSound(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#18181b] hover:bg-[#c5a880] text-white hover:text-[#09090b] border border-[#3f3f46] hover:border-[#c5a880] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>Ver Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Instagram 6-Grid feed with Staggered Scroll Animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, index) => (
            <a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={(index * 80) + 100}
              data-aos-duration="750"
              onClick={() => {
                if (soundEnabled) playShutterSound(true);
              }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#18181b] border border-[#27272a] block cursor-pointer shadow-md hover:border-[#c5a880]/60 transition-colors"
            >
              <img
                src={post.imageUrl}
                alt="Instagram post"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-[#09090b]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center gap-2">
                <div className="flex items-center gap-3 text-xs font-medium text-white">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-[#d4d4d8] line-clamp-2 leading-tight">
                  {post.caption}
                </p>
                <div className="mt-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#c5a880] font-bold flex items-center gap-1">
                    Ver en IG <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

              {/* Instagram mini badge top-right */}
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#09090b]/60 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:opacity-0 transition-opacity">
                <Instagram className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

      </div>

    </section>
  );
}
