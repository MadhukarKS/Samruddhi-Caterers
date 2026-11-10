import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';
import { SamruddhiLogo } from '../common/SamruddhiLogo';
import { Menu, X, ArrowRight, ShieldCheck, Phone, MessageSquare } from 'lucide-react';

export const Navbar = () => {
  const { openProposalModal } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Our Services', to: '/services' },
    { name: 'Our Brands', to: '/brands' },
    { name: 'Quality & Hygiene', to: '/quality' },
    { name: 'Contact', to: '/contact' },
  ];

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
          backgroundColor: isScrolled ? 'rgba(250, 250, 248, 0.96)' : '#FAFAF8',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: isScrolled ? '0 2px 12px rgba(15, 19, 24, 0.05)' : 'none',
        }}
      >
        {/* Top Information Strip (Desktop) */}
        <div
          style={{
            backgroundColor: '#152B22',
            color: '#D8E2DC',
            fontSize: '0.74rem',
            padding: '0.26rem 0',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={12} color="#C85E34" />
                <span>FSSAI Lic. 11221334000542 • ISO 22000:2018 Central Kitchen</span>
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
              <span>Jigani Hobli, Bengaluru</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href="tel:+919845012345"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontWeight: 600,
                }}
              >
                <Phone size={11} color="#C85E34" />
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
                  gap: '0.3rem',
                  fontWeight: 600,
                }}
              >
                <MessageSquare size={11} />
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
            height: isScrolled ? '56px' : '60px',
            transition: 'height 0.25s ease',
          }}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', flexShrink: 0 }}
          >
            <SamruddhiLogo variant="dark" size="sm" showTagline={true} />
          </Link>

          {/* Desktop Route Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(1rem, 1.55vw, 1.65rem)',
            }}
            className="desktop-nav-items"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-route-link${isActive ? ' active' : ''}`}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-pine-primary)' : 'var(--color-text-body)',
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <a
              href="https://wa.me/919845012345"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm desktop-only"
              style={{
                display: 'none',
                borderRadius: 'var(--radius-pill)',
                padding: '0.4rem 0.85rem',
              }}
              title="Chat with Corporate RFP Desk on WhatsApp"
            >
              <MessageSquare size={13} />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => openProposalModal('Corporate Catering')}
              className="btn btn-primary btn-sm desktop-only"
              style={{ display: 'none', padding: '0.45rem 0.95rem' }}
            >
              <span>Request Proposal</span>
              <ArrowRight size={13} className="hover-arrow" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.45rem',
                color: 'var(--color-text-main)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
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
              maxWidth: '340px',
              backgroundColor: '#FFFFFF',
              boxShadow: '-8px 0 32px rgba(15, 19, 24, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              zIndex: 996,
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '0.85rem',
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
                  padding: '0.3rem',
                }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--color-terracotta)' : 'var(--color-text-main)',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid var(--color-border-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  })}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={14} color="var(--color-text-muted)" />
                </NavLink>
              ))}
            </nav>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
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
                <MessageSquare size={15} />
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

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', marginBottom: '0.6rem', fontWeight: 600 }}>
                SOCIAL CHANNELS
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href="https://www.linkedin.com/company/samruddhi-caterers" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn">in</a>
                <a href="https://www.instagram.com/samruddhigroup" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Instagram">ig</a>
                <a href="https://wa.me/919845012345" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="WhatsApp">wa</a>
                <a href="https://www.youtube.com/@samruddhigroup" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="YouTube">yt</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-top-bar { display: block !important; }
          .desktop-nav-items { display: flex !important; }
          .desktop-only { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (min-width: 992px) and (max-width: 1140px) {
          .desktop-nav-items { gap: 0.9rem !important; }
          .nav-route-link { font-size: 0.82rem; }
        }
        @media (max-width: 991px) {
          .desktop-top-bar { display: none !important; }
          .desktop-nav-items { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
};
