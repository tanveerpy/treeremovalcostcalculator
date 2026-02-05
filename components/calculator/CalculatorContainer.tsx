"use client";

import { useState, useEffect } from "react";
import { Region, TreeData, CalculationResult } from "@/lib/types";
import { calculateTreeCost, REGIONAL_PRICING } from "@/lib/calculations";
import TreeForm from "./TreeForm";
import ResultDisplay from "./ResultDisplay";
import { motion, AnimatePresence } from "framer-motion";

export default function CalculatorContainer() {
    const [region, setRegion] = useState<Region>("USA");
    const [trees, setTrees] = useState<TreeData[]>([
        {
            id: "1",
            species: "Oak",
            height: 40,
            diameter: 15,
            condition: "healthy",
            accessibility: "easy",
            nearPowerLines: false,
            nearStructure: false,
            stumpGrinding: false,
            debrisRemoval: true,
        },
    ]);

    const [results, setResults] = useState<CalculationResult[]>([]);

    useEffect(() => {
        const newResults = trees.map((tree) => calculateTreeCost(tree, region));
        setResults(newResults);
    }, [trees, region]);

    const updateTree = (id: string, data: Partial<TreeData>) => {
        setTrees((prev) =>
            prev.map((tree) => (tree.id === id ? { ...tree, ...data } : tree))
        );
    };

    const addTree = () => {
        const newTree: TreeData = {
            id: Math.random().toString(36).substr(2, 9),
            species: "Other",
            height: 20,
            diameter: 10,
            condition: "healthy",
            accessibility: "easy",
            nearPowerLines: false,
            nearStructure: false,
            stumpGrinding: false,
            debrisRemoval: true,
        };
        setTrees((prev) => [...prev, newTree]);
    };

    const removeTree = (id: string) => {
        if (trees.length > 1) {
            setTrees((prev) => prev.filter((tree) => tree.id !== id));
        }
    };

    const grandTotal = results.reduce((acc, curr) => acc + curr.totalCost, 0);

    return (
        <div className="w-full max-w-6xl mx-auto p-4 space-y-8">
            {/* Region Selector */}
            <div className="flex justify-center gap-3 mb-12">
                {(["USA", "UK", "Canada"] as Region[]).map((r) => (
                    <button
                        key={r}
                        onClick={() => setRegion(r)}
                        className={`px-8 py-3 rounded-2xl transition-all duration-300 border flex items-center gap-2 font-bold text-sm tracking-wide ${region === r
                            ? "bg-nature-600 border-nature-400 text-white shadow-[0_0_20px_rgba(77,120,83,0.3)] scale-105"
                            : "bg-nature-950/40 border-white/5 text-nature-400 hover:bg-nature-900/60 hover:border-nature-800"
                            }`}
                    >
                        <span className="opacity-70 text-[10px] uppercase font-mono tracking-tighter">
                            {r === "USA" ? "us" : r === "UK" ? "gb" : "ca"}
                        </span>
                        {r}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-start">
                {/* Forms Section */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                    <AnimatePresence mode="popLayout">
                        {trees.map((tree, index) => (
                            <motion.div
                                key={tree.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative"
                            >
                                <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-nature-800 border border-nature-600 flex items-center justify-center text-xs font-bold text-nature-200 shadow-xl overflow-visible z-10">
                                    {index + 1}
                                </div>
                                <TreeForm
                                    tree={tree}
                                    onUpdate={(data) => updateTree(tree.id, data)}
                                    onRemove={() => removeTree(tree.id)}
                                    isOnly={trees.length === 1}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <button
                        onClick={addTree}
                        className="w-full py-5 border-2 border-dashed border-nature-800/50 rounded-3xl text-nature-400 hover:text-nature-200 hover:border-nature-500 hover:bg-nature-900/20 transition-all flex items-center justify-center gap-3 group"
                    >
                        <span className="text-xl group-hover:scale-125 transition-transform">+</span>
                        <span className="font-bold text-sm uppercase tracking-widest">Add Another Tree</span>
                    </button>
                </div>

                {/* Sticky Results Sidebar */}
                <div className="lg:col-span-4 xl:col-span-3 sticky top-24">
                    <ResultDisplay
                        results={results}
                        grandTotal={grandTotal}
                        symbol={REGIONAL_PRICING[region].symbol}
                    />
                </div>
            </div>
        </div>
    );
}
