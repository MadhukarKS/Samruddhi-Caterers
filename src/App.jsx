import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BrandsPage } from './pages/BrandsPage';
import { QualityPage } from './pages/QualityPage';
import { ContactPage } from './pages/ContactPage';

import { ProposalModal } from './components/modals/ProposalModal';
import { ServiceModal } from './components/modals/ServiceModal';
import { BrandModal } from './components/modals/BrandModal';
import { PrivacyModal } from './components/modals/PrivacyModal';

import { ToastContainer } from './components/common/ToastContainer';
import { BackToTop } from './components/common/BackToTop';
import { MobileActionBar } from './components/common/MobileActionBar';

export const AppRoutes = () => {
  const location = useLocation();
  const isFixedContactPage = location.pathname === '/contact' || location.pathname === '/enquiry';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/hygiene" element={<QualityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enquiry" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isFixedContactPage && <Footer />}

      <ProposalModal />
      <ServiceModal />
      <BrandModal />
      <PrivacyModal />

      <ToastContainer />
      {!isFixedContactPage && <BackToTop />}
      <MobileActionBar />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
