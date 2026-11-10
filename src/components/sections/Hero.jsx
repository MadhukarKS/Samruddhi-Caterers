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
        paddingTop: 'clamp(7.2rem, 10vw, 8.75rem)',
        paddingBottom: 'clamp(3.25rem, 5.5vw, 4.75rem)',
        background: 'radial-gradient(circle at 86% 18%, rgba(200, 94, 52, 0.06) 0%, transparent 45%), #FAFAF8',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.25rem, 5vw, 4.25rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column */}
          <div style={{ maxWidth: '630px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '1.1rem' }}>
              <span className="badge-pill badge-accent">
                <ShieldCheck size={14} />
                <span>20+ Years of Food-Service Leadership</span>
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 4.4vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                lineHeight: 1.11,
                letterSpacing: '-0.035em',
                marginBottom: '1.2rem',
              }}
            >
              Nourishing Trust,{' '}
              <span style={{ color: 'var(--color-pine-primary)' }}>
                Delivering Culinary Excellence.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.98rem, 1.35vw, 1.08rem)',
                color: 'var(--color-text-body)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              From continuous 24/7 industrial shift dining to refined tech-park cafeterias and grand signature
              celebrations, Samruddhi Group engineers large-scale kitchen operations in Bengaluru backed by FSSAI Level 5
              hygiene and clockwork dispatch.
            </p>

            {/* Primary Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '2.25rem',
              }}
            >
              <button
                type="button"
                onClick={handleRequest}
                className="btn btn-primary btn-lg"
              >
                <span>Request a Proposal</span>
                <ArrowRight size={17} className="hover-arrow" />
              </button>

              <button
                type="button"
                onClick={handleExplore}
                className="btn btn-secondary btn-lg"
              >
                <span>Explore Our Services</span>
              </button>

              <a
                href="https://wa.me/919845012345"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                title="Instant Chat on WhatsApp"
              >
                <MessageSquare size={17} />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Live Operational Proof Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(165px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
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
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    50,000+
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Daily Meals Served</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
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
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    99.8%
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>On-Time Dispatch</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
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
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-main)', lineHeight: 1.2 }}>
                    ISO 22000
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>HACCP & FSSAI Audited</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rich Editorial Visual Card */}
          <div style={{ position: 'relative' }}>
            <div className="card-showcase" style={{ '--stagger': 1 }}>
              <div
                className="card-img-wrap"
                style={{ height: 'clamp(300px, 38vw, 430px)', overflow: 'hidden' }}
              >
                <img
                  src="/images/hero.jpg"
                  alt="Samruddhi Group Commercial Catering Kitchen & Food Operations"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div
                style={{
                  padding: '1.15rem 1.45rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--color-border-card)',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--color-text-main)' }}>
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
                    gap: '0.45rem',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-terracotta)',
                    backgroundColor: 'var(--color-terracotta-light)',
                    padding: '0.35rem 0.8rem',
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

            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                backgroundColor: 'rgba(21, 43, 34, 0.92)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '0.6rem 0.95rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.16)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                zIndex: 6,
              }}
            >
              <ShieldCheck size={17} color="#C85E34" />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>
                  FSSAI Level 5 Hygiene
                </div>
                <div style={{ fontSize: '0.68rem', color: '#B8C5BE' }}>
                  Microbiological Lab Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
