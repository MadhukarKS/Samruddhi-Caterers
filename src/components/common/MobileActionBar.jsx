import React from 'react';
import { useApp } from '../../hooks/useApp';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

export const MobileActionBar = () => {
  const { proposalModal, serviceModal, brandModal, privacyModal, openProposalModal } = useApp();

  // If any modal is active, hide sticky bar to prevent obscuring modal content/forms
  const isAnyModalOpen =
    proposalModal?.isOpen ||
    serviceModal?.isOpen ||
    brandModal?.isOpen ||
    privacyModal?.isOpen;

  if (isAnyModalOpen) return null;

  return (
    <nav className="mobile-bottom-bar" aria-label="Quick Mobile Navigation & Actions">
      {/* Direct Call Button */}
      <a
        href="tel:+919845012345"
        className="mobile-bar-btn mobile-bar-call"
        aria-label="Call Samruddhi Catering Desk"
      >
        <Phone size={13} className="mobile-bar-icon" />
        <span>Call</span>
      </a>

      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/919845012345?text=Hi%20Samruddhi%20Group,%20I%20would%20like%20to%20discuss%20a%20catering%20RFP."
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn mobile-bar-whatsapp"
        aria-label="Chat with Corporate Desk on WhatsApp"
      >
        <MessageSquare size={13} className="mobile-bar-icon" />
        <span>WhatsApp</span>
      </a>

      {/* Instant Proposal Modal */}
      <button
        type="button"
        onClick={() => openProposalModal('Corporate Catering')}
        className="mobile-bar-btn mobile-bar-rfp"
        aria-label="Get Instant Catering RFP Quote"
      >
        <span>Get RFP Quote</span>
        <ArrowRight size={13} />
      </button>
    </nav>
  );
};
