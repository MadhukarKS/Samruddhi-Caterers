export interface ServiceItem {
  id: string;
  title: string;
  headline: string;
  shortDesc: string;
  image: string;
  badge: string;
  highlights: string[];
  operationalScope: string;
  ctaText: string;
}

export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  highlights: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'industrial-catering',
    title: 'Industrial Catering',
    headline: 'Meals That Keep the Workforce Strong.',
    shortDesc: 'Large-volume meal production designed specifically for industrial workforces, manufacturing hubs, and round-the-clock operational environments.',
    image: '/images/industrial.jpg',
    badge: 'High-Volume Production',
    highlights: [
      'High-volume, uninterrupted food production',
      'Nutritious, hearty and hygienically prepared meals',
      'Trained culinary staff and stringent quality control',
      'Scheduled, temperature-regulated on-time delivery',
      'Unwavering consistency at industrial scale'
    ],
    operationalScope: 'Tailored for factories, automotive plants, fabrication units, and shift-based manufacturing ecosystems requiring disciplined daily meal dispatch.',
    ctaText: 'Discuss Industrial Catering'
  },
  {
    id: 'corporate-catering',
    title: 'Corporate Catering',
    headline: 'Fuelling Performance, Every Day.',
    shortDesc: 'Refined corporate dining solutions crafted for technology parks, corporate headquarters, and modern office workplaces across Bengaluru.',
    image: '/images/corporate.jpg',
    badge: 'Workplace Dining',
    highlights: [
      'Healthy and balanced employee meal menus',
      'Customised multi-cuisine corporate menus',
      'Hygienic preparation and tamper-evident packaging',
      'Dependable daily desk and cafeteria delivery',
      'Professional hospitality and service standards'
    ],
    operationalScope: 'Designed for IT parks, business process centers, multinational corporate campuses, and executive dining suites.',
    ctaText: 'Plan Corporate Catering'
  },
  {
    id: 'outdoor-catering',
    title: 'Outdoor Catering and Events',
    headline: 'Exceptional Food. Memorable Celebrations.',
    shortDesc: 'Bespoke culinary catering for grand Indian weddings, corporate galas, milestone celebrations, and prestigious open-air events.',
    image: '/images/outdoor.jpg',
    badge: 'Bespoke Celebrations',
    highlights: [
      'Customisable luxury menus and live counters',
      'Authentic multi-cuisine regional and global offerings',
      'Impeccably trained professional banquet staff',
      'Exquisite food presentation, royal chafing dishes and aesthetic setups',
      'End-to-end catering and event coordination'
    ],
    operationalScope: 'Equipped to serve weddings, anniversaries, corporate annual days, and distinguished social gatherings of all scales.',
    ctaText: 'Plan Your Event'
  },
  {
    id: 'institutional-catering',
    title: 'Institutional Catering',
    headline: 'Nourishing Communities With Care.',
    shortDesc: 'Dependable, wholesome food programmes designed for educational institutions, universities, medical campuses, and community facilities.',
    image: '/images/institutional.jpg',
    badge: 'Wholesome Community Nutrition',
    highlights: [
      'Balanced and nutritious meal options for student and staff health',
      'Customised institutional food programmes adhering to guidelines',
      'Disciplined daily delivery and strict operational consistency',
      'Hygiene-focused centralized preparation protocols',
      'Adherence to institutional food-safety standards'
    ],
    operationalScope: 'Structured for schools, colleges, residential universities, hostels, healthcare complexes, and civic institutions.',
    ctaText: 'Enquire About Institutional Catering'
  }
];

export const BRANDS_DATA: BrandItem[] = [
  {
    id: 'samruddhi-grand',
    name: 'Samruddhi Grand',
    tagline: 'Grand Occasions & Multi-Cuisine Hospitality',
    description: 'Premium multi-cuisine hospitality for grand occasions, banquets, and distinguished corporate gatherings.',
    image: '/images/outdoor.jpg',
    category: 'Luxury Banquets & Hospitality',
    highlights: [
      'Lavish multi-cuisine hospitality infrastructure',
      'Designed for weddings, corporate convocations & banquets',
      'Signature culinary artistry and attentive banquet service'
    ]
  },
  {
    id: 'santrupthi-fine-dine',
    name: 'Santrupthi Fine-Dine',
    tagline: 'An Unforgettable Culinary Experience',
    description: 'A fine-dining restaurant offering a delightful dining experience with authentic flavours, warm ambiance, and impeccable hospitality.',
    image: '/images/finedining.jpg',
    category: 'Fine-Dining Restaurant',
    highlights: [
      'Intimate, sophisticated dining ambiance',
      'Curated regional Indian and culinary specialties',
      'Warm hospitality tailored for families, executives & celebrations'
    ]
  },
  {
    id: 'samruddhi-garden',
    name: 'Samruddhi Garden',
    tagline: 'Lush Open-Air Celebrations',
    description: 'A garden venue for events and celebrations, blending natural elegance with seamless hospitality management.',
    image: '/images/garden.jpg',
    category: 'Event & Celebration Venue',
    highlights: [
      'Manicured open-air lawns and illuminated pergolas',
      'Ideal for receptions, outdoor parties & cultural gatherings',
      'Integrated catering and venue support'
    ]
  },
  {
    id: 'samruddhi-food-court',
    name: 'Samruddhi Food-Court',
    tagline: 'Diverse Flavours Under One Roof',
    description: 'A variety of food experiences under one roof, providing quick, hygienic, and delectable meal options.',
    image: '/images/corporate.jpg',
    category: 'Multi-Concept Food Court',
    highlights: [
      'Wide spectrum of daily dining choices',
      'Rapid service with uncompromising hygiene standards',
      'Dynamic food counters serving all demographics'
    ]
  },
  {
    id: 'samruddhi-corporate-kitchens',
    name: 'Samruddhi Corporate Kitchens',
    tagline: 'Engineered for Scale & Precision',
    description: 'Specialised central-kitchen infrastructure for corporate and industrial catering services, engineered for high-volume precision.',
    image: '/images/hero.jpg',
    category: 'Industrial & Central Commissary',
    highlights: [
      'State-of-the-art central kitchen facility in Jigani, Bengaluru',
      'High-capacity automated kettles and temperature-controlled dispatch',
      'Direct logistical support for corporate campuses and manufacturing units'
    ]
  }
];

export const TRUST_METRICS = [
  {
    numericValue: 20,
    suffix: '+',
    label: 'Years of Experience',
    detail: 'Over two decades of dependable food-service and hospitality leadership in Karnataka.'
  },
  {
    numericValue: 8000,
    suffix: '+',
    label: 'Happy Customers',
    detail: 'Serving corporate workforces, industrial teams, and event patrons with consistent care.'
  },
  {
    numericValue: null,
    displayValue: 'Large-Scale',
    suffix: '',
    label: 'Catering Operations',
    detail: 'Engineered central kitchens capable of mass culinary dispatch without compromising taste.'
  },
  {
    numericValue: null,
    displayValue: 'Zero-Compromise',
    suffix: '',
    label: 'Quality, Hygiene & Safety',
    detail: 'FSSAI compliant protocols, sanitized preparation bays, and temperature-controlled logistics.'
  }
];
