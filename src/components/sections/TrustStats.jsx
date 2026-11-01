import React, { useState, useEffect } from 'react';
import { Award, Users, UtensilsCrossed, ShieldCheck, Check } from 'lucide-react';

export const TrustStats = () => {
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [meals, setMeals] = useState(0);
  const [compliance, setCompliance] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const steps = 50;
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
      icon: <Award size={22} color="var(--color-terracotta)" />,
      iconBg: 'rgba(200, 94, 52, 0.08)',
      display: `${years}+`,
      title: 'Years of Experience',
      badge: 'EST. 2004',
      desc: 'Established operational legacy providing dependable food-service and hospitality solutions across Karnataka.',
      proof: 'Over 2 Decades in Bengaluru',
    },
    {
      icon: <Users size={22} color="var(--color-pine-primary)" />,
      iconBg: 'rgba(21, 43, 34, 0.08)',
      display: `${customers.toLocaleString()}+`,
      title: 'Happy Customers',
      badge: 'B2B & BANQUETS',
      desc: 'Serving industry leaders, corporate teams, institutional campuses, and festive wedding patrons.',
      proof: 'Corporate, Tech & Manufacturing',
    },
    {
      icon: <UtensilsCrossed size={22} color="var(--color-terracotta)" />,
      iconBg: 'rgba(200, 94, 52, 0.08)',
      display: `${meals.toLocaleString()}+`,
      title: 'Large-Scale Catering Operations',
      badge: 'DAILY COMMISSARY',
      desc: 'High-volume central kitchen capability designed for continuous, timely food dispatch across shift rotations.',
      proof: '24/7 Tri-Shift Coverage in Jigani',
    },
    {
      icon: <ShieldCheck size={22} color="#1E7E55" />,
      iconBg: 'rgba(30, 126, 85, 0.1)',
      display: `${compliance}%`,
      title: 'Quality, Hygiene & Safety',
      badge: 'FSSAI LEVEL 5',
      desc: 'Rigorous ingredient screening, disciplined sanitation protocols, and verified microbiological lab testing.',
      proof: 'ISO 22000 & HACCP Compliant',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#F8F7F4',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'clamp(3rem, 5vw, 4.5rem) 0',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div className="container-wide">
        {/* Section Eyebrow Label */}
        <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-text-muted)',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              padding: '0.3rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              display: 'inline-block',
            }}
          >
            Verifiable Scale & Operational Excellence
          </span>
        </div>

        {/* 4 Distinct Elevated Stats Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="trust-stats-cards-grid"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="stat-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 18px rgba(15, 19, 24, 0.04)',
                padding: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Row: Icon Container & Status Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
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
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Huge Numerical Stat */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.35rem, 3.8vw, 3.1rem)',
                  fontWeight: 800,
                  color: 'var(--color-pine-primary)',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                  marginBottom: '0.4rem',
                }}
              >
                {item.display}
              </div>

              {/* Title / Metric Name */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-text-main)',
                  lineHeight: 1.3,
                  marginBottom: '0.75rem',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {item.title}
              </div>

              {/* Divider Line */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: 'var(--color-border-card)',
                  marginBottom: '0.85rem',
                }}
              />

              {/* Narrative Description */}
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.6,
                  margin: 0,
                  marginBottom: '1.25rem',
                }}
              >
                {item.desc}
              </p>

              {/* Bottom Proof Tag */}
              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--color-pine-primary)',
                  backgroundColor: 'var(--color-surface-subtle)',
                  padding: '0.4rem 0.75rem',
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
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(15, 19, 24, 0.08) !important;
          border-color: var(--color-border-strong) !important;
        }
        @media (max-width: 1024px) {
          .trust-stats-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .trust-stats-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
