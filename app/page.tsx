import CalculatorContainer from "@/components/calculator/CalculatorContainer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-nature-800/20 blur-[120px] rounded-full" />
                <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-gold-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
                <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Tree Removal Cost Calculator&nbsp;
                    <code className="font-bold">v1.1</code>
                </p>
            </div>

            <div className="relative flex flex-col items-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 gradient-text py-2">
                    Precision Tree Removal Estimates
                </h1>
                <p className="text-nature-200 text-lg md:text-xl text-center max-w-2xl mb-12 px-4">
                    Get professional, location-aware pricing for USA, UK, and Canada in seconds.
                    The most comprehensive tool for homeowners and property managers.
                </p>
            </div>

            {/* Main Tool Section */}
            <section id="calculator" className="w-full max-w-7xl mx-auto mb-32">
                <CalculatorContainer />
            </section>

            {/* Features Grid */}
            <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-32 lg:grid-cols-4 lg:text-left gap-4 mb-32">
                <div className="glass-nature p-6 rounded-2xl group transition-all hover:border-nature-500/50">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-gold-400 transition-colors">
                        Multi-Region
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-70">
                        Switch between USA, UK, and Canada with local currency and labor rates.
                    </p>
                </div>

                <div className="glass-nature p-6 rounded-2xl group transition-all hover:border-nature-500/50">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-gold-400 transition-colors">
                        Species Aware
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-70">
                        Calculates cost differences for Oak, Maple, Pine, and more.
                    </p>
                </div>

                <div className="glass-nature p-6 rounded-2xl group transition-all hover:border-nature-500/50">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-gold-400 transition-colors">
                        Risk Factor
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-70">
                        Adjusts for power lines, building proximity, and hazardous rot.
                    </p>
                </div>

                <div className="glass-nature p-6 rounded-2xl group transition-all hover:border-nature-500/50">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-gold-400 transition-colors">
                        Expert Content
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-70">
                        Includes 12+ expert articles on tree care and removal safety.
                    </p>
                </div>
            </div>
        </main>
    );
}
