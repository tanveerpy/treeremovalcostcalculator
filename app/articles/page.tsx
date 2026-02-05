import Link from "next/link";
import { ChevronRight, Clock, User } from "lucide-react";
import { Metadata } from "next";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
    title: "Expert Arborist Guides & Resources | ArborCalc",
    description: "Comprehensive guides on tree removal costs, safety, permits, and regulations. Expert advice for homeowners in USA, UK, and Canada.",
    alternates: {
        canonical: "/articles",
    },
};

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
