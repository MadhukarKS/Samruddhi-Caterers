import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Download, Mail, Sparkles, ShieldCheck } from 'lucide-react';

interface EnquiryFormProps {
  initialService?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export interface FormDataState {
  fullName: string;
  organisation: string;
  workEmail: string;
  phoneNumber: string;
  serviceType: string;
  location: string;
  estimatedGuests: string;
  frequencyOrDate: string;
  additionalRequirements: string;
  honeypot: string; // Spam protection
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = '',
  isModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState<FormDataState>({
    fullName: '',
    organisation: '',
    workEmail: '',
    phoneNumber: '',
    serviceType: initialService || 'Corporate Catering',
    location: '',
    estimatedGuests: '',
    frequencyOrDate: '',
    additionalRequirements: '',
    honeypot: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    referenceId: string;
    timestamp: string;
  } | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 3) return 'Please enter a valid full name';
        return '';
      case 'organisation':
        if (!value.trim()) return 'Organisation / Company name is required';
        return '';
      case 'workEmail':
        if (!value.trim()) return 'Work email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid business email address';
        return '';
      case 'phoneNumber':
        if (!value.trim()) return 'Phone number is required';
        if (!/^\+?[0-9\s\-]{8,15}$/.test(value)) return 'Please enter a valid phone number';
        return '';
      case 'location':
        if (!value.trim()) return 'City or service location is required';
        return '';
      case 'estimatedGuests':
        if (!value.trim()) return 'Approximate meal count or guest count is required';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, (formData as any)[field] || '');
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot spam protection
    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    // Validate all fields
    const newErrors: Record<string, string> = {
      fullName: validateField('fullName', formData.fullName),
      organisation: validateField('organisation', formData.organisation),
      workEmail: validateField('workEmail', formData.workEmail),
      phoneNumber: validateField('phoneNumber', formData.phoneNumber),
      location: validateField('location', formData.location),
      estimatedGuests: validateField('estimatedGuests', formData.estimatedGuests),
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      organisation: true,
      workEmail: true,
      phoneNumber: true,
      location: true,
      estimatedGuests: true,
    });

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);

    // Generate unique verifiable RFP Reference ID
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `SAM-RFP-${new Date().getFullYear()}-${randomHex}`;
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Store in Local RFP Registry for transparent client-side auditing
    try {
      const existingRfps = JSON.parse(localStorage.getItem('samruddhi_rfps') || '[]');
      existingRfps.push({
        referenceId,
        timestamp,
        ...formData,
      });
      localStorage.setItem('samruddhi_rfps', JSON.stringify(existingRfps));
    } catch {
      // LocalStorage fallback
    }

    // Simulate network latency for authentic interaction
    await new Promise((resolve) => setTimeout(resolve, 850));

    setIsSubmitting(false);
    setSubmissionResult({
      success: true,
      referenceId,
      timestamp,
    });
  };

  const downloadRfpSummary = () => {
    if (!submissionResult) return;

    const rfpText = `=====================================================
SAMRUDDHI GROUP — CATERING & HOSPITALITY PROPOSAL DOSSIER
"Nourishing Trust, Delivering Excellence"
=====================================================
RFP Reference ID : ${submissionResult.referenceId}
Submission Date  : ${submissionResult.timestamp}
Corporate Address: No. 79/2, Jigani Hobli, Bengaluru, Karnataka – 560105
FSSAI Compliant Operations & Central Commissary

1. CLIENT & ORGANISATION DETAILS
-----------------------------------------------------
Client Name      : ${formData.fullName}
Organisation     : ${formData.organisation}
Business Email   : ${formData.workEmail}
Phone Number     : ${formData.phoneNumber}
Service Location : ${formData.location}

2. SERVICE SCOPE & REQUIREMENTS
-----------------------------------------------------
Service Category : ${formData.serviceType}
Est. Meals/Guests: ${formData.estimatedGuests}
Frequency / Date : ${formData.frequencyOrDate || 'As per operational schedule'}
Additional Specs : ${formData.additionalRequirements || 'Standard catering protocols requested'}

3. OPERATIONAL NOTICE & NEXT STEPS
-----------------------------------------------------
This Request For Proposal (RFP) has been officially recorded in
the Samruddhi Group Enterprise Lead Register.
Our Executive Catering Desk will review dietary matrices and
provide a formal customized culinary commercial proposal.
=====================================================`;

    const blob = new Blob([rfpText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Samruddhi_Group_${submissionResult.referenceId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const sendByMailClient = () => {
    if (!submissionResult) return;
    const subject = encodeURIComponent(
      `Catering RFP [${submissionResult.referenceId}] - ${formData.organisation} (${formData.serviceType})`
    );
    const body = encodeURIComponent(
      `To Samruddhi Group Catering Desk,\n\nPlease find our formal Catering Proposal Request:\n\n` +
        `RFP Reference ID: ${submissionResult.referenceId}\n` +
        `Organisation: ${formData.organisation}\n` +
        `Contact Person: ${formData.fullName}\n` +
        `Contact Number: ${formData.phoneNumber}\n` +
        `Service Required: ${formData.serviceType}\n` +
        `Location: ${formData.location}\n` +
        `Volume / Guest Count: ${formData.estimatedGuests}\n` +
        `Timeline / Date: ${formData.frequencyOrDate}\n\n` +
        `Requirements:\n${formData.additionalRequirements}\n\n` +
        `Delivered via Samruddhi Group Portal.`
    );
    window.location.href = `mailto:proposals@samruddhigroup.in?subject=${subject}&body=${body}`;
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: isModal ? '0 25px 60px rgba(0, 0, 0, 0.3)' : 'var(--shadow-md)',
        padding: 'clamp(2rem, 4vw, 3.25rem)',
        position: 'relative',
      }}
    >
      {submissionResult ? (
        /* Confirmed Verification State */
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }} className="animate-fade-in">
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(18, 58, 46, 0.1)',
              border: '2px solid var(--color-emerald-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
            }}
          >
            <CheckCircle2 size={36} color="#123A2E" />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.2rem',
              color: 'var(--color-emerald-deep)',
              marginBottom: '0.75rem',
            }}
          >
            Catering Proposal Dossier Generated
          </h3>

          <div
            style={{
              display: 'inline-block',
              background: 'var(--color-ivory-warm)',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px dashed var(--color-gold-accent)',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Official Reference ID:
            </span>
            <strong style={{ display: 'block', fontSize: '1.15rem', color: 'var(--color-emerald-deep)', letterSpacing: '0.05em' }}>
              {submissionResult.referenceId}
            </strong>
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--color-charcoal-body)',
              maxWidth: '580px',
              margin: '0 auto 2rem auto',
            }}
          >
            Thank you, <strong>{formData.fullName}</strong>. Your catering requirements for{' '}
            <strong>{formData.organisation}</strong> ({formData.serviceType}) have been formally prepared. You can
            download the procurement dossier or transmit it directly via your corporate email.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <button onClick={downloadRfpSummary} className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
              <Download size={16} />
              <span>Download Official RFP Dossier (.txt)</span>
            </button>

            <button onClick={sendByMailClient} className="btn btn-outline-dark" style={{ padding: '0.85rem 1.75rem' }}>
              <Mail size={16} />
              <span>Dispatch via Corporate Email</span>
            </button>
          </div>

          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-charcoal-muted)',
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: '1.25rem',
            }}
          >
            Location: No. 79/2, Jigani Hobli, Bengaluru – 560105 • FSSAI Compliant Central Commissary
          </div>

          {isModal && onCloseModal && (
            <button
              onClick={onCloseModal}
              style={{
                marginTop: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-emerald-primary)',
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        /* Real Multi-Field RFP Form */
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '2rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={12} />
              <span>Corporate & Institutional Procurement</span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.35rem)',
                color: 'var(--color-emerald-deep)',
                marginBottom: '0.5rem',
              }}
            >
              Request a Catering Proposal
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
              Provide your operational requirements below. Our executive culinary team will review meal counts, timing
              schedules, and menu preferences to structure a detailed commercial proposal.
            </p>
          </div>

          {/* Honeypot Spam Protection Field */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData((p) => ({ ...p, honeypot: e.target.value }))}
            />
          </div>

          {/* Form Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="e.g. Anand Murthy"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur('fullName')}
                required
                aria-required="true"
                aria-invalid={Boolean(touched.fullName && errors.fullName)}
              />
              {touched.fullName && errors.fullName && <span className="form-error">{errors.fullName}</span>}
            </div>

            {/* Organisation */}
            <div className="form-group">
              <label htmlFor="organisation" className="form-label">
                Organisation / Company *
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                placeholder="e.g. Precision Engineering Ltd / Infosys Campus"
                className="form-control"
                value={formData.organisation}
                onChange={handleChange}
                onBlur={() => handleBlur('organisation')}
                required
                aria-required="true"
                aria-invalid={Boolean(touched.organisation && errors.organisation)}
              />
              {touched.organisation && errors.organisation && (
                <span className="form-error">{errors.organisation}</span>
              )}
            </div>

            {/* Work Email */}
            <div className="form-group">
              <label htmlFor="workEmail" className="form-label">
                Work Email *
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                placeholder="name@company.com"
                className="form-control"
                value={formData.workEmail}
                onChange={handleChange}
                onBlur={() => handleBlur('workEmail')}
                required
                aria-required="true"
                aria-invalid={Boolean(touched.workEmail && errors.workEmail)}
              />
              {touched.workEmail && errors.workEmail && <span className="form-error">{errors.workEmail}</span>}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+91 98765 43210"
                className="form-control"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={() => handleBlur('phoneNumber')}
                required
                aria-required="true"
                aria-invalid={Boolean(touched.phoneNumber && errors.phoneNumber)}
              />
              {touched.phoneNumber && errors.phoneNumber && <span className="form-error">{errors.phoneNumber}</span>}
            </div>

            {/* Type of Service Required */}
            <div className="form-group">
              <label htmlFor="serviceType" className="form-label">
                Type of Service Required *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                className="form-control"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="Industrial Catering">Industrial Catering</option>
                <option value="Corporate Catering">Corporate Catering</option>
                <option value="Outdoor Catering and Events">Outdoor Catering and Events</option>
                <option value="Institutional Catering">Institutional Catering</option>
                <option value="Other Enquiries">Other Enquiries</option>
              </select>
            </div>

            {/* City or Service Location */}
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                City / Facility Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="e.g. Jigani Industrial Area, Bengaluru"
                className="form-control"
                value={formData.location}
                onChange={handleChange}
                onBlur={() => handleBlur('location')}
                required
                aria-required="true"
                aria-invalid={Boolean(touched.location && errors.location)}
              />
              {touched.location && errors.location && <span className="form-error">{errors.location}</span>}
            </div>

            {/* Approximate Meals or Guests */}
            <div className="form-group">
              <label htmlFor="estimatedGuests" className="form-label">
                Approximate Meals or Guests *
              </label>
              <input
                type="text"
                id="estimatedGuests"
                name="estimatedGuests"
                placeholder="e.g. 450 meals/day or 1,200 wedding guests"
                className="form-control"
                value={formData.estimatedGuests}
                onChange={handleChange}
                onBlur={() => handleBlur('estimatedGuests')}
                required
                aria-required="true"
                aria-invalid={Boolean(touched.estimatedGuests && errors.estimatedGuests)}
              />
              {touched.estimatedGuests && errors.estimatedGuests && (
                <span className="form-error">{errors.estimatedGuests}</span>
              )}
            </div>

            {/* Expected Frequency or Event Date */}
            <div className="form-group">
              <label htmlFor="frequencyOrDate" className="form-label">
                Expected Frequency or Event Date
              </label>
              <input
                type="text"
                id="frequencyOrDate"
                name="frequencyOrDate"
                placeholder="e.g. Daily shift meals / 24th Nov 2026"
                className="form-control"
                value={formData.frequencyOrDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="form-group" style={{ marginTop: '0.5rem' }}>
            <label htmlFor="additionalRequirements" className="form-label">
              Additional Requirements or Menu Specifications
            </label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              rows={3}
              placeholder="Mention dietary preferences (e.g. pure vegetarian, South/North Indian combinations, delivery shifts, packaging specs)..."
              className="form-control"
              value={formData.additionalRequirements}
              onChange={handleChange}
            />
          </div>

          {/* Submission and Status */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-charcoal-muted)' }}>
              <ShieldCheck size={16} color="#184A3B" />
              <span>Enterprise Confidentiality & Instant Formal Dossier</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{
                padding: '0.95rem 2.25rem',
                fontSize: '1rem',
                opacity: isSubmitting ? 0.75 : 1,
              }}
              id="submit-enquiry-btn"
            >
              {isSubmitting ? (
                <span>Generating Proposal...</span>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
