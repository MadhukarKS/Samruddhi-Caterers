import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <>
      <button
        onClick={scrollToTop}
        className="back-to-top-btn"
        style={{
          position: 'fixed',
          zIndex: 900,
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: '#172336',
          color: '#F1F5F9',
          border: '1px solid #2D405E',
          boxShadow: 'var(--shadow-md)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
        aria-label="Back to top"
        title="Back to top"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#E09132';
          e.currentTarget.style.color = '#0B111A';
          e.currentTarget.style.borderColor = '#E09132';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#172336';
          e.currentTarget.style.color = '#F1F5F9';
          e.currentTarget.style.borderColor = '#2D405E';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <ArrowUp size={18} />
      </button>

      <style>{`
        .back-to-top-btn {
          bottom: 2rem;
          right: 2rem;
        }
        @media (max-width: 768px) {
          .back-to-top-btn {
            bottom: 5rem;
            right: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};
