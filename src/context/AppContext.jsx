import React, { useState, useEffect, useCallback } from 'react';
import { AppContext } from './appContextInstance';

export { AppContext };

export const AppProvider = ({ children }) => {
  // Navigation active section
  const [activeSection, setActiveSection] = useState('home');

  // Modals state
  const [proposalModal, setProposalModal] = useState({
    isOpen: false,
    initialService: 'Corporate Catering',
  });

  const [serviceModal, setServiceModal] = useState({
    isOpen: false,
    service: null,
  });

  const [brandModal, setBrandModal] = useState({
    isOpen: false,
    brand: null,
  });

  const [privacyModal, setPrivacyModal] = useState({
    isOpen: false,
  });

  // Toast feedback state
  const [toasts, setToasts] = useState([]);

  // RFP Registry (synchronized with localStorage)
  const [savedRfps, setSavedRfps] = useState(() => {
    try {
      const stored = localStorage.getItem('samruddhi_rfps');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Modal actions
  const openProposalModal = useCallback((serviceType = 'Corporate Catering') => {
    setProposalModal({
      isOpen: true,
      initialService: serviceType,
    });
  }, []);

  const closeProposalModal = useCallback(() => {
    setProposalModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const openServiceModal = useCallback((service) => {
    setServiceModal({
      isOpen: true,
      service,
    });
  }, []);

  const closeServiceModal = useCallback(() => {
    setServiceModal({
      isOpen: false,
      service: null,
    });
  }, []);

  const openBrandModal = useCallback((brand) => {
    setBrandModal({
      isOpen: true,
      brand,
    });
  }, []);

  const closeBrandModal = useCallback(() => {
    setBrandModal({
      isOpen: false,
      brand: null,
    });
  }, []);

  const openPrivacyModal = useCallback(() => {
    setPrivacyModal({ isOpen: true });
  }, []);

  const closePrivacyModal = useCallback(() => {
    setPrivacyModal({ isOpen: false });
  }, []);

  const closeAllModals = useCallback(() => {
    setProposalModal((p) => ({ ...p, isOpen: false }));
    setServiceModal({ isOpen: false, service: null });
    setBrandModal({ isOpen: false, brand: null });
    setPrivacyModal({ isOpen: false });
  }, []);

  // Toast actions
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message, type = 'info', duration = 3500) => {
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);

  // RFP save action
  const saveRfp = useCallback((rfpRecord) => {
    setSavedRfps((prev) => {
      const updated = [rfpRecord, ...prev];
      try {
        localStorage.setItem('samruddhi_rfps', JSON.stringify(updated));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }
      return updated;
    });
  }, []);

  // Keyboard accessibility: ESC key closes open modals
  const anyModalOpen =
    proposalModal.isOpen ||
    serviceModal.isOpen ||
    brandModal.isOpen ||
    privacyModal.isOpen;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && anyModalOpen) {
        closeAllModals();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [anyModalOpen, closeAllModals]);

  // Lock background scroll when any modal is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (anyModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }, [anyModalOpen]);

  const value = {
    activeSection,
    setActiveSection,
    proposalModal,
    openProposalModal,
    closeProposalModal,
    serviceModal,
    openServiceModal,
    closeServiceModal,
    brandModal,
    openBrandModal,
    closeBrandModal,
    privacyModal,
    openPrivacyModal,
    closePrivacyModal,
    closeAllModals,
    toasts,
    showToast,
    removeToast,
    savedRfps,
    saveRfp,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

