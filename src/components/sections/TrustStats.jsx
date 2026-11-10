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
      icon: <Award size={20} color="var(--color-terracotta)" />,
      iconBg: 'rgba(200, 94, 52, 0.09)',
      display: `${years}+`,
      title: 'Years of Experience',
      badge: 'EST. 2004',
      desc: 'Trusted hospitality & catering across Karnataka.',
      proof: '2 Decades in Bengaluru',
    },
    {
      icon: <Users size={20} color="var(--color-pine-primary)" />,
      iconBg: 'rgba(21, 43, 34, 0.08)',
      display: `${customers.toLocaleString()}+`,
      title: 'Happy Customers',
      badge: 'B2B & EVENTS',
      desc: 'Factories, corporate offices, campuses & banquets.',
      proof: 'Enterprise & Celebrations',
    },
    {
      icon: <UtensilsCrossed size={20} color="var(--color-terracotta)" />,
      iconBg: 'rgba(200, 94, 52, 0.09)',
      display: `${meals.toLocaleString()}+`,
      title: 'Large-Scale Catering Operations',
      badge: 'DAILY DISPATCH',
      desc: 'Central kitchen engineered for nonstop shift supply.',
      proof: '24/7 Jigani Commissary',
    },
    {
      icon: <ShieldCheck size={20} color="#1E7E55" />,
      iconBg: 'rgba(30, 126, 85, 0.1)',
      display: `${compliance}%`,
      title: 'Quality, Hygiene & Safety',
      badge: 'FSSAI LEVEL 5',
      desc: 'Verified produce screening and daily lab batch audits.',
      proof: 'ISO 22000:2018 Certified',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#F4F3EE',
        padding: 'clamp(1.75rem, 3vw, 2.5rem) 0',
        position: 'relative',
      }}
    >
      <div className="container-wide">
        <div
          className="trust-stats-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.15rem',
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={item.title}
              className="card-showcase"
              style={{
                '--stagger': idx,
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.9rem',
                }}
              >
                <div
                  className="card-icon-box"
                  style={{
                    width: '38px',
                    height: '38px',
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
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    padding: '0.2rem 0.55rem',
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
                  fontSize: 'clamp(1.9rem, 2.8vw, 2.4rem)',
                  fontWeight: 800,
                  color: 'var(--color-pine-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  marginBottom: '0.25rem',
                }}
              >
                {item.display}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: 'var(--color-text-main)',
                  lineHeight: 1.25,
                  marginBottom: '0.5rem',
                }}
              >
                {item.title}
              </div>

              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.48,
                  marginBottom: '0.85rem',
                }}
              >
                {item.desc}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'var(--color-pine-primary)',
                  backgroundColor: 'var(--color-surface-subtle)',
                  padding: '0.35rem 0.6rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <Check size={12} color="var(--color-terracotta)" strokeWidth={2.5} />
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
