import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ChevronRight, Clock, Calendar, User, Info, AlertTriangle } from 'lucide-react';
import AdSlot from '@/components/monetization/AdSlot';
import { Metadata } from 'next';
import { articles } from '@/lib/articles';

interface PageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const title = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const url = `https://arborcalc.io/articles/${params.slug}`;

    return {
        title: `${title} | Tree Removal Expert Guide 2026`,
        description: `Professional insights on ${title.toLowerCase()}. Comprehensive arborist guide for homeowners.`,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'article',
            publishedTime: '2026-02-05T00:00:00.000Z',
            authors: ['Arboretics Expert Team'],
            url: url,
            images: [{
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: title
            }]
        }
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const filePath = path.join(process.cwd(), 'app', 'articles', `${params.slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');

    // Related articles logic
    const related = articles.filter(a => a.slug !== params.slug).slice(0, 4);

    return (
        <article className="min-h-screen bg-nature-950">
            {/* Article Header */}
            <header className="relative py-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-nature-800/20 blur-[150px] -translate-x-1/2" />
                </div>

                <div className="max-w-4xl mx-auto px-6">
                    <Link href="/articles" className="text-nature-500 hover:text-white transition-colors flex items-center gap-2 mb-12 text-sm font-medium">
                        <ChevronRight size={14} className="rotate-180" /> All Articles
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                        {params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-[10px] text-nature-500 font-mono uppercase tracking-widest border-t border-white/5 pt-8">
                        <div className="flex items-center gap-2"><User size={12} className="text-nature-700" /> By Arboretics Team</div>
                        <div className="flex items-center gap-2"><Calendar size={12} className="text-nature-700" /> Updated Feb 2026</div>
                        <div className="flex items-center gap-2"><Clock size={12} className="text-nature-700" /> 8 Min Read</div>
                    </div>

                    <AdSlot id="article-header-top" className="mt-8 h-24" />
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8 prose prose-invert prose-nature max-w-none prose-headings:text-nature-100 prose-p:text-nature-300 prose-li:text-nature-300 prose-strong:text-gold-400 prose-a:text-nature-400 hover:prose-a:text-white transition-colors">
                    <div className="glass-nature p-6 rounded-2xl mb-12 border-l-4 border-l-nature-500">
                        <p className="text-sm italic m-0">
                            <Info size={16} className="inline mr-2 text-nature-500" />
                            <strong>Note:</strong> This guide has been verified by our senior arboricultural consultant for accuracy under 2025-2026 safety standards.
                        </p>
                    </div>

                    <MDXRemote source={source} />

                    <AdSlot id="article-content-middle" className="my-12 h-64" />

                    <footer className="mt-20 pt-8 border-t border-white/5">
                        <div className="glass-nature p-8 rounded-3xl text-center">
                            <h3 className="text-xl font-bold mb-4">Need an accurate estimate?</h3>
                            <p className="text-nature-400 text-sm mb-6">Use our multi-region calculator to get baseline pricing in seconds.</p>
                            <Link href="/#calculator" className="inline-block px-8 py-3 bg-nature-600 hover:bg-nature-500 text-white font-bold rounded-xl transition-all">
                                Launch Calculator
                            </Link>
                        </div>
                    </footer>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="sticky top-8 space-y-8">
                        <div className="glass-nature p-6 rounded-3xl">
                            <h4 className="text-xs font-black uppercase tracking-widest text-nature-500 mb-6">Related Guides</h4>
                            <div className="space-y-4">
                                {related.map(art => (
                                    <Link
                                        key={art.slug}
                                        href={`/articles/${art.slug}`}
                                        className="block group"
                                    >
                                        <p className="text-sm font-bold text-nature-200 group-hover:text-gold-400 transition-colors mb-1">{art.title}</p>
                                        <div className="flex items-center gap-1 text-[10px] text-nature-600 font-mono">
                                            Read Guide <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <AdSlot id="article-sidebar" className="h-[400px]" />

                        <div className="bg-nature-900/20 p-6 rounded-3xl border border-nature-800/50">
                            <div className="flex items-center gap-3 text-gold-500 mb-4">
                                <AlertTriangle size={20} />
                                <span className="text-xs font-bold uppercase tracking-tighter">Emergency Note</span>
                            </div>
                            <p className="text-[11px] leading-relaxed text-nature-400 italic">
                                If a tree is touching a power line or has split during a storm, do not approach. Call your local emergency services or utility provider immediately.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    );
}
