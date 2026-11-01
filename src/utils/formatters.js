/**
 * Formatter utilities for currency, counts, and copy-to-clipboard helpers
 */

export const formatIndianCurrency = (amount) => {
  if (typeof amount !== 'number') return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const copyToClipboard = async (text) => {
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  return false;
};

