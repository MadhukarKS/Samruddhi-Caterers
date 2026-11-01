import React, { useState, useMemo } from 'react';
import { useApp } from '../../hooks/useApp';
import { SectionHeading } from '../common/SectionHeading';
import { ESTIMATOR_CONFIG } from '../../data/estimatorData';
import { formatIndianCurrency } from '../../utils/formatters';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export const MealEstimator = () => {
  const { openProposalModal, showToast } = useApp();

  const [serviceId, setServiceId] = useState('Corporate Catering');
  const [mealCount, setMealCount] = useState(250);
  const [cuisineId, setCuisineId] = useState('standard');
  const [serviceStyleId, setServiceStyleId] = useState('buffet');

  const selectedService = useMemo(
    () => ESTIMATOR_CONFIG.services.find((s) => s.id === serviceId) || ESTIMATOR_CONFIG.services[0],
    [serviceId]
  );

  const selectedCuisine = useMemo(
    () => ESTIMATOR_CONFIG.cuisines.find((c) => c.id === cuisineId) || ESTIMATOR_CONFIG.cuisines[0],
    [cuisineId]
  );

  const selectedStyle = useMemo(
    () => ESTIMATOR_CONFIG.serviceStyles.find((st) => st.id === serviceStyleId) || ESTIMATOR_CONFIG.serviceStyles[0],
    [serviceStyleId]
  );

  // Pricing calculations
  const { perPlateEstimated, totalEstimated } = useMemo(() => {
    const base = selectedService.basePrice;
    const multiplied = base * selectedCuisine.multiplier;
    const finalPerPlate = Math.round(multiplied + selectedStyle.additionalPerMeal);
    const total = finalPerPlate * mealCount;
    return {
      perPlateEstimated: finalPerPlate,
      totalEstimated: total,
    };
  }, [selectedService, selectedCuisine, selectedStyle, mealCount]);

  const handleLaunchProposal = () => {
    openProposalModal(serviceId);
    showToast(
      `Estimator specs locked: ${mealCount} headcount for ${selectedService.name}.`,
      'info'
    );
  };

  return (
    <section id="estimator" className="section section-subtle">
      <div className="container-wide">
        {/* Section Heading */}
        <SectionHeading
          badgeIcon={Calculator}
          badgeText="Instant Procurement Planner"
          title="Interactive Meal & Catering Budget Estimator"
          description="Tailor your daily workforce or event catering specifications in real-time. Calculate instant estimated budgetary investments and seamlessly transfer your configuration into an official commercial RFP dossier."
        />

        {/* Minimalist 2-Column Calculator Surface */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            overflow: 'hidden',
          }}
        >
          {/* Left Column: Interactive Selectors */}
          <div style={{ padding: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <Sparkles size={18} color="var(--color-terracotta)" />
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  color: 'var(--color-text-main)',
                  margin: 0,
                }}
              >
                Configure Your Catering Parameters
              </h3>
            </div>

            {/* Step 1: Vertical Selector */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  marginBottom: '0.75rem',
                }}
              >
                1. Catering Operational Model
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.5rem',
                }}
              >
                {ESTIMATOR_CONFIG.services.map((srv) => {
                  const active = srv.id === serviceId;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => {
                        setServiceId(srv.id);
                        if (mealCount < srv.minMeals) {
                          setMealCount(srv.minMeals);
                        }
                      }}
                      style={{
                        padding: '0.75rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: active
                          ? '2px solid var(--color-pine-primary)'
                          : '1px solid var(--color-border)',
                        backgroundColor: active ? 'var(--color-pine-subtle)' : '#FFFFFF',
                        color: active ? 'var(--color-pine-primary)' : 'var(--color-text-body)',
                        fontSize: '0.86rem',
                        fontWeight: active ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.18s ease',
                      }}
                    >
                      {srv.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Headcount Slider */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.65rem',
                }}
              >
                <label
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  2. Daily Meals / Guest Headcount
                </label>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: 'var(--color-pine-primary)',
                    backgroundColor: 'var(--color-surface-subtle)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {mealCount.toLocaleString()} {serviceId === 'Outdoor Catering and Events' ? 'Guests' : 'Meals/Day'}
                </div>
              </div>

              <input
                type="range"
                min={selectedService.minMeals}
                max={5000}
                step={25}
                value={mealCount}
                onChange={(e) => setMealCount(parseInt(e.target.value, 10))}
                style={{
                  width: '100%',
                  accentColor: 'var(--color-terracotta)',
                  cursor: 'pointer',
                  height: '6px',
                }}
                aria-label="Daily Meal Count"
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  marginTop: '0.4rem',
                }}
              >
                <span>Min: {selectedService.minMeals}</span>
                <span>Industrial Scale: 5,000+ meals</span>
              </div>
            </div>

            {/* Step 3: Cuisine Segment */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  marginBottom: '0.65rem',
                }}
              >
                3. Menu & Culinary Profile
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {ESTIMATOR_CONFIG.cuisines.map((c) => {
                  const active = c.id === cuisineId;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCuisineId(c.id)}
                      style={{
                        padding: '0.65rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        border: active
                          ? '1px solid var(--color-pine-primary)'
                          : '1px solid var(--color-border)',
                        backgroundColor: active ? 'var(--color-surface-subtle)' : '#FFFFFF',
                        color: active ? 'var(--color-pine-primary)' : 'var(--color-text-body)',
                        fontSize: '0.86rem',
                        fontWeight: active ? 700 : 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        transition: 'all 0.18s ease',
                      }}
                    >
                      <span>{c.name}</span>
                      {active && <CheckCircle2 size={16} color="var(--color-terracotta)" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Service Style */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  marginBottom: '0.65rem',
                }}
              >
                4. Service Format & Packaging
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {ESTIMATOR_CONFIG.serviceStyles.map((st) => {
                  const active = st.id === serviceStyleId;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setServiceStyleId(st.id)}
                      style={{
                        padding: '0.65rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        border: active
                          ? '1px solid var(--color-pine-primary)'
                          : '1px solid var(--color-border)',
                        backgroundColor: active ? 'var(--color-surface-subtle)' : '#FFFFFF',
                        color: active ? 'var(--color-pine-primary)' : 'var(--color-text-body)',
                        fontSize: '0.86rem',
                        fontWeight: active ? 700 : 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        transition: 'all 0.18s ease',
                      }}
                    >
                      <span>{st.name}</span>
                      {active && <CheckCircle2 size={16} color="var(--color-terracotta)" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Output & Proposal Action */}
          <div
            style={{
              backgroundColor: 'var(--color-pine-primary)',
              color: '#FFFFFF',
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <TrendingUp size={18} color="#C85E34" />
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#C85E34',
                  }}
                >
                  Budgetary Breakdown
                </span>
              </div>

              {/* Per Plate Estimate */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.82rem', color: '#B8C5BE', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Estimated Rate Per Plate / Meal:
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.1,
                    marginTop: '0.25rem',
                  }}
                >
                  ₹{perPlateEstimated}
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#B8C5BE', marginLeft: '0.35rem' }}>
                    / plate (excl. GST)
                  </span>
                </div>
              </div>

              {/* Total Run Calculation */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: '#B8C5BE', marginBottom: '0.35rem' }}>
                  Estimated Total Run:
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.75rem, 2.8vw, 2.25rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                  }}
                >
                  {formatIndianCurrency(totalEstimated)}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#B8C5BE', marginTop: '0.35rem' }}>
                  *Indicative based on {mealCount} daily count. Final commercial contracts reflect shift models & SLAs.
                </div>
              </div>

              {/* Inclusions list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {[
                  'FSSAI Level 5 audited ingredients & certified kitchen preparation',
                  'Thermal hot-box insulated dispatch via GPS fleet',
                  'Dedicated on-site pantry stewards & tray replenishment',
                ].map((inc, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#D8E2DC' }}>
                    <ShieldCheck size={16} color="#C85E34" style={{ flexShrink: 0 }} />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Proposal Button */}
            <button
              type="button"
              onClick={handleLaunchProposal}
              className="btn btn-terracotta btn-lg"
              style={{ width: '100%' }}
            >
              <span>Transfer Estimate into Formal RFP</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
