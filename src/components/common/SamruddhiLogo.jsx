import React from 'react';

/**
 * Official Brand Identity for Samruddhi Group.
 * Uses the authentic flowing emerald 'S' leaf with golden wheat & hand emblem.
 */
export const SamruddhiLogo = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
}) => {
  const emblemSize = size === 'sm' ? 36 : size === 'lg' ? 52 : 44;
  const titleSize = size === 'sm' ? '1.1rem' : size === 'lg' ? '1.5rem' : '1.3rem';
  const taglineSize = size === 'sm' ? '0.62rem' : size === 'lg' ? '0.74rem' : '0.68rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      {/* Official Emblem */}
      <div
        className="brand-logo-emblem"
        style={{
          width: `${emblemSize}px`,
          height: `${emblemSize}px`,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12) 0%, rgba(6, 11, 8, 0.6) 85%)',
          border: '1px solid rgba(240, 167, 10, 0.3)',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5), 0 0 12px rgba(240, 167, 10, 0.18)',
          padding: '2px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        <img
          src="/images/samruddhi-logo.png"
          alt="Samruddhi Group Emblem"
          width="52"
          height="52"
          loading="eager"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 6px rgba(240, 167, 10, 0.3))',
            display: 'block',
          }}
          onError={(e) => {
            // Graceful fallback to JPG if PNG fails
            e.currentTarget.src = '/images/samruddhi-logo.jpg';
          }}
        />
      </div>

      {/* Brand Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
          <span
            style={{
              fontFamily: "var(--font-heading, 'Outfit', sans-serif)",
              fontSize: titleSize,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: variant === 'dark' ? '#060B08' : '#F7FAF8',
              transition: 'color 0.2s ease',
            }}
          >
            Samruddhi
          </span>
          <span
            style={{
              fontFamily: "var(--font-heading, 'Outfit', sans-serif)",
              fontSize: titleSize,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: '#F0A70A',
            }}
          >
            Group
          </span>
        </div>

        {showTagline && (
          <span
            style={{
              fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
              fontSize: taglineSize,
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: variant === 'dark' ? '#4A5B52' : '#82998D',
              marginTop: '0.15rem',
            }}
          >
            Nourishing Trust • Delivering Excellence
          </span>
        )}
      </div>
    </div>
  );
};
