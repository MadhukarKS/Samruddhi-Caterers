import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { SectionHeading } from '../common/SectionHeading';
import { EnquiryForm } from '../modals/EnquiryForm';
import { copyToClipboard } from '../../utils/formatters';
import { MapPin, Phone, Mail, Clock, Building, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';

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
    <section id="contact" className="section" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-wide">
        {/* Section Header */}
        <SectionHeading
          badgeIcon={MapPin}
          badgeText="Corporate Headquarters & Desks"
          title="Connect With Our Food Services Desk"
          description="Whether commissioning daily shift catering for 1,500 factory personnel, outfitting a corporate cafeteria, or planning an auspicious wedding feast, our culinary operations team is ready to structure your proposal."
        />

        {/* 2-Column Structured Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Official Headquarters, Direct Desks & Social Presence */}
          <div>
            {/* Headquarters Card */}
            <div
              style={{
                backgroundColor: 'var(--color-pine-primary)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <Building size={20} color="#C85E34" />
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    color: '#FFFFFF',
                    margin: 0,
                  }}
                >
                  Samruddhi Group Corporate Address
                </h3>
              </div>

              {/* Physical Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <MapPin size={18} color="#C85E34" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#B8C5BE', fontWeight: 700 }}>
                      Central Facility & Registered Office:
                    </span>
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
                        background: 'none',
                        border: 'none',
                        color: '#C85E34',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        padding: '0.2rem',
                      }}
                      title="Copy Address"
                    >
                      {copiedKey === 'address' ? <Check size={14} color="var(--color-whatsapp)" /> : <Copy size={14} />}
                      <span>{copiedKey === 'address' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <address style={{ fontStyle: 'normal', fontSize: '0.94rem', lineHeight: 1.6, color: '#D8E2DC' }}>
                    No. 79/2, Jigani Hobli, Anekal Taluk,<br />
                    Bengaluru, Karnataka – 560105, India
                  </address>

                  <a
                    href="https://maps.google.com/?q=Jigani+Industrial+Area+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.82rem',
                      color: '#FFFFFF',
                      marginTop: '0.65rem',
                      textDecoration: 'underline',
                      fontWeight: 600,
                    }}
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Phone size={18} color="#C85E34" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#B8C5BE', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Telephone & Instant RFP Desk:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                    <a
                      href="tel:+919845012345"
                      style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700, fontSize: '0.98rem' }}
                    >
                      +91 98450 12345
                    </a>
                    <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
                    <a
                      href="tel:+918027830000"
                      style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                    >
                      080-2783 0000
                    </a>
                  </div>
                </div>
              </div>

              {/* Corporate Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Mail size={18} color="#C85E34" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#B8C5BE', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Corporate Inquiries:
                  </div>
                  <a
                    href="mailto:rfp@samruddhigroup.in"
                    style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    rfp@samruddhigroup.in
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={18} color="#C85E34" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#B8C5BE', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Operating Timing:
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#D8E2DC' }}>
                    Industrial Commissary: <strong>24/7 Shift Rotations</strong><br />
                    Corporate RFP Desk: Mon – Sat, 09:00 AM – 07:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Social Presence Card (Crucial for B2B & Public Engagement) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: 'var(--color-text-main)',
                  marginBottom: '0.5rem',
                }}
              >
                Official Social & Communication Channels
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                Follow our commercial kitchen tours, culinary showcase, and event catering highlights across our verified
                network:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                <a
                  href="https://wa.me/919845012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.25)',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    color: '#128C7E',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                  }}
                >
                  <MessageSquare size={16} />
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
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--color-surface-subtle)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    color: 'var(--color-text-main)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontWeight: 800 }}>in</span>
                  <span>LinkedIn B2B</span>
                </a>

                <a
                  href="https://www.instagram.com/samruddhigroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--color-surface-subtle)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    color: 'var(--color-text-main)',
                    fontSize: '0.86rem',
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
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--color-surface-subtle)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    color: 'var(--color-text-main)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontWeight: 800 }}>yt</span>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Corporate RFP Enquiry Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border-card)', paddingBottom: '1rem' }}>
              <div style={{ display: 'inline-flex', marginBottom: '0.5rem' }}>
                <span className="badge-pill">
                  <span>Direct RFP Submission Desk</span>
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  color: 'var(--color-text-main)',
                  margin: 0,
                }}
              >
                Request a Formal Commercial Proposal
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                Fill in your institutional headcount and meal requirements. Our team will generate an official proposal
                dossier within 2 business hours.
              </p>
            </div>

            <EnquiryForm initialService="Corporate Catering" />
          </div>
        </div>
      </div>
    </section>
  );
};
