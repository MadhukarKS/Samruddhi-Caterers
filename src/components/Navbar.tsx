import React, { useState, useEffect } from 'react';
import { SamruddhiLogo } from './SamruddhiLogo';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onRequestProposal: (serviceType?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestProposal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Brands', href: '#brands' },
    { name: 'Quality & Hygiene', href: '#hygiene' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          background: isScrolled
            ? 'rgba(10, 31, 24, 0.96)'
            : 'linear-gradient(180deg, rgba(8, 24, 18, 0.88) 0%, rgba(8, 24, 18, 0.4) 70%, transparent 100%)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.25)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(197, 168, 128, 0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Top announcement / accreditation strip */}
        <div
          style={{
            background: 'rgba(5, 18, 13, 0.95)',
            borderBottom: '1px solid rgba(197, 168, 128, 0.15)',
            padding: '0.4rem 0',
            fontSize: '0.78rem',
            color: 'var(--color-gold-light)',
            display: 'none',
          }}
          className="desktop-top-bar"
        >
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={14} color="#C5A880" />
                FSSAI Compliant Operations & Central Commissary
              </span>
              <span style={{ color: 'rgba(197, 168, 128, 0.4)' }}>|</span>
              <span>Jigani Hobli, Bengaluru – 560105</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ color: '#D4AF37', fontWeight: 600 }}>20+ Years of Hospitality Excellence</span>
            </div>
          </div>
        </div>

        <nav
          className="container-wide"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '74px' : '88px',
            transition: 'height 0.3s ease',
          }}
          aria-label="Main Navigation"
        >
          {/* Logo link */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            style={{ textDecoration: 'none', outline: 'none' }}
            aria-label="Samruddhi Group Homepage"
          >
            <SamruddhiLogo variant="dark" size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--color-gold-rich)' : '#E9EFEB',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.5rem 0',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#DFC789';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive ? 'var(--color-gold-rich)' : '#E9EFEB';
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
                        background: 'var(--color-gold-accent)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => onRequestProposal()}
              className="btn btn-primary"
              style={{
                display: 'none',
                padding: '0.72rem 1.45rem',
                fontSize: '0.86rem',
              }}
              className-override="desktop-cta"
              id="header-proposal-cta"
            >
              <span>Request a Catering Proposal</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(197, 168, 128, 0.4)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.55rem',
                color: '#FAF7F2',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="mobile-toggle"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 980,
          backgroundColor: 'rgba(6, 18, 14, 0.98)',
          backdropFilter: 'blur(20px)',
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '6.5rem 2rem 2.5rem 2rem',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ borderBottom: '1px solid rgba(197, 168, 128, 0.2)', paddingBottom: '1rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-accent)' }}>
              Navigation Menu
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                color: '#FAF7F2',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.25rem 0',
              }}
            >
              <span>{link.name}</span>
              <ArrowRight size={18} color="#C5A880" />
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestProposal();
            }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.95rem' }}
          >
            <span>Request a Catering Proposal</span>
            <ArrowRight size={16} />
          </button>
          <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(231, 213, 186, 0.7)' }}>
            No. 79/2, Jigani Hobli, Bengaluru – 560105
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .desktop-top-bar { display: block !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
