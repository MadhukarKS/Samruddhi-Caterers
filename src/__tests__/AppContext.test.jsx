import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider } from '../context/AppContext';
import { useApp } from '../hooks/useApp';

const TestConsumer = () => {
  const {
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
    toasts,
    showToast,
    savedRfps,
    saveRfp,
  } = useApp();

  return (
    <div>
      <div data-testid="active-section">{activeSection}</div>
      <div data-testid="proposal-modal-state">
        {proposalModal.isOpen ? `open:${proposalModal.initialService}` : 'closed'}
      </div>
      <div data-testid="service-modal-state">
        {serviceModal.isOpen ? serviceModal.service?.title : 'closed'}
      </div>
      <div data-testid="brand-modal-state">
        {brandModal.isOpen ? brandModal.brand?.name : 'closed'}
      </div>
      <div data-testid="privacy-modal-state">
        {privacyModal.isOpen ? 'open' : 'closed'}
      </div>
      <div data-testid="toasts-count">{toasts.length}</div>
      <div data-testid="rfps-count">{savedRfps.length}</div>

      <button onClick={() => setActiveSection('services')}>Set Services</button>
      <button onClick={() => openProposalModal('Industrial Catering')}>
        Open Proposal Industrial
      </button>
      <button onClick={closeProposalModal}>Close Proposal</button>
      <button
        onClick={() => openServiceModal({ id: 'srv1', title: 'Test Service' })}
      >
        Open Service Modal
      </button>
      <button onClick={closeServiceModal}>Close Service</button>
      <button
        onClick={() => openBrandModal({ id: 'b1', name: 'Test Brand' })}
      >
        Open Brand Modal
      </button>
      <button onClick={closeBrandModal}>Close Brand</button>
      <button onClick={openPrivacyModal}>Open Privacy</button>
      <button onClick={closePrivacyModal}>Close Privacy</button>
      <button onClick={() => showToast('Test notification', 'info', 0)}>
        Add Toast
      </button>
      <button
        onClick={() =>
          saveRfp({ referenceId: 'RFP-123', fullName: 'Tester' })
        }
      >
        Save RFP
      </button>
    </div>
  );
};

describe('AppContext State Management Tests', () => {
  it('throws error when useApp is used outside AppProvider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestConsumer />)).toThrow(
      'useApp must be used within an AppProvider'
    );
    consoleError.mockRestore();
  });

  it('manages modal open/close states and pre-filled service data', () => {
    render(
      <AppProvider>
        <TestConsumer />
      </AppProvider>
    );

    // Initial state
    expect(screen.getByTestId('proposal-modal-state').textContent).toBe('closed');
    expect(screen.getByTestId('service-modal-state').textContent).toBe('closed');
    expect(screen.getByTestId('active-section').textContent).toBe('home');

    // Open proposal modal with service
    fireEvent.click(screen.getByText('Open Proposal Industrial'));
    expect(screen.getByTestId('proposal-modal-state').textContent).toBe(
      'open:Industrial Catering'
    );

    // Close proposal modal
    fireEvent.click(screen.getByText('Close Proposal'));
    expect(screen.getByTestId('proposal-modal-state').textContent).toBe('closed');

    // Service modal
    fireEvent.click(screen.getByText('Open Service Modal'));
    expect(screen.getByTestId('service-modal-state').textContent).toBe('Test Service');
    fireEvent.click(screen.getByText('Close Service'));
    expect(screen.getByTestId('service-modal-state').textContent).toBe('closed');

    // Brand modal
    fireEvent.click(screen.getByText('Open Brand Modal'));
    expect(screen.getByTestId('brand-modal-state').textContent).toBe('Test Brand');
    fireEvent.click(screen.getByText('Close Brand'));
    expect(screen.getByTestId('brand-modal-state').textContent).toBe('closed');

    // Privacy modal
    fireEvent.click(screen.getByText('Open Privacy'));
    expect(screen.getByTestId('privacy-modal-state').textContent).toBe('open');
    fireEvent.click(screen.getByText('Close Privacy'));
    expect(screen.getByTestId('privacy-modal-state').textContent).toBe('closed');

    // Navigation active section
    fireEvent.click(screen.getByText('Set Services'));
    expect(screen.getByTestId('active-section').textContent).toBe('services');

    // Toast notifications
    fireEvent.click(screen.getByText('Add Toast'));
    expect(screen.getByTestId('toasts-count').textContent).toBe('1');

    // Save RFP
    fireEvent.click(screen.getByText('Save RFP'));
    expect(screen.getByTestId('rfps-count').textContent).toBe('1');
  });
});

