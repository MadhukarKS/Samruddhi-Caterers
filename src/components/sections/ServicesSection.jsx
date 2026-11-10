import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { SERVICES_DATA } from '../../data/samruddhiData';
import { SectionHeading } from '../common/SectionHeading';
import { Check, Layers, Users, Building, ArrowRight, MessageSquare, Maximize2 } from 'lucide-react';

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
    <section id="services" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-wide">
        <SectionHeading
          badgeIcon={Layers}
          badgeText="Core Capabilities"
          title="End-to-End Culinary Solutions"
          description="Scalable industrial kitchens, corporate cafeterias, grand outdoor events, and institutional dining."
          compact={true}
        />

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.45rem',
            marginBottom: '1.75rem',
          }}
          role="tablist"
          aria-label="Filter Services"
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.5rem 1.05rem',
              borderRadius: 'var(--radius-pill)',
              border: activeTab === 'all'
                ? '1px solid var(--color-pine-primary)'
                : '1px solid var(--color-border)',
              backgroundColor: activeTab === 'all' ? 'var(--color-pine-primary)' : 'var(--color-surface)',
              color: activeTab === 'all' ? '#FFFFFF' : 'var(--color-text-body)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 600,
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
                padding: '0.5rem 1.05rem',
                borderRadius: 'var(--radius-pill)',
                border: activeTab === srv.id
                  ? '1px solid var(--color-pine-primary)'
                  : '1px solid var(--color-border)',
                backgroundColor: activeTab === srv.id ? 'var(--color-pine-primary)' : 'var(--color-surface)',
                color: activeTab === srv.id ? '#FFFFFF' : 'var(--color-text-body)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 600,
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

        {/* Crisp Services Cards Grid */}
        <div
          className="services-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns:
              filteredServices.length === 1
                ? 'minmax(300px, 640px)'
                : 'repeat(auto-fit, minmax(265px, 1fr))',
            gap: '1.25rem',
            justifyContent: 'center',
          }}
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
                {/* Visual Image Header with Zoom & Light Sheen Sweep */}
                <div className="card-img-wrap" style={{ height: '165px' }}>
                  <img src={service.image} alt={service.title} />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(15, 25, 20, 0.35) 0%, rgba(15, 25, 20, 0.05) 50%, rgba(15, 25, 20, 0.85) 100%)',
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
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                    }}
                  >
                    {service.badge}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(6px)',
                        color: '#FFFFFF',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        padding: '0.22rem 0.5rem',
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
                        width: '26px',
                        height: '26px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      title="Expand Service Specifications"
                      aria-label={`View ${service.title} Specifications`}
                    >
                      <Maximize2 size={12} />
                    </button>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.65rem',
                      left: '0.75rem',
                      right: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: '#E5EDE9',
                        fontWeight: 600,
                        backgroundColor: 'rgba(21, 43, 34, 0.78)',
                        padding: '0.18rem 0.55rem',
                        borderRadius: 'var(--radius-xs)',
                      }}
                    >
                      {service.capacity || 'Scalable Production'}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
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
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--color-text-main)',
                      marginBottom: '0.15rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--color-terracotta)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {service.headline}
                  </div>

                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--color-text-body)',
                      lineHeight: 1.5,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Compact Meta Pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {service.idealFor && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--color-surface-subtle)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-xs)',
                          padding: '0.22rem 0.5rem',
                          color: 'var(--color-text-main)',
                        }}
                      >
                        <Building size={11} color="var(--color-pine-primary)" />
                        {service.idealFor}
                      </span>
                    )}
                    {service.shiftReady && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--color-surface-subtle)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-xs)',
                          padding: '0.22rem 0.5rem',
                          color: 'var(--color-text-main)',
                        }}
                      >
                        <Users size={11} color="var(--color-terracotta)" />
                        {service.shiftReady}
                      </span>
                    )}
                  </div>

                  {/* Minimal Highlights */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      marginTop: 'auto',
                      marginBottom: '1rem',
                    }}
                  >
                    {service.highlights.slice(0, 2).map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.45rem',
                          fontSize: '0.8rem',
                          color: 'var(--color-text-body)',
                          lineHeight: 1.4,
                        }}
                      >
                        <Check size={13} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '0.18rem' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.25fr auto',
                      gap: '0.5rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--color-border-card)',
                      alignItems: 'center',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(service)}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%', padding: '0.5rem 0.65rem', fontSize: '0.78rem' }}
                    >
                      <span>Specs</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRequest(service.title)}
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%', padding: '0.5rem 0.65rem', fontSize: '0.78rem' }}
                    >
                      <span>Request RFP</span>
                      <ArrowRight size={12} className="hover-arrow" />
                    </button>

                    <a
                      href={`https://wa.me/919845012345?text=Hi%20Samruddhi%20Group,%20I%20would%20like%20to%20discuss%20a%20catering%20RFP%20for%20${encodedTitle}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ padding: '0.5rem 0.6rem' }}
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
      </div>
    </section>
  );
};
