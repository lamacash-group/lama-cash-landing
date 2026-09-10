'use client'
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {useEffect, useMemo, useState} from "react";
import {Link} from "@/app/i18n/navigation";
import {PortableText} from "@portabletext/react";

type BlogProps = {
    _id: string;
    title: string;
    description: string;
    slug: { current: string };
    content: React.ComponentProps<typeof PortableText>["value"];
}

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
                                        {blog.slug?.current ? (
                                            <Button
                                                asChild
                                                className="text-[rgba(100,100,101,1)] text-sm max-sm:text-[6px] h-auto font-normal bg-transparent px-0 py-0 underline cursor-pointer hover:text-black">
                                                <Link href={`/blog/${blog.slug.current}`}>
                                                    {t('readAll')}
                                                </Link>
                                            </Button>
                                        ) : null}
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
