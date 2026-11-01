import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { SERVICES_DATA } from '../../data/samruddhiData';
import { SectionHeading } from '../common/SectionHeading';
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
    <section id="services" className="section" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-wide">
        {/* Section Header */}
        <SectionHeading
          badgeIcon={Layers}
          badgeText="Core Enterprise Capabilities"
          title="End-to-End Culinary Solutions Across Scale & Setting"
          description="From high-volume industrial workforce nutrition to bespoke corporate cafeterias and royal wedding celebrations, Samruddhi Group combines central commissary infrastructure with uncompromising culinary discipline."
        />

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3.5rem',
          }}
          role="tablist"
          aria-label="Filter Services"
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: 'var(--radius-pill)',
              border: activeTab === 'all'
                ? '1px solid var(--color-pine-primary)'
                : '1px solid var(--color-border)',
              backgroundColor: activeTab === 'all' ? 'var(--color-pine-primary)' : 'var(--color-surface)',
              color: activeTab === 'all' ? '#FFFFFF' : 'var(--color-text-body)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.86rem',
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
                padding: '0.65rem 1.35rem',
                borderRadius: 'var(--radius-pill)',
                border: activeTab === srv.id
                  ? '1px solid var(--color-pine-primary)'
                  : '1px solid var(--color-border)',
                backgroundColor: activeTab === srv.id ? 'var(--color-pine-primary)' : 'var(--color-surface)',
                color: activeTab === srv.id ? '#FFFFFF' : 'var(--color-text-body)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.86rem',
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

        {/* High-Impact Architectural Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              filteredServices.length === 1
                ? 'minmax(320px, 860px)'
                : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.25rem',
            justifyContent: 'center',
          }}
        >
          {filteredServices.map((service, index) => {
            const indexNumber = `0${index + 1}`;
            const encodedTitle = encodeURIComponent(service.title);

            return (
              <div
                key={service.id}
                className="card-minimal service-card-hover"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  position: 'relative',
                }}
              >
                {/* Visual Image Header */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-surface-subtle)',
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    className="service-img"
                  />

                  {/* Gradient Vignette for Text Legibility */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(15, 25, 20, 0.4) 0%, rgba(15, 25, 20, 0.05) 50%, rgba(15, 25, 20, 0.85) 100%)',
                    }}
                  />

                  {/* Top Left: Category Badge Tag */}
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
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {service.badge}
                  </div>

                  {/* Top Right: Index & Expand Modal Trigger */}
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
                        padding: '0.3rem 0.6rem',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
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
                        border: '1px solid rgba(255, 255, 255, 0.2)',
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

                  {/* Bottom Image Overlay: Capacity & Model */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      left: '1.25rem',
                      right: '1.25rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: '#D8E2DC',
                        fontWeight: 600,
                        backgroundColor: 'rgba(21, 43, 34, 0.75)',
                        padding: '0.2rem 0.6rem',
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
                    padding: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {/* Service Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: 'var(--color-text-main)',
                      marginBottom: '0.25rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Purpose Headline */}
                  <div
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--color-terracotta)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {service.headline}
                  </div>

                  {/* Narrative Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-text-body)',
                      lineHeight: 1.62,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Structured Operational Specs Strip */}
                  <div
                    style={{
                      backgroundColor: 'var(--color-surface-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem',
                      marginBottom: '1.35rem',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem',
                    }}
                  >
                    {service.idealFor && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.82rem' }}>
                        <Building size={14} color="var(--color-pine-primary)" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Best For:</span>
                        <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>{service.idealFor}</span>
                      </div>
                    )}

                    {service.deliveryFormat && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.82rem' }}>
                        <Truck size={14} color="var(--color-pine-primary)" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Delivery:</span>
                        <span style={{ color: 'var(--color-text-main)' }}>{service.deliveryFormat}</span>
                      </div>
                    )}

                    {service.shiftReady && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.82rem' }}>
                        <Users size={14} color="var(--color-terracotta)" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Coverage:</span>
                        <span style={{ color: 'var(--color-text-main)' }}>{service.shiftReady}</span>
                      </div>
                    )}
                  </div>

                  {/* Core Highlights Checklist */}
                  <div style={{ marginTop: 'auto', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.65rem',
                      }}
                    >
                      Key Deliverables & Standards:
                    </div>

                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
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
                          <Check
                            size={14}
                            color="var(--color-terracotta)"
                            style={{ flexShrink: 0, marginTop: '0.2rem' }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dual Action Buttons & WhatsApp Quick Connect */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.2fr',
                      gap: '0.65rem',
                      paddingTop: '1.15rem',
                      borderTop: '1px solid var(--color-border-card)',
                      alignItems: 'center',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(service)}
                      className="btn btn-secondary btn-sm"
                      style={{
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.82rem',
                        width: '100%',
                      }}
                    >
                      <span>Full Specs</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRequest(service.title)}
                      className="btn btn-primary btn-sm"
                      style={{
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.82rem',
                        width: '100%',
                      }}
                    >
                      <span>Request RFP</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                  {/* Direct WhatsApp Consultation Link */}
                  <div style={{ marginTop: '0.85rem', textAlign: 'center' }}>
                    <a
                      href={`https://wa.me/919845012345?text=Hi%20Samruddhi%20Group,%20I%20would%20like%20to%20discuss%20a%20catering%20RFP%20for%20${encodedTitle}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.78rem',
                        color: 'var(--color-whatsapp-dark)',
                        textDecoration: 'none',
                        fontWeight: 600,
                      }}
                    >
                      <MessageSquare size={13} />
                      <span>Chat on WhatsApp regarding {service.title}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 19, 24, 0.09) !important;
          border-color: var(--color-border-strong) !important;
        }
        .service-card-hover:hover .service-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
