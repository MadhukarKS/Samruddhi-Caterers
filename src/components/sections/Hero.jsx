import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';
import { ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, UtensilsCrossed, Clock } from 'lucide-react';

export const Hero = ({
  onRequestProposal: propOnRequestProposal,
  onExploreServices: propOnExploreServices,
}) => {
  const { openProposalModal } = useApp();
  const navigate = useNavigate();

  const handleRequest = propOnRequestProposal || (() => openProposalModal('Corporate Catering'));
  const handleExplore = propOnExploreServices || (() => navigate('/services'));

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        paddingTop: 'clamp(6.2rem, 8.5vw, 7.2rem)',
        paddingBottom: 'clamp(2rem, 3.5vw, 3rem)',
        backgroundColor: '#FAFAF8',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: 'clamp(1.75rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Crisp Value Proposition */}
          <div style={{ maxWidth: '610px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '0.9rem' }}>
              <span className="badge-pill badge-accent">
                <ShieldCheck size={13} />
                <span>20+ Years of Food-Service Leadership</span>
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.05rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                marginBottom: '0.95rem',
              }}
            >
              Nourishing Trust,{' '}
              <span style={{ color: 'var(--color-pine-primary)' }}>
                Delivering Culinary Excellence.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.25vw, 1.04rem)',
                color: 'var(--color-text-body)',
                lineHeight: 1.62,
                marginBottom: '1.5rem',
              }}
            >
              Large-scale industrial kitchens, tech-park corporate cafeterias, and bespoke banquet catering in
              Bengaluru—powered by FSSAI Level 5 hygiene and 24/7 dispatch.
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                alignItems: 'center',
                marginBottom: '1.75rem',
              }}
            >
              <button
                type="button"
                onClick={handleRequest}
                className="btn btn-primary"
              >
                <span>Request a Proposal</span>
                <ArrowRight size={16} className="hover-arrow" />
              </button>

              <button
                type="button"
                onClick={handleExplore}
                className="btn btn-secondary"
              >
                <span>Explore Our Services</span>
              </button>

              <a
                href="https://wa.me/919845012345"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                title="Instant Chat on WhatsApp"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Compact Live Operational Proof Pills */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '0.85rem',
                paddingTop: '1.15rem',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-pine-primary)',
                    flexShrink: 0,
                  }}
                >
                  <UtensilsCrossed size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    50,000+
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)' }}>Daily Meals Served</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-pine-primary)',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    99.8%
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)' }}>On-Time Dispatch</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-terracotta)',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    ISO 22000
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)' }}>HACCP & FSSAI Audited</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card with Image Zoom & Sheen */}
          <div style={{ position: 'relative' }}>
            <div className="card-showcase" style={{ '--stagger': 1 }}>
              <div className="card-img-wrap" style={{ height: 'clamp(260px, 32vw, 355px)' }}>
                <img
                  src="/images/hero.jpg"
                  alt="Samruddhi Group Commercial Catering Kitchen & Food Operations"
                />
              </div>

              <div
                style={{
                  padding: '0.95rem 1.25rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--color-border-card)',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                    Central Commissary Hub
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)' }}>
                    Jigani Industrial Hobli, Bengaluru
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-terracotta)',
                    backgroundColor: 'var(--color-terracotta-light)',
                    padding: '0.3rem 0.7rem',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  <span
                    className="pulse-dot"
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

            {/* Floating FSSAI Tag */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(21, 43, 34, 0.92)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '0.5rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                zIndex: 6,
              }}
            >
              <ShieldCheck size={16} color="#C85E34" />
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700 }}>
                  FSSAI Level 5 Hygiene
                </div>
                <div style={{ fontSize: '0.65rem', color: '#B8C5BE' }}>
                  Lab Verified Commissary
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
