import Link from "next/link";
import { TreePine, Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-nature-950 border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2">
                        <TreePine className="text-nature-500" size={24} />
                        <span className="font-bold text-xl text-white italic">ArborCalc</span>
                    </Link>
                    <p className="text-sm text-nature-500 leading-relaxed">
                        Revolutionizing the way homeowners estimate tree removals. Data-driven, location-aware, and expert-verified.
                    </p>
                    <div className="flex items-center gap-4 text-nature-600">
                        <Facebook size={18} className="hover:text-nature-400 cursor-pointer" />
                        <Twitter size={18} className="hover:text-nature-400 cursor-pointer" />
                        <Instagram size={18} className="hover:text-nature-400 cursor-pointer" />
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-nature-500">
                        <li><Link href="/#calculator" className="hover:text-white transition-colors">Tree Calculator</Link></li>
                        <li><Link href="/articles" className="hover:text-white transition-colors">Expert Blog</Link></li>
                        <li><Link href="/articles/hiring-a-certified-arborist" className="hover:text-white transition-colors">Hire an Arborist</Link></li>
                        <li><Link href="/articles/tree-removal-safety" className="hover:text-white transition-colors">Safety Protocols</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Regions Covered</h4>
                    <ul className="space-y-4 text-sm text-nature-500">
                        <li>USA & Federal Compliance</li>
                        <li>UK & Council Regulations</li>
                        <li>Canada Municipal Bylaws</li>
                        <li>European Union (Beta)</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Contact & Support</h4>
                    <p className="text-sm text-nature-500 mb-6">Found a bug or have a feature request?</p>
                    <Link href="mailto:support@arborcalc.io" className="flex items-center gap-2 text-gold-500 font-bold hover:underline">
                        <Mail size={16} /> support@arborcalc.io
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] text-nature-700 uppercase tracking-widest">
                    © 2026 ArborCalc. All rights reserved. Professional Arboriculture Estimates.
                </p>
                <div className="flex gap-6 text-[10px] text-nature-700 uppercase tracking-widest">
                    <Link href="/privacy" className="hover:text-nature-400">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-nature-400">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
