export const ESTIMATOR_CONFIG = {
  services: [
    {
      id: 'Corporate Catering',
      name: 'Corporate & Workplace Dining',
      basePrice: 120, // base ₹ per meal
      minMeals: 50,
      description: 'Ideal for tech parks, offices, and executive dining spaces.',
    },
    {
      id: 'Industrial Catering',
      name: 'Industrial & Shift Workforce',
      basePrice: 85, // base ₹ per meal
      minMeals: 100,
      description: 'Economical high-nutrition bulk meals for manufacturing plants.',
    },
    {
      id: 'Institutional Catering',
      name: 'Schools, Colleges & Healthcare',
      basePrice: 95, // base ₹ per meal
      minMeals: 150,
      description: 'Dietitian-approved balanced daily nutrition programmes.',
    },
    {
      id: 'Outdoor Catering and Events',
      name: 'Luxury Weddings & Banquets',
      basePrice: 550, // base ₹ per plate
      minMeals: 75,
      description: 'Elaborate multi-course celebratory feasts with live counters.',
    },
  ],
  cuisines: [
    { id: 'standard', name: 'South & North Indian Classic', multiplier: 1.0 },
    { id: 'premium', name: 'Multi-Cuisine Deluxe (Regional + Pan-Asian)', multiplier: 1.25 },
    { id: 'executive', name: 'Executive Royal Gourmet & Live Counters', multiplier: 1.55 },
  ],
  serviceStyles: [
    { id: 'packed', name: 'Hygienic Sealed Meal Trays / Bento', additionalPerMeal: 15 },
    { id: 'buffet', name: 'Cafeteria Bain-Marie Hot Buffet Service', additionalPerMeal: 25 },
    { id: 'silver', name: 'Luxury Banquet Stewards & Royal Chafing', additionalPerMeal: 65 },
  ],
};

