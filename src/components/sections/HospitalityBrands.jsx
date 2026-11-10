import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';
import { BRANDS_DATA } from '../../data/samruddhiData';
import { Building2, Check, ArrowRight } from 'lucide-react';

export const HospitalityBrands = ({
  onSelectBrand: propOnSelectBrand,
  onRequestProposal: propOnRequestProposal,
}) => {
  const { openBrandModal, openProposalModal } = useApp();

  const handleSelect = propOnSelectBrand || openBrandModal;
  const handleRequest = propOnRequestProposal || ((name) => openProposalModal(`Enquiry for ${name}`));

  return (
    <section id="brands" style={{ backgroundColor: 'var(--color-canvas)' }}>
      {/* Header Band */}
      <div className="page-hero-band">
        <div className="container-wide" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge-pill" style={{ marginBottom: '0.85rem' }}>
            <Building2 size={13} color="var(--color-terracotta)" />
            <span>Hospitality & Venue Portfolio</span>
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
              color: 'var(--color-text-main)',
              marginBottom: '0.85rem',
            }}
          >
            One Group. Distinct Experiences.
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.68, margin: 0 }}>
            Five specialized hospitality divisions uniting fine dining, royal celebrations, landscaped lawns, modern food
            courts, and large-scale corporate kitchens.
          </p>
        </div>
      </div>

      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.85rem',
            marginBottom: '3.25rem',
          }}
        >
          {BRANDS_DATA.map((brand, idx) => (
            <div
              key={brand.id}
              className="card-showcase"
              style={{
                '--stagger': idx,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div className="card-img-wrap" style={{ height: '215px', overflow: 'hidden' }}>
                <img
                  src={brand.image}
                  alt={brand.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7, 12, 20, 0.2) 0%, rgba(7, 12, 20, 0.75) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(11, 17, 26, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#F1F5F9',
                    border: '1px solid rgba(224, 145, 50, 0.35)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '0.32rem 0.75rem',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {brand.category}
                </div>
              </div>

              <div
                style={{
                  padding: 'clamp(1.4rem, 2.5vw, 1.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{brand.name}</h2>

                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-terracotta)', marginBottom: '0.7rem' }}>
                  {brand.tagline}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.62, marginBottom: '1.25rem' }}>
                  {brand.description}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    marginTop: 'auto',
                  }}
                >
                  {brand.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.55rem',
                        fontSize: '0.85rem',
                        color: 'var(--color-text-body)',
                      }}
                    >
                      <Check size={14} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '0.22rem' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.7rem',
                    paddingTop: '1.1rem',
                    borderTop: '1px solid var(--color-border-card)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(brand)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Brand Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRequest(brand.name)}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={13} className="hover-arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Consultation Banner */}
        <div className="cta-band">
          <div>
            <h3 style={{ color: '#F1F5F9', fontSize: '1.4rem', marginBottom: '0.35rem' }}>
              Planning a Wedding, Corporate Gala, or Food-Court Setup?
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>
              Book a private tasting or open-air garden walkthrough at our Bengaluru venues.
            </p>
          </div>
          <Link to="/contact" className="btn btn-terracotta">
            <span>Schedule Venue Tour</span>
            <ArrowRight size={15} className="hover-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};
