# Research: Tree Removal Pricing Data (2025 Detailed Summary)

> **Purpose:** Finalized baseline data for the Tree Removal Cost Calculator logic.
> **Sources:** This Old House, Checkatrade, MyBuilder, DreamWorks, HomeStars (2025 Estimates).

## 📊 Regional Pricing Comparison

| Region | Avg. Cost | Small (≤30 ft) | Medium (30-60 ft) | Large (60-80 ft) | XL (>80 ft) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **USA (USD)** | $630 - $850 | $150 - $450 | $450 - $1,200 | $800 - $1,500 | $1,000 - $2,000+ |
| **UK (GBP)** | £400 - £1,720 | £150 - £500 | £500 - £1,500 | £1,500 - £3,000 | £2,500 - £4,200+ |
| **Canada (CAD)** | ~$860 | $165 - $578 | $231 - $1,000+ | $529 - $1,300 | $1,200 - $1,800+ |

---

## 🇺🇸 United States (USD)
- **Typical Range:** $150 – $2,000+
- **Fallen Tree:** $90 – $300 (Cheaper)
- **Emergency:** Can exceed $5,000.
- **Stump Removal:** Add $180 – $525.
- **Species Note:** Hardwoods (Oak, Maple) cost significantly more than softwoods.

## 🇬🇧 United Kingdom (GBP)
- **Typical Range:** £280 – £2,040+ (Checkatrade avg for 50ft: £1,190-£1,720).
- **Stump Removal:** £160 – £710.
- **Stump Grinding:** £70 – £600.
- **Waste Removal:** £100 – £800.
- **Species Examples:** 30ft Conifer (~£490), 50ft Oak (~£1,430).

## 🇨🇦 Canada (CAD)
- **Typical Range:** $100 – $1,995 (Toronto range: $200 – $1,000 for 25-75ft).
- **Complexity:** Moderate difficulty (8-9 ranking) averages $1,600 – $2,900.
- **Accessibility:** Near power lines or difficult access can add 25% – 50% to the cost.
- **Stump Grinding:** $60 – $400.

---

## 💡 Key Takeaways for Algorithm Logic

1.  **Height & Diameter are Primary**: These form the base calculation.
2.  **Hardwood vs. Softwood**: Implement a "Tree Type" selector to apply a ~20% multiplier for hardwoods.
3.  **Condition Multipliers**:
    *   **Dead/Hazardous**: +25% to +50% (Canadian/US standard).
    *   **Fallen**: -40% to -60% (Significant discount).
4.  **Add-on Services (Line Items)**:
    *   Stump Grinding (Toggle)
    *   Debris Removal (Toggle)
    *   Emergency Service (Toggle)
5.  **Multi-Step Approach**: Because UK pricing varies so much by complexity (VAT/Permits), include a "Complexity" slider or checklist to refine the estimate.

## 🧮 Refined Formula Logic (Mock-up)

**`Result = ((Base Rate * Height) * SpeciesFactor * DifficultyFactor) + FixedAddOns`**

*(Detailed rates to be implemented in Phase 2: Core Logic)*
