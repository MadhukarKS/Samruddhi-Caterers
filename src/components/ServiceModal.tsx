import React from 'react';
import type { ServiceItem } from '../data/samruddhiData';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestProposal: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestProposal,
}) => {
  if (!service) return null;

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
        zIndex: 1000,
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
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
          border: '1px solid var(--color-border-subtle)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Modal Image Header */}
        <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
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
              background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(9, 33, 25, 0.85) 100%)',
            }}
          />

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(9, 33, 25, 0.75)',
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
                background: 'rgba(197, 168, 128, 0.25)',
                color: 'var(--color-gold-light)',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: '1px solid rgba(197, 168, 128, 0.4)',
                display: 'inline-block',
                marginBottom: '0.5rem',
              }}
            >
              {service.badge}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                color: '#FFFFFF',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              fontStyle: 'italic',
              color: 'var(--color-emerald-deep)',
              marginBottom: '1.25rem',
              borderLeft: '3px solid var(--color-gold-accent)',
              paddingLeft: '1rem',
            }}
          >
            “{service.headline}”
          </blockquote>

          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-charcoal-body)', marginBottom: '1.5rem' }}>
            {service.shortDesc}
          </p>

          <div
            style={{
              background: 'var(--color-ivory-cream)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              marginBottom: '1.75rem',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <h4
              style={{
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-emerald-primary)',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              Operational Scope & Capabilities:
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-body)', margin: 0 }}>
              {service.operationalScope}
            </p>
          </div>

          <h4
            style={{
              fontSize: '0.88rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-emerald-deep)',
              fontWeight: 700,
              marginBottom: '0.85rem',
            }}
          >
            Core Operational Protocols:
          </h4>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
            {service.highlights.map((h) => (
              <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={16} color="#184A3B" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ color: 'var(--color-charcoal-rich)' }}>{h}</span>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>
              <ShieldCheck size={16} color="#C5A880" />
              <span>Central Kitchen Dispatch from Jigani Hobli</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onRequestProposal(service.title);
              }}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.85rem' }}
            >
              <span>{service.ctaText}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
