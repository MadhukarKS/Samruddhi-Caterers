import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck, Truck, Utensils, CheckCircle2, Award, ClipboardCheck, FileCheck, Check } from 'lucide-react';

export const QualityHygiene = () => {
  const foundations = [
    {
      icon: <Utensils size={22} color="var(--color-terracotta)" />,
      title: 'State-of-the-Art Central Kitchen Infrastructure',
      desc: 'Our expansive centralized commissary located in Jigani Hobli, Bengaluru is engineered with segregated prep areas, industrial steam kettles, cold storage, and stainless steel finishing lines.',
    },
    {
      icon: <Award size={22} color="var(--color-terracotta)" />,
      title: 'Professional Chefs & Support Staff',
      desc: 'Master chefs and culinary technicians trained in standardized bulk recipes, culinary hygiene protocols, uniform grooming, and safety practices.',
    },
    {
      icon: <Truck size={22} color="var(--color-terracotta)" />,
      title: 'Management & Logistics Coordination',
      desc: 'Disciplined fleet scheduling and GPS-coordinated routes ensuring prompt daily food delivery to client cafeterias and industrial canteens on time, every time.',
    },
    {
      icon: <ShieldCheck size={22} color="var(--color-terracotta)" />,
      title: 'Ingredient Quality & Safe Packaging',
      desc: 'Sourcing fresh, verified produce and spices directly from accredited agricultural partners, packaged in food-grade, temperature-retaining sealed containers.',
    },
    {
      icon: <ClipboardCheck size={22} color="var(--color-terracotta)" />,
      title: 'Consistent Preparation & Delivery Processes',
      desc: 'Standard Operating Procedures (SOPs) governing cooking temperatures, seasoning balance, tasting audits, and timely packaging before daily dispatch.',
    },
    {
      icon: <CheckCircle2 size={22} color="var(--color-terracotta)" />,
      title: 'Customer Satisfaction & Hygiene-Focused Operations',
      desc: 'Continuous feedback loops, dedicated facility liaisons, and ongoing sanitation protocols that safeguard customer well-being.',
    },
  ];

  return (
    <section id="hygiene" className="section" style={{ backgroundColor: '#152B22', color: '#FFFFFF' }}>
      <div className="container-wide">
        {/* Section Header */}
        <SectionHeading
          badgeIcon={ShieldCheck}
          badgeText="Verified Food Safety & Audits"
          title="Excellence Is Built Into Every Process."
          description="In institutional food services, safety is non-negotiable. Samruddhi Group adheres to strict FSSAI guidelines, ISO 22000 quality systems, and comprehensive hygiene disciplines across procurement, preparation, and dispatch."
          isDark={true}
        />

        {/* 6-Card Architectural Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem',
          }}
        >
          {foundations.map((item, idx) => (
            <div
              key={idx}
              className="card-dark-minimal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(200, 94, 52, 0.12)',
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
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#B8C5BE',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Facility Credentials Banner */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <FileCheck size={24} />
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF' }}>
                FSSAI Central Commissary License #11221334000542
              </div>
              <div style={{ fontSize: '0.85rem', color: '#B8C5BE' }}>
                Registered Central Kitchen Facility: No. 79/2, Jigani Hobli, Anekal Taluk, Bengaluru
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span
              style={{
                fontSize: '0.82rem',
                color: '#D8E2DC',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Check size={16} color="var(--color-whatsapp)" />
              Daily Water & Swab Testing
            </span>

            <span
              style={{
                fontSize: '0.82rem',
                color: '#D8E2DC',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Check size={16} color="var(--color-whatsapp)" />
              ISO 22000:2018 Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
