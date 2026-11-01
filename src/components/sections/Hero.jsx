import React from 'react';
import { useApp } from '../../hooks/useApp';
import { ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, UtensilsCrossed, Clock } from 'lucide-react';

export const Hero = ({
  onRequestProposal: propOnRequestProposal,
  onExploreServices: propOnExploreServices,
}) => {
  const { openProposalModal } = useApp();

  const handleRequest = propOnRequestProposal || (() => openProposalModal('Corporate Catering'));
  const handleExplore =
    propOnExploreServices ||
    (() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        paddingTop: 'clamp(7.5rem, 11vw, 9.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        backgroundColor: '#FAFAF8',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Brand Statement & Conversion Actions */}
          <div style={{ maxWidth: '640px' }}>
            {/* Accreditation Badge */}
            <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
              <span className="badge-pill badge-accent">
                <ShieldCheck size={14} />
                <span>Over 20 Years of Food-Service Leadership</span>
              </span>
            </div>

            {/* Level 1 Headline (Modern Architectural Typography) */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.6rem)',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                marginBottom: '1.35rem',
              }}
            >
              Nourishing Trust, Delivering Excellence:{' '}
              <span style={{ color: 'var(--color-pine-primary)' }}>
                Institutional Scale & Culinary Distinction
              </span>
            </h1>

            {/* Value Proposition Narrative */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.12rem)',
                color: 'var(--color-text-body)',
                lineHeight: 1.72,
                marginBottom: '2.25rem',
              }}
            >
              From continuous 24/7 industrial shift dining to refined executive cafeterias and signature celebratory
              banquets, Samruddhi Group engineers commercial kitchen operations in Bengaluru backed by uncompromising
              hygiene, verified nutritional balance, and ISO-grade logistics.
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <button
                type="button"
                onClick={handleRequest}
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: '#152B22',
                  color: '#FFFFFF',
                  border: '1px solid #152B22',
                  padding: '0.95rem 1.95rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(21, 43, 34, 0.15)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Request a Proposal</span>
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                onClick={handleExplore}
                className="btn btn-secondary btn-lg"
                style={{
                  backgroundColor: 'transparent',
                  color: '#152B22',
                  border: '1px solid #D5D3CA',
                  padding: '0.95rem 1.85rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Explore Our Services</span>
              </button>

              <a
                href="https://wa.me/919845012345"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                title="Instant Chat on WhatsApp"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  border: '1px solid #25D366',
                  padding: '0.95rem 1.85rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                  transition: 'all 0.2s ease',
                }}
              >
                <MessageSquare size={17} />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Live Operational Proof Pills */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-pine-primary)',
                    flexShrink: 0,
                  }}
                >
                  <UtensilsCrossed size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    50,000+
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Daily Meals Served</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-pine-primary)',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    99.8%
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>On-Time Dispatch</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-terracotta)',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    ISO 22000
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>HACCP & FSSAI Compliant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase with Floating Status Badges */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border)',
                backgroundColor: '#FFFFFF',
              }}
            >
              <img
                src="/images/hero.jpg"
                alt="Samruddhi Group Commercial Catering Kitchen & Food Operations"
                style={{
                  width: '100%',
                  height: 'clamp(320px, 42vw, 460px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Bottom Caption Bar */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--color-border-card)',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                    Central Commissary Hub
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    No. 79/2 Jigani Industrial Hobli, Bengaluru
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-terracotta)',
                    backgroundColor: 'var(--color-terracotta-light)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-terracotta)',
                    }}
                  />
                  <span>Active 24/7 Shifts</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Pill Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                backgroundColor: 'rgba(21, 43, 34, 0.92)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
              }}
            >
              <ShieldCheck size={18} color="#C85E34" />
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  FSSAI Level 5 Hygiene
                </div>
                <div style={{ fontSize: '0.68rem', color: '#B8C5BE' }}>
                  Microbiological Lab Audited
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
