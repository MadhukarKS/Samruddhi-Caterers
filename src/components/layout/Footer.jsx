import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';
import { SamruddhiLogo } from '../common/SamruddhiLogo';
import { ShieldCheck, MapPin, ArrowRight, Phone, Mail } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const { openProposalModal, openPrivacyModal } = useApp();

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Our Services', to: '/services' },
    { name: 'Our Brands', to: '/brands' },
    { name: 'Quality & Hygiene', to: '/quality' },
    { name: 'Contact & RFP Desk', to: '/contact' },
  ];

  const services = [
    'Industrial Catering',
    'Corporate Catering',
    'Outdoor Catering and Events',
    'Institutional Catering',
  ];

  return (
    <footer
      style={{
        backgroundColor: '#070C14',
        color: '#CBD5E1',
        borderTop: '1px solid #1E2C42',
        paddingTop: '2.25rem',
        paddingBottom: '1.5rem',
        marginTop: 'auto',
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '2rem',
            marginBottom: '1.75rem',
          }}
        >
          {/* Brand Summary */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <SamruddhiLogo variant="light" size="sm" showTagline={true} />
            </div>

            <p style={{ fontSize: '0.84rem', lineHeight: 1.55, color: '#94A3B8', marginBottom: '1rem' }}>
              Large-scale commercial kitchens and catering hospitality in Bengaluru since 2004.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.9rem' }}>
              <a href="https://www.linkedin.com/company/samruddhi-caterers" target="_blank" rel="noopener noreferrer" className="social-pill social-pill-dark" title="LinkedIn" aria-label="LinkedIn">
                <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>in</span>
              </a>
              <a href="https://www.instagram.com/samruddhigroup" target="_blank" rel="noopener noreferrer" className="social-pill social-pill-dark" title="Instagram" aria-label="Instagram">
                <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>ig</span>
              </a>
              <a href="https://wa.me/919845012345" target="_blank" rel="noopener noreferrer" className="social-pill social-pill-dark" title="WhatsApp" aria-label="WhatsApp">
                <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>wa</span>
              </a>
              <a href="https://www.youtube.com/@samruddhigroup" target="_blank" rel="noopener noreferrer" className="social-pill social-pill-dark" title="YouTube" aria-label="YouTube">
                <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>yt</span>
              </a>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.74rem',
                color: '#CBD5E1',
                padding: '0.32rem 0.65rem',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: '#131C2A',
                border: '1px solid #24344C',
              }}
            >
              <ShieldCheck size={13} color="#E09132" />
              <span>FSSAI Lic. 11221334000542</span>
            </div>
          </div>

          {/* Navigation Pages */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#F1F5F9', marginBottom: '0.85rem' }}>
              Pages
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      color: '#94A3B8',
                      fontSize: '0.84rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <ArrowRight size={11} color="#E09132" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick RFP Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#F1F5F9', marginBottom: '0.85rem' }}>
              Catering Verticals
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {services.map((name) => (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => openProposalModal(name)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94A3B8',
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      padding: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <ArrowRight size={11} color="#E09132" />
                    <span>{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Facility & Desk */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#F1F5F9', marginBottom: '0.85rem' }}>
              Central Commissary
            </h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.65rem' }}>
              <MapPin size={15} color="#E09132" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <address style={{ fontStyle: 'normal', fontSize: '0.82rem', lineHeight: 1.5, color: '#94A3B8' }}>
                No. 79/2, Jigani Hobli, Anekal Taluk, Bengaluru – 560105
              </address>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem' }}>
              <a href="tel:+919845012345" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={13} color="#E09132" />
                <span>+91 98450 12345</span>
              </a>
              <a href="mailto:rfp@samruddhigroup.in" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={13} color="#E09132" />
                <span>rfp@samruddhigroup.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.76rem',
            color: '#7D8DA3',
          }}
        >
          <div>© {CURRENT_YEAR} Samruddhi Group. Commercial Kitchens & Catering Services, Bengaluru.</div>

          <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
            <button
              onClick={openPrivacyModal}
              style={{
                background: 'none',
                border: 'none',
                color: '#7D8DA3',
                cursor: 'pointer',
                fontSize: '0.76rem',
                textDecoration: 'underline',
              }}
            >
              Privacy Policy & Terms
            </button>
            <span>•</span>
            <span>CIN: U55101KA2004PTC034567</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
