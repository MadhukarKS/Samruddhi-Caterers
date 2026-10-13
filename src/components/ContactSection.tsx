import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Building } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

interface ContactSectionProps {
  onPreselectService: (service: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onPreselectService }) => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-gold" style={{ marginBottom: '1rem' }}>
            <MapPin size={13} />
            <span>Bengaluru Central Headquarters</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: 'var(--color-emerald-deep)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Connect With Our Food Services Desk
          </h2>

          <div className="gold-line gold-line-center" />

          <p style={{ fontSize: '1.08rem', color: 'var(--color-charcoal-body)', lineHeight: 1.75 }}>
            Whether commissioning daily shift catering for 1,500 factory personnel, outfitting a corporate cafeteria, or
            planning an auspicious wedding feast, our culinary operations team is ready to structure your proposal.
          </p>
        </div>

        {/* Contact Layout: Left Column Details & Verified Placeholders, Right Column Enquiry Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Official Headquarters & Service Desks */}
          <div>
            {/* Headquarters Card */}
            <div
              style={{
                background: '#0D2C22',
                color: '#FAF7F2',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                border: '1px solid rgba(197, 168, 128, 0.28)',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Building size={22} color="#C5A880" />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    color: '#FFFFFF',
                    margin: 0,
                  }}
                >
                  Samruddhi Group Corporate Address
                </h3>
              </div>

              {/* Verified Physical Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.5rem' }}>
                <MapPin size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-gold-light)', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Central Facility & Registered Office:
                  </strong>
                  <p style={{ color: '#FFFFFF', fontSize: '1.05rem', lineHeight: 1.6, marginTop: '0.2rem' }}>
                    No. 79/2, Jigani Hobli, Bengaluru, Karnataka – 560105
                  </p>
                  <span style={{ fontSize: '0.82rem', color: '#B7C9C0' }}>
                    Jigani Industrial Zone, Anekal Taluk, Bengaluru Urban
                  </span>
                </div>
              </div>

              <div className="gold-line" style={{ width: '100%', height: '1px', opacity: 0.25, margin: '1.5rem 0' }} />

              {/* Configurable Placeholders (Clearly Marked for Client Delivery) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Phone size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#B7C9C0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Telephone / Direct Line
                    </span>
                    <div style={{ color: '#FFFFFF', fontSize: '0.94rem', fontWeight: 500 }}>
                      [Configurable: Pending Client Verification]
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Mail size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#B7C9C0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Catering RFP Inquiries
                    </span>
                    <div style={{ color: '#FFFFFF', fontSize: '0.94rem', fontWeight: 500 }}>
                      [Configurable: inquiries@samruddhigroup.in / Pending Verification]
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Clock size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#B7C9C0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Dispatch Operations
                    </span>
                    <div style={{ color: '#FFFFFF', fontSize: '0.94rem', fontWeight: 500 }}>
                      Shift Operations: 24/7 Production • Office: Mon – Sat (8:00 AM – 8:00 PM)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service-Specific Rapid Enquiry Links */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-emerald-deep)',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}
              >
                Direct Service Inquiries:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  { title: 'Industrial Catering', desc: 'Shift canteens & mass workforce food supply' },
                  { title: 'Corporate Catering', desc: 'IT park cafeterias & healthy workplace dining' },
                  { title: 'Outdoor Catering and Events', desc: 'Luxury weddings, receptions & gala banquets' },
                  { title: 'Institutional Catering', desc: 'University, school & healthcare campuses' },
                ].map((s) => (
                  <button
                    key={s.title}
                    onClick={() => onPreselectService(s.title)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      background: 'var(--color-ivory-cream)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-gold-accent)';
                      e.currentTarget.style.background = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                      e.currentTarget.style.background = 'var(--color-ivory-cream)';
                    }}
                  >
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--color-emerald-deep)' }}>
                        {s.title}
                      </strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)' }}>{s.desc}</span>
                    </div>
                    <ArrowRight size={14} color="#184A3B" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Full Enterprise Enquiry Form */}
          <div>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};
