import React from 'react';
import { useApp } from '../../hooks/useApp';
import { X, ShieldCheck } from 'lucide-react';

export const PrivacyModal = ({
  isOpen: propIsOpen,
  onClose: propOnClose,
}) => {
  const { privacyModal, closePrivacyModal } = useApp();

  const isOpen = propIsOpen !== undefined ? propIsOpen : privacyModal.isOpen;
  const onClose = propOnClose || closePrivacyModal;

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(4, 8, 14, 0.84)',
        backdropFilter: 'blur(10px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy & Terms"
    >
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-md)',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--color-border)',
          padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
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
            color: 'var(--color-text-muted)',
            padding: '0.25rem',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
          <ShieldCheck size={26} color="var(--color-pine-primary)" />
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.65rem',
              color: 'var(--color-text-main)',
              margin: 0,
            }}
          >
            Privacy Policy & Enterprise Terms
          </h3>
        </div>

        <div style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--color-text-body)' }}>
          <h4 style={{ color: 'var(--color-pine-primary)', marginTop: '1rem', marginBottom: '0.45rem', fontSize: '1.1rem' }}>
            1. Corporate Data & RFP Confidentiality
          </h4>
          <p>
            Samruddhi Group treats all corporate catering requests, meal specifications, headcount volumes, and commercial
            inquiries with strict confidentiality. Contact details submitted via our inquiry portals are exclusively used
            by our hospitality and catering management desk for proposal formulation.
          </p>

          <h4 style={{ color: 'var(--color-pine-primary)', marginTop: '1.25rem', marginBottom: '0.45rem', fontSize: '1.1rem' }}>
            2. Food Safety & Operational Governance
          </h4>
          <p>
            All catering solutions and culinary operations comply with Food Safety and Standards Authority of India (FSSAI)
            regulations (License No. 11221334000542). Menu customization and delivery logistics are scheduled under formalized
            enterprise Service Level Agreements (SLAs).
          </p>

          <h4 style={{ color: 'var(--color-pine-primary)', marginTop: '1.25rem', marginBottom: '0.45rem', fontSize: '1.1rem' }}>
            3. Registered Headquarters & Inquiries
          </h4>
          <p>
            Headquarters: No. 79/2, Jigani Hobli, Anekal Taluk, Bengaluru, Karnataka – 560105. For official compliance inquiries
            or data privacy questions, reach our compliance desk at <strong>rfp@samruddhigroup.in</strong>.
          </p>

          <div style={{ marginTop: '2rem', textAlign: 'right' }}>
            <button onClick={onClose} className="btn btn-primary btn-sm">
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
