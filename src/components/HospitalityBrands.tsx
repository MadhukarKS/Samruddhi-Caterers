import React, { useState } from 'react';
import { BRANDS_DATA } from '../data/samruddhiData';
import type { BrandItem } from '../data/samruddhiData';
import { Building2, ArrowRight, Check } from 'lucide-react';

interface HospitalityBrandsProps {
  onSelectBrand: (brand: BrandItem) => void;
  onRequestProposal: (brandName: string) => void;
}

export const HospitalityBrands: React.FC<HospitalityBrandsProps> = ({
  onSelectBrand,
  onRequestProposal,
}) => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  return (
    <section id="brands" className="section" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-gold" style={{ marginBottom: '1rem' }}>
            <Building2 size={13} />
            <span>Hospitality Portfolio</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: 'var(--color-emerald-deep)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            One Group. Distinct Experiences.
          </h2>

          <div className="gold-line gold-line-center" />

          <p style={{ fontSize: '1.08rem', color: 'var(--color-charcoal-body)', lineHeight: 1.75 }}>
            Under the umbrella of Samruddhi Group, each hospitality brand represents a specialized commitment to culinary
            distinction—spanning fine dining, grand banquets, open-air venues, versatile food courts, and specialized
            corporate kitchens.
          </p>
        </div>

        {/* Five Distinct Brand Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              className="card-luxury"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border-subtle)',
              }}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              {/* Brand Visual Header */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={brand.image}
                  alt={`${brand.name} - Samruddhi Group Hospitality`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    transform: hoveredBrand === brand.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(8, 24, 18, 0.2) 0%, rgba(8, 24, 18, 0.8) 100%)',
                  }}
                />

                {/* Category Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(9, 33, 25, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: 'var(--color-gold-light)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                  }}
                >
                  {brand.category}
                </div>

                {/* Brand Name on Image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1.25rem',
                    right: '1.25rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.85rem',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      lineHeight: 1.1,
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    {brand.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: 'var(--color-gold-light)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                    }}
                  >
                    {brand.tagline}
                  </span>
                </div>
              </div>

              {/* Brand Description & Features */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      color: 'var(--color-charcoal-body)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {brand.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {brand.highlights.map((item) => (
                        <li
                          key={item}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.55rem',
                            fontSize: '0.84rem',
                            color: 'var(--color-charcoal-rich)',
                          }}
                        >
                          <Check size={14} color="#184A3B" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <button
                    onClick={() => onSelectBrand(brand)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-emerald-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <span>Explore Profile</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => onRequestProposal(brand.name)}
                    style={{
                      background: 'none',
                      border: '1px solid var(--color-gold-border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.4rem 0.85rem',
                      color: 'var(--color-emerald-deep)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(197, 168, 128, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
