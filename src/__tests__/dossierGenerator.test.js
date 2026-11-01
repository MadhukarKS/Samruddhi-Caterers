import { describe, it, expect } from 'vitest';
import {
  generateReferenceId,
  createDossierText,
  buildMailtoUrl,
} from '../utils/dossierGenerator';

describe('Dossier Generator Utility Tests', () => {
  it('generates a valid reference ID starting with SAM-RFP', () => {
    const id = generateReferenceId();
    const currentYear = new Date().getFullYear();
    expect(id).toMatch(new RegExp(`^SAM-RFP-${currentYear}-[A-Z0-9]{5}$`));
  });

  it('creates comprehensive procurement dossier text containing all submitted data', () => {
    const referenceId = 'SAM-RFP-2026-TEST1';
    const timestamp = '01/11/2026, 10:30:00';
    const formData = {
      fullName: 'Sunil Rao',
      organisation: 'Anekal Automotive Hub',
      workEmail: 'procurement@anekalauto.com',
      phoneNumber: '+91 99000 88888',
      location: 'Jigani Hobli, Bengaluru',
      serviceType: 'Industrial Catering',
      estimatedGuests: '1200 workers',
      frequencyOrDate: '3 daily shifts',
      additionalRequirements: 'Pure vegetarian and South Indian thali combination',
    };

    const text = createDossierText({ referenceId, timestamp, formData });

    expect(text).toContain('SAM-RFP-2026-TEST1');
    expect(text).toContain('Sunil Rao');
    expect(text).toContain('Anekal Automotive Hub');
    expect(text).toContain('Industrial Catering');
    expect(text).toContain('1200 workers');
    expect(text).toContain('No. 79/2, Jigani Hobli');
    expect(text).toContain('FSSAI Compliant Operations');
  });

  it('builds mailto URL with properly URI-encoded parameters', () => {
    const referenceId = 'SAM-RFP-2026-TEST2';
    const formData = {
      organisation: 'Infosys BPM',
      fullName: 'Priya Sharma',
      phoneNumber: '+91 98111 22233',
      serviceType: 'Corporate Catering',
      location: 'Electronics City Phase 1',
      estimatedGuests: '450 staff',
      frequencyOrDate: 'Daily lunch',
      additionalRequirements: 'Low oil, healthy executive options',
    };

    const mailto = buildMailtoUrl({ referenceId, formData });

    expect(mailto).toContain('mailto:proposals@samruddhigroup.in');
    expect(mailto).toContain(encodeURIComponent('Catering RFP [SAM-RFP-2026-TEST2]'));
    expect(mailto).toContain(encodeURIComponent('Infosys BPM'));
  });
});

