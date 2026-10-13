import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const SamruddhiLogo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true
}) => {
  const isDark = variant === 'dark';

  const emblemSize = size === 'sm' ? 36 : size === 'lg' ? 56 : 46;
  const titleSize = size === 'sm' ? '1.05rem' : size === 'lg' ? '1.5rem' : '1.25rem';
  const taglineSize = size === 'sm' ? '0.62rem' : size === 'lg' ? '0.78rem' : '0.68rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
      {/* Heraldic Emblem SVG */}
      <svg
        width={emblemSize}
        height={emblemSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 2px 8px rgba(197, 168, 128, 0.25))' }}
        aria-hidden="true"
      >
        {/* Background shield/circle */}
        <circle cx="50" cy="50" r="46" fill={isDark ? '#081713' : '#0B251D'} stroke="#C5A880" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#C5A880" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        
        {/* Wheat sheafs / Golden ears of grain representing Samruddhi (Abundance & Nourishment) */}
        <path
          d="M26 65C24 53 32 38 48 30C46 38 40 48 34 54C30 58 27 62 26 65Z"
          fill="#C5A880"
          opacity="0.85"
        />
        <path
          d="M74 65C76 53 68 38 52 30C54 38 60 48 66 54C70 58 73 62 74 65Z"
          fill="#C5A880"
          opacity="0.85"
        />

        {/* Central Crown / Regal arch */}
        <path
          d="M38 33L50 22L62 33L56 36L50 31L44 36L38 33Z"
          fill="#D4AF37"
        />

        {/* Majestic 'S' Monogram in Champagne Gold */}
        <path
          d="M61 42C59 38 55 36 49 36C42 36 37 40 37 46C37 53 43 56 49 58C56 60 63 63 63 70C63 78 56 83 48 83C40 83 34 78 33 72L40 70C41 74 44 76 49 76C53 76 56 73 56 69C56 64 51 62 44 60C38 58 31 54 31 46C31 38 38 30 49 30C57 30 63 34 65 41L61 42Z"
          fill="url(#goldGrad)"
        />

        {/* Central Star / Diamond of Excellence */}
        <polygon points="50,66 52,69 55,69 53,71 54,74 50,72 46,74 47,71 45,69 48,69" fill="#D4AF37" opacity="0.9" />

        <defs>
          <linearGradient id="goldGrad" x1="31" y1="30" x2="65" y2="83" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E9D7B8" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#B68F55" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Typographic Identity */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: titleSize,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: isDark ? '#FFFFFF' : '#0D2C22',
            transition: 'color 0.2s ease'
          }}
        >
          Samruddhi <span style={{ color: '#C5A880', fontWeight: 600 }}>Group</span>
        </span>

        {showTagline && (
          <span
            style={{
              fontFamily: "var(--font-sans, system-ui, sans-serif)",
              fontSize: taglineSize,
              fontWeight: 500,
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              color: isDark ? 'rgba(231, 213, 186, 0.85)' : '#184A3B',
              marginTop: '0.22rem'
            }}
          >
            Nourishing Trust, Delivering Excellence
          </span>
        )}
      </div>
    </div>
  );
};
