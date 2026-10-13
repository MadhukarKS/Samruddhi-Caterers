import React from 'react';
import { Compass, Target, Sparkles, Check, HeartHandshake, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onRequestProposal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestProposal }) => {
  const corePillars = [
    {
      title: 'Customised Food Solutions',
      desc: 'Menus engineered to align precisely with workforce demographics, institutional dietary requirements, and executive preferences.',
    },
    {
      title: 'Consistent Taste & Quality',
      desc: 'Standardised recipe matrices and quality control protocols ensuring that every serving matches our signature standard.',
    },
    {
      title: 'Hygienic Preparation & Safe Handling',
      desc: 'Sanitized preparation bays, insulated stainless-steel food dispatch, and rigorous safety discipline across all kitchen operations.',
    },
    {
      title: 'Professional Staff & Operational Discipline',
      desc: 'Culinary experts, trained banquet stewards, and logistical supervisors operating with meticulous timing and hygiene standards.',
    },
    {
      title: 'Reliable Delivery & Customer Relationships',
      desc: 'Punctual daily dispatch schedules and attentive client account managers dedicated to long-term operational partnerships.',
    },
    {
      title: 'Responsible & Sustainable Growth',
      desc: 'Thoughtful ingredient sourcing, waste reduction measures, and sustainable commercial systems designed for generational trust.',
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        {/* Editorial Section Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="badge-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={13} />
            <span>Two Decades of Hospitality Craft</span>
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
            Experience That Nourishes Trust.
          </h2>

          <div className="gold-line gold-line-center" />

          <p
            style={{
              fontSize: '1.12rem',
              lineHeight: 1.8,
              color: 'var(--color-charcoal-body)',
              fontWeight: 400,
            }}
          >
            Samruddhi Group is an established food-service and hospitality partner serving institutions, corporates,
            industries and communities across Karnataka. Rooted in disciplined culinary craftsmanship, our group operates
            central commercial commissaries and hospitality venues that unite large-scale efficiency with the authentic
            warmth of Indian hospitality.
          </p>
        </div>

        {/* Editorial Two-Column Vision & Mission Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Vision Card - Refined Luxury Editorial */}
          <div
            style={{
              background: '#0D2C22',
              color: '#FAF7F2',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(2.25rem, 4vw, 3.25rem)',
              border: '1px solid rgba(197, 168, 128, 0.3)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(197, 168, 128, 0.12) 0%, transparent 70%)',
              }}
            />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(197, 168, 128, 0.15)',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Compass size={22} color="#D4AF37" />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--color-gold-accent)',
                    fontWeight: 600,
                  }}
                >
                  Our Guiding Vision
                </span>
              </div>

              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.35,
                  color: '#FFFFFF',
                  margin: '0 0 1.5rem 0',
                  borderLeft: '2px solid var(--color-gold-accent)',
                  paddingLeft: '1.25rem',
                }}
              >
                “To be a trusted and distinguished hospitality and food-services group, enriching everyday lives through
                exceptional food, memorable experiences and responsible growth.”
              </blockquote>
            </div>

            <p style={{ fontSize: '0.92rem', color: '#B7C9C0', lineHeight: 1.6, marginTop: '1rem' }}>
              We envision long-term partnerships built upon transparency, hygiene, and unwavering culinary dedication to
              the organizations that place their daily trust in us.
            </p>
          </div>

          {/* Mission Card - Refined Luxury Editorial */}
          <div
            style={{
              background: '#FFFFFF',
              color: 'var(--color-charcoal-body)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(2.25rem, 4vw, 3.25rem)',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(18, 58, 46, 0.08)',
                    border: '1px solid rgba(18, 58, 46, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Target size={22} color="#123A2E" />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--color-emerald-primary)',
                    fontWeight: 700,
                  }}
                >
                  Our Operational Mission
                </span>
              </div>

              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.35,
                  color: 'var(--color-emerald-deep)',
                  margin: '0 0 1.5rem 0',
                  borderLeft: '2px solid var(--color-gold-accent)',
                  paddingLeft: '1.25rem',
                }}
              >
                “Deliver excellence in food and service through uncompromising quality, hygiene, consistency and care.”
              </blockquote>
            </div>

            {/* Mission Themes from brochure */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
                borderTop: '1px solid var(--color-border-subtle)',
                paddingTop: '1.25rem',
                marginTop: '1rem',
              }}
            >
              {[
                'Memorable experiences',
                'Long-term client relationships',
                'Professional operational systems',
                'Teamwork & employee development',
                'Sustainable value creation',
              ].map((theme) => (
                <div key={theme} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem' }}>
                  <Check size={14} color="#184A3B" />
                  <span style={{ fontWeight: 500, color: 'var(--color-charcoal-rich)' }}>{theme}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operational Focus Pillars Grid */}
        <div style={{ marginTop: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-emerald-primary)',
                fontWeight: 700,
              }}
            >
              Core Operational Foundations
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                color: 'var(--color-emerald-deep)',
                marginTop: '0.35rem',
              }}
            >
              How Samruddhi Group Delivers Trust Daily
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3rem',
            }}
          >
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="card-luxury"
                style={{
                  padding: '1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '3px solid var(--color-emerald-primary)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
                  <HeartHandshake size={18} color="#C5A880" />
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--color-emerald-deep)',
                    }}
                  >
                    {pillar.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-charcoal-muted)' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Callout */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={onRequestProposal}
              className="btn btn-outline-dark"
              style={{ padding: '0.85rem 2rem' }}
            >
              <span>Consult on Custom Catering Programmes</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
