import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  Utensils,
  CheckCircle2,
  Award,
  ClipboardCheck,
  FileCheck,
  Check,
  ArrowRight,
} from 'lucide-react';

export const QualityHygiene = () => {
  const foundations = [
    {
      icon: <Utensils size={21} color="var(--color-terracotta)" />,
      title: 'Central Kitchen Infrastructure',
      desc: 'Engineered in Jigani Hobli with segregated raw-to-cooked prep bays, industrial steam kettles, cold storage, and stainless finishing lines.',
    },
    {
      icon: <Award size={21} color="var(--color-terracotta)" />,
      title: 'Certified Culinary & Support Staff',
      desc: 'Master chefs and stewards trained in standardized batch cooking, uniform grooming, thermal safety, and sanitation hygiene.',
    },
    {
      icon: <Truck size={21} color="var(--color-terracotta)" />,
      title: 'GPS-Synchronized Fleet Dispatch',
      desc: 'Disciplined route scheduling and temperature-retaining insulated vans delivering meals reliably before every campus shift.',
    },
    {
      icon: <ShieldCheck size={21} color="var(--color-terracotta)" />,
      title: 'Farm-Traceable Sourcing & Packaging',
      desc: 'Fresh produce and whole spices sourced directly from accredited partners and sealed inside tamper-evident food-grade containers.',
    },
    {
      icon: <ClipboardCheck size={21} color="var(--color-terracotta)" />,
      title: 'Standardized Preparation Audits',
      desc: 'Rigorous SOPs governing core cooking temperatures, seasoning balance, chef sample tasting, and time-stamped sealing.',
    },
    {
      icon: <CheckCircle2 size={21} color="var(--color-terracotta)" />,
      title: 'Continuous Microbiological Testing',
      desc: 'Daily surface swabbing, purified RO water checks, and food sample retention banks guaranteeing end-to-end client safety.',
    },
  ];

  const workflow = [
    { step: '01', label: 'Daily Raw Screening', detail: 'Farm produce, grain purity & moisture checks at intake.' },
    { step: '02', label: 'RO & Steam Processing', detail: 'Calibrated high-temperature cooking in segregated bays.' },
    { step: '03', label: 'Chef & Lab Sign-off', detail: 'Organoleptic tasting + 48-hour sample retention lock.' },
    { step: '04', label: 'Hot-Box GPS Dispatch', detail: 'Tamper-sealed vessels tracked directly to your campus.' },
  ];

  return (
    <section id="hygiene" style={{ backgroundColor: 'var(--color-canvas)' }}>
      {/* Band 1: Crisp Architectural Header */}
      <div className="page-hero-band" style={{ marginBottom: 0 }}>
        <div className="container-wide" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge-pill" style={{ marginBottom: '0.85rem' }}>
            <ShieldCheck size={13} color="var(--color-terracotta)" />
            <span>Verified Food Safety & Audits</span>
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
              color: 'var(--color-text-main)',
              marginBottom: '0.85rem',
            }}
          >
            Excellence Built Into Every Process.
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.68, margin: 0 }}>
            In institutional food services, safety is non-negotiable. Every kitchen line operates under FSSAI Level 5
            protocols and ISO 22000:2018 quality governance.
          </p>
        </div>
      </div>

      {/* Band 2: Elevated Midnight Navy Core Safety Pillars */}
      <div
        style={{
          backgroundColor: '#0F1622',
          color: '#F1F5F9',
          borderBottom: '1px solid var(--color-border)',
          padding: 'clamp(3rem, 5.5vw, 4.5rem) 0',
        }}
      >
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {foundations.map((item, idx) => (
              <div
                key={idx}
                className="card-dark-showcase"
                style={{
                  '--stagger': idx,
                  padding: '1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                }}
              >
                <div
                  className="card-icon-box"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(224, 145, 50, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.22rem',
                    color: '#F1F5F9',
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h2>

                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.62, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Band 3: Midnight Canvas QA Workflow & Certification Strip */}
      <div
        style={{
          backgroundColor: '#0B111A',
          padding: 'clamp(3rem, 5vw, 4.25rem) 0 0 0',
        }}
      >
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-pill" style={{ marginBottom: '0.7rem' }}>
              <span>4-Stage Daily Dispatch Control</span>
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', margin: 0 }}>
              From Raw Intake to On-Time Shift Delivery
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.75rem',
            }}
          >
            {workflow.map((w, idx) => (
              <div
                key={w.step}
                className="card-showcase"
                style={{
                  '--stagger': idx,
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    fontWeight: 800,
                    color: 'var(--color-terracotta)',
                    lineHeight: 1,
                  }}
                >
                  {w.step}
                </span>
                <h3 style={{ fontSize: '1.08rem', color: 'var(--color-text-main)', margin: 0 }}>{w.label}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {w.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Elevated Light Certification & Audit Card */}
          <div
            className="card-showcase"
            style={{
              '--stagger': 4,
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
              <div
                className="card-icon-box"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-terracotta-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-terracotta)',
                  flexShrink: 0,
                }}
              >
                <FileCheck size={24} />
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.22rem', color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>
                  ISO 22000:2018 & FSSAI Level 5 Accredited Commissary
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.84rem', color: 'var(--color-text-body)', fontWeight: 500 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Check size={15} color="#4ADE80" />
                    License #11221334000542
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Check size={15} color="#4ADE80" />
                    Daily Microbiological & RO Lab Reports
                  </span>
                </div>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary">
              <span>Request Compliance Dossier</span>
              <ArrowRight size={15} className="hover-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
