import React from 'react';
import { useApp } from '../../hooks/useApp';
import { BRANDS_DATA } from '../../data/samruddhiData';
import { SectionHeading } from '../common/SectionHeading';
import { Building2, Check, ArrowRight } from 'lucide-react';

export const HospitalityBrands = ({
  onSelectBrand: propOnSelectBrand,
  onRequestProposal: propOnRequestProposal,
}) => {
  const { openBrandModal, openProposalModal } = useApp();

  const handleSelect = propOnSelectBrand || openBrandModal;
  const handleRequest = propOnRequestProposal || ((name) => openProposalModal(`Enquiry for ${name}`));

  return (
    <section id="brands" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-wide">
        <SectionHeading
          badgeIcon={Building2}
          badgeText="Hospitality Portfolio"
          title="One Group. Distinct Experiences."
          description="Five specialized hospitality brands spanning luxury banquets, fine dining, celebration lawns, food courts, and corporate kitchens."
          compact={true}
        />

        {/* Compact Brand Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
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
              <div className="card-img-wrap" style={{ height: '160px' }}>
                <img src={brand.image} alt={brand.name} />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(15, 25, 20, 0.25) 0%, rgba(15, 25, 20, 0.65) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(21, 43, 34, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    padding: '0.28rem 0.65rem',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {brand.category}
                </div>
              </div>

              <div
                style={{
                  padding: '1.15rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.18rem',
                    color: 'var(--color-text-main)',
                    marginBottom: '0.15rem',
                  }}
                >
                  {brand.name}
                </h3>

                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--color-terracotta)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {brand.tagline}
                </div>

                <p
                  style={{
                    fontSize: '0.83rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '0.85rem',
                  }}
                >
                  {brand.description}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    marginBottom: '1rem',
                    marginTop: 'auto',
                  }}
                >
                  {brand.highlights.slice(0, 2).map((h, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.45rem',
                        fontSize: '0.8rem',
                        color: 'var(--color-text-body)',
                      }}
                    >
                      <Check size={13} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '0.18rem' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.55rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--color-border-card)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(brand)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', padding: '0.5rem 0.6rem', fontSize: '0.78rem' }}
                  >
                    <span>Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRequest(brand.name)}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', padding: '0.5rem 0.6rem', fontSize: '0.78rem' }}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={12} className="hover-arrow" />
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
