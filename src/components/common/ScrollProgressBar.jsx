import React, { useState, useEffect } from 'react';

/**
 * Scroll Progress Bar that renders at the top of the viewport.
 * Tracks reading/scrolling progress with a radiant Emerald-to-Harvest-Gold beam.
 */
export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const current = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, current)));
          } else {
            setScrollProgress(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (scrollProgress <= 0.5) return null;

  return (
    <div
      className="scroll-progress-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 1001,
        pointerEvents: 'none',
        backgroundColor: 'rgba(6, 11, 8, 0.4)',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #10B981 0%, #34D399 50%, #F0A70A 100%)',
          boxShadow: '0 0 10px rgba(240, 167, 10, 0.7), 0 0 4px rgba(16, 185, 129, 0.8)',
          transition: 'width 0.1s linear',
          position: 'relative',
        }}
      >
        {/* Leading Tip Glow Dot */}
        <div
          style={{
            position: 'absolute',
            right: '-2px',
            top: '-2px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: '#F0A70A',
            boxShadow: '0 0 8px #F0A70A, 0 0 14px rgba(240, 167, 10, 0.9)',
          }}
        />
      </div>
    </div>
  );
};
