import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/samruddhiData';
import type { ServiceItem } from '../data/samruddhiData';
import { Check, ArrowRight, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestProposal: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestProposal,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices =
    activeTab === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="section" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-gold" style={{ marginBottom: '1rem' }}>
            <Layers size={13} />
            <span>Comprehensive Food Services</span>
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
            End-to-End Culinary Solutions Across Scale & Setting
          </h2>

          <div className="gold-line gold-line-center" />

          <p style={{ fontSize: '1.08rem', color: 'var(--color-charcoal-body)', lineHeight: 1.75 }}>
            From high-volume industrial workforce nutrition to bespoke corporate cafeterias and royal wedding celebrations,
            Samruddhi Group combines central commissary infrastructure with uncompromising culinary discipline.
          </p>
        </div>

        {/* Filter Navigation for Services */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem',
          }}
          role="tablist"
          aria-label="Filter Services"
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: 'var(--radius-full)',
              border: activeTab === 'all' ? '1px solid var(--color-emerald-primary)' : '1px solid var(--color-border-subtle)',
              background: activeTab === 'all' ? 'var(--color-emerald-primary)' : '#FFFFFF',
              color: activeTab === 'all' ? '#FFFFFF' : 'var(--color-charcoal-body)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
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
                padding: '0.65rem 1.35rem',
                borderRadius: 'var(--radius-full)',
                border: activeTab === srv.id ? '1px solid var(--color-emerald-primary)' : '1px solid var(--color-border-subtle)',
                background: activeTab === srv.id ? 'var(--color-emerald-primary)' : '#FFFFFF',
                color: activeTab === srv.id ? '#FFFFFF' : 'var(--color-charcoal-body)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              role="tab"
              aria-selected={activeTab === srv.id}
            >
              {srv.title}
            </button>
          ))}
        </div>

        {/* Service Cards Display (Rich Editorial Format) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {filteredServices.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-subtle)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  alignItems: 'stretch',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                className="service-card"
              >
                {/* Image Section */}
                <div
                  style={{
                    position: 'relative',
                    minHeight: '380px',
                    order: isReversed ? 2 : 1,
                    overflow: 'hidden',
                  }}
                  className="service-image-container"
                >
                  <img
                    src={service.image}
                    alt={`${service.title} - Samruddhi Group`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  {/* Subtle Badge Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      background: 'rgba(9, 33, 25, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--color-gold-light)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(197, 168, 128, 0.3)',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {service.badge}
                  </div>
                </div>

                {/* Content Section */}
                <div
                  style={{
                    padding: 'clamp(2rem, 4vw, 3.25rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    order: isReversed ? 1 : 2,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        color: 'var(--color-emerald-primary)',
                        fontWeight: 700,
                        display: 'block',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {service.title}
                    </span>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                        color: 'var(--color-emerald-deep)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: '1rem',
                      }}
                    >
                      “{service.headline}”
                    </h3>

                    <p
                      style={{
                        fontSize: '0.98rem',
                        lineHeight: 1.7,
                        color: 'var(--color-charcoal-body)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.shortDesc}
                    </p>

                    {/* Operational Highlights */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontWeight: 700,
                          color: 'var(--color-charcoal-muted)',
                          display: 'block',
                          marginBottom: '0.65rem',
                        }}
                      >
                        Service Highlights & Capabilities:
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        {service.highlights.map((h) => (
                          <li
                            key={h}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.6rem',
                              fontSize: '0.9rem',
                              color: 'var(--color-charcoal-rich)',
                            }}
                          >
                            <span
                              style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                background: 'rgba(18, 58, 46, 0.1)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '0.15rem',
                              }}
                            >
                              <Check size={12} color="#123A2E" strokeWidth={2.5} />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      style={{
                        fontSize: '0.84rem',
                        color: 'var(--color-charcoal-muted)',
                        padding: '0.75rem 1rem',
                        background: 'var(--color-ivory-cream)',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '3px solid var(--color-gold-accent)',
                        marginBottom: '2rem',
                      }}
                    >
                      <strong>Operational Focus:</strong> {service.operationalScope}
                    </div>
                  </div>

                  {/* Service CTAs */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <button
                      onClick={() => onRequestProposal(service.title)}
                      className="btn btn-primary"
                      style={{ padding: '0.85rem 1.75rem', fontSize: '0.92rem' }}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      onClick={() => onSelectService(service)}
                      className="btn btn-outline-dark"
                      style={{ padding: '0.85rem 1.35rem', fontSize: '0.9rem' }}
                    >
                      <span>View Specifications</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-card:hover {
          border-color: var(--color-gold-border);
          box-shadow: var(--shadow-md);
        }
        .service-card:hover .service-image-container img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
