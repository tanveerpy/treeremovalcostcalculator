import { Region, PricingData, TreeData, CalculationResult } from './types';

export const REGIONAL_PRICING: Record<Region, PricingData> = {
    USA: {
        currency: 'USD',
        symbol: '$',
        baseRatePerFoot: { small: 20, medium: 25, large: 30 },
        stumpRate: 250,
        debrisRate: 100,
    },
    UK: {
        currency: 'GBP',
        symbol: '£',
        baseRatePerFoot: { small: 18, medium: 22, large: 28 }, // Approx conversions from search
        stumpRate: 200,
        debrisRate: 80,
    },
    Canada: {
        currency: 'CAD',
        symbol: '$',
        baseRatePerFoot: { small: 22, medium: 28, large: 35 },
        stumpRate: 280,
        debrisRate: 120,
    },
};

export function calculateTreeCost(tree: TreeData, region: Region): CalculationResult {
    const pricing = REGIONAL_PRICING[region];

    // 1. Base Cost calculation
    let baseRate = pricing.baseRatePerFoot.small;
    if (tree.height > 60) baseRate = pricing.baseRatePerFoot.large;
    else if (tree.height > 30) baseRate = pricing.baseRatePerFoot.medium;

    let baseCost = tree.height * baseRate;

    // 2. Diameter Multiplier (Research: Thick trunks add 15-30%)
    if (tree.diameter > 40) baseCost *= 1.30;
    else if (tree.diameter > 20) baseCost *= 1.15;

    // 3. Difficulty Multipliers
    let multiplier = 1.0;

    // Condition
    if (tree.condition === 'hazardous' || tree.condition === 'dead') multiplier += 0.40;
    if (tree.condition === 'diseased') multiplier += 0.20;
    if (tree.condition === 'fallen') multiplier -= 0.50; // Significant discount

    // Accessibility
    if (tree.accessibility === 'difficult') multiplier += 0.25;
    if (tree.accessibility === 'restricted') multiplier += 0.50;

    // Proximity hazards
    if (tree.nearPowerLines) multiplier += 0.30;
    if (tree.nearStructure) multiplier += 0.20;

    const subtotal = baseCost * multiplier;
    const difficultySurcharge = subtotal - baseCost;

    // 4. Extras
    let extrasCost = 0;
    if (tree.stumpGrinding) extrasCost += pricing.stumpRate;
    if (tree.debrisRemoval) extrasCost += pricing.debrisRate;

    return {
        baseCost: Math.round(baseCost),
        difficultySurcharge: Math.round(difficultySurcharge),
        extrasCost: Math.round(extrasCost),
        totalCost: Math.round(subtotal + extrasCost),
        currency: pricing.currency,
        symbol: pricing.symbol,
    };
}
