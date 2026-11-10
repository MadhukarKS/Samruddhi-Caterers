import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';
import { CORE_PILLARS } from '../../data/samruddhiData';
import {
  Compass,
  Target,
  Sparkles,
  Check,
  ArrowRight,
  Factory,
  Utensils,
  ShieldCheck,
  Users,
  Truck,
  Award,
  CheckCircle2,
} from 'lucide-react';

const PILLAR_ICONS = [
  Utensils,
  Award,
  ShieldCheck,
  Users,
  Truck,
  CheckCircle2,
];

export const AboutSection = ({ onRequestProposal: propOnRequestProposal }) => {
  const { openProposalModal } = useApp();
  const handleRequest = propOnRequestProposal || (() => openProposalModal('Corporate Catering'));

  return (
    <section id="about" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Architectural Header Band */}
      <div className="page-hero-band">
        <div className="container-wide" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="badge-pill" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={13} color="var(--color-terracotta)" />
            <span>Two Decades of Food-Service Leadership</span>
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              color: 'var(--color-text-main)',
              marginBottom: '0.85rem',
            }}
          >
            Experience That Nourishes Trust.
          </h1>

          <p style={{ fontSize: '1.02rem', color: 'var(--color-text-body)', lineHeight: 1.7, margin: 0 }}>
            Since 2004, Samruddhi Group has partnered with factories, corporate campuses, universities, and families across
            Karnataka—uniting mechanized central kitchen discipline with authentic culinary craft.
          </p>
        </div>
      </div>

      <div className="container-wide">
        {/* Structured 2-Column Commissary & Vision Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.75rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Central Commissary Infrastructure Card */}
          <div
            className="card-showcase"
            style={{
              '--stagger': 0,
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span className="badge-pill" style={{ marginBottom: '1.1rem' }}>
                <Factory size={13} color="var(--color-terracotta)" />
                <span>Central Commissary Hub • Jigani</span>
              </span>

              <h2 style={{ fontSize: '1.65rem', marginBottom: '0.85rem', lineHeight: 1.24 }}>
                Engineered for 50,000+ Daily Meals Across Bengaluru
              </h2>

              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-body)', lineHeight: 1.68, marginBottom: '1.5rem' }}>
                Anchored strategically in the Jigani – Electronic City industrial belt, our flagship facility operates
                24/7 to guarantee uninterrupted shift nutrition and corporate cafeteria continuity.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.85rem' }}>
                {[
                  'Semi-automated chapati & paratha lines producing 10,000+ uniform units per hour.',
                  'Industrial steam cooking kettles with zero-contamination segregated prep zones.',
                  'Temperature-retaining hot-box transport fleet monitored via real-time GPS tracking.',
                  'In-house microbiological swabbing & RO water purity screening before dispatch.',
                ].map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
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
                        marginTop: '0.18rem',
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.55 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button type="button" onClick={handleRequest} className="btn btn-primary">
                <span>Structure an RFP with Our Kitchen</span>
                <ArrowRight size={15} className="hover-arrow" />
              </button>
            </div>
          </div>

          {/* Right: Vision & Mission Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="card-showcase"
              style={{
                '--stagger': 1,
                backgroundColor: 'var(--color-pine-primary)',
                borderColor: 'var(--color-pine-medium)',
                color: '#FFFFFF',
                padding: '2rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <Compass size={20} color="#C85E34" />
                <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#C85E34' }}>
                  Our Vision
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.65rem' }}>
                South India's Benchmark for Institutional Hospitality
              </h3>
              <p style={{ color: '#D5DFDA', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                Setting the gold standard across industrial catering, modern campus food courts, and celebration venues by
                uniting precision operations with warm culinary care.
              </p>
            </div>

            <div
              className="card-showcase"
              style={{
                '--stagger': 2,
                padding: '2rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <Target size={20} color="var(--color-pine-primary)" />
                <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-pine-primary)' }}>
                  Our Mission
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', marginBottom: '0.65rem' }}>
                Punctual, Nutritious Meals Every Single Day
              </h3>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                Empowering industrial workforces and delighting wedding patrons through traceable sourcing, strict
                thermal dispatch, and continuously evolving menus.
              </p>
            </div>
          </div>
        </div>

        {/* Six Operational Pillars */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <ShieldCheck size={13} color="var(--color-terracotta)" />
              <span>Core Operational Standards</span>
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 2.8vw, 2.15rem)' }}>
              The Pillars Behind Consistent Execution
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.35rem',
            }}
          >
            {CORE_PILLARS.map((pillar, idx) => {
              const IconComp = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <div
                  key={pillar.title}
                  className="card-showcase"
                  style={{
                    '--stagger': idx,
                    padding: '1.65rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      className="card-icon-box"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-terracotta-light)',
                        color: 'var(--color-terracotta)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp size={19} />
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-terracotta)' }}>
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', margin: 0 }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Architectural CTA */}
        <div className="cta-band">
          <div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', marginBottom: '0.35rem' }}>
              Want to Audit Our Jigani Central Kitchen?
            </h3>
            <p style={{ color: '#C5D2CC', fontSize: '0.9rem', margin: 0 }}>
              Review our FSSAI hygiene workflows or schedule a facility walkthrough with our QA director.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link to="/quality" className="btn btn-secondary btn-sm">
              <span>View Hygiene Standards</span>
            </Link>
            <Link to="/contact" className="btn btn-terracotta btn-sm">
              <span>Book Facility Visit</span>
              <ArrowRight size={14} className="hover-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
