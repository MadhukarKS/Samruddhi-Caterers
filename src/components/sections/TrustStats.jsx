import React, { useState, useEffect } from 'react';
import { Award, Users, UtensilsCrossed, ShieldCheck, Check } from 'lucide-react';

export const TrustStats = () => {
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [meals, setMeals] = useState(0);
  const [compliance, setCompliance] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const steps = 40;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setYears(Math.min(20, Math.floor(eased * 20)));
      setCustomers(Math.min(8000, Math.floor(eased * 8000)));
      setMeals(Math.min(50000, Math.floor(eased * 50000)));
      setCompliance(Math.min(100, Math.floor(eased * 100)));

      if (stepCount >= steps) {
        clearInterval(timer);
        setYears(20);
        setCustomers(8000);
        setMeals(50000);
        setCompliance(100);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Award size={21} color="var(--color-terracotta)" />,
      iconBg: 'rgba(200, 94, 52, 0.09)',
      display: `${years}+`,
      title: 'Years of Experience',
      badge: 'EST. 2004',
      desc: 'Established culinary legacy providing dependable food-service and hospitality solutions across Karnataka.',
      proof: 'Over 2 Decades in Bengaluru',
    },
    {
      icon: <Users size={21} color="var(--color-pine-primary)" />,
      iconBg: 'rgba(21, 43, 34, 0.08)',
      display: `${customers.toLocaleString()}+`,
      title: 'Happy Customers',
      badge: 'B2B & EVENTS',
      desc: 'Trusted daily by industry leaders, corporate workplaces, educational campuses, and banquet hosts.',
      proof: 'Corporate, Tech & Manufacturing',
    },
    {
      icon: <UtensilsCrossed size={21} color="var(--color-terracotta)" />,
      iconBg: 'rgba(200, 94, 52, 0.09)',
      display: `${meals.toLocaleString()}+`,
      title: 'Large-Scale Catering Operations',
      badge: 'DAILY COMMISSARY',
      desc: 'High-volume central production facility built for continuous, punctual dispatch across shift rotations.',
      proof: '24/7 Jigani Hub Coverage',
    },
    {
      icon: <ShieldCheck size={21} color="#1E7E55" />,
      iconBg: 'rgba(30, 126, 85, 0.1)',
      display: `${compliance}%`,
      title: 'Quality, Hygiene & Safety',
      badge: 'FSSAI LEVEL 5',
      desc: 'Strict farm-level produce screening, disciplined kitchen sanitation, and verified lab batch audits.',
      proof: 'ISO 22000 & HACCP Certified',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#F4F3EE',
        borderBottom: '1px solid var(--color-border)',
        padding: 'clamp(3rem, 5vw, 4.25rem) 0',
        position: 'relative',
      }}
    >
      <div className="container-wide">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-text-muted)',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              padding: '0.32rem 0.9rem',
              borderRadius: 'var(--radius-pill)',
              display: 'inline-block',
            }}
          >
            Verifiable Scale & Operational Excellence
          </span>
        </div>

        <div
          className="trust-stats-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.35rem',
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={item.title}
              className="card-showcase"
              style={{
                '--stagger': idx,
                padding: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.1rem',
                }}
              >
                <div
                  className="card-icon-box"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: item.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>

                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    padding: '0.24rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.15rem, 3.4vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--color-pine-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                  marginBottom: '0.35rem',
                }}
              >
                {item.display}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-text-main)',
                  lineHeight: 1.3,
                  marginBottom: '0.65rem',
                  minHeight: '42px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {item.title}
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--color-border-card)', marginBottom: '0.8rem' }} />

              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.58,
                  marginBottom: '1.15rem',
                }}
              >
                {item.desc}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  color: 'var(--color-pine-primary)',
                  backgroundColor: 'var(--color-surface-subtle)',
                  padding: '0.4rem 0.7rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <Check size={13} color="var(--color-terracotta)" strokeWidth={2.5} />
                <span>{item.proof}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .trust-stats-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .trust-stats-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
