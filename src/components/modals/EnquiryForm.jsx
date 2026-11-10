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
  compact = false,
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
    honeypot: '',
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

    if (formData.honeypot) {
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
      className={compact ? 'form-compact' : ''}
      style={{
        backgroundColor: isModal ? 'var(--color-surface)' : 'transparent',
        borderRadius: 'var(--radius-md)',
        border: isModal ? '1px solid var(--color-border)' : 'none',
        boxShadow: isModal ? '0 24px 60px rgba(0, 0, 0, 0.55)' : 'none',
        padding: isModal ? 'clamp(1.5rem, 3.5vw, 2.25rem)' : '0',
        position: 'relative',
      }}
    >
      {submissionResult ? (
        <div style={{ textAlign: 'center', padding: compact ? '0.75rem 0' : '1.25rem 0' }} className="animate-fade-in">
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-terracotta-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.85rem auto',
            }}
          >
            <CheckCircle2 size={26} color="var(--color-terracotta)" />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: compact ? '1.35rem' : 'clamp(1.5rem, 2.5vw, 1.9rem)',
              color: 'var(--color-text-main)',
              marginBottom: '0.5rem',
            }}
          >
            Catering Proposal Dossier Generated
          </h3>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: 'var(--color-surface-subtle)',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
              marginBottom: '0.9rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.7rem',
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
                  fontSize: '1.05rem',
                  color: '#E09132',
                  letterSpacing: '0.04em',
                }}
              >
                {submissionResult.referenceId}
              </strong>
            </div>

            <button
              onClick={handleCopyReference}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xs)',
                padding: '0.3rem 0.55rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.72rem',
                color: 'var(--color-text-main)',
                fontWeight: 600,
              }}
              title="Copy Reference ID"
            >
              {copied ? <Check size={12} color="#4ADE80" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <p
            style={{
              fontSize: '0.88rem',
              lineHeight: 1.55,
              color: 'var(--color-text-body)',
              maxWidth: '520px',
              margin: '0 auto 1.25rem auto',
            }}
          >
            Thank you, <strong>{formData.fullName}</strong>. Your catering requirements for{' '}
            <strong>{formData.organisation}</strong> ({formData.serviceType}) are ready. Download or email your dossier below.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              marginBottom: '1rem',
            }}
          >
            <button onClick={downloadRfpSummary} className="btn btn-primary btn-sm">
              <Download size={14} />
              <span>Download Official RFP Dossier (.txt)</span>
            </button>

            <button onClick={sendByMailClient} className="btn btn-secondary btn-sm">
              <Mail size={14} />
              <span>Dispatch via Corporate Email</span>
            </button>
          </div>

          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '0.85rem',
            }}
          >
            Jigani Hobli, Bengaluru – 560105 • FSSAI Central Commissary
          </div>

          {isModal && onCloseModal && (
            <button
              onClick={onCloseModal}
              style={{
                marginTop: '0.85rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-pine-primary)',
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '0.84rem',
              }}
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {isModal && (
            <div style={{ marginBottom: '1.15rem' }}>
              <div style={{ display: 'inline-flex', marginBottom: '0.45rem' }}>
                <span className="badge-pill">
                  <Sparkles size={12} color="var(--color-terracotta)" />
                  <span>Corporate RFP Desk</span>
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.45rem',
                  color: 'var(--color-text-main)',
                  marginBottom: '0.2rem',
                }}
              >
                Request a Catering Proposal
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                Share meal counts and location to generate an official proposal dossier.
              </p>
            </div>
          )}

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

          <div className="enquiry-fields-grid">
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

            <div className="form-group">
              <label htmlFor="organisation" className="form-label">
                Organisation / Company *
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                placeholder="e.g. Precision Engineering Ltd"
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

            <div className="form-group">
              <label htmlFor="location" className="form-label">
                City / Facility Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="e.g. Jigani, Bengaluru"
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

            <div className="form-group">
              <label htmlFor="estimatedGuests" className="form-label">
                Approximate Meals or Guests *
              </label>
              <input
                type="text"
                id="estimatedGuests"
                name="estimatedGuests"
                placeholder="e.g. 450 meals/day"
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

            <div className="form-group">
              <label htmlFor="frequencyOrDate" className="form-label">
                Expected Frequency or Event Date
              </label>
              <input
                type="text"
                id="frequencyOrDate"
                name="frequencyOrDate"
                placeholder="e.g. Daily shifts / 24 Nov 2026"
                className="form-control"
                value={formData.frequencyOrDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: compact ? '0.5rem' : '0.85rem' }}>
            <label htmlFor="additionalRequirements" className="form-label">
              Additional Requirements or Menu Specifications
            </label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              rows={compact ? 2 : 3}
              placeholder="Dietary preferences, delivery shifts, or service notes..."
              className="form-control"
              value={formData.additionalRequirements}
              onChange={handleChange}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              marginTop: compact ? '0.6rem' : '1.1rem',
              paddingTop: compact ? '0.6rem' : '1rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.74rem',
                color: 'var(--color-text-muted)',
              }}
            >
              <ShieldCheck size={14} color="var(--color-pine-primary)" />
              <span>Instant Formal Proposal Dossier</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-sm"
              style={{ opacity: isSubmitting ? 0.75 : 1, padding: '0.6rem 1.25rem' }}
              id="submit-enquiry-btn"
            >
              {isSubmitting ? (
                <span>Generating Proposal...</span>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
