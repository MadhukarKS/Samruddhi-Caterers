import React from 'react';
import { useApp } from '../../hooks/useApp';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const ServiceModal = ({
  service: propService,
  onClose: propOnClose,
  onRequestProposal: propOnRequestProposal,
}) => {
  const { serviceModal, closeServiceModal, openProposalModal } = useApp();

  const service = propService !== undefined ? propService : serviceModal.service;
  const onClose = propOnClose || closeServiceModal;
  const handleRequest = (title) => {
    onClose();
    if (propOnRequestProposal) {
      propOnRequestProposal(title);
    } else {
      openProposalModal(title);
    }
  };

  if (!service) return null;

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
      aria-label={`${service.title} Details`}
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
        {/* Modal Image Header */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
          <img
            src={service.image}
            alt={service.title}
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
              {service.badge}
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
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--color-terracotta)',
                marginBottom: '0.35rem',
              }}
            >
              {service.headline}
            </h4>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: 'var(--color-text-body)' }}>
              {service.shortDesc}
            </p>
          </div>

          {/* Operational Scope */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-subtle)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-sm)',
              borderLeft: '3px solid var(--color-pine-primary)',
              marginBottom: '1.75rem',
            }}
          >
            <strong
              style={{
                display: 'block',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-pine-primary)',
                marginBottom: '0.25rem',
              }}
            >
              Operational Scope & Infrastructure:
            </strong>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', margin: 0, lineHeight: 1.6 }}>
              {service.operationalScope}
            </p>
          </div>

          {/* Highlights Checklist */}
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
              Standard Execution Highlights:
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {service.highlights.map((h) => (
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
              <ShieldCheck size={15} color="var(--color-pine-primary)" />
              <span>Standardised FSSAI central commissary dispatch</span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={onClose} className="btn btn-secondary btn-sm">
                Close
              </button>
              <button
                onClick={() => handleRequest(service.title)}
                className="btn btn-primary btn-sm"
              >
                <span>Request Proposal</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
