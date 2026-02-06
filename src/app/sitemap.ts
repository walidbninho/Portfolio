import { Metadata, Route } from 'next';

export default function sitemap(): Metadata['sitemap'] { // Actually standard return type is MetadataRoute.Sitemap
    return [
        {
            url: 'https://walid-aero.me',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://walid-aero.me/resume',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://walid-aero.me/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://walid-aero.me/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];
}
