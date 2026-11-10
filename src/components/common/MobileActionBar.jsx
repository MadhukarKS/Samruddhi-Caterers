import React from 'react';
import { useApp } from '../../hooks/useApp';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

export const MobileActionBar = () => {
  const { openProposalModal } = useApp();

  return (
    <div className="mobile-bottom-bar" aria-label="Quick Mobile Actions">
      {/* Direct Call Button */}
      <a
        href="tel:+919845012345"
        className="btn btn-secondary btn-sm"
        style={{
          padding: '0.65rem 0.5rem',
          fontSize: '0.8rem',
          display: 'flex',
          gap: '0.35rem',
        }}
      >
        <Phone size={14} color="var(--color-amber)" />
        <span>Call</span>
      </a>

      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/919845012345?text=Hi%20Samruddhi%20Group,%20I%20would%20like%20to%20discuss%20a%20catering%20RFP."
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp btn-sm"
        style={{
          padding: '0.65rem 0.5rem',
          fontSize: '0.8rem',
          display: 'flex',
          gap: '0.35rem',
        }}
      >
        <MessageSquare size={14} />
        <span>WhatsApp</span>
      </a>

      {/* Instant Proposal Modal */}
      <button
        type="button"
        onClick={() => openProposalModal('Corporate Catering')}
        className="btn btn-terracotta btn-sm"
        style={{
          padding: '0.65rem 0.75rem',
          fontSize: '0.82rem',
          fontWeight: 700,
          display: 'flex',
          gap: '0.35rem',
        }}
      >
        <span>Get RFP Quote</span>
        <ArrowRight size={13} />
      </button>
    </div>
  );
};

