import React, { useState, useEffect } from 'react';
import { Award, Users, UtensilsCrossed, ShieldCheck } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    // Elegant number counter animation
    const duration = 1800;
    const steps = 60;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setYears(Math.min(20, Math.floor(eased * 20)));
      setCustomers(Math.min(8000, Math.floor(eased * 8000)));

      if (stepCount >= steps) {
        clearInterval(timer);
        setYears(20);
        setCustomers(8000);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Award size={28} color="#C5A880" />,
      display: `${years}+`,
      title: 'Years of Experience',
      desc: 'Established operational legacy providing dependable hospitality and catering solutions.',
    },
    {
      icon: <Users size={28} color="#C5A880" />,
      display: `${customers.toLocaleString()}+`,
      title: 'Happy Customers',
      desc: 'Serving industry leaders, corporate teams, institutions and event hosts across Karnataka.',
    },
    {
      icon: <UtensilsCrossed size={28} color="#C5A880" />,
      display: 'Large-Scale',
      title: 'Catering Operations',
      desc: 'High-volume central kitchen capability designed for continuous, timely food dispatch.',
    },
    {
      icon: <ShieldCheck size={28} color="#C5A880" />,
      display: 'Commitment to',
      title: 'Quality, Hygiene & Safety',
      desc: 'Rigorous ingredient screening, disciplined sanitation and verified FSSAI compliance.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#FAF7F2',
        position: 'relative',
        zIndex: 20,
        marginTop: '-2.5rem',
        paddingBottom: '3.5rem',
      }}
    >
      <div className="container">
        {/* Floating Luxury Stats Banner */}
        <div
          style={{
            backgroundColor: '#0D2C22',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 20px 50px rgba(9, 33, 25, 0.22)',
            border: '1px solid rgba(197, 168, 128, 0.28)',
            padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3.5vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle gold accent watermark in background */}
          <div
            style={{
              position: 'absolute',
              right: '-50px',
              bottom: '-50px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197, 168, 128, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {stats.map((item, index) => (
            <div
              key={item.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                paddingRight: index < stats.length - 1 ? '1rem' : 0,
                borderRight: index < stats.length - 1 ? '1px solid rgba(197, 168, 128, 0.15)' : 'none',
              }}
              className="stat-card"
            >
              {/* Icon & display number */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(197, 168, 128, 0.12)',
                    border: '1px solid rgba(197, 168, 128, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: item.display.length > 6 ? '1.75rem' : '2.6rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: '#FFFFFF',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.display}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-gold-accent)',
                  letterSpacing: '0.02em',
                  marginBottom: '0.45rem',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.86rem',
                  lineHeight: 1.55,
                  color: 'rgba(231, 239, 235, 0.82)',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stat-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(197, 168, 128, 0.15);
            padding-bottom: 1.5rem;
          }
          .stat-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
};
