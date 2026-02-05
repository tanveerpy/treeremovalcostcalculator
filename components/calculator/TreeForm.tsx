"use client";

import { TreeData, TreeCondition, Accessibility } from "@/lib/types";
import { X, TreePine, AlertTriangle, Zap, Home, Trash2 } from "lucide-react";

interface TreeFormProps {
    tree: TreeData;
    onUpdate: (data: Partial<TreeData>) => void;
    onRemove: () => void;
    isOnly: boolean;
}

export default function TreeForm({ tree, onUpdate, onRemove, isOnly }: TreeFormProps) {
    return (
        <div className="glass-nature p-8 rounded-3xl relative">
            {!isOnly && (
                <button
                    onClick={onRemove}
                    className="absolute top-4 right-4 p-2 text-nature-500 hover:text-red-400 transition-colors"
                >
                    <Trash2 size={20} />
                </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Basic Info */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-nature-400 mb-2">Species</label>
                        <select
                            value={tree.species}
                            onChange={(e) => onUpdate({ species: e.target.value })}
                            className="w-full bg-nature-900/50 border border-nature-800 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-nature-500"
                        >
                            <option value="Oak">Oak (Hardwood)</option>
                            <option value="Maple">Maple (Hardwood)</option>
                            <option value="Pine">Pine (Softwood)</option>
                            <option value="Birch">Birch (Softwood)</option>
                            <option value="Ash">Ash (Medium)</option>
                            <option value="Palm">Palm</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-nature-400 mb-2">
                            Height: <span className="text-gold-400">{tree.height} ft</span>
                        </label>
                        <input
                            type="range"
                            min="5"
                            max="120"
                            value={tree.height}
                            onChange={(e) => onUpdate({ height: parseInt(e.target.value) })}
                            className="w-full accent-nature-500 h-2 bg-nature-900 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-nature-400 mb-2">
                            Trunk Diameter: <span className="text-gold-400">{tree.diameter} in</span>
                        </label>
                        <input
                            type="range"
                            min="2"
                            max="80"
                            value={tree.diameter}
                            onChange={(e) => onUpdate({ diameter: parseInt(e.target.value) })}
                            className="w-full accent-nature-500 h-2 bg-nature-900 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </div>

                {/* Condition & Access */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-nature-400 mb-2">Tree Condition</label>
                        <div className="grid grid-cols-2 gap-2">
                            {(['healthy', 'diseased', 'dead', 'hazardous'] as TreeCondition[]).map((c) => (
                                <button
                                    key={c}
                                    onClick={() => onUpdate({ condition: c })}
                                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${tree.condition === c
                                        ? 'bg-nature-700 text-white'
                                        : 'bg-nature-950/60 text-nature-500 hover:bg-nature-900'
                                        }`}
                                >
                                    {c.charAt(0).toUpperCase() + c.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-nature-400 mb-2">Accessibility</label>
                        <select
                            value={tree.accessibility}
                            onChange={(e) => onUpdate({ accessibility: e.target.value as Accessibility })}
                            className="w-full bg-nature-900/50 border border-nature-800 rounded-xl px-4 py-2 text-white"
                        >
                            <option value="easy">Easy (Open flat ground)</option>
                            <option value="moderate">Moderate (Some obstacles)</option>
                            <option value="difficult">Difficult (Slopes, narrow)</option>
                            <option value="restricted">Restricted (Cranes needed)</option>
                        </select>
                    </div>
                </div>

                {/* Hazard Toggles */}
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-nature-400 mb-2">Specific Hazards</label>

                    <button
                        onClick={() => onUpdate({ nearPowerLines: !tree.nearPowerLines })}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${tree.nearPowerLines
                            ? 'bg-amber-500/10 border-amber-500/50 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                            : 'bg-nature-900/40 border-white/5 text-nature-400 hover:border-nature-700'
                            }`}
                    >
                        <div className="flex items-center gap-3 text-sm font-semibold">
                            <Zap size={18} className={tree.nearPowerLines ? 'text-amber-400' : 'text-nature-500'} />
                            Near Power Lines
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 transition-all ${tree.nearPowerLines ? 'bg-amber-500 border-white/20' : 'border-nature-800 bg-nature-900'}`} />
                    </button>

                    <button
                        onClick={() => onUpdate({ nearStructure: !tree.nearStructure })}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${tree.nearStructure
                            ? 'bg-blue-500/10 border-blue-500/50 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                            : 'bg-nature-900/40 border-white/5 text-nature-400 hover:border-nature-700'
                            }`}
                    >
                        <div className="flex items-center gap-3 text-sm font-semibold">
                            <Home size={18} className={tree.nearStructure ? 'text-blue-400' : 'text-nature-500'} />
                            Near House/Fence
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 transition-all ${tree.nearStructure ? 'bg-blue-500 border-white/20' : 'border-nature-800 bg-nature-900'}`} />
                    </button>

                    <div className="pt-4 space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={tree.stumpGrinding}
                                onChange={(e) => onUpdate({ stumpGrinding: e.target.checked })}
                                className="w-5 h-5 rounded border-nature-800 bg-nature-950 text-nature-500 focus:ring-nature-500"
                            />
                            <span className="text-sm text-nature-300 group-hover:text-white transition-colors">Include Stump Grinding</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={tree.debrisRemoval}
                                onChange={(e) => onUpdate({ debrisRemoval: e.target.checked })}
                                className="w-5 h-5 rounded border-nature-800 bg-nature-950 text-nature-500 focus:ring-nature-500"
                            />
                            <span className="text-sm text-nature-300 group-hover:text-white transition-colors">Debris Removal & Clean-up</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
