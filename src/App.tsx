import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { QualityHygiene } from './components/QualityHygiene';
import { HospitalityBrands } from './components/HospitalityBrands';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { ServiceModal } from './components/ServiceModal';
import { BrandModal } from './components/BrandModal';
import { PrivacyModal } from './components/PrivacyModal';
import type { ServiceItem, BrandItem } from './data/samruddhiData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedServiceForProposal, setSelectedServiceForProposal] = useState<string>('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [selectedBrandDetail, setSelectedBrandDetail] = useState<BrandItem | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'brands', 'hygiene', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenProposal = (serviceType?: string) => {
    if (serviceType) {
      setSelectedServiceForProposal(serviceType);
    } else {
      setSelectedServiceForProposal('Corporate Catering');
    }
    setProposalModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      {/* Sticky Luxury Header */}
      <Navbar
        onRequestProposal={handleOpenProposal}
        activeSection={activeSection}
      />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* 1. Full-Width Hero Section */}
        <Hero
          onRequestProposal={() => handleOpenProposal()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Trust and Statistics Section */}
        <TrustStats />

        {/* 3. About Samruddhi Group */}
        <AboutSection
          onRequestProposal={() => handleOpenProposal()}
        />

        {/* 4. Four Premium Service Experiences */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceDetail(service)}
          onRequestProposal={(serviceTitle) => handleOpenProposal(serviceTitle)}
        />

        {/* 5. Quality, Hygiene and Infrastructure */}
        <QualityHygiene />

        {/* 6. Hospitality Brands Directory */}
        <HospitalityBrands
          onSelectBrand={(brand) => setSelectedBrandDetail(brand)}
          onRequestProposal={(brandName) => handleOpenProposal(`Enquiry for ${brandName}`)}
        />

        {/* 7. Corporate Contact & RFP Submission */}
        <ContactSection
          onPreselectService={(service) => handleOpenProposal(service)}
        />
      </main>

      {/* 8. Refined Forest Green Footer */}
      <Footer
        onRequestProposal={handleOpenProposal}
        onOpenPrivacy={() => setPrivacyModalOpen(false)}
      />

      {/* Pop-up Modals */}
      <ProposalModal
        isOpen={proposalModalOpen}
        initialService={selectedServiceForProposal}
        onClose={() => setProposalModalOpen(false)}
      />

      <ServiceModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onRequestProposal={(serviceTitle) => handleOpenProposal(serviceTitle)}
      />

      <BrandModal
        brand={selectedBrandDetail}
        onClose={() => setSelectedBrandDetail(null)}
        onRequestProposal={(brandName) => handleOpenProposal(`Enquiry for ${brandName}`)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default App;
