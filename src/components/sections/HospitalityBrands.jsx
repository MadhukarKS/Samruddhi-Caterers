import React from 'react';
import { useApp } from '../../hooks/useApp';
import { BRANDS_DATA } from '../../data/samruddhiData';
import { SectionHeading } from '../common/SectionHeading';
import { Building2, Check } from 'lucide-react';

export const HospitalityBrands = ({
  onSelectBrand: propOnSelectBrand,
  onRequestProposal: propOnRequestProposal,
}) => {
  const { openBrandModal, openProposalModal } = useApp();

  const handleSelect = propOnSelectBrand || openBrandModal;
  const handleRequest = propOnRequestProposal || ((name) => openProposalModal(`Enquiry for ${name}`));

  return (
    <section id="brands" className="section" style={{ backgroundColor: '#FAFAF8', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-wide">
        {/* Section Header */}
        <SectionHeading
          badgeIcon={Building2}
          badgeText="Hospitality & Venue Portfolio"
          title="One Group. Distinct Experiences."
          description="Under the umbrella of Samruddhi Group, each hospitality brand represents a specialized commitment to culinary distinction—spanning fine dining, grand banquets, open-air venues, versatile food courts, and specialized corporate kitchens."
        />

        {/* 5 Distinct Brand Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              className="card-minimal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
              }}
            >
              {/* Brand Visual Header */}
              <div
                style={{
                  position: 'relative',
                  height: '230px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-surface-subtle)',
                }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                />

                {/* Category Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(21, 43, 34, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {brand.category}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    color: 'var(--color-text-main)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {brand.name}
                </h3>

                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-terracotta)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {brand.tagline}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {brand.description}
                </p>

                {/* Highlights */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    marginBottom: '1.75rem',
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
                      <Check
                        size={15}
                        color="var(--color-terracotta)"
                        style={{ flexShrink: 0, marginTop: '0.2rem' }}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                    paddingTop: '1.25rem',
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
