'use client';

import React from 'react';
import Image from 'next/image';
import {urlFor} from '@/sanity/lib/image';
import {Review} from "@/sanity/lib/reviews";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from '@/components/ui/carousel';

interface Props {
    reviews: Review[];
}

export default function ReviewsCarousel({reviews}: Props) {
    return (
        <Carousel opts={{align: "center", dragFree: true}} className="cursor-pointer">
            <CarouselContent>
                {reviews.map((review) => (
                    <CarouselItem key={review._id} className="basis-[40%] sm:basis-1/3 md:basis-1/4">
                        <div
                            className="relative aspect-9/16 w-full overflow-hidden rounded-xl border border-white/20 bg-neutral-900 shadow-xl">
                            {review.image && (
                                <Image
                                    src={urlFor(review.image).width(400).url()}
                                    alt={review.title || 'Review'}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
