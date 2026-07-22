'use client'
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTrigger
} from "@/components/ui/dialog";
import {useTranslations} from "next-intl";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {ReactNode, useEffect, useMemo, useState} from "react";
import { urlFor } from '@/sanity/lib/image';
import {PortableText} from "@portabletext/react";
import Image from "next/image";


type BlogProps = {
    _id: string;
    title: string;
    description: string;
    content: React.ComponentProps<typeof PortableText>["value"];
}

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

const portableTextComponents = {
    types: {
        customImage: ({ value }: { value: CustomImageValue }) => {
            if (!value?.asset?._ref) {
                return null;
            }

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
        normal: ({ children }: PortableTextChildProps) => <p className="text-[rgba(23,23,23,1)] text-[11px] md:text-base font-rubik font-light leading-relaxed mb-2">{children}</p>,
        h3: ({ children }: PortableTextChildProps) => <h3 className="text-[rgba(23,23,23,1)] text-[11px] md:text-base font-rubik font-medium mt-4 mb-2 clear-both">{children}</h3>,
        h4: ({ children }: PortableTextChildProps) => <h4 className="text-lg font-bold text-[rgba(23,23,23,1)] mt-6 mb-3 clear-both">{children}</h4>,
    },
    marks: {
        strong: ({ children }: PortableTextChildProps) => <strong className="font-medium text-black">{children}</strong>,
        em: ({ children }: PortableTextChildProps) => <em className="italic text-gray-700">{children}</em>,
        uppercase: ({ children }: PortableTextChildProps) => <span className="uppercase">{children}</span>,
        lowercase: ({ children }: PortableTextChildProps) => <span className="lowercase">{children}</span>,
    }
};

export const BlogList = ({blogs}: { blogs: BlogProps[] }) => {

    const t = useTranslations("aria");

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const chunkedBlogs = useMemo(() => {
        const chunks = [];
        for (let i = 0; i < blogs.length; i += 2) {
            chunks.push(blogs.slice(i, i + 2));
        }
        return chunks;
    }, [blogs]);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        queueMicrotask(() => {
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap());
        });

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    if (!blogs || blogs.length === 0) return null;

    return (
        <div className="flex flex-col w-full bg-[rgba(240,240,240,1)] items-center justify-center pt-12 py-10 max-sm:py-7 max-sm:pt-4">

            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="m-0">
                    {chunkedBlogs.map((chunk, chunkIndex) => (

                        <CarouselItem key={chunkIndex} className={`px-7 basic-full flex justify-center`}>
                            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 md:gap-12 max-w-5xl w-full">
                                {chunk.map((blog, idx) => (
                                <div
                                    key={blog._id || idx}
                                    className={`flex flex-col gap-2 bg-[linear-gradient(180deg,#D4B4FE_0%,#E6E6E6_100%)] rounded-[14px] px-6 py-4 max-sm:px-3 max-sm:py-2 shadow-sm
                                    ${idx === 0 ? 'mt-16 max-sm:mt-6' : 'mb-16 max-sm:mb-6'}`}>
                                    <span
                                        className="text-2xl max-sm:text-[15px] font-rubik font-medium text-[rgba(23,23,23,1)]">
                                        {blog.title}
                                    </span>

                                    <p className="text-gray-800 grow text-base max-sm:text-[7px] font-rubik">
                                        {blog.description}
                                    </p>

                                    <div className="flex justify-end w-full mt-auto">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    className="text-[rgba(100,100,101,1)] text-sm max-sm:text-[6px] h-auto font-normal bg-transparent px-0 py-0 underline cursor-pointer hover:text-black">
                                                    {t('readAll')}
                                                </Button>
                                            </DialogTrigger>
                                            <DialogDescription className="sr-only">
                                                read the blog in full
                                            </DialogDescription>
                                            <DialogContent
                                                className="sm:max-w-150 bg-[linear-gradient(180deg,#D4B4FE_0%,#E6E6E6_100%)] rounded-xl max-h-[80vh] flex flex-col"
                                                closeButtonClass="hover:bg-transparent cursor-pointer"
                                            >
                                                {/*<DialogHeader>*/}
                                                {/*    <DialogTitle*/}
                                                {/*        className="text-xl pr-3 max-md:text-base font-rubik font-medium text-[rgba(23,23,23,1)] uppercase">*/}
                                                {/*        {blog.title}*/}
                                                {/*    </DialogTitle>*/}
                                                {/*</DialogHeader>*/}

                                                <div className="overflow-y-auto flex-1 max-md:scrollbar-hide pr-1">
                                                    <div className="text-xl pr-3 max-md:text-base font-rubik font-medium text-[rgba(23,23,23,1)] uppercase">
                                                        {blog.title}
                                                    </div>
                                                    {blog.content ? (
                                                        <PortableText
                                                            value={blog.content}
                                                            components={portableTextComponents}
                                                        />
                                                    ) : null}
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {count > 1 && <div className="flex justify-center gap-2 mt-8 max-sm:mt-4">
                {Array.from({length: count}).map((_, i) => (
                    <button
                        key={i}
                        className={`w-2.5 h-2.5 max-sm:w-1.5 max-sm:h-1.5 rounded-full transition-colors ${
                            i === current ? "bg-[rgba(23,23,23,1)]" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => api?.scrollTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>}
        </div>
    );
};