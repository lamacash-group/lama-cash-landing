import {getBlogBySlug} from "@/sanity/lib/client";
import {PortableText} from "@portabletext/react";
import {Link} from "@/app/i18n/navigation";
import {getLocale, getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import {ReactNode} from "react";
import Image from "next/image";
import { urlFor } from '@/sanity/lib/image';
import {Metadata} from "next";

// --- ТИПЫ ДЛЯ SANITY БЛОКОВ ---
interface CustomImageValue {
    asset?: { _ref: string };
    layout?: string;
    alt?: string;
}

interface StatItem {
    number: string;
    text: string;
}

interface StatsColumnsValue {
    columns?: StatItem[];
}

interface ImageWithQuoteValue {
    image?: { asset?: { _ref: string } };
    quote?: string;
    imagePosition?: string;
}

interface PortableTextChildProps {
    children?: ReactNode;
}

type Props = {
    params: Promise<{ locale: string, slug: string }>
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;

    const blog = await getBlogBySlug(slug, locale);

    if (!blog) {
        return { title: 'Not Found' };
    }

    return {
        title: blog.title,
        description: blog.description || 'Блог LAMA CASH',
        openGraph: {
            title: blog.title,
            description: blog.description,
            images: blog.mainImage ? [urlFor(blog.mainImage).url()] : [],
        },
    };
}

const portableTextComponents = {
    types: {
        customImage: ({ value }: { value: CustomImageValue }) => {
            if (!value?.asset?._ref) return null;

            const layout = value.layout || 'full';
            let imgClasses = "rounded-[14px] object-cover mb-4 ";
            let wrapperClasses = "my-4 ";

            switch (layout) {
                case 'floatRight':
                    wrapperClasses += "float-right w-1/2 md:w-[40%] ml-6 mb-4 mt-2";
                    imgClasses += "w-full h-auto";
                    break;
                case 'floatLeft':
                    wrapperClasses += "float-left w-1/2 md:w-[40%] mr-6 mb-4 mt-2";
                    imgClasses += "w-full h-auto";
                    break;
                case 'center':
                    wrapperClasses += "flex justify-center w-full";
                    imgClasses += "w-1/2 md:w-[60%] h-auto";
                    break;
                case 'full':
                default:
                    wrapperClasses += "w-full";
                    imgClasses += "w-full h-auto";
                    break;
            }

            return (
                <div className={wrapperClasses}>
                    <Image
                        width={600}
                        height={600}
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog image"}
                        className={imgClasses}
                    />
                </div>
            )
        },
        statsColumns: ({ value }: { value: StatsColumnsValue }) => {
            if (!value?.columns || value.columns.length === 0) return null;

            return (
                <div className={`grid gap-4 w-full justify-around`}
                     style={{ gridTemplateColumns: `repeat(${value.columns.length}, minmax(0, max-content))` }}
                >
                    {value.columns.map((col: StatItem, index: number) => (
                        <div key={index} className="flex flex-col font-rubik items-center justify-center text-center">
                            <span className="text-[13px] md:text-lg font-medium text-[rgba(23,23,23,1)]">
                                {col.number}
                            </span>
                            <span className="text-[11px] md:text-base font-light text-[rgba(23,23,23,1)]">
                                {col.text}
                            </span>
                        </div>
                    ))}
                </div>
            );
        },
        imageWithQuote: ({ value }: { value: ImageWithQuoteValue }) => {
            if (!value?.image?.asset?._ref || !value?.quote) return null;

            return (
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-8 w-full clear-both">
                    {value.imagePosition === 'left' && (
                        <div className="w-full md:w-[45%] shrink-0">
                            <Image
                                width={500}
                                height={500}
                                src={urlFor(value.image).url()}
                                alt="Quote image"
                                className="w-full h-auto rounded-[14px] object-cover"
                            />
                        </div>
                    )}

                    <div className="flex-1 w-full">
                        <p className="text-[rgba(23,23,23,1)] text-[13px] md:text-base font-rubik italic font-light leading-relaxed">
                            «{value.quote}»
                        </p>
                    </div>

                    {value.imagePosition !== 'left' && (
                        <div className="w-full md:w-[45%] shrink-0">
                            <Image
                                width={500}
                                height={500}
                                src={urlFor(value.image).url()}
                                alt="Quote image"
                                className="w-full h-auto rounded-[14px] object-cover"
                            />
                        </div>
                    )}
                </div>
            );
        }
    },
    block: {
        normal: ({ children }: PortableTextChildProps) => <p className="text-[rgba(23,23,23,1)] text-base md:text-lg font-rubik font-light leading-relaxed mb-2">{children}</p>,
        h3: ({ children }: PortableTextChildProps) => <h3 className="text-[rgba(23,23,23,1)] text-base md:text-lg font-rubik font-medium mt-4 mb-2 clear-both">{children}</h3>,
        h4: ({ children }: PortableTextChildProps) => <h4 className="text-lg font-bold text-[rgba(23,23,23,1)] mt-6 mb-3 clear-both">{children}</h4>,
    },
    marks: {
        strong: ({ children }: PortableTextChildProps) => <strong className="font-medium text-black">{children}</strong>,
        em: ({ children }: PortableTextChildProps) => <em className="italic text-gray-700">{children}</em>,
        uppercase: ({ children }: PortableTextChildProps) => <span className="uppercase">{children}</span>,
        lowercase: ({ children }: PortableTextChildProps) => <span className="lowercase">{children}</span>,
    }
};

export default async function BlogPostPage({params}:Props) {
    const {locale, slug} = await params;
    const blog = await getBlogBySlug(slug, locale);
    const t = await getTranslations("Blog");

    if (!blog) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-muted/30 pt-20 px-7 pb-10">
            <div className="max-w-3xl mx-auto">
                <Link href={`/blog`} className="text-primary mb-8 inline-block hover:underline font-bold uppercase text-sm">
                    ← {t('backToBlog')}
                </Link>
                <div className="bg-card p-8 rounded-lg border border-border shadow-xl">
                    <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
                    <div className="max-w-none">
                        <PortableText
                            value={blog.content}
                            components={portableTextComponents}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}
