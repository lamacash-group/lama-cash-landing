import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import groq from 'groq';
import { getAllExchangeSlugs } from '@/config/exchange-directions';
import { getAllCitySlugs } from '@/config/cities';

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
        { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
        { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/contacts', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
        { path: '/legal', priority: 0.5, changeFrequency: 'monthly' as const },
        { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
        { path: '/rates', priority: 0.8, changeFrequency: 'weekly' as const },
        { path: '/verify-manager', priority: 0.5, changeFrequency: 'monthly' as const },
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Static pages across all locales
    for (const page of staticPages) {
        for (const locale of locales) {
            const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
            const pagePath = page.path === '/' ? '' : page.path;
            const url = `${baseUrl}${localePrefix}${pagePath}`;

            sitemapEntries.push({
                url,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
                alternates: {
                    languages: {
                        uk: `${baseUrl}${pagePath}`,
                        ru: `${baseUrl}/ru${pagePath}`,
                        en: `${baseUrl}/en${pagePath}`,
                        'x-default': `${baseUrl}${pagePath}`,
                    },
                },
            });
        }
    }

    // Programmatic Exchange Directions across all locales
    const exchangeSlugs = getAllExchangeSlugs();
    for (const slug of exchangeSlugs) {
        for (const locale of locales) {
            const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
            const url = `${baseUrl}${localePrefix}/exchange/${slug}`;

            sitemapEntries.push({
                url,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
                alternates: {
                    languages: {
                        uk: `${baseUrl}/exchange/${slug}`,
                        ru: `${baseUrl}/ru/exchange/${slug}`,
                        en: `${baseUrl}/en/exchange/${slug}`,
                        'x-default': `${baseUrl}/exchange/${slug}`,
                    }
                }
            });
        }
    }

    // Programmatic City Pages across all locales
    const citySlugs = getAllCitySlugs();
    for (const slug of citySlugs) {
        for (const locale of locales) {
            const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
            const url = `${baseUrl}${localePrefix}/city/${slug}`;

            sitemapEntries.push({
                url,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
                alternates: {
                    languages: {
                        uk: `${baseUrl}/city/${slug}`,
                        ru: `${baseUrl}/ru/city/${slug}`,
                        en: `${baseUrl}/en/city/${slug}`,
                        'x-default': `${baseUrl}/city/${slug}`,
                    },
                },
            });
        }
    }

    // Dynamic Blog Posts across all locales
    try {
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
                    lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
                    changeFrequency: 'weekly',
                    priority: 0.8,
                });
            }
        }
    } catch {
        // Fallback gracefully if Sanity client fails in offline/build environments
    }

    return sitemapEntries;
}
