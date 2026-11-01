import React from 'react';
import { AppProvider } from './context/AppContext';
import { useApp } from './hooks/useApp';
import { useScrollSpy } from './hooks/useScrollSpy';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { TrustStats } from './components/sections/TrustStats';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { MealEstimator } from './components/sections/MealEstimator';
import { QualityHygiene } from './components/sections/QualityHygiene';
import { HospitalityBrands } from './components/sections/HospitalityBrands';
import { ContactSection } from './components/sections/ContactSection';

import { ProposalModal } from './components/modals/ProposalModal';
import { ServiceModal } from './components/modals/ServiceModal';
import { BrandModal } from './components/modals/BrandModal';
import { PrivacyModal } from './components/modals/PrivacyModal';

import { ToastContainer } from './components/common/ToastContainer';
import { BackToTop } from './components/common/BackToTop';
import { MobileActionBar } from './components/common/MobileActionBar';

const AppContent = () => {
  const { setActiveSection } = useApp();

  // ScrollSpy tracks active section on scroll
  const sectionIds = ['home', 'about', 'services', 'estimator', 'brands', 'hygiene', 'contact'];
  useScrollSpy(sectionIds, setActiveSection);

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      {/* Sticky Modern Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* 1. Full-Width Architectural Hero Section */}
        <Hero />

        {/* 2. Operational Scale & Key Metrics Bar */}
        <TrustStats />

        {/* 3. Heritage & Central Commissary Infrastructure */}
        <AboutSection />

        {/* 4. The Four Core Catering Pillars */}
        <ServicesSection />

        {/* 5. Interactive Procurement & Meal Estimator */}
        <MealEstimator />

        {/* 6. Food Safety, Hygiene & FSSAI Standards */}
        <QualityHygiene />

        {/* 7. Hospitality Brands & Venues */}
        <HospitalityBrands />

        {/* 8. Corporate RFP Submission & Social Presence */}
        <ContactSection />
      </main>

      {/* 9. Minimalist Architectural Footer */}
      <Footer />

      {/* Pop-up Modals (Global State Managed) */}
      <ProposalModal />
      <ServiceModal />
      <BrandModal />
      <PrivacyModal />

      {/* Floating UX Widgets & Sticky Mobile Bar */}
      <ToastContainer />
      <BackToTop />
      <MobileActionBar />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
