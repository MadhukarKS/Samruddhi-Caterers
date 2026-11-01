import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AppProvider } from '../context/AppContext';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { TrustStats } from '../components/sections/TrustStats';
import { ServicesSection } from '../components/sections/ServicesSection';
import { MealEstimator } from '../components/sections/MealEstimator';
import { EnquiryForm } from '../components/modals/EnquiryForm';

describe('Component Integration Tests', () => {
  it('renders Navbar brand logo, accreditation bar, and navigation links', () => {
    render(
      <AppProvider>
        <Navbar />
      </AppProvider>
    );

    expect(screen.getAllByText(/Samruddhi/i).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /About Us/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Our Services/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Our Brands/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Quality & Hygiene/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Contact/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders Hero section headline and primary action buttons', () => {
    const handleExplore = vi.fn();
    const handleRequest = vi.fn();

    render(
      <AppProvider>
        <Hero
          onExploreServices={handleExplore}
          onRequestProposal={handleRequest}
        />
      </AppProvider>
    );

    expect(
      screen.getByRole('heading', { name: /Nourishing Trust/i, level: 1 })
    ).toBeDefined();
    expect(screen.getByText(/Explore Our Services/i)).toBeDefined();
    expect(screen.getByText(/Request a Proposal/i)).toBeDefined();
  });

  it('renders TrustStats with 20+ Years metrics', () => {
    render(
      <AppProvider>
        <TrustStats />
      </AppProvider>
    );

    expect(screen.getByText(/Years of Experience/i)).toBeDefined();
    expect(screen.getByText(/Happy Customers/i)).toBeDefined();
    expect(screen.getByText(/Large-Scale/i)).toBeDefined();
  });

  it('renders ServicesSection and filters services by category tab', () => {
    render(
      <AppProvider>
        <ServicesSection />
      </AppProvider>
    );

    expect(screen.getByText(/End-to-End Culinary Solutions/i)).toBeDefined();
    expect(screen.getByRole('tab', { name: /All Four Services/i })).toBeDefined();

    // Click tab for industrial catering
    const industrialTab = screen.getByRole('tab', { name: /Industrial Catering/i });
    fireEvent.click(industrialTab);

    expect(screen.getByText(/High-Volume Production/i)).toBeDefined();
  });

  it('allows user to interact with the Meal & Budget Estimator', () => {
    render(
      <AppProvider>
        <MealEstimator />
      </AppProvider>
    );

    expect(screen.getByText(/Interactive Meal & Catering Budget Estimator/i)).toBeDefined();
    expect(screen.getByText(/Estimated Total Run:/i)).toBeDefined();

    // Switch vertical to Industrial
    const industrialBtn = screen.getByRole('button', { name: /Industrial & Shift Workforce/i });
    fireEvent.click(industrialBtn);

    // Verify button exists to launch proposal
    const transferBtn = screen.getByRole('button', { name: /Transfer Estimate into Formal RFP/i });
    expect(transferBtn).toBeDefined();
  });

  it('validates form inputs and produces an official RFP dossier on submission', async () => {
    render(
      <AppProvider>
        <EnquiryForm initialService="Corporate Catering" />
      </AppProvider>
    );

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i });
    fireEvent.click(submitBtn);

    // Errors should be visible
    expect(screen.getByText('Full name is required')).toBeDefined();
    expect(screen.getByText('Organisation / Company name is required')).toBeDefined();
    expect(screen.getByText('Work email is required')).toBeDefined();
    expect(screen.getByText('Phone number is required')).toBeDefined();

    // Fill valid data
    fireEvent.change(screen.getByLabelText(/Full Name \*/i), {
      target: { name: 'fullName', value: 'Deepak Sharma' },
    });
    fireEvent.change(screen.getByLabelText(/Organisation \/ Company \*/i), {
      target: { name: 'organisation', value: 'Wipro Technologies' },
    });
    fireEvent.change(screen.getByLabelText(/Work Email \*/i), {
      target: { name: 'workEmail', value: 'deepak.sharma@wipro.com' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number \*/i), {
      target: { name: 'phoneNumber', value: '+91 98450 99999' },
    });
    fireEvent.change(screen.getByLabelText(/City \/ Facility Location \*/i), {
      target: { name: 'location', value: 'Sarjapur Campus, Bengaluru' },
    });
    fireEvent.change(screen.getByLabelText(/Approximate Meals or Guests \*/i), {
      target: { name: 'estimatedGuests', value: '800 meals/day' },
    });

    fireEvent.click(submitBtn);

    // Wait for the simulated dossier generation
    await waitFor(
      () => {
        expect(
          screen.getByText('Catering Proposal Dossier Generated')
        ).toBeDefined();
      },
      { timeout: 3000 }
    );

    expect(screen.getByText(/Official Reference ID:/i)).toBeDefined();
    expect(screen.getByText(/Download Official RFP Dossier \(\.txt\)/i)).toBeDefined();
    expect(screen.getByText(/Dispatch via Corporate Email/i)).toBeDefined();
  });
});

