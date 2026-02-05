"use client";

import { CalculationResult } from "@/lib/types";
import { motion } from "framer-motion";

interface ResultDisplayProps {
    results: CalculationResult[];
    grandTotal: number;
    symbol: string;
}

export default function ResultDisplay({ results, grandTotal, symbol }: ResultDisplayProps) {
    return (
        <div className="space-y-6">
            <div className="glass-nature p-8 rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nature-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                    Estimates Summary
                </h3>

                <div className="space-y-4 mb-8">
                    {results.map((res, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                            <span className="text-nature-400">Tree #{idx + 1}</span>
                            <span className="text-nature-100">{symbol}{res.totalCost.toLocaleString()}</span>
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-nature-500 font-bold">Grand Total</p>
                    <div className="text-5xl font-black gradient-text">
                        {symbol}{grandTotal.toLocaleString()}
                    </div>
                    <p className="text-[10px] text-nature-600 mt-2">
                        *This is an estimate. Actual quotes may vary based on precise on-site inspection.
                    </p>
                </div>

                <button className="w-full py-4 bg-gold-600 hover:bg-gold-500 text-white rounded-2xl font-bold mt-8 transition-all shadow-lg shadow-gold-950/20 active:scale-95">
                    Get Official Quote
                </button>
            </div>

            <div className="glass-nature p-6 rounded-2xl text-[11px] leading-relaxed text-nature-500 space-y-4">
                <p className="font-bold text-nature-400 uppercase tracking-tighter">Cost Factors Included:</p>
                <ul className="space-y-1 list-disc pl-4">
                    <li>Labor hours per height category</li>
                    <li>Equipment allocation (Cranes/Chipper)</li>
                    <li>Hazard liability insurance</li>
                    <li>Waste disposal tax per region</li>
                    <li>Travel and transport fees</li>
                </ul>
            </div>
        </div>
    );
}
