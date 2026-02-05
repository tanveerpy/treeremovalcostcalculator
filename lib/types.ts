export type Region = 'USA' | 'UK' | 'Canada';

export interface PricingData {
    currency: string;
    symbol: string;
    baseRatePerFoot: {
        small: number;
        medium: number;
        large: number;
    };
    stumpRate: number;
    debrisRate: number;
}

export type TreeCondition = 'healthy' | 'diseased' | 'dead' | 'hazardous' | 'fallen';
export type Accessibility = 'easy' | 'moderate' | 'difficult' | 'restricted';

export interface TreeData {
    id: string;
    species: string;
    height: number; // in feet
    diameter: number; // in inches
    condition: TreeCondition;
    accessibility: Accessibility;
    nearPowerLines: boolean;
    nearStructure: boolean;
    stumpGrinding: boolean;
    debrisRemoval: boolean;
}

export interface CalculationResult {
    baseCost: number;
    difficultySurcharge: number;
    extrasCost: number;
    totalCost: number;
    currency: string;
    symbol: string;
}
