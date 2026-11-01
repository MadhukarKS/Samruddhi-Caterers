import React from 'react';
import { useApp } from '../../hooks/useApp';
import { SamruddhiLogo } from '../common/SamruddhiLogo';
import { ShieldCheck, MapPin, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const { openProposalModal, openPrivacyModal } = useApp();

  const services = [
    { name: 'Industrial Catering', href: '#services' },
    { name: 'Corporate Catering', href: '#services' },
    { name: 'Outdoor Catering and Events', href: '#services' },
    { name: 'Institutional Catering', href: '#services' },
  ];

  const brands = [
    { name: 'Samruddhi Grand', href: '#brands' },
    { name: 'Santrupthi Fine-Dine', href: '#brands' },
    { name: 'Samruddhi Garden', href: '#brands' },
    { name: 'Samruddhi Food-Court', href: '#brands' },
    { name: 'Samruddhi Corporate Kitchens', href: '#brands' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#0F2019',
        color: '#D8E2DC',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: ' clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="container-wide">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(2rem, 3.5vw, 3rem)',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand Intro Column */}
          <div style={{ gridColumn: 'span 1', minWidth: '260px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <SamruddhiLogo variant="light" size="md" showTagline={true} />
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.68, color: '#A8B7AF', marginBottom: '1.5rem' }}>
              Established Indian food-services, catering, and hospitality group with over 20 years of experience. We
              engineer large-scale commercial kitchens in Bengaluru founded upon uncompromising hygiene, consistency, and
              care.
            </p>

            {/* Social Presence Pills in Footer */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#C85E34', marginBottom: '0.75rem' }}>
                Follow Our Network
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a
                  href="https://www.linkedin.com/company/samruddhi-caterers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill social-pill-dark"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>in</span>
                </a>
                <a
                  href="https://www.instagram.com/samruddhigroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill social-pill-dark"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>ig</span>
                </a>
                <a
                  href="https://wa.me/919845012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill social-pill-dark"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <MessageSquare size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@samruddhigroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill social-pill-dark"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>yt</span>
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.78rem',
                color: '#D8E2DC',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <ShieldCheck size={14} color="#C85E34" />
              <span>FSSAI Lic. 11221334000542</span>
            </div>
          </div>

          {/* Catering Services Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Catering Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      scrollTo(item.href);
                      openProposalModal(item.name);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#A8B7AF',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      padding: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#A8B7AF';
                    }}
                  >
                    <ArrowRight size={12} color="#C85E34" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitality Brands Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Hospitality Brands
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {brands.map((b) => (
                <li key={b.name}>
                  <a
                    href={b.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(b.href);
                    }}
                    style={{
                      color: '#A8B7AF',
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#A8B7AF';
                    }}
                  >
                    <ArrowRight size={12} color="#C85E34" />
                    <span>{b.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Central Commissary & Contact Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Central Facility
            </h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '1rem' }}>
              <MapPin size={18} color="#C85E34" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <address style={{ fontStyle: 'normal', fontSize: '0.88rem', lineHeight: 1.6, color: '#A8B7AF' }}>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Samruddhi Group HQ</strong>
                No. 79/2, Jigani Hobli, Anekal Taluk,<br />
                Bengaluru, Karnataka – 560105
              </address>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
              <a
                href="tel:+919845012345"
                style={{
                  color: '#D8E2DC',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
              >
                <Phone size={14} color="#C85E34" />
                <span>+91 98450 12345</span>
              </a>

              <a
                href="mailto:rfp@samruddhigroup.in"
                style={{
                  color: '#D8E2DC',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
              >
                <Mail size={14} color="#C85E34" />
                <span>rfp@samruddhigroup.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclosures & Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#84938B',
          }}
        >
          <div>
            © {CURRENT_YEAR} Samruddhi Group. All rights reserved. Commercial Kitchens & Food-Service Solutions in Bengaluru.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <button
              onClick={openPrivacyModal}
              style={{
                background: 'none',
                border: 'none',
                color: '#84938B',
                cursor: 'pointer',
                fontSize: '0.8rem',
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
