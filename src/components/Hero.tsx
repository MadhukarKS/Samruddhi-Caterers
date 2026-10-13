import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface HeroProps {
  onRequestProposal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestProposal, onExploreServices }) => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        background: '#071A14',
      }}
    >
      {/* Background Cinematic Food Service Photography */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          opacity: 0.42,
          transform: 'scale(1.02)',
          transition: 'transform 10s ease-out',
        }}
      />

      {/* Luxury Vignette & Dark Emerald Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 50% 40%, rgba(18, 58, 46, 0.45) 0%, rgba(8, 24, 18, 0.88) 75%, rgba(5, 18, 13, 0.98) 100%),
            linear-gradient(180deg, rgba(8, 24, 18, 0.7) 0%, rgba(8, 24, 18, 0.3) 50%, rgba(8, 24, 18, 0.95) 100%)
          `,
        }}
      />

      {/* Decorative Subtle Gold Lines */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '4%',
          width: '1px',
          height: '240px',
          background: 'linear-gradient(180deg, transparent, rgba(197, 168, 128, 0.3), transparent)',
          display: 'none',
        }}
        className="decorative-line"
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '4%',
          width: '1px',
          height: '240px',
          background: 'linear-gradient(180deg, transparent, rgba(197, 168, 128, 0.3), transparent)',
          display: 'none',
        }}
        className="decorative-line"
      />

      {/* Main Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Established Group Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '1.75rem' }} className="animate-fade-in">
          <div className="badge-gold badge-gold-dark">
            <ShieldCheck size={14} color="#D4AF37" />
            <span>Over 20 Years of Food-Service Leadership</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.75rem, 6.2vw, 5.25rem)',
            color: '#FFFFFF',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            maxWidth: '960px',
            margin: '0 auto 1.5rem auto',
            textShadow: '0 4px 24px rgba(0, 0, 0, 0.6)',
          }}
        >
          Nourishing Trust.{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FAF7F2 30%, #E7D5BA 70%, #C5A880 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            Delivering Excellence.
          </span>
        </h1>

        {/* Champagne Divider Line */}
        <div className="gold-line gold-line-center" style={{ width: '80px', height: '2px', opacity: 0.8 }} />

        {/* Supporting Paragraph */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            lineHeight: 1.8,
            color: '#E1ECE6',
            maxWidth: '820px',
            margin: '0 auto 2.75rem auto',
            fontWeight: 300,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          For over two decades, Samruddhi Group has delivered dependable food-service and hospitality solutions through
          quality ingredients, professional teams, disciplined operations and an uncompromising commitment to hygiene.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          <button
            onClick={onExploreServices}
            className="btn btn-primary"
            style={{
              padding: '1rem 2.25rem',
              fontSize: '1rem',
              letterSpacing: '0.04em',
            }}
            id="hero-explore-cta"
          >
            <span>Explore Our Services</span>
            <ArrowRight size={17} />
          </button>

          <button
            onClick={onRequestProposal}
            className="btn btn-secondary"
            style={{
              padding: '1rem 2.25rem',
              fontSize: '1rem',
              letterSpacing: '0.04em',
            }}
            id="hero-request-proposal-cta"
          >
            <span>Request a Proposal</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 2.5rem)',
            padding: '1rem 1.75rem',
            background: 'rgba(9, 29, 22, 0.65)',
            border: '1px solid rgba(197, 168, 128, 0.22)',
            borderRadius: 'var(--radius-md)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E1ECE6', fontSize: '0.85rem' }}>
            <CheckCircle2 size={16} color="#C5A880" />
            <span>Industrial & Corporate Dining</span>
          </div>
          <span style={{ color: 'rgba(197, 168, 128, 0.3)', display: 'none' }} className="sep">|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E1ECE6', fontSize: '0.85rem' }}>
            <Clock size={16} color="#C5A880" />
            <span>20+ Years Track Record</span>
          </div>
          <span style={{ color: 'rgba(197, 168, 128, 0.3)', display: 'none' }} className="sep">|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E1ECE6', fontSize: '0.85rem' }}>
            <ShieldCheck size={16} color="#C5A880" />
            <span>Central Commissary in Jigani, Bengaluru</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          cursor: 'pointer',
          opacity: 0.8,
        }}
        onClick={onExploreServices}
        aria-label="Scroll down to metrics and about section"
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--color-gold-light)',
          }}
        >
          Discover
        </span>
        <ChevronDown size={18} color="#C5A880" className="bounce-subtle" />
      </div>

      <style>{`
        @keyframes subtleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .bounce-subtle {
          animation: subtleBounce 2.5s infinite ease-in-out;
        }
        @media (min-width: 768px) {
          .sep { display: inline !important; }
          .decorative-line { display: block !important; }
        }
      `}</style>
    </section>
  );
};
