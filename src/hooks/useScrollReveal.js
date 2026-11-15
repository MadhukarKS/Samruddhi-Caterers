import { useEffect } from 'react';

/**
 * Hook to trigger scroll animations via IntersectionObserver.
 * Observes all elements marked with `.reveal-on-scroll` and adds `.is-visible`
 * when they enter the viewport.
 */
export const useScrollReveal = (dependency) => {
  useEffect(() => {
    // Fallback if window or IntersectionObserver is not available (e.g. test environment)
    if (typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Initial pass and delayed pass to catch dynamically rendered children
    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();
    const timeoutId = setTimeout(observeAll, 120);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [dependency]);
};
