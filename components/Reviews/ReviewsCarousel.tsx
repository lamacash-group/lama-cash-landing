'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Review } from "@/sanity/lib/reviews";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from '@/components/ui/carousel';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: Props) {
    const [initialIndex, setInitialIndex] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [lightboxApi, setLightboxApi] = useState<CarouselApi>();

    const isOpen = initialIndex !== null;

    const handleOpen = (index: number) => {
        setInitialIndex(index);
        setCurrentIndex(index);
    };

    const handleClose = () => {
        setInitialIndex(null);
    };

    const onSelect = useCallback(() => {
        if (!lightboxApi) return;
        setCurrentIndex(lightboxApi.selectedScrollSnap());
    }, [lightboxApi]);

    useEffect(() => {
        if (!lightboxApi) return;
        lightboxApi.on("select", onSelect);
        return () => {
            lightboxApi.off("select", onSelect);
        };
    }, [lightboxApi, onSelect]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') lightboxApi?.scrollPrev();
            if (e.key === 'ArrowRight') lightboxApi?.scrollNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, lightboxApi]);

    if (!reviews?.length) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <DialogTrigger className="hidden" aria-hidden="true" tabIndex={-1} />

            {/* Основная лента отзывов */}
            <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                <CarouselContent className="-ml-3 py-4">
                    {reviews.map((review, index) => (
                        <CarouselItem
                            key={review._id}
                            className="pl-3 basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                        >
                            <button
                                type="button"
                                onClick={() => review.image && handleOpen(index)}
                                aria-label={`Посмотреть отзыв: ${review.title || index + 1}`}
                                className="group relative aspect-9/16 w-full overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer text-left"
                            >
                                {review.image && (
                                    <Image
                                        src={urlFor(review.image).width(800).auto('format').quality(80).url()}
                                        alt={review.title || 'Скриншот отзыва'}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 33vw, 20vw"
                                    />
                                )}
                                {/*<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">*/}
                                {/*    <span className="text-xs text-white/90 truncate">*/}
                                {/*        {review.title || 'Увеличить'}*/}
                                {/*    </span>*/}
                                {/*</div>*/}
                            </button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Лайтбокс */}
            <DialogContent
                className="max-w-[75vw] md:max-w-4xl h-[85vh] md:h-[92vh] bg-transparent border-none p-0 ring-0 shadow-none flex flex-col justify-center outline-none select-none"
                showCloseButton={false}
                onCloseAutoFocus={(e) => e.preventDefault()}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <Carousel
                        setApi={setLightboxApi}
                        opts={{
                            startIndex: initialIndex ?? 0,
                        }}
                        className="w-full h-full"
                    >
                        <CarouselContent className="h-full ml-0">
                            {reviews.map((review, i) => {
                                const isNearby = Math.abs(i - currentIndex) <= 1;

                                return (
                                    <CarouselItem
                                        key={`lightbox-${review._id}-${i}`}
                                        className="pl-0 h-full flex items-center justify-center"
                                    >
                                        {review.image && isNearby && (
                                            <div className="relative w-full h-[75vh] md:h-[82vh] max-w-sm sm:max-w-md mx-auto">
                                                <Image
                                                    src={urlFor(review.image).width(800).auto('format').quality(80).url()}
                                                    alt={review.title || 'Отзыв'}
                                                    fill
                                                    priority={i === initialIndex}
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 90vw, 500px"
                                                />
                                            </div>
                                        )}
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>

                    {/* Навигация (десктоп) */}
                    {reviews.length > 1 && (
                        <>
                            <Button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    lightboxApi?.scrollPrev();
                                }}
                                className="absolute left-2 md:left-4 z-50 px-4 py-4 h-auto rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition max-md:hidden"
                                aria-label="Предыдущий отзыв"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <Button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    lightboxApi?.scrollNext();
                                }}
                                className="absolute right-2 md:right-4 z-50 px-4 py-4 h-auto rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition max-md:hidden"
                                aria-label="Следующий отзыв"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </>
                    )}

                    {/* Счетчик снизу */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full pointer-events-none border border-white/10">
                        {currentIndex + 1} / {reviews.length}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}