/**
 * Form field validation utilities for enterprise RFP inquiries.
 */

export const validateField = (name, value) => {
  const trimmed = (value || '').trim();

  switch (name) {
    case 'fullName':
      if (!trimmed) return 'Full name is required';
      if (trimmed.length < 3) return 'Please enter a valid full name (minimum 3 characters)';
      return '';

    case 'organisation':
      if (!trimmed) return 'Organisation / Company name is required';
      if (trimmed.length < 2) return 'Please provide an organisation or institution name';
      return '';

    case 'workEmail':
      if (!trimmed) return 'Work email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return 'Please enter a valid business email address';
      }
      return '';

    case 'phoneNumber':
      if (!trimmed) return 'Phone number is required';
      if (!/^\+?[0-9\s-]{8,15}$/.test(trimmed)) {
        return 'Please enter a valid contact phone number (8-15 digits)';
      }
      return '';

    case 'location':
      if (!trimmed) return 'City or service location is required';
      return '';

    case 'estimatedGuests':
      if (!trimmed) return 'Approximate meal count or guest count is required';
      return '';

    default:
      return '';
  }
};

export const validateForm = (formData) => {
  const fields = ['fullName', 'organisation', 'workEmail', 'phoneNumber', 'location', 'estimatedGuests'];
  const errors = {};

  fields.forEach((field) => {
    const error = validateField(field, formData[field]);
    if (error) {
      errors[field] = error;
    }
  });

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

