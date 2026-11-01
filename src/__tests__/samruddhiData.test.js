import { describe, it, expect } from 'vitest';
import { SERVICES_DATA, BRANDS_DATA, TRUST_METRICS, CORE_PILLARS } from '../data/samruddhiData';

describe('Data Integrity Tests', () => {
  it('has four defined catering service categories', () => {
    expect(SERVICES_DATA).toHaveLength(4);
    const expectedIds = [
      'industrial-catering',
      'corporate-catering',
      'outdoor-catering',
      'institutional-catering',
    ];
    SERVICES_DATA.forEach((s) => {
      expect(expectedIds).toContain(s.id);
      expect(s.title).toBeTruthy();
      expect(s.headline).toBeTruthy();
      expect(s.shortDesc).toBeTruthy();
      expect(s.image).toBeTruthy();
      expect(s.badge).toBeTruthy();
      expect(Array.isArray(s.highlights)).toBe(true);
      expect(s.highlights.length).toBeGreaterThan(0);
      expect(s.operationalScope).toBeTruthy();
    });
  });

  it('has five defined hospitality brands', () => {
    expect(BRANDS_DATA).toHaveLength(5);
    BRANDS_DATA.forEach((brand) => {
      expect(brand.id).toBeTruthy();
      expect(brand.name).toBeTruthy();
      expect(brand.tagline).toBeTruthy();
      expect(brand.description).toBeTruthy();
      expect(brand.image).toBeTruthy();
      expect(brand.category).toBeTruthy();
      expect(Array.isArray(brand.highlights)).toBe(true);
    });
  });

  it('has complete trust metrics with over 20 years experience', () => {
    expect(TRUST_METRICS.length).toBeGreaterThanOrEqual(4);
    const expMetric = TRUST_METRICS.find((m) => m.numericValue === 20);
    expect(expMetric).toBeDefined();
    expect(expMetric.label).toBe('Years of Experience');
  });

  it('has defined core operational pillars', () => {
    expect(CORE_PILLARS.length).toBe(6);
    CORE_PILLARS.forEach((pillar) => {
      expect(pillar.title).toBeTruthy();
      expect(pillar.desc).toBeTruthy();
    });
  });
});

