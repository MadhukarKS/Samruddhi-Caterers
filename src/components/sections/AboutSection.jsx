import React from 'react';
import { useApp } from '../../hooks/useApp';
import { CORE_PILLARS } from '../../data/samruddhiData';
import { SectionHeading } from '../common/SectionHeading';
import { Compass, Target, Sparkles, Check, ArrowRight, ShieldCheck, Factory } from 'lucide-react';

export const AboutSection = ({ onRequestProposal: propOnRequestProposal }) => {
  const { openProposalModal } = useApp();
  const handleRequest = propOnRequestProposal || (() => openProposalModal('Corporate Catering'));

  return (
    <section id="about" className="section" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-wide">
        {/* Section Header */}
        <SectionHeading
          badgeIcon={Sparkles}
          badgeText="Two Decades of Food-Service Leadership"
          title="Experience That Nourishes Trust."
          description="Samruddhi Group is an established food-service and hospitality partner serving institutions, corporates, industries, and signature events across Karnataka. Operating high-capacity commercial kitchens, we unite institutional scale with authentic Indian culinary heritage."
        />

        {/* Structured 2-Column Overview: Facility & Strategy */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '4.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Industrial Commissary Infrastructure */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
              <span className="badge-pill">
                <Factory size={13} color="var(--color-terracotta)" />
                <span>Central Commissary Infrastructure</span>
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.65rem',
                color: 'var(--color-text-main)',
                marginBottom: '1rem',
                lineHeight: 1.25,
              }}
            >
              Built for 50,000+ Daily Meals in Jigani Industrial Hub
            </h3>

            <p style={{ color: 'var(--color-text-body)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Located strategically in the Jigani - Electronic City corridor, our flagship production commissary is
              engineered to supply non-stop industrial shift rosters, tech park cafeterias, and institutional campuses
              with clockwork reliability.
            </p>

            {/* Checklist of operational capabilities */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
              {[
                'Semi-automated chapati & paratha lines delivering 10,000+ units per hour with uniform texture.',
                'Industrial steam boiling kettles & zero-contamination food preparation zones.',
                'Dedicated temperature-controlled insulated transport fleet monitored via real-time GPS dispatch.',
                'In-house microbiological testing protocols for raw ingredients, purified RO water, and cooked batches.',
              ].map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-terracotta-light)',
                      color: 'var(--color-terracotta)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.2rem',
                    }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.55 }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleRequest}
              className="btn btn-primary"
            >
              <span>Structure an RFP with Our Kitchen</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Column: Vision & Mission Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Vision Card */}
            <div
              style={{
                backgroundColor: 'var(--color-pine-primary)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2.25rem',
                border: '1px solid var(--color-pine-medium)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <Compass size={20} color="#C85E34" />
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#C85E34',
                  }}
                >
                  Our Vision
                </span>
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                }}
              >
                The Benchmark for Institutional Food Services in South India
              </h4>
              <p style={{ color: '#D5DFDA', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                To set the industry standard for industrial catering, commercial food courts, and hospitality venues by
                pairing mechanized manufacturing efficiency with heartfelt culinary care and absolute food safety.
              </p>
            </div>

            {/* Mission Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2.25rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <Target size={20} color="var(--color-pine-primary)" />
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--color-pine-primary)',
                  }}
                >
                  Our Mission
                </span>
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  color: 'var(--color-text-main)',
                  marginBottom: '0.75rem',
                }}
              >
                Punctual, Nutritious & Delicious Food Every Single Day
              </h4>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                To empower workforces and delight wedding patrons by preparing balanced meals from certified raw
                produce, maintaining verified hot dispatch, and continually innovating cafeteria experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Six Operational Pillars Grid */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <ShieldCheck size={13} color="var(--color-terracotta)" />
              <span>Core Operational Standards</span>
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.85rem',
                color: 'var(--color-text-main)',
              }}
            >
              The Pillars That Guarantee Consistent Execution
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {CORE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="card-minimal"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-terracotta)',
                    letterSpacing: '0.05em',
                  }}
                >
                  0{idx + 1}
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.18rem',
                    color: 'var(--color-text-main)',
                    lineHeight: 1.3,
                  }}
                >
                  {pillar.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.62,
                    margin: 0,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
