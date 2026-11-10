import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';
import { SERVICES_DATA, BRANDS_DATA } from '../../data/samruddhiData';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight, Layers, Building2, ShieldCheck } from 'lucide-react';

export const HomeShowcase = () => {
  const { openServiceModal, openProposalModal } = useApp();

  return (
    <>
      {/* Band 3: Enterprise Services Preview */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.25rem',
              marginBottom: '2.25rem',
            }}
          >
            <div>
              <span className="badge-pill" style={{ marginBottom: '0.65rem' }}>
                <Layers size={12} color="var(--color-terracotta)" />
                <span>Core Capabilities</span>
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', margin: 0 }}>
                Tailored Catering Across Every Setting
              </h2>
            </div>

            <Link to="/services" className="btn btn-secondary btn-sm">
              <span>Explore All Services</span>
              <ArrowRight size={14} className="hover-arrow" />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(265px, 1fr))',
              gap: '1.35rem',
            }}
          >
            {SERVICES_DATA.map((service, idx) => (
              <div
                key={service.id}
                className="card-showcase"
                style={{
                  '--stagger': idx,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div className="card-img-wrap" style={{ height: '185px', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(15, 25, 20, 0.78) 100%)',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.85rem',
                      color: '#FFFFFF',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      backgroundColor: 'rgba(21, 43, 34, 0.85)',
                      padding: '0.22rem 0.6rem',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    {service.capacity}
                  </span>
                </div>

                <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
                    {service.headline}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.85rem', borderTop: '1px solid var(--color-border-card)' }}>
                    <button
                      type="button"
                      onClick={() => openServiceModal(service)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-pine-primary)',
                        fontWeight: 700,
                        fontSize: '0.84rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: 0,
                      }}
                    >
                      <span>View Specs</span>
                      <ArrowRight size={13} className="hover-arrow" />
                    </button>

                    <span style={{ fontSize: '0.74rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                      {service.shiftReady}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 4: Hospitality Venues & Architectural Call-to-Action */}
      <section className="section" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-wide">
          <SectionHeading
            badgeIcon={Building2}
            badgeText="Hospitality Portfolio"
            title="Five Signature Culinary Brands Under One Roof"
            description="From grand wedding banquets and landscaped celebration lawns to mechanized corporate food courts."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(225px, 1fr))',
              gap: '1.15rem',
              marginBottom: '2.75rem',
            }}
          >
            {BRANDS_DATA.map((brand, idx) => (
              <Link
                key={brand.id}
                to="/brands"
                className="card-showcase"
                style={{
                  '--stagger': idx,
                  textDecoration: 'none',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-terracotta)',
                  }}
                >
                  {brand.category}
                </span>
                <h3 style={{ fontSize: '1.08rem', color: 'var(--color-text-main)', margin: 0 }}>
                  {brand.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {brand.tagline}
                </p>
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '0.6rem',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--color-pine-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <span>Explore Brand</span>
                  <ArrowRight size={12} className="hover-arrow" />
                </div>
              </Link>
            ))}
          </div>

          {/* Closing Consultation CTA */}
          <div className="cta-band">
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#E89572', marginBottom: '0.55rem' }}>
                <ShieldCheck size={14} />
                <span>Jigani Central Kitchen • FSSAI Level 5 Certified</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontSize: 'clamp(1.5rem, 2.6vw, 2.05rem)', marginBottom: '0.45rem' }}>
                Commission Daily Catering or Plan Your Celebration
              </h2>
              <p style={{ color: '#C5D2CC', fontSize: '0.94rem', margin: 0 }}>
                Connect directly with our corporate RFP & event planning desk for customized menu engineering and SLAs.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => openProposalModal('Corporate Catering')}
                className="btn btn-terracotta"
              >
                <span>Request Formal Proposal</span>
                <ArrowRight size={15} className="hover-arrow" />
              </button>

              <Link
                to="/contact"
                className="btn btn-secondary"
              >
                <span>Visit Contact Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

