import React from 'react';
import { ShieldCheck, Truck, Utensils, CheckCircle2, Award, ClipboardCheck } from 'lucide-react';

export const QualityHygiene: React.FC = () => {
  const foundations = [
    {
      icon: <Utensils size={24} color="#C5A880" />,
      title: 'State-of-the-Art Central Kitchen Infrastructure',
      desc: 'Our expansive centralized commissary located in Jigani Hobli, Bengaluru is engineered with segregated prep areas, industrial steam kettles, cold storage, and stainless steel finishing lines.',
    },
    {
      icon: <Award size={24} color="#C5A880" />,
      title: 'Professional Chefs & Support Staff',
      desc: 'Master chefs and culinary technicians trained in standardized bulk recipes, culinary hygiene protocols, uniform grooming, and safety practices.',
    },
    {
      icon: <Truck size={24} color="#C5A880" />,
      title: 'Management & Logistics Coordination',
      desc: 'Disciplined fleet scheduling and GPS-coordinated routes ensuring prompt daily food delivery to client cafeterias and industrial canteens on time, every time.',
    },
    {
      icon: <ShieldCheck size={24} color="#C5A880" />,
      title: 'Ingredient Quality & Safe Packaging',
      desc: 'Sourcing fresh, verified produce and spices directly from accredited agricultural partners, packaged in food-grade, temperature-retaining sealed containers.',
    },
    {
      icon: <ClipboardCheck size={24} color="#C5A880" />,
      title: 'Consistent Preparation & Delivery Processes',
      desc: 'Standard Operating Procedures (SOPs) governing cooking temperatures, seasoning balance, tasting audits, and timely packaging before daily dispatch.',
    },
    {
      icon: <CheckCircle2 size={24} color="#C5A880" />,
      title: 'Customer Satisfaction & Hygiene-Focused Operations',
      desc: 'Continuous feedback loops, dedicated facility liaisons, and ongoing sanitation protocols that safeguard customer well-being.',
    },
  ];

  return (
    <section id="hygiene" className="section section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 4rem auto' }}>
          <div className="badge-gold badge-gold-dark" style={{ marginBottom: '1rem' }}>
            <ShieldCheck size={14} color="#D4AF37" />
            <span>FSSAI Compliant Operations</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: '#FFFFFF',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Excellence Is Built Into Every Process.
          </h2>

          <div className="gold-line gold-line-center" />

          <p style={{ fontSize: '1.1rem', color: '#D3DFD8', lineHeight: 1.8 }}>
            Food safety, hygienic handling and disciplined logistics form the cornerstone of Samruddhi Group. Our central
            infrastructure and trained personnel ensure every meal meets rigorous standards before it reaches your plate.
          </p>
        </div>

        {/* Feature Hero Composition: High-Res Central Kitchen Image + FSSAI Callout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}
        >
          {/* Central Kitchen Image with Overlay Accent */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(197, 168, 128, 0.25)',
            }}
          >
            <img
              src="/images/hygiene.jpg"
              alt="Samruddhi Group State-of-the-Art Central Kitchen Hygiene and Inspection"
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '480px',
                objectFit: 'cover',
              }}
            />

            {/* Inset Credential Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                background: 'rgba(9, 29, 22, 0.92)',
                backdropFilter: 'blur(10px)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(197, 168, 128, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(197, 168, 128, 0.15)',
                  border: '1px solid #C5A880',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={24} color="#D4AF37" />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 700 }}>
                  FSSAI Food Safety Compliance
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'rgba(231, 213, 186, 0.9)', margin: 0, lineHeight: 1.4 }}>
                  Verified compliance with all applicable food safety, hygiene, and safe handling regulations across all
                  operational zones.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Process Narrative */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--color-gold-light)',
                marginBottom: '1rem',
                lineHeight: 1.25,
              }}
            >
              Discipline From Sourcing to Dining
            </h3>

            <p style={{ fontSize: '1rem', color: '#D3DFD8', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              At our central commissary in Jigani Hobli, cleanliness is not a scheduled checklist—it is an unbroken operational culture.
              Every batch of raw ingredients undergoes visual and sensory checks before entering temperature-controlled preparation bays.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  padding: '1rem',
                  background: 'rgba(18, 58, 46, 0.4)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid var(--color-gold-accent)',
                }}
              >
                <CheckCircle2 size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.92rem' }}>
                    Tamper-Evident Insulated Packaging
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: '#B7C9C0' }}>
                    Food travels in high-grade insulated containers preserving temperature and freshness from kitchen to serving bay.
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  padding: '1rem',
                  background: 'rgba(18, 58, 46, 0.4)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid var(--color-gold-accent)',
                }}
              >
                <CheckCircle2 size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.92rem' }}>
                    Strict Personal Protective Hygiene
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: '#B7C9C0' }}>
                    Mandatory hairnets, aprons, sterilized glove protocols, and daily sanitization drills for every culinary team member.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Operational Foundations Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {foundations.map((item) => (
            <div
              key={item.title}
              className="card-dark"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(197, 168, 128, 0.12)',
                  border: '1px solid rgba(197, 168, 128, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.35,
                }}
              >
                {item.title}
              </h4>

              <p style={{ fontSize: '0.88rem', color: '#B7C9C0', lineHeight: 1.65, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
