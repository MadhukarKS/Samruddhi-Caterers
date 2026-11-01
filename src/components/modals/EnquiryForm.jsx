import React, { useState } from 'react';
import { Send, CheckCircle2, Download, Mail, Sparkles, ShieldCheck, Copy, Check } from 'lucide-react';
import { validateField, validateForm } from '../../utils/validation';
import {
  generateReferenceId,
  getIndianTimestamp,
  createDossierText,
  downloadDossierFile,
  buildMailtoUrl,
} from '../../utils/dossierGenerator';
import { copyToClipboard } from '../../utils/formatters';
import { useApp } from '../../hooks/useApp';

export const EnquiryForm = ({
  initialService = '',
  isModal = false,
  onCloseModal,
}) => {
  const { showToast, saveRfp } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    workEmail: '',
    phoneNumber: '',
    serviceType: initialService || 'Corporate Catering',
    location: '',
    estimatedGuests: '',
    frequencyOrDate: '',
    additionalRequirements: '',
    honeypot: '', // Spam protection
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field] || '');
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot spam protection
    if (formData.honeypot) {
      console.warn('Automated bot submission detected and blocked.');
      return;
    }

    const { errors: newErrors, isValid } = validateForm(formData);

    setErrors(newErrors);
    setTouched({
      fullName: true,
      organisation: true,
      workEmail: true,
      phoneNumber: true,
      location: true,
      estimatedGuests: true,
    });

    if (!isValid) {
      showToast('Please verify the highlighted fields in the proposal form.', 'warning');
      return;
    }

    setIsSubmitting(true);

    const referenceId = generateReferenceId();
    const timestamp = getIndianTimestamp();

    const record = {
      referenceId,
      timestamp,
      ...formData,
    };

    saveRfp(record);

    // Simulated authentic processing latency
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setSubmissionResult({
      success: true,
      referenceId,
      timestamp,
    });

    showToast(`Proposal dossier generated! Reference: ${referenceId}`, 'success', 5000);
  };

  const downloadRfpSummary = () => {
    if (!submissionResult) return;
    const text = createDossierText({
      referenceId: submissionResult.referenceId,
      timestamp: submissionResult.timestamp,
      formData,
    });
    downloadDossierFile(submissionResult.referenceId, text);
    showToast('Procurement dossier file downloaded.', 'info');
  };

  const sendByMailClient = () => {
    if (!submissionResult) return;
    const url = buildMailtoUrl({
      referenceId: submissionResult.referenceId,
      formData,
    });
    window.location.href = url;
    showToast('Opening default email application...', 'info');
  };

  const handleCopyReference = async () => {
    if (!submissionResult) return;
    const ok = await copyToClipboard(submissionResult.referenceId);
    if (ok) {
      setCopied(true);
      showToast('Reference ID copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        boxShadow: isModal ? '0 20px 50px rgba(15, 19, 24, 0.25)' : 'none',
        padding: isModal ? 'clamp(1.75rem, 4vw, 2.75rem)' : '0',
        position: 'relative',
      }}
    >
      {submissionResult ? (
        /* Confirmed Verification State */
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }} className="animate-fade-in">
          <div
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-terracotta-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
            }}
          >
            <CheckCircle2 size={32} color="var(--color-terracotta)" />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.65rem, 3vw, 2.1rem)',
              color: 'var(--color-text-main)',
              marginBottom: '0.75rem',
            }}
          >
            Catering Proposal Dossier Generated
          </h3>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'var(--color-surface-subtle)',
              padding: '0.55rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  fontWeight: 700,
                }}
              >
                Official Reference ID:
              </span>
              <strong
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--color-pine-primary)',
                  letterSpacing: '0.04em',
                }}
              >
                {submissionResult.referenceId}
              </strong>
            </div>

            <button
              onClick={handleCopyReference}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xs)',
                padding: '0.35rem 0.6rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.74rem',
                color: 'var(--color-text-main)',
                fontWeight: 600,
              }}
              title="Copy Reference ID"
            >
              {copied ? <Check size={13} color="var(--color-whatsapp)" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <p
            style={{
              fontSize: '0.96rem',
              lineHeight: 1.68,
              color: 'var(--color-text-body)',
              maxWidth: '560px',
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
              gap: '0.75rem',
              marginBottom: '2rem',
            }}
          >
            <button
              onClick={downloadRfpSummary}
              className="btn btn-primary"
            >
              <Download size={16} />
              <span>Download Official RFP Dossier (.txt)</span>
            </button>

            <button
              onClick={sendByMailClient}
              className="btn btn-secondary"
            >
              <Mail size={16} />
              <span>Dispatch via Corporate Email</span>
            </button>
          </div>

          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '1.25rem',
            }}
          >
            Location: No. 79/2, Jigani Hobli, Bengaluru – 560105 • FSSAI Compliant Central Commissary
          </div>

          {isModal && onCloseModal && (
            <button
              onClick={onCloseModal}
              style={{
                marginTop: '1.25rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-pine-primary)',
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '0.88rem',
              }}
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        /* Real Multi-Field RFP Form */
        <form onSubmit={handleSubmit} noValidate>
          {isModal && (
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'inline-flex', marginBottom: '0.65rem' }}>
                <span className="badge-pill">
                  <Sparkles size={12} color="var(--color-terracotta)" />
                  <span>Corporate & Institutional Procurement</span>
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)',
                  color: 'var(--color-text-main)',
                  marginBottom: '0.35rem',
                }}
              >
                Request a Catering Proposal
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Provide your operational requirements below. Our executive culinary team will review meal counts, timing
                schedules, and menu preferences to structure a detailed commercial proposal.
              </p>
            </div>
          )}

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.15rem',
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
              {touched.fullName && errors.fullName && (
                <span className="form-error">{errors.fullName}</span>
              )}
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
                placeholder="e.g. Precision Engineering Ltd / Campus"
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
              {touched.workEmail && errors.workEmail && (
                <span className="form-error">{errors.workEmail}</span>
              )}
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
              {touched.phoneNumber && errors.phoneNumber && (
                <span className="form-error">{errors.phoneNumber}</span>
              )}
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
              {touched.location && errors.location && (
                <span className="form-error">{errors.location}</span>
              )}
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
                placeholder="e.g. 450 meals/day or 1,200 guests"
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
          <div className="form-group" style={{ marginTop: '0.25rem' }}>
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
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.78rem',
                color: 'var(--color-text-muted)',
              }}
            >
              <ShieldCheck size={15} color="var(--color-pine-primary)" />
              <span>Enterprise Confidentiality & Instant Formal Dossier</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{
                opacity: isSubmitting ? 0.75 : 1,
              }}
              id="submit-enquiry-btn"
            >
              {isSubmitting ? (
                <span>Generating Proposal...</span>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
