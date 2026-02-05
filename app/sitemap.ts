import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://arborcalc.io';

    const articles = [
        "why-tree-removal-costs-vary",
        "tree-removal-safety",
        "usa-tree-permits",
        "uk-tree-surgeon-costs",
        "canada-tree-removal",
        "identifying-hazardous-trees",
        "importance-of-stump-grinding",
        "crane-assisted-tree-removal",
        "power-lines-and-tree-removal",
        "hiring-a-certified-arborist",
        "dead-vs-healthy-tree-cost",
        "fallen-tree-insurance-claims",
    ];

    const articleUrls = articles.map((slug) => ({
        url: `${baseUrl}/articles/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...articleUrls,
    ];
}
