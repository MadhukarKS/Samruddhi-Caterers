import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { EnquiryForm } from '../modals/EnquiryForm';
import { copyToClipboard } from '../../utils/formatters';
import { MapPin, Phone, Mail, Clock, Building, Copy, Check, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

export const ContactSection = ({ onPreselectService: propOnPreselectService }) => {
  const { openProposalModal, showToast } = useApp();
  const [copiedKey, setCopiedKey] = useState(null);

  const _handlePreselect = propOnPreselectService || openProposalModal;

  const handleCopy = async (key, text, label) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedKey(key);
      showToast(`${label} copied to clipboard!`, 'success');
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  return (
    <section id="contact" style={{ width: '100%' }}>
      <div className="container-wide">
        {/* Compact Single-Row Title Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <span className="badge-pill">
                <MapPin size={11} color="var(--color-terracotta)" />
                <span>Corporate Desk & Enquiries</span>
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.45rem, 2.4vw, 1.9rem)',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Connect With Our Food Services Desk
            </h1>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.76rem',
              fontWeight: 600,
              color: 'var(--color-pine-primary)',
              backgroundColor: '#FFFFFF',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border)',
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-whatsapp)',
              }}
            />
            <span>RFP Response within 2 Business Hours</span>
          </div>
        </div>

        {/* Fixed 2-Column Workspace Grid */}
        <div className="contact-fixed-grid">
          {/* Left Column: HQ Card + Social Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', justifyContent: 'space-between' }}>
            {/* Headquarters Card */}
            <div
              className="card-showcase"
              style={{
                '--stagger': 0,
                backgroundColor: 'var(--color-pine-primary)',
                borderColor: 'var(--color-pine-medium)',
                color: '#FFFFFF',
                padding: '1.25rem 1.4rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <Building size={17} color="#C85E34" />
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#FFFFFF', margin: 0 }}>
                    Corporate Headquarters
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      'address',
                      'No. 79/2, Jigani Hobli, Anekal Taluk, Bengaluru, Karnataka – 560105',
                      'Address'
                    )
                  }
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: 'var(--radius-xs)',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.55rem',
                  }}
                  title="Copy Address"
                >
                  {copiedKey === 'address' ? <Check size={12} color="var(--color-whatsapp)" /> : <Copy size={12} />}
                  <span>{copiedKey === 'address' ? 'Copied' : 'Copy Address'}</span>
                </button>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.9rem' }}>
                <MapPin size={15} color="#C85E34" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <address style={{ fontStyle: 'normal', fontSize: '0.84rem', lineHeight: 1.45, color: '#D8E2DC' }}>
                    No. 79/2, Jigani Hobli, Anekal Taluk, Bengaluru, Karnataka – 560105
                  </address>
                  <a
                    href="https://maps.google.com/?q=Jigani+Industrial+Area+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.76rem',
                      color: '#FFFFFF',
                      marginTop: '0.35rem',
                      textDecoration: 'underline',
                      fontWeight: 600,
                    }}
                  >
                    <span>Open Google Maps</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Phone & Email Compact Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  paddingTop: '0.75rem',
                  marginBottom: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.68rem', color: '#B8C5BE', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.18rem' }}>
                    <Phone size={11} color="#C85E34" />
                    <span>RFP Telephone</span>
                  </div>
                  <a href="tel:+919845012345" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700, fontSize: '0.86rem' }}>
                    +91 98450 12345
                  </a>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.68rem', color: '#B8C5BE', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.18rem' }}>
                    <Mail size={11} color="#C85E34" />
                    <span>Official Email</span>
                  </div>
                  <a href="mailto:rfp@samruddhigroup.in" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600, fontSize: '0.84rem' }}>
                    rfp@samruddhigroup.in
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#D8E2DC' }}>
                <Clock size={14} color="#C85E34" style={{ flexShrink: 0 }} />
                <span>24/7 Kitchens • RFP Desk Mon–Sat, 9 AM – 7 PM</span>
              </div>
            </div>

            {/* Official Social Presence Card */}
            <div
              className="card-showcase"
              style={{
                '--stagger': 1,
                padding: '1.1rem 1.4rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', color: 'var(--color-text-main)', margin: 0 }}>
                  Official Social Channels
                </h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={12} color="var(--color-terracotta)" />
                  FSSAI #11221334000542
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
                <a
                  href="https://wa.me/919845012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.55rem 0.75rem',
                    backgroundColor: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.28)',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    color: '#128C7E',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/samruddhi-caterers"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.55rem 0.75rem',
                    backgroundColor: 'var(--color-surface-subtle)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    color: 'var(--color-text-main)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontWeight: 800 }}>in</span>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/samruddhigroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.55rem 0.75rem',
                    backgroundColor: 'var(--color-surface-subtle)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    color: 'var(--color-text-main)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontWeight: 800 }}>ig</span>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.youtube.com/@samruddhigroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.55rem 0.75rem',
                    backgroundColor: 'var(--color-surface-subtle)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    color: 'var(--color-text-main)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontWeight: 800 }}>yt</span>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Zero-Scroll Enquiry Form */}
          <div
            className="card-showcase contact-form-card"
            style={{
              '--stagger': 2,
              padding: '1.15rem 1.4rem',
            }}
          >
            <div style={{ marginBottom: '0.75rem', borderBottom: '1px solid var(--color-border-card)', paddingBottom: '0.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.18rem',
                    color: 'var(--color-text-main)',
                    margin: 0,
                  }}
                >
                  Request a Commercial Proposal
                </h2>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  Instant dossier generation for catering & event bids.
                </p>
              </div>
              <span className="badge-pill badge-accent" style={{ fontSize: '0.65rem', padding: '0.2rem 0.6rem' }}>
                Direct RFP
              </span>
            </div>

            <EnquiryForm initialService="Corporate Catering" compact={true} />
          </div>
        </div>
      </div>

      <style>{`
        .contact-fixed-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.88fr) minmax(420px, 1.32fr);
          gap: 1.25rem;
          align-items: stretch;
        }
        @media (max-width: 1023px) {
          .contact-fixed-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
