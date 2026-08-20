import { useEffect } from 'react';

/**
 * Initializes and manages scroll-triggered animations (AOS-style)
 * using the high-performance native browser IntersectionObserver.
 */
export function initAOS() {
  if (typeof window === 'undefined') return () => {};

  // Mark document as AOS initialized
  document.documentElement.classList.add('aos-init');

  const observeElements = () => {
    const elements = document.querySelectorAll<HTMLElement>('[data-aos]');
    
    if (!('IntersectionObserver' in window)) {
      // Fallback for environments without IntersectionObserver
      elements.forEach((el) => {
        el.classList.add('aos-animate');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            const once = entry.target.getAttribute('data-aos-once') !== 'false';
            if (once) {
              observer.unobserve(entry.target);
            }
          } else {
            const once = entry.target.getAttribute('data-aos-once') !== 'false';
            if (!once) {
              entry.target.classList.remove('aos-animate');
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '100px 0px 50px 0px', // Trigger slightly ahead of scroll
        threshold: [0, 0.05, 0.1],
      }
    );

    elements.forEach((el) => {
      // If already in viewport on load, animate immediately
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight + 100 && rect.bottom > -100;
      if (inView) {
        el.classList.add('aos-animate');
      } else {
        observer.observe(el);
      }
    });

    return observer;
  };

  // Run on next tick to ensure DOM is ready
  const rafId = requestAnimationFrame(() => {
    observeElements();
  });

  // Watch for dynamic DOM changes (e.g. category filter clicks)
  const mutationObserver = new MutationObserver(() => {
    observeElements();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Global safety timeout: guarantee all elements are visible after 1.5s
  const safetyTimeout = setTimeout(() => {
    document.querySelectorAll('[data-aos]').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('aos-animate');
      }
    });
  }, 1200);

  return () => {
    cancelAnimationFrame(rafId);
    clearTimeout(safetyTimeout);
    mutationObserver.disconnect();
  };
}

export function useAOS() {
  useEffect(() => {
    const cleanup = initAOS();
    return cleanup;
  }, []);
}
