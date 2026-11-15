import React, { useMemo, useState, useEffect, useRef } from 'react';

/**
 * Animated floating bubbles and ambient lighting background matching the
 * Emerald Green & Harvest Gold brand identity from the logo.
 * Features:
 * - 40 Persistent floating, rising luminous bubbles in Emerald & Gold with 3D glossy highlights
 * - Scroll-driven effervescence: as the user scrolls, new bubbles surge upwards and ambient glow intensifies
 * - 100% Passive scroll listener (zero touch or click interference)
 * - Foreground & background 3D depth layers
 * - 4 breathing ambient aurora orbs
 * - Architectural micro-grid overlay
 */
export const BackgroundAmbient = () => {
  // Deterministic background bubbles across the screen
  const bgBubbles = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => {
      const isGold = i % 2 === 0;
      // Varied bubble sizes: small (18-26px), medium (32-50px), large (62-80px), hero (96-120px)
      const sizeTier = i % 8;
      let size = 20;
      let isHero = false;
      if (sizeTier === 0 || sizeTier === 4) {
        size = 18 + (i % 3) * 4;
      } else if (sizeTier === 1 || sizeTier === 5 || sizeTier === 7) {
        size = 32 + (i % 4) * 6;
      } else if (sizeTier === 2 || sizeTier === 6) {
        size = 62 + (i % 3) * 9;
      } else {
        size = 96 + (i % 3) * 12;
        isHero = true;
      }

      // Horizontal spread across the page width (3% to 97%)
      const left = ((i * 17.3 + 5) % 94) + 3;
      const duration = 16 + (i % 6) * 3.5;
      const delay = -((i * 4.1) % duration);
      const driftX = (i % 2 === 0 ? 1 : -1) * (20 + (i % 5) * 8);
      const driftEnd = (i % 2 === 0 ? -1 : 1) * (15 + (i % 4) * 10);
      const wobbleDuration = 4 + (i % 4) * 1.5;

      return {
        id: `bg-bubble-${i}`,
        isGold,
        isHero,
        size,
        left: `${left.toFixed(1)}%`,
        duration: `${duration.toFixed(1)}s`,
        delay: `${delay.toFixed(1)}s`,
        driftX: `${driftX}px`,
        driftEnd: `${driftEnd}px`,
        wobbleDuration: `${wobbleDuration.toFixed(1)}s`,
        opacity: isHero ? 0.75 : 0.88,
      };
    });
  }, []);

  // Subtle foreground floating bubbles for 3D depth over cards
  const fgBubbles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const isGold = i % 2 === 1;
      const size = 26 + (i % 3) * 12;
      const left = 6 + i * 12;
      const duration = 20 + (i % 4) * 4;
      const delay = -((i * 5.3) % duration);
      const driftX = (i % 2 === 0 ? 30 : -30);
      const driftEnd = (i % 2 === 0 ? -25 : 25);
      const wobbleDuration = 5 + (i % 3);

      return {
        id: `fg-bubble-${i}`,
        isGold,
        size,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        driftX: `${driftX}px`,
        driftEnd: `${driftEnd}px`,
        wobbleDuration: `${wobbleDuration}s`,
        opacity: 0.45,
      };
    });
  }, []);

  // Scroll-driven bubble generation (100% passive, zero touch/click interference)
  const [scrollBubbles, setScrollBubbles] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const lastSpawnTime = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const delta = Math.abs(currentY - lastScrollY.current);
          const now = Date.now();

          setIsScrolling(true);
          if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
          scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
          }, 280);

          // Every time user scrolls a bit, spawn vibrant effervescent bubbles from bottom
          if (delta > 35 || (now - lastSpawnTime.current > 150 && delta > 4)) {
            lastSpawnTime.current = now;
            lastScrollY.current = currentY;

            const newBubble = {
              id: `scroll-${now}-${Math.random().toString(36).substring(2, 6)}`,
              left: `${4 + Math.random() * 92}%`,
              size: 20 + Math.random() * 32, // 20px to 52px
              isGold: Math.random() > 0.45,
              duration: `${2.4 + Math.random() * 1.6}s`,
              driftX: `${(Math.random() - 0.5) * 60}px`,
            };

            setScrollBubbles((prev) => [...prev.slice(-14), newBubble]);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Clean up old scroll bubbles periodically
  useEffect(() => {
    if (scrollBubbles.length === 0) return;
    const timer = setTimeout(() => {
      setScrollBubbles((prev) => prev.slice(2));
    }, 3800);
    return () => clearTimeout(timer);
  }, [scrollBubbles]);

  return (
    <>
      {/* Background Layer: Auroras, Grid, Persistent Bubbles & Scroll-Spawned Bubbles */}
      <div
        className={`global-ambient-bg ${isScrolling ? 'scrolling-active' : ''}`}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
          backgroundColor: '#060B08',
        }}
      >
        {/* Primary Emerald Aurora Orb (Top Left) */}
        <div
          className="ambient-orb orb-emerald"
          style={{
            position: 'absolute',
            top: '-15%',
            left: '-10%',
            width: 'max(650px, 50vw)',
            height: 'max(650px, 50vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.05) 45%, transparent 70%)',
            filter: 'blur(90px)',
            willChange: 'transform',
          }}
        />

        {/* Primary Harvest Gold Orb (Upper Right) */}
        <div
          className="ambient-orb orb-gold"
          style={{
            position: 'absolute',
            top: '8%',
            right: '-12%',
            width: 'max(600px, 45vw)',
            height: 'max(600px, 45vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240, 167, 10, 0.15) 0%, rgba(217, 119, 6, 0.05) 45%, transparent 70%)',
            filter: 'blur(85px)',
            willChange: 'transform',
          }}
        />

        {/* Secondary Mid-Page Emerald Amber Confluence (Center) */}
        <div
          className="ambient-orb orb-center"
          style={{
            position: 'absolute',
            top: '48%',
            left: '20%',
            width: 'max(700px, 55vw)',
            height: 'max(500px, 40vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(240, 167, 10, 0.07) 50%, transparent 75%)',
            filter: 'blur(100px)',
            willChange: 'transform',
          }}
        />

        {/* Lower Harvest Glow Orb (Bottom Right) */}
        <div
          className="ambient-orb orb-gold-bottom"
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '5%',
            width: 'max(650px, 50vw)',
            height: 'max(650px, 50vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240, 167, 10, 0.14) 0%, rgba(16, 185, 129, 0.05) 48%, transparent 70%)',
            filter: 'blur(95px)',
            willChange: 'transform',
          }}
        />

        {/* Subtle Architectural Grid Overlay with Radial Vignette */}
        <div
          className="ambient-grid-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(26, 44, 33, 0.22) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 44, 33, 0.22) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse at 50% 35%, black 25%, rgba(0,0,0,0.3) 65%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 25%, rgba(0,0,0,0.3) 65%, transparent 85%)',
            opacity: 0.85,
          }}
        />

        {/* 36 Persistent Rising Floating Bubbles */}
        <div className="ambient-bubbles-layer" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {bgBubbles.map((b) => (
            <div
              key={b.id}
              className={`floating-bubble ${b.isGold ? 'bubble-gold' : 'bubble-emerald'} ${b.isHero ? 'bubble-hero' : ''}`}
              style={{
                width: `${b.size}px`,
                height: `${b.size}px`,
                left: b.left,
                bottom: '-120px',
                animationDuration: `${b.duration}, ${b.wobbleDuration}`,
                animationDelay: `${b.delay}, ${b.delay}`,
                animationName: 'bubbleFloatUp, bubbleWobble',
                '--drift-x': b.driftX,
                '--drift-end': b.driftEnd,
                '--bubble-opacity': b.opacity,
              }}
            />
          ))}

          {/* Scroll-Spawned Effervescent Bubbles (Spurting Up As You Scroll) */}
          {scrollBubbles.map((b) => (
            <div
              key={b.id}
              className={`floating-bubble scroll-spawn-bubble ${b.isGold ? 'bubble-gold' : 'bubble-emerald'}`}
              style={{
                left: b.left,
                width: `${b.size}px`,
                height: `${b.size}px`,
                animationDuration: b.duration,
                '--drift-x': b.driftX,
              }}
            />
          ))}
        </div>
      </div>

      {/* Foreground Translucent Floating Bubbles (Z-Index 2, above cards for rich depth) */}
      <div
        className="ambient-bubbles-fg"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        {fgBubbles.map((b) => (
          <div
            key={b.id}
            className={`floating-bubble ${b.isGold ? 'bubble-gold' : 'bubble-emerald'}`}
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: b.left,
              bottom: '-100px',
              animationDuration: `${b.duration}, ${b.wobbleDuration}`,
              animationDelay: `${b.delay}, ${b.delay}`,
              animationName: 'bubbleFloatUp, bubbleWobble',
              '--drift-x': b.driftX,
              '--drift-end': b.driftEnd,
              '--bubble-opacity': b.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
};
