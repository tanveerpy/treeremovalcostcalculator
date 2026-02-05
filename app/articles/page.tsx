import Link from "next/link";
import { ChevronRight, Clock, User } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expert Arborist Guides & Resources | ArborCalc",
    description: "Comprehensive guides on tree removal costs, safety, permits, and regulations. Expert advice for homeowners in USA, UK, and Canada.",
    alternates: {
        canonical: "/articles",
    },
};

const articles = [
    { slug: "why-tree-removal-costs-vary", title: "Why Tree Removal Costs Vary", description: "Learn the 7 major factors arborists use to quote your job." },
    { slug: "tree-removal-safety", title: "Tree Removal Safety Guide", description: "Why attempting a DIY removal can be a lethal mistake." },
    { slug: "usa-tree-permits", title: "USA Permit Laws", description: "Understanding Federal and State regulations for tree removal." },
    { slug: "uk-tree-surgeon-costs", title: "UK Tree Surgeon Prices 2025", description: "A detailed breakdown of GBP pricing and Council rules." },
    { slug: "canada-tree-removal", title: "Canada Regional Pricing", description: "Regulations and costs from BC to Toronto and the Prairies." },
    { slug: "identifying-hazardous-trees", title: "Hazard Detection", description: "How to spot rot, disease, and structural failure before it's too late." },
    { slug: "importance-of-stump-grinding", title: "Stump Grinding 101", description: "Why leaving a stump is a risk to your lawn's health and safety." },
    { slug: "crane-assisted-tree-removal", title: "Crane Removals", description: "When surgical precision is required for restricted spaces." },
    { slug: "power-lines-and-tree-removal", title: "Power Line Safety", description: "Navigating the legal and safety risks of trees near wires." },
    { slug: "hiring-a-certified-arborist", title: "Hiring Checklist", description: "Crucial questions to ask before signing a contract." },
    { slug: "dead-vs-healthy-tree-cost", title: "Dead vs. Healthy Cost", description: "Why dead trees often cost 50% more to remove." },
    { slug: "fallen-tree-insurance-claims", title: "Insurance Guide", description: "How to handle storm damage and maximize your claim." },
];

export default function ArticlesPage() {
    return (
        <main className="min-h-screen p-8 md:p-24 bg-nature-950">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <Link href="/" className="text-nature-400 hover:text-white transition-colors flex items-center gap-2 mb-8">
                        <ChevronRight size={16} className="rotate-180" /> Back to Calculator
                    </Link>
                    <h1 className="text-5xl font-extrabold gradient-text mb-4">Expert Arborist Guides</h1>
                    <p className="text-nature-400 text-lg max-w-2xl">
                        Our comprehensive knowledge base helps you make informed decisions about your property’s trees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="glass-nature p-8 rounded-3xl group transition-all hover:border-nature-500/50 hover:bg-nature-900/30 flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-gold-400 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-nature-500 text-sm leading-relaxed mb-6">
                                    {article.description}
                                </p>
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-nature-600 font-mono tracking-tighter uppercase border-t border-white/5 pt-4">
                                <span className="flex items-center gap-1"><Clock size={10} /> 8 min read</span>
                                <span className="flex items-center gap-1"><User size={10} /> Expert Authored</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
