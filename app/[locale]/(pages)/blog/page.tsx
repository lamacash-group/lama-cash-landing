import {getBlogs} from "@/sanity/lib/client";
import {Link} from "@/app/i18n/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {urlFor} from "@/sanity/lib/image";
import Image from "next/image";
import {Metadata} from "next";

interface BlogPost {
    _id: string;
    title: string;
    description: string;
    slug: {
        current: string;
    };
    mainImage?: {
        asset?: {
            _ref: string;
        };
        alt?: string;
        [key: string]: unknown;
    };
    _createdAt: string;
    _updatedAt: string;
}

export async function generateMetadata({params}: {params: Promise<{ locale: string }>}): Promise<Metadata> {
    const {locale} = await params;

    const titles: Record<string, string> = {
        uk: 'Блог',
        ru: 'Блог',
        en: 'Blog'
    };

    const descriptions: Record<string, string> = {
        uk: 'Все про криптовалюти: новини, аналітика та гайди з безпечного обміну в офіційному блозі LAMA CASH.',
        ru: 'Все о криптовалютах: новости, аналитика и гайды по безопасному обмену в официальном блоге LAMA CASH.',
        en: 'All about cryptocurrencies: news, analytics, and guides for secure exchange on the official LAMA CASH blog.'
    };

    const canonical = locale === 'uk' ? 'https://lama-cash.com/blog' : `https://lama-cash.com/${locale}/blog`;

    return {
        title: titles[locale] || titles['uk'],
        description: descriptions[locale] || descriptions['uk'],
        alternates: {
            canonical,
            languages: {
                'uk': 'https://lama-cash.com/blog',
                'ru': 'https://lama-cash.com/ru/blog',
                'en': 'https://lama-cash.com/en/blog',
                'x-default': 'https://lama-cash.com/blog'
            }
        },
        openGraph: {
            title: titles[locale] || titles['uk'],
            description: descriptions[locale] || descriptions['uk'],
            url: canonical,
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[locale] || titles['uk'],
            description: descriptions[locale] || descriptions['uk'],
        },
    };
}

export default async function BlogPage({params}: {params: Promise<{locale: string}>}) {
    const {locale} = await params;
    setRequestLocale(locale);
    const blogs = await getBlogs(locale);
    const t = await getTranslations("Blog");

    return (
        <div className="min-h-screen bg-[rgba(230,230,230,1)] pt-20 px-7">
            <h1 className="text-4xl font-bold mb-10 text-center">{t('title')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
                {blogs.map((blog: BlogPost) => (
                    <div key={blog._id} className="bg-white p-6 rounded-lg border border-border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">

                        <div className="min-h-24 mb-4">
                            <h2 className="text-xl md:text-[23px] font-semibold uppercase text-foreground">
                                {blog.title}
                            </h2>
                        </div>

                        {blog.mainImage && (
                            <Image
                                width={600}
                                height={400}
                                src={urlFor(blog.mainImage).url()}
                                alt={blog.mainImage.alt || blog.title || "Blog cover"}
                                className="w-full h-70 object-cover rounded-md mb-4 shrink-0"
                            />
                        )}

                        <p className="mb-4 text-muted-foreground line-clamp-3 text-sm md:text-base">
                            {blog.description}
                        </p>

                        <div className="mt-auto pt-2">
                            <Link href={`/blog/${blog.slug.current}`} className="text-primary font-bold hover:underline text-sm uppercase">
                                {t('readMore')}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
