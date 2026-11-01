# Samruddhi Group — Web Application

A modern, high-performance web platform for **Samruddhi Group** (premier food-services, industrial catering, and hospitality brand in Bengaluru). Built with **React 19 + Vite (pure JavaScript)**, centralized state management, responsive luxury design system, interactive Meal & Budget Estimator, and turnkey ngrok tunneling support.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19 + JavaScript (ES Modules, zero TypeScript)
- **Bundler & Tooling**: Vite 6 / Vite 8 with `@vitejs/plugin-react`
- **State Management**: Centralized React Context (`AppContext` + `useApp`) with persistent RFP registration & interactive modal controls
- **Testing**: Vitest + `@testing-library/react` + `jsdom` (23 unit & integration tests)
- **Linter**: Oxlint (instantaneous sub-100ms linting)
- **Icons**: Lucide React
- **Styling**: Vanilla Luxury Design System (Emerald `#1B4D3E`, Champagne Gold `#D4AF37`, Warm Cream `#FAF8F5`)

---

## 📁 Standard Industry-Level Project Structure

```text
Samruddhi-Caterers/
├── index.html                   # SEO metadata, Schema.org LD-JSON, main.jsx mount
├── vite.config.js               # Vite config with 0.0.0.0 host & ngrok allowedHosts
├── vitest.config.js             # Vitest configuration for JSDOM test suites
├── package.json                 # Pure JavaScript scripts and dependencies
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Main layout orchestrator & scroll spy
│   ├── styles/
│   │   └── index.css            # Luxury design tokens, animations & responsive grid
│   ├── context/
│   │   ├── appContextInstance.js# React context instance (Fast Refresh optimized)
│   │   └── AppContext.jsx       # Global state provider (modals, toasts, RFPs, nav)
│   ├── hooks/
│   │   ├── useApp.js            # Consumer hook for AppContext
│   │   ├── useScrollSpy.js      # Active section detection during scroll
│   │   └── useLocalStorage.js   # Type-safe persistent storage hook
│   ├── components/
│   │   ├── common/              # Reusable UI widgets
│   │   │   ├── BackToTop.jsx
│   │   │   ├── SamruddhiLogo.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── ToastContainer.jsx
│   │   ├── layout/              # Structural components
│   │   │   ├── Navbar.jsx       # Sticky luxury navigation with mobile drawer
│   │   │   └── Footer.jsx       # Corporate footer with direct contact & credentials
│   │   ├── sections/            # Feature-rich page sections
│   │   │   ├── Hero.jsx         # Full-width cinematic banner & CTAs
│   │   │   ├── TrustStats.jsx   # 20+ Years, 10M+ Meals, 50+ Clients counters
│   │   │   ├── AboutSection.jsx # Company heritage & culinary leadership
│   │   │   ├── ServicesSection.jsx # 4 Pillars of catering services
│   │   │   ├── MealEstimator.jsx# Interactive dynamic pricing & meal calculator
│   │   │   ├── QualityHygiene.jsx # FSSAI, safety protocols & audit badges
│   │   │   ├── HospitalityBrands.jsx # Brand portfolio showcase
│   │   │   └── ContactSection.jsx # Direct contact info & RFP quote form
│   │   └── modals/              # Global state-triggered popups
│   │       ├── EnquiryForm.jsx  # Multi-step RFP enquiry with validation
│   │       ├── ProposalModal.jsx# Instant RFP summary & printable dossier
│   │       ├── ServiceModal.jsx # Detailed service capability viewer
│   │       ├── BrandModal.jsx   # Brand entity deep-dive modal
│   │       └── PrivacyModal.jsx # Corporate compliance & privacy policy
│   ├── data/
│   │   ├── samruddhiData.js     # Enterprise service catalog & brand definitions
│   │   └── estimatorData.js     # Pricing matrices & dietary options
│   ├── utils/
│   │   ├── validation.js        # Form validation rules (email, phone, headcount)
│   │   ├── dossierGenerator.js  # RFP reference generator & printable summary
│   │   └── formatters.js        # Currency, date, and headcount formatters
│   └── __tests__/               # Automated unit & integration tests
│       ├── validation.test.js
│       ├── dossierGenerator.test.js
│       ├── samruddhiData.test.js
│       ├── AppContext.test.jsx
│       └── components.test.jsx
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. (Press `Ctrl + F5` to force reload without browser cache).

---

## 🌐 Ngrok Tunneling Setup

The project is pre-configured with `allowedHosts: true` and `host: 0.0.0.0` in `vite.config.js`.

### Step 1: Start Vite in host mode
```bash
npm run dev:ngrok
```

### Step 2: In a separate terminal, expose the port with ngrok
```bash
ngrok http 5173
```

### (Optional) For seamless HMR over ngrok:
```bash
$env:NGROK_URL="https://your-domain.ngrok-free.app"
npm run dev:ngrok
```

---

## 🧪 Testing & Verification

- **Run all unit & integration tests**:
  ```bash
  npm test
  ```
- **Run tests in interactive watch mode**:
  ```bash
  npm run test:watch
  ```
- **Run linter**:
  ```bash
  npm run lint
  ```
- **Build production bundle**:
  ```bash
  npm run build
  ```
