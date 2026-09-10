import {MetadataRoute} from 'next';
import {client} from '@/sanity/lib/client';
import groq from 'groq';

type BlogSlug = {
    slug: {
        current: string;
    };
    _updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://lama-cash.com';
    const locales = ['uk', 'ru', 'en'];
    const defaultLocale = 'uk';

    const staticPages = [
        {path: '/', priority: 1.0, changeFrequency: 'daily' as const},
        {path: '/about', priority: 0.8, changeFrequency: 'monthly' as const},
        {path: '/contacts', priority: 0.8, changeFrequency: 'monthly' as const},
        {path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const},
        {path: '/legal', priority: 0.5, changeFrequency: 'monthly' as const},
        {path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const},
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    for (const page of staticPages) {
        for (const locale of locales) {
            const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
            const url = `${baseUrl}${localePrefix}${page.path === '/' ? '' : page.path}`;

            sitemapEntries.push({
                url,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
            });
        }
    }

    const blogQuery = groq`*[_type == "blog" && defined(slug.current)] {
        slug,
        _updatedAt
    }`;
    const blogPosts = await client.fetch<BlogSlug[]>(blogQuery);

    for (const post of blogPosts) {
        for (const locale of locales) {
            const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
            const url = `${baseUrl}${localePrefix}/blog/${post.slug.current}`;

            sitemapEntries.push({
                url,
                lastModified: new Date(post._updatedAt) || new Date(),
                changeFrequency: 'weekly',
                priority: 0.6,
            });
        }
    }

    return sitemapEntries;
}
