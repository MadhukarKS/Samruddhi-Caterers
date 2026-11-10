import React from 'react';

export const SamruddhiLogo = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
}) => {
  const _variant = variant;
  const emblemSize = size === 'sm' ? 34 : size === 'lg' ? 48 : 40;
  const titleSize = size === 'sm' ? '1.05rem' : size === 'lg' ? '1.45rem' : '1.25rem';
  const taglineSize = size === 'sm' ? '0.62rem' : size === 'lg' ? '0.75rem' : '0.68rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      {/* Modern Geometric Architectural Insignia */}
      <svg
        width={emblemSize}
        height={emblemSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        <rect
          width="48"
          height="48"
          rx="12"
          fill="#172336"
          stroke="rgba(224, 145, 50, 0.48)"
          strokeWidth="1.2"
        />

        <path
          d="M16 16C16 13.7909 17.7909 12 20 12H27C30.3137 12 33 14.6863 33 18C33 21.3137 30.3137 24 27 24H21C17.6863 24 15 26.6863 15 30C15 33.3137 17.6863 36 21 36H28C30.2091 36 32 34.2091 32 32"
          stroke="#F1F5F9"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle
          cx="33"
          cy="15"
          r="2.6"
          fill="#E09132"
        />
      </svg>

      {/* Brand Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
          <span
            style={{
              fontFamily: "var(--font-heading, 'Outfit', sans-serif)",
              fontSize: titleSize,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#F1F5F9',
              transition: 'color 0.2s ease',
            }}
          >
            Samruddhi
          </span>
          <span
            style={{
              fontFamily: "var(--font-heading, 'Outfit', sans-serif)",
              fontSize: titleSize,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#E09132',
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
              color: '#94A3B8',
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
