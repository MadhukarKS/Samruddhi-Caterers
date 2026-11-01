import React, { useState, useEffect } from 'react';
import { useApp } from '../../hooks/useApp';
import { SamruddhiLogo } from '../common/SamruddhiLogo';
import { Menu, X, ArrowRight, ShieldCheck, Phone, MessageSquare } from 'lucide-react';

export const Navbar = () => {
  const { openProposalModal, activeSection } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Our Services', href: '#services', id: 'services' },
    { name: 'Plan & Estimate', href: '#estimator', id: 'estimator' },
    { name: 'Our Brands', href: '#brands', id: 'brands' },
    { name: 'Quality & Hygiene', href: '#hygiene', id: 'hygiene' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          transition: 'all 0.25s ease',
          backgroundColor: isScrolled ? 'rgba(250, 250, 248, 0.95)' : '#FAFAF8',
          backdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 2px 12px rgba(15, 19, 24, 0.04)' : 'none',
        }}
      >
        {/* Top Information & Social Accreditation Strip (Desktop) */}
        <div
          style={{
            backgroundColor: '#152B22',
            color: '#D8E2DC',
            fontSize: '0.78rem',
            padding: '0.35rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
          className="desktop-top-bar"
        >
          <div
            className="container-wide"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={13} color="#C85E34" />
                <span>FSSAI Lic. 11221334000542 • ISO 22000:2018 Certified Central Kitchen</span>
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
              <span>Jigani Hobli, Bengaluru – 560105</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <a
                href="tel:+919845012345"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontWeight: 600,
                }}
              >
                <Phone size={12} color="#C85E34" />
                <span>+91 98450 12345</span>
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
              <a
                href="https://wa.me/919845012345"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#25D366',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontWeight: 600,
                }}
              >
                <MessageSquare size={12} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav
          className="container-wide"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '68px' : '76px',
            transition: 'height 0.25s ease',
          }}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            style={{ textDecoration: 'none' }}
          >
            <SamruddhiLogo variant="dark" size="md" showTagline={true} />
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav-items"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-pine-primary)' : 'var(--color-text-body)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-pine-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-text-body)';
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-terracotta)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Direct WhatsApp Quick Pill */}
            <a
              href="https://wa.me/919845012345"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm desktop-only"
              style={{
                display: 'none',
                borderRadius: 'var(--radius-pill)',
                padding: '0.45rem 0.95rem',
              }}
              title="Chat with Corporate RFP Desk on WhatsApp"
            >
              <MessageSquare size={14} />
              <span>WhatsApp</span>
            </a>

            {/* Request Proposal Primary Button */}
            <button
              type="button"
              onClick={() => openProposalModal('Corporate Catering')}
              className="btn btn-primary btn-sm desktop-only"
              style={{ display: 'none' }}
            >
              <span>Request Proposal</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.5rem',
                color: 'var(--color-text-main)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '84%',
              maxWidth: '360px',
              backgroundColor: '#FFFFFF',
              boxShadow: '-8px 0 32px rgba(15, 19, 24, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.75rem',
              zIndex: 996,
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '1rem',
              }}
            >
              <SamruddhiLogo variant="dark" size="sm" showTagline={false} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-main)',
                  cursor: 'pointer',
                  padding: '0.35rem',
                }}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  role="link"
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--color-text-main)',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid var(--color-border-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={14} color="var(--color-text-muted)" />
                </a>
              ))}
            </nav>

            {/* Mobile Quick Action Buttons */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openProposalModal('General RFP');
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Request a Proposal</span>
                <ArrowRight size={14} />
              </button>

              <a
                href="https://wa.me/919845012345"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919845012345"
                className="btn btn-secondary"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <Phone size={15} />
                <span>Call +91 98450 12345</span>
              </a>
            </div>

            {/* Social Presence inside Mobile Drawer */}
            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem', fontWeight: 600 }}>
                CONNECT ON SOCIAL CHANNELS
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a
                  href="https://www.linkedin.com/company/samruddhi-caterers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://www.instagram.com/samruddhigroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  ig
                </a>
                <a
                  href="https://wa.me/919845012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  wa
                </a>
                <a
                  href="https://www.youtube.com/@samruddhigroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  yt
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive navbar toggle breakpoints */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-top-bar {
            display: block !important;
          }
          .desktop-nav-items {
            display: flex !important;
          }
          .desktop-only {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-top-bar {
            display: none !important;
          }
          .desktop-nav-items {
            display: none !important;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};
