/**
 * Utility to generate and download official Catering RFP Procurement Dossiers
 */

export const generateReferenceId = () => {
  const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
  const year = new Date().getFullYear();
  return `SAM-RFP-${year}-${randomHex}`;
};

export const getIndianTimestamp = () => {
  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
};

export const createDossierText = ({ referenceId, timestamp, formData }) => {
  return `=====================================================
SAMRUDDHI GROUP — CATERING & HOSPITALITY PROPOSAL DOSSIER
"Nourishing Trust, Delivering Excellence"
=====================================================
RFP Reference ID : ${referenceId}
Submission Date  : ${timestamp}
Corporate Address: No. 79/2, Jigani Hobli, Bengaluru, Karnataka – 560105
FSSAI Compliant Operations & Central Commissary

1. CLIENT & ORGANISATION DETAILS
-----------------------------------------------------
Client Name      : ${formData.fullName || ''}
Organisation     : ${formData.organisation || ''}
Business Email   : ${formData.workEmail || ''}
Phone Number     : ${formData.phoneNumber || ''}
Service Location : ${formData.location || ''}

2. SERVICE SCOPE & REQUIREMENTS
-----------------------------------------------------
Service Category : ${formData.serviceType || 'General Catering'}
Est. Meals/Guests: ${formData.estimatedGuests || ''}
Frequency / Date : ${formData.frequencyOrDate || 'As per operational schedule'}
Additional Specs : ${formData.additionalRequirements || 'Standard catering protocols requested'}

3. OPERATIONAL NOTICE & NEXT STEPS
-----------------------------------------------------
This Request For Proposal (RFP) has been officially recorded in
the Samruddhi Group Enterprise Lead Register.
Our Executive Catering Desk will review dietary matrices and
provide a formal customized culinary commercial proposal.
=====================================================`;
};

export const downloadDossierFile = (referenceId, content) => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Samruddhi_Group_${referenceId}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const buildMailtoUrl = ({ referenceId, formData }) => {
  const subject = encodeURIComponent(
    `Catering RFP [${referenceId}] - ${formData.organisation || ''} (${formData.serviceType || ''})`
  );
  const body = encodeURIComponent(
    `To Samruddhi Group Catering Desk,\n\nPlease find our formal Catering Proposal Request:\n\n` +
      `RFP Reference ID: ${referenceId}\n` +
      `Organisation: ${formData.organisation}\n` +
      `Contact Person: ${formData.fullName}\n` +
      `Contact Number: ${formData.phoneNumber}\n` +
      `Service Required: ${formData.serviceType}\n` +
      `Location: ${formData.location}\n` +
      `Volume / Guest Count: ${formData.estimatedGuests}\n` +
      `Timeline / Date: ${formData.frequencyOrDate || 'N/A'}\n\n` +
      `Requirements:\n${formData.additionalRequirements || 'Standard corporate catering requirements'}\n\n` +
      `Delivered via Samruddhi Group Portal.`
  );
  return `mailto:proposals@samruddhigroup.in?subject=${subject}&body=${body}`;
};

