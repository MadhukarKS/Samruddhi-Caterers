import React from 'react';
import { useApp } from '../../hooks/useApp';
import { CORE_PILLARS } from '../../data/samruddhiData';
import { SectionHeading } from '../common/SectionHeading';
import { Compass, Target, Sparkles, Check, ArrowRight, Factory } from 'lucide-react';

export const AboutSection = ({ onRequestProposal: propOnRequestProposal }) => {
  const { openProposalModal } = useApp();
  const handleRequest = propOnRequestProposal || (() => openProposalModal('Corporate Catering'));

  return (
    <section id="about" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-wide">
        <SectionHeading
          badgeIcon={Sparkles}
          badgeText="Est. 2004 • Bengaluru"
          title="Experience That Nourishes Trust."
          description="Over two decades of dependable industrial, corporate, and celebratory food services driven by mechanized efficiency."
          compact={true}
        />

        {/* Compact 2-Column Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.25rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Central Kitchen Overview Card */}
          <div
            className="card-showcase"
            style={{
              '--stagger': 0,
              padding: 'clamp(1.35rem, 2.5vw, 1.85rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span className="badge-pill" style={{ marginBottom: '0.85rem' }}>
                <Factory size={12} color="var(--color-terracotta)" />
                <span>Jigani Central Commissary</span>
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  color: 'var(--color-text-main)',
                  marginBottom: '0.6rem',
                }}
              >
                50,000+ Daily Meal Capacity
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', marginBottom: '1.1rem', lineHeight: 1.55 }}>
                Strategically anchored in Jigani Industrial Hub to supply factories, IT campuses, and venues across Bengaluru.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
                {[
                  '10,000+ chapatis/hr automated production lines',
                  'Segregated steam kettles & clean prep zones',
                  'GPS-monitored temperature-controlled vans',
                  'Daily microbiological & RO water batch checks',
                ].map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-terracotta-light)',
                        color: 'var(--color-terracotta)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-body)' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button type="button" onClick={handleRequest} className="btn btn-primary btn-sm">
                <span>Request Commissary RFP</span>
                <ArrowRight size={14} className="hover-arrow" />
              </button>
            </div>
          </div>

          {/* Right: Vision & Mission Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div
              className="card-showcase"
              style={{
                '--stagger': 1,
                backgroundColor: 'var(--color-pine-primary)',
                borderColor: 'var(--color-pine-medium)',
                color: '#FFFFFF',
                padding: '1.45rem',
                flex: 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.5rem' }}>
                <Compass size={17} color="#C85E34" />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C85E34' }}>
                  Our Vision
                </span>
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                South India's Benchmark for Institutional Food Services
              </h4>
              <p style={{ color: '#D5DFDA', fontSize: '0.86rem', lineHeight: 1.55, margin: 0 }}>
                Uniting mechanized kitchen precision with authentic flavor and verified food safety.
              </p>
            </div>

            <div
              className="card-showcase"
              style={{
                '--stagger': 2,
                padding: '1.45rem',
                flex: 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.5rem' }}>
                <Target size={17} color="var(--color-pine-primary)" />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-pine-primary)' }}>
                  Our Mission
                </span>
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                Punctual, Nutritious Meals Every Single Day
              </h4>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.86rem', lineHeight: 1.55, margin: 0 }}>
                Empowering teams and delighting banquet patrons through fresh produce and consistent taste.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Compact Operational Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
          }}
        >
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="card-showcase"
              style={{
                '--stagger': idx,
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h4 style={{ fontSize: '1.02rem', color: 'var(--color-text-main)', margin: 0 }}>
                  {pillar.title}
                </h4>
                <span
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-terracotta)',
                  }}
                >
                  0{idx + 1}
                </span>
              </div>
              <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
