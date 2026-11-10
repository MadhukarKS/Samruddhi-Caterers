import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck, Truck, Utensils, CheckCircle2, Award, ClipboardCheck, FileCheck, Check } from 'lucide-react';

export const QualityHygiene = () => {
  const foundations = [
    {
      icon: <Utensils size={20} color="var(--color-terracotta)" />,
      title: 'Central Kitchen Infrastructure',
      desc: 'Segregated Jigani prep bays with industrial steam kettles, cold rooms, and steel finishing lines.',
    },
    {
      icon: <Award size={20} color="var(--color-terracotta)" />,
      title: 'Trained Chefs & Stewards',
      desc: 'Certified culinary staff practicing standardized recipes, clean grooming, and shift sanitation.',
    },
    {
      icon: <Truck size={20} color="var(--color-terracotta)" />,
      title: 'GPS Fleet Logistics',
      desc: 'Route-tracked hot-box vehicles guaranteeing punctual temperature-retained delivery.',
    },
    {
      icon: <ShieldCheck size={20} color="var(--color-terracotta)" />,
      title: 'Farm-Traceable Sourcing',
      desc: 'Quality-screened produce and spices packed in tamper-evident food-grade containers.',
    },
    {
      icon: <ClipboardCheck size={20} color="var(--color-terracotta)" />,
      title: 'Standardized Audits & SOPs',
      desc: 'Strict thermal monitoring, sample tasting audits, and batch traceability before dispatch.',
    },
    {
      icon: <CheckCircle2 size={20} color="var(--color-terracotta)" />,
      title: 'Daily Lab Verification',
      desc: 'Continuous microbiological swabbing, purified RO water checks, and SLA reporting.',
    },
  ];

  return (
    <section id="hygiene" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-wide">
        <div
          style={{
            backgroundColor: '#152B22',
            color: '#FFFFFF',
            padding: 'clamp(1.6rem, 3vw, 2.35rem)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <SectionHeading
            badgeIcon={ShieldCheck}
            badgeText="Verified Food Safety & Audits"
            title="Excellence Built Into Every Process."
            description="FSSAI Level 5 and ISO 22000:2018 hygiene disciplines across procurement, cooking, and dispatch."
            isDark={true}
            compact={true}
          />

      {/* 6 Compact Dark Showcase Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.15rem',
          marginBottom: '1.75rem',
        }}
      >
        {foundations.map((item, idx) => (
          <div
            key={idx}
            className="card-dark-showcase"
            style={{
              '--stagger': idx,
              padding: '1.35rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}
          >
            <div
              className="card-icon-box"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(200, 94, 52, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.08rem',
                color: '#FFFFFF',
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: '0.84rem',
                color: '#B8C5BE',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Compact Facility Credentials Banner */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: 'var(--radius-md)',
          padding: '1.15rem 1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-terracotta)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0,
            }}
          >
            <FileCheck size={20} />
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
              FSSAI Central Commissary Lic. #11221334000542
            </div>
            <div style={{ fontSize: '0.8rem', color: '#B8C5BE' }}>
              No. 79/2, Jigani Hobli, Anekal Taluk, Bengaluru – 560105
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <span
            style={{
              fontSize: '0.8rem',
              color: '#D8E2DC',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Check size={15} color="var(--color-whatsapp)" />
            Daily Swab & Water Tests
          </span>

          <span
            style={{
              fontSize: '0.8rem',
              color: '#D8E2DC',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Check size={15} color="var(--color-whatsapp)" />
            ISO 22000:2018 Certified
          </span>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};
