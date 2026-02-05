"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Leaf, HelpCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function ConservationPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeen = localStorage.getItem('arborcalc_conservation_seen');
        if (!hasSeen) {
            const timer = setTimeout(() => setIsOpen(true), 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        localStorage.setItem('arborcalc_conservation_seen', 'true');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-nature-950/90 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full md:w-[460px] md:h-[360px] max-w-[90vw] md:max-w-none bg-nature-950 border border-nature-800 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10 flex flex-col"
                    >
                        {/* Visual Section */}
                        <div className="relative h-[110px] md:h-[120px] w-full bg-nature-900 overflow-hidden flex-shrink-0">
                            <div className="absolute inset-0">
                                <Image
                                    src="/artifacts/sad_tree_conservation_webp.png"
                                    alt="Sad Tree"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-nature-950 to-transparent" />
                        </div>

                        {/* Content Section */}
                        <div className="p-4 md:p-5 text-center relative flex flex-col items-center justify-center flex-1 overflow-hidden">
                            <div className="flex justify-center mb-1.5">
                                <div className="p-1.5 bg-nature-900/50 rounded-full border border-nature-500/30 text-gold-400">
                                    <Heart size={14} className="animate-pulse" />
                                </div>
                            </div>

                            <h2 className="text-lg md:text-xl font-black text-white mb-2 leading-tight">
                                Wait, friend... <br />
                                <span className="gradient-text text-sm md:text-base">Does it have to end?</span>
                            </h2>

                            <div className="space-y-1 text-nature-300 text-[10px] md:text-xs leading-relaxed mb-4 font-medium italic max-w-[85%] mx-auto">
                                <p>
                                    We remove over <strong>50,000 trees annually</strong>. &quot;It&apos;s rarely the tree&apos;s fault—usually, it&apos;s poor planning.&quot;
                                </p>
                                <p className="text-nature-100 font-bold not-italic">
                                    Before you calculate my ending, please consider the value of my life.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 w-full">
                                <button
                                    onClick={closePopup}
                                    className="w-full py-2.5 bg-nature-600 hover:bg-nature-500 text-white font-black rounded-xl transition-all shadow-lg shadow-nature-700/20 text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                                >
                                    <Leaf size={12} />
                                    Reconsider
                                </button>
                                <button
                                    onClick={closePopup}
                                    className="w-full py-2.5 bg-nature-900/50 hover:bg-white/5 text-nature-400 hover:text-nature-200 font-bold rounded-xl transition-all text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 group border border-white/5"
                                >
                                    <AlertCircle size={10} className="group-hover:text-red-400 transition-colors" />
                                    Necessary
                                </button>
                            </div>
                        </div>

                        {/* Close Button Pin */}
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-black/60 text-white/50 hover:text-white rounded-full transition-all border border-white/10"
                            aria-label="Close"
                        >
                            <X size={12} />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
