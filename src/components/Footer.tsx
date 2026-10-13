import React from 'react';
import { SamruddhiLogo } from './SamruddhiLogo';
import { ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onRequestProposal: (serviceName?: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestProposal, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

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

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#071A14',
        color: '#E0ECE5',
        borderTop: '1px solid rgba(197, 168, 128, 0.25)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Intro Column */}
          <div style={{ gridColumn: 'span 1', minWidth: '280px' }} className="footer-col-main">
            <div style={{ marginBottom: '1.25rem' }}>
              <SamruddhiLogo variant="dark" size="md" showTagline={true} />
            </div>

            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#AEC1B8', marginBottom: '1.5rem' }}>
              Samruddhi Group is an established Indian food-services, catering and hospitality group with more than 20
              years of experience. We engineer large-scale commercial kitchens and hospitality venues founded upon
              uncompromising hygiene, consistency and care.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--color-gold-light)',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(197, 168, 128, 0.1)',
                border: '1px solid rgba(197, 168, 128, 0.25)',
              }}
            >
              <ShieldCheck size={14} color="#D4AF37" />
              <span>FSSAI Compliant Food Services</span>
            </div>
          </div>

          {/* Our Services Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-gold-accent)',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Our Catering Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    style={{
                      color: '#D3DFD8',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#DFC789')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#D3DFD8')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitality Brands Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-gold-accent)',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Our Hospitality Brands
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {brands.map((brand) => (
                <li key={brand.name}>
                  <a
                    href={brand.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(brand.href);
                    }}
                    style={{
                      color: '#D3DFD8',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#DFC789')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#D3DFD8')}
                  >
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Address & Contact Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-gold-accent)',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Corporate Office
            </h4>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <MapPin size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <address style={{ fontStyle: 'normal', fontSize: '0.88rem', lineHeight: 1.6, color: '#D3DFD8' }}>
                No. 79/2, Jigani Hobli,<br />
                Bengaluru, Karnataka – 560105
              </address>
            </div>

            <button
              onClick={() => onRequestProposal()}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.75rem 1.25rem', fontSize: '0.85rem', marginTop: '0.5rem' }}
            >
              <span>Request a Proposal</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Notice */}
        <div
          style={{
            borderTop: '1px solid rgba(197, 168, 128, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#8A9E94',
          }}
        >
          <div>
            © {currentYear} <strong>Samruddhi Group</strong>. All rights reserved. “Nourishing Trust, Delivering Excellence.”
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button
              onClick={onOpenPrivacy}
              style={{
                background: 'none',
                border: 'none',
                color: '#AEC1B8',
                fontSize: '0.82rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Privacy Policy & Terms
            </button>

            <span style={{ color: 'rgba(197, 168, 128, 0.3)' }}>|</span>

            <span>Jigani Hobli, Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
