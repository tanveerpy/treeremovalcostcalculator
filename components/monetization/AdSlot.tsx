"use client";

interface AdSlotProps {
    id: string;
    format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
    className?: string;
}

export default function AdSlot({ id, format = 'auto', className = "" }: AdSlotProps) {
    // In a real environment, this would integrate with Google AdSense script
    // For the autonomous build, we provide the layout-safe placeholder
    return (
        <div
            className={`bg-nature-900/10 border border-white/5 rounded-xl flex flex-col items-center justify-center overflow-hidden min-h-[100px] md:min-h-[250px] ${className}`}
            aria-hidden="true"
        >
            <p className="text-[10px] text-nature-700 uppercase tracking-tighter mb-2">Advertisement</p>
            <div className="w-full h-full flex items-center justify-center text-nature-800 text-xs italic">
                Monetization Slot: {id}
            </div>
        </div>
    );
}
