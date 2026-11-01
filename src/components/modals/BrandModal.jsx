import React from 'react';
import { useApp } from '../../hooks/useApp';
import { X, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';

export const BrandModal = ({
  brand: propBrand,
  onClose: propOnClose,
  onRequestProposal: propOnRequestProposal,
}) => {
  const { brandModal, closeBrandModal, openProposalModal } = useApp();

  const brand = propBrand !== undefined ? propBrand : brandModal.brand;
  const onClose = propOnClose || closeBrandModal;
  const handleRequest = (name) => {
    onClose();
    if (propOnRequestProposal) {
      propOnRequestProposal(name);
    } else {
      openProposalModal(`Enquiry for ${name}`);
    }
  };

  if (!brand) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 19, 24, 0.75)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${brand.name} Profile`}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          maxWidth: '780px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(15, 19, 24, 0.25)',
          border: '1px solid var(--color-border)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Visual Header */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
          <img
            src={brand.image}
            alt={brand.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(15, 32, 25, 0.88) 100%)',
            }}
          />

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(15, 19, 24, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', right: '2rem' }}>
            <span
              style={{
                backgroundColor: 'rgba(200, 94, 52, 0.25)',
                color: '#FFFFFF',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: '1px solid rgba(200, 94, 52, 0.4)',
                display: 'inline-block',
                marginBottom: '0.5rem',
              }}
            >
              {brand.category}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)',
                color: '#FFFFFF',
                fontWeight: 800,
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              {brand.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                color: 'var(--color-terracotta)',
                marginBottom: '0.35rem',
              }}
            >
              {brand.tagline}
            </h4>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: 'var(--color-text-body)' }}>
              {brand.description}
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h5
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-text-muted)',
                marginBottom: '0.85rem',
                fontWeight: 700,
              }}
            >
              Distinct Brand Attributes:
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {brand.highlights.map((h) => (
                <li
                  key={h}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.92rem',
                    color: 'var(--color-text-body)',
                  }}
                >
                  <CheckCircle2 size={16} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Footer Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              <Building2 size={16} color="var(--color-pine-primary)" />
              <span>Samruddhi Group Hospitality Division</span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={onClose} className="btn btn-secondary btn-sm">
                Close
              </button>
              <button
                onClick={() => handleRequest(brand.name)}
                className="btn btn-primary btn-sm"
              >
                <span>Enquire Now</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
