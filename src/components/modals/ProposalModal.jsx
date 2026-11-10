import React from 'react';
import { useApp } from '../../hooks/useApp';
import { EnquiryForm } from './EnquiryForm';
import { X } from 'lucide-react';

export const ProposalModal = ({
  isOpen: propIsOpen,
  initialService: propInitialService,
  onClose: propOnClose,
}) => {
  const { proposalModal, closeProposalModal } = useApp();

  const isOpen = propIsOpen !== undefined ? propIsOpen : proposalModal.isOpen;
  const initialService =
    propInitialService !== undefined
      ? propInitialService
      : proposalModal.initialService;
  const onClose = propOnClose || closeProposalModal;

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(4, 8, 14, 0.88)',
        backdropFilter: 'blur(16px)',
        zIndex: 1050,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Catering Proposal Request"
    >
      <div
        style={{
          maxWidth: '860px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
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
            zIndex: 10,
            background: 'var(--color-surface-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-main)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          aria-label="Close proposal form"
        >
          <X size={20} />
        </button>

        <EnquiryForm
          key={initialService}
          initialService={initialService}
          isModal={true}
          onCloseModal={onClose}
        />
      </div>
    </div>
  );
};

