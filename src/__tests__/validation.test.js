import { describe, it, expect } from 'vitest';
import { validateField, validateForm } from '../utils/validation';

describe('Validation Utility Tests', () => {
  describe('validateField', () => {
    it('validates fullName correctly', () => {
      expect(validateField('fullName', '')).toBe('Full name is required');
      expect(validateField('fullName', '   ')).toBe('Full name is required');
      expect(validateField('fullName', 'Al')).toBe(
        'Please enter a valid full name (minimum 3 characters)'
      );
      expect(validateField('fullName', 'Anand Murthy')).toBe('');
    });

    it('validates organisation correctly', () => {
      expect(validateField('organisation', '')).toBe(
        'Organisation / Company name is required'
      );
      expect(validateField('organisation', 'Samruddhi')).toBe('');
    });

    it('validates workEmail format', () => {
      expect(validateField('workEmail', '')).toBe('Work email is required');
      expect(validateField('workEmail', 'not-an-email')).toBe(
        'Please enter a valid business email address'
      );
      expect(validateField('workEmail', 'user@company.com')).toBe('');
      expect(validateField('workEmail', 'procurement@industry.co.in')).toBe('');
    });

    it('validates phoneNumber format', () => {
      expect(validateField('phoneNumber', '')).toBe('Phone number is required');
      expect(validateField('phoneNumber', '123')).toBe(
        'Please enter a valid contact phone number (8-15 digits)'
      );
      expect(validateField('phoneNumber', '+91 98765 43210')).toBe('');
      expect(validateField('phoneNumber', '080-27830000')).toBe('');
    });

    it('validates location correctly', () => {
      expect(validateField('location', '')).toBe(
        'City or service location is required'
      );
      expect(validateField('location', 'Jigani, Bengaluru')).toBe('');
    });

    it('validates estimatedGuests correctly', () => {
      expect(validateField('estimatedGuests', '')).toBe(
        'Approximate meal count or guest count is required'
      );
      expect(validateField('estimatedGuests', '500 meals/day')).toBe('');
    });
  });

  describe('validateForm', () => {
    it('returns errors when fields are empty', () => {
      const result = validateForm({});
      expect(result.isValid).toBe(false);
      expect(result.errors.fullName).toBeDefined();
      expect(result.errors.workEmail).toBeDefined();
    });

    it('returns isValid: true when all required fields are valid', () => {
      const validData = {
        fullName: 'Rajesh Kumar',
        organisation: 'TechCorp India',
        workEmail: 'rajesh@techcorp.in',
        phoneNumber: '+91 98450 12345',
        location: 'Electronic City, Bengaluru',
        estimatedGuests: '350 employees',
      };
      const result = validateForm(validData);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });
  });
});

