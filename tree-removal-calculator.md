# IMPL-PLAN: Tree Removal Cost Calculator

> **Goal:** Build a premium, high-ranking tree removal cost calculator with multi-tree support, location-aware estimates, and educational content.

## 📋 Project Overview
- **Type:** WEB Application (Next.js)
- **Primary Agent:** `frontend-specialist`
- **Secondary Agents:** `seo-specialist`, `backend-specialist` (for future API)
- **Tech Stack:**
  - **Framework:** Next.js (App Router)
  - **Styling:** Vanilla CSS (Premium, custom design)
  - **State:** React Context / Zustand (for multi-tree data)
  - **SEO:** Next.js Metadata, Schema.org (JSON-LD)

## 🎯 Success Criteria
- [ ] **Functional:** accurate cost estimates based on user inputs (species, size, condition).
- [ ] **UX:** Instant updates, multi-tree support without page reload.
- [ ] **Performance:** Lighthouse score > 90 (Mobile/Desktop).
- [ ] **SEO:** Schema.org "WebApplication" implemented; meta tags optimized for target keywords.

## 📂 File Structure
```
/
├── app/
│   ├── layout.tsx       # Global layout (Header/Footer)
│   ├── page.tsx         # Homepage + Main Calculator
│   ├── calculator/      # Dedicated Calculator Page (if separate)
│   ├── articles/        # SEO Content / Blog
│   └── globals.css      # Design System (Variables, Reset)
├── components/
│   ├── calculator/      # Calculator-specific components
│   │   ├── tree-form.tsx
│   │   ├── cost-breakdown.tsx
│   │   └── summary-card.tsx
│   ├── ui/              # Reusable UI (Sliders, Modals, Tooltips)
│   └── content/         # Educational panels, SEO text
├── lib/
│   ├── calculations.ts  # Core pricing logic (Pure functions)
│   ├── data.ts          # Mock data for location/species rates
│   └── types.ts         # TS Interfaces
└── public/              # Icons, Assets
```

## 📝 Task Breakdown

### Phase 1: Foundation & SEO Setup
- [ ] **Initialize Next.js Project** <!-- id: 1 -->
    - Setup TypeScript, ESLint.
    - Configure `globals.css` with CSS Variables for theme (Premium palette).
- [ ] **Implement Global Layout** <!-- id: 2 -->
    - Responsive Header (Logo, Nav).
    - Footer (Legal, Links).
- [ ] **SEO & Metadata Config** <!-- id: 3 -->
    - Configure `metadata` object in `layout.tsx`.
    - Implement JSON-LD Schema (WebApplication).

### Phase 2: Core Calculator Logic
- [ ] **Define Pricing Logic (`lib/calculations.ts`)** <!-- id: 4 -->
    - Implement formulas for Height, Diameter, Condition.
    - Implement modifiers for Location/Accessibility.
- [ ] **Build Tree Input Form Component** <!-- id: 5 -->
    - Inputs: Species (Select), Height (Slider), Dia (Slider), Condition (Select).
    - Checkboxes: Stump grinding, Debris, etc.
- [ ] **Implement Multi-Tree State Management** <!-- id: 6 -->
    - Allow adding/removing tree "rows".
    - Calculate Grand Total vs Individual Tree Total.

### Phase 3: UI/UX & Interactivity
- [ ] **Develop Real-time Cost Breakdown** <!-- id: 7 -->
    - Component to display line items (Labor, Equipment, Permits).
    - Reactive updates as inputs change.
- [ ] **Create Location-Aware Mock Service** <!-- id: 8 -->
    - Input for Zip Code.
    - Logic to adjust "Base Rate" based on region (Mock Data initially).
- [ ] **Implement Educational Panels** <!-- id: 9 -->
    - Collapsible "Why this cost?" sections next to inputs.
    - "Safety Warning" tooltips.

### Phase 4: Advanced & Polish
- [ ] **Lead Capture Form (Optional)** <!-- id: 10 -->
    - "Get Official Quote" modal.
    - Simple email validation (frontend only for now).
- [ ] **Performance Optimization** <!-- id: 11 -->
    - Image optimization (Next/Image).
    - Bundle analysis.
- [ ] **Content Injection** <!-- id: 12 -->
    - Add static SEO articles (e.g., "Why removal costs vary").

## ✅ Phase X: Verification Checklist
- Lint: ✅ (Run `npm run lint`)
- Security: ✅ (Check for exposed keys if API used)
- Build: ✅ (Run `npm run build` without errors)
- Mobile Responsiveness: ✅ (Check standard viewports)
- Lighthouse SEO: ✅ (>90 score)
