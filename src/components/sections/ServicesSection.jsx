import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';
import { SERVICES_DATA } from '../../data/samruddhiData';
import { Check, Layers, Users, Truck, Building, ArrowRight, MessageSquare, Maximize2 } from 'lucide-react';

export const ServicesSection = ({
  onSelectService: propOnSelectService,
  onRequestProposal: propOnRequestProposal,
}) => {
  const { openServiceModal, openProposalModal } = useApp();
  const [activeTab, setActiveTab] = useState('all');

  const handleSelect = propOnSelectService || openServiceModal;
  const handleRequest = propOnRequestProposal || openProposalModal;

  const filteredServices =
    activeTab === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === activeTab);

  return (
    <section id="services" style={{ backgroundColor: 'var(--color-canvas)' }}>
      {/* Header Band */}
      <div className="page-hero-band">
        <div className="container-wide" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge-pill" style={{ marginBottom: '0.85rem' }}>
            <Layers size={13} color="var(--color-terracotta)" />
            <span>Core Enterprise Capabilities</span>
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.95rem, 3.6vw, 2.9rem)',
              color: 'var(--color-text-main)',
              marginBottom: '0.85rem',
            }}
          >
            End-to-End Culinary Solutions Across Scale & Setting
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.68, margin: 0 }}>
            High-volume industrial workforce nutrition, daily tech-park cafeterias, residential institutional dining, and
            grand celebratory catering delivered from a single dependable commissary.
          </p>
        </div>
      </div>

      <div className="container-wide">
        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
          role="tablist"
          aria-label="Filter Services"
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.6rem 1.3rem',
              borderRadius: 'var(--radius-pill)',
              border: activeTab === 'all'
                ? '1px solid #E09132'
                : '1px solid var(--color-border)',
              backgroundColor: activeTab === 'all' ? '#E09132' : 'var(--color-surface)',
              color: activeTab === 'all' ? '#0B111A' : 'var(--color-text-body)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.86rem',
              fontWeight: activeTab === 'all' ? 700 : 600,
              cursor: 'pointer',
              transition: 'all 0.18s ease',
            }}
            role="tab"
            aria-selected={activeTab === 'all'}
          >
            All Four Services
          </button>

          {SERVICES_DATA.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActiveTab(srv.id)}
              style={{
                padding: '0.6rem 1.3rem',
                borderRadius: 'var(--radius-pill)',
                border: activeTab === srv.id
                  ? '1px solid #E09132'
                  : '1px solid var(--color-border)',
                backgroundColor: activeTab === srv.id ? '#E09132' : 'var(--color-surface)',
                color: activeTab === srv.id ? '#0B111A' : 'var(--color-text-body)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.86rem',
                fontWeight: activeTab === srv.id ? 700 : 600,
                cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}
              role="tab"
              aria-selected={activeTab === srv.id}
            >
              {srv.title}
            </button>
          ))}
        </div>

        {/* Balanced 2x2 Architectural Grid on Desktop */}
        <div
          className={filteredServices.length === 1 ? 'services-grid-single' : 'services-grid-two-col'}
          style={{ marginBottom: '3.25rem' }}
        >
          {filteredServices.map((service, index) => {
            const indexNumber = `0${index + 1}`;
            const encodedTitle = encodeURIComponent(service.title);

            return (
              <div
                key={service.id}
                className="card-showcase"
                style={{
                  '--stagger': index,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Media Showcase */}
                <div className="card-img-wrap" style={{ height: '225px', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(7, 12, 20, 0.36) 0%, rgba(7, 12, 20, 0.08) 50%, rgba(7, 12, 20, 0.88) 100%)',
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
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '0.32rem 0.75rem',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid rgba(224, 145, 50, 0.35)',
                    }}
                  >
                    {service.badge}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(6px)',
                        color: '#FFFFFF',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        padding: '0.28rem 0.58rem',
                        borderRadius: 'var(--radius-xs)',
                      }}
                    >
                      {indexNumber}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleSelect(service)}
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(6px)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.22)',
                        borderRadius: 'var(--radius-xs)',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      title="Expand Service Specifications"
                      aria-label={`View ${service.title} Specifications`}
                    >
                      <Maximize2 size={13} />
                    </button>
                  </div>

                  <div style={{ position: 'absolute', bottom: '0.85rem', left: '1.1rem', right: '1.1rem' }}>
                    <span
                      style={{
                        fontSize: '0.76rem',
                        color: '#E2E8F0',
                        fontWeight: 600,
                        backgroundColor: 'rgba(11, 17, 26, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        padding: '0.24rem 0.65rem',
                        borderRadius: 'var(--radius-xs)',
                      }}
                    >
                      {service.capacity || 'Scalable Production'}
                    </span>
                  </div>
                </div>

                {/* Spacious Card Body */}
                <div
                  style={{
                    padding: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <h2 style={{ fontSize: '1.42rem', marginBottom: '0.25rem' }}>{service.title}</h2>

                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-terracotta)', marginBottom: '0.65rem' }}>
                    {service.headline}
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.62, marginBottom: '1.25rem' }}>
                    {service.shortDesc}
                  </p>

                  {/* Structured Operational Specs */}
                  <div
                    style={{
                      backgroundColor: 'var(--color-surface-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.9rem 1.05rem',
                      marginBottom: '1.25rem',
                      border: '1px solid var(--color-border)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',
                      gap: '0.65rem',
                    }}
                  >
                    {service.idealFor && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem' }}>
                        <Building size={14} color="var(--color-pine-primary)" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>{service.idealFor}</span>
                      </div>
                    )}

                    {service.deliveryFormat && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem' }}>
                        <Truck size={14} color="var(--color-pine-primary)" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'var(--color-text-main)' }}>{service.deliveryFormat}</span>
                      </div>
                    )}

                    {service.shiftReady && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem' }}>
                        <Users size={14} color="var(--color-terracotta)" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'var(--color-text-main)' }}>{service.shiftReady}</span>
                      </div>
                    )}
                  </div>

                  {/* Key Deliverables */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      marginTop: 'auto',
                      marginBottom: '1.4rem',
                    }}
                  >
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                          fontSize: '0.86rem',
                          color: 'var(--color-text-body)',
                          lineHeight: 1.45,
                        }}
                      >
                        <Check size={14} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.3fr auto',
                      gap: '0.6rem',
                      paddingTop: '1.05rem',
                      borderTop: '1px solid var(--color-border-card)',
                      alignItems: 'center',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(service)}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <span>Full Specs</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRequest(service.title)}
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <span>Request RFP</span>
                      <ArrowRight size={13} className="hover-arrow" />
                    </button>

                    <a
                      href={`https://wa.me/919845012345?text=Hi%20Samruddhi%20Group,%20I%20would%20like%20to%20discuss%20a%20catering%20RFP%20for%20${encodedTitle}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ padding: '0.55rem 0.7rem' }}
                      title={`WhatsApp regarding ${service.title}`}
                      aria-label={`Chat on WhatsApp regarding ${service.title}`}
                    >
                      <MessageSquare size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Strip */}
        <div className="cta-band">
          <div>
            <h3 style={{ color: '#F1F5F9', fontSize: '1.4rem', marginBottom: '0.35rem' }}>
              Need a Custom Shift Schedule or Tasting Session?
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>
              Our procurement desk configures multi-shift menus, pricing models, and SLA terms in under 2 hours.
            </p>
          </div>

          <Link to="/contact" className="btn btn-terracotta">
            <span>Go to Enquiry Desk</span>
            <ArrowRight size={15} className="hover-arrow" />
          </Link>
        </div>
      </div>

      <style>{`
        .services-grid-two-col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.85rem;
        }
        .services-grid-single {
          display: grid;
          grid-template-columns: minmax(320px, 760px);
          justify-content: center;
        }
        @media (max-width: 860px) {
          .services-grid-two-col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
