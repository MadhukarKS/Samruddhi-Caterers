import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 18, 13, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          maxWidth: '740px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--color-border-subtle)',
          padding: '2.5rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-charcoal-muted)',
          }}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <ShieldCheck size={28} color="#123A2E" />
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-emerald-deep)', margin: 0 }}>
            Privacy Policy & Enterprise Terms
          </h3>
        </div>

        <div style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--color-charcoal-body)' }}>
          <h4 style={{ color: 'var(--color-emerald-deep)', marginTop: '1rem', marginBottom: '0.5rem' }}>
            1. Corporate Data & RFP Confidentiality
          </h4>
          <p>
            Samruddhi Group treats all corporate catering requests, meal specifications, headcount volumes, and commercial
            inquiries with strict confidentiality. Contact details submitted via our inquiry portals are exclusively used
            by our hospitality and catering management desk for proposal formulation.
          </p>

          <h4 style={{ color: 'var(--color-emerald-deep)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
            2. Food Safety & Operational Governance
          </h4>
          <p>
            All catering solutions and culinary operations comply with Food Safety and Standards Authority of India (FSSAI)
            regulations. Menu customization and delivery logistics are scheduled under formalized enterprise Service Level
            Agreements (SLAs).
          </p>

          <h4 style={{ color: 'var(--color-emerald-deep)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
            3. Registered Headquarters
          </h4>
          <p>
            Samruddhi Group<br />
            No. 79/2, Jigani Hobli, Bengaluru, Karnataka – 560105
          </p>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-subtle)', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-outline-dark" style={{ padding: '0.65rem 1.5rem' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
