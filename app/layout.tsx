import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConservationPopup from "@/components/ui/ConservationPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://arborcalc.io"),
    title: "Tree Removal Cost Calculator | Professional Arborist Estimates 2025",
    description: "Calculate tree removal costs in USA, UK, and Canada instantly. Accurate estimates based on height, diameter, species, and hazardous conditions. Professional arborist guide.",
    keywords: ["tree removal cost", "tree removal calculator", "arborist estimate", "usa tree removal", "uk tree surgery cost", "canada tree removal prices"],
    authors: [{ name: "ArborCalc Expert Editorial" }],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Tree Removal Cost Calculator",
        description: "Get instant, professional tree removal estimates.",
        type: "website",
        url: "https://arborcalc.io",
        siteName: "ArborCalc",
        locale: "en_US",
        images: [
            {
                url: "/og-image.png", // Ensure this exists or use a generic one
                width: 1200,
                height: 630,
                alt: "ArborCalc Tree Removal Cost Calculator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tree Removal Cost Calculator",
        description: "Get instant, professional tree removal estimates.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "ArborCalc Tree Removal Cost Calculator",
        "url": "https://arborcalc.io",
        "description": "Calculate tree removal costs in USA, UK, and Canada instantly based on arborist metrics.",
        "applicationCategory": "Tool, Calculator",
        "operatingSystem": "Web-based",
        "author": {
            "@type": "Organization",
            "name": "ArborCalc"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1250"
        }
    };

    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.className} min-h-screen selection:bg-nature-500/30 bg-nature-950`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Header />
                <ConservationPopup />
                {children}
                <Footer />
            </body>
        </html>
    );
}
