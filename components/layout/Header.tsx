"use client";

import Link from "next/link";
import { TreePine } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-nature-600 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                        <TreePine size={20} />
                    </div>
                    <span className="font-bold text-lg tracking-tighter text-nature-100 italic">Arbor<span className="text-nature-500">Calc</span></span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#calculator" className="text-sm font-medium text-nature-400 hover:text-white transition-colors">
                        Calculator
                    </Link>
                    <Link href="/articles" className="text-sm font-medium text-nature-400 hover:text-white transition-colors">
                        Expert Guides
                    </Link>
                    <Link href="/articles/why-tree-removal-costs-vary" className="text-sm font-medium text-nature-400 hover:text-white transition-colors">
                        Pricing FAQ
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/#calculator" className="px-4 py-2 bg-nature-600/20 text-nature-400 hover:text-white border border-nature-600/30 rounded-lg text-xs font-bold transition-all">
                        Get Quote
                    </Link>
                </div>
            </div>
        </header>
    );
}
