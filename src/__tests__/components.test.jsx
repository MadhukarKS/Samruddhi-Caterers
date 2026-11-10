import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import { AppRoutes } from '../App';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { TrustStats } from '../components/sections/TrustStats';
import { ServicesSection } from '../components/sections/ServicesSection';
import { EnquiryForm } from '../components/modals/EnquiryForm';

const renderWithRouter = (ui, { route = '/' } = {}) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <AppProvider>{ui}</AppProvider>
    </MemoryRouter>
  );

describe('Component Integration & Multi-Page Routing Tests', () => {
  it('renders Navbar brand logo and page navigation links without Meal Estimator', () => {
    renderWithRouter(<Navbar />);

    expect(screen.getAllByText(/Samruddhi/i).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /About Us/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Our Services/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Our Brands/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Quality & Hygiene/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Contact/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/Plan & Estimate/i)).toBeNull();
  });

  it('renders Hero section headline and primary action buttons', () => {
    const handleExplore = vi.fn();
    const handleRequest = vi.fn();

    renderWithRouter(
      <Hero
        onExploreServices={handleExplore}
        onRequestProposal={handleRequest}
      />
    );

    expect(
      screen.getByRole('heading', { name: /Nourishing Trust/i, level: 1 })
    ).toBeDefined();
    expect(screen.getByText(/Explore Our Services/i)).toBeDefined();
    expect(screen.getByText(/Request a Proposal/i)).toBeDefined();
  });

  it('renders TrustStats with 20+ Years metrics', () => {
    renderWithRouter(<TrustStats />);

    expect(screen.getByText(/Years of Experience/i)).toBeDefined();
    expect(screen.getByText(/Happy Customers/i)).toBeDefined();
    expect(screen.getByText(/Large-Scale/i)).toBeDefined();
  });

  it('renders ServicesSection and filters services by category tab', () => {
    renderWithRouter(<ServicesSection />);

    expect(screen.getByText(/End-to-End Culinary Solutions/i)).toBeDefined();
    expect(screen.getByRole('tab', { name: /All Four Services/i })).toBeDefined();

    const industrialTab = screen.getByRole('tab', { name: /Industrial Catering/i });
    fireEvent.click(industrialTab);

    expect(screen.getByText(/High-Volume Production/i)).toBeDefined();
  });

  it('routes cleanly across separate pages (Home, About, Services, Brands, Quality, Contact)', () => {
    const { unmount } = renderWithRouter(<AppRoutes />, { route: '/' });
    expect(screen.getByRole('heading', { name: /Nourishing Trust/i, level: 1 })).toBeDefined();
    expect(screen.getByText(/Privacy Policy & Terms/i)).toBeDefined();
    unmount();

    const aboutView = renderWithRouter(<AppRoutes />, { route: '/about' });
    expect(screen.getByText(/Experience That Nourishes Trust\./i)).toBeDefined();
    aboutView.unmount();

    const servicesView = renderWithRouter(<AppRoutes />, { route: '/services' });
    expect(screen.getByText(/End-to-End Culinary Solutions/i)).toBeDefined();
    servicesView.unmount();

    const brandsView = renderWithRouter(<AppRoutes />, { route: '/brands' });
    expect(screen.getByText(/One Group\. Distinct Experiences\./i)).toBeDefined();
    brandsView.unmount();

    const qualityView = renderWithRouter(<AppRoutes />, { route: '/quality' });
    expect(screen.getByText(/Excellence Built Into Every Process\./i)).toBeDefined();
    qualityView.unmount();

    const contactView = renderWithRouter(<AppRoutes />, { route: '/contact' });
    expect(screen.getByText(/Connect With Our Food Services Desk/i)).toBeDefined();
    expect(screen.getByText(/Corporate Headquarters/i)).toBeDefined();
    expect(screen.queryByText(/Privacy Policy & Terms/i)).toBeNull();
    contactView.unmount();
  });

  it('validates form inputs and produces an official RFP dossier on submission', async () => {
    renderWithRouter(<EnquiryForm initialService="Corporate Catering" />);

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Full name is required')).toBeDefined();
    expect(screen.getByText('Organisation / Company name is required')).toBeDefined();
    expect(screen.getByText('Work email is required')).toBeDefined();
    expect(screen.getByText('Phone number is required')).toBeDefined();

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
